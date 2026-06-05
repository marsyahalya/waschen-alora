"use client";
import { AnimatedContent } from '@/components/animations/AnimatedContent';
import { ArrowRight, Shield, Zap, Leaf, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { useState, type FC } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export const Trust: FC = () => {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const highlights = [
    { title: t('about_val_quality'), icon: Shield, color: "#fc8018", delay: 0.1 },
    { title: t('about_val_hygiene'), icon: Award, color: "#49122E", delay: 0.2 },
    { title: t('about_val_ops'), icon: Zap, color: "#49122E", delay: 0.3 },
    { title: t('about_val_eco'), icon: Leaf, color: "#fc8018", delay: 0.4 }
  ];

  return (
    <section className="pt-20 pb-32 px-6 sm:px-12 md:px-16 lg:px-8 bg-white relative overflow-hidden font-poppins">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left Column: Circular Core Values */}
          <div className="lg:w-1/2 w-full flex items-center justify-center py-10 md:py-0">
            <AnimatedContent delay={0.2} distance={30} direction="vertical">
              <div className="relative w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] lg:w-[520px] lg:h-[520px]">
                
                {/* Outer rotating ring (dashed) */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute rounded-full border-2 border-dashed border-[#fc8018]/20"
                  style={{ inset: "10%" }}
                />

                {/* Middle static ring */}
                <div className="absolute rounded-full border border-gray-200/50" style={{ inset: "20%" }} />

                {/* Inner gradient ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute rounded-full"
                  style={{
                    inset: "30%",
                    background: "conic-gradient(from 0deg, #fc8018 0%, #49122E 25%, #fc8018 50%, #49122E 75%, #fc8018 100%)",
                    padding: "3px",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                {/* Center circle with text — exactly centered */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="absolute z-10 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#49122E] to-[#2d0a1b] flex flex-col items-center justify-center shadow-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <span className="text-white/90 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] mb-1">Core</span>
                  <span className="text-white text-sm sm:text-lg font-bold">Values</span>
                </motion.div>

                {/* Connector lines (dotted) */}
                {[0, 90, 180, 270].map((angle, i) => (
                  <motion.div
                    key={`line-${i}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="absolute z-0"
                    style={{
                      width: "2px",
                      height: "15%",
                      borderLeft: "2px dotted",
                      borderColor: hoveredIndex === i ? "#fc8018" : "#d1d5db",
                      top: "50%",
                      left: "calc(50% - 1px)",
                      transformOrigin: "top center",
                      transform: `rotate(${angle}deg) translateY(40px)`,
                      transition: "border-color 0.3s ease",
                    }}
                  />
                ))}

                {/* Value items — positioned OUTSIDE the rings so text never overlaps */}
                {highlights.map((item, i) => {
                  const Icon = item.icon;
                  const isHovered = hoveredIndex === i;
                  
                  const itemStyles: React.CSSProperties[] = [
                    { top: "-5%", left: "50%", transform: "translateX(-50%)" },
                    { top: "50%", right: "-5%", transform: "translateY(-50%)" },
                    { bottom: "-5%", left: "50%", transform: "translateX(-50%)" },
                    { top: "50%", left: "-5%", transform: "translateY(-50%)" },
                  ];

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + item.delay, type: "spring", stiffness: 200 }}
                      className="absolute z-20"
                      style={itemStyles[i]}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <motion.div
                        animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="flex flex-col items-center gap-2 cursor-pointer"
                      >
                        <motion.div
                          animate={isHovered ? { 
                            boxShadow: `0 8px 25px ${item.color}40`,
                            backgroundColor: item.color,
                          } : {
                            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                            backgroundColor: "#ffffff",
                          }}
                          transition={{ duration: 0.3 }}
                          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2"
                          style={{ borderColor: item.color }}
                        >
                          <Icon 
                            className="h-4 w-4 sm:h-5 sm:h-5 md:h-6 md:w-6 transition-colors duration-300" 
                            style={{ color: isHovered ? "#ffffff" : item.color }}
                          />
                        </motion.div>

                        <span
                          className="text-[10px] sm:text-xs md:text-[13px] font-semibold text-center max-w-[100px] sm:max-w-[150px] leading-snug transition-colors duration-300"
                          style={{ color: isHovered ? item.color : "#374151" }}
                        >
                          {item.title}
                        </span>
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Small decorative dots on the dashed ring */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <motion.div
                    key={`dot-${i}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + i * 0.05 }}
                    className="absolute w-[6px] h-[6px] rounded-full bg-[#fc8018]/30"
                    style={{
                      top: `${50 - 44 * Math.cos((angle * Math.PI) / 180)}%`,
                      left: `${50 + 44 * Math.sin((angle * Math.PI) / 180)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                ))}
              </div>
            </AnimatedContent>
          </div>

          {/* Right Column: About Us Content */}
          <div className="lg:w-1/2">
            <AnimatedContent distance={30} direction="vertical">
              <div className="flex flex-col items-start">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-[#fc8018] text-sm md:text-base font-semibold uppercase tracking-[0.25em] mb-4 block"
                >
                  {t('about_subtitle')}
                </motion.span>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6 leading-tight tracking-tight"
                >
                  {t('about_title')} <span className="text-[#fc8018]">2013</span>
                </motion.h3>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="h-1 bg-[#fc8018] mb-8 rounded-full" 
                />
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-primary/70 text-base lg:text-lg leading-relaxed mb-10 max-w-lg text-justify"
                >
                  {t('about_desc')}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <a href="/about">
                    <Button variant="outline" className="rounded-full px-8 py-6 border-primary text-primary hover:bg-[#fc8018] hover:text-white hover:border-[#fc8018] transition-all group shadow-sm hover:shadow-md">
                      {t('about_cta')}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </motion.div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
};
