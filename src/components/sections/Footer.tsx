"use client";
import Image from "next/image";
import Link from 'next/link';
import logoAlora from '@/assets/logo-new-landscape.webp';
import type { FC } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer: FC = () => {
  const { t } = useLanguage();

  const navLinks = [
    { name: t('nav_home'), href: '/' },
    { name: t('nav_about'), href: '/about' },
    { name: t('nav_services'), href: '/#services' },
    { name: t('nav_careers'), href: '/careers' },
    { name: t('nav_contact'), href: '/contact' },
  ];

  const services = [
    { name: t('footer_hosp_laundry'), href: '/#services' },
    { name: t('footer_comm_laundry'), href: '/#services' },
    { name: t('footer_home_clean'), href: '/#services' },
    { name: t('footer_office_clean'), href: '/#services' },
  ];

  return (
    <footer className="bg-primary text-white pt-20 pb-10 px-6 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#fc8018]/5 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-[80px] -ml-40 -mb-40" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center group cursor-pointer mb-6" suppressHydrationWarning>
              <Image
                src={logoAlora}
                alt="Waschen Alora Indonesia"
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105 brightness-0 invert"
              />
            </Link>
            <p className="text-white/50 text-base leading-relaxed font-medium font-poppins">
              {t('footer_desc')}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-6 text-[#fc8018]">
              {t('footer_navigation')}
            </h3>
            <ul className="space-y-3 font-poppins">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base font-medium text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-6 text-[#fc8018]">
              {t('nav_services')}
            </h3>
            <ul className="space-y-3 font-poppins">
              {services.map((s) => (
                <li key={s.name}>
                  <Link
                    href={s.href}
                    className="text-base font-medium text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Head Office */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-6 text-[#fc8018]">
              {t('footer_head_office')}
            </h3>
            <div className="space-y-4 font-poppins">
              <a
                href="https://maps.app.goo.gl/wk5pYKgyEe2V6s2R6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <MapPin className="h-5 w-5 text-[#fc8018] mt-0.5 shrink-0" />
                <span className="text-base text-white/70 group-hover:text-white transition-colors leading-relaxed">
                  Raffles Hills Blok T.11 No. 18, Leuwinanggung, Tapos, Kota Depok, Jawa Barat 16454
                </span>
              </a>
              <a
                href="https://wa.me/6285122333371"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <Phone className="h-5 w-5 text-[#fc8018] shrink-0" />
                <span className="text-base text-white/70 group-hover:text-white transition-colors">
                  +62 851-2233-3371
                </span>
              </a>
              <a
                href="mailto:waschen.aloraindonesia@gmail.com"
                className="flex items-center gap-3 group"
              >
                <Mail className="h-5 w-5 text-[#fc8018] shrink-0" />
                <span className="text-base text-white/70 group-hover:text-white transition-colors break-words">
                  waschen.aloraindonesia@<wbr />gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
          <p>© 2025 Waschen Alora Indonesia. {t('footer_copyright')}</p>
          <p>{t('footer_tagline')}</p>
        </div>
      </div>
    </footer>
  );
};
