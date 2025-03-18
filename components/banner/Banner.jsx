import Link from 'next/link';
import React from 'react'
import ExperienceSection from '../ExperienceSection/ExperienceSection';
import SecondSection from '../ExperienceSection/SecondSection';
import Divider from '../divider/Divider';
import ThirdSection from '../ExperienceSection/ThirdSection';
import FourthSection from '../ExperienceSection/FourthSection';
import AboutSection from '../about-section/AboutSection';
import Contact from '../Contact/Contact';

export default function Banner() {
  return (
    <main className="min-h-screen bg-white ">
      <section className="relative py-48 md:h-screen w-full overflow-hidden bg-[#013220]">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.3 }}
        >
          <source src="/video/backgroundvideo.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
         
        />

        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          <div className="text-left container w-full px-4 xl:px-0 mx-auto ">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="50"
            >
              <h1 className="text-[28px] sm:text-[32px] font-cormorant-garamond md:text-[40px] lg:text-[55px] font-[700] text-white mb-6 leading-tight  ">
                Liquidity Solutions for Private Equity Investors & Professionals
              </h1>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <p className="text-[16px] font-cormorant-garamond  sm:text-[18px] md:text-[20px] lg:text-[22px] text-white max-w-[1200px] leading-relaxed">
                We help PE sponsors, professionals, and limited partners unlock the value of their illiquid investments with flexible, non-dilutive credit.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="mt-8">
              <Link
                href="/contact-us"

                className="inline-block mt-0 px-6 py-3 bg-white/20 hover:bg-white/30 text-white text-[16px] sm:text-[18px] md:text-[20px] rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 transform"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full" style={{ backgroundColor: '#EEECE3' }}>
        <ExperienceSection />
        <SecondSection />
        <Divider />
        <ThirdSection />
        <Divider />
        <FourthSection />
        <AboutSection />
        <Contact/>
      </section>
    </main>
  )
}
