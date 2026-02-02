import { useState } from 'react'
import { NavLink, Outlet } from "react-router-dom";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import './App.css'

const Layout = ()=> {
  return (
    <div>
      <header>
        <nav className="relative bg-gray-800 text-white flex flex-wrap justify-between w-screen h-[clamp(2rem,2vh,50rem)] mt-[clamp(3rem,1vh,5rem)] mb-[clamp(3rem,1vh,5rem)]">
          <div className="text-[clamp(1.5rem,1.5vw,3rem)] absolute flex flex-wrap items-center justify-start place-self-center left-1/25 gap-[clamp(2rem,1vh,3rem)]">
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