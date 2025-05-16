import React from 'react';

const UniversityLifeHero = () => {
  return (
    <section
      className="relative bg-[url('/unvercity.jpg')] bg-cover bg-center bg-no-repeat h-72 md:h-[500px] flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black/20 bg-opacity-50" />
      <div className="relative z-10 text-center px-6">
        <div className="max-w-2xl mx-auto   rounded-lg p-8  ">
          <h1 className="text-3xl  font-bold text-white drop-shadow-md">
           Your Campus. Your Community. Your Future.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default UniversityLifeHero;
