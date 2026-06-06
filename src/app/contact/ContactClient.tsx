"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { AnimatedContent } from '@/components/animations/AnimatedContent';
import { ContactSection } from '@/components/sections/Contact';
import { useState, type FC } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export const ContactClient: FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "6285122333371";
    const message = `Halo Waschen Alora Indonesia

Saya ingin mengajukan permintaan layanan dengan detail berikut:
▸ Nama: ${formData.name}
▸ Email: ${formData.email}
▸ Kebutuhan: ${formData.message}

Mohon informasi lebih lanjut terkait layanan yang sesuai dengan kebutuhan saya. Terima kasih atas bantuan dan responnya, terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50/50 font-poppins relative">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-[#49122E] via-[#3d0f25] to-[#2d0a1b] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#fc8018]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#fc8018]/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </div>

        <div className="container max-w-[1400px] mx-auto px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fc8018]/15 border border-[#fc8018]/30 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fc8018] animate-pulse" />
              <span className="text-[#fc8018] text-sm md:text-base font-bold uppercase tracking-[0.25em]">
                {t('contact_page_subtitle')}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
              {t('contact_page_title').split('\n')[0]} <br />
              <span className="text-[#fc8018] relative inline-block">
                {t('contact_page_title').split('\n')[1]}
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#fc8018]/30 rounded-full" />
              </span>
            </h1>

            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed mb-10">
              {t('contact_page_desc')}
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/6285122333371"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#fc8018] hover:bg-[#fc8018]/90 text-white rounded-2xl font-semibold text-sm shadow-xl shadow-[#fc8018]/20 transition-all hover:scale-105"
              >
                <Phone className="h-4 w-4" />
                {t('contact_wa_direct')}
              </a>
              <a
                href="mailto:waschen.aloraindonesia@gmail.com"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-white/8 hover:bg-white/15 text-white rounded-2xl font-semibold text-sm border border-white/15 transition-all"
              >
                <Mail className="h-4 w-4" />
                {t('contact_email_us')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-32 px-8">
        <div className="container max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Contact Info Column */}
            <div className="lg:col-span-5 space-y-12">
              <div className="relative">
                <div className="absolute -left-8 top-0 w-1 h-12 bg-[#fc8018]" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">{t('contact_info_title')}</h2>
                <p className="text-primary/45 mt-4 font-medium max-w-sm">{t('contact_info_desc')}</p>
              </div>

              <div className="space-y-6">
                {[
                  { 
                    label: "Whatsapp Head Office", 
                    value: "085122333371", 
                    sub: t('contact_wa_sub'),
                    icon: <Phone className="h-6 w-6" />,
                    accent: "bg-[#fc8018]/5 text-[#fc8018]",
                    link: "https://wa.me/6285122333371"
                  },
                  { 
                    label: "Email Inquiry", 
                    value: "waschen.aloraindonesia@gmail.com", 
                    sub: t('contact_email_sub'),
                    icon: <Mail className="h-6 w-6" />,
                    accent: "bg-primary/5 text-primary",
                    link: "mailto:waschen.aloraindonesia@gmail.com"
                  },
                  { 
                    label: t('footer_operational'), 
                    value: "Raffles Hills Blok T.11 No. 18", 
                    sub: t('contact_address_sub'),
                    icon: <MapPin className="h-6 w-6" />,
                    accent: "bg-[#49122E]/5 text-[#49122E]",
                    link: "https://maps.app.goo.gl/wk5pYKgyEe2V6s2R6"
                  }
                ].map((item, i) => (
                  <AnimatedContent key={i} delay={i * 0.1}>
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-8 bg-white/70 backdrop-blur-md rounded-[2.5rem] border border-gray-100 hover:border-primary/20 shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(73,18,46,0.04)] transition-all duration-500 group cursor-pointer relative overflow-hidden"
                    >
                      {/* Subtle hover background accent glow */}
                      <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
                      
                      <div className="flex items-start gap-6 relative z-10">
                        <div className={`h-14 w-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${item.accent}`}>
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-[#fc8018] mb-2">{item.label}</h4>
                          <p className="text-base sm:text-lg md:text-xl font-semibold text-primary tracking-tight break-words leading-snug">
                            {item.value.includes('@') ? (
                              <>
                                {item.value.split('@')[0]}@<wbr />{item.value.split('@')[1]}
                              </>
                            ) : (
                              item.value
                            )}
                          </p>
                          <p className="text-xs font-medium text-gray-400 mt-2 leading-relaxed">{item.sub}</p>
                        </div>
                      </div>
                    </a>
                  </AnimatedContent>
                ))}
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white/80 backdrop-blur-md p-12 lg:p-20 rounded-[3.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.04)] border border-gray-100/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-2 bg-[#fc8018]" />
                <div className="mb-14">
                  <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight">{t('contact_form_title')}</h3>
                  <p className="text-primary/45 font-medium leading-relaxed">{t('contact_form_desc')}</p>
                </div>

                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[11px] font-semibold uppercase tracking-widest text-primary/45 ml-2">{t('contact_name_label')}</label>
                      <Input 
                        placeholder="E.g. John Doe" 
                        className="h-16 md:h-18 rounded-[1.25rem] bg-gray-50/50 border-none focus-visible:ring-primary/10 text-base font-medium px-6 focus:bg-white transition-colors"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[11px] font-semibold uppercase tracking-widest text-primary/45 ml-2">{t('contact_email_label')}</label>
                      <Input 
                        placeholder="name@company.com" 
                        type="email"
                        className="h-16 md:h-18 rounded-[1.25rem] bg-gray-50/50 border-none focus-visible:ring-primary/10 text-base font-medium px-6 focus:bg-white transition-colors"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-[11px] font-semibold uppercase tracking-widest text-primary/45 ml-2">{t('contact_message_label')}</label>
                    <Textarea 
                      placeholder="Tell us about your organization and requirements..." 
                      className="min-h-[200px] rounded-[1.5rem] bg-gray-50/50 border-none focus-visible:ring-primary/10 p-6 text-base font-medium focus:bg-white transition-colors"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full h-20 bg-primary hover:bg-primary/95 text-white rounded-[1.5rem] shadow-xl shadow-primary/10 text-base font-semibold group transition-all duration-500 hover:scale-[1.01] active:scale-95"
                  >
                    {t('contact_submit')}
                    <Send className="ml-3 h-4 w-4 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-500" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Homepage Contact Section */}
      <ContactSection />
    </div>
  );
};
