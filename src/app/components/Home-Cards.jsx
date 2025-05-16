'use client';

import Image from 'next/image';

export default function HomeCards() {
    const cards = [
        {
            image: '/card1.jpg',
            title: 'EARLY EDUCATION',
            description: 'Early Childhood and Pre-Kindergarten',
            longDescription:
                'The Early Education program emphasizes hands-on learning experiences, building the foundation for future academic success. Our dedicated teachers work closely with each child to create an inclusive and nurturing environment.',
            bgColor: 'bg-[#279989]',
        },
        {
            image: '/card2.jpg',
            title: 'LOWER SCHOOL',
            description: 'Grades Kindergarten to 8',
            longDescription:
                'The Lower School program focuses on academic growth while also encouraging leadership, respect, and social responsibility. Students engage in a variety of subjects that build a strong academic foundation.',
            bgColor: 'bg-yellow-500',
        },
        {
            image: '/card3.jpg',
            title: 'UPPER SCHOOL',
            description: 'Grades 8 to 12',
            longDescription:
                'Our Upper School provides a rigorous academic environment and offers numerous extracurricular opportunities. Students are prepared for college through specialized guidance and personalized learning experiences.',
            bgColor: 'bg-[#44883E]',
        },
    ];

    return (
        <section className="pb-3 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-lg bg-[#feffff] px-8 sm:p-10 font-bold text-center  text-[#425780]">
                    The Seven Unique School is one of the best private day schools in Jaipur. We are a coeducational elementary and middle school for children from early education through eighth grade. Wyndcroft is recognized for its supportive and engaging community that promotes academic excellence and creates a strong foundation for each child's future achievement.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`relative group ${card.bgColor} text-white mx-3 sm:mx-12 md:mx-0 border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform duration-300 hover:scale-105`}
                        >
                            <div className="w-52 h-52 border-2 border-b-blue-200 outline outline-offset-4 rounded-full overflow-hidden mx-auto mt-8 relative opacity-100 group-hover:opacity-0 transition-all duration-300">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    layout="fill"
                                    className="object-cover rounded-full transition duration-300"
                                />
                            </div>

                            <div className="p-6 text-center opacity-100 group-hover:opacity-0 transition-all duration-300">
                                <h3 className="text-xl font-semibold">{card.title}</h3>
                                <p className="mt-3 text-md font-semibold text-gray-200 line-clamp-2 group-hover:line-clamp-none transition duration-300">
                                    {card.description}
                                </p>
                            </div>

                            <div className="absolute inset-0 text-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 transform scale-95 group-hover:scale-100">
                                <h3 className="text-xl font-semibold mb-7 mt-4">{card.title}</h3>
                                <p>{card.longDescription}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
