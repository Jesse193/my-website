import { useState } from 'react'
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import './App.css'

export default function App() {
  return (
    <>
      <section className="bg-gray-900 text-white mt-10 mb-0 min-h-screen">
        <div>
          <p className="w-150 text-6xl font-extrabold pl-3 mt-0 mb-10 pt-10 text-center justify-center place-self-center">
            Welcome to My Website
          </p>
          <p className="w-150 text-5xl font-extrabold pl-8 mt-8 mb-10">
            My name is Jesse
          </p>
        </div>
        <div>
          <p className="text-6xl text-orange-500 font-extrabold pl-8 mt-8 mb-10">
            My Skills:
          </p>
          <p className="text-5xl text-blue-500 font-extrabold pl-15 mt-8 mb-8">
            Languages:
          </p>
          <div className="flex space-x-25 justify-start *:text-4xl *:transition *:delay-100 *:duration-300 *:ease-in-out *:hover:-translate-y-1 *:hover:scale-110 *:w-65 *:h-25 *:mt-8 *:mb-30 pl-15">
            <div className="relative bg-[url(/images/Ruby_logo.svg)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-25 left-0 right-0 text-center flex items-center justify-center mt-12">Ruby</div>
            </div>
            <div className="relative bg-[url(/images/javascript_logo.png)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-25 left-0 right-0 text-center flex items-center justify-center mt-12">Javascript</div>
            </div>
            <div className="relative bg-[url(/images/Sql_logo.png)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-25 left-0 right-0 text-center flex items-center justify-center mt-12">SQL</div>
            </div>
            <div className="relative bg-[url(/images/Logo_C_sharp.png)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-25 left-0 right-0 text-center flex items-center justify-center mt-12">C#</div>
            </div>
            <div className="relative bg-[url(/images/NET_Core_Logo.png)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-25 left-0 right-0 text-center flex items-center justify-center mt-12">ASP.Net</div>
            </div>
          </div>
          <p className="text-5xl text-blue-500 font-extrabold pl-15 mt-8">
            Frameworks & Libraries:
          </p>
          <div className="flex flex-wrap space-x-25 justify-start *:text-4xl *:transition *:delay-100 *:duration-300 *:ease-in-out *:hover:-translate-y-1 *:hover:scale-110 *:w-65 *:h-25 *:mt-8 *:mb-30 pl-15">
            <div className="relative bg-[url(/images/Ruby_On_Rails_Logo.svg.png)] bg-cover bg-center text-center">
              <div className="absolute bottom-0 top-25 left-0 right-0 text-center flex items-center justify-center mt-12">Ruby on Rails</div>
            </div>
            <div className="text-center flex items-center justify-center">ActiveRecord</div>
            <div className="text-center flex items-center justify-center">RSpec</div>
            <div className="relative bg-[url(/images/React-icon.svg.png)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-25 left-0 right-0 text-center flex items-center justify-center mt-12">React</div>
            </div>
          </div>
          <p className="h-15 text-5xl text-blue-500 font-extrabold pl-15 mt-8">
            Tools & Practices: 
          </p>
          <p className="text-green-500 absolute animate-bounce text-base  font-extrabold mb-35 text-center flex items-center justify-center pl-15 mb-15">
            Scroll to see more →
          </p>
          <div className="snap-x justify-start grid grid-flow-col-dense gap-25 *:text-4xl *:transition *:delay-100 *:duration-300 *:ease-in-out *:hover:-translate-y-1 *:hover:scale-110 *:snap-start overflow-x-auto *:scroll-ml-10 *:mt-8 *:mb-30 *:h-25 *:w-65 pl-15">
            <div className="text-center flex items-center justify-center">Test-Driven Development</div>
            <div className="text-center flex items-center justify-center">RESTful APIs</div>
            <div className="text-center flex items-center justify-center">Authentication & Authorization</div>
            <div className="relative bg-[url(/images/Git-Logo.svg)] bg-size-[auto_90px] bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-25 left-0 right-0 text-center flex items-center justify-center mt-12">Git</div>
            </div>
            <div className="relative bg-[url(/images/github-mark-white.png)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-25 left-0 right-0 text-center flex items-center justify-center mt-12">GitHub</div>
            </div>
            <div className="text-center flex items-center justify-center">Postman</div>
            <div className="text-center flex items-center justify-center">Postico</div>
            <div className="text-center flex items-center justify-center">CI/CD</div>
            <div className="relative bg-[url(/images/Render-logomark-White.svg)] bg-size-[auto_190px] bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-25 left-0 right-0 text-center flex items-center justify-center mt-12">Render</div>
            </div>
            <div className="relative bg-[url(/images/Heroku-Logo-Dark-RGB.svg)] bg-cover bg-no-repeat bg-center text-center"></div>
            <div className="text-center flex items-center justify-center">AWS - Elastic Beanstalk</div>
            <div className="text-center flex items-center justify-center">AWS - EC2</div>
            <div className="text-center flex items-center justify-center">AWS - RDS</div>
          </div>
          <p className="h-15 text-2xl font-extrabold text-green-500 text-center justify-center place-self-center pl-15 pb-100 mt-8 w-80 mb-0">I'm not limited to just these skills. I'm always looking to learn!</p>
        </div>
      </section>
    </>
  )
}
