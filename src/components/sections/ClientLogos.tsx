"use client";
import { LogoLoop } from '@/components/animations/LogoLoop';
import ekaHospital from '@/assets/eka-hospital.png';
import bundaLogo from '@/assets/bunda-logo.png';
import columbiaHospital from '@/assets/columbia-asia.png';
import grandFamily from '@/assets/grand-family.png';
import tuguIbu from '@/assets/tugu-ibu.png';
import permataCibubur from '@/assets/permata-cibubur.png';
import { useLanguage } from '@/lib/LanguageContext';

export const ClientLogos = () => {
  const { t } = useLanguage();
  const clients = [
    { name: 'RS Eka Hospital Depok', logo: ekaHospital },
    { name: 'RS Eka Hospital Cibubur', logo: ekaHospital },
    { name: 'RS Eka Hospital BSD', logo: ekaHospital },
    { name: 'RS Eka Hospital Bekasi', logo: ekaHospital },
    { name: 'RS Eka Hospital MT Haryono', logo: ekaHospital },
    { name: 'RS Eka Hospital Permata Hijau', logo: ekaHospital },
    { name: 'RSU Bunda Margonda', logo: bundaLogo },
    { name: 'RSU Bunda Jakarta', logo: bundaLogo },
    { name: 'RSIA Bunda Jakarta', logo: bundaLogo },
    { name: 'RSIA Family Pluit', logo: ekaHospital },
    { name: 'Columbia Hospital', logo: columbiaHospital },
    { name: 'RSIA Grand Family PIK', logo: grandFamily },
    { name: 'RS Tugu Ibu', logo: tuguIbu },
    { name: 'RSIA Permata Cibubur', logo: permataCibubur },
  ];

  return (
    <section id="institutions" className="pt-32 pb-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#fc8018]/10 bg-[#fc8018]/5 mb-8 group cursor-default">
           <span className="text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-[#fc8018]">{t('network_subtitle')}</span>
        </div>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary tracking-tight leading-tight">
          {t('network_title_p1')} <span className="text-[#fc8018]">{t('network_title_p2')}</span>
        </h3>
      </div>
      <LogoLoop logos={clients} />
    </section>
  );
};
