export interface KeywordItem {
  slug: string;
  title: { en: string; id: string };
  description: { en: string; id: string };
  h1: { en: string; id: string };
  unit: 'waschen' | 'ikm' | 'cleanox';
  serviceName: { en: string; id: string };
  locationName: { en: string; id: string };
  descriptionDetailed: { en: string; id: string };
  features: Array<{
    title: { en: string; id: string };
    desc: { en: string; id: string };
  }>;
  faqs: Array<{
    q: { en: string; id: string };
    a: { en: string; id: string };
  }>;
}

export const keywordsData: Record<string, KeywordItem> = {
  'laundry-raffles-hills-cibubur': {
    slug: 'laundry-raffles-hills-cibubur',
    title: {
      en: 'Premium Laundry Raffles Hills Cibubur | Waschen Alora',
      id: 'Laundry Premium Raffles Hills Cibubur | Waschen Alora'
    },
    description: {
      en: 'Professional and premium laundry services in Raffles Hills especially in Jabodetabek, Cibubur. Certified hygiene, eco-friendly detergents, and express services available.',
      id: 'Layanan laundry premium dan profesional di Raffles Hills khususnya di Jabodetabek, Cibubur. Standar higienis bersertifikasi, detergen ramah lingkungan, dan tersedia layanan ekspres.'
    },
    h1: {
      en: 'Premium Laundry Services in Raffles Hills especially in Jabodetabek Cibubur',
      id: 'Jasa Laundry Premium di Raffles Hills khususnya di Jabodetabek Cibubur'
    },
    unit: 'waschen',
    serviceName: { en: 'Premium Laundry', id: 'Laundry Premium' },
    locationName: { en: 'Raffles Hills, Cibubur (Jabodetabek)', id: 'Raffles Hills, Cibubur (Jabodetabek)' },
    descriptionDetailed: {
      en: 'PT Waschen Alora Indonesia provides premium laundry and dry cleaning services for residents of Raffles Hills especially in Jabodetabek, Cibubur. We utilize state-of-the-art washing technology and eco-friendly products to clean your garments with care and precision.',
      id: 'PT Waschen Alora Indonesia menyediakan jasa laundry premium dan dry cleaning untuk warga perumahan Raffles Hills, Cibubur. Kami menggunakan teknologi pencucian termodern dan produk ramah lingkungan untuk membersihkan pakaian Anda secara cermat dan bersih.'
    },
    features: [
      {
        title: { en: 'Eco-Friendly Detergents', id: 'Detergen Ramah Lingkungan' },
        desc: { en: 'Safe for your skin and protective of fabric quality.', id: 'Aman untuk kulit sensitif dan menjaga serat kain tetap awet.' }
      },
      {
        title: { en: 'Certified Hygiene', id: 'Higienitas Bersertifikat' },
        desc: { en: 'Processes aligned with international sanitization guidelines.', id: 'Proses pencucian sesuai dengan standar sanitasi internasional.' }
      },
      {
        title: { en: 'Express Service Available', id: 'Layanan Ekspres Cepat' },
        desc: { en: 'Get your clean laundry back in 24 hours or less.', id: 'Pakaian bersih selesai dalam waktu kurang dari 24 jam.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Do you offer pickup and delivery in Raffles Hills especially in Jabodetabek?', id: 'Apakah tersedia layanan antar jemput di Raffles Hills khususnya di Jabodetabek?' },
        a: { en: 'Yes, we provide convenient laundry pickup and delivery services for all clusters in Raffles Hills especially in Jabodetabek, Cibubur.', id: 'Ya, kami menyediakan layanan antar jemput laundry yang praktis untuk seluruh klaster di Raffles Hills khususnya di Jabodetabek, Cibubur.' }
      },
      {
        q: { en: 'What is the turnaround time for express laundry?', id: 'Berapa lama waktu pengerjaan untuk laundry ekspres?' },
        a: { en: 'Our express laundry service can be completed within 12 to 24 hours depending on the items.', id: 'Layanan laundry ekspres kami dapat diselesaikan dalam waktu 12 hingga 24 jam tergantung jenis pakaian.' }
      }
    ]
  },
  'laundry-citra-grand-cibubur': {
    slug: 'laundry-citra-grand-cibubur',
    title: {
      en: 'Professional Laundry Citra Grand Cibubur | Waschen Alora',
      id: 'Laundry Profesional Citra Grand Cibubur | Waschen Alora'
    },
    description: {
      en: 'Professional laundry and dry cleaning services for Citra Grand especially in Jabodetabek Cibubur. We offer premium care for clothing, carpets, bedcovers, and more.',
      id: 'Layanan laundry profesional dan dry cleaning untuk Citra Grand khususnya di Jabodetabek Cibubur. Kami menawarkan perawatan premium untuk pakaian, karpet, bedcover, dan lainnya.'
    },
    h1: {
      en: 'Professional Laundry Services in Citra Grand especially in Jabodetabek Cibubur',
      id: 'Jasa Laundry Profesional di Citra Grand khususnya di Jabodetabek Cibubur'
    },
    unit: 'waschen',
    serviceName: { en: 'Professional Laundry', id: 'Laundry Profesional' },
    locationName: { en: 'Citra Grand, Cibubur (Jabodetabek)', id: 'Citra Grand, Cibubur (Jabodetabek)' },
    descriptionDetailed: {
      en: 'Serving the Citra Grand Cibubur community, Waschen Laundry brings years of commercial expertise to retail garments. We handle everything from corporate suits to delicate silks with premium precision.',
      id: 'Melayani komunitas Citra Grand Cibubur, Waschen Laundry menghadirkan keahlian komersial bertahun-tahun untuk pakaian ritel. Kami menangani jas formal hingga kain sutra halus dengan presisi premium.'
    },
    features: [
      {
        title: { en: 'Specialized Fabric Care', id: 'Perawatan Serat Kain Khusus' },
        desc: { en: 'Individual care programs tailored for cotton, silk, and wool.', id: 'Program perawatan individual yang disesuaikan untuk katun, sutra, dan wol.' }
      },
      {
        title: { en: 'Fabric Softener & Sanitizer', id: 'Pelembut & Sanitizer Premium' },
        desc: { en: 'Premium softening solutions with long-lasting clean fragrance.', id: 'Formula pelembut premium dengan aroma bersih yang tahan lama.' }
      }
    ],
    faqs: [
      {
        q: { en: 'How can I request laundry pickup in Citra Grand especially in Jabodetabek?', id: 'Bagaimana cara mengajukan penjemputan laundry di Citra Grand khususnya di Jabodetabek?' },
        a: { en: 'You can contact us via our WhatsApp hotline at 085122333371 to schedule a convenient pickup time.', id: 'Anda dapat menghubungi hotline WhatsApp kami di 085122333371 untuk menjadwalkan waktu penjemputan.' }
      }
    ]
  },
  'laundry-canadian-cibubur': {
    slug: 'laundry-canadian-cibubur',
    title: {
      en: 'Laundry Canadian Cluster Kota Wisata Cibubur | Waschen Alora',
      id: 'Laundry Cluster Canadian Kota Wisata Cibubur | Waschen Alora'
    },
    description: {
      en: 'Premium laundry services for the Canadian Cluster in Kota Wisata especially in Jabodetabek, Cibubur. Trusted cleaning for all types of garments with pickup options.',
      id: 'Layanan laundry premium untuk Cluster Canadian di Kota Wisata khususnya di Jabodetabek, Cibubur. Pembersihan terpercaya untuk segala jenis pakaian dengan opsi antar jemput.'
    },
    h1: {
      en: 'Premium Laundry Services in Canadian especially in Jabodetabek Cluster Cibubur',
      id: 'Jasa Laundry Premium di Cluster Canadian Cibubur'
    },
    unit: 'waschen',
    serviceName: { en: 'Premium Laundry', id: 'Laundry Premium' },
    locationName: { en: 'Canadian Cluster, Kota Wisata, Cibubur (Jabodetabek)', id: 'Cluster Canadian, Kota Wisata, Cibubur (Jabodetabek)' },
    descriptionDetailed: {
      en: 'Waschen Alora provides custom laundry care for Canadian especially in Jabodetabek Cluster residents within Kota Wisata Cibubur. We ensure absolute hygiene and cleanliness with our modern washing processes and quality checks.',
      id: 'Waschen Alora menyediakan perawatan laundry khusus untuk penghuni Cluster Canadian di dalam Kota Wisata Cibubur. Kami menjamin kebersihan dan higienitas mutlak dengan proses cuci modern dan kontrol kualitas tinggi.'
    },
    features: [
      {
        title: { en: 'Door-to-door Convenience', id: 'Layanan Antar Jemput' },
        desc: { en: 'No need to leave your home, we collect and deliver to your door.', id: 'Tidak perlu keluar rumah, kami mengambil dan mengantarkan ke depan pintu Anda.' }
      },
      {
        title: { en: 'Professional Pressing', id: 'Penyetrikaan Profesional' },
        desc: { en: 'Perfectly pressed clothes ready to be stored or worn.', id: 'Pakaian disetrika rapi, siap untuk disimpan atau langsung dikenakan.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Is there a minimum order weight for pickup?', id: 'Apakah ada berat minimum pemesanan untuk antar jemput?' },
        a: { en: 'Please contact our admin via WhatsApp to inquire about the latest promotions and pickup requirements.', id: 'Silakan hubungi admin kami melalui WhatsApp untuk menanyakan info promo terbaru dan ketentuan penjemputan.' }
      }
    ]
  },
  'laundry-sentral-eropa-cibubur': {
    slug: 'laundry-sentral-eropa-cibubur',
    title: {
      en: 'Laundry Sentral Eropa Cibubur | Waschen Alora',
      id: 'Laundry Sentral Eropa Cibubur | Waschen Alora'
    },
    description: {
      en: 'Expert laundry and dry cleaning services for Sentral Eropa especially in Jabodetabek Kota Wisata, Cibubur. Certified sanitation and high-efficiency machines.',
      id: 'Layanan laundry dan dry cleaning ahli untuk Sentral Eropa khususnya di Jabodetabek Kota Wisata, Cibubur. Sanitasi bersertifikat dan mesin berefisiensi tinggi.'
    },
    h1: {
      en: 'Expert Laundry Services in Sentral Eropa especially in Jabodetabek Cibubur',
      id: 'Layanan Laundry Ahli di Sentral Eropa khususnya di Jabodetabek Cibubur'
    },
    unit: 'waschen',
    serviceName: { en: 'Expert Laundry', id: 'Laundry Ahli' },
    locationName: { en: 'Sentral Eropa, Kota Wisata, Cibubur (Jabodetabek)', id: 'Sentral Eropa, Kota Wisata, Cibubur (Jabodetabek)' },
    descriptionDetailed: {
      en: 'Located close to the business district of Sentral Eropa in Kota Wisata especially in Jabodetabek Cibubur, Waschen Alora Indonesia caters to both corporate entities and residential clients, delivering fast and immaculate results.',
      id: 'Berada dekat dengan area komersial Sentral Eropa di Kota Wisata khususnya di Jabodetabek Cibubur, Waschen Alora Indonesia melayani entitas korporat maupun klien hunian dengan hasil yang cepat dan bersih sempurna.'
    },
    features: [
      {
        title: { en: 'Corporate Standards', id: 'Standar Korporat' },
        desc: { en: 'Impeccable care optimized for professional workwear and linens.', id: 'Perawatan sempurna yang dioptimalkan untuk pakaian kerja profesional dan linen.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Do you clean business suits?', id: 'Apakah Anda melayani pencucian jas formal?' },
        a: { en: 'Yes, we provide premium dry cleaning and pressing for suits, blazers, and corporate uniforms.', id: 'Ya, kami menyediakan dry cleaning dan penyetrikaan premium untuk jas, blazer, dan seragam kantor.' }
      }
    ]
  },
  'laundry-legenda-wisata-cibubur': {
    slug: 'laundry-legenda-wisata-cibubur',
    title: {
      en: 'Premium Laundry Legenda Wisata Cibubur | Waschen Alora',
      id: 'Laundry Premium Legenda Wisata Cibubur | Waschen Alora'
    },
    description: {
      en: 'Premium laundry services in Legenda Wisata especially in Jabodetabek Cibubur. Special care for garments, bags, shoes, and bedding accessories with pickup & delivery.',
      id: 'Layanan laundry premium di Legenda Wisata khususnya di Jabodetabek Cibubur. Perawatan khusus pakaian, tas, sepatu, dan bedcover dengan sistem antar jemput.'
    },
    h1: {
      en: 'Premium Laundry Services in Legenda Wisata especially in Jabodetabek Cibubur',
      id: 'Jasa Laundry Premium di Legenda Wisata khususnya di Jabodetabek Cibubur'
    },
    unit: 'waschen',
    serviceName: { en: 'Premium Laundry', id: 'Laundry Premium' },
    locationName: { en: 'Legenda Wisata, Cibubur (Jabodetabek)', id: 'Legenda Wisata, Cibubur (Jabodetabek)' },
    descriptionDetailed: {
      en: 'We provide specialized laundry and dry cleaning services for all clusters within Legenda Wisata, Cibubur. Our PRECISE operational values guarantee your clothing remains pristine, clean, and germ-free.',
      id: 'Kami menyediakan jasa laundry khusus dan dry cleaning untuk seluruh klaster di dalam Legenda Wisata, Cibubur. Nilai operasional PRECISE kami menjamin pakaian Anda tetap segar, bersih, dan bebas kuman.'
    },
    features: [
      {
        title: { en: 'Gentle on Fabrics', id: 'Lembut Pada Serat Kain' },
        desc: { en: 'Careful handling prevents shrinking or fading of colors.', id: 'Penanganan hati-hati mencegah penyusutan atau pudarnya warna pakaian.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Are you open on weekends?', id: 'Apakah Anda buka di hari akhir pekan?' },
        a: { en: 'Yes, we operate throughout the week. Contact us on WhatsApp for pickup scheduling.', id: 'Ya, kami beroperasi sepanjang minggu. Hubungi kami melalui WhatsApp untuk jadwal penjemputan.' }
      }
    ]
  },
  'hospital-laundry-cibubur': {
    slug: 'hospital-laundry-cibubur',
    title: {
      en: 'Hospital & Medical Laundry Cibubur | PT IKM',
      id: 'Laundry Rumah Sakit & Medis Cibubur | PT IKM'
    },
    description: {
      en: 'Certified hospital and healthcare laundry services in Cibubur especially in Jabodetabek. Dedicated linen management, sanitization protocols, and reliable logistics.',
      id: 'Layanan laundry rumah sakit dan kesehatan bersertifikat di Cibubur khususnya di Jabodetabek. Manajemen linen khusus, protokol sanitasi ketat, dan logistik terpercaya.'
    },
    h1: {
      en: 'Certified Hospital Laundry & Linen Management in Cibubur especially in Jabodetabek',
      id: 'Layanan Laundry & Manajemen Linen Rumah Sakit di Cibubur khususnya di Jabodetabek'
    },
    unit: 'ikm',
    serviceName: { en: 'Hospital Laundry', id: 'Laundry Rumah Sakit' },
    locationName: { en: 'Cibubur (Jabodetabek)', id: 'Cibubur (Jabodetabek)' },
    descriptionDetailed: {
      en: 'PT IKM (a unit of PT Waschen Alora Indonesia) is a specialized B2B provider of healthcare laundry and linen management in Cibubur especially in Jabodetabek. We conform to tight disinfection protocols and medical standards, ensuring zero cross-contamination.',
      id: 'PT IKM (unit dari PT Waschen Alora Indonesia) adalah penyedia khusus B2B untuk laundry layanan kesehatan dan manajemen linen di Cibubur khususnya di Jabodetabek. Kami mematuhi protokol disinfeksi ketat dan standar medis untuk mencegah kontaminasi silang.'
    },
    features: [
      {
        title: { en: 'Medical Grade Sanitization', id: 'Sanitasi Standar Medis' },
        desc: { en: 'Disinfection processes designed for medical linens, scrubs, and bed sheets.', id: 'Proses disinfeksi tingkat tinggi untuk linen medis, baju bedah, dan seprei pasien.' }
      },
      {
        title: { en: 'Hygienic Transport Logistics', id: 'Logistik Transportasi Higienis' },
        desc: { en: 'Separated clean and dirty linen transportation to maintain sterility.', id: 'Pemisahan armada angkutan linen bersih dan kotor demi menjaga sterilitas.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Do you comply with KARS standards?', id: 'Apakah proses Anda sesuai standar KARS?' },
        a: { en: 'Yes, our processes are optimized to support hospitals undergoing KARS and national healthcare accreditations.', id: 'Ya, operasional kami dioptimalkan untuk mendukung rumah sakit yang menjalani akreditasi KARS nasional.' }
      }
    ]
  },
  'laundry-rumah-sakit-cibubur': {
    slug: 'laundry-rumah-sakit-cibubur',
    title: {
      en: 'Healthcare Laundry & Linen Rental Cibubur | PT IKM',
      id: 'Jasa Laundry Rumah Sakit & Linen Cibubur | PT IKM'
    },
    description: {
      en: 'Professional medical laundry services and linen rental for clinics, hospitals, and medical centers in Cibubur especially in Jabodetabek. Zero contamination guarantee.',
      id: 'Jasa laundry medis profesional dan penyewaan linen untuk klinik, rumah sakit, dan pusat kesehatan di Cibubur khususnya di Jabodetabek. Jaminan higienis tanpa kontaminasi.'
    },
    h1: {
      en: 'Healthcare Laundry & Linen Rental Services in Cibubur especially in Jabodetabek',
      id: 'Jasa Laundry Rumah Sakit & Sewa Linen di Cibubur khususnya di Jabodetabek'
    },
    unit: 'ikm',
    serviceName: { en: 'Healthcare Laundry', id: 'Laundry Rumah Sakit' },
    locationName: { en: 'Cibubur (Jabodetabek)', id: 'Cibubur (Jabodetabek)' },
    descriptionDetailed: {
      en: 'PT IKM delivers professional laundry services and premium linen rental (sheets, pillowcases, doctor gowns, patient uniforms) for clinics and hospitals in Cibubur especially in Jabodetabek. We ensure all materials are sterilized and clean.',
      id: 'PT IKM menghadirkan jasa laundry profesional dan persewaan linen premium (seprei, sarung bantal, jas dokter, baju pasien) untuk klinik dan rumah sakit di Cibubur khususnya di Jabodetabek. Kami memastikan seluruh material steril dan bersih.'
    },
    features: [
      {
        title: { en: 'Linen Management System', id: 'Sistem Manajemen Linen' },
        desc: { en: 'End-to-end linen tracking, washing, maintenance, and replacement.', id: 'Pelacakan, pencucian, pemeliharaan, hingga penggantian linen secara menyeluruh.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Do you offer linen leasing or rental?', id: 'Apakah tersedia layanan penyewaan linen?' },
        a: { en: 'Yes, we provide linen rental options for healthcare units to help manage operational costs.', id: 'Ya, kami menyediakan opsi persewaan linen bagi unit kesehatan untuk menekan biaya operasional.' }
      }
    ]
  },
  'hotel-laundry-cibubur': {
    slug: 'hotel-laundry-cibubur',
    title: {
      en: 'Hotel & Hospitality Laundry Services Cibubur | PT IKM',
      id: 'Jasa Laundry Hotel & Perhotelan Cibubur | PT IKM'
    },
    description: {
      en: 'Premium hospitality laundry services for hotels, guest houses, and resorts in Cibubur especially in Jabodetabek. Excellent linen care, towels, and uniforms.',
      id: 'Jasa laundry perhotelan premium untuk hotel, guest house, dan resort di Cibubur khususnya di Jabodetabek. Perawatan terbaik untuk linen, handuk, dan seragam.'
    },
    h1: {
      en: 'Premium Hotel & Hospitality Laundry in Cibubur especially in Jabodetabek',
      id: 'Jasa Laundry Hotel & Perhotelan Premium di Cibubur khususnya di Jabodetabek'
    },
    unit: 'ikm',
    serviceName: { en: 'Hotel Laundry', id: 'Laundry Hotel' },
    locationName: { en: 'Cibubur (Jabodetabek)', id: 'Cibubur (Jabodetabek)' },
    descriptionDetailed: {
      en: 'PT IKM provides specialized commercial laundry services for the hospitality sector in Cibubur especially in Jabodetabek. We wash and iron hotel bedsheets, towels, curtains, and uniforms according to five-star hotel standards.',
      id: 'PT IKM menyediakan jasa laundry komersial khusus untuk sektor perhotelan di Cibubur khususnya di Jabodetabek. Kami mencuci dan menyetrika seprei hotel, handuk, gorden, dan seragam sesuai standar kualitas hotel bintang lima.'
    },
    features: [
      {
        title: { en: 'Five-Star Quality Standards', id: 'Kualitas Standar Bintang Lima' },
        desc: { en: 'Ultra-white linens and soft textures for absolute guest comfort.', id: 'Linen yang putih cemerlang dan tekstur lembut untuk kenyamanan maksimal tamu.' }
      }
    ],
    faqs: [
      {
        q: { en: 'What is the standard turnaround time for hotels?', id: 'Berapa lama waktu pengerjaan untuk laundry hotel?' },
        a: { en: 'Typically 24 to 48 hours, with flexible scheduling options for hotel deliveries.', id: 'Biasanya 24 hingga 48 jam, dengan opsi penjadwalan yang fleksibel untuk pengiriman hotel.' }
      }
    ]
  },
  'corporate-laundry-cibubur': {
    slug: 'corporate-laundry-cibubur',
    title: {
      en: 'Corporate Laundry & Uniform Cleaning Cibubur | PT IKM',
      id: 'Laundry Korporat & Cuci Seragam Cibubur | PT IKM'
    },
    description: {
      en: 'Commercial and corporate laundry services in Cibubur especially in Jabodetabek. We clean staff uniforms, workwear, and corporate textiles with professional standards.',
      id: 'Layanan laundry komersial dan korporat di Cibubur khususnya di Jabodetabek. Kami mencuci seragam karyawan, pakaian kerja, dan tekstil korporat dengan standar profesional.'
    },
    h1: {
      en: 'Corporate Laundry & Uniform Cleaning Services in Cibubur especially in Jabodetabek',
      id: 'Jasa Laundry Korporat & Pencucian Seragam di Cibubur khususnya di Jabodetabek'
    },
    unit: 'ikm',
    serviceName: { en: 'Corporate Laundry', id: 'Laundry Korporat' },
    locationName: { en: 'Cibubur (Jabodetabek)', id: 'Cibubur (Jabodetabek)' },
    descriptionDetailed: {
      en: 'PT IKM offers tailored laundry packages for corporations, factories, retail brands, and airlines in Cibubur especially in Jabodetabek. We manage bulk uniform washing with barcode tracking and customized packaging.',
      id: 'PT IKM menawarkan paket laundry khusus untuk korporasi, pabrik, brand retail, dan maskapai penerbangan di Cibubur khususnya di Jabodetabek. Kami mengelola pencucian seragam massal dengan pelacakan barcode dan pengemasan khusus.'
    },
    features: [
      {
        title: { en: 'Bulk Handling Efficiency', id: 'Efisiensi Kapasitas Massal' },
        desc: { en: 'Capable of handling tons of laundry daily with accurate tracking.', id: 'Mampu menangani berton-ton laundry setiap hari dengan pelacakan yang akurat.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Do you offer monthly billing for corporate partners?', id: 'Apakah tersedia sistem tagihan bulanan untuk mitra korporat?' },
        a: { en: 'Yes, we provide flexible terms of payment and contract agreements for corporate clients.', id: 'Ya, kami menyediakan skema pembayaran yang fleksibel dan perjanjian kontrak kerja untuk klien perusahaan.' }
      }
    ]
  },
  'cleaning-service-cibubur': {
    slug: 'cleaning-service-cibubur',
    title: {
      en: 'Professional Cleaning Service Cibubur | Cleanox',
      id: 'Jasa Cleaning Service Profesional Cibubur | Cleanox'
    },
    description: {
      en: 'Professional home and office cleaning service in Cibubur especially in Jabodetabek. Certified cleaners, premium disinfection, and thorough sanitation by Cleanox.',
      id: 'Jasa cleaning service profesional untuk rumah dan kantor di Cibubur khususnya di Jabodetabek. Tenaga pembersih terlatih, disinfeksi premium, dan pembersihan menyeluruh oleh Cleanox.'
    },
    h1: {
      en: 'Professional Cleaning Services in Cibubur especially in Jabodetabek',
      id: 'Jasa Cleaning Service Profesional di Cibubur khususnya di Jabodetabek'
    },
    unit: 'cleanox',
    serviceName: { en: 'Cleaning Service', id: 'Cleaning Service' },
    locationName: { en: 'Cibubur (Jabodetabek)', id: 'Cibubur (Jabodetabek)' },
    descriptionDetailed: {
      en: 'Cleanox (a unit of PT Waschen Alora Indonesia) is a premium cleaning service provider in Cibubur especially in Jabodetabek. We specialize in deep cleaning, post-construction cleaning, and general maintenance for residential and commercial units.',
      id: 'Cleanox (unit dari PT Waschen Alora Indonesia) adalah penyedia jasa kebersihan premium di Cibubur khususnya di Jabodetabek. Kami berpengalaman dalam deep cleaning, pembersihan pasca-konstruksi, dan perawatan umum untuk perumahan dan komersial.'
    },
    features: [
      {
        title: { en: 'Trained & Certified Cleaners', id: 'Staf Pembersih Terlatih' },
        desc: { en: 'Our team is background-checked, fully trained, and friendly.', id: 'Tim kami telah melewati seleksi ketat, terlatih secara profesional, dan ramah.' }
      },
      {
        title: { en: 'Eco-Friendly Disinfectant', id: 'Disinfektan Ramah Lingkungan' },
        desc: { en: 'Eliminates bacteria and viruses without leaving toxic residues.', id: 'Membasmi bakteri dan virus tanpa meninggalkan residu beracun.' }
      }
    ],
    faqs: [
      {
        q: { en: 'What is included in deep cleaning?', id: 'Apa saja yang termasuk dalam deep cleaning?' },
        a: { en: 'Deep cleaning covers hard-to-reach areas, detailed bathroom scrub-down, grease removal in kitchens, and surface sanitization.', id: 'Deep cleaning mencakup area yang sulit dijangkau, pembersihan detail kamar mandi, pembersihan lemak dapur, dan sanitasi permukaan.' }
      }
    ]
  },
  'office-cleaning-service-cibubur': {
    slug: 'office-cleaning-service-cibubur',
    title: {
      en: 'Commercial Office Cleaning Service Cibubur | Cleanox',
      id: 'Jasa Cleaning Service Kantor Cibubur | Cleanox'
    },
    description: {
      en: 'Maintain a pristine workspace with our office cleaning services in Cibubur especially in Jabodetabek. Daily, weekly, or custom cleaning schedules available.',
      id: 'Jaga kantor Anda tetap bersih dengan jasa cleaning service kantor di Cibubur khususnya di Jabodetabek. Tersedia jadwal harian, mingguan, atau kustom.'
    },
    h1: {
      en: 'Commercial Office Cleaning Services in Cibubur especially in Jabodetabek',
      id: 'Jasa Cleaning Service Kantor di Cibubur khususnya di Jabodetabek'
    },
    unit: 'cleanox',
    serviceName: { en: 'Office Cleaning', id: 'Office Cleaning' },
    locationName: { en: 'Cibubur (Jabodetabek)', id: 'Cibubur (Jabodetabek)' },
    descriptionDetailed: {
      en: 'Cleanox offers specialized workplace cleaning solutions for companies in Cibubur especially in Jabodetabek. We clean workstations, conference rooms, carpets, windows, and toilets to create a healthy, productive workspace.',
      id: 'Cleanox menawarkan solusi kebersihan ruang kerja untuk kantor-kantor di Cibubur khususnya di Jabodetabek. Kami membersihkan meja kerja, ruang rapat, karpet, jendela, dan toilet untuk menciptakan lingkungan kerja yang sehat dan produktif.'
    },
    features: [
      {
        title: { en: 'Productive Work Environment', id: 'Lingkungan Kerja Produktif' },
        desc: { en: 'A clean, sanitized office boosts employee morale and health.', id: 'Kantor yang bersih meningkatkan kesehatan dan semangat kerja karyawan.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Can you clean after office hours?', id: 'Apakah pembersihan bisa dilakukan di luar jam kerja?' },
        a: { en: 'Yes, we can arrange cleaning slots during evenings or weekends to prevent work disruption.', id: 'Ya, kami dapat mengatur jadwal pembersihan pada sore/malam hari atau akhir pekan agar tidak mengganggu aktivitas kantor.' }
      }
    ]
  },
  'home-cleaning-service-cibubur': {
    slug: 'home-cleaning-service-cibubur',
    title: {
      en: 'Home & Residential Cleaning Service Cibubur | Cleanox',
      id: 'Jasa Cleaning Service Rumah Cibubur | Cleanox'
    },
    description: {
      en: 'Trusted home cleaning service in Cibubur especially in Jabodetabek. We provide house cleaning, kitchen scrubbing, bathroom sanitizing, and window washing.',
      id: 'Jasa cleaning service rumah terpercaya di Cibubur khususnya di Jabodetabek. Kami menyediakan pembersihan rumah, dapur, sanitasi kamar mandi, dan cuci jendela.'
    },
    h1: {
      en: 'Residential Home Cleaning Services in Cibubur especially in Jabodetabek',
      id: 'Jasa Cleaning Service Rumah di Cibubur khususnya di Jabodetabek'
    },
    unit: 'cleanox',
    serviceName: { en: 'Home Cleaning', id: 'Home Cleaning' },
    locationName: { en: 'Cibubur (Jabodetabek)', id: 'Cibubur (Jabodetabek)' },
    descriptionDetailed: {
      en: 'Keep your home clean and comfortable. Cleanox provides complete residential cleaning services in Cibubur especially in Jabodetabek, including deep disinfection for bedrooms, living rooms, kitchens, and patios.',
      id: 'Jaga rumah tinggal Anda tetap bersih dan nyaman. Cleanox menyediakan jasa pembersihan rumah tinggal lengkap di Cibubur khususnya di Jabodetabek, termasuk disinfeksi mendalam untuk kamar tidur, ruang tamu, dapur, dan teras.'
    },
    features: [
      {
        title: { en: 'Child & Pet Safe Chemicals', id: 'Bahan Kimia Aman untuk Anak & Hewan' },
        desc: { en: 'We use non-toxic, eco-friendly cleaning agents.', id: 'Kami hanya menggunakan cairan pembersih non-toksik yang aman bagi keluarga.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Do I need to be home during the cleaning?', id: 'Apakah saya harus berada di rumah saat pembersihan?' },
        a: { en: 'It is recommended to have someone home to guide our staff, but not mandatory if prior access is arranged.', id: 'Disarankan ada yang berada di rumah untuk mendampingi staf kami, namun tidak wajib jika akses masuk telah dikonfirmasi.' }
      }
    ]
  },
  'cuci-karpet-cibubur': {
    slug: 'cuci-karpet-cibubur',
    title: {
      en: 'Professional Carpet Cleaning Service Cibubur | Cleanox',
      id: 'Jasa Cuci Karpet Profesional Cibubur | Cleanox'
    },
    description: {
      en: 'Professional carpet cleaning service in Cibubur especially in Jabodetabek. Deep washing, dust mite removal, odor elimination, and sanitizing for homes and offices.',
      id: 'Jasa cuci karpet profesional di Cibubur khususnya di Jabodetabek. Pencucian mendalam, pembasmian tungau debu, penghilang bau, dan sanitasi rumah serta kantor.'
    },
    h1: {
      en: 'Professional Carpet Cleaning Services in Cibubur especially in Jabodetabek',
      id: 'Jasa Cuci Karpet Profesional di Cibubur khususnya di Jabodetabek'
    },
    unit: 'cleanox',
    serviceName: { en: 'Carpet Cleaning', id: 'Cuci Karpet' },
    locationName: { en: 'Cibubur (Jabodetabek)', id: 'Cibubur (Jabodetabek)' },
    descriptionDetailed: {
      en: 'Dirty carpets harbor millions of germs and dust mites. Cleanox offers professional carpet washing in Cibubur especially in Jabodetabek for offices, mosques, and homes, using extraction machines to pull deep dirt out of the fibers.',
      id: 'Karpet kotor menyimpan jutaan kuman dan tungau debu. Cleanox menawarkan pencucian karpet profesional di Cibubur khususnya di Jabodetabek untuk kantor, masjid, dan rumah, menggunakan mesin ekstraktor untuk menarik kotoran terdalam.'
    },
    features: [
      {
        title: { en: 'Deep Dirt Extraction', id: 'Ekstraksi Kotoran Mendalam' },
        desc: { en: 'Removes nested dirt, stains, and pet dander from carpet fibers.', id: 'Mengangkat kotoran membandel, noda, dan bulu hewan dari serat karpet.' }
      }
    ],
    faqs: [
      {
        q: { en: 'How long does a carpet take to dry?', id: 'Berapa lama karpet mengering setelah dicuci?' },
        a: { en: 'Usually between 12 to 24 hours depending on the carpet thickness and ventilation.', id: 'Biasanya sekitar 12 hingga 24 jam tergantung pada ketebalan karpet dan sirkulasi udara.' }
      }
    ]
  },
  'cuci-sofa-cibubur': {
    slug: 'cuci-sofa-cibubur',
    title: {
      en: 'Sofa & Upholstery Cleaning Service Cibubur | Cleanox',
      id: 'Jasa Cuci Sofa & Upholstery Cibubur | Cleanox'
    },
    description: {
      en: 'Professional sofa and upholstery cleaning service in Cibubur especially in Jabodetabek. We clean fabric and leather sofas, removing stains, mites, and bad odors.',
      id: 'Jasa cuci sofa dan upholstery profesional di Cibubur khususnya di Jabodetabek. Kami membersihkan sofa kain dan kulit, menghilangkan noda, tungau, dan bau tidak sedap.'
    },
    h1: {
      en: 'Sofa & Upholstery Cleaning Services in Cibubur especially in Jabodetabek',
      id: 'Jasa Cuci Sofa & Upholstery di Cibubur khususnya di Jabodetabek'
    },
    unit: 'cleanox',
    serviceName: { en: 'Sofa Cleaning', id: 'Cuci Sofa' },
    locationName: { en: 'Cibubur (Jabodetabek)', id: 'Cibubur (Jabodetabek)' },
    descriptionDetailed: {
      en: 'Cleanox restores the freshness of your living room furniture. Our sofa cleaning service in Cibubur especially in Jabodetabek uses specialized upholstery cleaning solutions and vacuum extractors to sanitize fabric, suede, and leather couches.',
      id: 'Cleanox mengembalikan kesegaran furnitur ruang tamu Anda. Jasa cuci sofa kami di Cibubur khususnya di Jabodetabek menggunakan cairan pembersih khusus serat kain dan vakum ekstraktor untuk mensanitasi sofa kain, suede, dan kulit.'
    },
    features: [
      {
        title: { en: 'Odor & Mite Eradication', id: 'Pembasmian Bau & Tungau' },
        desc: { en: 'Kills bacteria and odors locked inside the cushion foam.', id: 'Membunuh bakteri penyebab bau tak sedap di dalam busa sofa.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Do you clean leather sofas?', id: 'Apakah melayani cuci sofa kulit?' },
        a: { en: 'Yes, we clean and condition leather sofas using specialized leather-safe products.', id: 'Ya, kami membersihkan dan memberikan kondisioner sofa kulit dengan formula aman khusus kulit.' }
      }
    ]
  },
  'cuci-bedcover-cibubur': {
    slug: 'cuci-bedcover-cibubur',
    title: {
      en: 'Premium Bedcover & Blanket Laundry Cibubur | Waschen',
      id: 'Jasa Cuci Bedcover & Selimut Cibubur | Waschen'
    },
    description: {
      en: 'Premium bedcover, duvet, and blanket laundry in Cibubur especially in Jabodetabek. Deep sanitation to ensure clean and healthy sleeping experiences.',
      id: 'Jasa cuci bedcover, duvet, dan selimut premium di Cibubur khususnya di Jabodetabek. Sanitasi mendalam untuk memastikan tidur yang nyaman, bersih, dan sehat.'
    },
    h1: {
      en: 'Premium Bedcover & Blanket Laundry in Cibubur especially in Jabodetabek',
      id: 'Jasa Cuci Bedcover & Selimut Premium di Cibubur khususnya di Jabodetabek'
    },
    unit: 'waschen',
    serviceName: { en: 'Bedcover Laundry', id: 'Cuci Bedcover' },
    locationName: { en: 'Cibubur (Jabodetabek)', id: 'Cibubur (Jabodetabek)' },
    descriptionDetailed: {
      en: 'Enjoy a good night sleep with hygienically clean bedsheets and bedcovers. Waschen Laundry Cibubur washes bedcovers using large industrial washing drums to avoid clumping of inner fibers and ensure perfect sanitization.',
      id: 'Nikmati tidur nyenyak dengan seprei dan bedcover yang higienis. Waschen Laundry Cibubur mencuci bedcover menggunakan mesin cuci berkapasitas besar agar serat dakron di dalamnya tidak menggumpal.'
    },
    features: [
      {
        title: { en: 'Fluffy Preservation', id: 'Menjaga Kelembutan Serat' },
        desc: { en: 'We prevent dakron and fiber fillings from clumping.', id: 'Mencegah dakron dan isian bedcover menggumpal akibat proses cuci.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Can you handle king-size bedcovers?', id: 'Apakah bisa mencuci bedcover ukuran King-size?' },
        a: { en: 'Yes, our heavy-duty washing machines easily accommodate extra-large and heavy bedcovers.', id: 'Ya, mesin cuci berkapasitas besar kami dapat menampung bedcover ukuran ekstra besar.' }
      }
    ]
  },
  'cuci-sepatu-cibubur': {
    slug: 'cuci-sepatu-cibubur',
    title: {
      en: 'Premium Shoe Cleaning & Restoration Cibubur | Waschen',
      id: 'Jasa Cuci & Restorasi Sepatu Cibubur | Waschen'
    },
    description: {
      en: 'Premium shoe cleaning and restoration service in Cibubur especially in Jabodetabek. Specialized treatment for sneakers, leather shoes, heels, and boots.',
      id: 'Jasa cuci dan restorasi sepatu premium di Cibubur khususnya di Jabodetabek. Penanganan khusus untuk sneaker, sepatu kulit, flatshoes, heels, dan boots.'
    },
    h1: {
      en: 'Premium Shoe Cleaning & Restoration in Cibubur especially in Jabodetabek',
      id: 'Jasa Cuci & Restorasi Sepatu Premium di Cibubur khususnya di Jabodetabek'
    },
    unit: 'waschen',
    serviceName: { en: 'Shoe Cleaning', id: 'Cuci Sepatu' },
    locationName: { en: 'Cibubur (Jabodetabek)', id: 'Cibubur (Jabodetabek)' },
    descriptionDetailed: {
      en: 'Waschen Alora provides expert shoe cleaning and color restoration services in Cibubur especially in Jabodetabek. We treat canvas, suede, nubuck, and leather shoes using premium cleaning kits to preserve the material structure.',
      id: 'Waschen Alora menyediakan jasa pencucian sepatu ahli dan restorasi warna di Cibubur khususnya di Jabodetabek. Kami merawat sepatu kanvas, suede, nubuck, hingga kulit menggunakan sabun pembersih khusus untuk melindungi serat material.'
    },
    features: [
      {
        title: { en: 'Material-Specific Solutions', id: 'Formula Khusus Material' },
        desc: { en: 'We use premium cleaners tailored for suede, leather, and canvas.', id: 'Kami memakai cairan pembersih khusus yang aman untuk suede, kulit, dan kanvas.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Do you offer glueing/unyellowing services?', id: 'Apakah melayani lem ulang atau unyellowing?' },
        a: { en: 'Yes, we provide unyellowing for oxidized midsoles and minor shoe sole glue repairs.', id: 'Ya, kami melayani pemutihan sol (unyellowing) yang menguning serta perbaikan lem sol minor.' }
      }
    ]
  },
  'cuci-tas-cibubur': {
    slug: 'cuci-tas-cibubur',
    title: {
      en: 'Premium Bag & Leather Care Cibubur | Waschen Alora',
      id: 'Jasa Cuci Tas & Perawatan Kulit Cibubur | Waschen Alora'
    },
    description: {
      en: 'Premium bag cleaning and leather care services in Cibubur especially in Jabodetabek. Specialized treatments for luxury handbags, backpacks, and leather items.',
      id: 'Jasa cuci tas premium dan perawatan kulit di Cibubur khususnya di Jabodetabek. Penanganan khusus untuk tas mewah (brand luxury), ransel, dan material kulit.'
    },
    h1: {
      en: 'Premium Bag Cleaning & Leather Care in Cibubur especially in Jabodetabek',
      id: 'Jasa Cuci Tas Premium & Perawatan Kulit di Cibubur khususnya di Jabodetabek'
    },
    unit: 'waschen',
    serviceName: { en: 'Bag Cleaning', id: 'Cuci Tas' },
    locationName: { en: 'Cibubur (Jabodetabek)', id: 'Cibubur (Jabodetabek)' },
    descriptionDetailed: {
      en: 'Waschen Alora offers high-end bag cleaning and sanitization in Cibubur especially in Jabodetabek. We clean dust, mold, and stains from designer bags, maintaining the shape and texture of genuine leather, nylon, and suede fabrics.',
      id: 'Waschen Alora menawarkan cuci tas premium dan sanitasi di Cibubur khususnya di Jabodetabek. Kami membersihkan debu, jamur, dan noda dari tas branded, sekaligus menjaga bentuk dan kelembutan bahan kulit asli, nilon, dan kain suede.'
    },
    features: [
      {
        title: { en: 'Luxury Designer Bag Care', id: 'Perawatan Tas Branded & Mewah' },
        desc: { en: 'Delicate hand-wash processes optimized for brand items.', id: 'Proses cuci manual yang sangat hati-hati untuk menjaga integritas tas mewah.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Can you clean mold off leather bags?', id: 'Apakah bisa menghilangkan jamur di tas kulit?' },
        a: { en: 'Yes, we specialize in removing mold and applying protective leather conditioner to prevent recurrence.', id: 'Ya, kami melayani pembersihan jamur serta pemberian pelembab kulit agar jamur tidak mudah tumbuh kembali.' }
      }
    ]
  },
  'laundry-express-cibubur': {
    slug: 'laundry-express-cibubur',
    title: {
      en: 'Fast Express Laundry Cibubur | Waschen Alora',
      id: 'Laundry Express Cepat Cibubur | Waschen Alora'
    },
    description: {
      en: 'Need clothes washed fast? Get our express laundry service in Cibubur especially in Jabodetabek. Clean, dry, and pressed in 3 to 24 hours.',
      id: 'Butuh laundry pakaian selesai cepat? Gunakan layanan laundry ekspres di Cibubur khususnya di Jabodetabek. Bersih, kering, dan disetrika rapi dalam 3 hingga 24 jam.'
    },
    h1: {
      en: 'Fast Express Laundry Services in Cibubur especially in Jabodetabek',
      id: 'Jasa Laundry Express Cepat di Cibubur khususnya di Jabodetabek'
    },
    unit: 'waschen',
    serviceName: { en: 'Express Laundry', id: 'Laundry Express' },
    locationName: { en: 'Cibubur (Jabodetabek)', id: 'Cibubur (Jabodetabek)' },
    descriptionDetailed: {
      en: 'For busy professionals and urgent needs, Waschen Laundry Cibubur provides ultra-fast express washing and ironing. We guarantee timely delivery without compromising on cleanliness and fabric care.',
      id: 'Bagi kalangan profesional yang sibuk atau kebutuhan mendesak, Waschen Laundry Cibubur menyediakan layanan laundry ekspres kilat. Kami menjamin pakaian selesai tepat waktu dengan kebersihan terbaik.'
    },
    features: [
      {
        title: { en: 'Rapid Turnaround Options', id: 'Pilihan Waktu Kilat' },
        desc: { en: 'Select between 3-hour, 6-hour, or 24-hour cycles.', id: 'Tersedia pilihan penyelesaian 3 jam, 6 jam, atau 24 jam.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Is there an extra charge for express services?', id: 'Apakah ada biaya tambahan untuk laundry ekspres?' },
        a: { en: 'Yes, express options carry an additional fee. Contact us via WhatsApp for our complete rate card.', id: 'Ya, untuk pengerjaan kilat dikenakan tarif berbeda. Hubungi WhatsApp admin kami untuk daftar tarif lengkap.' }
      }
    ]
  },
  'laundry-cibubur': {
    slug: 'laundry-cibubur',
    title: {
      en: 'Best Laundry & Dry Cleaning Cibubur | Waschen Alora',
      id: 'Laundry & Dry Cleaning Terbaik Cibubur | Waschen Alora'
    },
    description: {
      en: 'Waschen Alora is the top laundry and dry cleaning provider in Cibubur especially in Jabodetabek. Premium washing machines, clean water filtration, and certified sanitization.',
      id: 'Waschen Alora adalah penyedia jasa laundry & dry cleaning terbaik di Cibubur khususnya di Jabodetabek. Menggunakan mesin cuci premium, filter air bersih, dan sanitasi bersertifikat.'
    },
    h1: {
      en: 'Best Laundry & Dry Cleaning Services in Cibubur especially in Jabodetabek',
      id: 'Layanan Laundry & Dry Cleaning Terbaik di Cibubur khususnya di Jabodetabek'
    },
    unit: 'waschen',
    serviceName: { en: 'Best Laundry', id: 'Laundry Terbaik' },
    locationName: { en: 'Cibubur (Jabodetabek)', id: 'Cibubur (Jabodetabek)' },
    descriptionDetailed: {
      en: 'Waschen Alora Indonesia is your trusted partner for laundry and hygiene in Cibubur especially in Jabodetabek. Offering complete B2C retail and B2B commercial laundry solutions, we deliver accurate, clean, and reliable results.',
      id: 'Waschen Alora Indonesia adalah mitra terpercaya Anda untuk urusan laundry dan kebersihan di Cibubur khususnya di Jabodetabek. Menyediakan layanan ritel B2C dan komersial B2B lengkap, kami menjamin pakaian Anda bersih higienis.'
    },
    features: [
      {
        title: { en: 'PRECISE Service Standards', id: 'Standar Layanan PRECISE' },
        desc: { en: 'Professional, resilient, collaborative, innovative, sustainable, excellent.', id: 'Profesional, tangguh, kolaboratif, inovatif, ramah lingkungan, dan unggul.' }
      }
    ],
    faqs: [
      {
        q: { en: 'What services are available?', id: 'Apa saja layanan yang tersedia?' },
        a: { en: 'We offer retail kilo laundry, premium piece laundry, dry cleaning, shoe cleaning, bag cleaning, and commercial linen solutions.', id: 'Kami melayani laundry kiloan, cuci satuan premium, dry cleaning, cuci sepatu, cuci tas, hingga linen komersial B2B.' }
      }
    ]
  },
  'laundry-gunung-putri': {
    slug: 'laundry-gunung-putri',
    title: {
      en: 'Premium Laundry & Dry Cleaning Gunung Putri | Waschen Alora',
      id: 'Laundry Premium & Dry Cleaning Gunung Putri | Waschen Alora'
    },
    description: {
      en: 'Professional laundry services in Gunung Putri especially in Jabodetabek. Secure washing, eco-friendly detergents, and premium ironing with pickup and delivery.',
      id: 'Jasa laundry profesional di Gunung Putri khususnya di Jabodetabek. Proses cuci aman, detergen ramah lingkungan, dan setrika rapi dengan antar jemput.'
    },
    h1: {
      en: 'Premium Laundry & Dry Cleaning in Gunung Putri especially in Jabodetabek',
      id: 'Jasa Laundry Premium & Dry Cleaning di Gunung Putri khususnya di Jabodetabek'
    },
    unit: 'waschen',
    serviceName: { en: 'Premium Laundry', id: 'Laundry Premium' },
    locationName: { en: 'Gunung Putri (Jabodetabek)', id: 'Gunung Putri (Jabodetabek)' },
    descriptionDetailed: {
      en: 'Expanding our premium laundry coverage to Gunung Putri, Waschen Alora ensures factory, commercial, and residential clients receive the highest hygiene care with modern washing machines and sanitizers.',
      id: 'Memperluas layanan laundry premium kami ke Gunung Putri, Waschen Alora memastikan klien pabrik, komersial, dan perumahan mendapatkan kebersihan terbaik dengan mesin cuci modern dan sanitizer aman.'
    },
    features: [
      {
        title: { en: 'High Quality Water', id: 'Air Bersih Tersaring' },
        desc: { en: 'Multi-stage water filtration prevents fabric yellowing.', id: 'Penyaringan air bertahap mencegah pakaian menjadi kusam atau kekuningan.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Do you cover Gunung Putri residential clusters?', id: 'Apakah melayani perumahan di Gunung Putri khususnya di Jabodetabek?' },
        a: { en: 'Yes, our pickup and delivery service covers major residential zones and estates in Gunung Putri especially in Jabodetabek.', id: 'Ya, kurir antar-jemput kami menjangkau area pemukiman dan kompleks perumahan utama di Gunung Putri khususnya di Jabodetabek.' }
      }
    ]
  },
  'laundry-kota-wisata': {
    slug: 'laundry-kota-wisata',
    title: {
      en: 'Premium Laundry Kota Wisata Cibubur | Waschen Alora',
      id: 'Laundry Premium Kota Wisata Cibubur | Waschen Alora'
    },
    description: {
      en: 'Premium laundry and dry cleaning services for all clusters in Kota Wisata especially in Jabodetabek Cibubur. Express turnaround and certified hygiene standards.',
      id: 'Layanan laundry premium dan dry cleaning untuk seluruh cluster di Kota Wisata khususnya di Jabodetabek Cibubur. Selesai cepat dengan standar higienis bersertifikasi.'
    },
    h1: {
      en: 'Premium Laundry & Dry Cleaning in Kota Wisata especially in Jabodetabek',
      id: 'Jasa Laundry Premium di Kota Wisata khususnya di Jabodetabek'
    },
    unit: 'waschen',
    serviceName: { en: 'Premium Laundry', id: 'Laundry Premium' },
    locationName: { en: 'Kota Wisata, Cibubur (Jabodetabek)', id: 'Kota Wisata, Cibubur (Jabodetabek)' },
    descriptionDetailed: {
      en: 'Serving the residents of Kota Wisata Cibubur, Waschen Laundry brings a premium cleaning experience. From curtains and bedcovers to formal garments and dresses, we clean every item with absolute attention.',
      id: 'Melayani penghuni Kota Wisata Cibubur, Waschen Laundry menghadirkan pengalaman cuci premium. Mulai dari gorden, bedcover, hingga pakaian formal dan gaun pesta kami bersihkan dengan perhatian penuh.'
    },
    features: [
      {
        title: { en: 'Cluster Pickup & Delivery', id: 'Antar Jemput Semua Klaster' },
        desc: { en: 'Easy scheduling for all clusters within Kota Wisata.', id: 'Penjadwalan mudah untuk seluruh klaster di dalam area Kota Wisata.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Can I pay via bank transfer or QRIS?', id: 'Apakah pembayaran bisa via transfer bank atau QRIS?' },
        a: { en: 'Yes, we support QRIS and digital bank transfers for convenient, cashless transactions.', id: 'Ya, kami menerima pembayaran nontunai lewat QRIS maupun transfer bank secara praktis.' }
      }
    ]
  },
  'laundry-citra-grand': {
    slug: 'laundry-citra-grand',
    title: {
      en: 'Premium Laundry Citra Grand | Waschen Alora',
      id: 'Laundry Premium Citra Grand | Waschen Alora'
    },
    description: {
      en: 'Reliable laundry and dry cleaning services for Citra Grand especially in Jabodetabek residents. Fast, hygienic, and eco-friendly garment care with delivery.',
      id: 'Jasa laundry dan dry cleaning terpercaya untuk warga Citra Grand khususnya di Jabodetabek. Perawatan pakaian cepat, higienis, ramah lingkungan, dengan antar jemput.'
    },
    h1: {
      en: 'Premium Laundry & Dry Cleaning in Citra Grand especially in Jabodetabek',
      id: 'Jasa Laundry Premium di Citra Grand khususnya di Jabodetabek'
    },
    unit: 'waschen',
    serviceName: { en: 'Premium Laundry', id: 'Laundry Premium' },
    locationName: { en: 'Citra Grand (Jabodetabek)', id: 'Citra Grand (Jabodetabek)' },
    descriptionDetailed: {
      en: 'Waschen Alora provides Citra Grand residents with accurate, detailed, and precise laundry services. Enjoy our certified washing protocols and professional clothing care.',
      id: 'Waschen Alora menyediakan layanan laundry yang tepat, bersih, dan detail untuk warga Citra Grand khususnya di Jabodetabek. Nikmati protokol pencucian bersertifikat dan perawatan kain profesional.'
    },
    features: [
      {
        title: { en: 'State-of-the-Art Dry Cleaning', id: 'Dry Cleaning Profesional' },
        desc: { en: 'High-quality machinery protects delicate suits and dresses.', id: 'Mesin berkualitas menjaga setelan jas dan gaun mewah Anda tetap sempurna.' }
      }
    ],
    faqs: [
      {
        q: { en: 'How do you prevent cloth mixing?', id: 'Bagaimana mencegah pakaian tertukar?' },
        a: { en: 'We wash each customer’s laundry individually in separate machines. We never mix clothes from different orders.', id: 'Kami mencuci pakaian setiap pelanggan secara terpisah di mesin sendiri. Kami tidak pernah mencampur cucian Anda dengan pelanggan lain.' }
      }
    ]
  },
  'laundry-jakarta-timur': {
    slug: 'laundry-jakarta-timur',
    title: {
      en: 'Premium Commercial Laundry East Jakarta | Waschen Alora',
      id: 'Laundry Komersial Premium Jakarta Timur | Waschen Alora'
    },
    description: {
      en: 'Commercial and retail laundry services in East Jakarta especially in Jabodetabek. Certified medical laundry, hotel linen rentals, and premium household laundry.',
      id: 'Jasa laundry komersial dan ritel di Jakarta Timur khususnya di Jabodetabek. Laundry medis berlisensi, sewa linen hotel, dan laundry premium rumah tangga.'
    },
    h1: {
      en: 'Premium Commercial & Retail Laundry in East Jakarta especially in Jabodetabek',
      id: 'Jasa Laundry Komersial & Ritel di Jakarta Timur khususnya di Jabodetabek'
    },
    unit: 'waschen',
    serviceName: { en: 'Commercial Laundry', id: 'Laundry Komersial' },
    locationName: { en: 'East Jakarta (Jabodetabek)', id: 'Jakarta Timur (Jabodetabek)' },
    descriptionDetailed: {
      en: 'As a holding company located on the border of East Jakarta and Depok, PT Waschen Alora Indonesia serves businesses, clinics, hotels, and households across East Jakarta especially in Jabodetabek with high-standard commercial and premium retail laundry.',
      id: 'Sebagai holding company yang terletak di perbatasan Jakarta Timur dan Depok, PT Waschen Alora Indonesia melayani bisnis, klinik, hotel, dan rumah tangga di seluruh Jakarta Timur khususnya di Jabodetabek dengan laundry komersial standar tinggi dan laundry ritel premium.'
    },
    features: [
      {
        title: { en: 'Industrial Scale Capacity', id: 'Kapasitas Skala Industri' },
        desc: { en: 'Capable of handling large-scale commercial contracts for hotels and clinics.', id: 'Mampu menangani kontrak kerja sama skala besar untuk hotel dan klinik.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Do you offer pickup across East Jakarta especially in Jabodetabek?', id: 'Apakah melayani antar-jemput ke Jakarta Timur?' },
        a: { en: 'Yes, we provide pickup and delivery routes for businesses and homes in various locations across East Jakarta especially in Jabodetabek.', id: 'Ya, rute antar-jemput kami menjangkau bisnis dan perumahan di berbagai wilayah Jakarta Timur.' }
      }
    ]
  },
  'jasa-laundry-rumah-sakit': {
    slug: 'jasa-laundry-rumah-sakit',
    title: {
      en: 'Hospital & Healthcare Laundry Services | PT IKM',
      id: 'Jasa Laundry Rumah Sakit & Medis | PT IKM'
    },
    description: {
      en: 'Professional hospital and medical laundry services. Disinfection protocols, linen management, and accredited hygiene standards.',
      id: 'Jasa laundry rumah sakit dan medis profesional. Protokol disinfeksi, manajemen linen, dan standar higienis terakreditasi.'
    },
    h1: {
      en: 'Professional Hospital Laundry & Linen Services',
      id: 'Jasa Laundry Rumah Sakit & Layanan Kesehatan Profesional'
    },
    unit: 'ikm',
    serviceName: { en: 'Hospital Laundry', id: 'Laundry Rumah Sakit' },
    locationName: { en: 'Indonesia', id: 'Indonesia' },
    descriptionDetailed: {
      en: 'PT IKM provides hospital laundry services utilizing medical-grade washing systems. We clean bed sheets, blankets, scrubs, and lab coats with a focus on hygiene and pathogen eradication.',
      id: 'PT IKM menyediakan jasa laundry rumah sakit dengan sistem pencucian standar medis. Kami membersihkan seprei, selimut, baju bedah, dan jas laboratorium dengan fokus pada kebersihan dan pemusnahan kuman.'
    },
    features: [
      {
        title: { en: 'High Temperature Sanitization', id: 'Sanitasi Suhu Tinggi' },
        desc: { en: 'Processes designed to kill thermal-resistant pathogens.', id: 'Proses cuci suhu tinggi untuk membasmi bakteri dan virus membandel.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Do you provide microbiological test reports?', id: 'Apakah menyediakan laporan uji mikrobiologi?' },
        a: { en: 'Yes, we perform regular microbiological testing to ensure linen sterility.', id: 'Ya, kami melakukan pengujian mikrobiologi berkala untuk memastikan kesterilan linen.' }
      }
    ]
  },
  'vendor-laundry-rumah-sakit': {
    slug: 'vendor-laundry-rumah-sakit',
    title: {
      en: 'Accredited Hospital Laundry Vendor | PT IKM',
      id: 'Vendor Laundry Rumah Sakit Terakreditasi | PT IKM'
    },
    description: {
      en: 'Trusted vendor for medical laundry and linen management. Partner with PT IKM for high-quality, certified disinfection laundry.',
      id: 'Vendor terpercaya untuk laundry medis dan manajemen linen. Bermitra dengan PT IKM untuk cucian disinfeksi bersertifikat.'
    },
    h1: {
      en: 'Accredited Hospital Laundry Vendor',
      id: 'Vendor Laundry Rumah Sakit & Klinik Terpercaya'
    },
    unit: 'ikm',
    serviceName: { en: 'Hospital Laundry Vendor', id: 'Vendor Laundry Rumah Sakit' },
    locationName: { en: 'Indonesia', id: 'Indonesia' },
    descriptionDetailed: {
      en: 'As a leading commercial laundry vendor in West Java, PT IKM supports hospitals, clinics, and quarantine centers with specialized medical laundry services and linen supplies.',
      id: 'Sebagai vendor laundry komersial terkemuka di Jawa Barat, PT IKM mendukung rumah sakit, klinik, dan pusat karantina dengan jasa laundry medis khusus dan suplai linen.'
    },
    features: [
      {
        title: { en: 'Standardized SOPs', id: 'SOP Standar Kemenkes' },
        desc: { en: 'Operations comply with Ministry of Health regulations.', id: 'Operasional kami sepenuhnya mematuhi regulasi dan standar Kemenkes.' }
      }
    ],
    faqs: [
      {
        q: { en: 'How do you handle hazardous stains?', id: 'Bagaimana penanganan noda infeksius?' },
        a: { en: 'Infectious linens are processed in isolated washing zones using specialized chemical formulas.', id: 'Linen infeksius diproses dalam zona pencucian terisolasi dengan formula bahan kimia khusus.' }
      }
    ]
  },
  'laundry-linen-rumah-sakit': {
    slug: 'laundry-linen-rumah-sakit',
    title: {
      en: 'Medical Linen Management & Laundry | PT IKM',
      id: 'Laundry & Manajemen Linen Rumah Sakit | PT IKM'
    },
    description: {
      en: 'Complete medical linen laundry and management. High quality linen rentals, tracking systems, and certified disinfection.',
      id: 'Layanan laundry dan manajemen linen rumah sakit lengkap. Persewaan linen berkualitas tinggi, pelacakan, dan disinfeksi bersertifikat.'
    },
    h1: {
      en: 'Medical Linen Laundry & Management Services',
      id: 'Layanan Laundry & Manajemen Linen Rumah Sakit'
    },
    unit: 'ikm',
    serviceName: { en: 'Linen Laundry', id: 'Laundry Linen' },
    locationName: { en: 'Indonesia', id: 'Indonesia' },
    descriptionDetailed: {
      en: 'PT IKM provides end-to-end medical linen laundry services. We handle washing, pressing, sterilization, packaging, and supply chain logistics for hospital textiles.',
      id: 'PT IKM menyediakan jasa laundry linen medis secara menyeluruh. Kami menangani pencucian, penyetrikaan, sterilisasi, pengemasan, hingga logistik suplai linen rumah sakit.'
    },
    features: [
      {
        title: { en: 'Complete Disinfection', id: 'Disinfektan Medis Lengkap' },
        desc: { en: 'Using certified bactericidal and virucidal washing agents.', id: 'Menggunakan bahan pembasmi bakteri dan virus standar rumah sakit.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Can we rent linen instead of buying?', id: 'Apakah kami bisa menyewa linen tanpa harus membeli?' },
        a: { en: 'Yes, we offer linen leasing packages with laundry maintenance contracts.', id: 'Ya, kami menawarkan paket persewaan linen lengkap dengan pemeliharaan cucian.' }
      }
    ]
  },
  'jasa-cleaning-service-cibubur': {
    slug: 'jasa-cleaning-service-cibubur',
    title: {
      en: 'Premium Cleaning Service in Cibubur especially in Jabodetabek | Cleanox',
      id: 'Jasa Cleaning Service Premium di Cibubur khususnya di Jabodetabek | Cleanox'
    },
    description: {
      en: 'Premium home, office, and building cleaning services in Cibubur especially in Jabodetabek. Deep cleaning, carpet washing, and sofa sanitization.',
      id: 'Jasa cleaning service premium untuk rumah, kantor, dan gedung di Cibubur khususnya di Jabodetabek. Deep cleaning, cuci karpet, dan sanitasi sofa.'
    },
    h1: {
      en: 'Premium Cleaning Services in Cibubur especially in Jabodetabek',
      id: 'Jasa Cleaning Service Premium di Cibubur khususnya di Jabodetabek'
    },
    unit: 'cleanox',
    serviceName: { en: 'Cleaning Service', id: 'Cleaning Service' },
    locationName: { en: 'Cibubur (Jabodetabek)', id: 'Cibubur (Jabodetabek)' },
    descriptionDetailed: {
      en: 'Cleanox delivers high-end commercial and residential cleaning services in Cibubur especially in Jabodetabek. Our certified cleaning staff utilizes eco-friendly products for a safer home and work environment.',
      id: 'Cleanox menghadirkan jasa kebersihan komersial dan hunian premium di Cibubur khususnya di Jabodetabek. Staf kami yang tersertifikasi menggunakan produk ramah lingkungan demi keamanan keluarga.'
    },
    features: [
      {
        title: { en: 'Detailed Deep Clean', id: 'Deep Clean Detail' },
        desc: { en: 'Thorough sanitation of bathrooms, kitchens, and floors.', id: 'Pembersihan menyeluruh untuk kamar mandi, dapur, dan lantai.' }
      }
    ],
    faqs: [
      {
        q: { en: 'How do I book a cleaning slot?', id: 'Bagaimana cara memesan jasa pembersihan?' },
        a: { en: 'Simply reach out to our team on WhatsApp to check availability and book your schedule.', id: 'Cukup hubungi tim kami melalui WhatsApp untuk konfirmasi jadwal yang tersedia.' }
      }
    ]
  },
  'cleaning-service-kantor': {
    slug: 'cleaning-service-kantor',
    title: {
      en: 'Commercial Office Cleaning Services | Cleanox',
      id: 'Jasa Cleaning Service Kantor & Workspace | Cleanox'
    },
    description: {
      en: 'Professional office cleaning services. Improve workplace health and productivity with our daily, weekly, or customized cleaning schedules.',
      id: 'Jasa cleaning service kantor profesional. Tingkatkan kenyamanan kerja dengan jadwal kebersihan harian, mingguan, atau kustom.'
    },
    h1: {
      en: 'Professional Office Cleaning Services',
      id: 'Jasa Cleaning Service Kantor Profesional'
    },
    unit: 'cleanox',
    serviceName: { en: 'Office Cleaning', id: 'Cleaning Service Kantor' },
    locationName: { en: 'Indonesia', id: 'Indonesia' },
    descriptionDetailed: {
      en: 'Create an immaculate, productive workspace. Cleanox offers corporate cleaning solutions for offices of all sizes, managing desks, meeting rooms, corridors, and communal facilities.',
      id: 'Ciptakan ruang kerja yang bersih dan produktif. Cleanox menawarkan solusi kebersihan korporat untuk kantor kecil hingga gedung pencakar langit.'
    },
    features: [
      {
        title: { en: 'Trained Workspace Janitors', id: 'Janitor Kantor Terlatih' },
        desc: { en: 'Cleaners trained to respect office confidentiality and equipment.', id: 'Staf dibekali pelatihan untuk menjaga kerahasiaan dan keamanan peralatan kantor.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Do you supply trash bags and soaps?', id: 'Apakah menyediakan plastik sampah dan sabun toilet?' },
        a: { en: 'Yes, we can include hygiene consumables replenishment in our contracts.', id: 'Ya, kami dapat menyertakan suplai bahan habis pakai kebersihan dalam kontrak kerja sama.' }
      }
    ]
  },
  'outsourcing-cleaning-service': {
    slug: 'outsourcing-cleaning-service',
    title: {
      en: 'Janitorial & Cleaning Service Outsourcing | Cleanox',
      id: 'Outsourcing Cleaning Service & Janitor | Cleanox'
    },
    description: {
      en: 'Reliable cleaning service outsourcing for businesses. We supply trained, background-checked janitors and advanced equipment.',
      id: 'Penyedia outsourcing cleaning service terpercaya untuk bisnis. Kami menyalurkan staf janitor terlatih dengan peralatan modern.'
    },
    h1: {
      en: 'Janitorial & Cleaning Service Outsourcing',
      id: 'Outsourcing Cleaning Service & Tenaga Kebersihan'
    },
    unit: 'cleanox',
    serviceName: { en: 'Outsourcing Cleaning', id: 'Outsourcing Kebersihan' },
    locationName: { en: 'Indonesia', id: 'Indonesia' },
    descriptionDetailed: {
      en: 'Cleanox manages human resources, training, and equipment supply so you can focus on your core business. We supply dedicated cleaning professionals for schools, offices, and factories.',
      id: 'Cleanox mengelola rekrutmen, pelatihan, dan pengadaan alat kebersihan sehingga Anda dapat fokus pada bisnis utama Anda.'
    },
    features: [
      {
        title: { en: 'Zero HR Hassle', id: 'Bebas Masalah HRD' },
        desc: { en: 'We handle payroll, health benefits, and replacement staff.', id: 'Kami mengelola penggajian, BPJS, hingga pengganti staf jika ada yang berhalangan.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Are your janitors background-checked?', id: 'Apakah tenaga pembersih memiliki surat kepolisian?' },
        a: { en: 'Yes, all our staff pass strict background and health checks.', id: 'Ya, seluruh staf kami melewati skrining latar belakang kepolisian dan kesehatan.' }
      }
    ]
  },
  'cleaning-service-gedung': {
    slug: 'cleaning-service-gedung',
    title: {
      en: 'Commercial Building & Facility Cleaning | Cleanox',
      id: 'Jasa Cleaning Service Gedung & Fasilitas | Cleanox'
    },
    description: {
      en: 'Professional commercial building cleaning services. Facility maintenance, floor polishing, and post-construction cleaning.',
      id: 'Jasa cleaning service gedung komersial profesional. Pemeliharaan fasilitas, poles lantai, dan pembersihan pasca-konstruksi.'
    },
    h1: {
      en: 'Commercial Building & Facility Cleaning Services',
      id: 'Jasa Cleaning Service Gedung Komersial'
    },
    unit: 'cleanox',
    serviceName: { en: 'Building Cleaning', id: 'Cleaning Service Gedung' },
    locationName: { en: 'Indonesia', id: 'Indonesia' },
    descriptionDetailed: {
      en: 'Cleanox delivers heavy-duty facility cleaning services for high-rise buildings, malls, schools, and apartment complexes. We maintain lobby hygiene, escalators, toilets, and parking lots.',
      id: 'Cleanox menghadirkan jasa kebersihan skala besar untuk gedung tinggi, pusat perbelanjaan, sekolah, dan kompleks apartemen.'
    },
    features: [
      {
        title: { en: 'Industrial Equipment', id: 'Alat Industri Modern' },
        desc: { en: 'Using high-pressure washers, floor scrubbers, and heavy-duty vacuums.', id: 'Menggunakan mesin scrubber lantai, vakum industri, dan washer tekanan tinggi.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Do you offer floor crystallization?', id: 'Apakah melayani kristalisasi poles lantai?' },
        a: { en: 'Yes, we provide professional marble and granite floor polishing and crystallization.', id: 'Ya, kami menyediakan jasa poles marmer dan kristalisasi lantai granit.' }
      }
    ]
  },
  'jasa-laundry-perusahaan': {
    slug: 'jasa-laundry-perusahaan',
    title: {
      en: 'Corporate & Factory Laundry Services | PT IKM',
      id: 'Jasa Laundry Perusahaan & Pabrik | PT IKM'
    },
    description: {
      en: 'Corporate laundry services for companies, factories, airlines, and hospitality businesses. Standardized bulk uniform washing.',
      id: 'Jasa laundry perusahaan untuk korporasi, pabrik, maskapai, dan hospitality. Standar pencucian seragam massal terpercaya.'
    },
    h1: {
      en: 'Corporate & Factory Laundry Services',
      id: 'Jasa Laundry Perusahaan & Korporat Premium'
    },
    unit: 'ikm',
    serviceName: { en: 'Corporate Laundry', id: 'Laundry Perusahaan' },
    locationName: { en: 'Indonesia', id: 'Indonesia' },
    descriptionDetailed: {
      en: 'PT IKM manages bulk uniform and linen laundry services for corporate partners, factories, airlines, and logistic networks, ensuring prompt schedules and professional quality.',
      id: 'PT IKM mengelola jasa laundry seragam dan linen massal untuk korporasi, pabrik, dan jaringan logistik dengan ketepatan waktu tinggi.'
    },
    features: [
      {
        title: { en: 'Accurate Tracking', id: 'Pelacakan Seragam Akurat' },
        desc: { en: 'Barcode or tagging systems prevent garment mixing.', id: 'Sistem tagging khusus untuk mencegah pakaian tercampur atau hilang.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Do you offer pickup logistics?', id: 'Apakah menyediakan armada antar-jemput?' },
        a: { en: 'Yes, we schedule regular logistics routes for corporate pickup and delivery.', id: 'Ya, kami menjadwalkan armada logistik rutin untuk antar-jemput korporat.' }
      }
    ]
  },
  'laundry-karyawan': {
    slug: 'laundry-karyawan',
    title: {
      en: 'Corporate Employee Uniform Laundry | PT IKM',
      id: 'Jasa Laundry Karyawan & Seragam Kerja | PT IKM'
    },
    description: {
      en: 'Professional uniform laundry services for corporate employees. Safe wash cycles, crisp pressing, and tailored logistics.',
      id: 'Jasa laundry seragam karyawan perusahaan profesional. Siklus cuci aman, setrika rapi, dan logistik terjadwal.'
    },
    h1: {
      en: 'Employee Uniform Laundry Services',
      id: 'Jasa Laundry Karyawan & Seragam Kerja'
    },
    unit: 'ikm',
    serviceName: { en: 'Employee Laundry', id: 'Laundry Karyawan' },
    locationName: { en: 'Indonesia', id: 'Indonesia' },
    descriptionDetailed: {
      en: 'PT IKM provides employee laundry plans for businesses to help maintain professional workplace grooming. We wash, press, and wrap corporate uniforms neatly.',
      id: 'PT IKM menyediakan paket laundry karyawan bagi perusahaan untuk menjaga standar kerapian seragam kerja secara berkala.'
    },
    features: [
      {
        title: { en: 'Neat Hanger Packaging', id: 'Kemasan Gantung Rapi' },
        desc: { en: 'Clothes are ironed, hung, and wrapped in protective plastic.', id: 'Pakaian disetrika rapi, digantung, dan dibungkus plastik pelindung.' }
      }
    ],
    faqs: [
      {
        q: { en: 'What is the corporate laundry turnaround?', id: 'Berapa hari waktu pengerjaan laundry seragam?' },
        a: { en: 'Typically 48 hours, customizable based on company agreements.', id: 'Biasanya 48 jam, dapat disesuaikan menurut MoU perjanjian kerja sama.' }
      }
    ]
  },
  'laundry-seragam-karyawan': {
    slug: 'laundry-seragam-karyawan',
    title: {
      en: 'Factory & Office Staff Uniform Laundry | PT IKM',
      id: 'Jasa Cuci Seragam Karyawan Kantor & Pabrik | PT IKM'
    },
    description: {
      en: 'Accurate uniform laundry services for factory and office staff. Bulk washing, certified disinfection, and fast delivery options.',
      id: 'Jasa cuci seragam karyawan kantor dan pabrik. Pencucian massal, disinfeksi bersertifikat, dan pengiriman tepat waktu.'
    },
    h1: {
      en: 'Factory & Office Staff Uniform Laundry',
      id: 'Jasa Cuci Seragam Karyawan & Staf'
    },
    unit: 'ikm',
    serviceName: { en: 'Uniform Laundry', id: 'Cuci Seragam' },
    locationName: { en: 'Indonesia', id: 'Indonesia' },
    descriptionDetailed: {
      en: 'Maintain clean and hygienic uniforms for your staff. PT IKM washes work uniforms, safety wear, coveralls, and overalls with industrial sanitization standards.',
      id: 'Jaga kebersihan seragam staf Anda. PT IKM mencuci seragam kerja kantor, wearpack safety, dan overall dengan standar sanitasi industri.'
    },
    features: [
      {
        title: { en: 'Heavy Stain Removal', id: 'Pembersihan Noda Berat' },
        desc: { en: 'Formulas to dissolve oil, grease, and dirt from factory uniforms.', id: 'Formula khusus untuk menghilangkan oli, lemak, dan noda berat pabrik.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Do you wash safety wearpacks?', id: 'Apakah menerima pencucian wearpack safety?' },
        a: { en: 'Yes, we clean safety gear and industrial uniforms without damaging reflective bands.', id: 'Ya, kami mencuci wearpack tanpa merusak pita reflektif (scotlite).' }
      }
    ]
  },
  'laundry-industrial': {
    slug: 'laundry-industrial',
    title: {
      en: 'Large Scale Industrial Laundry Services | PT IKM',
      id: 'Jasa Laundry Industrial Skala Besar | PT IKM'
    },
    description: {
      en: 'Large-scale industrial laundry for heavy textiles, manufacturing, hotels, and hospitals. Highly efficient machines and reliable logistics.',
      id: 'Laundry industrial skala besar untuk tekstil berat, manufaktur, hotel, dan rumah sakit. Mesin kapasitas tinggi dan logistik andal.'
    },
    h1: {
      en: 'Large Scale Industrial Laundry Services',
      id: 'Jasa Laundry Industrial Skala Besar'
    },
    unit: 'ikm',
    serviceName: { en: 'Industrial Laundry', id: 'Laundry Industrial' },
    locationName: { en: 'Indonesia', id: 'Indonesia' },
    descriptionDetailed: {
      en: 'PT IKM operates an industrial laundry facility designed to process tons of garments and linen daily. We serve industrial facilities, food processing plants, and major institutions.',
      id: 'PT IKM mengoperasikan fasilitas laundry industri yang dirancang untuk memproses berton-ton cucian seragam dan linen setiap hari.'
    },
    features: [
      {
        title: { en: 'Eco Water Recycling', id: 'Daur Ulang Air Ramah Lingkungan' },
        desc: { en: 'We filter and recycle water to minimize ecological footprint.', id: 'Penyaringan air daur ulang ramah lingkungan untuk menekan limbah ekologi.' }
      }
    ],
    faqs: [
      {
        q: { en: 'What is your daily washing capacity?', id: 'Berapa kapasitas cuci harian Anda?' },
        a: { en: 'Our facility can process several tons of commercial linens and uniforms per day.', id: 'Pabrik kami mampu mencuci beberapa ton linen dan seragam komersial setiap harinya.' }
      }
    ]
  },
  'jasa-laundry-hotel': {
    slug: 'jasa-laundry-hotel',
    title: {
      en: 'Premium Hotel & Resort Laundry Services | PT IKM',
      id: 'Jasa Laundry Hotel, Villa & Resort | PT IKM'
    },
    description: {
      en: 'Professional hotel laundry services. Premium bedsheet washing, guest laundry, towel sanitization, and uniform pressing.',
      id: 'Jasa laundry hotel profesional. Pencucian seprei premium, laundry tamu hotel, sanitasi handuk, dan setrika seragam staf.'
    },
    h1: {
      en: 'Premium Hotel & Resort Laundry Services',
      id: 'Jasa Laundry Hotel & Perhotelan Profesional'
    },
    unit: 'ikm',
    serviceName: { en: 'Hotel Laundry', id: 'Laundry Hotel' },
    locationName: { en: 'Indonesia', id: 'Indonesia' },
    descriptionDetailed: {
      en: 'PT IKM provides hotel laundry solutions for premium lodging brands. We clean bed sheets, duvets, pillowcases, bathrobes, and towels to exceed guest expectations.',
      id: 'PT IKM menyediakan solusi laundry hotel untuk akomodasi premium. Kami mencuci seprei, duvet, sarung bantal, jubah mandi, dan handuk.'
    },
    features: [
      {
        title: { en: 'Five-Star Brightness', id: 'Putih Cemerlang Standar Bintang 5' },
        desc: { en: 'We preserve whites and colors using premium laundry formulas.', id: 'Menjaga kain putih tetap cerah dan tidak kusam dengan formula khusus.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Do you handle luxury guest dry cleaning?', id: 'Apakah melayani dry cleaning tamu hotel?' },
        a: { en: 'Yes, we provide premium dry cleaning options for hotel guest garments.', id: 'Ya, kami menyediakan layanan dry cleaning satuan premium untuk tamu hotel Anda.' }
      }
    ]
  },
  'laundry-linen-hotel': {
    slug: 'laundry-linen-hotel',
    title: {
      en: 'Hotel Linen Laundry & Rental Services | PT IKM',
      id: 'Jasa Cuci & Sewa Linen Hotel | PT IKM'
    },
    description: {
      en: 'Accurate hotel linen laundry services and premium linen rentals. We manage sheets, towels, and tablecloths for hospitality businesses.',
      id: 'Jasa cuci linen hotel dan sewa linen premium. Kami mengelola seprei, handuk, dan taplak meja perhotelan.'
    },
    h1: {
      en: 'Hotel Linen Laundry & Rental Services',
      id: 'Jasa Cuci & Sewa Linen Hotel Profesional'
    },
    unit: 'ikm',
    serviceName: { en: 'Hotel Linen', id: 'Linen Hotel' },
    locationName: { en: 'Indonesia', id: 'Indonesia' },
    descriptionDetailed: {
      en: 'Maximize guest satisfaction. PT IKM cleans and leases hotel linens (including thread count 300+ sheets, premium cotton towels, and kitchen cloths) to hospitality brands.',
      id: 'Tingkatkan kepuasan tamu Anda. PT IKM mencuci dan menyewakan linen hotel (termasuk seprei TC 300+, handuk katun tebal, dan kain dapur).'
    },
    features: [
      {
        title: { en: 'Soft & Fragrant Linens', id: 'Linen Lembut & Harum' },
        desc: { en: 'We use non-allergenic fabric softeners with elegant scents.', id: 'Menggunakan pelembut kain non-alergi dengan wewangian yang elegan.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Can we lease hotel towels?', id: 'Apakah bisa menyewa handuk hotel?' },
        a: { en: 'Yes, we lease premium white towels with clean, fresh quality guarantee.', id: 'Ya, kami menyewakan handuk putih berkualitas premium dengan jaminan kebersihan.' }
      }
    ]
  },
  'vendor-laundry-hotel': {
    slug: 'vendor-laundry-hotel',
    title: {
      en: 'Accredited Hotel Laundry Vendor | PT IKM',
      id: 'Vendor Laundry Hotel & Akomodasi Terbaik | PT IKM'
    },
    description: {
      en: 'Leading hotel laundry vendor. Partner with PT IKM for commercial hospitality laundry, fast schedules, and competitive rates.',
      id: 'Vendor laundry hotel terkemuka. Bermitra dengan PT IKM untuk laundry komersial perhotelan, rute terjadwal, dan tarif kompetitif.'
    },
    h1: {
      en: 'Accredited Hotel Laundry Vendor',
      id: 'Vendor Laundry Hotel & Akomodasi Terbaik'
    },
    unit: 'ikm',
    serviceName: { en: 'Hotel Laundry Vendor', id: 'Vendor Laundry Hotel' },
    locationName: { en: 'Indonesia', id: 'Indonesia' },
    descriptionDetailed: {
      en: 'PT IKM acts as a trusted hospitality laundry vendor for hotels, resorts, and villas. Our commercial washing capacity ensures a continuous supply of fresh linen for your rooms.',
      id: 'PT IKM bertindak sebagai vendor laundry perhotelan terpercaya bagi hotel, resort, dan villa. Kapasitas cuci besar kami menjamin ketersediaan linen segar.'
    },
    features: [
      {
        title: { en: 'Strict Quality Control', id: 'Kontrol Kualitas Ketat' },
        desc: { en: 'Every linen is inspected for spots, tears, and dampness before packing.', id: 'Setiap linen diperiksa dari noda, sobekan, dan kelembaban sebelum dikirim.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Do you operate on public holidays?', id: 'Apakah tetap melayani saat hari libur nasional?' },
        a: { en: 'Yes, we provide 365-day logistical support for hospitality partners to manage peak seasons.', id: 'Ya, kami mendukung logistik 365 hari penuh tanpa libur demi kelancaran musim ramai (peak season) hotel.' }
      }
    ]
  },
  'vendor-laundry-rumah-sakit-jakarta': {
    slug: 'vendor-laundry-rumah-sakit-jakarta',
    title: {
      en: 'Hospital & Clinic Laundry Vendor Jakarta | PT IKM',
      id: 'Vendor Laundry Rumah Sakit & Klinik Jakarta | PT IKM'
    },
    description: {
      en: 'Certified hospital laundry vendor in Jakarta especially in Jabodetabek. Medical-grade sanitization, KARS compliance, and reliable logistics for healthcare facilities.',
      id: 'Vendor laundry rumah sakit bersertifikat di Jakarta khususnya di Jabodetabek. Sanitasi standar medis, kepatuhan KARS, dan logistik terpercaya untuk fasilitas kesehatan.'
    },
    h1: {
      en: 'Hospital Laundry Vendor in Jakarta especially in Jabodetabek',
      id: 'Vendor Laundry Rumah Sakit & Klinik di Jakarta khususnya di Jabodetabek'
    },
    unit: 'ikm',
    serviceName: { en: 'Hospital Laundry Vendor', id: 'Vendor Laundry Rumah Sakit' },
    locationName: { en: 'Jakarta (Jabodetabek)', id: 'Jakarta (Jabodetabek)' },
    descriptionDetailed: {
      en: 'PT IKM serves as a leading hospital laundry vendor across Jakarta especially in Jabodetabek, providing dedicated disinfection processes for bedsheets, surgical scrubs, and healthcare linens to prevent cross-contamination.',
      id: 'PT IKM bertindak sebagai vendor laundry rumah sakit terkemuka di Jakarta khususnya di Jabodetabek, menyediakan proses disinfeksi khusus untuk seprei, baju bedah, dan linen kesehatan guna mencegah kontaminasi silang.'
    },
    features: [
      {
        title: { en: 'Accredited Disinfection', id: 'Disinfeksi Terakreditasi' },
        desc: { en: 'Our processes comply with national healthcare sanitization standards.', id: 'Proses kami mematuhi standar sanitasi kesehatan nasional.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Do you offer pickup in all Jakarta areas?', id: 'Apakah melayani antar-jemput di seluruh wilayah Jakarta?' },
        a: { en: 'Yes, we cover Central, South, North, East, and West Jakarta for hospital clients.', id: 'Ya, kami menjangkau Jakarta Pusat, Selatan, Utara, Timur, dan Barat untuk klien rumah sakit.' }
      }
    ]
  },
  'vendor-laundry-rumah-sakit-bekasi': {
    slug: 'vendor-laundry-rumah-sakit-bekasi',
    title: {
      en: 'Hospital Laundry Vendor Bekasi | PT IKM',
      id: 'Vendor Laundry Rumah Sakit & Klinik Bekasi | PT IKM'
    },
    description: {
      en: 'Professional medical laundry vendor in Bekasi especially in Jabodetabek. Bulk linen washing, pathogen eradication, and timely logistical distribution.',
      id: 'Vendor laundry medis profesional di Bekasi khususnya di Jabodetabek. Pencucian linen massal, pemusnahan kuman penyakit, dan distribusi logistik tepat waktu.'
    },
    h1: {
      en: 'Hospital Laundry Vendor in Bekasi especially in Jabodetabek',
      id: 'Vendor Laundry Rumah Sakit & Klinik di Bekasi khususnya di Jabodetabek'
    },
    unit: 'ikm',
    serviceName: { en: 'Hospital Laundry Vendor', id: 'Vendor Laundry Rumah Sakit' },
    locationName: { en: 'Bekasi (Jabodetabek)', id: 'Bekasi (Jabodetabek)' },
    descriptionDetailed: {
      en: 'PT IKM offers tailored B2B hospital laundry services in Bekasi especially in Jabodetabek, providing medical institutions with reliable linen washing, packaging, and delivery routes.',
      id: 'PT IKM menawarkan jasa laundry rumah sakit B2B di Bekasi khususnya di Jabodetabek, menyediakan pencucian linen, pengemasan, dan pengiriman terjadwal yang andal bagi institusi medis.'
    },
    features: [
      {
        title: { en: 'Safe Chemical Formulation', id: 'Formula Kimia Aman' },
        desc: { en: 'Specially formulated detergents that clean without damaging hospital linen fibers.', id: 'Detergen khusus yang membersihkan noda tanpa merusak serat linen rumah sakit.' }
      }
    ],
    faqs: [
      {
        q: { en: 'What is your capacity for Bekasi especially in Jabodetabek clients?', id: 'Berapa kapasitas cuci untuk klien Bekasi?' },
        a: { en: 'We process several tons of medical linens daily, supporting large-scale public and private hospitals.', id: 'Kami memproses beberapa ton linen medis setiap hari, mendukung rumah sakit umum dan swasta skala besar.' }
      }
    ]
  },
  'vendor-laundry-rumah-sakit-bogor': {
    slug: 'vendor-laundry-rumah-sakit-bogor',
    title: {
      en: 'Hospital & Healthcare Laundry Vendor Bogor | PT IKM',
      id: 'Vendor Laundry Rumah Sakit & Medis Bogor | PT IKM'
    },
    description: {
      en: 'Certified healthcare laundry vendor in Bogor especially in Jabodetabek. Disinfection washing, linen leasing, and reliable transport for clinics and hospitals.',
      id: 'Vendor laundry kesehatan bersertifikat di Bogor khususnya di Jabodetabek. Pencucian disinfektan, sewa linen, dan transportasi andal untuk klinik dan rumah sakit.'
    },
    h1: {
      en: 'Hospital Laundry Vendor in Bogor especially in Jabodetabek',
      id: 'Vendor Laundry Rumah Sakit di Bogor khususnya di Jabodetabek'
    },
    unit: 'ikm',
    serviceName: { en: 'Hospital Laundry Vendor', id: 'Vendor Laundry Rumah Sakit' },
    locationName: { en: 'Bogor (Jabodetabek)', id: 'Bogor (Jabodetabek)' },
    descriptionDetailed: {
      en: 'PT IKM delivers professional medical laundry services across Bogor especially in Jabodetabek. We maintain absolute sterility and hygiene for bedsheets, doctor gowns, and patient uniforms.',
      id: 'PT IKM menghadirkan jasa laundry medis profesional di seluruh Bogor khususnya di Jabodetabek. Kami menjaga sterilitas dan higienitas mutlak untuk seprei, jas dokter, dan seragam pasien.'
    },
    features: [
      {
        title: { en: 'Pathogen Eradication', id: 'Pembasmian Patogen' },
        desc: { en: 'Thermal and chemical disinfection designed to kill bacteria and viruses.', id: 'Disinfeksi termal dan kimiawi untuk membunuh bakteri serta virus.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Do you cover Kabupaten and Kota Bogor?', id: 'Apakah menjangkau Kabupaten dan Kota Bogor?' },
        a: { en: 'Yes, our logistics network covers both Bogor City and Bogor Regency.', id: 'Ya, jaringan logistik kami menjangkau Kota maupun Kabupaten Bogor.' }
      }
    ]
  },
  'vendor-laundry-rumah-sakit-depok': {
    slug: 'vendor-laundry-rumah-sakit-depok',
    title: {
      en: 'Hospital Laundry & Linen Vendor Depok | PT IKM',
      id: 'Vendor Laundry Rumah Sakit & Linen Depok | PT IKM'
    },
    description: {
      en: 'Certified hospital laundry vendor in Depok especially in Jabodetabek. We provide medical-grade washing, linen management, and accredited hygiene solutions.',
      id: 'Vendor laundry rumah sakit bersertifikat di Depok khususnya di Jabodetabek. Menyediakan pencucian standar medis, manajemen linen, dan solusi higienis terakreditasi.'
    },
    h1: {
      en: 'Hospital Laundry Vendor in Depok especially in Jabodetabek',
      id: 'Vendor Laundry Rumah Sakit di Depok khususnya di Jabodetabek'
    },
    unit: 'ikm',
    serviceName: { en: 'Hospital Laundry Vendor', id: 'Vendor Laundry Rumah Sakit' },
    locationName: { en: 'Depok (Jabodetabek)', id: 'Depok (Jabodetabek)' },
    descriptionDetailed: {
      en: 'PT IKM supports Depok healthcare facilities with high-standard commercial laundry. We guarantee sterilized, clean linens that meet hospital accreditation requirements.',
      id: 'PT IKM mendukung fasilitas kesehatan di Depok khususnya di Jabodetabek dengan laundry komersial standar tinggi. Kami menjamin linen steril dan bersih yang memenuhi persyaratan akreditasi.'
    },
    features: [
      {
        title: { en: 'Accreditation Support', id: 'Dukungan Akreditasi' },
        desc: { en: 'Our processes help hospitals meet cleanliness and hygiene audit demands.', id: 'Proses kami membantu rumah sakit memenuhi audit kebersihan dan higienitas.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Where is your processing center located?', id: 'Di mana lokasi pusat pencucian Anda?' },
        a: { en: 'Our main facility is located in Tapos, Depok, perfectly positioned to serve the Jabodetabek area.', id: 'Fasilitas utama kami berlokasi di Tapos, Depok, posisi strategis untuk melayani area Jabodetabek.' }
      }
    ]
  },
  'jasa-laundry-rumah-sakit-jakarta': {
    slug: 'jasa-laundry-rumah-sakit-jakarta',
    title: {
      en: 'Hospital Laundry & Linen Rental Jakarta | PT IKM',
      id: 'Jasa Laundry Rumah Sakit & Sewa Linen Jakarta | PT IKM'
    },
    description: {
      en: 'Professional medical laundry services and linen rental in Jakarta especially in Jabodetabek. Sterile washing processes for clinics, hospitals, and quarantine centers.',
      id: 'Jasa laundry medis profesional dan sewa linen di Jakarta khususnya di Jabodetabek. Proses cuci steril untuk klinik, rumah sakit, dan pusat karantina.'
    },
    h1: {
      en: 'Hospital Laundry & Linen Rental Services in Jakarta especially in Jabodetabek',
      id: 'Jasa Laundry Rumah Sakit & Sewa Linen di Jakarta khususnya di Jabodetabek'
    },
    unit: 'ikm',
    serviceName: { en: 'Hospital Laundry', id: 'Laundry Rumah Sakit' },
    locationName: { en: 'Jakarta (Jabodetabek)', id: 'Jakarta (Jabodetabek)' },
    descriptionDetailed: {
      en: 'PT IKM offers comprehensive medical laundry and linen rental services in Jakarta especially in Jabodetabek. We provide sterile hospital linens, including sheets, scrubs, and laboratory wear with routine pickup and delivery.',
      id: 'PT IKM menawarkan jasa laundry medis dan sewa linen komprehensif di Jakarta khususnya di Jabodetabek. Kami menyediakan linen steril, baju bedah, dan jas lab dengan antar-jemput rutin.'
    },
    features: [
      {
        title: { en: 'End-to-End Linen Care', id: 'Perawatan Linen Lengkap' },
        desc: { en: 'We manage washing, ironing, minor repairs, and replacements.', id: 'Kami mengelola pencucian, penyetrikaan, perbaikan minor, hingga penggantian linen.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Can we customize linen sizes?', id: 'Apakah bisa menyesuaikan ukuran linen?' },
        a: { en: 'Yes, we offer customizable linen sizes and branding embroidery for long-term partners.', id: 'Ya, kami menyediakan penyesuaian ukuran linen dan bordir logo untuk mitra jangka panjang.' }
      }
    ]
  },
  'jasa-laundry-rumah-sakit-bekasi': {
    slug: 'jasa-laundry-rumah-sakit-bekasi',
    title: {
      en: 'Hospital Laundry & Linen Rental Bekasi | PT IKM',
      id: 'Jasa Laundry Rumah Sakit & Sewa Linen Bekasi | PT IKM'
    },
    description: {
      en: 'Professional medical laundry services and linen rentals for hospitals and clinics in Bekasi especially in Jabodetabek. Disinfected, soft, and pristine linens.',
      id: 'Jasa laundry medis profesional dan sewa linen untuk rumah sakit & klinik di Bekasi khususnya di Jabodetabek. Linen disinfeksi, lembut, dan putih cemerlang.'
    },
    h1: {
      en: 'Hospital Laundry & Linen Rental Services in Bekasi especially in Jabodetabek',
      id: 'Jasa Laundry Rumah Sakit & Sewa Linen di Bekasi khususnya di Jabodetabek'
    },
    unit: 'ikm',
    serviceName: { en: 'Hospital Laundry', id: 'Laundry Rumah Sakit' },
    locationName: { en: 'Bekasi (Jabodetabek)', id: 'Bekasi (Jabodetabek)' },
    descriptionDetailed: {
      en: 'PT IKM delivers certified medical laundry and linen solutions in Bekasi especially in Jabodetabek. We process patient gowns, blankets, and staff uniforms under strict hygienic conditions to ensure patient safety.',
      id: 'PT IKM menghadirkan jasa laundry medis dan linen bersertifikat di Bekasi khususnya di Jabodetabek. Kami mencuci baju pasien, selimut, dan seragam staf demi keselamatan pasien.'
    },
    features: [
      {
        title: { en: 'Microbe-Free Guarantee', id: 'Jaminan Bebas Mikroba' },
        desc: { en: 'Washing processes eliminate bacteria, mold, and viruses.', id: 'Proses pencucian membasmi bakteri, jamur, dan virus secara optimal.' }
      }
    ],
    faqs: [
      {
        q: { en: 'How often do you collect dirty linens?', id: 'Seberapa sering penjemputan linen kotor dilakukan?' },
        a: { en: 'Depending on the contract, we can collect daily or on a customized schedule.', id: 'Tergantung kontrak kerja sama, kami dapat menjadwalkan penjemputan harian atau berkala.' }
      }
    ]
  },
  'cleaning-service-jakarta': {
    slug: 'cleaning-service-jakarta',
    title: {
      en: 'Professional Cleaning Service Jakarta | Cleanox',
      id: 'Jasa Cleaning Service Profesional Jakarta | Cleanox'
    },
    description: {
      en: 'Professional home, office, and building cleaning services in Jakarta especially in Jabodetabek. Certified staff, deep sanitization, and eco-friendly products.',
      id: 'Jasa kebersihan rumah, kantor, dan gedung profesional di Jakarta khususnya di Jabodetabek. Staf tersertifikasi, sanitasi mendalam, dan produk ramah lingkungan.'
    },
    h1: {
      en: 'Professional Cleaning Services in Jakarta especially in Jabodetabek',
      id: 'Jasa Cleaning Service Profesional di Jakarta khususnya di Jabodetabek'
    },
    unit: 'cleanox',
    serviceName: { en: 'Cleaning Service', id: 'Cleaning Service' },
    locationName: { en: 'Jakarta (Jabodetabek)', id: 'Jakarta (Jabodetabek)' },
    descriptionDetailed: {
      en: 'Cleanox provides premier commercial and residential cleaning services in Jakarta especially in Jabodetabek. We manage deep cleaning, post-renovation cleanup, and routine facility sanitization with high-efficiency equipment.',
      id: 'Cleanox menyediakan jasa kebersihan komersial dan hunian premium di Jakarta khususnya di Jabodetabek. Kami melayani deep cleaning, pembersihan pasca-renovasi, dan sanitasi berkala.'
    },
    features: [
      {
        title: { en: 'Accredited Staff', id: 'Tenaga Kerja Tersertifikasi' },
        desc: { en: 'Our cleaners are background-checked and highly trained.', id: 'Pembersih kami melewati pemeriksaan latar belakang dan dilatih secara profesional.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Do you bring your own cleaning tools?', id: 'Apakah membawa peralatan bersih-bersih sendiri?' },
        a: { en: 'Yes, our team arrives fully equipped with professional cleaning agents and tools.', id: 'Ya, tim kami datang lengkap membawa cairan pembersih dan peralatan profesional.' }
      }
    ]
  },
  'cleaning-service-bekasi': {
    slug: 'cleaning-service-bekasi',
    title: {
      en: 'Professional Cleaning Service Bekasi | Cleanox',
      id: 'Jasa Cleaning Service Profesional Bekasi | Cleanox'
    },
    description: {
      en: 'Reliable cleaning services for homes and workplaces in Bekasi especially in Jabodetabek. Certified cleaners, carpet washing, and sofa sanitization.',
      id: 'Jasa kebersihan terpercaya untuk rumah dan tempat kerja di Bekasi khususnya di Jabodetabek. Pembersih bersertifikat, cuci karpet, dan sanitasi sofa.'
    },
    h1: {
      en: 'Professional Cleaning Services in Bekasi especially in Jabodetabek',
      id: 'Jasa Cleaning Service Profesional di Bekasi khususnya di Jabodetabek'
    },
    unit: 'cleanox',
    serviceName: { en: 'Cleaning Service', id: 'Cleaning Service' },
    locationName: { en: 'Bekasi (Jabodetabek)', id: 'Bekasi (Jabodetabek)' },
    descriptionDetailed: {
      en: 'Cleanox delivers high-quality cleaning services across Bekasi especially in Jabodetabek, keeping residential estates and commercial offices fresh, sanitized, and dust-free.',
      id: 'Cleanox menghadirkan jasa kebersihan berkualitas di seluruh Bekasi khususnya di Jabodetabek, menjaga kompleks perumahan dan kantor komersial tetap segar dan bebas debu.'
    },
    features: [
      {
        title: { en: 'Sanitization Focus', id: 'Fokus Sanitasi Higienis' },
        desc: { en: 'Disinfection processes kill 99.9% of germs on surfaces.', id: 'Proses disinfeksi membunuh 99.9% kuman pada permukaan yang sering disentuh.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Can I book a weekend schedule?', id: 'Apakah bisa memesan untuk hari akhir pekan?' },
        a: { en: 'Yes, we are open on weekends to cater to your residential cleaning needs.', id: 'Ya, kami melayani pemesanan di hari Sabtu dan Minggu untuk area perumahan.' }
      }
    ]
  },
  'cleaning-service-depok': {
    slug: 'cleaning-service-depok',
    title: {
      en: 'Professional Cleaning Service Depok | Cleanox',
      id: 'Jasa Cleaning Service Profesional Depok | Cleanox'
    },
    description: {
      en: 'Trusted home and office cleaning service in Depok especially in Jabodetabek. Deep disinfection, bathroom scrubbing, and post-construction cleaning.',
      id: 'Jasa kebersihan rumah dan kantor terpercaya di Depok khususnya di Jabodetabek. Disinfeksi mendalam, pembersihan kamar mandi, dan pembersihan pasca-konstruksi.'
    },
    h1: {
      en: 'Professional Cleaning Services in Depok especially in Jabodetabek',
      id: 'Jasa Cleaning Service Profesional di Depok khususnya di Jabodetabek'
    },
    unit: 'cleanox',
    serviceName: { en: 'Cleaning Service', id: 'Cleaning Service' },
    locationName: { en: 'Depok (Jabodetabek)', id: 'Depok (Jabodetabek)' },
    descriptionDetailed: {
      en: 'Cleanox provides specialized cleaning and maintenance services in Depok especially in Jabodetabek, managing apartment units, commercial spaces, and residential complexes with precision and care.',
      id: 'Cleanox menyediakan jasa kebersihan dan perawatan khusus di Depok khususnya di Jabodetabek, menangani unit apartemen, ruang usaha, dan perumahan secara teliti.'
    },
    features: [
      {
        title: { en: 'Eco-Friendly Solvents', id: 'Cairan Ramah Lingkungan' },
        desc: { en: 'Non-toxic cleaning agents safe for kids and pets.', id: 'Formula pembersih non-toksik yang aman untuk anak dan hewan peliharaan.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Do you clean apartment units in Depok especially in Jabodetabek?', id: 'Apakah melayani pembersihan unit apartemen di Depok khususnya di Jabodetabek?' },
        a: { en: 'Yes, we provide specialized studio and multi-bedroom apartment deep cleaning services.', id: 'Ya, kami melayani deep cleaning untuk apartemen tipe studio maupun multi-bedroom.' }
      }
    ]
  },
  'cleaning-service-bogor': {
    slug: 'cleaning-service-bogor',
    title: {
      en: 'Professional Cleaning Service Bogor | Cleanox',
      id: 'Jasa Cleaning Service Profesional Bogor | Cleanox'
    },
    description: {
      en: 'Reliable cleaning services in Bogor especially in Jabodetabek City and Regency. We clean houses, offices, and commercial buildings with professional standards.',
      id: 'Jasa kebersihan terpercaya di Kota dan Kabupaten Bogor. Kami membersihkan rumah, kantor, dan gedung dengan standar profesional.'
    },
    h1: {
      en: 'Professional Cleaning Services in Bogor especially in Jabodetabek',
      id: 'Jasa Cleaning Service Profesional di Bogor khususnya di Jabodetabek'
    },
    unit: 'cleanox',
    serviceName: { en: 'Cleaning Service', id: 'Cleaning Service' },
    locationName: { en: 'Bogor (Jabodetabek)', id: 'Bogor (Jabodetabek)' },
    descriptionDetailed: {
      en: 'Cleanox offers premium janitorial and residential cleaning across Bogor especially in Jabodetabek, using advanced tools and certified janitors to ensure spotless comfort.',
      id: 'Cleanox menawarkan jasa kebersihan perumahan dan janitorial premium di Bogor khususnya di Jabodetabek, memakai peralatan modern dan staf terlatih.'
    },
    features: [
      {
        title: { en: 'Complete Equipment', id: 'Peralatan Lengkap' },
        desc: { en: 'We arrive with vacuums, microfibers, and safe chemical solutions.', id: 'Kami datang membawa alat vakum, kain mikrofiber, dan formula pembersih aman.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Do you charge transport fees for Bogor especially in Jabodetabek areas?', id: 'Apakah dikenakan biaya transportasi untuk area Bogor?' },
        a: { en: 'Transport fees depend on distance. Contact our admin for a detailed quote.', id: 'Biaya transportasi menyesuaikan jarak lokasi. Hubungi admin kami untuk rincian tarif.' }
      }
    ]
  },
  'office-cleaning-service-jakarta': {
    slug: 'office-cleaning-service-jakarta',
    title: {
      en: 'Office & Workplace Cleaning Jakarta | Cleanox',
      id: 'Jasa Cleaning Service Kantor Jakarta | Cleanox'
    },
    description: {
      en: 'Premium office cleaning services in Jakarta especially in Jabodetabek. Daily janitorial staff, carpet extraction, and workspace sanitization for corporate clients.',
      id: 'Jasa cleaning service kantor premium di Jakarta khususnya di Jabodetabek. Janitor harian, cuci karpet kantor, dan sanitasi ruang kerja korporat.'
    },
    h1: {
      en: 'Office & Workplace Cleaning in Jakarta especially in Jabodetabek',
      id: 'Jasa Cleaning Service Kantor di Jakarta khususnya di Jabodetabek'
    },
    unit: 'cleanox',
    serviceName: { en: 'Office Cleaning', id: 'Office Cleaning' },
    locationName: { en: 'Jakarta (Jabodetabek)', id: 'Jakarta (Jabodetabek)' },
    descriptionDetailed: {
      en: 'Cleanox specializes in office cleaning services for corporate buildings in Jakarta especially in Jabodetabek. We maintain workspace hygiene, corridors, meeting rooms, toilets, and office carpets.',
      id: 'Cleanox berspesialisasi dalam jasa kebersihan kantor untuk gedung perusahaan di Jakarta khususnya di Jabodetabek. Kami memelihara kebersihan meja, koridor, toilet, dan karpet.'
    },
    features: [
      {
        title: { en: 'Productive Work Environments', id: 'Lingkungan Kerja Produktif' },
        desc: { en: 'Clean offices improve staff health and efficiency.', id: 'Kantor yang bersih meningkatkan kesehatan dan efisiensi kerja karyawan.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Can we arrange night shifts?', id: 'Apakah bisa menjadwalkan shift malam?' },
        a: { en: 'Yes, our janitorial schedules can be configured outside office hours to prevent work disruption.', id: 'Ya, jadwal pembersihan kami dapat diatur di luar jam kerja agar tidak mengganggu operasional.' }
      }
    ]
  },
  'office-cleaning-service-bekasi': {
    slug: 'office-cleaning-service-bekasi',
    title: {
      en: 'Office & Commercial Cleaning Bekasi | Cleanox',
      id: 'Jasa Cleaning Service Kantor Bekasi | Cleanox'
    },
    description: {
      en: 'Professional office cleaning services in Bekasi especially in Jabodetabek. Improve workspace hygiene with custom daily or weekly cleaning packages.',
      id: 'Jasa kebersihan kantor profesional di Bekasi khususnya di Jabodetabek. Tingkatkan kebersihan ruang kerja dengan paket harian atau mingguan.'
    },
    h1: {
      en: 'Office & Commercial Cleaning in Bekasi especially in Jabodetabek',
      id: 'Jasa Cleaning Service Kantor di Bekasi khususnya di Jabodetabek'
    },
    unit: 'cleanox',
    serviceName: { en: 'Office Cleaning', id: 'Office Cleaning' },
    locationName: { en: 'Bekasi (Jabodetabek)', id: 'Bekasi (Jabodetabek)' },
    descriptionDetailed: {
      en: 'Cleanox delivers corporate cleaning solutions for offices and commercial sites in Bekasi especially in Jabodetabek, managing lobby sanitation, workstation dusting, and toilet scrub-downs.',
      id: 'Cleanox menyediakan solusi kebersihan korporat untuk kantor dan komersial di Bekasi khususnya di Jabodetabek, mengelola sanitasi lobi, meja kerja, dan kamar mandi.'
    },
    features: [
      {
        title: { en: 'Professional Janitors', id: 'Staf Janitor Profesional' },
        desc: { en: 'Our team is highly trained and background checked for safety.', id: 'Tim kami dilatih secara khusus dan diperiksa keamanannya.' }
      }
    ],
    faqs: [
      {
        q: { en: 'Do you offer monthly contracts?', id: 'Apakah menyediakan kontrak bulanan/tahunan?' },
        a: { en: 'Yes, we provide flexible contract agreements for regular office maintenance.', id: 'Ya, kami menyediakan kontrak kerja sama berkala untuk pemeliharaan rutin kantor.' }
      }
    ]
  },
  'outsourcing-cleaning-service-jakarta': {
    slug: 'outsourcing-cleaning-service-jakarta',
    title: {
      en: 'Janitor & Cleaning Service Outsourcing Jakarta | Cleanox',
      id: 'Outsourcing Cleaning Service Jakarta | Cleanox'
    },
    description: {
      en: 'Outsourcing cleaning services and janitorial staff in Jakarta especially in Jabodetabek. Trained personnel, advanced cleaning equipment, and full HR management.',
      id: 'Outsourcing jasa kebersihan dan janitor di Jakarta khususnya di Jabodetabek. Tenaga terlatih, peralatan lengkap, dan manajemen HRD penuh.'
    },
    h1: {
      en: 'Janitor & Cleaning Service Outsourcing in Jakarta especially in Jabodetabek',
      id: 'Outsourcing Cleaning Service & Janitor di Jakarta khususnya di Jabodetabek'
    },
    unit: 'cleanox',
    serviceName: { en: 'Outsourcing Cleaning', id: 'Outsourcing Kebersihan' },
    locationName: { en: 'Jakarta (Jabodetabek)', id: 'Jakarta (Jabodetabek)' },
    descriptionDetailed: {
      en: 'Cleanox provides janitorial outsourcing services for offices, schools, and malls in Jakarta especially in Jabodetabek. We manage recruitment, training, benefits, and replacements so you get hassle-free hygiene.',
      id: 'Cleanox menyediakan outsourcing janitor untuk kantor, sekolah, dan mal di Jakarta khususnya di Jabodetabek. Kami mengelola rekrutmen, training, BPJS, hingga pengganti jika ada staf yang absen.'
    },
    features: [
      {
        title: { en: 'Worry-Free Operations', id: 'Bebas Masalah Operasional' },
        desc: { en: 'We handle training, payroll, health insurance, and administrative management.', id: 'Kami mengelola pelatihan, penggajian, jaminan kesehatan, dan administrasi staf.' }
      }
    ],
    faqs: [
      {
        q: { en: 'What types of facilities do you support?', id: 'Fasilitas apa saja yang didukung?' },
        a: { en: 'We support office buildings, retail malls, educational institutions, and high-rise apartments.', id: 'Kami mendukung gedung perkantoran, pusat perbelanjaan, institusi pendidikan, dan apartemen.' }
      }
    ]
  }
};
