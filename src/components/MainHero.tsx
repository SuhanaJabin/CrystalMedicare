import React from 'react';
import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="lg:mt-10 sm:mt-0 lg:text-left sm:text-center group pl-2 pr-2">
        <h1 className="tracking-tight text-gray-700">
          <div className="text-3xl lg:text-5xl group-hover:text-primary text-center font-extrabold transition-all duration-700">
            {mainHero.title}
          </div>
          <div className="text-3xl lg:text-5xl text-primary group-hover:text-gray-700 text-center font-extrabold transition-all duration-700">
            {mainHero.subtitle}
          </div>
        </h1>
        <div className="mt-4 sm:mt-8 sm:flex sm:flex-col sm:items-center lg:ml-10 lg:mb-16 sm:mb-3 mr-5">
          <div className="rounded-md shadow w-3/5 mx-auto sm:w-auto mb-3">
            <a
              href={mainHero.primaryAction.href}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10"
            >
              {mainHero.primaryAction.text}
            </a>
          </div>
          <div className="w-3/5 mx-auto sm:w-auto">
            <a
              href={mainHero.secondaryAction.href}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10"
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
