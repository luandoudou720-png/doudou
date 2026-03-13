import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="w-full min-h-[500px] md:min-h-[700px] grid grid-cols-1 md:grid-cols-3 gap-1 p-1 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative col-span-1 md:col-span-1 h-[350px] md:h-auto rounded-lg overflow-hidden bg-zinc-900"
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://user-assets.sxlcdn.com/images/324323/FmxBFiWwjCdMisOJ5t0x8H_cwAWs.png?imageMogr2/strip/auto-orient/thumbnail/2000x1500>/format/png"
        >
          {/* 替换为您自己的 8 秒循环视频链接 */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-connections-in-space-27926-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] hover:backdrop-blur-0 transition-all duration-500" />
        <div className="absolute bottom-8 left-8 text-white z-10">
          <h1 className="text-4xl font-bold mb-2">DD.DOU</h1>
          <p className="text-lg font-medium">手作人 / 设计师 / 玩具发烧友</p>
          <p className="text-sm mt-4 opacity-80">不断探索着自然与非自然的交集</p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative col-span-1 md:col-span-1 h-[350px] md:h-auto bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: 'url(https://user-assets.sxlcdn.com/images/324323/FhwEALJegMIDmSLkPGtXsYegAUj-.jpg?imageMogr2/strip/auto-orient/thumbnail/2000x1500>/quality/90!/interlace/1/format/jpg)' }}
      >
        <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-all duration-500" />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative col-span-1 md:col-span-1 h-[350px] md:h-auto bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: 'url(https://user-assets.sxlcdn.com/images/324323/FjNGT2f4VLv9DTRQcaZhPFqdqXNx.png?imageMogr2/strip/auto-orient/thumbnail/2000x1500>/quality/90!/interlace/1/format/jpg)' }}
      >
        <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-all duration-500" />
      </motion.div>
    </section>
  );
};
