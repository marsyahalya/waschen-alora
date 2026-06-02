"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<string, { en: string; id: string }> = {
  // Navbar
  nav_home: { en: "Home", id: "Beranda" },
  nav_about: { en: "About Us", id: "Tentang Kami" },
  nav_services: { en: "Services", id: "Layanan" },
  nav_careers: { en: "Careers", id: "Karir" },
  nav_contact: { en: "Contact Us", id: "Hubungi Kami" },

  // Hero Section
  hero_badge_deliver: { en: "We Deliver", id: "Kami Menghadirkan" },
  hero_badge_in_every: { en: "in Every Service.", id: "di Setiap Layanan." },
  hero_title: { en: "Hygiene Solutions for Homes, Businesses, and Healthcare", id: "Solusi Higienis Lengkap untuk Rumah, Bisnis, dan Layanan Kesehatan" },
  hero_desc: { en: "PT Waschen Alora Indonesia is a holding company specializing in commercial laundry and cleaning services across B2B and B2C sectors. We deliver comprehensive solutions including retail laundry, corporate laundry, healthcare laundry & linen management, as well as home and office cleaning.", id: "PT Waschen Alora Indonesia adalah induk perusahaan (holding) di bidang commercial laundry dan cleaning service untuk sektor B2B dan B2C. Kami menghadirkan solusi lengkap mulai dari retail laundry, laundry korporat (corporate laundry), laundry & sewa linen rumah sakit (healthcare laundry & linen management), hingga jasa kebersihan rumah (home cleaning) dan kantor (office cleaning)." },
  hero_cta: { en: "Discover Our Services", id: "Temukan Layanan Kami" },
  word_professional: { en: "Professional", id: "Profesional" },
  word_resilience: { en: "Resilience", id: "Ketahanan" },
  word_collaboration: { en: "Collaboration", id: "Kolaborasi" },
  word_innovation: { en: "Innovation", id: "Inovasi" },
  word_sustainability: { en: "Sustainability", id: "Keberlanjutan" },
  word_excellence: { en: "Excellence", id: "Keunggulan" },

  // Floating Stats
  stats_established: { en: "Established", id: "Didirikan" },
  stats_clients: { en: "Satisfied Clients", id: "Klien Puas" },
  stats_experience: { en: "B2B Clients", id: "Klien B2B" },

  // About Us (Trust Section)
  about_subtitle: { en: "About Us", id: "Tentang Kami" },
  about_title: { en: "Trusted Hygiene Services since", id: "Layanan Higienis Terpercaya sejak" },
  about_desc: { en: "As a holding company in commercial laundry and cleaning services, PT Waschen Alora Indonesia serves both B2B and B2C sectors. We offer retail laundry, corporate laundry, healthcare laundry & linen management, and home & office cleaning with the highest standards of cleanliness and trust.", id: "Sebagai holding company di bidang commercial laundry dan cleaning service, PT Waschen Alora Indonesia melayani sektor B2B dan B2C. Kami menghadirkan layanan retail laundry, laundry perusahaan, laundry & sewa linen rumah sakit, hingga pembersihan rumah dan kantor dengan standar kebersihan dan kepercayaan terbaik." },
  about_cta: { en: "Learn More About Us", id: "Pelajari Lebih Lanjut Tentang Kami" },
  about_values: { en: "Our Core Values", id: "Nilai Inti Kami" },
  about_val_quality: { en: "Premium Quality Services", id: "Layanan Kualitas Premium" },
  about_val_hygiene: { en: "Certified Hygiene Standards", id: "Standar Higienis Bersertifikasi" },
  about_val_ops: { en: "Professional & Reliable Operations", id: "Operasional Profesional & Terpercaya" },
  about_val_eco: { en: "Eco-friendly & Safe Solutions", id: "Solusi Ramah Lingkungan & Aman" },

  // Network
  network_subtitle: { en: "Our Network", id: "Jaringan Kami" },
  network_title_p1: { en: "Trusted by", id: "Dipercaya oleh" },
  network_title_p2: { en: "Leading Institutions", id: "Institusi Terkemuka" },

  // Services
  services_subtitle: { en: "Service Excellence", id: "Keunggulan Layanan" },
  services_main_title: { en: "Hygiene Services for Different Needs", id: "Layanan Higienis untuk Berbagai Kebutuhan" },
  services_btn: { en: "Discover Service", id: "Jelajahi Layanan" },
  services_waschen_sub: { en: "Premium Laundry for B2B and B2C", id: "Laundry Premium untuk Sektor B2B dan B2C" },
  services_waschen_desc: { en: "Premium laundry care serving both B2B (hospitality, corporate, retail partners) and B2C (individuals, families) needs.", id: "Perawatan laundry premium yang melayani kebutuhan B2B (perhotelan, korporat, mitra retail) maupun B2C (perorangan, keluarga)." },
  services_ikm_sub: { en: "Hospitality Laundry and Linen Management", id: "Manajemen Laundry dan Linen Perhotelan" },
  services_ikm_desc: { en: "Dependable laundry and linen management for hospitality, healthcare, and corporate clients. We provide high quality linen rental.", id: "Manajemen laundry dan linen terpercaya untuk perhotelan, layanan kesehatan, dan korporat. Kami menyediakan penyewaan linen berkualitas tinggi." },
  services_cleanox_sub: { en: "Home and Office Cleaning Services", id: "Layanan Pembersihan Rumah dan Kantor" },
  services_cleanox_desc: { en: "Professional cleaning services for residential and workplace environments. We help you maintain clean and comfortable living and working spaces.", id: "Layanan pembersihan profesional untuk rumah tinggal dan tempat kerja. Kami membantu Anda menjaga ruang hidup dan kerja tetap bersih dan nyaman." },

  // Workflow / Company Profile
  flow_subtitle: { en: "Company Profile", id: "Profil Perusahaan" },
  flow_title_p1: { en: "A Closer Look", id: "Lihat Lebih Dekat" },
  flow_title_p2: { en: "Our Office & Operations", id: "Kantor & Operasional Kami" },
  flow_unit_title: { en: "Office Preview", id: "Preview Kantor" },
  flow_unit_desc: { en: "A glimpse of our facilities and the team working every day to deliver the best service.", id: "Sekilas tentang fasilitas dan tim kami yang bekerja setiap hari untuk memberikan layanan terbaik." },

  // Gallery
  gallery_subtitle: { en: "Gallery", id: "Galeri" },
  gallery_title: { en: "Visualizing\nExcellence", id: "Visualisasi\nKeunggulan" },
  gallery_desc: { en: "We are committed to environmentally responsible operations through energy efficiency, water-conscious processes, and safe chemical usage.", id: "Kami berkomitmen pada operasional yang bertanggung jawab terhadap lingkungan melalui efisiensi energi, proses hemat air, dan penggunaan bahan kimia yang aman." },
  gallery_trigger: { en: "View Facility Gallery", id: "Lihat Galeri Fasilitas" },
  gallery_modal_title: { en: "Our Operations & Facilities", id: "Operasional & Fasilitas Kami" },
  gallery_social_title: { en: "Social Media Updates", id: "Pembaruan Media Sosial" },
  gallery_social_desc: { en: "Get real-time updates on our operations and community impact @waschenalora", id: "Dapatkan pembaruan langsung tentang operasional dan dampak komunitas kami @waschenalora" },

  // Testimonials
  testi_eyebrow: { en: "Voices of Trust", id: "Suara Kepercayaan" },
  testi_title_p1: { en: "What Our Partners", id: "Apa Kata" },
  testi_title_p2: { en: "Say About Us", id: "Mitra Kami Tentang Kami" },

  // Sustainability
  sust_subtitle: { en: "Sustainability", id: "Keberlanjutan" },
  sust_eyebrow: { en: "Sustaining the Future", id: "Menjaga Masa Depan" },
  sust_title: { en: "Environmental Responsibility", id: "Tanggung Jawab Lingkungan" },
  sust_desc: { en: "We are committed to environmentally responsible operations through energy efficiency, water-conscious processes, and safe chemical usage.", id: "Kami berkomitmen pada operasional yang bertanggung jawab terhadap lingkungan melalui efisiensi energi, proses hemat air, dan penggunaan bahan kimia yang aman." },
  sust_energy_title: { en: "Energy Efficiency", id: "Efisiensi Energi" },
  sust_energy_desc: { en: "High-performance machinery with low energy consumption.", id: "Mesin berkinerja tinggi dengan konsumsi energi rendah." },
  sust_water_title: { en: "Water Conscious", id: "Sadar Penggunaan Air" },
  sust_water_desc: { en: "Water recycling systems and optimized processing cycles.", id: "Sistem daur ulang air dan siklus pemrosesan yang dioptimalkan." },

  // Contact Footer/Section
  contact_subtitle: { en: "Connect", id: "Hubungkan" },
  contact_title_home: { en: "Partner with the\nHygiene Experts", id: "Bermitra dengan\nAhli Higienis" },
  contact_desc_home: { en: "Looking for a reliable laundry or cleaning partner? Our team is ready to provide a tailored solution for your business.", id: "Mencari mitra laundry atau pembersihan yang andal? Tim kami siap memberikan solusi yang disesuaikan untuk bisnis Anda." },
  contact_card_title: { en: "Service Request", id: "Permintaan Layanan" },
  contact_btn_send: { en: "Send Inquiry", id: "Kirim Permintaan" },
  contact_btn_proposal: { en: "Request Detailed Proposal", id: "Minta Proposal Detail" },
  contact_wa_head: { en: "Hubungi WhatsApp untuk respon cepat", id: "Contact WhatsApp for quick response" },

  // Contact Page (ContactClient.tsx)
  contact_page_subtitle: { en: "Get in Touch", id: "Hubungi Kami" },
  contact_page_title: { en: "Let’s Connect.\nPartnerships or Support", id: "Mari Terhubung.\nKemitraan atau Dukungan" },
  contact_page_desc: { en: "Have an inquiry or looking for a long-term partnership? Our team is ready to provide a tailored hygiene solution.", id: "Punya pertanyaan atau sedang mencari kemitraan jangka panjang? Tim kami siap memberikan solusi higienis yang disesuaikan." },
  contact_info_title: { en: "Contact Information", id: "Informasi Kontak" },
  contact_info_desc: { en: "Reach out to our specialized teams for institutional or residential inquiries.", id: "Hubungi tim khusus kami untuk pertanyaan institusi atau perumahan." },
  contact_form_title: { en: "Send Us a Message", id: "Kirim Pesan" },
  contact_form_desc: { en: "Have feedback, questions, or anything you'd like to share? We'd love to hear from you.", id: "Punya masukan, pertanyaan, atau hal lain yang ingin disampaikan? Kami senang mendengar dari Anda." },
  contact_name_label: { en: "Full Name", id: "Nama Lengkap" },
  contact_email_label: { en: "Email Address", id: "Alamat Email" },
  contact_interest_label: { en: "Service Interest", id: "Minat Layanan" },
  contact_message_label: { en: "Message Details", id: "Rincian Pesan" },
  contact_submit: { en: "Submit Request", id: "Kirim Permintaan" },
  contact_faq_subtitle: { en: "Common Inquiries", id: "Pertanyaan Umum" },
  contact_faq_title: { en: "Frequently Asked Questions", id: "Pertanyaan yang Sering Diajukan" },
  contact_direct_title: { en: "Direct Consultation", id: "Konsultasi Langsung" },
  contact_direct_desc: { en: "Prefer a face-to-face meeting? Visit our head office to discuss large-scale partnerships in detail.", id: "Lebih memilih pertemuan langsung? Kunjungi kantor pusat kami untuk membahas kemitraan skala besar secara rinci." },
  contact_direct_btn: { en: "Schedule a Visit", id: "Jadwalkan Kunjungan" },
  contact_wa_sub: { en: "Contact WhatsApp for quick response", id: "Hubungi WhatsApp untuk respon cepat" },
  contact_email_sub: { en: "Corporate & General Partnerships", id: "Kemitraan Korporat & Umum" },
  contact_address_sub: { en: "Leuwinanggung, Tapos, Depok City, West Java", id: "Leuwinanggung, Tapos, Kota Depok, Jawa Barat" },
  faq_q1: { en: "How does the partnership system work at Waschen Alora?", id: "Bagaimana sistem kemitraan (partnership) di Waschen Alora?" },
  faq_a1: { en: "For partnerships, we are highly flexible to be discussed to match your business needs. Please contact us directly via WhatsApp Head Office.", id: "Untuk kemitraan, kami sangat fleksibel untuk berdiskusi (flexible to be discussed) menyesuaikan kebutuhan bisnis Anda. Silakan hubungi kami secara langsung melalui WhatsApp Head Office." },
  faq_q2: { en: "Where can we send partnership documents or inquiries?", id: "Ke mana kami dapat mengirimkan berkas kemitraan atau inquiry?" },
  faq_a2: { en: "Any partnership proposals, offers, or official inquiries can be sent to our official email address at waschen.aloraindonesia@gmail.com.", id: "Setiap proposal kemitraan, penawaran, maupun inquiry resmi dapat dikirimkan ke alamat email resmi kami di waschen.aloraindonesia@gmail.com." },
  faq_q3: { en: "How long is the commercial laundry service turnaround time?", id: "Berapa lama proses pengerjaan layanan laundry komersial?" },
  faq_a3: { en: "Our commercial laundry service is generally completed within a 24-48 hour cycle, but we are ready to adjust the schedule according to the partner's operational needs.", id: "Layanan laundry komersial kami umumnya selesai dalam siklus 24-48 jam, namun kami siap menyesuaikan jadwal sesuai kebutuhan operasional mitra." },

  // About Page (AboutClient.tsx)
  about_page_subtitle: { en: "Company Overview", id: "Sekilas Perusahaan" },
  about_page_title: { en: "Excellence in Every Service", id: "Keunggulan di Setiap Layanan" },
  about_page_desc: { en: "PT Waschen Alora Indonesia is a leading holding company established in 2013, focusing on commercial laundry and cleaning services for the B2B and B2C sectors. Our services include retail laundry, corporate laundry, healthcare laundry & linen management, and home & office cleaning with the highest hygiene standards.", id: "PT Waschen Alora Indonesia adalah induk perusahaan (holding) terkemuka sejak 2013 yang berfokus pada commercial laundry dan cleaning service untuk sektor B2B dan B2C. Layanan kami mencakup retail laundry, laundry perusahaan (corporate laundry), laundry & sewa linen rumah sakit (healthcare laundry & linen management), serta jasa kebersihan rumah (home cleaning) dan kantor (office cleaning) dengan standar higienitas tertinggi." },
  
  about_vision_title: { en: "Vision", id: "Visi" },
  about_vision_text: { en: "To become the leading and most trusted brand for professional laundry and cleaning services in Indonesia", id: "Menjadi brand terdepan dan paling terpercaya untuk layanan laundry dan kebersihan profesional di Indonesia" },
  about_mission_title: { en: "Mission", id: "Misi" },
  about_mission_text_1: { en: "Delivering high-quality laundry and cleaning services through modern technology, hygienic procedures, and trained professionals.", id: "Memberikan layanan laundry dan kebersihan dengan standar kualitas tinggi melalui penggunaan teknologi modern, prosedur higienis, dan tenaga profesional terlatih." },
  about_mission_text_2: { en: "Ensuring customer satisfaction through personal, responsive, and consistent service.", id: "Menjamin kepuasan pelanggan melalui pelayanan yang personal, responsif, dan konsisten." },
  about_mission_text_3: { en: "Building a company culture with integrity, professionalism, and quality orientation.", id: "Membangun budaya perusahaan yang berintegritas, profesional, dan berorientasi pada mutu." },
  about_mission_text_4: { en: "Being a reliable, innovative, and trusted partner for customers in maintaining comfort and cleanliness.", id: "Menjadi mitra yang andal, inovatif dan terpercaya bagi pelanggan dalam menjaga kenyamanan dan kebersihan." },
  about_mission_text_5: { en: "Implementing eco-friendly practices in every operational aspect to support sustainability.", id: "Mengimplementasikan praktik ramah lingkungan dalam setiap aspek operasional untuk mendukung keberlanjutan." },

  about_values_title: { en: "Corporate Value", id: "Nilai-Nilai Perusahaan" },
  about_values_precise: { en: "P R E C I S E", id: "P R E C I S E" },
  about_values_desc: { en: "The name \"PRECISE\" symbolizes services that are accurate, detailed, and precise, reflecting our high standards of work and a continuous focus on quality improvement.", id: "Nama \"PRECISE\" melambangkan layanan yang tepat, akurat, dan detail, yang merefleksikan standar kerja tinggi dan fokus terhadap peningkatan kualitas secara berkelanjutan." },
  about_values_tagline: { en: "\"PRECISE in service, PRECISE in trust - Total Care for Happy Life\"", id: "\"PRECISE in service, PRECISE in trust - Total Care for Happy Life\"" },
  about_values_quote: { en: "\"PRECISE is not just how we work, but who we are - precise in quality, care, and service.\"", id: "\"PRECISE is not just how we work, but who we are - precise in quality, care, and service.\"" },

  about_p_title: { en: "Professionalism", id: "Professionalism" },
  about_p_desc: { en: "Service delivered with high competence, ethics, and discipline, building a trusted brand image.", id: "Layanan dengan kompetensi, etika, dan disiplin tinggi untuk membangun citra brand yang terpercaya." },
  
  about_r_title: { en: "Resilience", id: "Resilience" },
  about_r_desc: { en: "Tough mindset, agile in solving challenges. A reliable partner that is on-time, consistent, always ready.", id: "Mental tangguh dan adaptif dalam menghadapi tantangan. Mitra andal yang tepat waktu, konsisten, dan selalu siap." },
  
  about_c_title: { en: "Collaboration", id: "Collaboration" },
  about_c_desc: { en: "The best results come from strong teamwork through open communication, mutual respect, and shared goals.", id: "Hasil terbaik lahir dari kerja sama yang kuat melalui komunikasi terbuka, saling menghargai, dan tujuan bersama." },
  
  about_i_title: { en: "Innovation", id: "Innovation" },
  about_i_desc: { en: "Setting new standards in efficiency and quality through eco-friendly tech and digital systems.", id: "Menciptakan standar baru dalam efisiensi dan kualitas lewat teknologi ramah lingkungan dan sistem digital." },
  
  about_s_title: { en: "Sustainability", id: "Sustainability" },
  about_s_desc: { en: "Eco-friendly practices for a cleaner future, safe chemicals, water and energy efficiency.", id: "Praktik ramah lingkungan untuk masa depan yang lebih bersih, bahan kimia aman, serta hemat air dan energi." },
  
  about_e_title: { en: "Excellence", id: "Excellence" },
  about_e_desc: { en: "Excellence is our baseline. We deliver consistent quality and on-time service, every single time.", id: "Excellence adalah standar dasar kami, kualitas konsisten dan ketepatan waktu di setiap layanan." },

  about_programs_title: { en: "Our Programs", id: "Program Kami" },
  about_programs_subtitle: { en: "Fostering corporate excellence and strong team bonding", id: "Mendorong keunggulan perusahaan dan kerja sama tim yang kuat" },
  about_program_award_title: { en: "Alora Award", id: "Alora Award" },
  about_program_award_desc: { en: "An annual recognition program honoring outstanding team members who demonstrate exceptional dedication, leadership, and adherence to our core values.", id: "Program penghargaan tahunan untuk mengapresiasi anggota tim berprestasi yang menunjukkan dedikasi luar biasa, kepemimpinan, dan kepatuhan terhadap nilai-nilai inti kami." },
  about_program_outing_title: { 
    en: "Alora Outing", 
    id: "Alora Outing" 
  },
  about_program_outing_desc: { 
    en: "Alora Outing is our way of strengthening teamwork, creating meaningful connections, and recharging together to keep our workplace positive, collaborative, and full of energy.", 
    id: "Alora Outing menjadi momen untuk mempererat kerja sama tim, membangun kedekatan, dan mengisi kembali semangat bersama agar suasana kerja tetap positif, hangat, dan penuh energi." 
  },

  about_program_academy_title: { 
    en: "Alora Academy", 
    id: "Alora Academy" 
  },
  about_program_academy_desc: { 
    en: "Alora Academy empowers our team through English classes and practical training programs, helping every member communicate with confidence and deliver exceptional service experiences.", 
    id: "Alora Academy hadir melalui kelas Bahasa Inggris dan pelatihan praktis untuk membantu setiap anggota tim berkomunikasi dengan lebih percaya diri dan memberikan pengalaman layanan terbaik bagi setiap pelanggan." 
  },

  // Footer
  footer_desc: { en: "A commercial laundry and cleaning holding company for B2B & B2C sectors. Providing healthcare laundry, linen management, corporate laundry, retail laundry, and home & office cleaning.", id: "Induk perusahaan (holding) commercial laundry dan cleaning service untuk sektor B2B & B2C. Menghadirkan laundry rumah sakit, sewa linen, laundry perusahaan, retail laundry, serta jasa kebersihan rumah & kantor." },
  footer_platform: { en: "Platform", id: "Platform" },
  footer_services: { en: "Service Units", id: "Unit Layanan" },
  footer_sustainability: { en: "Sustainability", id: "Keberlanjutan" },
  footer_contact: { en: "Contact", id: "Kontak" },
  footer_solutions: { en: "Solutions", id: "Solusi" },
  footer_hosp_laundry: { en: "Hospital Laundry", id: "Laundry Rumah Sakit" },
  footer_comm_laundry: { en: "Commercial Laundry", id: "Laundry Komersial" },
  footer_home_clean: { en: "Home Cleaning", id: "Pembersihan Rumah" },
  footer_office_clean: { en: "Office Cleaning", id: "Pembersihan Kantor" },
  footer_operational: { en: "Operational", id: "Operasional" },
  footer_centers: { en: "Centers across West & Central Java, Indonesia.", id: "Pusat-pusat di seluruh Jawa Barat & Jawa Tengah, Indonesia." },
  footer_privacy: { en: "Privacy Policy", id: "Kebijakan Privasi" },
  footer_terms: { en: "Terms of Service", id: "Ketentuan Layanan" },
  footer_navigation: { en: "Navigation", id: "Navigasi" },
  footer_head_office: { en: "Head Office", id: "Kantor Pusat" },
  footer_copyright: { en: "All rights reserved.", id: "Hak cipta dilindungi." },
  footer_tagline: { en: "Hygiene Solutions", id: "Solusi Higienis Lengkap" },

  // Sustainability Section
  sust_main_title: { en: "Committed to the Environment", id: "Berkomitmen pada Lingkungan" },
  sust_main_desc: { en: "Our laundry wastewater goes through a multi-stage treatment to keep it safe, clean, and eco-friendly.", id: "Air limbah laundry kami diolah secara bertahap agar aman, bersih, dan ramah lingkungan." },

  // Hero Section - Title Lines
  hero_title_line1: { en: "Hygiene Solutions", id: "Solusi Higienis" },
  hero_title_line2: { en: "for Homes, Businesses,", id: "untuk Rumah, Bisnis," },
  hero_title_line3: { en: "and Healthcare", id: "dan Layanan Kesehatan" },

  // About Page - Vision Mission
  about_vision_mission: { en: "Vision & Mission", id: "Visi & Misi" },

  // Contact Page
  contact_wa_direct: { en: "WhatsApp Direct", id: "WhatsApp Langsung" },
  contact_email_us: { en: "Email Us", id: "Email Kami" },

  // Careers Page
  careers_subtitle: { en: "Careers", id: "Karir" },
  careers_hiring_badge: { en: "We're Hiring", id: "Kami Membuka Lowongan" },
  careers_hero_title1: { en: "Step Into Excellence.", id: "Langkah Menuju Keunggulan." },
  careers_hero_title2: { en: "Join Waschen Alora.", id: "Bergabung dengan Waschen Alora." },
  careers_hero_desc: { en: "Build your career with one of Indonesia's most trusted hygiene services providers. Find a role that fits and grow with us.", id: "Bangun karir Anda bersama salah satu penyedia layanan higienis terpercaya di Indonesia. Temukan peran yang cocok dan berkembang bersama kami." },
  careers_search_placeholder: { en: "Search position or branch...", id: "Cari posisi atau cabang..." },
  careers_filter_category: { en: "Category", id: "Kategori" },
  careers_filter_type: { en: "Job Type", id: "Tipe Pekerjaan" },
  careers_filter_location: { en: "Location", id: "Lokasi" },
  careers_all_categories: { en: "All Categories", id: "Semua Kategori" },
  careers_all_types: { en: "All Types", id: "Semua Tipe" },
  careers_all_locations: { en: "All Locations", id: "Semua Lokasi" },
  careers_salary_undisclosed: { en: "Salary undisclosed", id: "Gaji tidak diungkapkan" },
  careers_experience_not_specified: { en: "Experience not specified", id: "Pengalaman tidak ditentukan" },
  careers_education_not_specified: { en: "Education not specified", id: "Pendidikan tidak ditentukan" },
  careers_apply_btn: { en: "Apply on Glints", id: "Lamar di Glints" },
  careers_see_more: { en: "See More", id: "Selengkapnya" },
  careers_see_less: { en: "See Less", id: "Sembunyikan" },
  careers_no_results_title: { en: "No matching opportunities", id: "Tidak ada peluang yang cocok" },
  careers_no_results_desc: { en: "We couldn't find any roles matching your current filters. Try resetting or searching for something else.", id: "Kami tidak dapat menemukan peran yang cocok dengan filter Anda saat ini. Coba atur ulang atau cari yang lain." },
  careers_clear_filters: { en: "Clear All Filters", id: "Hapus Semua Filter" },
  careers_error_title: { en: "Error Loading Careers", id: "Gagal Memuat Karir" }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('waschen_alora_lang') as Language;
    if (saved === 'en' || saved === 'id') {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('waschen_alora_lang', lang);
  };

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[language] || entry['en'];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
