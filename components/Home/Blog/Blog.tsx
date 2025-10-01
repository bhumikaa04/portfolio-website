import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div id='blogs' className='pt-16 pb-16'>
        <h1 className="text-center text-2xl md:text-4xl font-bold text-white">
            My Latest  
            <span className='text-cyan-300'> Blogs</span>
        </h1>
        <div className = 'w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-10 items-center mt-16'>
            <div data-aos='fade-right' data-aos-anchor-placement='top-center'  >
                <BlogCard 
                image="/images/proj1.png" 
                title="how i made my project coursepulse?" 
                />
            </div>
            <div data-aos='fade-right' data-aos-anchor-placement='top-center' data-aos-delay = '200' >
                <BlogCard 
                image="/images/proj3.png" 
                title="how i made my project coursepulse?" 
                />
              </div>
              <div data-aos='fade-right' data-aos-anchor-placement='top-center' data-aos-delay = '400' >
                <BlogCard 
                image="/images/proj4.png" 
                title="how i made my project coursepulse?" 
                />
             </div>
        </div>
    </div>
  )
}

export default Blog
