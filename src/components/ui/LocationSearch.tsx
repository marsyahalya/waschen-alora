"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Search, X, ExternalLink } from 'lucide-react';

const locations = [
  { 
    name: 'Head Office', 
    url: 'https://maps.app.goo.gl/wk5pYKgyEe2V6s2R6', 
    address: 'Raffles Hills Blok T.11 No. 18, Leuwinanggung, Tapos, Kota Depok, Jawa Barat 16454' 
  },
  { 
    name: 'IKM Laundry', 
    url: 'https://maps.app.goo.gl/CuuJhPbH3D2bMhdm9', 
    address: 'Kec. Gunung Putri, Kabupaten Bogor, Jawa Barat 16961' 
  },
  { 
    name: 'Waschen Laundry Raffles Hills', 
    url: 'https://maps.app.goo.gl/EvcFpihTeWRR4s4P7', 
    address: 'Cibubur, Kec. Ciracas, Kota Jakarta Timur' 
  },
  { 
    name: 'Waschen Laundry Citra Grand', 
    url: 'https://maps.app.goo.gl/Tiz1gFPo5DNj3xiM8', 
    address: 'Nagrak, Kec. Gunung Putri, Kabupaten Bogor' 
  },
  { 
    name: 'Waschen Laundry Canadian', 
    url: 'https://maps.app.goo.gl/eB6s9jZmJjvTvDNf7', 
    address: 'Kota Wisata, Bogor, Jawa Barat' 
  },
  { 
    name: 'Waschen Laundry Sentral Eropa', 
    url: 'https://maps.app.goo.gl/tWcLc1eJZtuaxGcd8', 
    address: 'Kota Wisata, Cibubur, Jawa Barat' 
  },
  { 
    name: 'Waschen Laundry Legenda Wisata', 
    url: 'https://maps.app.goo.gl/MwwvgKfC1WB7w26F6', 
    address: 'Wanaherang, Kec. Gunung Putri, Kabupaten Bogor' 
  },
];

export const LocationSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLocations = locations.filter(loc => 
    loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    loc.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Hide navbar and lock body scroll when panel is open
  useEffect(() => {
    const navbar = document.getElementById('main-navbar');
    if (isOpen) {
      if (navbar) {
        navbar.style.opacity = '0';
        navbar.style.pointerEvents = 'none';
        navbar.style.transform = 'translateY(-100%)';
      }
      document.body.style.overflow = 'hidden';
    } else {
      if (navbar) {
        navbar.style.opacity = '';
        navbar.style.pointerEvents = '';
        navbar.style.transform = '';
      }
      document.body.style.overflow = '';
    }
    return () => {
      if (navbar) {
        navbar.style.opacity = '';
        navbar.style.pointerEvents = '';
        navbar.style.transform = '';
      }
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating Button - right side, vertical text */}
      <motion.button
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] bg-primary text-white py-6 px-4 rounded-l-2xl shadow-2xl flex flex-col items-center gap-3 border-y border-l border-white/20 backdrop-blur-lg transition-colors hover:bg-primary/90 group"
      >
        <MapPin className="h-6 w-6 group-hover:animate-bounce" />
        <span className="[writing-mode:vertical-lr] font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Find Us</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1000] cursor-pointer"
            />

            {/* Sidebar - slides from right */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[450px] bg-white shadow-2xl z-[1001] flex flex-col font-poppins"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-primary">Our Operations & Facilities</h2>
                  <p className="text-xs text-gray-400 mt-1">Select a unit to view on Google Maps</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-primary transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Search */}
              <div className="p-6 border-b border-gray-50">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by area or address..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-primary/20 focus:outline-none transition-all text-sm text-gray-700 font-medium placeholder-gray-400"
                  />
                </div>
              </div>

              {/* List */}
              <div className="flex-1 overflow-y-auto px-6 py-2 custom-scrollbar">
                <div className="space-y-3">
                  {filteredLocations.map((loc, i) => (
                    <motion.a
                      key={i}
                      href={loc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="group block p-6 bg-gray-50 hover:bg-primary rounded-3xl transition-all duration-300 border border-transparent hover:border-primary/10"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-primary group-hover:text-white transition-colors mb-2 text-base leading-tight">
                            {loc.name}
                          </h3>
                          <p className="text-xs text-gray-400 group-hover:text-white/60 transition-colors leading-relaxed">
                            {loc.address}
                          </p>
                        </div>
                        <div className="h-8 w-8 bg-white group-hover:bg-white/20 rounded-full flex items-center justify-center text-primary group-hover:text-white transition-all shadow-sm">
                          <ExternalLink className="h-4 w-4" />
                        </div>
                      </div>
                    </motion.a>
                  ))}
                  {filteredLocations.length === 0 && (
                    <div className="text-center py-20">
                      <div className="h-16 w-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="h-6 w-6 text-gray-300" />
                      </div>
                      <p className="text-gray-400 font-medium">No locations found</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
