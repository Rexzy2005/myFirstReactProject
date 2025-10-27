import React from 'react'
import Logo from "../assets/react.svg"

const NavBar = () => {

  return (
    <nav
      className="fixed transform translate-x-[-50%] left-[50%] top-2 w-[95%] flex justify-between items-center ring-1 ring-slate-600 m-auto p-4 pl-5 pr-5 rounded-full text-slate-100 font-sans z-50 backdrop-blur-lg sm:p-4 sm:pl-10 sm:pr-10 sm:w-[80%] sm:top-5">
      <a href="#home">
        <p className="font-bold text-2xl"><span className="text-sky-600">Dev</span>Rex</p>
      </a>
      <ul className="space-x-6 list-none hidden sm:flex">
        <li className="hover:text-slate-400 transition-all active:text-slate-400"><a href="#home">Home</a></li>
        <li className="hover:text-slate-400 transition-all active:text-slate-400"><a href="#about">About</a></li>
        <li className="hover:text-slate-400 transition-all active:text-slate-400"><a href="#skills">Skills</a></li>
        <li className="hover:text-slate-400 transition-all active:text-slate-400"><a href="#projects">Projects</a></li>
      </ul>
      
      <button className="contact-button">Get in touch</button>
    </nav>
  )
}

export default NavBar