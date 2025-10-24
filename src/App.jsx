import { useState } from 'react'
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import './App.css'

export default function App() {
  return (
    <>
      <section className="bg-gray-900 text-white mt-10 mb-0 min-h-screen">
        <div className="bg-gray-700 rounded-b-4xl h-180">
          <p className="w-150 text-6xl text-blue-500 font-extrabold pl-3 mt-0 mb-10 pt-10 text-center justify-center place-self-center">
            Welcome to My Website
          </p>
          <article className="text-wrap w-180 *:pl-15 *:mb-10">
            <p className="text-3xl font-extrabold mt-15">
              I'm Jesse and I'm a Software Engineer
            </p>
            <p className="text-lg/8 indent-8">
              I'm a graduate of Turing School of Software & Design from their Back-end software engineering program. 
              I have skills to work with Ruby, Ruby on Rails, ActiveReocrd, SQL, REST APIs, git, Test-Driven Development, AWS, and more. 
              My past experience has built me to be a problem solver, a hard worker, and a team player. 
              What got me into software development was playing video games for as long as I can remember. 
              I've always been interested in the process of how they're developed and what the inner workings are to bring the player the experience they get. 
              I have many hours of collaborative project planning and coding in a group setting. 
              I bring organizational and technical knowledge to the team. I would love to bring my skills and knowledge to your team.
            </p>
          </article>
        </div>
        <div>
          <p className="text-6xl text-orange-500 font-extrabold pl-8 mt-8 mb-10">
            My Skills:
          </p>
          <p className="text-5xl text-blue-500 font-extrabold pl-15 mt-8 mb-8">
            Languages:
          </p>
          <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-1 gap-x-1 justify-items-center *:text-4xl *:transition *:delay-100 *:duration-300 *:ease-in-out *:hover:-translate-y-1 *:hover:scale-110 *:w-65 *:h-25 *:mt-8">
            <div className="relative bg-[url(/images/Ruby_logo.svg)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-35 left-0 right-0 text-center flex items-center justify-center">Ruby</div>
            </div>
            <div className="relative bg-[url(/images/javascript_logo.png)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-35 left-0 right-0 text-center flex items-center justify-center">Javascript</div>
            </div>
            <div className="relative bg-[url(/images/Sql_logo.png)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-35 left-0 right-0 text-center flex items-center justify-center">SQL</div>
            </div>
            <div className="relative bg-[url(/images/Logo_C_sharp.png)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-35 left-0 right-0 text-center flex items-center justify-center">C#</div>
            </div>
          </div>
          <p className="text-5xl text-blue-500 font-extrabold pl-15 mt-32 mb-8">
            Frameworks & Libraries:
          </p>
          <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-2 gap-x-1 gap-y-35 justify-items-center *:text-4xl *:transition *:delay-100 *:duration-300 *:ease-in-out *:hover:-translate-y-1 *:hover:scale-110 *:w-65 *:h-25 *:mt-8">
            <div className="relative bg-[url(/images/Ruby_On_Rails_Logo.svg.png)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-30 left-0 right-0 text-center">Ruby on Rails</div>
            </div>
            <div className="text-center flex items-center justify-center">ActiveRecord</div>
            <div className="text-center flex items-center justify-center">RSpec</div>
            <div className="relative bg-[url(/images/React-icon.svg.png)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-30 left-0 right-0 text-center">React</div>
            </div>
            <div className="relative bg-[url(/images/NET_Core_Logo.png)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-30 left-0 right-0 text-center">ASP.Net</div>
            </div>
          </div>
          <p className="h-15 text-5xl text-blue-500 font-extrabold pl-15 mt-32">
            Tools & Practices: 
          </p>
          <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-5 gap-x-1 gap-y-35 justify-items-center *:text-4xl *:transition *:delay-100 *:duration-300 *:ease-in-out *:hover:-translate-y-1 *:hover:scale-110 *:h-25 *:w-65 *:mt-8">
            <div className="text-center flex items-center justify-center">Test-Driven Development</div>
            <div className="text-center flex items-center justify-center">RESTful APIs</div>
            <div className="col-start-3 row-start-1 text-center items-center justify-center">Authentication & Authorization</div>
            <div className="relative bg-[url(/images/Git-Logo.svg)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-30 left-0 right-0 text-center">Git</div>
            </div>
            <div className="relative bg-[url(/images/github-mark-white.png)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-30 left-0 right-0 text-center">GitHub</div>
            </div>
            <div className="text-center items-center justify-center">Postman</div>
            <div className="text-center items-center justify-center">Postico</div>
            <div className="text-center items-center justify-center">CI/CD</div>
            <div className="relative bg-[url(/images/Render-logomark-White.svg)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-30 left-0 right-0 text-center">Render</div>
            </div>
            <div className="relative bg-[url(/images/Heroku-Logo-Dark-RGB.svg)] bg-cover bg-no-repeat bg-center text-center"></div>
            <div className="text-center flex items-center justify-center">AWS - Elastic Beanstalk</div>
            <div className="text-center flex items-center justify-center">AWS - EC2</div>
            <div className="text-center flex items-center justify-center">AWS - RDS</div>
          </div>
          <p className="h-15 mt-32 text-2xl font-extrabold text-green-500 text-center justify-center place-self-center pl-15 pb-100 mt-8 w-80 mb-0">I'm not limited to just these skills. I'm always looking to learn!</p>
        </div>
      </section>
    </>
  )
}
