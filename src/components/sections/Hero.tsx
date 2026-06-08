"use client";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';

import imgServicesLagi from '@/assets/services-lagi.webp';

const words = ["professional", "resilience", "collaboration", "innovation", "sustainability", "excellence"];

const videos = [
  { id: 1, name: 'cleanox', src: '/video/slider-cleanox.mp4' },
  { id: 2, name: 'waschen', src: '/video/slider-waschen.mp4' },
  { id: 3, name: 'ikm', src: '/video/slider-ikm.mp4' },
];

export const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(wordTimer);
  }, []);

  const handleNext = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <section id="home" className="relative min-h-[860px] lg:h-[850px] flex items-center bg-[#49122E] overflow-hidden font-poppins z-30">
      <div className="absolute inset-0 bg-gradient-to-br from-[#49122E] via-[#3D0F27] to-[#2D0B1D] z-0" />

      {/* Video Area */}
      <div className="absolute top-0 right-0 hidden lg:block lg:w-[55%] h-full z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVideo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <video
              src={videos[currentVideo].src}
              autoPlay
              muted
              playsInline
              preload="metadata"
              onEnded={handleNext}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#49122E] via-[#49122E]/60 to-transparent" />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Core Page Container holding both content and aligned services-lagi image */}
      <div className="container max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10 h-full flex items-center">
        
        {/* Left Column: Typography & CTAs */}
        <div className="w-full lg:w-[55%] flex flex-col items-start pt-28 sm:pt-32 pb-72 sm:pb-80 lg:pb-48">
          {/* Eyebrow - Badge Style Dynamic */}
          <div className="mb-8 sm:mb-10 max-w-full">
            <div className="inline-flex max-w-full flex-wrap items-center gap-y-1 px-4 sm:px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-full border border-white/20 shadow-lg text-white text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.12em] sm:tracking-[0.25em]">
              <span className="whitespace-nowrap opacity-80">{t('hero_badge_deliver')}</span>
              <div className="inline-flex items-center justify-center min-w-[128px] sm:min-w-[155px] md:min-w-[195px] h-[1.2em] mx-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[wordIndex]}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block whitespace-nowrap text-[#fc8018]"
                  >
                    {t(`word_${words[wordIndex]}`)}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="whitespace-nowrap opacity-80">{t('hero_badge_in_every')}</span>
            </div>
          </div>

          <h1 className="text-white text-[34px] sm:text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.12] lg:leading-[1.15] tracking-tight mb-8 sm:mb-10 max-w-[900px]">
            {t('hero_title_line1')} <br />
            {t('hero_title_line2')} <br />
            {t('hero_title_line3')}
          </h1>

          <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-[600px] mb-10 sm:mb-14">
            {t('hero_desc')}
          </p>

          <Button
            className="bg-[#fc8018] text-white hover:bg-[#fc8018]/90 font-semibold px-7 sm:px-10 py-6 sm:py-7 rounded-xl text-sm sm:text-base shadow-xl group transition-all duration-300"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero_cta')}
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Right Column: Services Photo anchored to the exact same 1400px right boundary */}
        <div className="absolute bottom-[-125px] sm:bottom-[-95px] right-1/2 translate-x-1/2 w-[92%] max-w-[420px] z-20 flex items-end justify-center pointer-events-none lg:bottom-0 lg:right-8 lg:translate-x-0 lg:w-[40%] xl:w-[45%] lg:max-w-[540px] xl:max-w-[620px] lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full"
          >
            <Image 
              src={imgServicesLagi}
              alt="Services Highlight"
              priority
              className="w-full h-auto object-contain block translate-y-[18px] lg:translate-y-[20px]"
            />
          </motion.div>
        </div>

      </div>

    </section>
  );
};
