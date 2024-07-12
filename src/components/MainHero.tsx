import React from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:justify-center lg:mt-20 lg:text-left  group ">
        <h1 className=" tracking-tight font-extrabold text-gray-700  ">
          <div className=" lg:text-5xl sm:text-4xl group-hover:text-primary sm:text-center transition-all duration-700">
            {mainHero.title}
          </div>{' '}
          <div
            className={`block text-primary  group-hover:text-gray-700 lg:text-5xl  sm:text-3xl sm:text-center transition-all duration-700`}
          >
            {mainHero.subtitle}
          </div>
        </h1>
        {/* <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {mainHero.description}
        </p> */}
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:ml-28 mb-16 ">
          <div className="rounded-md shadow">
            <a
              href={mainHero.primaryAction.href}
              className={`w-1/2 flex items-center  lg:mt-10 sm:mt-10 justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.primaryAction.text}
            </a>
          </div>
          <div className="  sm:ml-3">
            <a
              href={mainHero.secondaryAction.href}
              className={`lg:w-full sm:w-1/2 flex items-center text-center lg:mt-10 sm:mt-10 justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.secondaryAction.text}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
