import { useState } from 'react'
import { NavLink, Outlet } from "react-router-dom";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import './App.css'

const Layout = ()=> {
  return (
    <div>
      <header>
        <nav className="bg-gray-800 mb-0 h-10 mt-10 mb-0 w-full inline-flex items-center text-white">
          <ul>
            <li className="space-x-20 ml-20 text-2xl">
              <NavLink to="/" end>Home</NavLink>
              <NavLink to="/portfolio" end>Portfolio</NavLink>
            </li>
          </ul>
          <a className="inline-flex items-center ml-220 mr-10" target="_blank" rel="noopener" href="https://github.com/Jesse193">
            <img className="mx-auto block h-15 rounded-full sm:mx-0 sm:shrink-0" src="images/github-mark-white.png" alt="Github" />
          </a>
          <a className="inline-flex items-center" target="_blank" rel="noopener" href="https://www.linkedin.com/in/jesse-sorman/">
            <img className="block h-15" src="images/LI-In-Bug.png" alt="Linkedin" />
          </a>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
export default Layout