import React from 'react';
import { motion } from 'framer-motion';

export const CityHunter = () => {
  return (
    <section className="bg-[#121212] py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            CITY HUNTER
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400"
          >
            <p className="text-lg">多媒体画作-城市巡游</p>
            <p>如果只用一天时间去感受一座城市，你会选择哪些坐标？</p>
          </motion.div>
        </div>

        <div className="space-y-24">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8"
            >
              <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                <img 
                  src="https://user-assets.sxlcdn.com/images/324323/FrgQsVds5A15jT1Uot5krnzWhDqq.png?imageMogr2/strip/auto-orient/thumbnail/1200x9000>/quality/90!/interlace/1/format/jpeg" 
                  alt="Shanghai" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 space-y-4"
            >
              <h3 className="text-2xl font-bold">SHANGHAI</h3>
              <div className="text-sm text-zinc-400 space-y-2">
                <p>如果只用一天时间去感受上海这座城市，你会选择哪些坐标？</p>
                <p>忘记是在居家时期的第几天，我们开始幻想让虚拟人物和设计去无人的街头大力呼吸。于是，就有了这个策划#CityHunter城市遐想计划</p>
                <p className="text-zinc-300 mt-4">上海童年之路-回忆与记忆共同塑造了这里-这里是上海海派的</p>
                <p className="text-zinc-300">衣食住行</p>
              </div>
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 space-y-4 order-2 lg:order-1"
            >
              <h3 className="text-2xl font-bold">BEIJING CHENGDU</h3>
              <div className="text-sm text-zinc-400 space-y-2">
                <p>在许多人都躁动着逃离城市的当下，我们很想抓住某刻，重新解构看待城市的角度。或许就是此刻吧</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8 order-1 lg:order-2"
            >
              <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                <img 
                  src="https://user-assets.sxlcdn.com/images/324323/Fpa7SkL7aFtjKKrdpdG2fsGp-DEr.png?imageMogr2/strip/auto-orient/thumbnail/1200x9000>/quality/90!/interlace/1/format/jpeg" 
                  alt="Beijing Chengdu" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8"
            >
              <div className="aspect-[2/1] rounded-2xl overflow-hidden">
                <img 
                  src="https://user-assets.sxlcdn.com/images/324323/FvrgL-RM-7IN_K0HllG-obid2jpl.png?imageMogr2/strip/auto-orient/thumbnail/1200x9000>/quality/90!/interlace/1/format/jpeg" 
                  alt="City Tour" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 space-y-4"
            >
              <div className="text-sm text-zinc-400 space-y-2">
                <p>城市巡游</p>
                <p>目前已巡游了中国12个城市, 8种古建筑设计互动</p>
                <p className="mt-4">一起感受属于中国的历史文化</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
