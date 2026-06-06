"use client";
import { Mail, Phone, Send } from 'lucide-react';
import type { FC } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export const ContactSection: FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-8 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <h2 className="text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-[#fc8018] mb-4 block">{t('contact_subtitle')}</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-8 tracking-tight leading-tight">
            {t('contact_title_home').split('\n')[0]}<br/>{t('contact_title_home').split('\n')[1]}
          </h3>
          <p className="text-lg text-primary/70 leading-relaxed mb-12 max-w-lg font-medium">
            {t('contact_desc_home')}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-center gap-5 p-2">
               <div className="h-14 w-14 bg-primary/5 flex items-center justify-center text-primary rounded-[1.25rem]">
                  <Phone className="h-6 w-6" />
               </div>
               <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#fc8018] mb-1">Whatsapp Head Office</p>
                  <p className="text-base font-semibold text-primary">085122333371</p>
               </div>
            </div>
            <div className="flex items-center gap-5 p-2">
               <div className="h-14 w-14 bg-primary/5 flex items-center justify-center text-primary rounded-[1.25rem]">
                  <Mail className="h-6 w-6" />
               </div>
               <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#fc8018] mb-1">Email</p>
                  <p className="text-sm sm:text-base font-semibold text-primary break-words">waschen.aloraindonesia@<wbr />gmail.com</p>
               </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-primary/5 rounded-[3rem] rotate-3 -z-10" />
          <div className="bg-white border border-gray-100 p-10 md:p-14 rounded-[3rem] shadow-2xl relative">
            <div className="flex items-center gap-4 mb-10">
               <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <Send className="h-5 w-5" />
               </div>
               <h4 className="text-2xl font-semibold text-primary">{t('contact_card_title')}</h4>
            </div>
            
            <div className="space-y-6">
               <a
                 href={`https://wa.me/6285122333371?text=${encodeURIComponent("Halo Waschen Alora Indonesia\n\nSaya ingin mengajukan permintaan layanan dengan detail berikut:\n▸ Nama: \n▸ Email: \n▸ Kebutuhan: \n\nMohon informasi lebih lanjut terkait layanan yang sesuai dengan kebutuhan saya. Terima kasih atas bantuan dan responnya, terima kasih!")}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full h-16 bg-primary hover:bg-primary/90 text-white text-base font-semibold rounded-full flex gap-3 items-center justify-center shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95"
               >
                  {t('contact_btn_send')}
               </a>
               
               <a
                 href={`https://wa.me/6285122333371?text=${encodeURIComponent("Halo Waschen Alora Indonesia\n\nSaya tertarik untuk melihat proposal detail mengenai layanan Anda. Mohon informasi lebih lanjut.\n\nTerima kasih!")}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full h-16 text-primary hover:bg-primary/5 text-base font-semibold rounded-full flex items-center justify-center transition-all border border-gray-200"
               >
                  {t('contact_btn_proposal')}
               </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gray-50/50 -z-20 rounded-tl-[10rem]" />
    </section>
  );
};
