'use client'
import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo/logo.png'

export default function Navbar() {
  const [nav, setNav] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const handleClick = () => setNav(!nav)

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      
      // Remove the leading slash if present (for handling both /#id and #id formats)
      const targetId = href.replace('/#', '#').substring(1);
      
      // Specific handling for "why-henry" section
      if (targetId === "why-henry") {
        // Target a fixed position on the page for the "why-henry" link
        // This is a hardcoded position that should be well above the FourthSection
        window.scrollTo({
          top: 1200, // Fixed position from the top of the page
          behavior: 'smooth'
        });
      } else {
        // Normal handling for other links
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 150;
          const scrollToPosition = element.offsetTop - offset;
          window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
          });
        }
      }
    }
    setNav(false); // Close mobile menu
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-[#004737]/80 backdrop-blur-xs shadow-lg py-3'
      : 'bg-[#004737] py-3'
      }`}>
      <div className='container mx-auto '>
        <div className={'px-4 xl:px-0 flex justify-between items-center w-full h-full border-b-2 border-[#FFFFFF33]'}>
          <Link href='/' className="flex items-center" onClick={(e) => handleLinkClick(e, '/')}>
            <Image
              src={logo}
              width={500}
              height={500}
              className={`transition-all duration-300 ${isScrolled ? 'w-48' : 'w-60'}`}
              alt='logo'
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 ">
            {[
              { href: '/#about', text: 'About Us' },
              { href: '/#why-henry', text: 'Why Henry' },
              { href: '/faqs', text: 'FAQ' },
              { href: '/#contact-us', text: 'Contact Us' },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-white text-[22px]  hover:text-gray-300 transition-colors hover:scale-110 transform duration-200"
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <div className="md:hidden cursor-pointer text-white" onClick={handleClick}>
            {!nav ? <FaBars className='text-2xl' /> : <FaTimes className='text-2xl' />}
          </div>
        </div>

        {/* Mobile Menu */}
        <ul className={!nav
          ? "hidden"
          : "absolute bg-[#004737]/95 backdrop-blur-sm w-full px-8 md:hidden py-4 left-0"
        }>
          {[
            { href: '/#about', text: 'About Us' },
            { href: '#why-henry', text: 'Why Henry' },
            { href: '/faqs', text: 'FAQ' },
            { href: '/#contact-us', text: 'Contact Us' },
          ].map((item, index) => (
            <li key={index} className="border-b-2 border-[#FFFFFF33] w-full py-4">
              <Link
                href={item.href}
                className="text-white"
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
