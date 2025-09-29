import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-gradient-to-r from-blue-400 to-blue-600 text-white">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Achieve Your IELTS Dream Score
        </h1>
        <p className="mb-6 text-lg">
          Expert guidance, mock tests, and AI-powered speaking practice to help you succeed.
        </p>
        <button className="bg-yellow-400 text-blue-700 px-6 py-3 rounded-lg font-semibold">
          Book Free Trial
        </button>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img
          src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Hero Banner"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
