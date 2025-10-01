'use client'

import React, { useState, useRef, useEffect } from 'react'
import { BiEnvelope, BiMap } from 'react-icons/bi'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      // Check if response exists and is not OK
      if (!res) {
        throw new Error('No response received from server')
      }

      if (!res.ok) {
        const errorText = await res.text().catch(() => 'Unknown error')
        throw new Error(`HTTP error! status: ${res.status} - ${errorText}`)
      }

      // Try to parse JSON response
      let result;
      try {
        result = await res.json()
      } catch (jsonError) {
        throw new Error('Invalid JSON response from server')
      }
      
      if (result.success) {
        alert("Message sent successfully ✅")
        if (formRef.current) {
          formRef.current.reset()
        }
      } else {
        alert(`Failed to send message: ${result.message || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('Error sending message:', error)
      if (error instanceof Error) {
        if (error.message.includes('JSON')) {
          alert("Server error: Received invalid response. Please check if the API endpoint exists.")
        } else if (error.message.includes('fetch')) {
          alert("Network error: Unable to connect to server. Please check your internet connection.")
        } else {
          alert(`Failed to send message: ${error.message}`)
        }
      } else {
        alert("Failed to send message. Please try again later.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  if (!isClient) {
    return (
      <div className="p-8 md:p-10 bg-[#16163B] rounded-2xl shadow-lg">
        <div className="space-y-5">
          {/* Placeholder inputs that match the styling */}
          <div className="px-4 py-3.5 rounded-lg bg-[#2A2A52] w-full animate-pulse h-14" />
          <div className="px-4 py-3.5 rounded-lg bg-[#2A2A52] w-full animate-pulse h-14" />
          <div className="px-4 py-3.5 rounded-lg bg-[#2A2A52] w-full animate-pulse h-14" />
          <div className="px-4 py-3.5 rounded-lg bg-[#2A2A52] w-full animate-pulse h-40" />
          <div className="w-full mt-4 px-6 py-4 bg-cyan-700 rounded-full animate-pulse h-14" />
        </div>
      </div>
    )
  }

  return (
    <div id='contact' data-aos='fade-left' data-aos-anchor-placement='top-center' data-aos-delay = '0'  className="p-8 md:p-10 bg-[#16163B] rounded-2xl shadow-lg">
      <form data-aos='fade-left' data-aos-anchor-placement='top-center' data-aos-delay = '0'  ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="px-4 py-3.5 text-white outline-none rounded-lg bg-[#2A2A52] w-full placeholder:text-white/70 focus:ring-2 focus:ring-cyan-400 transition-all"
          required
          disabled={isLoading}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="px-4 py-3.5 text-white outline-none rounded-lg bg-[#2A2A52] w-full placeholder:text-white/70 focus:ring-2 focus:ring-cyan-400 transition-all"
          required
          disabled={isLoading}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Mobile Number"
          className="px-4 py-3.5 text-white outline-none rounded-lg bg-[#2A2A52] w-full placeholder:text-white/70 focus:ring-2 focus:ring-cyan-400 transition-all"
          disabled={isLoading}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="px-4 py-3.5 text-white outline-none rounded-lg bg-[#2A2A52] w-full placeholder:text-white/70 h-[10rem] resize-none focus:ring-2 focus:ring-cyan-400 transition-all"
          required
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className="w-full mt-4 px-6 py-4 bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-700 disabled:cursor-not-allowed transition-all duration-300 text-white font-semibold rounded-full shadow-md"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}

const Contact = () => {
  return (
    <div id='contact' className="pt-20 pb-20 bg-[#0D0D1A]">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Section - Contact Info */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Let's Connect
          </h1>
          <p className="text-gray-400 mt-4 text-lg max-w-md">
            Have questions or want to work together? Reach out to me through
            any of the channels below.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex items-center space-x-4">
              <BiEnvelope className="w-8 h-8 text-cyan-300" />
              <p className="text-lg font-medium text-gray-300">chaudhary.bhumikaa.04@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <BiMap className="w-8 h-8 text-cyan-300" />
              <p className="text-lg font-medium text-gray-300">Faridabad, Haryana, India</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center mt-10 space-x-5">
            <div className="w-12 h-12 bg-blue-950/70 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-all duration-300 shadow-md">
              <FaFacebookF className="text-white w-5 h-5" />
            </div>
            <div className="w-12 h-12 bg-blue-950/70 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-all duration-300 shadow-md">
              <FaYoutube className="text-white w-5 h-5" />
            </div>
            <div className="w-12 h-12 bg-blue-950/70 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-500 transition-all duration-300 shadow-md">
              <FaInstagram className="text-white w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <ContactForm />

      </div>
    </div>
  )
}

export default Contact