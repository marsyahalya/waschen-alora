"use client";
import DomeGallery from '@/components/animations/DomeGallery';
import type { FC } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

// Import all 13 images from service gallery
import cleanox1 from '@/assets/services/gallery/cleanox1.png';
import cleanox2 from '@/assets/services/gallery/cleanox2.png';
import cleanox3 from '@/assets/services/gallery/cleanox3.png';
import cleanox4 from '@/assets/services/gallery/cleanox4.png';
import ikm1 from '@/assets/services/gallery/ikm1.png';
import ikm2 from '@/assets/services/gallery/ikm2.png';
import ikm3 from '@/assets/services/gallery/ikm3.png';
import ikm4 from '@/assets/services/gallery/ikm4.png';
import waschen1 from '@/assets/services/gallery/waschen1.png';
import waschen2 from '@/assets/services/gallery/waschen2.png';
import waschen3 from '@/assets/services/gallery/waschen3.png';

const galleryImages = [
  waschen1, waschen2, waschen3,
  ikm1, ikm2, ikm3, ikm4,
  cleanox1, cleanox2, cleanox3, cleanox4
];

export const Gallery: FC = () => {
  const { t } = useLanguage();

  return (
    <section id="institutions" className="pt-32 pb-16 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/3">
          <h2 className="text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-[#fc8018] mb-4 block">{t('gallery_subtitle')}</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-8 tracking-tight leading-tight">
            {t('gallery_title').split('\n')[0]}<br/>{t('gallery_title').split('\n')[1]}
          </h3>
          <p className="text-lg text-primary/70 leading-relaxed max-w-lg font-medium">
            {t('gallery_desc')}
          </p>
        </div>
        
        <div className="lg:w-2/3 w-full h-[600px] relative">
          <DomeGallery
            images={galleryImages}
            fit={1}
            minRadius={1000}
            maxVerticalRotationDeg={15}
            segments={30}
            dragDampening={3.8}
            grayscale={false}
          />
        </div>
      </div>
    </section>
  );
};
