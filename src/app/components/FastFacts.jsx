'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  AcademicCapIcon,
  UserGroupIcon,
  ChartBarIcon,
  SparklesIcon,
  BookOpenIcon,
  GlobeAltIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import Slider from 'react-slick';

const facts = [
  {
    label: 'Students Enrolled',
    value: '1,200',
    icon: UserGroupIcon
  },
  {
    label: 'Certified Teachers',
    value: '85',
    icon: AcademicCapIcon
  },
  {
    label: 'Graduation Rate',
    value: '98%',
    icon: ChartBarIcon
  },
  {
    label: 'Clubs & Activities',
    value: '30+',
    icon: SparklesIcon
  },
  {
    label: 'Library Books',
    value: '15,000+',
    icon: BookOpenIcon
  },
  {
    label: 'International Programs',
    value: '5',
    icon: GlobeAltIcon
  },
  {
    label: 'Years of Excellence',
    value: '50+',
    icon: ClockIcon
  }
];

export default function FastFacts() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-3 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 font-serif">Fast Facts</h2>
        <Slider {...settings}>
          {facts.map((fact, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center h-full">
                <div className="flex justify-center mb-4">
                  <fact.icon className="h-16 w-16 text-[#279989] transition-transform duration-300 hover:scale-125" />
                </div>
                <div className="text-2xl font-extrabold text-[#163269] mb-2">{fact.value}</div>
                <div className="text-lg font-medium text-gray-800">{fact.label}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
