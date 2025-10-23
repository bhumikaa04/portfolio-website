'use client'; 
import React from 'react'
import { SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Tilt from 'react-parallax-tilt'

interface Skill { // Fixed: Added proper interface
    name: string;
    icon: React.ReactNode;
    percentage: number;
}

const skills: Skill[] = [ // Fixed: Added type annotation
    {
        name: 'JavaScript', 
        icon: <SiJavascript />, 
        percentage: 80, 
    }, 
    {
        name: 'React', 
        icon: <SiReact />, 
        percentage: 85, 
    }, 
    {
        name: 'Next.js', 
        icon: <SiNextdotjs />, 
        percentage: 85, 
    },    
    {
        name: 'Node.js', 
        icon: <SiNodedotjs />, 
        percentage: 90, 
    },
    {
        name: 'TailwindCSS', 
        icon: <SiTailwindcss />, 
        percentage: 90, 
    }, 
    {
        name: 'TypeScript', 
        icon: <SiTypescript />, 
        percentage: 85, 
    }
]

const Skills = () => {
  return (
    <div id='skills' className="text-white pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white ">
        My <span className='text-cyan-300'>Skills</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {skills.map((skill, index) => { // Fixed: Replaced 'i' with 'index'
            return (
              <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
                <div data-aos='flip-right' data-aos-anchor-placement='top-center' className='bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105'>
                    <div className="text-5xl text-gray-300 mb-2">{skill.icon}</div>
                    <div className="text-xl text-purple-400 mt-1 mb-1 font-bold">{skill.name}</div>
                    <div className="text-3xl text-gray-300 font-semibold">{skill.percentage}%</div>
                </div>
              </Tilt>
            )
        })}
      </div>
    </div>
  )
}

export default Skills