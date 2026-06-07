'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { KeywordItem, keywordsData } from '@/lib/keywords-data';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  HelpCircle, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Star, 
  Sparkles,
  Zap
} from 'lucide-react';

// Import logos for the units
import cleanoxLogo from '@/assets/logo/cleanox.webp';
import ikmLogo from '@/assets/logo/ikm.webp';
import waschenLogo from '@/assets/logo/waschen.webp';

interface KeywordLandingClientProps {
  data: KeywordItem;
  slug: string;
}

export const KeywordLandingClient: React.FC<KeywordLandingClientProps> = ({ data, slug }) => {
  const { language, t } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const isEn = language === 'en';
  
  // Get text content based on active language
  const h1Text = isEn ? data.h1.en : data.h1.id;
  const descriptionText = isEn ? data.descriptionDetailed.en : data.descriptionDetailed.id;
  const serviceName = isEn ? data.serviceName.en : data.serviceName.id;
  const locationName = isEn ? data.locationName.en : data.locationName.id;

  // Unit-specific branding assets and texts
  const unitBranding = {
    waschen: {
      name: 'Waschen Laundry',
      logo: waschenLogo,
      tagline: {
        en: 'Premium Laundry & Dry Cleaning for B2B & B2C',
        id: 'Layanan Laundry & Dry Cleaning Premium untuk B2B & B2C'
      },
      desc: {
        en: 'Waschen Laundry provides state-of-the-art retail and B2B dry cleaning and laundry services, utilizing soft water filters, eco-friendly solvents, and advanced fabric sanitization.',
        id: 'Waschen Laundry menyediakan jasa dry cleaning dan laundry ritel serta B2B berskala modern, menggunakan filter air lunak (soft water), pelarut ramah lingkungan, dan sanitasi kain mutakhir.'
      },
      url: 'https://waschenlaundry.com/'
    },
    ikm: {
      name: 'IKM Laundry',
      logo: ikmLogo,
      tagline: {
        en: 'Professional Healthcare Laundry & Linen Management',
        id: 'Manajemen Linen & Laundry Layanan Kesehatan Profesional'
      },
      desc: {
        en: 'PT IKM specializes in medical-grade sanitization and commercial linen management for hospitals, hotels, and corporations, meeting KARS national standards.',
        id: 'PT IKM berspesialisasi dalam disinfeksi tingkat medis dan manajemen linen komersial untuk rumah sakit, hotel, dan perusahaan, memenuhi standar nasional KARS.'
      },
      url: 'https://www.ikmalora.com/'
    },
    cleanox: {
      name: 'Cleanox',
      logo: cleanoxLogo,
      tagline: {
        en: 'Professional Home & Office Cleaning Services',
        id: 'Layanan Pembersihan Rumah & Kantor Profesional'
      },
      desc: {
        en: 'Cleanox delivers complete premium cleaning, deep disinfection, post-construction cleaning, and carpet/sofa sanitation using child-safe and pet-safe products.',
        id: 'Cleanox menghadirkan pembersihan premium lengkap, disinfeksi mendalam, pembersihan pasca-konstruksi, dan sanitasi karpet/sofa dengan cairan aman bagi anak dan hewan peliharaan.'
      },
      url: 'https://cleanoxindonesia.com/'
    }
  }[data.unit];

  // List of other landing pages for internal linking
  const otherKeywords = Object.values(keywordsData).filter(item => item.slug !== slug);

  // PRECISE corporate values translation data
  const preciseValues = [
    {
      letter: 'P',
      title: t('about_p_title') || 'Professionalism',
      desc: t('about_p_desc') || 'High competence, ethics, and discipline.'
    },
    {
      letter: 'R',
      title: t('about_r_title') || 'Resilience',
      desc: t('about_r_desc') || 'Tough mindset, agile in solving challenges.'
    },
    {
      letter: 'C',
      title: t('about_c_title') || 'Collaboration',
      desc: t('about_c_desc') || 'Strong teamwork through open communication.'
    },
    {
      letter: 'I',
      title: t('about_i_title') || 'Innovation',
      desc: t('about_i_desc') || 'Setting new standards through technology.'
    },
    {
      letter: 'S',
      title: t('about_s_title') || 'Sustainability',
      desc: t('about_s_desc') || 'Eco-friendly practices for a cleaner future.'
    },
    {
      letter: 'E',
      title: t('about_e_title') || 'Excellence',
      desc: t('about_e_desc') || 'Excellence is our baseline, consistent quality.'
    }
  ];

  return (
    <div className="flex-1 w-full bg-white font-poppins pt-20 overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[550px] md:min-h-[600px] flex items-center bg-[#49122E] text-white px-8 overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#49122E] via-[#3D0F27] to-[#2D0B1D] z-0" />
        {/* Glowing decor */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[#fc8018]/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute -bottom-20 left-10 w-[500px] h-[250px] bg-white/5 rounded-full blur-[80px] -z-10" />
        
        <div className="max-w-[1400px] mx-auto w-full relative z-10 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col items-start">
            
            {/* Tag Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="inline-flex items-center px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-xs font-semibold uppercase tracking-widest text-[#fc8018]">
                <Sparkles className="h-3 w-3 mr-1.5 animate-pulse" />
                {serviceName}
              </span>
              <span className="inline-flex items-center px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-xs font-semibold uppercase tracking-widest text-white/80">
                <MapPin className="h-3 w-3 mr-1.5" />
                {locationName}
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.15] tracking-tight mb-8 max-w-4xl">
              {h1Text}
            </h1>

            {/* Description */}
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mb-12 font-medium">
              {descriptionText}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/6285122333371?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20Waschen%20Alora%20di%20Cibubur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-16 bg-[#fc8018] text-white hover:bg-[#fc8018]/90 font-semibold px-8 rounded-xl items-center shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 group"
              >
                <Phone className="h-5 w-5 mr-3" />
                {isEn ? 'Contact WhatsApp Admin' : 'Hubungi Admin WhatsApp'}
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://wa.me/6285122333371?text=Halo%2C%20saya%20ingin%20meminta%20proposal%20detail%20layanan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-16 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 rounded-xl items-center border border-white/20 transition-all duration-300"
              >
                {isEn ? 'Request Detailed Proposal' : 'Minta Proposal Detail'}
              </a>
            </div>

          </div>

          {/* Right Column: Floating Trust Badge */}
          <div className="lg:col-span-4 hidden lg:flex justify-center items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-10 backdrop-blur-lg shadow-2xl relative overflow-hidden text-center max-w-[340px]"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#fc8018]/10 rounded-full blur-2xl" />
              <div className="h-20 w-20 bg-white/10 rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 border border-white/20">
                <ShieldCheck className="h-10 w-10 text-[#fc8018]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {isEn ? 'Certified Safety' : 'Sanitasi Terjamin'}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 font-medium">
                {isEn 
                  ? 'All services follow professional disinfection guidelines to eliminate 99.9% of bacteria and viruses.' 
                  : 'Seluruh pelayanan kami mematuhi pedoman disinfeksi ketat untuk membasmi 99.9% bakteri dan virus.'}
              </p>
              <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 text-xs font-semibold text-white">
                <Star className="h-3.5 w-3.5 fill-[#fc8018] text-[#fc8018]" />
                <span>5.0 Rated Service</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Business Unit Spotlight */}
      <section className="py-24 px-8 bg-gray-50 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#fc8018]/5 rounded-[3rem] rotate-3 -z-10" />
            <div className="bg-white border border-gray-100 p-8 md:p-12 rounded-[3rem] shadow-xl relative">
              <div className="flex items-center gap-5 mb-8">
                <div className="h-16 w-16 bg-gray-50 rounded-2xl flex items-center justify-center p-3 border border-gray-100 shadow-sm shrink-0">
                  <Image src={unitBranding.logo} alt={unitBranding.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#fc8018] mb-1 block">
                    {isEn ? 'Specialist Unit' : 'Unit Layanan Spesialis'}
                  </span>
                  <h3 className="text-2xl font-bold text-primary">{unitBranding.name}</h3>
                </div>
              </div>

              <h4 className="text-lg font-bold text-primary mb-4">
                {isEn ? unitBranding.tagline.en : unitBranding.tagline.id}
              </h4>

              <p className="text-primary/70 text-base leading-relaxed mb-8 font-medium">
                {isEn ? unitBranding.desc.en : unitBranding.desc.id}
              </p>

              <a
                href={unitBranding.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] font-bold text-[#49122E] hover:translate-x-2 transition-transform group"
              >
                {isEn ? 'Visit Website' : 'Kunjungi Situs Web Resmi'}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#fc8018] mb-4">
              {isEn ? 'Why Choose Us' : 'Keunggulan Kami'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 tracking-tight leading-tight">
              {isEn 
                ? `High Quality Hygiene Solutions for ${locationName}`
                : `Solusi Kebersihan Berkualitas Tinggi untuk ${locationName}`}
            </h2>
            
            <p className="text-primary/70 text-base leading-relaxed mb-10 font-medium">
              {isEn 
                ? 'PT Waschen Alora Indonesia is committed to setting new benchmarks in cleanliness and customer convenience. We continuously invest in advanced machinery and eco-friendly standards to deliver perfect results.'
                : 'PT Waschen Alora Indonesia berkomitmen menetapkan standar baru dalam kebersihan dan kenyamanan. Kami senantiasa berinvestasi pada teknologi mesin pencucian modern dan standar ramah lingkungan.'}
            </p>

            <div className="space-y-4">
              {data.features.map((feat, idx) => (
                <div key={idx} className="flex gap-4 p-2 items-start">
                  <div className="h-6 w-6 bg-[#fc8018]/10 rounded-full flex items-center justify-center text-[#fc8018] shrink-0 mt-1">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-primary text-base">
                      {isEn ? feat.title.en : feat.title.id}
                    </h5>
                    <p className="text-sm text-primary/60 mt-1 font-medium leading-relaxed">
                      {isEn ? feat.desc.en : feat.desc.id}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRECISE Corporate Values */}
      <section className="py-24 px-8 bg-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#49122E]/5 rounded-full blur-[100px] -z-10" />

        <div className="max-w-[1400px] mx-auto text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#fc8018] mb-4 inline-block">
            {t('about_values') || 'Our Core Values'}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 tracking-tight">
            P R E C I S E
          </h2>
          <p className="text-primary/60 max-w-xl mx-auto text-base font-medium leading-relaxed">
            {isEn 
              ? 'Our precise standards and corporate values form the foundation of our services.' 
              : 'Standar presisi dan nilai inti korporat kami menjadi pondasi utama di setiap layanan.'}
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {preciseValues.map((val, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-[#fc8018]/20 transition-all duration-300 text-center flex flex-col justify-between items-center group"
            >
              <div className="h-14 w-14 bg-gradient-to-br from-[#49122E] to-[#2D0B1D] text-[#fc8018] font-bold text-xl rounded-2xl flex items-center justify-center mb-5 shadow-md shadow-primary/10 group-hover:scale-105 transition-transform">
                {val.letter}
              </div>
              <div className="flex-grow flex flex-col justify-center">
                <h4 className="text-sm font-bold text-primary mb-2 tracking-wide uppercase">{val.title}</h4>
                <p className="text-xs text-primary/50 font-medium leading-relaxed">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FAQs Section */}
      <section className="py-24 px-8 bg-gray-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#fc8018] mb-4 inline-block">
              {isEn ? 'Common Inquiries' : 'Pertanyaan Umum'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight">
              {isEn ? 'Frequently Asked Questions' : 'Pertanyaan yang Sering Diajukan'}
            </h2>
            <p className="text-primary/60 text-sm font-medium">
              {isEn 
                ? `Everything you need to know about our services in ${locationName}.`
                : `Segala hal yang perlu Anda ketahui tentang layanan kami di ${locationName}.`}
            </p>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, idx) => {
              const qText = isEn ? faq.q.en : faq.q.id;
              const aText = isEn ? faq.a.en : faq.a.id;
              const isOpen = openFaqIndex === idx;

              return (
                <div 
                  key={idx} 
                  className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center gap-4 hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="flex gap-3 items-center">
                      <HelpCircle className="h-5 w-5 text-[#fc8018] shrink-0" />
                      <span className="font-bold text-primary text-base sm:text-lg leading-snug">
                        {qText}
                      </span>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-primary/40 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#fc8018]' : ''}`} />
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-8 pb-6 pt-2 text-primary/70 text-sm sm:text-base leading-relaxed font-medium border-t border-gray-50">
                          {aText}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Internal Links / Coverage Area Navigator */}
      <section className="py-24 px-8 bg-white border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center lg:text-left mb-12">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#fc8018] mb-3 inline-block">
              {isEn ? 'Coverage Areas' : 'Jangkauan Layanan'}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-primary">
              {isEn ? 'Other Services & Service Locations' : 'Lokasi & Layanan Lain Kami'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {otherKeywords.map((item) => {
              const itemTitle = isEn ? item.title.en.split('|')[0].trim() : item.title.id.split('|')[0].trim();
              const itemService = isEn ? item.serviceName.en : item.serviceName.id;
              const itemLocation = isEn ? item.locationName.en : item.locationName.id;

              return (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="p-5 border border-gray-100 rounded-2xl hover:border-[#fc8018]/30 hover:shadow-md hover:bg-[#fc8018]/5 transition-all duration-300 group flex flex-col justify-between min-h-[110px]"
                >
                  <div>
                    <h4 className="font-bold text-primary text-sm group-hover:text-[#fc8018] transition-colors leading-snug mb-1">
                      {itemTitle}
                    </h4>
                    <p className="text-[11px] font-semibold text-primary/40 uppercase tracking-wider">
                      {itemService} • {itemLocation}
                    </p>
                  </div>
                  <div className="flex justify-end mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="h-4 w-4 text-[#fc8018]" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};
