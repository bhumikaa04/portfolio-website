import React from 'react'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    name: "ChatBot",
    img: "/images/proj1.png",
    features: "Built using Gemini API to provide intelligent conversational responses.",
    github: "https://github.com/bhumikaa04/geminiAPI",
    demo: "https://github.com/bhumikaa04/geminiAPI"
  },
  {
    id: 2,
    name: "CoursePulse",
    img: "/images/proj2.png",
    features: "A distraction-free learning platform to share and store course materials efficiently.",
    github: "https://github.com/bhumikaa04/CoursePulse",
    demo: "https://coursepulse-demo.vercel.app"
  },
  {
    id: 3,
    name: "Code Collab",
    img: "/images/proj3.png",
    features: "Collaborative coding platform with video conferencing, chat, whiteboard, and interview features.",
    github: "https://github.com/bhumikaa04/CodeCollab",
    demo: "https://codecollab-live.vercel.app"
  },
];

const Projects = () => {
  return (
    <div id='works' className='pt-16 pb-16 bg-gradient-to-b from-[#0D0D1A] to-[#1a1a2e]'>
      <div className="w-[70%] mx-auto">
        <h1 className='text-center text-2xl md:text-3xl xl:text-4xl font-bold text-white'> 
          A small section of recent <br/> <span className='text-cyan-300' >projects!</span> 
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {projects.map((project) => (
            <div 
              data-aos='fade-up' 
              data-aos-anchor-placement='top-center' 
              data-aos-delay={project.id * 25} 
              key={project.id}
            >
              {/* Project Card Container */}
              <div className="bg-[#16163B]/60 backdrop-blur-sm rounded-2xl shadow-xl border border-[#2A2A52]/30 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 p-6 group">
                
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-lg">
                  <Image 
                    src={project.img} 
                    alt={project.name} 
                    width={800} 
                    height={650} 
                    className='rounded-lg w-full h-auto transform group-hover:scale-105 transition-transform duration-500'
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="bg-white/90 text-gray-900 p-3 rounded-full hover:bg-white transform hover:scale-110 transition-all duration-300 z-10"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="bg-cyan-500 text-white p-3 rounded-full hover:bg-cyan-400 transform hover:scale-110 transition-all duration-300 z-10"
                    >
                      <FaExternalLinkAlt className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h1 className='text-xl sm:text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300'>
                    {project.name}
                  </h1>
                  <p className='pt-3 font-medium text-white/80 leading-relaxed'>
                    {project.features}
                  </p>
                  
                  {/* Buttons */}
                  <div className="flex space-x-4 mt-5">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 group/btn"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 group/btn"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects