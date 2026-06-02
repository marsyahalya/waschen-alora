"use client";
import { motion } from 'framer-motion';
import type { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

interface CircularGalleryProps {
  items: StaticImageData[];
  className?: string;
}

export const CircularGallery: FC<CircularGalleryProps> = ({ items, className = "" }) => {
  const radius = 280; // slightly smaller radius to fit inside parent boundaries
  
  return (
    <div className={`relative h-[600px] w-full flex items-center justify-center overflow-hidden ${className}`}>
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="relative w-full h-full flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        {items.map((img, i) => {
          const angle = (i / items.length) * 2 * Math.PI;
          const x = Math.round(Math.cos(angle) * radius);
          const y = Math.round(Math.sin(angle) * radius);
          const rotation = Math.round((angle * 180) / Math.PI + 90);
          
          return (
            <div
              key={i}
              className="absolute h-36 w-52 bg-white rounded-2xl flex items-center justify-center shadow-xl border-2 border-white overflow-hidden group/item cursor-pointer hover:shadow-2xl transition-all duration-300"
              style={{
                left: `calc(50% + ${x}px - 104px)`,
                top: `calc(50% + ${y}px - 72px)`,
                transform: `rotate(${rotation}deg)`,
              }}
            >
              <div className="w-full h-full relative overflow-hidden">
                <Image
                  src={img}
                  alt={`Gallery Image ${i + 1}`}
                  fill
                  sizes="208px"
                  className="object-cover transition-transform duration-500 group-hover/item:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover/item:bg-black/0 transition-colors duration-300" />
              </div>
            </div>
          );
        })}
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
         <div className="text-2xl font-semibold text-primary/10 uppercase tracking-[0.5em] select-none">Gallery</div>
      </div>
    </div>
  );
};
