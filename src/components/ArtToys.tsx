const items = [
  {
    title: "SUGAR",
    desc: "半糖不多不少 刚刚好",
    img: "https://user-assets.sxlcdn.com/images/324323/FrgRrCB9Dr5kvXvZa26T5wVRl5S2.png?imageMogr2/strip/auto-orient/thumbnail/1200x9000>/interlace/1/format/jpeg"
  },
  {
    title: "TOTO RABBIT",
    desc: "the word is your oyster",
    img: "https://user-assets.sxlcdn.com/images/324323/FpKa_wwKCA3ItZ3I440mdcwckuXm.png?imageMogr2/strip/auto-orient/thumbnail/1200x9000>/interlace/1/format/jpeg"
  },
  {
    title: "Art Toys",
    desc: "Sugar & ToTo & Pippi",
    img: "https://user-assets.sxlcdn.com/images/324323/FsK7ulrPfiDegfsYWvt1mwEomhSM.png?imageMogr2/strip/auto-orient/thumbnail/1200x9000>/quality/90!/interlace/1/format/jpeg"
  },
  {
    title: "POP UP & FRIENDS",
    desc: "带着喜欢的小美好，奔赴每一场山海，自由无界，远方有光",
    img: "https://user-assets.sxlcdn.com/images/324323/Fm97cAlOuY08_o1mfpq1JjE2hJBI.png?imageMogr2/strip/auto-orient/thumbnail/1200x9000>/quality/90!/interlace/1/format/jpeg"
  }
];

export default function ArtToys() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-full aspect-square mb-6 bg-gray-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
