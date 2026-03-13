const projects = [
  { title: "SHANGHAI", img: "https://picsum.photos/seed/shanghai/800/800" },
  { title: "BEIJING CHENGDU", img: "https://picsum.photos/seed/beijing/800/800" },
  { title: "BLUEBLUE 海底两万里", img: "https://picsum.photos/seed/blueblue2/800/800" },
  { title: "TOTO RABBIT", img: "https://picsum.photos/seed/toto2/800/800" },
  { title: "PIPPI IN MUSEMUN", img: "https://picsum.photos/seed/pippi2/800/800" },
  { title: "SUGAR IN QTX", img: "https://picsum.photos/seed/sugar2/800/800" },
  { title: "BLUEBLUE", img: "https://picsum.photos/seed/blueblue3/800/800" },
];

export default function HandDrawing() {
  return (
    <section id="hand-drawing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Hand Drawing Art</h2>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">CITY HUNTER</h3>
          <div className="text-gray-600 space-y-2">
            <p>多媒体画作-城市巡游</p>
            <p>如果只用一天时间去感受一座城市，你会选择哪些坐标？</p>
          </div>
        </div>

        {/* Text Descriptions */}
        <div className="max-w-4xl mx-auto space-y-12 mb-16 text-center md:text-left">
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">SHANGHAI</h4>
            <div className="text-gray-600 space-y-2">
              <p>如果只用一天时间去感受上海这座城市，你会选择哪些坐标？</p>
              <p>忘记是在居家时期的第几天，我们开始幻想让虚拟人物和设计去无人的街头大力呼吸。于是，就有了这个策划#CityHunter城市遐想计划</p>
              <p>上海童年之路-回忆与记忆共同塑造了这里-这里是上海海派的衣食住行</p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">BEIJING CHENGDU</h4>
            <div className="text-gray-600 space-y-2">
              <p>在许多人都躁动着逃离城市的当下，我们很想抓住某刻，重新解构看待城市的角度。或许就是此刻吧</p>
              <p>城市巡游</p>
              <p>目前已巡游了中国12个城市, 8种古建筑设计互动</p>
              <p>一起感受属于中国的历史文化</p>
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full aspect-square bg-gray-100 mb-4">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900 text-center">{project.title}</h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
