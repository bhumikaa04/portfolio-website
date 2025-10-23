'use client'; 
import React, { useEffect } from 'react'
import Hero from './Hero/Hero';
import Resume from './Resume/Resume';
import Projects from "./Projects/Projects"
import Skills from './Skills/Skills';
import Blog from './Blog/Blog';
import ParticleBackground from './Hero/ParticleBackground'
import Contact from './Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <>
      <ParticleBackground />
      <div className='overflow-hidden'>
        <Hero />
        <Resume />
        <Projects />
        <Skills />
        {/* <Blog /> */}
        <Contact />
      </div>
    </>
  )
}

export default Home