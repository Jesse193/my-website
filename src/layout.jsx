import { useState } from 'react'
import { NavLink, Outlet } from "react-router-dom";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import './App.css'

const Layout = ()=> {
  return (
    <div>
      <header>
        <nav className="relative bg-gray-800 text-white flex flex-wrap justify-between w-screen h-20 md:h-20 lg:h-30 xl:h-40">
          <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl absolute flex flex-wrap items-center justify-start left-1/25 top-1/2 space-x-10 lg:space-x-15 xl:space-x-20">
            <a>
              <NavLink to="/" end>Home</NavLink>
            </a>
            <a>
              <NavLink to="/portfolio" end>Portfolio</NavLink>
            </a>
          </div>
          <div className="absolute flex flex-wrap items-center justify-end right-1/25 top-1/3 space-x-5 md:space-x-15 lg:space-x-15 xl:space-x-20">
            <a target="_blank" rel="noopener" href="https://github.com/Jesse193">
              <img className="h-15 lg:h-20 xl:h-25 object-center rounded-full" src="images/github-mark-white.png" alt="Github" />
            </a>
            <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/jesse-sorman/">
              <img className="h-15 lg:h-20 xl:h-25" src="images/LI-In-Bug.png" alt="Linkedin" />
            </a>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
export default Layout