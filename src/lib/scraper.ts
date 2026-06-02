/* eslint-disable @typescript-eslint/no-explicit-any */
import { chromium } from 'playwright';
import { Job } from './db';

// Helper to convert Draft-JS JSON format into clean plain text
export function formatDraftJsToText(jsonStr: string | null | undefined): string | null {
  if (!jsonStr) return null;
  try {
    const data = JSON.parse(jsonStr);
    if (!data || !data.blocks || !Array.isArray(data.blocks)) return null;
    
    let text = '';
    let listCounter = 1;
    
    for (let i = 0; i < data.blocks.length; i++) {
      const block = data.blocks[i];
      const blockText = block.text ? block.text.trim() : '';
      
      if (!blockText) {
        text += '\n';
        continue;
      }
      
      const type = block.type || 'unstyled';
      
      if (type === 'unordered-list-item') {
        text += `• ${blockText}\n`;
        listCounter = 1; // reset ordered list counter
      } else if (type === 'ordered-list-item') {
        text += `${listCounter}. ${blockText}\n`;
        listCounter++;
      } else {
        // If the previous block was a list item, add a spacer before the next paragraph
        const prevBlock = i > 0 ? data.blocks[i - 1] : null;
        if (prevBlock && (prevBlock.type === 'unordered-list-item' || prevBlock.type === 'ordered-list-item')) {
          text += '\n';
        }
        text += `${blockText}\n\n`;
        listCounter = 1; // reset ordered list counter
      }
    }
    
    return text.trim();
  } catch (e) {
    console.error('Failed to parse Draft-JS JSON:', e);
    return null;
  }
}

// Format education level code to human-readable form
function formatEducation(level: string | null | undefined): string | null {
  if (!level) return null;
  const normalized = level.toUpperCase();
  switch (normalized) {
    case 'PRIMARY_SCHOOL':
    case 'PRIMARY':
      return 'Min. SD';
    case 'SECONDARY_SCHOOL':
    case 'SECONDARY':
      return 'Min. SMP';
    case 'HIGH_SCHOOL':
      return 'Min. SMA/SMK';
    case 'DIPLOMA':
    case 'ASSOCIATE_DEGREE':
      return 'Min. D3';
    case 'COLLEGE_DEGREE':
      return 'Min. D3/S1';
    case 'BACHELOR_DEGREE':
    case 'BACHELOR':
      return 'Min. S1';
    case 'MASTER_DEGREE':
    case 'MASTER':
      return 'Min. S2';
    case 'DOCTORATE_DEGREE':
    case 'DOCTORATE':
      return 'Min. S3';
    default:
      return level
        .split('_')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(' ');
  }
}

// Format experience years to human-readable form
function formatExperience(min: number | null | undefined, max: number | null | undefined): string | null {
  if (min === undefined || min === null) {
    if (max === undefined || max === null) return null;
    return `Maks. ${max} tahun`;
  }
  if (max === undefined || max === null) {
    if (min === 0) return 'Fresh graduate';
    return `Min. ${min} tahun`;
  }
  if (min === max) {
    return `${min} tahun`;
  }
  return `${min}–${max} tahun`;
}

// Format employment type code to human-readable form
function formatEmploymentType(type: string | null | undefined): string | null {
  if (!type) return null;
  const normalized = type.toUpperCase();
  switch (normalized) {
    case 'FULL_TIME':
      return 'Full-time';
    case 'PART_TIME':
      return 'Part-time';
    case 'CONTRACT':
      return 'Contract';
    case 'INTERNSHIP':
      return 'Internship';
    case 'FREELANCE':
    case 'PROJECT_BASED':
      return 'Freelance';
    default:
      return type
        .split('_')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join('-');
  }
}

// Resolve category from cache hierarchy
function resolveCategory(job: any, cache: any): string | null {
  if (!job.hierarchicalJobCategory || !job.hierarchicalJobCategory.__ref) {
    return null;
  }
  
  let currentRef = job.hierarchicalJobCategory.__ref;
  let catName: string | null = null;
  
  // Traverse up parents to get the top-level parent category
  while (currentRef) {
    const catObj = cache[currentRef];
    if (!catObj) break;
    
    catName = catObj.name; // Keep tracking the category name
    
    if (catObj.parents && catObj.parents.length > 0) {
      currentRef = catObj.parents[0].__ref;
    } else {
      break;
    }
  }
  
  return catName;
}

// Resolve location from cache hierarchy
function resolveLocation(job: any, cache: any): string | null {
  if (!job.location || !job.location.__ref) {
    return null;
  }
  
  const locObj = cache[job.location.__ref];
  if (!locObj) return null;
  
  let cityName = locObj.name;
  
  // If the location is a district (level 4), try to fetch its parent city (level 3)
  if (locObj.level === 4 && locObj.parents && locObj.parents.length > 0) {
    const parentObj = cache[locObj.parents[0].__ref];
    if (parentObj) {
      cityName = parentObj.name;
    }
  }
  
  return cityName;
}

