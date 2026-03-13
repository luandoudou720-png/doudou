import React from 'react';
import { motion } from 'framer-motion';

const gridItems = [
  {
    title: 'BLUEBLUE 海底两万里',
    subtitle: 'SHANGHAI POP-UP',
    image: 'https://user-assets.sxlcdn.com/images/324323/FuC4fUhhZSc9X7vFI8VhSN2nS4qH.jpeg?imageMogr2/strip/auto-orient/thumbnail/2000x1500>/quality/90!/interlace/1/format/jpeg',
    className: 'md:col-span-2 md:row-span-2'
  },
  {
    title: 'TOTO RABBIT',
    subtitle: 'HANGZHOU',
    image: 'https://user-assets.sxlcdn.com/images/324323/FhYw9v2AQl1y70QulWz0DY3ekB6i.png?imageMogr2/strip/auto-orient/thumbnail/2000x1500>/quality/90!/format/png',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'PIPPI IN MUSEMUN',
    subtitle: 'GUANGZHOU',
    image: 'https://user-assets.sxlcdn.com/images/324323/For3HwznKlRsnZVPpN9khXPAsvRh.JPG?imageMogr2/strip/auto-orient/thumbnail/2000x1500>/quality/90!/interlace/1/format/jpg',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'SUGAR IN QTX',
    subtitle: 'SHENZHEN',
    image: 'https://user-assets.sxlcdn.com/images/324323/ljN2gx8gym7a22R3w5cqMTihLULI.JPG?imageMogr2/strip/auto-orient/thumbnail/2000x1500>/quality/90!/interlace/1/format/jpg',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'BLUEBLUE',
    subtitle: 'SHANGHAI',
    image: 'https://user-assets.sxlcdn.com/images/324323/Fuqocnoaed_MfmBmzUOrH-hkCNWI.JPG?imageMogr2/strip/auto-orient/thumbnail/2000x1500>/quality/90!/interlace/1/format/jpg',
    className: 'md:col-span-1 md:row-span-1'
  }
];

export const GridSection = () => {
  return (
    <section className="p-1 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 auto-rows-[300px]">
        {gridItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative group overflow-hidden rounded-lg ${item.className}`}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            <div className="absolute bottom-6 left-6 text-white z-10">
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-sm font-medium opacity-90">{item.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
