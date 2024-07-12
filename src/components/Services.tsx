import React from 'react';

import config from '../config/index.json';

const Features = () => {
  const { features } = config;
  const { title, description, items: featuresList } = features;
  console.log('title description', title, description); // eslint-disable-line no-console
  return (
    <div className={`py-12 bg-background`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className={`w-full lg:text-5xl md:text-5xl sm:text-4xl mb-32 font-bold leading-tight text-center  text-primary hover:text-secondary`}
        >
          {features.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>

        <div className="mt-5">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature) => (
              <div
                key={feature.name}
                className="relative group hover:bg-opacity-20 hover:bg-gray-400 rounded-2xl p-7"
              >
                <dt>
                  <div
                    className={`absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4`}
                  >
                    <h1 className="font-bold text-xl transition-all duration-500 group-hover:text-2xl">
                      {feature.number}
                    </h1>
                  </div>
                 
                  <h1 className=" ml-16 leading-6 lg:text-2xl sm:text-xl font-bold transition-all duration-500  group-hover:text-3xl group-hover:text-primary">
                    {feature.name}
                  </h1>
                </dt>
                <dd className="mt-2 ml-16 sm:text-xl text-gray-500 transition-all duration-500  group-hover:text-2xl group-hover:text-gray-800 group-hover:font-bold">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
