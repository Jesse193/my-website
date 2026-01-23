import { useState } from 'react'
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import './App.css'
import { scrollToId } from './utils/scrollHelper';

export default function Portfolio() {
  return (
    <>
      <section className="bg-gray-900 text-white mt-10 mb-0 min-h-screen">
          <p className="w-screen md:w-screen text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold pl-3 mt-0 pt-10 2xl:pt-20 text-center justify-center place-self-center">
            My Projects
          </p>
        <div>
          <div className="w-screen md:w-150 text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold pl-8 mt-0 pt-10 mb-15 mt-10">FoodHaven</div>
          <div className="flex flex-wrap space-x-10 justify-start *:text-2xl pl-15">
            <a className="inline-flex items-center justify-center" target="_blank" rel="noopener" href="https://github.com/orgs/FoodHaven/repositories">
              <img className="mx-auto block h-15 md:h-20 lg:h-20 xl:h-25 2xl:h-35 rounded-full sm:mx-0 sm:shrink-0" src="images/github-mark-white.png" alt="Github" />
            </a>
          </div>
          <div className="justify-center place-self-center text-center md:justify-start flex-wrap text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl w-3/4 md:w-3/4 md:ml-20 mt-10">
            FoodHaven is an app that allows users to search for Farmers' markets that accept SNAP and EBT benefits then find directions to them using Google Maps Platform.
          </div>
          <div className="text-5xl xl:text-6xl 2xl:text-7xl text-blue-500 font-extrabold md:pl-15 mt-10 2xl:mt-25 text-center">
              Tech Stack
          </div>
          <div className="place-items-center justify-items-center *:*:place-self-center sm:max-2xl:caraousel sm:max-2xl:w-full snap-x snap-mandatory overflow-hidden grid grid-flow-col-dense grid-cols-auto grid-rows-1 gap-x-1 md:gap-y-20 lg:gap-y-40 2xl:gap-y-60 md:grid-flow-row md:grid-cols-3 md:grid-rows-3 *:text-4xl lg:*:*:text-5xl 2xl:*:*:text-7xl *:w-screen mt-10 2xl:pb-30 pt-10 pb-10 lg:mt-20 *:mt-20">
            <div id="foodtech1" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <img src="images/Ruby_logo.svg" className="absolute bottom-1/1 w-auto h-[100px] lg:h-[120px] xl:h-[130px] 2xl:h-[160px]"></img>
                <p className='absolute text-center top-1/1 mt-5'>Ruby</p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('foodtech9')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('foodtech2')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
            <div id="foodtech2" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <img src="images/Ruby_On_Rails_Logo.svg.png" className="absolute bottom-1/1 w-auto h-[80px] lg:h-[100px] xl:h-[120px] 2xl:h-[160px]"></img>
                <p className='absolute text-center top-1/1 mt-5'>Ruby on Rails</p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('foodtech1')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('foodtech3')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
            <div id="foodtech3" className="relative sm:max-2xl:carousel-item">
              <img src="images/sinatra_logo.png" className="absolute bottom-1/1 w-auto h-[80px] lg:h-[100px] xl:h-[120px] 2xl:h-[160px]"></img>
              <p className='absolute text-center top-1/1 mt-5'>Sinatra</p>
              <div id="carouselcontrols">
                <button onClick={() => scrollToId('foodtech2')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('foodtech4')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="foodtech4" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <img src="images/javascript_logo.png" className="absolute bottom-1/1 w-auto h-[100px] lg:h-[120px] xl:h-[130px] 2xl:h-[160px]"></img>
                <p className='absolute text-center top-1/1 mt-5'>Javascript</p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('foodtech3')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('foodtech5')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
            <div id="foodtech5" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <img src="images/google_maps_logo.png" className="absolute bottom-1/1 w-auto h-[100px] lg:h-[120px] xl:h-[130px] 2xl:h-[160px]"></img>
                <p className='absolute text-center top-1/1 mt-5 w-3/4'>Google Maps Platform</p>
              </div>
              <div id="carouselcontrols">
                  <button onClick={() => scrollToId('foodtech4')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('foodtech6')} className="btn btn-circle">&#8250;</button>
                </div>
            </div>
            <div id="foodtech6" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <img src="images/bootstrap-logo.svg" className="absolute bottom-1/1 w-auto h-[100px] lg:h-[120px] xl:h-[130px] 2xl:h-[160px]"></img>
                <p className='absolute text-center top-1/1 mt-5'>Bootstrap</p>
              </div>
              <div id="carouselcontrols">
                  <button onClick={() => scrollToId('foodtech5')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('foodtech7')} className="btn btn-circle">&#8250;</button>
                </div>
            </div>
            <div id="foodtech7" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <p className='text-center'>
                  AWS - Elastic Beanstalk
                </p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('foodtech6')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('foodtech8')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
            <div id="foodtech8" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <p className='text-center'>AWS - EC2</p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('foodtech7')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('foodtech9')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
            <div id="foodtech9" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                  <p className='text-center'>AWS - RDS</p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('foodtech8')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('foodtech1')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel snap-x snap-mandatory overflow-hidden grid grid-flow-col-dense grid-cols-auto grid-rows-1 *:text-2xl lg:*:text-4xl xl:*:text-5xl 2xl:*:text-7xl *:w-screen *:h-100 md:*:h-10 md:*:h-180 lg:*:h-full xl:*:h-full 2xl:*:h-full *:mt-20 md:*:mt-8 h-150 lg:h-200 xl:h-250 2xl:h-500 w-screen md:mt-10">
            <div id="fooddemo1" className="relative bg-[url(/images/FoodHaven/FoodHaven_home_page.png)] bg-size-[300px] md:bg-size-[600px] lg:bg-size-[800px] xl:bg-size-[1050px] 2xl:bg-size-[2000px] bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-1/1 md:top-100 lg:top-200 2xl:top-400 left-0 right-0 text-center flex items-center justify-center place-self-center">Home Page</div>
              <div className="caraousel absolute right-2 md:right-1/16 lg:right-1/64 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 md:*:h-15 lg:*:h-20 xl:*:h-25 2xl:*:h-50 *:w-12 md:*:w-15 lg:*:w-20 xl:*:w-25 2xl:*:w-50 *:rounded-full text-4xl lg:*:text-5xl xl:*:text-7xl 2xl:*:text-9xl *:bg-blue-500">
                <button onClick={() => scrollToId('fooddemo2')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="fooddemo2" className="relative bg-[url(/images/FoodHaven/FoodHaven_Market_search.png)] bg-size-[300px] md:bg-size-[600px] lg:bg-size-[800px] xl:bg-size-[1050px] 2xl:bg-size-[2000px] bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-1/1 md:top-100 lg:top-200 2xl:top-400 left-0 right-0 text-center flex items-center justify-center w-3/4 place-self-center">Market search from the National Mall</div>
              <div className="caraousel absolute left-2 md:left-1/16 lg:left-1/64 right-2 md:right-1/16 lg:right-1/64 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 md:*:h-15 lg:*:h-20 xl:*:h-25 2xl:*:h-50 *:w-12 md:*:w-15 lg:*:w-20 xl:*:w-25 2xl:*:w-50 *:rounded-full text-4xl lg:*:text-5xl xl:*:text-7xl 2xl:*:text-9xl *:bg-blue-500">
                <button onClick={() => scrollToId('fooddemo1')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('fooddemo3')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="fooddemo3" className="relative bg-[url(/images/FoodHaven/FoodHaven_Market_search_results.png)] bg-size-[300px] md:bg-size-[600px] lg:bg-size-[800px] xl:bg-size-[1050px] 2xl:bg-size-[2000px] bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-1/1 md:top-100 lg:top-200 2xl:top-400 left-0 right-0 text-center flex items-center justify-center place-self-center">Search results</div>
              <div className="caraousel absolute left-2 md:left-1/16 lg:left-1/64 right-2 md:right-1/16 lg:right-1/64 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 md:*:h-15 lg:*:h-20 xl:*:h-25 2xl:*:h-50 *:w-12 md:*:w-15 lg:*:w-20 xl:*:w-25 2xl:*:w-50 *:rounded-full text-4xl lg:*:text-5xl xl:*:text-7xl 2xl:*:text-9xl *:bg-blue-500">
                <button onClick={() => scrollToId('fooddemo2')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('fooddemo4')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="fooddemo4" className="relative bg-[url(/images/FoodHaven/FoodHaven_Directions.png)] bg-size-[300px] md:bg-size-[600px] lg:bg-size-[800px] xl:bg-size-[1050px] 2xl:bg-size-[2000px] bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-1/1 md:top-100 lg:top-200 2xl:top-400 left-0 right-0 text-center flex items-center justify-center w-3/4 place-self-center">Directions to chosen market using Google Maps Platform</div>
              <div className="caraousel absolute left-2 md:left-1/16 lg:left-1/64 right-2 md:right-1/16 lg:right-1/64 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 md:*:h-15 lg:*:h-20 xl:*:h-25 2xl:*:h-50 *:w-12 md:*:w-15 lg:*:w-20 xl:*:w-25 2xl:*:w-50 *:rounded-full text-4xl lg:*:text-5xl xl:*:text-7xl 2xl:*:text-9xl *:bg-blue-500">
                <button onClick={() => scrollToId('fooddemo3')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('fooddemo1')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-screen md:w-150 2xl:w-full text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold pl-8 mt-20 mb-10">Grateful Together</div>
          <div className="flex flex-wrap space-x-10 justify-start *:text-2xl pl-15">
            <a className="inline-flex items-center justify-center" target="_blank" rel="noopener" href="https://github.com/orgs/GratefulTogether/repositories">
              <img className="mx-auto block h-15 md:h-20 lg:h-20 xl:h-25 2xl:h-35 rounded-full sm:mx-0 sm:shrink-0 mt-10" src="images/github-mark-white.png" alt="Github" />
            </a>
          </div>
          <div className="justify-center place-self-center text-center md:justify-start flex-wrap text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl w-3/4 md:w-3/4 md:ml-20 mt-10">
            Grateful Together is an app that allows users to post into a community jounal for things that they're grateful for using webhooks and cross origin resource sharing.
          </div>
          <div className="text-5xl xl:text-6xl 2xl:text-7xl text-blue-500 font-extrabold md:pl-15 mt-10 2xl:mt-25 text-center">
              Tech Stack
          </div>
          <div className="place-items-center justify-items-center *:*:place-self-center sm:max-2xl:caraousel sm:max-2xl:w-full snap-x snap-mandatory overflow-hidden grid grid-flow-col-dense grid-cols-auto grid-rows-1 gap-x-1 md:gap-y-20 lg:gap-y-40 2xl:gap-y-60 md:grid-flow-row md:grid-cols-3 md:grid-rows-1 *:text-4xl lg:*:*:text-5xl 2xl:*:*:text-7xl *:w-screen mt-10 2xl:pb-30 pt-20 pb-20 lg:mt-20 *:mt-20">
            <div id="grateful1" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <img src="images/Ruby_logo.svg" className="absolute bottom-1/1 w-auto h-[100px] lg:h-[120px] xl:h-[130px] 2xl:h-[160px]"></img>
                <p className='absolute text-center top-1/1 mt-5'>Ruby</p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('grateful3')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('grateful2')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
            <div id="grateful2" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <img src="images/Ruby_On_Rails_Logo.svg.png" className="absolute bottom-1/1 w-auto h-[80px] lg:h-[100px] xl:h-[120px] 2xl:h-[160px]"></img>
                <p className='absolute text-center top-1/1 mt-5'>Ruby on Rails</p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('grateful1')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('grateful3')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
            <div id="grateful3" className="relative sm:max-2xl:carousel-item">
              <div className="flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <img src="images/javascript_logo.png" className="absolute bottom-1/1 w-auto h-[100px] lg:h-[120px] xl:h-[130px] 2xl:h-[160px]"></img>
                <p className='absolute text-center top-1/1 mt-5'>Javascript</p>
                <div id="carouselcontrols">
                  <button onClick={() => scrollToId('grateful2')} className="btn btn-circle">&#8249;</button>
                  <button onClick={() => scrollToId('grateful1')} className="btn btn-circle">&#8250;</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 md:w-screen md:w-150 2xl:text-7xl text-3xl md:text-5xl xl:text-6xl font-extrabold pl-8 mt-5 md:mt-45 mb-10">Lego Inventory Manager</div>
          <div className="flex flex-wrap space-x-10 justify-start *:text-2xl pl-15">
            <a className="inline-flex items-center justify-center" target="_blank" rel="noopener" href="https://github.com/Jesse193/Lego-Inventory-Manager">
              <img className="mx-auto block h-15 md:h-20 lg:h-20 xl:h-25 2xl:h-35 rounded-full sm:mx-0 sm:shrink-0 mt-10" src="images/github-mark-white.png" alt="Github" />
            </a>
          </div>
          <div className="justify-center place-self-center text-center md:justify-start flex-wrap text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl w-3/4 md:w-3/4 md:ml-20 mt-10">
            Lego Inventory Manager is an app that allows users to add/remove Lego parts and sets to their own created lists using Rebrickable's API.
          </div>
          <div className="text-5xl xl:text-6xl 2xl:text-7xl text-blue-500 font-extrabold md:pl-15 mt-10 2xl:mt-25 text-center">
            Tech Stack
          </div>

          <div className="items-center grid grid-flow-row-dense grid-cols-2 grid-rows-1 md:grid-cols-2 md:grid-rows-1 gap-x-1 md:gap-x-1 h-65 *:text-4xl 2xl:*:*:text-7xl *:w-full md:*:w-full *:h-25 2xl:h-100 2xl:*:h-60 *:mt-8 pb-20 justify-items-center">
            <div className="relative sm:max-2xl:carousel-item">
              <div className="place-self-center flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <img src="images/Logo_C_sharp.png" className="w-auto h-[100px] lg:h-[120px] xl:h-[130px] 2xl:h-[160px]"></img>
                <p className='absolute text-center top-4/3 2xl:top-1/1'>C#</p>
              </div>
            </div>
            <div className="relative sm:max-2xl:carousel-item">
              <div className="place-self-center flex items-center justify-center w-1/2 md:w-1/4 2xl:w-full 2xl:text-5xl">
                <img src="images/NET_Core_Logo.png" className="w-auto h-[100px] lg:h-[120px] xl:h-[130px] 2xl:h-[160px]"></img>
                <p className='absolute text-center top-4/3 2xl:top-1/1'>ASP.NET</p>
              </div>  
            </div>
          </div>
        </div>
      </section>
    </>
  );
}