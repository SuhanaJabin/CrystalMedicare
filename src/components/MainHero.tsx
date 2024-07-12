import React from 'react';
import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="lg:mt-10 lg:text-left sm:text-center group p-3">
        <h1 className="tracking-tight font-extrabold text-gray-700">
          <div className="text-3xl lg:text-5xl group-hover:text-primary text-center transition-all duration-700">
            {mainHero.title}
          </div>
          <div className="text-3xl lg:text-5xl text-primary group-hover:text-gray-700 text-center transition-all duration-700">
            {mainHero.subtitle}
          </div>
        </h1>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:ml-10 mb-16">
          <div className="rounded-md shadow">
            <a
              href={mainHero.primaryAction.href}
              className="w-auto flex items-center sm:p-10 lg:mt-10 sm:mt-10 justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10"
            >
              {mainHero.primaryAction.text}
            </a>
          </div>
          <div className="sm:ml-3">
            <a
              href={mainHero.secondaryAction.href}
              className="w-auto flex items-center text-center lg:mt-10 sm:mt-10 justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10"
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
