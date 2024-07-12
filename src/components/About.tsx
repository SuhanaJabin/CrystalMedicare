import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Product = () => {
  const { product } = config;
  const [firstItem] = product.items;

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2  text-5xl font-bold leading-tight text-center text-primary`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap `}>
          <div
            className={`w-11/12 sm:w-1/2 p-6 mb-14 group transition-all duration-300  `}
          >
            <h3
              className={`text-4xl text-gray-800 font-bold group-hover:text-primary leading-none transition-all duration-500  `}
            >
              {firstItem?.title}
            </h3>
            <p
              className={`text-gray-600 text-xl font-bold group-hover:text-gray-800 group-hover:font-bold transition-all group-hover:text-2xl duration-500 mt-12`}
            >
              {firstItem?.description}
            </p>
          </div>
          <div className={`w-full  sm:w-1/2 p-6`}>
            <img
              className="h-6/6 mt-10 rounded-2xl"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
