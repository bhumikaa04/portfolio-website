'use client'; 

import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  return (
    <div id='home' className='pt-10 relative h-screen flex items-center justify-center text-white overflow-hidden flex-col'>
       {/* <ParticleBackground />  */}
        <div className="relative flex flex-col z-10 items-center">
            <Image 
            src="/images/heroImage.jpeg" 
            className='rounded-full border-8 border-[#0c0c48aa]' 
            alt="HeroImage"
            width={150}
            height={150}
            data-aos='fade-up' />
        </div>
        <h1 data-aos='fade-up' data-aos-delay="200" className='text-2xl sm:text-4xl md:text-5xl lg:text-4xl mt-6 text-center font-bold'>
            Crafting full-stack applications, <br/>
            optimizing algorithms, <br/>
            <span className='text-cyan-200'> and exploring AI-driven solutions. </span>
        </h1>
        
        <h2 data-aos='fade-up' data-aos-delay="400" className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium items-center'>
            Hi! I&apos;m Bhumika — a dedicated {/* Fixed: Replaced apostrophe with HTML entity */}
            <span className='text-cyan-200 font-bold pl-2'>
                <Typewriter options={{
                    strings: [
                        "Full Stack Developer", 
                        "Data Structures & Algorithms Enthusiast", 
                        "AI & LLM Explorer"
                    ], 
                    autoStart: true, 
                    loop: true, 
                    delay: 75, 
                    deleteSpeed: 50, 
                }} />
            </span>
        </h2>
        {/* <button className='mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium'>
            <span>See my work </span>
            <BsArrowRight className='w-5 h-5 inline-block' />
        </button> */}
    </div>
  )
}

export default Hero