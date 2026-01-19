import { useState } from 'react'
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import './App.css'
import { scrollToId } from './utils/scrollHelper';
export default function App() {
  
  return (
    <>
      <section className="bg-gray-900 text-white bg-center mt-10 mb-0 w-screen min-h-screen">
        <div className="bg-gray-700 rounded-b-2xl md:rounded-b-4xl w-screen h-250 sm:max-2xl:h-150 md:h-full lg:h-full bg-center content-center">
          <p className="w-3/4 text-4xl sm:text-6xl xl:text-7xl 2xl:text-8xl text-blue-500 font-extrabold md:pl-3 mt-0 mb-10 pt-10 text-center place-self-center">
            Welcome to My Website
          </p>
          <article className="md:text-wrap w-screen md:w-screen lg:max-2xl:w-screen lg:max-2xl:*:pl-15 *:mb-10">
            <p className="text-2xl md:text-3xl/12 xl:text-4xl 2xl:text-6xl font-extrabold mt-15 lg:max-md:text-center place-self-center md:w-3/5 lg:w-3/5 xl:max-2xl:w-3/4">
              I'm Jesse and I'm a Software Engineer
            </p>
            <p className="text-lg/8 md:text-3xl/15 lg:text-2xl/12 xl:text-4xl/15 2xl:text-5xl/25 indent-8 h-180 w-9/10 md:w-1/8 md:w-8/9 md:h-full place-self-center text-wrap">
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
          <p className="hidden sm:max-2xl:block 2xl:block text-4xl 2xl:text-8xl md:text-6xl text-orange-500 font-extrabold sm:max-2xl:pl-8 2xl:pl-30 sm:max-2xl:mt-15 mt-20 mb-10">
            My Skills:
          </p>
          <p className="sm:max-2xl:hidden 2xl:hidden text-4xl md:text-5xl text-orange-500 font-extrabold max-sm:text-center place-self-center w-3/4 pt-20 mt-8 mb-8">
            My Skills
          </p>
          <p className="hidden sm:max-2xl:block 2xl:block text-3xl 2xl:text-7xl md:text-5xl text-blue-500 font-extrabold max-sm:text-center md:pl-15 sm:max-2xl:pt-20 2xl:pt-30 mt-8 mb-8">
            Languages:
          </p>
          <p className="sm:max-2xl:hidden 2xl:hidden text-4xl md:text-5xl text-blue-500 font-extrabold max-sm:text-center md:pl-15 pt-20 mt-8 mb-8">
            Languages
          </p>
            
          <div className="sm:max-2xl:caraousel sm:max-2xl:w-full snap-x snap-mandatory overflow-hidden grid grid-flow-col-dense md:grid-flow-row-dense md:grid-cols-4 grid-cols-auto grid-rows-1 md:grid-rows-1 gap-x-1 justify-items-center *:text-4xl *:transition *:delay-100 *:duration-300 *:ease-in-out *:hover:-translate-y-1 *:hover:scale-110 *:h-30 2xl:*:h-100 *:w-md md:*:w-65 md:*:h-25 *:mt-8 h-55 2xl:h-full">
            <div id="language1" className="sm:max-2xl:carousel-item sm:max-2xl:w-full relative bg-[url(/images/Ruby_logo.svg)] 2xl:bg-size-[150px] bg-contain bg-no-repeat bg-center text-center snap-center">
              <div className="absolute bottom-0 top-40 2xl:top-60 left-0 right-0 text-center flex items-center justify-center 2xl:text-5xl">Ruby</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('language4')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('language2')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="language2" className="sm:max-2xl:carousel-item sm:max-2xl:w-full relative bg-[url(/images/javascript_logo.png)] 2xl:bg-size-[150px] bg-contain bg-no-repeat bg-center text-center snap-center">
              <div className="absolute bottom-0 top-40 2xl:top-60 left-0 right-0 text-center flex items-center justify-center 2xl:text-5xl">Javascript</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('language1')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('language3')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="language3" className="sm:max-2xl:carousel-item sm:max-2xl:w-full relative bg-[url(/images/Sql_logo.png)] 2xl:bg-size-[250px] bg-size-[160px] sm:max-2xl:bg-contain bg-no-repeat bg-center text-center snap-center">
              <div className="absolute bottom-0 top-40 2xl:top-60 left-0 right-0 text-center flex items-center justify-center 2xl:text-5xl">SQL</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('language2')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('language4')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="language4" className="sm:max-2xl:carousel-item sm:max-2xl:w-full relative bg-[url(/images/Logo_C_sharp.png)] 2xl:bg-size-[150px] bg-contain bg-no-repeat bg-center text-center snap-center">
              <div className="absolute bottom-0 top-40 2xl:top-60 left-0 right-0 text-center flex items-center justify-center 2xl:text-5xl">C#</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('language3')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('language1')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
          </div>
        
          <p className="hidden sm:max-2xl:block 2xl:block text-3xl 2xl:text-7xl md:text-5xl text-blue-500 font-extrabold max-sm:text-center md:pl-15 mt-8 pt-15 mb-8">
            Frameworks & Libraries:
          </p>
          <p className="sm:max-2xl:hidden 2xl:hidden text-4xl md:text-5xl text-blue-500 font-extrabold max-sm:text-center w-3/4 place-self-center pt-20 mt-8 mb-8">
            Frameworks & Libraries
          </p>
          <div className="sm:max-2xl:caraousel sm:max-2xl:w-full snap-x snap-mandatory overflow-hidden grid grid-flow-col-dense md:grid-flow-row-dense md:grid-cols-3 grid-cols-auto grid-rows-1 md:grid-rows-2 md:gap-x-1 md:gap-y-1 md:h-150 gap-x-1 justify-items-center *:text-4xl *:transition *:delay-100 *:duration-300 *:ease-in-out *:hover:-translate-y-1 *:hover:scale-110 *:h-30 2xl:*:h-100 *:w-md md:*:w-65 2xl:*:w-80 h-60 2xl:h-full">
            <div id="framework1" className="sm:max-2xl:carousel-item sm:max-2xl:w-full relative bg-[url(/images/Ruby_On_Rails_Logo.svg.png)] bg-size-[160px] 2xl:bg-size-[300px] md:bg-size-[160px] lg:max-2xl:bg-contain bg-no-repeat bg-center text-center snap-center">
              <div className="absolute bottom-0 md:top-30 2xl:top-70 left-0 right-0 2xl:text-5xl">Ruby on Rails</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12  *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('framework5')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('framework2')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="framework2" className="sm:max-2xl:carousel-item sm:max-2xl:w-full relative snap-center">
              <div className="absolute bottom-0 top-0 left-0 right-0 w-1/4 md:w-full 2xl:text-5xl text-center place-self-center">Active Record</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12  *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('framework1')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('framework3')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="framework3" className="sm:max-2xl:carousel-item sm:max-2xl:w-full relative text-center snap-center">
              <div className="absolute bottom-0 top-0  left-0 right-0 place-self-center text-center 2xl:text-5xl">RSpec</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12  *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('framework2')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('framework4')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="framework4" className="sm:max-2xl:carousel-item sm:max-2xl:w-full relative bg-[url(/images/React-icon.svg.png)] bg-size-[160px] md:bg-size-[100px] lg:max-2xl:bg-contain bg-no-repeat bg-center text-center snap-center">
              <div className="absolute bottom-0 top-40 2xl:top-70 left-0 right-0 2xl:text-5xl">React</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12  *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('framework3')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('framework5')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            
            <div id="framework5" className="sm:max-2xl:carousel-item sm:max-2xl:w-full relative bg-[url(/images/NET_Core_Logo.png)] bg-size-[160px] md:bg-size-[100px] lg:max-2xl:bg-contain bg-no-repeat bg-center text-center snap-center">
              <div className="absolute bottom-0 top-40 2xl:top-70 left-0 right-0 text-center 2xl:text-5xl">ASP.Net</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12  *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('framework4')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('framework1')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
          </div>

          <p className="hidden sm:max-2xl:block 2xl:block text-3xl 2xl:text-7xl md:text-5xl text-blue-500 font-extrabold max-sm:text-center md:pl-15 pt-15 mt-8 mb-8">
            Tools & Practices:
          </p>
          <p className="sm:max-2xl:hidden 2xl:hidden text-4xl md:text-5xl text-blue-500 font-extrabold max-sm:text-center md:pl-15 pt-20 mt-8 mb-8">
            Tools and Practices
          </p>
          <div className="sm:max-2xl:caraousel sm:max-2xl:w-full snap-x snap-mandatory overflow-hidden grid grid-flow-col-dense md:grid-flow-row-dense md:grid-cols-3 grid-cols-auto grid-rows-1 md:grid-rows-4 md:gap-y-50 gap-x-1 justify-items-center *:text-4xl *:transition *:delay-100 *:duration-300 *:ease-in-out *:hover:-translate-y-1 *:hover:scale-110 *:h-30 md:*:h-40 2xl:*:h-100 *:w-md md:*:w-65 2xl:*:w-80 h-60 md:h-full 2xl:h-full">
            <div id="tool1" className="sm:max-2xl:carousel-item sm:max-2xl:w-full relative snap-center">
              <div className="absolute bottom-0 top-0 sm:max-2xl:top-1/2 left-0 right-0 w-50 text-wrap text-center place-self-center 2xl:text-5xl 2xl:w-full">Test-Driven Development</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-8 right-8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('tool13')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('tool2')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="tool2" className="sm:max-2xl:carousel-item sm:max-2xl:w-full relative snap-center">
              <div className="absolute bottom-0 top-0 sm:max-2xl:top-1/2 left-0 right-0 w-1/4 text-center place-self-center 2xl:text-5xl">RESTful APIs</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-15 right-15 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('tool1')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('tool3')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="tool3" className="sm:max-2xl:carousel-item sm:max-2xl:w-full relative snap-center">
              <div className="absolute bottom-0 top-0 sm:max-2xl:top-1/2 left-0 right-0 w-1/2 md:w-full text-center place-self-center 2xl:text-5xl">Authentication & Authorization</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('tool2')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('tool4')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="tool4" className="relative bg-[url(/images/Git-Logo.svg)] bg-size-[150px] sm:max-2xl:bg-contain bg-no-repeat bg-center text-center snap-center">
              <div className="absolute bottom-0 xl:max-2xl:top-50 2xl:top-3/4 lg:top-50 top-40 left-0 right-0 text-center 2xl:text-5xl">Git</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-8 right-8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('tool3')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('tool5')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="tool5" className="relative bg-[url(/images/github-mark-white.png)] bg-size-[100px] lg:bg-size-[150px] 2xl:max-2xl:bg-contain bg-no-repeat bg-center text-center snap-center">
              <div className="absolute bottom-0 xl:max-2xl:top-50 lg:top-50 top-40 2xl:top-3/4 left-0 right-0 text-center 2xl:text-5xl">GitHub</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('tool4')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('tool6')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="tool6" className="sm:max-2xl:carousel-item sm:max-2xl:w-full relative snap-center">
              <div className="absolute bottom-0 top-0 sm:max-2xl:top-1/2 left-0 right-0 place-self-center text-center 2xl:text-5xl">Postman</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('tool5')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('tool7')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="tool7" className="sm:max-2xl:carousel-item sm:max-2xl:w-full relative snap-center">
              <div className="absolute bottom-0 top-0 sm:max-2xl:top-1/2 left-0 right-0 place-self-center text-center 2xl:text-5xl">Postico</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('tool6')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('tool8')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="tool8" className="sm:max-2xl:carousel-item sm:max-2xl:w-full relative snap-center">
              <div className="absolute bottom-0 top-0 sm:max-2xl:top-1/2 left-0 right-0 place-self-center text-center 2xl:text-5xl">CI/CD</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('tool7')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('tool9')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="tool9" className="relative bg-[url(/images/Render-logomark-White.svg)] bg-contain bg-no-repeat bg-center text-center snap-center">
              <div className="absolute bottom-0 xl:max-2xl:top-50 lg:top-50 top-40 2xl:top-3/4 left-0 right-0 text-center 2xl:text-5xl">Render</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('tool8')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('tool10')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="tool10" className="relative bg-[url(/images/Heroku-Logo-Dark-RGB.svg)] bg-size-[180px] sm:max-2xl:bg-contain bg-no-repeat bg-center text-center snap-center">
              <div className="absolute bottom-0 xl:max-2xl:top-50 lg:top-50 top-40 2xl:top-3/4 left-0 right-0 text-center 2xl:text-5xl">Heroku</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('tool9')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('tool11')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="tool11" className="sm:max-2xl:carousel-item sm:max-2xl:w-full relative snap-center">
              <div className="absolute bottom-0 top-0 sm:max-2xl:top-1/2 left-0 right-0 place-self-center text-center w-1/2 2xl:w-full 2xl:text-5xl">AWS - Elastic Beanstalk</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('tool10')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('tool12')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="tool12" className="sm:max-2xl:carousel-item sm:max-2xl:w-full relative  snap-center">
              <div className="absolute bottom-0 top-0 sm:max-2xl:top-1/2 left-0 right-0 place-self-center text-center w-1/2 md:w-full 2xl:text-5xl">AWS - EC2</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('tool11')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('tool13')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="tool13" className="sm:max-2xl:carousel-item sm:max-2xl:w-full relative snap-center">
              <div className="absolute bottom-0 top-0 sm:max-2xl:top-1/2 left-0 right-0 place-self-center text-center w-1/2 md:w-full 2xl:text-5xl">AWS - RDS</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('tool12')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('tool1')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
          </div>
          <p className="h-15 mt-32 text-2xl 2xl:text-4xl font-extrabold text-green-500 text-center justify-center place-self-center sm:max-2xl:pl-15 pb-100 mt-8 w-80 mb-0">I'm not limited to just these skills. I'm always looking to learn!</p>
        </div>
      </section>
    </>
  )
}
