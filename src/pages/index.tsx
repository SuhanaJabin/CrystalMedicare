import React from 'react';

import Product from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import About from '../components/Contact';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Services from '../components/Services';
// import Testimony from '../components/Testimony';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto ">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <Canvas />
      <LazyShow>
        <>
          <Product />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Services />
          <Canvas />
        </>
      </LazyShow>
      {/* <LazyShow>
        <>
          <Testimony />
          <Canvas />
        </>
      </LazyShow> */}

      <LazyShow>
        <>
          <About />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
