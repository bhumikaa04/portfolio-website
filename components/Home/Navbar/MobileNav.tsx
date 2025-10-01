import { NavLinks } from '@/constants/constant'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav: boolean
  closeNav: () => void
}

const MobileNav = ({ closeNav, showNav }: Props) => {
  const NavOpen = showNav ? "translate-x-0" : "translate-x-[100%]"

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault() // prevent instant jump
    const target = document.querySelector(url)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
    closeNav() // close menu after clicking
  }

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 ${NavOpen} transform transition-all right-0 duration-500 z-[10000] bg-black opacity-70 w-full h-screen`}
        onClick={closeNav} // click outside closes menu
      ></div>

      {/* NavLinks */}
      <div
        className={`text-white ${NavOpen} bg-cyan-700 fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] space-y-6 z-[10000] right-0`}
      >
        {NavLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            onClick={(e) => handleNavClick(e, link.url)}
            className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] cursor-pointer"
          >
            {link.label}
          </a>
        ))}

        {/* Close button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
        />
      </div>
    </div>
  )
}

export default MobileNav
