'use client'
import React from 'react'
import martin from '../../public/about/martin.png'
import austin from '../../public/about/austin.png'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection() {
    return (
        <section id="about" className="pt-16 pb-16 px-4 md:px-8 bg-[#2F4C44] font-cormorant-garamond">
            <div className="container mx-auto">
                <div
                    data-aos="fade"
                    data-aos-duration="100"
                    data-aos-delay="10"
                >
                    <h2 className="text-[34px] font-[700] text-white mt-0 mb-3 text-center">
                        About Us
                    </h2>
                </div>

                <div
                    className="bg-white/10 rounded-lg p-6 mb-16 max-w-4xl mx-auto shadow-lg font-[600]"
                    data-aos="fade"
                    data-aos-duration="100"
                    data-aos-delay="10"
                >
                    <p className="text-lg leading-relaxed mb-8 text-white font-[600]">
                        Henry Capital is a pure play liquidity provider for PE professionals and investors. Our goal is to be a strategic partner with our clients by reducing the liquidity mismatch that managers and investors experience as they grow their firms and portfolios. Accordingly, we are backed by permanent capital to provide liquidity from our balance sheet regardless of the fundraising market.
                    </p>
                    <p className="text-[18px] text-white/90 leading-relaxed">
                        Having experienced this illiquidity ourselves, we understand the pain points and can find creative ways to help you achieve your goals. The loans have the option to accrue the interest until there are underlying distributions. We draw from asset-backed lending and hybrid practices to best tailor our products.
                    </p>
                </div>

                <div
                    className="flex flex-col md:flex-row justify-center gap-16 mb-8"
                    data-aos="fade"
                    data-aos-duration="100"
                    data-aos-delay="10"
                >
                    <div className="bg-white/10 group hover:bg-white/20 p-4 rounded-lg transition-all duration-300">
                        <Image  src={martin} 
                                width={500} 
                                height={500} 
                                alt='Martin Urdapilleta' 
                                className='w-72 h-auto rounded-2xl' />

                        <Link href="https://www.linkedin.com/in/martin-urdapilleta" target='_blank'>
                            <h3 className="text-[20px] text-white my-2 font-[600] transform duration-300 group-hover:text-blue-400">

                                Martin Urdapilleta
                            </h3>
                        </Link>
                        <a
                            href="mailto:martin@henrycap.com"
                            className="text-[16px] text-white "
                        >
                            martin@henrycap.com

                        </a>
                    </div>
                    <div className="bg-white/10 group hover:bg-white/20 p-4 rounded-lg transition-all duration-300">
                        <Image  src={austin} 
                                width={500} 
                                height={500} 
                                className='w-72 h-auto rounded-2xl'
                                alt="Austin Brady" />

                        <Link href="https://www.linkedin.com/in/austin-brady" target='_blank'>
                            <h3 className="text-[20px] text-white my-2 font-[600] transform duration-300 group-hover:text-blue-400">
                                Austin Brady
                            </h3>
                        </Link>
                        <a
                            href="mailto:austin@henrycap.com"
                            className="text-[16px] text-white "
                        >
                            austin@henrycap.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
