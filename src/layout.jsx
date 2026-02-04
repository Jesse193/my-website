import { useState } from 'react'
import { NavLink, Outlet } from "react-router-dom";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import './App.css'
import { dropDown } from './utils/dropDown.js';


const Layout = ()=> {
  return (
    <div>
      <header>
        <nav className="relative bg-gray-800 text-white flex flex-wrap justify-between w-screen h-[clamp(2rem,2vh,50rem)] mt-[clamp(3rem,1vh,5rem)] mb-[clamp(3rem,1vh,5rem)]">
          <div id="dropdown" className="block md:hidden absolute flex flex-wrap place-self-center mb-7">
            <button id="dropbtn" onClick={() => dropDown()}  className="md:hidden text-5xl ml-[10vw]">
              &#8964;
            </button>
            <div id="dropdownContent" className="hidden bg-gray-500 border-1 border-black absolute top-1/1 flex flex-col items-center justify-center space-y-4 divide-y-2 divide-black w-50 mt-[1vw] pt-[2vw] *:justify-center *:text-3xl">
              <NavLink className="flex justify-center py-2" to="/" end>Home</NavLink>
              <NavLink className="flex justify-center py-2" to="/portfolio" end>Portfolio</NavLink>
              <NavLink className="flex justify-center py-2" to="/contact" end>Contact</NavLink>  
            </div>
          </div>
          <div className="max-sm:hidden text-[clamp(1.5rem,1.5vw,3rem)] absolute flex flex-wrap items-center justify-start place-self-center left-1/25 gap-[clamp(2rem,1vh,3rem)]">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/portfolio" end>Portfolio</NavLink>
            <NavLink to="/contact" end>Contact</NavLink>
          </div>
          <div className="absolute flex flex-wrap items-center place-self-center justify-end right-1/25 gap-[clamp(2rem,1vh,3rem)]">
            <a target="_blank" rel="noopener" href="https://github.com/Jesse193">
              <img className="w-auto h-[clamp(3rem,3vw,8rem)] rounded-full" src="images/github-mark-white.png" alt="Github" />
            </a>
            <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/jesse-sorman/">
              <img className="w-auto h-[clamp(3rem,3vw,8rem)]" src="images/LI-In-Bug.png" alt="Linkedin" />
            </a>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
export default Layout