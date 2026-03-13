import React from 'react';
import { motion } from 'framer-motion';

interface GalleryProps {
  title: string;
  subtitle: string;
  description?: string[];
  images: string[];
  columns?: number;
  aspectRatio?: string;
}

export const Gallery: React.FC<GalleryProps> = ({ 
  title, 
  subtitle, 
  description, 
  images,
  columns = 4,
  aspectRatio = 'aspect-[4/3]'
}) => {
  const gridCols = {
    3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-zinc-900 mb-4"
          >
            {title}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-2"
          >
            <h4 className="text-lg font-medium text-zinc-800">{subtitle}</h4>
            {description && description.map((desc, i) => (
              <p key={i} className="text-sm text-zinc-500 italic">{desc}</p>
            ))}
          </motion.div>
        </div>

        <div className={`grid ${gridCols} gap-4`}>
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % columns) * 0.1 }}
              className={`relative overflow-hidden rounded-xl bg-zinc-100 group ${aspectRatio}`}
            >
              <img 
                src={img} 
                alt={`${title} artwork ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
