'use client'
import Link from 'next/link';
import React from 'react'

const cardData = [
    {
        title: "Emerging Fund GPs",
        description: "Meet or increase GP commitments starting at Fund I. We can work with individual members of the GP without impacting others.",
        delay: 200,
    },
    {
        title: "Independent Sponsors",
        description: "Independent sponsors choose us to lever past investments and complete new deals or maximize working capital.",
        delay: 400,
    },
    {
        title: "Limited Partners & HNWIs",
        description: "We can help avoid the costs of refinancing existing debt, selling assets at a discount, and more.",
        delay: 600,
        className: "sm:col-span-2 lg:col-span-1"
    }
];

export default function SecondSection() {
    return (
        <section id="eligibility" className="w-full bg-[#EEECE3] relative ">
            <div className="relative px-4 xl:px-0 py-20">
                <div className="container mx-auto">
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                        <h2 className="text-[24px] sm:text-[28px] font-cormorant-garamond md:text-[32px] lg:text-[36px] font-[700] text-black text-center mb-4 leading-tight">
                            We work with individual partners, entire partnerships, and anyone with illiquid assets
                        </h2>
                        <p className="text-[14px] sm:text-[16px] md:text-[18px] text-black text-center mb-12 sm:mb-16 leading-snug">
                            {/* Optional subtitle or description */}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {cardData.map((card, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay={card.delay}
                                className={`bg-white/10 font-cormorant-garamond border border-gray-300 rounded-xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 shadow-lg flex flex-col h-full ${card.className || ''}`}
                            >
                                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-[600] text-black mb-4 leading-tight">
                                    {card.title}
                                </h3>
                                <p className="text-[16px] sm:text-[18px] md:text-[20px] text-black leading-snug flex-grow">
                                    {card.description}
                                </p>
                                <button>
                                    <Link
                                        href="/contact-us"
                                        className="text-[16px] cursor-pointer sm:text-[18px] md:text-[20px] mt-6 inline-flex items-center text-black
                                        hover:text-[#296354] 
                                        hover:text-opacity-75 hover:translate-x-1 transition-all duration-300 ease-in-out"
                                    >
                                        Apply now
                                    </Link>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
