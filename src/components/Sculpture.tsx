export default function Sculpture() {
  return (
    <section id="sculpture" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sculpture & Art Toys</h2>
          <h3 className="text-xl text-gray-700">第一款2米雕塑作品「浪潮 启示」</h3>
        </div>

        <div className="w-full aspect-[4/3] md:aspect-[16/9] bg-gray-200 mb-12">
          <img
            src="https://picsum.photos/seed/sculpture1/1200/800"
            alt="浪潮 启示"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-3xl mx-auto text-gray-600 space-y-4 text-base md:text-lg leading-relaxed">
          <p>使用SUGAR 半糖少女进行整体手工涂装与绘制，</p>
          <p>海洋是一个宏大的叙事命题，希望通过「海底两万里」系列作品</p>
          <p>讲述关于离别，偏执，慈悲和自然环境等等发生在这颗蓝色星球的种种故事，</p>
          <p>我们要对海洋心怀敬意与爱意，因为我们的一切都源于它的浪潮和奔涌。</p>
        </div>
      </div>
    </section>
  );
}