// Format salary object to human-readable form
function formatSalary(job: any, cache: any): string | null {
  if (!job.shouldShowSalary || !job.salaries || job.salaries.length === 0) {
    return null;
  }
  
  const salRef = job.salaries[0].__ref;
  const salObj = cache[salRef];
  if (!salObj || !salObj.minAmount || !salObj.maxAmount) {
    return null;
  }
  
  const currency = salObj.CurrencyCode === 'IDR' ? 'Rp' : (salObj.CurrencyCode || '');
  const minVal = salObj.minAmount / 1000000;
  const maxVal = salObj.maxAmount / 1000000;
  
  const minStr = Number.isInteger(minVal) ? minVal.toString() : minVal.toFixed(1);
  const maxStr = Number.isInteger(maxVal) ? maxVal.toString() : maxVal.toFixed(1);
  
  const suffix = salObj.salaryMode === 'MONTH' ? '/bulan' : '';
  return `${currency}${minStr}–${maxStr} juta${suffix}`;
}

export async function scrapeGlintsJobs(companyUrl: string): Promise<Job[]> {
  console.log(`Starting scraper for company URL: ${companyUrl}`);
  
  // Extract company ID from URL
  const match = companyUrl.match(/companies\/[^/]+\/([a-f0-9-]{36})/i);
  const companyId = match ? match[1] : '6d04764a-0eb3-4e09-8dae-3849970315ea';
  const targetCompanyRef = `Company:${companyId}`;
  
  console.log(`Resolved company ID: ${companyId}`);
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();
  
  const scrapedJobs: Job[] = [];
  
  try {
    console.log(`Navigating to company profile...`);
    const response = await page.goto(companyUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
    
    if (!response || response.status() !== 200) {
      throw new Error(`Failed to load company profile, status: ${response ? response.status() : 'none'}`);
    }
    
    // Wait for the tab and cards to render
    await page.waitForTimeout(5000);
    
    const nextDataText = await page.evaluate(() => {
      const el = document.getElementById('__NEXT_DATA__');
      return el ? el.textContent : null;
    });
    
    if (!nextDataText) {
      throw new Error('__NEXT_DATA__ element not found on company page');
    }
    
    const data = JSON.parse(nextDataText);
    const cache = data.props.apolloCache || {};
    
    // Find all Job keys belonging to this company
    const jobKeys = Object.keys(cache).filter(k => k.startsWith('Job:'));
    const companyJobs = jobKeys
      .map(k => cache[k])
      .filter(job => job.company && job.company.__ref === targetCompanyRef);
    
    console.log(`Found ${companyJobs.length} active jobs listed for this company.`);
    
    // For each job, fetch details (e.g. description) from its detail page
    for (const job of companyJobs) {
      const sourceJobId = job.id;
      const title = job.title;
      const status = job.status || 'OPEN';
      const isActive = status === 'OPEN';
      
      const employmentType = formatEmploymentType(job.type);
      const location = resolveLocation(job, cache);
      const category = resolveCategory(job, cache);
      const salary = formatSalary(job, cache);
      const experience = formatExperience(job.minYearsOfExperience, job.maxYearsOfExperience);
      const education = formatEducation(job.educationLevel);
      
      console.log(`Scraping detail for job: ${title} (${sourceJobId})`);
      
      let description: string | null = null;
      let applyUrl = `https://glints.com/id/en/opportunities/jobs/c/${sourceJobId}`; // Fallback URL
      
      // Fetch details from the job opportunities page
      try {
        const detailUrl = `https://glints.com/id/en/opportunities/jobs/c/${sourceJobId}`;
        const detailPage = await context.newPage();
        
        await detailPage.goto(detailUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
        
        // Wait 2s for page dynamic scripts
        await detailPage.waitForTimeout(2000);
        
        // The page redirects to the correct slug automatically. Save this URL as applyUrl.
        applyUrl = detailPage.url();
        
        const detailNextDataText = await detailPage.evaluate(() => {
          const el = document.getElementById('__NEXT_DATA__');
          return el ? el.textContent : null;
        });
        
        if (detailNextDataText) {
          const detailData = JSON.parse(detailNextDataText);
          const detailJob = detailData.props?.pageProps?.initialData?.data;
          if (detailJob && detailJob.descriptionJsonString) {
            description = formatDraftJsToText(detailJob.descriptionJsonString);
          }
        }
        
        await detailPage.close();
      } catch (err) {
        console.error(`Failed to fetch detail for job ${title}:`, err);
      }
      
      scrapedJobs.push({
        title,
        description,
        employmentType,
        location,
        category,
        salary,
        experience,
        education,
        applyUrl,
        source: 'glints',
        sourceJobId,
        isActive,
        lastSyncedAt: new Date()
      });
    }
  } catch (err) {
    console.error(`Scraping error:`, err);
    throw err;
  } finally {
    await browser.close();
  }
  
  return scrapedJobs;
}
