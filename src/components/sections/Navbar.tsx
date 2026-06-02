"use client";
import Image from "next/image";
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import logoAlora from '@/assets/logo-new-landscape.png';
import waschenLogo from '@/assets/logo/waschen.png';
import ikmLogo from '@/assets/logo/ikm.png';
import cleanoxLogo from '@/assets/logo/cleanox.png';
import { Button } from '@/components/ui/Button';
import { Menu, ChevronDown, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import type { FC } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

const serviceUnits = [
  {
    name: 'Waschen Laundry',
    desc: { en: 'B2B & B2C laundry service', id: 'Layanan laundry B2B & B2C' },
    href: 'https://waschenlaundry.com/',
    logo: waschenLogo,
  },
  {
    name: 'IKM Laundry',
    desc: { en: 'Professional & linen management', id: 'Manajemen laundry & linen profesional' },
    href: 'https://www.ikmalora.com/',
    logo: ikmLogo,
  },
  {
    name: 'Cleanox',
    desc: { en: 'Home & office cleaning', id: 'Pembersihan rumah & kantor' },
    href: 'https://cleanoxindonesia.com/',
    logo: cleanoxLogo,
  },
];

export const Navbar: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let rafPending = false;
    const handleScroll = () => {
      if (!rafPending) {
        rafPending = true;
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          rafPending = false;
        });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('/#', '').replace('#', '');
    if (pathname !== '/') {
      router.push('/#' + targetId);
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const openServices = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    closeTimeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const navLinks: Array<{ name: string; href: string; type: 'link' | 'anchor' | 'dropdown' }> = [
    { name: t('nav_home'), href: '/', type: 'link' },
    { name: t('nav_about'), href: '/about', type: 'link' },
    { name: t('nav_services'), href: '/#services', type: 'dropdown' },
    { name: t('nav_careers'), href: '/careers', type: 'link' },
    { name: t('nav_contact'), href: '/contact', type: 'link' },
  ];

  const linkClass = (scrolled: boolean) =>
    `text-[15px] font-medium tracking-wide transition-all duration-300 px-3 py-2 rounded-md whitespace-nowrap ${
      scrolled
        ? 'text-[#374151] hover:text-primary hover:bg-black/5'
        : 'text-white/90 hover:text-white hover:bg-white/10'
    }`;

  return (
    <nav id="main-navbar" className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 px-8 ${
      isScrolled
        ? 'py-4 bg-white shadow-md border-b border-gray-100'
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center group cursor-pointer">
            <Image
              src={logoAlora}
              alt="Waschen Alora Indonesia"
              className={`h-9 w-auto object-contain transition-all duration-500 group-hover:scale-105 ${
                !isScrolled ? 'brightness-0 invert' : ''
              }`}
            />
          </Link>
        </div>

        {/* Center nav */}
        <div className="hidden md:flex flex-nowrap items-center gap-2 lg:gap-4">
          {navLinks.map((link) => {
            if (link.type === 'dropdown') {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleCloseServices}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`${linkClass(isScrolled)} flex items-center gap-1.5 cursor-pointer`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                    />
                  </a>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
                      >
                        <div className="w-[340px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-3">
                          {serviceUnits.map((unit) => (
                            <a
                              key={unit.name}
                              href={unit.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#fc8018]/5 transition-colors group"
                            >
                              <div className="h-10 w-10 rounded-xl bg-gray-50 flex items-center justify-center p-2 shrink-0 group-hover:bg-white group-hover:shadow-sm transition-all">
                                <Image src={unit.logo} alt={unit.name} className="w-full h-full object-contain" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-semibold text-primary group-hover:text-[#fc8018] transition-colors">
                                  {unit.name}
                                </h4>
                                <p className="text-[11px] text-primary/50 font-medium leading-tight mt-0.5">
                                  {unit.desc[language as 'en' | 'id']}
                                </p>
                              </div>
                              <ExternalLink className="h-3.5 w-3.5 text-primary/30 group-hover:text-[#fc8018] transition-colors shrink-0" />
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            if (link.type === 'link') {
              return (
                <Link key={link.name} href={link.href} className={linkClass(isScrolled)}>
                  {link.name}
                </Link>
              );
            }

            return (
              <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={linkClass(isScrolled)}>
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <div className={`flex p-1 rounded-full border transition-colors ${
            isScrolled ? 'bg-primary/5 border-primary/10' : 'bg-white/10 border-white/20'
          }`}>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider transition-all cursor-pointer ${
                language === 'en'
                  ? (isScrolled ? 'bg-primary text-white shadow-sm' : 'bg-white text-primary shadow-sm')
                  : (isScrolled ? 'text-primary/70 hover:bg-primary/10' : 'text-white/70 hover:bg-white/10')
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('id')}
              className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider transition-all cursor-pointer ${
                language === 'id'
                  ? (isScrolled ? 'bg-primary text-white shadow-sm' : 'bg-white text-primary shadow-sm')
                  : (isScrolled ? 'text-primary/70 hover:bg-primary/10' : 'text-white/70 hover:bg-white/10')
              }`}
            >
              ID
            </button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" className={`rounded-full ${isScrolled ? 'hover:bg-black/5 text-gray-700' : 'hover:bg-white/10 text-white'}`}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
