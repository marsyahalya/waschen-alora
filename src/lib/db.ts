import fs from 'fs';
import path from 'path';

export type Job = {
  title: string;
  description: string | null;
  employmentType: string | null;
  location: string | null;
  category: string | null;
  salary: string | null;
  experience: string | null;
  education: string | null;
  applyUrl: string;
  source: 'glints';
  sourceJobId: string;
  isActive: boolean;
  lastSyncedAt: Date;
};

const DB_PATH = path.join(process.cwd(), 'src/lib/db.json');

// Ensure database file exists
function initDb() {
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify([], null, 2), 'utf-8');
  }
}

export async function getJobs(): Promise<Job[]> {
  try {
    initDb();
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    const jobs = JSON.parse(data) as Job[];
    return jobs.map(j => ({
      ...j,
      lastSyncedAt: new Date(j.lastSyncedAt)
    }));
  } catch (error) {
    console.error('Failed to read jobs database:', error);
    return [];
  }
}

export async function saveJobs(scrapedJobs: Job[]): Promise<void> {
  try {
    initDb();
    const existingJobs = await getJobs();
    const existingJobsMap = new Map<string, Job>();
    
    // Index existing jobs by sourceJobId
    for (const job of existingJobs) {
      existingJobsMap.set(job.sourceJobId, job);
    }
    
    // Update or insert jobs
    for (const scraped of scrapedJobs) {
      existingJobsMap.set(scraped.sourceJobId, scraped);
    }
    
    // Set jobs not in the scraped list to inactive (unless we only want to track active jobs)
    // The requirement says: "Ambil daftar lowongan aktif langsung dari halaman company Glints."
    // Any job previously active that is no longer scraped is likely closed, so we set it to inactive.
    const activeScrapedIds = new Set(scrapedJobs.map(j => j.sourceJobId));
    for (const [id, job] of existingJobsMap.entries()) {
      if (!activeScrapedIds.has(id)) {
        job.isActive = false;
        job.lastSyncedAt = new Date();
      }
    }
    
    const allJobs = Array.from(existingJobsMap.values());
    fs.writeFileSync(DB_PATH, JSON.stringify(allJobs, null, 2), 'utf-8');
  } catch (error) {
    console.error('Failed to save jobs to database:', error);
    throw error;
  }
}
