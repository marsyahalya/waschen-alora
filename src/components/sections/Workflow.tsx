"use client";
import { ContainerScroll } from '@/components/ui/ContainerScrollAnimation';
import type { FC } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export const Workflow: FC = () => {
  const { language } = useLanguage();

  return (
    <section className="bg-white overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col gap-4">
            <h2 className="text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-[#fc8018] mb-2 block">
              {language === 'id' ? 'Profil Perusahaan' : 'Company Profile'}
            </h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-primary leading-none tracking-tight">
              {language === 'id' ? 'Lihat Lebih Dekat' : 'A Closer Look'} <br />
              <span className="text-primary/20">{language === 'id' ? 'Kantor & Operasional Kami' : 'Our Office & Operations'}</span>
            </h3>
          </div>
        }
      >
        <div className="h-full w-full flex items-center justify-center relative group overflow-hidden rounded-3xl">
          {/* Company profile video - clean, no overlay */}
          <video
            className="w-full h-full object-cover"
            src="/video/videocompro-baru.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/video/videocompro-baru.mp4" type="video/mp4" />
          </video>
        </div>
      </ContainerScroll>
    </section>
  );
};
