'use client'
import React from 'react'

export default function FourthSection() {
    return (
        <section id="why-henry" className="relative font-cormorant-garamond">
            <div className="absolute inset-0 bg-[#EEECE3]" />
            <div className="relative py-8 px-4 md:px-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-36 items-start">

                        {/* Title: shows first on mobile, second on desktop */}
                        <div 
                            className="md:order-2"
                            data-aos="fade"
                            data-aos-duration="200"
                            data-aos-delay="10"
                        >
                            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-[700] text-black max-w-[480px] leading-tight">
                                A new way of unlocking liquidity in private markets without selling, risking forced sales, or changing control rights 
                            </h2>
                        </div>

                        {/* Content: shows second on mobile, first on desktop */}
                        <div className="md:order-1 max-w-xl">
                            <div
                                data-aos="fade"
                                data-aos-duration="200"
                                data-aos-delay="10"
                            >
                                <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-black mb-8 font-[500]">
                                Our asset-based approach allows us to untap liquidity in assets that traditional banks overlook. As a lender with a balance sheet, we are more flexible than a fund with a mandate.
                                </p>
                            </div>

                            <div 
                                className="bg-white/10 border border-gray-300 rounded-xl p-8 hover:bg-white/20 transition-all duration-300 shadow-lg"
                                data-aos="fade"
                                data-aos-duration="200"
                                data-aos-delay="10"
                            >
                                <ul className="space-y-6">
                                    <li className="text-black">
                                        <span className="text-[16px] sm:text-[18px] md:text-[20px] font-[700] block mb-2">
                                            Flexible terms
                                        </span>
                                        <p className="text-[14px] sm:text-[16px] md:text-[18px] font-[500]">
                                            Designed case-by-case to best match the needs of each borrower
                                        </p>
                                    </li>
                                    <li className="text-black">
                                        <span className="text-[16px] sm:text-[18px] md:text-[20px] font-[700] block mb-2">
                                            Non-dilutive
                                        </span>
                                        <p className="text-[14px] sm:text-[16px] md:text-[18px] font-[500]">
                                            Retain ownership, upside, and alignment without introducing third-party control 
                                        </p>
                                    </li>
                                    <li className="text-black">
                                        <span className="text-[16px] sm:text-[18px] md:text-[20px] font-[700] block mb-2">
                                            No personal guaranty
                                        </span>
                                        <p className="text-[14px] sm:text-[16px] md:text-[18px] font-[500]">
                                            Recourse only against the interests pledged, not the borrower behind them 
                                        </p>
                                    </li>
                                    <li className="text-black">
                                        <span className="text-[16px] sm:text-[18px] md:text-[20px] font-[700] block mb-2">
                                            Flexible repayment
                                        </span>
                                        <p className="text-[14px] sm:text-[16px] md:text-[18px] font-[500]">
                                            Schedule based on borrower feedback, given our ability to accrue interest, bullet amortization, or both 
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
