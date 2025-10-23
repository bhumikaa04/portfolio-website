'use client' ; 
// by default all the links in nextjs are server links - we need to explicitly define clients links 
// clients link - we can use hooks 


import { NavLinks } from '@/constants/constant'
import React, { useEffect, useState } from 'react'
import { FaCode } from 'react-icons/fa'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { IoDocumentTextOutline } from 'react-icons/io5';

type Props = {
    openNav: () => void ; 
}

const Nav = ({openNav}: Props) => {

    const [navBg , setNavBg] = useState(false); 

    useEffect(() => {
        const handler = ()=> {
            if(window.scrollY >= 90) setNavBg(true); 
            if(window.scrollY < 90) setNavBg(false); 
        }

        window.addEventListener("scroll" , handler); 
        return() => window.removeEventListener("scroll" , handler)
    }, [])

  return (
    <div className={`transition-all 
    ${navBg ? 'bg-[#0f142ed9] shadow-md' : 'fixed' } 
    duration-200 h-[12vh] z-[10000] fixed w-full`} >
        <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
            <div className='flex items-center space-x-2'> 
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
                    {/* icon  */}
                    <FaCode className='w-5 h-5 text-black' />
                </div>
                <h1 className='text-xl hidden sm:block md:text-2xl text-white font-bold' >
                    {/* name */}
                    BHUMIKA
                </h1>
            </div>




            {/* NavLinks */}
            <div className="hidden lg:flex items-center space-x-10">
                {NavLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    onClick={(e) => {
                      e.preventDefault(); // stop instant jump
                      const target = document.querySelector(link.url);
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
                  >
                    {link.label}
                  </a>
                ))}
            </div>

            {/* buttons */}
            <div className="flex items-center space-x-4">
                <a
                  href='/resume/Bhumika Chaudhary - CV.pdf'
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2"
                >
                  <IoDocumentTextOutline className="w-5 h-5" />
                  <span>View CV</span>
                </a>

                {/* burger menu */}
                <HiBars3BottomRight  
                onClick={openNav} 
                className='w-8 h-8 cursor-pointer text-white lg:hidden' />
            </div>
        </div>
    </div>
  )
}

export default Nav
