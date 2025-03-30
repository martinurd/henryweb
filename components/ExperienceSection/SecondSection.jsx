'use client'
import Link from 'next/link';
import React from 'react'

const cardData = [
    {
        title: "Fund Managers",
        description: "Unlock some of the value of your unrealized interests without selling or giving up upside. We can work with entire GPs or individual partners independently. ",
        delay: 200,
    },
    {
        title: "Independent Sponsors",
        description: "Leverage your interests from unrealized deals to fund new acquisitions, boost your skin in the game and strengthen your fundraising position.",
        delay: 400,
    },
    {
        title: "Limited Partners & HNWIs",
        description: "Manage your liquidity or private market exposure without selling interests at a discount. Our terms are LPA-friendly and don't require personal guarantees. ",
        delay: 600,
        className: "sm:col-span-2 lg:col-span-1"
    }
];

export default function SecondSection() {
    return (
        <section id="experience-section-2" className="w-full bg-[#EEECE3] relative ">
            <div className="relative px-4 xl:px-0 py-20">
                <div className="container mx-auto">
                    <div data-aos="fade" data-aos-duration="200" data-aos-delay="10">
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
                                data-aos="fade"
                                data-aos-duration="200"
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
                                        Learn more
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
