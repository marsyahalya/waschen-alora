"use client";
import { motion } from 'framer-motion';
import { Calendar, Users, Building2 } from 'lucide-react';
import { CountUp } from '@/components/animations/CountUp';
import type { FC } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export const FloatingStats: FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative z-[100] w-full max-w-[1400px] mx-auto px-8 pointer-events-none -mt-20 md:-mt-24 lg:-mt-28 flex justify-end mb-12">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="bg-white rounded-[2rem] p-6 lg:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.1)] border border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative overflow-hidden pointer-events-auto w-full max-w-[750px] mr-0 font-poppins"
      >
        <div className="flex flex-col items-center text-center">
          <Calendar className="h-6 w-6 text-[#fc8018] mb-3" />
          <span className="text-3xl lg:text-4xl font-semibold text-[#49122E] tracking-tight">
            <CountUp to={2013} from={1990} duration={1.5} />
          </span>
          <span className="text-xs lg:text-[13px] font-bold uppercase tracking-[0.2em] text-[#fc8018] mt-3">{t('stats_established')}</span>
        </div>

        <div className="flex flex-col items-center text-center md:border-l md:border-gray-100">
          <Users className="h-6 w-6 text-[#fc8018] mb-3" />
          <span className="text-3xl lg:text-4xl font-semibold text-[#49122E] tracking-tight">
            <CountUp to={2932} from={2900} suffix="+" duration={3} />
          </span>
          <span className="text-xs lg:text-[13px] font-bold uppercase tracking-[0.2em] text-[#fc8018] mt-3">{t('stats_clients')}</span>
        </div>

        <div className="flex flex-col items-center text-center md:border-l md:border-gray-100">
          <Building2 className="h-6 w-6 text-[#fc8018] mb-3" />
          <span className="text-3xl lg:text-4xl font-semibold text-[#49122E] tracking-tight">
            <CountUp to={15} suffix="+" duration={1} />
          </span>
          <span className="text-xs lg:text-[13px] font-bold uppercase tracking-[0.2em] text-[#fc8018] mt-3">{t('stats_experience')}</span>
        </div>
        
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#fc8018]/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
      </motion.div>
    </div>
  );
};
