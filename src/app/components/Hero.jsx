'use client';

import { useState, useEffect } from 'react';
import { FaGraduationCap, FaBasketballBall, FaUsers } from 'react-icons/fa';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/heroimg1.jpg',
      title: 'Welcome to Seven Unique School',
      subtitle: 'Empowering the next generation of leaders.',
    },
    {
      image: '/heroimg2.jpg',
      title: 'Unleash Your Potential',
      subtitle: 'Education for a brighter future.',
    },
    {
      image: '/heroimg4.jpg',
      title: 'Shape Your Future with Us',
      subtitle: 'Prepare for success, today and tomorrow.',
    },
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [currentSlide]);

  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white h-[60vh]"
        style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold mb-3 animate-fadeIn">
            {slides[currentSlide].title}
          </h1>

          <p className="text-base sm:text-lg mb-5 animate-fadeIn">
            {slides[currentSlide].subtitle}
          </p>

          <a
            href="/"
            className="inline-block bg-[#6d8d54] text-white font-semibold px-5 py-2 sm:px-6 sm:py-3 rounded shadow-md hover:bg-[#64814d] transition"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* Info Boxes Section */}
      <section className="relative z-30 mt-[-60px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {/* Graduation Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all flex flex-col items-center justify-center text-center">
              <div className="text-4xl text-[#6d8d54] mb-4">
                <FaGraduationCap />
              </div>
              <h3 className="text-xl text-gray-700 font-semibold">Graduation</h3>
            </div>

            {/* Athletics Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all flex flex-col items-center justify-center text-center">
              <div className="text-4xl text-[#6d8d54] mb-4">
                <FaBasketballBall />
              </div>
              <h3 className="text-xl text-gray-700 font-semibold">Athletics</h3>
            </div>

            {/* Social Life Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all flex flex-col items-center justify-center text-center">
              <div className="text-4xl text-[#6d8d54] mb-4">
                <FaUsers />
              </div>
              <h3 className="text-xl text-gray-700 font-semibold">Social Life</h3>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
