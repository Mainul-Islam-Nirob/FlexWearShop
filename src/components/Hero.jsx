import React from 'react';
import {Link } from 'react-router-dom';
import modelImg from '../assets/model.webp';
import PropTypes from 'prop-types';


function Hero({onExploreClick}) {
  return (
    <section className="bg-white py-5 md:py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Style Meets Comfort at <span className="text-blue-600">FlexWearShop</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Discover trendy apparel for every occasion. Quality guaranteed, comfort assured.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="shop" className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
              Shop Now
            </Link>
            <button onClick={onExploreClick}
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-medium cursor-pointer hover:bg-blue-50 transition">
              Featured Items
            </button>
          </div>
        </div>

        <div className="md:w-1/2 p-10">
          <img
            src={modelImg}
            alt="Fashion Model"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

Hero.propTypes = {
  onExploreClick: PropTypes.func.isRequired,
};
