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
            <p className="text-[clamp(1rem,1.5vw,2rem)] indent-8 place-self-center text-wrap w-[calc(70%+1vw)] pt-[calc(2%+1vh)]">
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
          <p className="hidden sm:max-2xl:block 2xl:block text-[clamp(2.5rem,2vw,3rem)] text-orange-500 font-extrabold ml-[3vw]">
            My Skills:
          </p>
          <p className="sm:hidden text-[clamp(3rem,2vw,4rem)] text-orange-500 font-extrabold max-sm:text-center place-self-center w-3/4 pt-20 mt-8 mb-8">
            My Skills
          </p>
          <p className="hidden sm:max-2xl:block 2xl:block text-[clamp(2rem,2vw,3rem)] text-blue-500 font-extrabold ml-[5vw]">
            Languages:
          </p>
          <p className="sm:hidden text-[clamp(3rem,2vw,4rem)] text-blue-500 font-extrabold max-sm:text-center md:pl-15 pt-20 mt-8 mb-8">
            Languages
          </p>
            
          <div className="place-items-center justify-items-center *:*:place-self-center sm:max-2xl:caraousel sm:max-2xl:w-full snap-x snap-mandatory overflow-hidden grid grid-flow-col-dense grid-cols-auto grid-rows-1 gap-x-1 md:min-lg:grid-flow-row-dense md:grid-cols-4 md:grid-rows-1 *:text-4xl lg:*:*:text-5xl 2xl:*:*:text-7xl *:w-screen mt-20 pt-30 lg:pt-40 pb-20 2xl:pb-30 lg:mt-20">
            <div id="language1" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <img src="images/Ruby_logo.svg" className="absolute bottom-1/1 w-auto h-[8vw]"></img>
                <p className='absolute text-center top-1/1 mt-5'>Ruby</p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('language4')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('language2')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
            <div id="language2" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <img src="images/javascript_logo.png" className="absolute bottom-1/1 w-auto h-[100px] lg:h-[120px] xl:h-[130px] 2xl:h-[160px]"></img>
                <p className='absolute text-center top-1/1 mt-5'>Javascript</p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('language1')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('language3')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
            <div id="language3" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <img src="images/Sql_logo.png" className="absolute bottom-1/1 w-auto h-[100px] lg:h-[120px] xl:h-[130px] 2xl:h-[160px]"></img>
                <p className='absolute text-center top-1/1 mt-5'>SQL</p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('language2')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('language4')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
            <div id="language4" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <img src="images/Logo_C_sharp.png" className="absolute bottom-1/1 w-auto h-[100px] lg:h-[120px] xl:h-[130px] 2xl:h-[160px]"></img>
                <p className='absolute text-center top-1/1 mt-5'>C#</p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('language3')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('language1')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
          </div>
        
          <p className="hidden sm:max-2xl:block 2xl:block text-[clamp(2rem,2vw,3rem)] text-blue-500 font-extrabold ml-[5vw]">
            Frameworks & Libraries:
          </p>
          <p className="sm:hidden text-[clamp(3rem,2vw,4rem)] text-blue-500 font-extrabold max-sm:text-center w-3/4 place-self-center mt-20 mb-8">
            Frameworks & Libraries
          </p>
          <div className="place-items-center justify-items-center *:*:place-self-center sm:max-2xl:caraousel sm:max-2xl:w-full snap-x snap-mandatory overflow-hidden grid grid-flow-col-dense grid-cols-auto grid-rows-1 gap-x-1 md:gap-y-20 lg:gap-y-40 2xl:gap-y-60 md:min-lg:grid-flow-row-dense md:grid-cols-3 md:grid-rows-2 md: *:text-4xl lg:*:*:text-5xl 2xl:*:*:text-7xl *:w-screen mt-10 pb-10 2xl:pb-30 pt-10 lg:mt-20 *:mt-20">
            <div id="framework1" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <img src="images/Ruby_On_Rails_Logo.svg.png" className="absolute bottom-1/1 w-auto h-[80px] lg:h-[100px] xl:h-[120px] 2xl:h-[160px]"></img>
                <p className='absolute text-center top-1/1 mt-5'>Ruby on Rails</p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('framework5')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('framework2')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
            <div id="framework2" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <p className='text-center'>
                  Active Record
                </p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('framework1')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('framework3')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
            <div id="framework3" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <p className='text-center'>
                  RSpec
                </p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('framework2')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('framework4')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
            <div id="framework4" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <img src="images/React-icon.svg.png" className="absolute bottom-1/1 w-auto h-[80px] lg:h-[120px] xl:h-[130px] 2xl:h-[160px]"></img>
                <p className='absolute text-center top-1/1 mt-5'>React</p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('framework3')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('framework5')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
            <div id="framework5" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <img src="images/NET_Core_Logo.png" className="absolute bottom-1/1 w-auto h-[100px] lg:h-[120px] xl:h-[130px] 2xl:h-[160px]"></img>
                <p className='absolute text-center top-1/1 mt-5'>ASP.NET</p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('framework4')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('framework1')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>  
            </div>
          </div>

          <p className="hidden sm:max-2xl:block 2xl:block text-[clamp(2rem,2vw,3rem)] text-blue-500 font-extrabold ml-[5vw]">
            Tools & Practices:
          </p>
          <p className="sm:hidden text-[clamp(3rem,2vw,4rem)] text-blue-500 font-extrabold max-sm:text-center md:pl-15 mt-20">
            Tools and Practices
          </p>
          <div className="place-items-center justify-items-center *:*:place-self-center sm:max-2xl:caraousel sm:max-2xl:w-full snap-x snap-mandatory overflow-hidden grid grid-flow-col-dense grid-cols-auto grid-rows-1 gap-x-1 md:gap-x-2 md:gap-y-5 lg:gap-y-30 2xl:gap-y-80 md:grid-flow-row-dense md:grid-cols-3 md:grid-rows-6 *:text-4xl lg:*:*:text-5xl 2xl:*:*:text-7xl w-full *:w-screen mt-10 lg:mt-20 *:mt-20">
            <div id="tool1" className="relative sm:max-2xl:carousel-item">
              <div className="relative place-self-center flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                  <p className='text-center'>Test-Driven Development</p>
                  <div id="carouselcontrols">
                    <button onClick={() => scrollToId('tool13')} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId('tool2')} className="btn btn-circle">&#8250;</button>
                  </div>
              </div>
            </div>
            <div id="tool2" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <p className='text-center'>
                  RESTful APIs
                </p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('tool1')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('tool3')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
            <div id="tool3" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <p className='text-center'>
                  Authentication & Authorization
                </p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('tool2')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('tool4')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
            <div id="tool4" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <img src="images/Git-Logo.svg" className="absolute bottom-1/1 w-auto h-[80px] lg:h-[100px] xl:h-[120px] 2xl:h-[160px]"></img>
                <p className='absolute text-center top-1/1 mt-5'>Git</p>
                <div id="carouselcontrols" className='absolute'>
                  <button onClick={() => scrollToId('tool3')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('tool5')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
            <div id="tool5" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <img src="images/github-mark-white.png" className="absolute bottom-1/1 w-auto h-[100px] lg:h-[120px] xl:h-[130px] 2xl:h-[160px]"></img>
                <p className='absolute text-center top-1/1 mt-5'>GitHub</p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('tool4')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('tool6')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
            <div id="tool6" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <p className='text-center'>
                  Postman
                </p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('tool5')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('tool7')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
              <div className="absolute bottom-0 text-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">Postman</div>
            </div>
            <div id="tool7" className="relative sm:max-2xl:carousel-item"> 
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <p className='text-center'>
                  Postico
                </p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('tool6')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('tool8')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
            <div id="tool8" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <p className='text-center'>
                  CI/CD
                </p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('tool7')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('tool9')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
            <div id="tool9" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <p className='absolute text-center top-1/1'>Render</p>
                <img src="images/Render-logomark-White.svg" className="absolute bottom-1/1 w-auto h-[150px] lg:h-[170px] xl:h-[190px] 2xl:h-[220px]"></img>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('tool8')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('tool10')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
            <div id="tool10" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <img src="images/Heroku-Logo-Dark-RGB.svg" className="absolute bottom-1/1 w-auto h-[120px] lg:h-[160px] xl:h-[180px] 2xl:h-[210px]"></img>
                <p className='absolute text-center top-1/1'>Heroku</p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('tool9')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('tool11')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
            <div id="tool11" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <p className='text-center'>
                  AWS - Elastic Beanstalk
                </p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('tool10')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('tool12')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
            <div id="tool12" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <p className='text-center'>
                  AWS - EC2
                </p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('tool11')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('tool13')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
            <div id="tool13" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                  <p className='text-center'>
                    AWS - RDS
                  </p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('tool12')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('tool1')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
          </div>
          <p className="h-15 mt-32 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-extrabold text-green-500 text-center justify-center place-self-center sm:max-2xl:pl-15 pb-100 mt-8 w-80 md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4 mb-0">I'm not limited to just these skills. I'm always looking to learn!</p>
        </div>
      </section>
    </>
  )
}
