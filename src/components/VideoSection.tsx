import React from 'react';
import { motion } from 'framer-motion';

export const VideoSection = () => {
  return (
    <section className="bg-[#1C1C1C] py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold tracking-tight">Sculpture & Art Toys</h2>
            <h3 className="text-2xl text-zinc-300">第一款2米雕塑作品「浪潮 启示」</h3>
            <div className="space-y-2 text-zinc-400 text-sm leading-relaxed">
              <p>使用SUGAR 半糖少女进行整体手工涂装与绘制，</p>
              <p>海洋是一个宏大的叙事命题，希望通过「海底两万里」系列作品</p>
              <p>讲述关于离别，偏执，慈悲和自然环境等等发生在这颗蓝色星球的种种故事，</p>
              <p>我们要对海洋心怀敬意与爱意，因为我们的一切都源于它的浪潮和奔涌。</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl"
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
              poster="https://user-assets.sxlcdn.com/images/324323/FmxBFiWwjCdMisOJ5t0x8H_cwAWs.png?imageMogr2/strip/auto-orient/thumbnail/2000x1500>/format/png"
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
