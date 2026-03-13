import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { VideoSection } from './components/VideoSection';
import { Gallery } from './components/Gallery';
import { CityHunter } from './components/CityHunter';
import { GridSection } from './components/GridSection';
import { Footer } from './components/Footer';

const popArtImages = [
  'https://user-assets.sxlcdn.com/images/324323/FqT3_MD6cyr14u74xdFQmXinhQ0w.jpg?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/interlace/1/format/jpeg',
  'https://user-assets.sxlcdn.com/images/324323/Fv_9PrBnz-O_bAbWRcMzbPdJdifN.jpg?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/interlace/1/format/jpeg',
  'https://user-assets.sxlcdn.com/images/324323/FiWNTh24pVMFeFgp4uZp4Lpnc-6n.jpg?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/interlace/1/format/jpeg',
  'https://user-assets.sxlcdn.com/images/324323/FjGkm7oJyXfvs1ZPtMs7moSfyt3c.jpg?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/interlace/1/format/jpeg',
  'https://user-assets.sxlcdn.com/images/324323/Fiby7l-kNGSVQ3BGp2K2CNsrCfeh.jpg?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/interlace/1/format/jpeg',
  'https://user-assets.sxlcdn.com/images/324323/FkZfYc7UKt_KCz-3noLHTOz-NH_-.png?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/interlace/1/format/jpeg',
  'https://user-assets.sxlcdn.com/images/324323/FkL1Ek3guol4z6lfEeaB42Jux3R7.jpg?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/interlace/1/format/jpeg',
  'https://user-assets.sxlcdn.com/images/324323/Fk0pmXooaAJ8-IIacDJo-wPn6aZx.jpg?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/interlace/1/format/jpeg',
  'https://user-assets.sxlcdn.com/images/324323/FujFkxHU1RyPcIpXZN7jsfus9dbb.jpg?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/interlace/1/format/jpeg',
  'https://user-assets.sxlcdn.com/images/324323/Fhbt66C6WEqiFxOiRwBHiT8DJBk3.png?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/format/png',
  'https://user-assets.sxlcdn.com/images/324323/Fj6ac7e0opNJdk2I6vEdLqX8JkIZ.png?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/format/png',
  'https://user-assets.sxlcdn.com/images/324323/FoBN5I5nN3hqtUmcexnTks6r_ozl.png?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/format/png'
];

const handDrawingImages = [
  'https://user-assets.sxlcdn.com/images/324323/lhOTJFD-V7whe03xIwaKppqIOPv1.jpg?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/interlace/1/format/jpg',
  'https://user-assets.sxlcdn.com/images/324323/FqJaTLf0M7dvSbBIhBWoFTOV5ACB.jpg?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/interlace/1/format/jpg',
  'https://user-assets.sxlcdn.com/images/324323/FtbErpdb3KdRNUudSzga1MPvAg9F.png?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/format/png',
  'https://user-assets.sxlcdn.com/images/324323/FiRnpw5rOeQOJkCpo3zdnk2MbaUB.png?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/format/png',
  'https://user-assets.sxlcdn.com/images/324323/FoeXZF7Wc1Y2LmnEXrJdAu0ioSUl.png?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/format/png',
  'https://user-assets.sxlcdn.com/images/324323/FpOFCKE8wS57g9K7bOJ2Q0XIXgOl.png?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/format/png',
  'https://user-assets.sxlcdn.com/images/324323/FjF246h6iM-tU8UYkMFyTMfd3l1Q.png?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/format/png',
  'https://user-assets.sxlcdn.com/images/324323/Fnvz31IIeVMamclJFu6SbSvBxHyt.png?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/format/png',
  'https://user-assets.sxlcdn.com/images/324323/FlpSWIGGiLEbgHpKUrLLcK8eP5vH.png?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/format/png',
  'https://user-assets.sxlcdn.com/images/324323/Fjt-YZnhjqhABYY70uZC2AJpcGIq.png?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/format/png',
  'https://user-assets.sxlcdn.com/images/324323/FrPKQq0MZq18oEZvBWANjP3d0RyH.png?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/format/png',
  'https://user-assets.sxlcdn.com/images/324323/FuErmLZZXx6Je6uDGMKPbjCZke4J.png?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/format/png',
  'https://user-assets.sxlcdn.com/images/324323/FkXYbQQex2HgiN65dhFI821KIMnb.png?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/format/png',
  'https://user-assets.sxlcdn.com/images/324323/FkWmTbjmIJsKbq7eF5nvfkXvQnD-.png?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/format/png',
  'https://user-assets.sxlcdn.com/images/324323/FhuMWtagPibH8ZybbEZmMbwcEbDb.png?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/format/png',
  'https://user-assets.sxlcdn.com/images/324323/Fs7lP8y3DA4waVg8E55UJRBFewsp.png?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/format/png',
  'https://user-assets.sxlcdn.com/images/324323/FjM_4_u9BG3Nr0TqDdjsp22grSsm.png?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/format/png',
  'https://user-assets.sxlcdn.com/images/324323/FqsFN0h_UDBDNCFmNQeRqZhLNeiV.png?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/format/png',
  'https://user-assets.sxlcdn.com/images/324323/FqKQu4Y6CDYq7pxEkbEIklz4oZgZ.png?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/format/png',
  'https://user-assets.sxlcdn.com/images/324323/FlbJYl2fIRFaOCSs6TnGblaHQCcG.png?imageMogr2/strip/auto-orient/thumbnail/480x480>/quality/90!/format/png'
];

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white">
      <Hero />
      <Features />
      <VideoSection />
      <Gallery 
        title="Pop Art" 
        subtitle="拼贴&手工日常" 
        images={popArtImages} 
        columns={4}
      />
      <Gallery 
        title="Hand Drawing Art" 
        subtitle="情绪&瞬间 将心底的电影帧，洇染成纸上的风景" 
        description={[
          "那些令我驻足的银幕瞬间，都成了水与纸的对话",
          "Movie in Watercolor."
        ]}
        images={handDrawingImages} 
        columns={4}
        aspectRatio="aspect-video"
      />
      <CityHunter />
      <GridSection />
      <Footer />
    </div>
  );
}

export default App;
