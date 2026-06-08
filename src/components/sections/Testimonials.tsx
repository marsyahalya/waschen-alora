"use client";
import { useState, useEffect, type FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';

import imgHaji from '@/assets/testimoni/haji.webp';
import imgTni from '@/assets/testimoni/tni.webp';
import imgB2c from '@/assets/testimoni/b2c.webp';
import imgB2bRs from '@/assets/testimoni/b2b-rs.webp';
import imgCleanoxRs from '@/assets/testimoni/cleanox-rs.webp';
import imgHospitality from '@/assets/testimoni/hospitality.webp';

type Testi = {
  quote: string;
  quoteId: string;
  name: string;
  designation: string;
  designationId: string;
  image: StaticImageData;
  imagePosition?: string;
  imageScale?: number;
};

// Two sessions of 3 cards each
const sessions: Testi[][] = [
  [
    {
      quote: "The laundry came back spotless and smelling amazing. Fast turnaround too, we got everything back the next day.",
      quoteId: "Cuciannya balik bersih banget dan wanginya tahan lama. Cepat juga, sehari udah balik semua.",
      name: "Ibu Ratna",
      designation: "Hajj Event",
      designationId: "Acara Haji",
      image: imgHaji,
    },
    {
      quote: "Very thorough and careful with our uniforms. Everything was pressed neatly and delivered on time, every single week.",
      quoteId: "Telaten banget nangani seragam kami. Semua di-press rapi dan selalu tepat waktu setiap minggu.",
      name: "Komandan Logistik",
      designation: "TNI Event",
      designationId: "Acara TNI",
      image: imgTni,
    },
    {
      quote: "Finally found a cleaning service that actually gets stains out. My dorm room has never been this fresh. Super worth it for students!",
      quoteId: "Akhirnya nemu jasa cleaning yang bisa bersihin noda membandel. Kamar kos jadi segar banget. Worth it banget buat mahasiswa!",
      name: "Adam Jaelani",
      designation: "Cleanox Customer",
      designationId: "Pelanggan Cleanox",
      image: imgB2c,
    },
  ],
  [
    {
      quote: "Hospital linens need extra care and hygiene standards. They handle it perfectly, always clean, sterile, and on schedule.",
      quoteId: "Linen rumah sakit butuh standar higienis ekstra. Mereka menanganinya dengan sempurna, selalu bersih, steril, dan tepat jadwal.",
      name: "Dr. Sarah Mitchell",
      designation: "B2B Hospital",
      designationId: "B2B Rumah Sakit",
      image: imgB2bRs,
    },
    {
      quote: "Our kitchen and living room have never been this clean. The team is detail-oriented and uses safe products. Perfect for busy moms!",
      quoteId: "Dapur dan ruang tamu kami belum pernah sebersih ini. Timnya detail dan pakai produk yang aman. Cocok banget buat ibu rumah tangga yang sibuk!",
      name: "Ibu Dewi",
      designation: "Cleanox Home Cleaning",
      designationId: "Cleanox Rumah Tangga",
      image: imgCleanoxRs,
      imagePosition: "top center",
      imageScale: 1.15,
    },
    {
      quote: "The service is excellent and the team is very friendly. Always responsive and professional in handling our needs.",
      quoteId: "Pelayanannya sangat baik dan timnya ramah sekali. Selalu responsif dan profesional dalam menangani kebutuhan kami.",
      name: "Hendra Wijaya",
      designation: "B2B Hospital",
      designationId: "B2B Rumah Sakit",
      image: imgHospitality,
    },
  ],
];

export const TestimonialsSection: FC = () => {
  const { language, t } = useLanguage();
  const [session, setSession] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSession(prev => (prev + 1) % sessions.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonials = sessions[session];

  return (
    <section className="py-24 md:py-32 px-5 sm:px-8 bg-white overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-14 md:mb-20 gap-8">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#fc8018]/10 bg-[#fc8018]/5 mb-8 group cursor-default">
              <Star className="h-4 w-4 fill-[#fc8018] text-[#fc8018] group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[#fc8018]">{t('testi_eyebrow')}</span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary tracking-tight leading-tight">
              {t('testi_title_p1')} <br /><span className="text-primary/40">{t('testi_title_p2')}</span>
            </h3>
          </div>
          {/* Session dots */}
          <div className="flex gap-3">
            {sessions.map((_, i) => (
              <button
                key={i}
                onClick={() => setSession(i)}
                className={`h-2 transition-all duration-500 rounded-full ${
                  i === session ? 'w-12 bg-primary' : 'w-3 bg-primary/10 hover:bg-primary/20'
                }`}
                aria-label={`Go to session ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="relative min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={session}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {currentTestimonials.map((item, i) => (
                <TestimonialCard key={`${session}-${i}`} item={item} index={i} language={language} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// Single testimonial card: default shows image only, hover reveals testimonial text
const TestimonialCard: FC<{ item: Testi; index: number; language: 'en' | 'id' }> = ({ item, language }) => {
  const imgScale = item.imageScale ?? 1;
  const imgPosition = item.imagePosition ?? 'center';
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative h-full min-h-[420px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative rounded-[3rem] shadow-sm border border-gray-100 h-full hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 overflow-hidden">

        {/* Default: Image only, no text */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={item.image}
            alt={`${item.name}, ${language === 'id' ? item.designationId : item.designation}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            style={{
              objectPosition: imgPosition,
              transform: `scale(${imgScale})`,
              transformOrigin: 'center top',
            }}
          />
        </div>

        {/* Hover: Testimonial text overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="absolute inset-0 z-10 bg-white p-10 flex flex-col"
            >
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-5 w-5 fill-[#fc8018] text-[#fc8018]" />
                ))}
              </div>

              <p className="text-lg font-medium text-primary/80 leading-relaxed mb-10 flex-1 italic">
                &ldquo;{language === 'id' ? item.quoteId : item.quote}&rdquo;
              </p>

              <div className="pt-8 border-t border-gray-100 mt-auto">
                <h4 className="font-semibold text-primary text-lg">{item.name}</h4>
                <p className="text-xs font-semibold text-primary/60 uppercase tracking-widest mt-1">
                  {language === 'id' ? item.designationId : item.designation}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
