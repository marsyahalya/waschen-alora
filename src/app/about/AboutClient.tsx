"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Shield, Users, Lightbulb, Leaf, Award, Compass, Target, TrendingUp, ChevronRight, Sparkles, HeartHandshake, ShieldCheck, Quote, X } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { AnimatedContent } from '@/components/animations/AnimatedContent';
import { SocialMediaSection } from '@/components/sections/SocialMedia';
import { useState, useEffect, type FC } from 'react';

// Import images
import programAward from '@/assets/alora/aloraaward.png';
import programOuting from '@/assets/about/program_outing.png';
import programAcademy from '@/assets/alora/aloraacademy.png';
import companyFacility from '@/assets/about/company_facility.png';

export const AboutClient: FC = () => {
  const { t, language } = useLanguage();

  const programs = [
    {
      title: t('about_program_award_title'),
      desc: t('about_program_award_desc'),
      image: programAward,
      tag: "Recognition"
    },
    {
      title: t('about_program_academy_title'),
      desc: t('about_program_academy_desc'),
      image: programAcademy,
      tag: "Development"
    },
    {
      title: t('about_program_outing_title'),
      desc: t('about_program_outing_desc'),
      image: programOuting,
      tag: "Engagement"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 font-poppins overflow-hidden relative">
      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-[#49122E] via-[#3d0f25] to-[#2d0a1b] relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#fc8018]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#fc8018]/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </div>

        <div className="container max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Text */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fc8018]/15 border border-[#fc8018]/30 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fc8018] animate-pulse" />
                  <span className="text-[#fc8018] text-sm md:text-base font-semibold uppercase tracking-[0.25em]">
                    {t('about_page_subtitle')}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-8 leading-[1.1] lg:whitespace-nowrap">
                  {t('about_page_title').split(' ').slice(0, -1).join(' ')}{' '}
                  <span className="text-[#fc8018] relative inline-block">
                    {t('about_page_title').split(' ').slice(-1)}
                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#fc8018]/30 rounded-full" />
                  </span>
                </h1>

                <p className="text-white/60 mt-16 text-base md:text-lg max-w-3xl font-medium leading-relaxed">
                  {t('about_page_desc')}
                </p>
              </motion.div>
            </div>

            {/* Right: Decorative visual */}
            <div className="lg:col-span-5 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[400px]"
              >
                {/* Decorative rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-[#fc8018]/20"
                />
                <div className="absolute inset-12 rounded-full border border-white/10" />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-24 rounded-full border-2 border-[#fc8018]/30"
                />
                {/* Center badge */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#fc8018] to-amber-600 flex flex-col items-center justify-center shadow-2xl shadow-[#fc8018]/30">
                    <div className="text-white text-[10px] font-semibold uppercase tracking-widest opacity-80">Since</div>
                    <div className="text-white text-3xl font-semibold">2013</div>
                  </div>
                </div>
                {/* Floating dots */}
                {[0, 60, 120, 180, 240, 300].map((angle) => (
                  <div
                    key={angle}
                    className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-[#fc8018]/40"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-200px)`,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISION & MISSION — Interactive Tabs */}
      <section className="py-28 px-8 relative bg-gray-50/50 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#fc8018]/[0.04] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#49122E]/[0.04] rounded-full blur-[80px]" />

        <div className="container max-w-[1200px] mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-[#fc8018] mb-4 block">
              {t('about_page_subtitle')}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary tracking-tight">
              {t('about_vision_mission')}
            </h2>
          </div>

          <VisionMissionTabs />
        </div>
      </section>

      {/* 3. CORPORATE VALUE PRECISE — Circular Wheel UI */}
      <PreciseCircularUI />

      {/* 5. OUR PROGRAMS */}
      <section className="py-28 px-8 bg-white border-t border-gray-100">
        <div className="container max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="mb-20 text-center">
            <span className="text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-[#fc8018] mb-4 block">
              {t('about_programs_title')}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary tracking-tight max-w-3xl mx-auto mb-6">
              {t('about_programs_subtitle')}
            </h2>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {programs.map((program, idx) => (
              <AnimatedContent key={idx} delay={idx * 0.1} distance={30} direction="vertical">
                <div className="group bg-white rounded-[3rem] border border-gray-100 hover:border-primary/10 shadow-sm hover:shadow-[0_25px_60px_rgba(73,18,46,0.05)] overflow-hidden transition-all duration-500 h-full flex flex-col">
                  {/* Image container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1.5 rounded-full bg-white/95 text-[10px] font-semibold uppercase tracking-wider text-[#49122E] shadow-sm">
                        {program.tag}
                      </span>
                    </div>
                    <Image 
                      src={program.image} 
                      alt={program.title} 
                      placeholder="blur"
                      className="object-cover w-full h-full group-hover:scale-110 transition-all duration-750"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Body container */}
                  <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4 group-hover:text-[#fc8018] transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-sm text-primary/50 font-medium leading-relaxed font-poppins text-justify">
                        {program.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>

        </div>
      </section>

      {/* 6. SOCIAL MEDIA SECTION */}
      <SocialMediaSection />
    </div>
  );
};


// === Vision & Mission Sections ===
const VisionMissionTabs: FC = () => {
  const { t, language } = useLanguage();

  const missions = [
    {
      text: t('about_mission_text_1'),
      badge: { en: "Quality & Technology", id: "Kualitas & Teknologi" },
      icon: Sparkles
    },
    {
      text: t('about_mission_text_2'),
      badge: { en: "Customer Satisfaction", id: "Kepuasan Pelanggan" },
      icon: HeartHandshake
    },
    {
      text: t('about_mission_text_3'),
      badge: { en: "Company Culture", id: "Budaya Kerja" },
      icon: Award
    },
    {
      text: t('about_mission_text_4'),
      badge: { en: "Trusted Partner", id: "Mitra Terpercaya" },
      icon: ShieldCheck
    },
    {
      text: t('about_mission_text_5'),
      badge: { en: "Sustainability", id: "Keberlanjutan" },
      icon: Leaf
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
      {/* 1. Vision Card (Takes 5 columns on large screens, premium dark overlay design with image) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-5 rounded-[2.5rem] overflow-hidden shadow-2xl relative border border-primary/20 min-h-[500px] lg:min-h-auto group flex flex-col justify-between p-10 md:p-12"
      >
        {/* Background Image of Facility */}
        <Image
          src={companyFacility}
          alt="Alora Company Facility"
          fill
          className="object-cover transition-transform duration-[1.5s] group-hover:scale-110 pointer-events-none"
          placeholder="blur"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
        {/* Gradient overlay — gelap di atas supaya teks terbaca */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d0a1b] via-[#49122e]/80 to-transparent transition-opacity duration-700" />
        <div className="absolute inset-0 bg-[#fc8018]/5 mix-blend-overlay pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#fc8018]/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#fc8018]/30 transition-colors duration-700" />

        {/* Card Top — badge + vision text */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#fc8018]/25 border border-[#fc8018]/45 rounded-full backdrop-blur-md mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fc8018] animate-pulse" />
            <span className="text-[#fc8018] text-[11px] font-semibold uppercase tracking-[0.25em]">
              {t('about_vision_title')}
            </span>
          </div>

          <div className="relative">
            <Quote className="absolute -top-8 -left-8 h-16 w-16 text-[#fc8018]/10 transform -rotate-180" />
            <p className="text-white text-2xl md:text-3xl font-semibold leading-relaxed tracking-wide pt-2 pl-6 border-l-2 border-[#fc8018]/50">
              {t('about_vision_text')}
            </p>
          </div>
        </div>

        {/* Card Footer — di bawah */}
        <div className="relative z-10 mt-auto border-t border-white/10 pt-6 flex justify-between items-center">
          <div>
            <span className="text-white/40 text-[10px] font-semibold uppercase tracking-wider block mb-1">Aspiration</span>
            <span className="text-white text-xs font-semibold tracking-wide">PT Waschen Alora Indonesia</span>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20"
          >
            <Compass className="h-6 w-6 text-[#fc8018]" />
          </motion.div>
        </div>
      </motion.div>

      {/* 2. Mission List (Takes 7 columns on large screens, dynamic grid of cards) */}
      <div className="lg:col-span-7 flex flex-col justify-between gap-6">
        {/* Header */}
        <div className="mb-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 border border-primary/10 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#49122E]" />
            <span className="text-primary text-[11px] font-semibold uppercase tracking-[0.25em]">
              {t('about_mission_title')}
            </span>
          </div>
        </div>

        {/* Mission Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
          {missions.map((mission, idx) => {
            const IconComponent = mission.icon;
            const isLast = idx === missions.length - 1;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`group relative p-6 md:p-8 bg-white rounded-[2rem] border border-gray-100 hover:border-[#fc8018]/30 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(252,128,24,0.06)] transition-all duration-300 cursor-default flex flex-col overflow-hidden ${
                  isLast ? 'sm:col-span-2 sm:flex-row sm:items-center sm:gap-8' : 'justify-between'
                }`}
              >
                {/* Large watermark number in corner */}
                <div className={`absolute text-7xl font-semibold font-poppins text-gray-50/70 group-hover:text-[#fc8018]/5 transition-colors select-none pointer-events-none ${
                  isLast ? 'right-8 top-1/2 -translate-y-1/2' : 'right-6 top-6'
                }`}>
                  {String(idx + 1).padStart(2, '0')}
                </div>

                {/* Icon Container */}
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/5 text-primary group-hover:bg-[#fc8018] group-hover:text-white transition-all duration-500 shadow-sm relative z-10 ${
                  isLast ? 'mb-4 sm:mb-0' : 'mb-6'
                }`}>
                  <IconComponent className="h-6 w-6 transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110" />
                </div>

                {/* Content */}
                <div className="flex-1 relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#fc8018] bg-[#fc8018]/10 px-2.5 py-0.5 rounded-md">
                      {language === 'id' ? mission.badge.id : mission.badge.en}
                    </span>
                  </div>
                  <p className="text-[#49122e]/85 text-sm font-medium leading-relaxed group-hover:text-[#49122e] transition-colors">
                    {mission.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// === Corporate Values Section (Precise Circular UI) ===
const PreciseCircularUI: FC = () => {
  const { t, language } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [radius, setRadius] = useState(120);

  const preciseValues = [
    {
      letter: "P",
      title: t('about_p_title'),
      desc: t('about_p_desc'),
      icon: Shield
    },
    {
      letter: "R",
      title: t('about_r_title'),
      desc: t('about_r_desc'),
      icon: TrendingUp
    },
    {
      letter: "C",
      title: t('about_c_title'),
      desc: t('about_c_desc'),
      icon: Users
    },
    {
      letter: "I",
      title: t('about_i_title'),
      desc: t('about_i_desc'),
      icon: Lightbulb
    },
    {
      letter: "S",
      title: t('about_s_title'),
      desc: t('about_s_desc'),
      icon: Leaf
    },
    {
      letter: "E",
      title: t('about_e_title'),
      desc: t('about_e_desc'),
      icon: Award
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setRadius(340);
      } else {
        setRadius(150);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-16 md:py-24 px-8 bg-gradient-to-b from-white to-gray-50/50 border-t border-gray-100 relative overflow-hidden flex items-center justify-center">
      {/* Background glowing decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-[#fc8018]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Small floating decorative shapes around the orbit */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden max-w-[1200px] mx-auto">
        <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-[25%] left-[20%] w-3 h-3 rounded-full bg-blue-500/30" />
        <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-[25%] right-[20%] w-4 h-4 rounded-full bg-[#fc8018]/20" />
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-[35%] right-[25%] w-2 h-2 rounded-full bg-primary/40" />
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute bottom-[30%] left-[25%] w-3 h-3 border border-[#fc8018]/40 border-dashed" />
      </div>

      <div className="container max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">
        {/* Circular Wheel UI */}
        <div className="relative w-[360px] h-[360px] md:w-[780px] md:h-[780px] flex items-center justify-center">
          {/* Animated dashed outer orbit ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 85, repeat: Infinity, ease: "linear" }}
            style={{
              width: `${radius * 2}px`,
              height: `${radius * 2}px`,
            }}
            className="absolute rounded-full border-2 border-dashed border-gray-200/80 pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />

          {/* Central Panel Card (Ref Design: light outer ring, solid white inner card) */}
          <div className="w-48 h-48 md:w-[350px] md:h-[350px] rounded-full bg-primary/5 flex items-center justify-center border-4 border-white shadow-xl relative z-10">
            <div className="w-36 h-36 md:w-[280px] md:h-[280px] rounded-full bg-white shadow-md border border-gray-100 flex flex-col items-center justify-center text-center p-6">
              <Compass className="h-6 w-6 md:h-10 md:w-10 text-[#fc8018] mb-3 animate-spin-slow" />
              <span className="text-primary text-xl md:text-3xl font-semibold tracking-widest uppercase">
                PRECISE
              </span>
              <span className="text-primary/45 text-[9px] md:text-[12px] font-normal uppercase tracking-[0.2em] mt-1.5">
                {language === 'id' ? 'Nilai Perusahaan' : 'Corporate Values'}
              </span>
            </div>
          </div>

          {/* Orbiting Icon Buttons */}
          {preciseValues.map((value, i) => {
            const IconComponent = value.icon;
            const angle = (i * 60 - 90) * (Math.PI / 180);
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
                className="z-20 group"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, delay: i * 0.1 }}
                  className="relative flex flex-col items-center"
                >
                  {/* Speech Bubble Tooltip Badge (above circle button) */}
                  <div className="absolute bottom-[calc(100%+14px)] left-1/2 -translate-x-1/2 bg-white px-3.5 py-1.5 md:px-5 md:py-2.5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 text-xs md:text-sm font-normal text-primary tracking-wide whitespace-nowrap z-30 transition-all duration-300 pointer-events-none after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-[6px] after:border-transparent after:border-t-white filter drop-shadow-sm">
                    {value.title}
                  </div>

                  {/* Main Circular Button */}
                  <button
                    onClick={() => setSelectedIndex(i)}
                    className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white border-2 border-gray-100 hover:border-[#fc8018] text-[#49122E] hover:text-[#fc8018] shadow-[0_10px_35px_rgba(0,0,0,0.05)] cursor-pointer transition-all duration-300 flex items-center justify-center relative hover:scale-105 active:scale-95 group-hover:shadow-[0_15px_40px_rgba(252,128,24,0.15)]"
                  >
                    {/* Small Floating Corner Badge displaying the Letter */}
                    <div className="absolute top-0 right-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#fc8018] text-white text-[10px] md:text-xs font-normal flex items-center justify-center border-2 border-white shadow-sm z-30 transition-transform duration-300 group-hover:scale-110">
                      {value.letter}
                    </div>

                    {/* Icon */}
                    <IconComponent className="h-6 w-6 md:h-9 md:w-9 transition-transform duration-300 group-hover:rotate-[8deg]" />
                  </button>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Popup Dialog (AnimatePresence) */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#2d0a1b]/60 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-10 max-w-md w-full border border-gray-100 shadow-2xl relative flex flex-col items-center text-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary/45 hover:text-primary hover:bg-gray-100 transition-colors cursor-pointer border border-gray-100"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Large background watermarked letter */}
              <div className="absolute -top-12 -left-12 text-[14rem] font-semibold text-[#fc8018]/5 select-none pointer-events-none font-poppins">
                {preciseValues[selectedIndex].letter}
              </div>

              {/* Icon Container */}
              <div className="w-18 h-18 bg-primary/5 text-primary rounded-[1.5rem] flex items-center justify-center shadow-inner relative z-10 mb-6 mt-4">
                {(() => {
                  const Icon = preciseValues[selectedIndex].icon;
                  return <Icon className="h-8 w-8 text-[#fc8018]" />;
                })()}
              </div>

              {/* Content */}
              <div className="relative z-10 pb-4">
                <span className="inline-block text-[10px] font-normal uppercase tracking-widest text-[#fc8018] bg-[#fc8018]/10 px-3 py-1 rounded-md mb-2">
                  {language === 'id' ? 'Nilai Perusahaan' : 'Corporate Value'}
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-4 tracking-tight leading-none">
                  {preciseValues[selectedIndex].title}
                </h3>
                <div className="w-12 h-1 bg-[#fc8018]/50 rounded-full mx-auto mb-6" />
                <p className="text-[#49122e]/75 text-sm md:text-base font-normal leading-relaxed">
                  {preciseValues[selectedIndex].desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
