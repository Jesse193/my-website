import { useState } from 'react'
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import './App.css'
import { scrollToId } from './utils/scrollHelper';
export default function App() {
  
  return (
    <>
      <section className="bg-gray-900 text-white bg-center mt-10 mb-0 w-screen min-h-screen">
        <div className="bg-gray-700 rounded-b-2xl w-screen h-auto bg-center content-center">
          <p className="text-blue-500 font-extrabold text-center place-self-center text-[clamp(2rem,2vw,2rem)]">
            Welcome to My Website
          </p>
          <article className="md:text-wrap w-screen pb-[calc(2%+1vh)]">
            <p className="font-bold text-center place-self-center text-[clamp(1rem,1.5vw,2rem)] pt-[calc(2%+1vh)]">
              I'm Jesse and I'm a Software Engineer
            </p>
            <div className="flex items-center justify-center w-auto pt-[clamp(1rem,2vw,3rem)]">
              <p className="text-[clamp(1rem,2vw,3rem)] indent-8 text-wrap w-8/10 pt-[clamp(1rem,2vw,3rem)]">
                I'm a graduate of Turing School of Software & Design from their Back-end software engineering program.
                I have skills to work with Ruby, Ruby on Rails, ActiveReocrd, SQL, REST APIs, git, Test-Driven Development, AWS, and more. 
                My past experience has built me to be a problem solver, a hard worker, and a team player. 
                What got me into software development was playing video games for as long as I can remember. 
                I've always been interested in the process of how they're developed and what the inner workings are to bring the player the experience they get. 
                I have many hours of collaborative project planning and coding in a group setting. 
                I bring organizational and technical knowledge to the team. I would love to bring my skills and knowledge to your team.
              </p>
            </div>
          </article>
        </div>
        <div>
          
          <p className="hidden md:block 2xl:block text-[clamp(2.5rem,2vw,3rem)] text-orange-500 font-extrabold ml-[3vw]">
            My Skills:
          </p>
          <p className="md:hidden text-[clamp(3rem,2vw,4rem)] text-orange-500 font-extrabold max-sm:text-center place-self-center w-auto">
            My Skills
          </p>
          <div className="h-fit md:h-screen lg:h-100">
            <p className="hidden md:block 2xl:block text-[clamp(2rem,2vw,3rem)] text-blue-500 font-extrabold ml-[5vw]">
              Languages:
            </p>
            <p className="md:hidden text-[clamp(3rem,2vw,4rem)] text-blue-500 font-extrabold max-sm:text-center pt-[clamp(15vh,15vh,20vh)]">
              Languages
            </p>
              
            <div className="place-items-center justify-items-center *:*:place-self-center caraousel snap-x snap-mandatory overflow-hidden grid grid-flow-col-dense grid-cols-auto grid-rows-1 gap-x-1 md:min-lg:grid-flow-row-dense md:grid-cols-4 md:grid-rows-1 *:text-[clamp(2rem,2vw,4rem)] *:w-screen h-svw md:h-screen lg:h-full">
              <div id="language1" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <img src="images/Ruby_logo.svg" className="absolute bottom-1/1 w-auto h-[clamp(100px,20%,200px)]"></img>
                  <p className="absolute text-center top-1/1 mt-5">Ruby</p>
                  <div id="carouselcontrols">
                    <button onClick={() => scrollToId("language4")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("language2")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="language2" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <img src="images/javascript_logo.png" className="absolute bottom-1/1 w-auto h-[clamp(100px,20%,200px)]"></img>
                  <p className="absolute text-center top-1/1 mt-5">Javascript</p>
                  <div id="carouselcontrols">
                    <button onClick={() => scrollToId("language1")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("language3")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="language3" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <img src="images/Sql_logo.png" className="absolute bottom-1/1 w-auto h-[clamp(100px,20%,200px)]"></img>
                  <p className="absolute text-center top-1/1 mt-5">SQL</p>
                  <div id="carouselcontrols">
                    <button onClick={() => scrollToId("language2")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("language4")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="language4" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <img src="images/Logo_C_sharp.png" className="absolute bottom-1/1 w-auto h-[clamp(100px,20%,200px)]"></img>
                  <p className="absolute text-center top-1/1 mt-5">C#</p>
                  <div id="carouselcontrols">
                    <button onClick={() => scrollToId("language3")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("language1")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div className="h-fit md:h-fit 2xl:h-150">
            <p className="hidden md:block text-[clamp(2rem,2vw,3rem)] text-blue-500 font-extrabold ml-[5vw]">
              Frameworks & Libraries:
            </p>
            <p className="md:hidden text-[clamp(3rem,2vw,4rem)] text-blue-500 font-extrabold max-sm:text-center w-auto place-self-center">
              Frameworks & Libraries
            </p>
            <div className="place-items-center justify-items-center *:*:place-self-center caraousel snap-x snap-mandatory overflow-hidden grid grid-flow-col-dense grid-cols-auto grid-rows-1 gap-x-1 md:min-lg:grid-flow-row-dense md:grid-cols-3 md:grid-rows-2 2xl:grid-cols-5 2xl:grid-rows-1 *:text-[clamp(2rem,2vw,4rem)] *:w-screen h-svw md:h-screen 2xl:h-full">
              <div id="framework1" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <img src="images/Ruby_On_Rails_Logo.svg.png" className="absolute bottom-1/1 w-auto h-[clamp(80px,20%,200px)]"></img>
                  <p className="absolute text-center top-1/1 mt-5">Ruby on Rails</p>
                  <div id="carouselcontrols">
                    <button onClick={() => scrollToId("framework5")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("framework2")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="framework2" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <p className="absolute text-center">Active Record</p>
                  <div id="carouselcontrols">
                    <button onClick={() => scrollToId("framework1")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("framework3")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="framework3" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <p className="absolute text-center">RSpec</p>
                  <div id="carouselcontrols">
                    <button onClick={() => scrollToId("framework2")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("framework4")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="framework4" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <img src="images/React-icon.svg.png" className="absolute bottom-1/1 w-auto h-[clamp(100px,20%,200px)]"></img>
                  <p className="absolute text-center top-1/1 mt-5">React</p>
                  <div id="carouselcontrols">
                    <button onClick={() => scrollToId("framework3")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("framework5")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="framework5" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <img src="images/NET_Core_Logo.png" className="absolute bottom-1/1 w-auto h-[clamp(100px,20%,200px)]"></img>
                  <p className="absolute text-center top-1/1 mt-5">ASP.NET</p>
                  <div id="carouselcontrols">
                    <button onClick={() => scrollToId("framework4")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("framework1")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>  
              </div>
            </div>
          </div>
          <div className="h-fit md:h-400">
            <p className="hidden md:block 2xl:block text-[clamp(2rem,2vw,3rem)] text-blue-500 font-extrabold ml-[5vw]">
              Tools & Practices:
            </p>
            <p className="md:hidden text-[clamp(3rem,2vw,4rem)] text-blue-500 font-extrabold text-wrap max-sm:text-center w-auto">
              Tools & Practices
            </p>
            <div className="place-items-center justify-items-center *:*:place-self-center caraousel snap-x snap-mandatory overflow-hidden grid grid-flow-col-dense grid-cols-auto grid-rows-1 gap-x-1 md:grid-flow-row md:grid-cols-3 md:grid-rows-5 *:text-[clamp(2rem,2vw,4rem)] *:w-screen h-svw md:h-full">
              <div id="tool1" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <p className="absolute text-center">Test-Driven<br></br>Development</p>
                  <div id="carouselcontrols">
                    <button onClick={() => scrollToId("tool13")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("tool2")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="tool2" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <p className="absolute text-center">RESTful APIs</p>
                  <div id="carouselcontrols">
                    <button onClick={() => scrollToId("tool1")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("tool3")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="tool3" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <p className="absolute text-center">Authentication <br></br>&<br></br> Authorization</p>
                  <div id="carouselcontrols">
                    <button onClick={() => scrollToId("tool2")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("tool4")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="tool4" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <img src="images/Git-Logo.svg" className="absolute bottom-1/1 w-auto h-[clamp(80px,20%,200px)]"></img>
                  <p className="absolute text-center top-1/1 mt-5">Git</p>
                  <div id="carouselcontrols" className="absolute">
                    <button onClick={() => scrollToId("tool3")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("tool5")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="tool5" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <img src="images/github-mark-white.png" className="absolute bottom-1/1 w-auto h-[clamp(100px,20%,200px)]"></img>
                  <p className="absolute text-center top-1/1 mt-5">GitHub</p>
                  <div id="carouselcontrols">
                    <button onClick={() => scrollToId("tool4")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("tool6")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="tool6" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <p className="absolute text-center">Postman</p>
                  <div id="carouselcontrols">
                    <button onClick={() => scrollToId("tool5")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("tool7")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="tool7" className="relative carousel-item"> 
                <div className="flex items-center justify-center w-auto">
                  <p className="absolute text-center">Postico</p>
                  <div id="carouselcontrols">
                    <button onClick={() => scrollToId("tool6")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("tool8")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="tool8" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <p className="absolute text-center">CI/CD</p>
                  <div id="carouselcontrols">
                    <button onClick={() => scrollToId("tool7")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("tool9")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="tool9" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <p className="absolute text-center top-1/1">Render</p>
                  <img src="images/Render-logomark-White.svg" className="absolute bottom-1/1 w-auto h-[clamp(100px,20%,200px)]"></img>
                  <div id="carouselcontrols">
                    <button onClick={() => scrollToId("tool8")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("tool10")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="tool10" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <img src="images/Heroku-Logo-Dark-RGB.svg" className="absolute bottom-1/1 w-auto h-[clamp(100px,20%,200px)]"></img>
                  <p className="absolute text-center top-1/1">Heroku</p>
                  <div id="carouselcontrols">
                    <button onClick={() => scrollToId("tool9")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("tool11")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="tool11" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <p className="absolute text-center">AWS - <br></br>Elastic Beanstalk</p>
                  <div id="carouselcontrols">
                    <button onClick={() => scrollToId("tool10")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("tool12")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="tool12" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <p className="absolute text-center">AWS - EC2</p>
                  <div id="carouselcontrols">
                    <button onClick={() => scrollToId("tool11")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("tool13")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="tool13" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                    <p className="absolute text-center">AWS - RDS</p>
                  <div id="carouselcontrols">
                    <button onClick={() => scrollToId("tool12")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("tool1")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <p className="h-15 mt-32 *:text-[clamp(2rem,2vw,4rem)] font-extrabold text-green-500 text-center justify-center place-self-center w-auto pb-[clamp(10vh,15vh,20vh)]">I'm not limited to just these skills. <br></br>I'm always looking to learn!</p>
        </div>
      </section>
    </>
  )
}
