import { NextResponse } from 'next/server';
import { getJobs } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const allJobs = await getJobs();
    const activeJobs = allJobs.filter(job => job.isActive);
    return NextResponse.json({ success: true, data: activeJobs });
  } catch (error: any) {
    console.error('Error fetching jobs:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch jobs' },
      { status: 500 }
    );
  }
}
