"use client";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/ThreeDCard";
import { HeartHandshake, ArrowRight } from 'lucide-react';
import { GradientText } from '@/components/animations/GradientText';
import { AnimatedContent } from '@/components/animations/AnimatedContent';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import cleanoxImg from '@/assets/services/services-cleanox.webp';
import ikmImg from '@/assets/services/services-ikm.webp';
import waschenImg from '@/assets/services/services-waschen.webp';
import cleanoxLogo from '@/assets/logo/cleanox.webp';
import ikmLogo from '@/assets/logo/ikm.webp';
import waschenLogo from '@/assets/logo/waschen.webp';
import type { FC } from 'react';

export const Services: FC = () => {
  const { t } = useLanguage();

  const items = [
    {
      title: "Waschen Laundry",
      subtitle: t('services_waschen_sub'),
      description: t('services_waschen_desc'),
      image: waschenImg,
      logo: waschenLogo,
      tag: "Waschen Laundry",
      url: "https://waschenlaundry.com/",
    },
    {
      title: "IKM Laundry",
      subtitle: t('services_ikm_sub'),
      description: t('services_ikm_desc'),
      image: ikmImg,
      logo: ikmLogo,
      tag: "PT IKM",
      url: "https://www.ikmalora.com/",
    },
    {
      title: "Cleanox",
      subtitle: t('services_cleanox_sub'),
      description: t('services_cleanox_desc'),
      image: cleanoxImg,
      logo: cleanoxLogo,
      tag: "Cleanox",
      url: "https://cleanoxindonesia.com/",
    },
  ];

  return (
    <section id="services" className="py-32 px-8 bg-white overflow-hidden relative">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#fc8018]/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#fc8018]/10 bg-[#fc8018]/5 mb-8 group cursor-default"
          >
             <HeartHandshake className="h-4 w-4 text-[#fc8018] group-hover:scale-110 transition-transform" />
             <span className="text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-[#fc8018]">{t('services_subtitle')}</span>
          </motion.div>
          
          <div className="max-w-4xl">
            <AnimatedContent distance={20}>
              <GradientText colors={["#49122E", "#fc8018", "#49122E"]} animationSpeed={8}>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-8 leading-tight">
                  {t('services_main_title')}
                </h3>
              </GradientText>
            </AnimatedContent>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1.5 bg-[#fc8018] rounded-full mx-auto" 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 justify-items-center">
          {items.map((item, i) => (
            <AnimatedContent key={i} delay={i * 0.15} distance={30}>
              <CardContainer className="inter-var w-full">
                <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-[#fc8018]/[0.08] border border-gray-100 w-full md:max-w-[380px] min-h-[540px] rounded-[2.5rem] p-5 overflow-hidden transition-all duration-500 flex flex-col justify-between">
                  <div className="flex flex-col h-full justify-between flex-grow">
                    <div>
                      <CardItem
                        translateZ="50"
                        className="w-full relative h-64"
                      >
                        <div className="w-full h-full rounded-[1.8rem] overflow-hidden">
                          <Image                       
                            src={item.image}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-[1.04]"
                            alt={item.title}
                            sizes="(max-w-768px) 100vw, 380px"
                          />
                        </div>
                        {/* Floating Logo Box */}
                        <div className="absolute -bottom-6 left-6 h-16 w-16 bg-white rounded-2xl shadow-xl flex items-center justify-center p-3 border border-gray-100 group-hover/card:translate-y-[-5px] transition-transform duration-500 z-10">
                          <Image src={item.logo} alt={item.tag} className="w-full h-full object-contain" />
                        </div>
                      </CardItem>

                      <div className="px-3 pt-8 pb-2">
                        <CardItem
                          translateZ="60"
                          className="text-xl md:text-2xl font-semibold text-primary mb-2 tracking-tight"
                        >
                          {item.title}
                        </CardItem>
                        
                        <CardItem
                          translateZ="70"
                          className="text-[13px] md:text-[14px] font-semibold text-[#fc8018] mb-4"
                        >
                          {item.subtitle}
                        </CardItem>

                        <CardItem
                          as="p"
                          translateZ="80"
                          className="text-primary/70 text-sm md:text-base leading-relaxed mb-4 font-medium font-poppins text-justify"
                        >
                          {item.description}
                        </CardItem>
                      </div>
                    </div>

                    <div className="px-3 pb-3">
                      <CardItem
                        translateZ="100"
                      >
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[13px] md:text-[14px] font-semibold text-[#49122E] group/btn hover:translate-x-2 transition-all duration-300"
                        >
                          {t('services_btn')}
                          <ArrowRight className="h-4 w-4" />
                          <div className="h-px w-0 bg-[#49122E] group-hover/btn:w-full transition-all duration-300" />
                        </a>
                      </CardItem>
                    </div>
                  </div>
                </CardBody>
              </CardContainer>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};
