'use client';

import { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Clock, ArrowRight, Search, Cpu, 
  Wallet, Sparkles, Zap, Shield, Users
} from 'lucide-react';
import type { FC } from 'react';
import type { Job } from '@/lib/db';
import { useLanguage } from '@/lib/LanguageContext';

// Helper to determine the icon based on category
function getCategoryIcon(category: string | null) {
  if (!category) return <Zap className="h-5 w-5" />;
  const cat = category.toLowerCase();
  if (cat.includes('creative') || cat.includes('marketing') || cat.includes('design')) {
    return <Sparkles className="h-5 w-5" />;
  }
  if (cat.includes('tech') || cat.includes('software') || cat.includes('computer') || cat.includes('data')) {
    return <Cpu className="h-5 w-5" />;
  }
  if (cat.includes('finance') || cat.includes('accounting')) {
    return <Wallet className="h-5 w-5" />;
  }
  if (cat.includes('hr') || cat.includes('admin') || cat.includes('general affair') || cat.includes('human')) {
    return <Users className="h-5 w-5" />;
  }
  return <Zap className="h-5 w-5" />;
}

// Skeleton component for premium page loading experience
const JobCardSkeleton = () => (
  <div className="animate-pulse bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-12 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-2 h-full bg-gray-100" />
    <div className="flex-1 space-y-6">
      <div className="flex gap-4">
        <div className="h-5 w-20 bg-gray-200 rounded-full" />
        <div className="h-5 w-24 bg-gray-100 rounded-full" />
      </div>
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 bg-gray-200 rounded-xl" />
        <div className="h-8 w-2/3 bg-gray-200 rounded-lg" />
      </div>
      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-100 rounded-lg" />
        <div className="h-4 w-5/6 bg-gray-100 rounded-lg" />
      </div>
      <div className="flex gap-4 pt-4 border-t border-gray-50">
        <div className="h-8 w-28 bg-gray-100 rounded-xl" />
        <div className="h-8 w-28 bg-gray-100 rounded-xl" />
        <div className="h-8 w-28 bg-gray-100 rounded-xl" />
      </div>
    </div>
    <div className="h-20 w-44 bg-gray-200 rounded-[1.5rem]" />
  </div>
);

