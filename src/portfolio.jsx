import { useState } from 'react'
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import './App.css'
import { scrollToId } from './utils/scrollHelper';

export default function Portfolio() {
  return (
    <>
      <section className="bg-gray-900 max-w-screen text-white mt-10 mb-0 min-h-screen">
          <p className="font-bold text-center place-self-center text-[clamp(3rem,2vw,5rem)] pt-[clamp(4vh,5vh,10vh)]">
            My Projects
          </p>
        <div>
          <p className="font-bold text-[clamp(2.5rem,2vw,4rem)] ml-[3vw]">FoodHaven</p>
          <div className="flex flex-wrap space-x-10 justify-start ml-[3vw]">
            <a className="inline-flex items-center justify-center" target="_blank" rel="noopener" href="https://github.com/orgs/FoodHaven/repositories">
              <img className="w-auto h-[clamp(4rem,3vw,8rem)] rounded-full" src="images/github-mark-white.png" alt="Github" />
            </a>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-[clamp(1rem,1.5vw,4rem)] place-self-center text-center text-wrap w-8/10 pt-[clamp(4vh,8vh,10vh)]">
              FoodHaven is an app that allows users to search for Farmers' markets that accept SNAP and EBT benefits then find directions to them using Google Maps Platform.
            </p>
          </div>
          <div className="h-fit xl:h-300 2xl:min-h-screen">

            <p className="text-[clamp(3rem,2vw,4rem)] text-blue-500 font-extrabold text-center max-sm:text-center place-self-center">
              Tech Stack
            </p>
          
            <div className="place-items-center justify-items-center *:*:place-self-center caraousel sm:max-2xl:w-full snap-x snap-mandatory overflow-hidden grid grid-flow-col-dense grid-cols-auto grid-rows-1 place-content-evenly gap-[clamp(20vh,25vh,30vh)] md:grid-flow-row-dense md:grid-cols-3 md:grid-rows-3 2xl:grid-cols-4 2xl:grid-rows-3 *:*:text-[clamp(2rem,2vw,4rem)] w-full *:w-screen h-svw md:h-svw xl:h-full 2xl:h-full">
              <div id="foodtech1" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <img src="images/Ruby_logo.svg" className="absolute bottom-1/1 w-auto h-[clamp(100px,20%,200px)]"></img>
                  <p className="absolute text-center top-1/1 mt-5">Ruby</p>
                  <div id="carouselcontrols" className="!md:hidden">
                    <button onClick={() => scrollToId("foodtech4")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("foodtech2")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="foodtech2" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <img src="images/Ruby_On_Rails_Logo.svg.png" className="absolute bottom-1/1 w-auto h-[clamp(80px,20%,200px)]"></img>
                  <p className="absolute text-center top-1/1 mt-5">Ruby on Rails</p>
                  <div id="carouselcontrols" className="!md:hidden">
                    <button onClick={() => scrollToId("foodtech1")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("foodtech3")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="foodtech3" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <img src="images/sinatra_logo.png" className="absolute bottom-1/1 w-auto h-[clamp(100px,20%,200px)]"></img>
                  <p className="absolute text-center top-1/1 mt-5">Sinatra</p>
                  <div id="carouselcontrols" className="!md:hidden">
                    <button onClick={() => scrollToId("foodtech2")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("foodtech4")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="foodtech4" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <img src="images/javascript_logo.png" className="absolute bottom-1/1 w-auto h-[clamp(100px,20%,200px)]"></img>
                  <p className="absolute text-center top-1/1 mt-5">Javascript</p>
                  <div id="carouselcontrols" className="!md:hidden">
                    <button onClick={() => scrollToId("foodtech3")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("foodtech5")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="foodtech5" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <img src="images/google_maps_logo.png" className="absolute bottom-1/1 w-auto h-[clamp(100px,20%,200px)]"></img>
                  <p className="absolute text-center top-1/1 mt-5 w-3/4">Google Maps <br></br>Platform</p>
                  <div id="carouselcontrols" className="!md:hidden">
                    <button onClick={() => scrollToId("foodtech4")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("foodtech6")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="foodtech6" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <img src="images/bootstrap-logo.svg" className="absolute bottom-1/1 w-auto h-[clamp(100px,20%,200px)]"></img>
                  <p className="absolute text-center top-1/1 mt-5">Bootstrap</p>
                  <div id="carouselcontrols" className="!md:hidden">
                    <button onClick={() => scrollToId("foodtech5")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("foodtech7")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="foodtech7" className="relative carousel-item">
                <div className="flex items-center justify-center text-wrap w-auto">
                  <p className="absolute text-center">AWS - <br></br>Elastic Beanstalk</p>
                  <div id="carouselcontrols" className="!md:hidden">
                    <button onClick={() => scrollToId("foodtech6")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("foodtech8")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="foodtech8" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <p className="absolute text-center">AWS - EC2</p>
                  <div id="carouselcontrols" className="!md:hidden">
                    <button onClick={() => scrollToId("foodtech7")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("foodtech9")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="foodtech9" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                    <p className="absolute text-center">AWS - RDS</p>
                  <div id="carouselcontrols" className="!md:hidden">
                    <button onClick={() => scrollToId("foodtech8")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("foodtech1")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-fit md:h-fit xl:min-h-screen">
            <div className="place-items-center justify-items-center carousel snap-x snap-mandatory overflow-hidden grid grid-flow-col-dense grid-cols-auto grid-rows-1 gap-x-1 *:text-[clamp(2rem,2vw,4rem)] h-lvh">
              <div id="fooddemo1" className="relative carousel-item w-screen h-screen">
                <div className="flex items-center justify-center h-full">
                  <img src="images/FoodHaven/FoodHaven_home_page.png" className="absolute w-auto h-[clamp(100px,80%,900px)]"></img>
                  <p className="absolute text-center bottom-0">Home Page</p>
                  <div id="carouselcontrols" className="!block !flex !absolute !justify-between !w-[90%]">
                    <button onClick={() => scrollToId("fooddemo1")} className="disabled invisible"></button>
                    <button onClick={() => scrollToId("fooddemo2")} className="btn btn-circle lg:!w-[6vh] lg:!h-[6vh]">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="fooddemo2" className="relative carousel-item w-screen h-screen">
                <div className="flex items-center justify-center h-full">
                  <img src="images/FoodHaven/FoodHaven_Market_search.png" className="absolute w-auto h-[clamp(100px,80%,900px)]"></img>
                  <p className="absolute text-center bottom-0">Market Search</p>
                  <div id="carouselcontrols" className="!block !flex !absolute !justify-between !w-[90%]">
                    <button onClick={() => scrollToId("fooddemo1")} className="btn btn-circle lg:!w-[6vh] lg:!h-[6vh]">&#8249;</button>
                    <button onClick={() => scrollToId("fooddemo3")} className="btn btn-circle lg:!w-[6vh] lg:!h-[6vh]">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="fooddemo3" className="relative carousel-item w-screen h-screen">
                <div className="flex items-center justify-center h-full">
                  <img src="images/FoodHaven/FoodHaven_Market_search_results.png" className="absolute w-auto h-[clamp(100px,80%,900px)]"></img>
                  <p className="absolute text-center bottom-0">Results</p>
                  <div id="carouselcontrols" className="!block !flex !absolute !justify-between !w-[90%]">
                    <button onClick={() => scrollToId("fooddemo2")} className="btn btn-circle lg:!w-[6vh] lg:!h-[6vh]">&#8249;</button>
                    <button onClick={() => scrollToId("fooddemo4")} className="btn btn-circle lg:!w-[6vh] lg:!h-[6vh]">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="fooddemo4" className="relative carousel-item w-screen h-screen">
                <div className="flex items-center justify-center h-full">
                  <img src="images/FoodHaven/FoodHaven_Directions.png" className="absolute w-auto h-[clamp(100px,80%,900px)]"></img>
                  <p className="absolute text-center bottom-0">Directions for chosen market</p>
                  <div id="carouselcontrols" className="!block !flex !absolute !justify-between !w-[90%]">
                    <button onClick={() => scrollToId("fooddemo3")} className="btn btn-circle lg:!w-[6vh] lg:!h-[6vh]">&#8249;</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold text-[clamp(2.5rem,2vw,4rem)] ml-[3vw]">Grateful Together</p>
          <div className="flex flex-wrap space-x-10 justify-start ml-[3vw]">
            <a className="inline-flex items-center justify-center" target="_blank" rel="noopener" href="https://github.com/orgs/GratefulTogether/repositories">
              <img className="w-auto h-[clamp(4rem,3vw,8rem)] rounded-full" src="images/github-mark-white.png" alt="Github" />
            </a>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-[clamp(1rem,1.5vw,4rem)] place-self-center text-center text-wrap w-8/10 pt-[clamp(4vh,8vh,10vh)]">
              Grateful Together is an app that allows users to post into a community jounal for things that they"re grateful for using webhooks and cross origin resource sharing.
            </p>
          </div>
          <div className="h-fit md:h-svh xl:h-svh 2xl:h-svh">
            <p className="text-[clamp(3rem,2vw,4rem)] text-blue-500 font-extrabold text-center max-sm:text-center place-self-center pb-[clamp(6vh,10vh,15vh)]">
              Tech Stack
            </p>
            <div className="place-items-center justify-items-center *:*:place-self-center caraousel sm:max-2xl:w-full snap-x snap-mandatory overflow-hidden grid grid-flow-col-dense grid-cols-auto grid-rows-1 place-content-evenly gap-[clamp(20vh,25vh,30vh)] md:grid-flow-row-dense md:grid-cols-3 md:grid-rows-3 *:*:text-[clamp(2rem,2vw,4rem)] w-full *:w-screen h-svw md:h-svw xl:h-svw 2xl:h-full">
              <div id="grateful1" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <img src="images/Ruby_logo.svg" className="absolute bottom-1/1 w-auto h-[clamp(100px,20%,200px)]"></img>
                  <p className="absolute text-center top-1/1 mt-5">Ruby</p>
                  <div id="carouselcontrols" className="!md:hidden">
                    <button onClick={() => scrollToId("grateful4")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("grateful2")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="grateful2" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <img src="images/Ruby_On_Rails_Logo.svg.png" className="absolute bottom-1/1 w-auto h-[clamp(80px,20%,200px)]"></img>
                  <p className="absolute text-center top-1/1 mt-5">Ruby on Rails</p>
                  <div id="carouselcontrols" className="!md:hidden">
                    <button onClick={() => scrollToId("grateful1")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("grateful3")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
              <div id="grateful3" className="relative carousel-item">
                <div className="flex items-center justify-center w-auto">
                  <img src="images/javascript_logo.png" className="absolute bottom-1/1 w-auto h-[clamp(100px,20%,200px)]"></img>
                  <p className="absolute text-center top-1/1 mt-5">Javascript</p>
                  <div id="carouselcontrols" className="!md:hidden">
                    <button onClick={() => scrollToId("grateful2")} className="btn btn-circle">&#8249;</button>
                    <button onClick={() => scrollToId("grateful1")} className="btn btn-circle">&#8250;</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="font-bold text-[clamp(2.5rem,2vw,4rem)] ml-[3vw]">Lego Inventory Manager</p>
          <div className="flex flex-wrap space-x-10 justify-start ml-[3vw]">
            <a className="inline-flex items-center justify-center" target="_blank" rel="noopener" href="https://github.com/Jesse193/Lego-Inventory-Manager">
              <img className="w-auto h-[clamp(4rem,3vw,8rem)] rounded-full" src="images/github-mark-white.png" alt="Github" />
            </a>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-[clamp(1rem,1.5vw,4rem)] place-self-center text-center text-wrap w-8/10 pt-[clamp(4vh,8vh,10vh)]">
              Lego Inventory Manager is an app that allows users to add/remove Lego parts and sets to their own created lists using Rebrickable"s API.
            </p>
          </div>
          <div className="h-svw md:h-svh xl:h-lvh 2xl:h-100">
            <p className="text-[clamp(3rem,2vw,4rem)] text-blue-500 font-extrabold text-center max-sm:text-center place-self-center">
              Tech Stack
            </p>
            <div className="place-items-center justify-items-center overflow-hidden *:*:place-self-center grid grid-flow-col-dense grid-cols-2 grid-rows-1 gap-x-1 *:text-[clamp(2rem,2vw,4rem)] *:w-screen h-full">
              <div className="relative">
                <div className="flex items-center justify-center w-auto">
                  <img src="images/Logo_C_sharp.png" className="absolute bottom-1/1 w-auto h-[clamp(100px,20%,200px)]"></img>
                  <p className="absolute text-center top-1/1 mt-5">C#</p>
                </div>
              </div>
              <div className="relative">
                <div className="flex items-center justify-center w-auto">
                  <img src="images/NET_Core_Logo.png" className="absolute bottom-1/1 w-auto h-[clamp(100px,20%,200px)]"></img>
                  <p className="absolute text-center top-1/1 mt-5">ASP.NET</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}