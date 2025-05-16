'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const campusHighlights = [
  {
    title: 'Modern Library',
    description: 'Thousands of books, digital resources, and quiet study zones.',
    image: '/library.jpg'
  },
   {
    title: 'Art Room',
    description: 'Creative space for painting, sculpture, and crafts.',
    image: '/artroom.jpg'
  },
  {
    title: 'Playground',
    description: 'Safe and fun outdoor space for younger students.',
    image: '/playground.jpg'
  },
  {
    title: 'Science Labs',
    description: 'State-of-the-art physics, chemistry, and biology labs.',
    image: '/sciencelab.jpg'
  },
  {
    title: 'Sports Complex',
    description: 'Well-equipped gym, basketball courts, and a football field.',
    image: '/sport.jpg'
  },
  {
    title: 'Auditorium',
    description: 'Hosts events, seminars, and cultural performances.',
    image: '/auditorium.jpg'
  },
  {
    title: 'Computer Lab',
    description: 'High-speed internet, modern PCs, and programming workshops.',
    image: '/computerlab.jpg'
  },
  {
    title: 'Cafeteria',
    description: 'Healthy and delicious meals in a clean dining environment.',
    image: '/cafetria.jpg'
  },
];

export default function AroundTheCampus() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Around the Campus</h2>
        <p className="text-lg text-gray-600 mb-12">
          Explore our facilities and get a glimpse of daily life at our school.
        </p>

        <Slider {...settings}>
          {campusHighlights.map((item, index) => (
            <div key={index} className="px-3">
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-52 w-full object-cover"
                />
                <div className="p-5 text-left">
                  <h3 className="text-xl font-semibold text-[#163269] mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