export const CareersClient: FC = () => {
  const { t } = useLanguage();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const [expandedJobs, setExpandedJobs] = useState<Record<string, boolean>>({});

  // Fetch job listings on mount
  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);
        const res = await fetch('/api/careers');
        const payload = await res.json();
        if (payload.success) {
          setJobs(payload.data || []);
        } else {
          setError(payload.error || 'Failed to fetch careers');
        }
      } catch (err: any) {
        console.error('Failed to load careers:', err);
        setError(err.message || 'An error occurred while fetching careers');
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  // Compute unique filters dynamically based on fetched active jobs
  const categories = useMemo(() => {
    const list = jobs.map(j => j.category).filter(Boolean) as string[];
    return ['All', ...Array.from(new Set(list))];
  }, [jobs]);

  const types = useMemo(() => {
    const list = jobs.map(j => j.employmentType).filter(Boolean) as string[];
    return ['All', ...Array.from(new Set(list))];
  }, [jobs]);

  const locations = useMemo(() => {
    const list = jobs.map(j => j.location).filter(Boolean) as string[];
    return ['All', ...Array.from(new Set(list))];
  }, [jobs]);

  // Filter jobs based on search query and selections
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const titleMatch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
      const descMatch = (job.description || '').toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSearch = titleMatch || descMatch;

      const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
      const matchesType = selectedType === 'All' || job.employmentType === selectedType;
      const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;

      return matchesSearch && matchesCategory && matchesType && matchesLocation;
    });
  }, [jobs, searchQuery, selectedCategory, selectedType, selectedLocation]);

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-[#49122E] via-[#3d0f25] to-[#2d0a1b] relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#fc8018]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#fc8018]/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </div>

        <div className="container max-w-[1400px] mx-auto px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fc8018]/15 border border-[#fc8018]/30 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fc8018] animate-pulse" />
              <span className="text-[#fc8018] text-sm md:text-base font-bold uppercase tracking-[0.25em]">
                {t('careers_hiring_badge')}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
              {t('careers_hero_title1')}<br />
              <span className="text-[#fc8018] relative inline-block">
                {t('careers_hero_title2')}
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#fc8018]/30 rounded-full" />
              </span>
            </h1>

            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed mb-10">
              {t('careers_hero_desc')}
            </p>
          </motion.div>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-xl mx-auto relative"
          >
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
              <Input
                placeholder={t('careers_search_placeholder')}
                className="h-14 pl-14 pr-6 bg-white/8 border-white/15 text-white placeholder:text-white/30 rounded-2xl text-base font-medium focus-visible:ring-[#fc8018]/30 focus-visible:bg-white/12 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tighter Filter & Job List */}
      <section className="py-12 px-8">
        <div className="container max-w-[1400px] mx-auto">
          {/* Formal Corporate Filters - Tighter */}
          <div className="mb-12 pb-8 border-b border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Category Filter */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-[0.25em] text-primary/40 block ml-1">{t('careers_filter_category')}</label>
                <select 
                  className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-sm font-semibold text-primary outline-none focus:ring-2 focus:ring-primary/10 transition-all appearance-none cursor-pointer"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(c => <option key={c} value={c}>{c === 'All' ? t('careers_all_categories') : c}</option>)}
                </select>
              </div>

              {/* Job Type Filter */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-[0.25em] text-primary/40 block ml-1">{t('careers_filter_type')}</label>
                <select 
                  className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-sm font-semibold text-primary outline-none focus:ring-2 focus:ring-primary/10 transition-all appearance-none cursor-pointer"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  {types.map(type => <option key={type} value={type}>{type === 'All' ? t('careers_all_types') : type}</option>)}
                </select>
              </div>

              {/* Location Filter */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-[0.25em] text-primary/40 block ml-1">{t('careers_filter_location')}</label>
                <select 
                  className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-sm font-semibold text-primary outline-none focus:ring-2 focus:ring-primary/10 transition-all appearance-none cursor-pointer"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  {locations.map(l => <option key={l} value={l}>{l === 'All' ? t('careers_all_locations') : l}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Job List */}
          <div className="grid grid-cols-1 gap-6">
            <AnimatePresence mode="popLayout">
              {loading ? (
                // Show multiple skeleton cards while loading
                [1, 2, 3].map((n) => (
                  <motion.div
                    key={`skeleton-${n}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <JobCardSkeleton />
                  </motion.div>
                ))
              ) : error ? (
                <div className="text-center py-16 bg-red-50/50 rounded-[4rem] border border-red-100 text-red-700">
                  <h3 className="text-xl font-bold mb-2">{t('careers_error_title')}</h3>
                  <p className="text-sm font-medium">{error}</p>
                </div>
              ) : (
                filteredJobs.map((job) => {
                  const desc = job.description || "Description not specified";
                  const isExpanded = !!expandedJobs[job.sourceJobId];
                  const shouldTruncate = desc.length > 200;
                  const displayDesc = shouldTruncate && !isExpanded ? `${desc.substring(0, 200)}...` : desc;

                  return (
                    <motion.div 
                      key={job.sourceJobId}
                      layout
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="group bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 hover:border-primary/5 hover:shadow-[0_40px_80px_rgba(0,0,0,0.04)] transition-all duration-700 flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-primary/5 group-hover:bg-primary transition-all duration-700" />
                        
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-6 mb-6 pr-44 md:pr-48">
                            {job.employmentType && (
                              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#fc8018] bg-[#fc8018]/5 px-4 py-1.5 rounded-full">
                                <Clock className="h-3 w-3" />
                                {job.employmentType}
                              </span>
                            )}
                            {job.location && (
                              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary/40">
                                <MapPin className="h-3 w-3" />
                                {job.location}
                              </span>
                            )}
                            {job.category && (
                              <>
                                <span className="text-xs font-bold uppercase tracking-widest text-primary/20">•</span>
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/40">{job.category}</span>
                              </>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-4 mb-4 pr-44 md:pr-48">
                            <div className="h-10 w-10 bg-primary/5 rounded-xl flex items-center justify-center text-[#fc8018] group-hover:bg-[#fc8018] group-hover:text-white transition-all duration-500">
                              {getCategoryIcon(job.category)}
                            </div>
                            <h3 className="text-3xl font-semibold text-primary group-hover:translate-x-2 transition-transform duration-500">{job.title}</h3>
                          </div>
                          
                          <p className="text-primary/60 font-medium max-w-3xl leading-relaxed text-lg mb-8 whitespace-pre-line">
                            {displayDesc}
                            {shouldTruncate && (
                              <button
                                onClick={() => setExpandedJobs(prev => ({ ...prev, [job.sourceJobId]: !isExpanded }))}
                                className="text-[#fc8018] hover:text-[#fc8018]/80 font-bold ml-2 inline-flex items-center gap-1 transition-colors text-base"
                              >
                                {isExpanded ? t('careers_see_less') : t('careers_see_more')}
                              </button>
                            )}
                          </p>

                          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 border-t border-gray-50">
                            <div className="flex items-center gap-2.5 text-[13px] font-semibold text-primary/70 bg-gray-50/50 px-4 py-2 rounded-xl">
                              <Wallet className="h-4 w-4 text-[#fc8018]" />
                              {job.salary || t('careers_salary_undisclosed')}
                            </div>
                            <div className="flex items-center gap-2.5 text-[13px] font-semibold text-primary/70 bg-gray-50/50 px-4 py-2 rounded-xl">
                              <Zap className="h-4 w-4 text-[#fc8018]" />
                              {job.experience || t('careers_experience_not_specified')}
                            </div>
                            <div className="flex items-center gap-2.5 text-[13px] font-semibold text-primary/70 bg-gray-50/50 px-4 py-2 rounded-xl">
                              <Shield className="h-4 w-4 text-[#fc8018]" />
                              {job.education || t('careers_education_not_specified')}
                            </div>
                          </div>
                        </div>
                        
                        <Button className="absolute top-10 right-10 md:top-12 md:right-12 bg-primary hover:bg-primary/90 text-white rounded-2xl h-12 md:h-14 px-6 md:px-8 text-sm md:text-base font-bold shadow-xl shadow-primary/10 group/btn transition-all duration-500 hover:scale-105 active:scale-95 p-0">
                          <a href={job.applyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center w-full h-full px-6 md:px-8">
                            {t('careers_apply_btn')}
                            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover/btn:translate-x-2 transition-transform duration-500" />
                          </a>
                        </Button>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </AnimatePresence>
            
            {!loading && !error && filteredJobs.length === 0 && (
              <div className="text-center py-32 bg-gray-50/50 rounded-[4rem] border-2 border-dashed border-gray-100">
                <div className="h-24 w-24 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-8">
                  <Search className="h-8 w-8 text-gray-200" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{t('careers_no_results_title')}</h3>
                <p className="text-primary/30 font-medium max-w-md mx-auto">{t('careers_no_results_desc')}</p>
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setSelectedType('All');
                    setSelectedLocation('All');
                  }}
                  className="mt-8 text-primary font-bold hover:bg-primary/5 rounded-xl px-8"
                >
                  {t('careers_clear_filters')}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
