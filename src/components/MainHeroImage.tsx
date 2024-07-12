import React from 'react';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full green-filter"
        src={mainHero.img}
        alt="happy team image"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-700 opacity-30 pointer-events-none"></div>
    </div>
  );
};

export default MainHeroImage;
