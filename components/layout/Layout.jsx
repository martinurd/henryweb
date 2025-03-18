'use client'
import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

export default function Layout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      // once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
