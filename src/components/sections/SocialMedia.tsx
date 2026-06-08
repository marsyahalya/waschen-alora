"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { useState, useEffect, type FC } from 'react';

import waschenMockup from '@/assets/instagram/waschen-mockup.webp';
import lifeatMockup from '@/assets/instagram/lifeat-mockup.webp';
import cleanoxMockup from '@/assets/instagram/cleanox-mockup.webp';
import ytCocokids from '@/assets/instagram/yt-cocokids.webp';

// Custom Instagram Icon
const InstagramIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

// Custom YouTube Icon
const YoutubeIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.163c-.272-.98-1.04-1.748-2.02-2.02C19.689 3.6 12 3.6 12 3.6s-7.689 0-9.478.543c-.98.272-1.748 1.04-2.02 2.02C0 7.95 0 12 0 12s0 4.05.543 5.837c.272.98.104 1.748 1.02 2.02C3.311 20.4 12 20.4 12 20.4s7.689 0 9.478-.543c.98-.272 1.748-1.04 2.02-2.02C24 16.05 24 12 24 12s0-4.05-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export const SocialMediaSection: FC = () => {
  const { language } = useLanguage();
  const [activePhone, setActivePhone] = useState(0);

  const socialAccounts = [
    {
      id: 0,
      name: 'Waschen Laundry',
      handle: '@waschen.laundry',
      url: 'https://www.instagram.com/waschen.laundry/',
      mockup: waschenMockup,
      type: 'instagram'
    },
    {
      id: 1,
      name: 'Cleanox Official',
      handle: '@cleanox.official',
      url: 'https://www.instagram.com/cleanox.official/',
      mockup: cleanoxMockup,
      type: 'instagram'
    },
    {
      id: 2,
      name: 'Life at Alora',
      handle: '@lifeatalora',
      url: 'https://www.instagram.com/lifeatalora/',
      mockup: lifeatMockup,
      type: 'instagram'
    },
    {
      id: 3,
      name: 'Cocokids World Fun',
      handle: '@cocokids_worldfun',
      url: 'https://www.youtube.com/@cocokids_worldfun',
      mockup: ytCocokids,
      type: 'youtube'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhone((prev) => (prev + 1) % socialAccounts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [socialAccounts.length]);

  return (
    <section className="py-28 px-8 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#fc8018]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-[#fc8018] mb-4 block">
              {language === 'id' ? 'Ikuti Kami' : 'Follow Us'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary tracking-tight mb-6 leading-tight">
              {language === 'id' ? 'Terhubung dengan Kami' : 'Connect With Us'}
            </h2>
            <p className="text-primary/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
              {language === 'id' 
                ? 'Ikuti perjalanan kami di Instagram dan YouTube untuk pembaruan terbaru' 
                : 'Follow our journey on Instagram and YouTube for the latest updates'}
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone Mockup */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-[#fc8018]/10 rounded-[60px] blur-3xl" />
              <motion.div
                className="relative"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="relative w-[280px] h-[580px] bg-[#1a1a1a] rounded-[45px] p-3 shadow-2xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#1a1a1a] rounded-b-2xl z-20" />
                  <div className="relative w-full h-full bg-white rounded-[35px] overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activePhone}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-full"
                      >
                        <Image 
                          src={socialAccounts[activePhone].mockup} 
                          alt={socialAccounts[activePhone].name}
                          className="w-full h-full object-cover object-top"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Account Cards */}
          <div className="space-y-4">
            {socialAccounts.map((account, index) => (
              <motion.a key={account.id} href={account.url} target="_blank" rel="noopener noreferrer"
                className={`group flex items-center gap-5 p-5 rounded-2xl border-2 transition-all duration-300 ${
                  activePhone === index ? 'bg-primary border-primary' : 'bg-white border-gray-100 hover:border-primary/20'
                }`}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setActivePhone(index)}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${activePhone === index ? 'bg-white/20' : 'bg-primary/5'}`}>
                  {account.type === 'youtube' ? (
                    <YoutubeIcon className={`w-7 h-7 ${activePhone === index ? 'text-white' : 'text-primary'}`} />
                  ) : (
                    <InstagramIcon className={`w-7 h-7 ${activePhone === index ? 'text-white' : 'text-primary'}`} />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold text-xl ${activePhone === index ? 'text-white' : 'text-primary'}`}>{account.name}</h4>
                  <p className={`text-base ${activePhone === index ? 'text-white/70' : 'text-primary/50'}`}>{account.handle}</p>
                </div>
                <ChevronRight className={`w-5 h-5 ${activePhone === index ? 'text-white' : 'text-primary/30 group-hover:text-primary'}`} />
              </motion.a>
            ))}
            <div className="flex justify-center gap-2 pt-4">
              {socialAccounts.map((_, index) => (
                <button key={index} onClick={() => setActivePhone(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${activePhone === index ? 'w-8 bg-[#fc8018]' : 'w-2 bg-primary/20'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
