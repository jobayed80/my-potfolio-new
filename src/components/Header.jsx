import React, { useEffect, useState } from 'react';

import Logo from '../assets/img/logo.svg'
import Nav from '../components/Nav'
import NavMobile from '../components/NavMobile'
import Socials from '../components/Socials'

const Header = () => {
    const [bgc , setBg] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      return window.scrollY >50 ? setBg(true) : setBg(false)
    })
  })

  
  return (
    <header className={` ${bgc ? 'bg-tertiary h-20' : 'h-24'} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300 `}>
        <div className="container mx-auto h-full flex items-center justify-between">
            {/* Logo */}
            <a href="#">
                <img src={Logo} alt="" />
            </a>
            {/* Navbar */}
            <div className="hidden lg:block">
                <Nav></Nav>
            </div>
            {/* Social */}
            <div className="hidden lg:block">
                <Socials></Socials>
            </div>
            {/* NavMile */}
            <div className="lg:hidden">
                <NavMobile></NavMobile>
            </div>
        </div>
    </header>
  )
}

export default Header