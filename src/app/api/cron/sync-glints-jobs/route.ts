import { NextRequest, NextResponse } from 'next/server';
import { scrapeGlintsJobs } from '@/lib/scraper';
import { saveJobs } from '@/lib/db';

// Allow this API route to run up to 5 minutes (max allowed on Vercel Pro)
export const maxDuration = 300; 
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const { searchParams } = new URL(request.url);
  const secretParam = searchParams.get('secret');
  
  const expectedSecret = process.env.CRON_SECRET;
  
  if (expectedSecret) {
    const token = authHeader?.startsWith('Bearer ') ? authHeader.substring(7) : null;
    if (token !== expectedSecret && secretParam !== expectedSecret) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized: Invalid secret key' },
        { status: 401 }
      );
    }
  } else {
    // If no CRON_SECRET is configured, only allow in local development to prevent server exposure
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        { success: false, error: 'Configuration Error: CRON_SECRET environment variable is not defined' },
        { status: 500 }
      );
    }
  }

  try {
    const companyUrl = 'https://glints.com/id/en/companies/waschen-alora-indonesia/6d04764a-0eb3-4e09-8dae-3849970315ea?utm_referrer=company_profile';
    const scrapedJobs = await scrapeGlintsJobs(companyUrl);
    await saveJobs(scrapedJobs);
    
    return NextResponse.json({
      success: true,
      message: 'Successfully scraped and synchronized jobs with Glints.',
      count: scrapedJobs.length,
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    console.error('Job sync cron error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Scraping process failed' },
      { status: 500 }
    );
  }
}
