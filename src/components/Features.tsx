import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'SUGAR',
    subtitle: '半糖不多不少 刚刚好',
    image: 'https://user-assets.sxlcdn.com/images/324323/FrgRrCB9Dr5kvXvZa26T5wVRl5S2.png?imageMogr2/strip/auto-orient/thumbnail/1200x9000>/interlace/1/format/jpeg',
    link: '#'
  },
  {
    title: 'TOTO RABBIT',
    subtitle: 'the word is your oyster',
    image: 'https://user-assets.sxlcdn.com/images/324323/FpKa_wwKCA3ItZ3I440mdcwckuXm.png?imageMogr2/strip/auto-orient/thumbnail/1200x9000>/interlace/1/format/jpeg',
    link: '#'
  },
  {
    title: 'Art Toys',
    subtitle: 'Sugar & ToTo & Pippi',
    image: 'https://user-assets.sxlcdn.com/images/324323/FsK7ulrPfiDegfsYWvt1mwEomhSM.png?imageMogr2/strip/auto-orient/thumbnail/1200x9000>/quality/90!/interlace/1/format/jpeg',
    link: '#'
  },
  {
    title: 'POP UP & FRIENDS',
    subtitle: '带着喜欢的小美好，奔赴每一场山海，自由无界，远方有光',
    image: 'https://user-assets.sxlcdn.com/images/324323/Fm97cAlOuY08_o1mfpq1JjE2hJBI.png?imageMogr2/strip/auto-orient/thumbnail/1200x9000>/quality/90!/interlace/1/format/jpeg',
    link: '#'
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <a href={feature.link} className="w-full aspect-square mb-6 overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </a>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-500">{feature.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
