import { useState } from 'react'
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import './App.css'
import { scrollToId } from './utils/scrollHelper';

export default function Portfolio() {
  return (
    <>
      <section className="bg-gray-900 text-white mt-10 mb-0 min-h-screen">
          <p className="w-screen md:w-screen text-4xl md:text-6xl xl:text-7xl font-extrabold pl-3 mt-0 pt-10 text-center justify-center place-self-center">
            My Projects
          </p>
        <div>
          <div className="w-screen md:w-150 text-3xl md:text-5xl xl:text-6xl font-extrabold pl-8 mt-0 pt-10 mb-15 mt-10">FoodHaven</div>
          <div className="flex flex-wrap space-x-10 justify-start *:text-2xl pl-15">
            <a className="inline-flex items-center justify-center" target="_blank" rel="noopener" href="https://github.com/orgs/FoodHaven/repositories">
              <img className="mx-auto block h-15 md:h-20 lg:h-20 xl:h-25 rounded-full sm:mx-0 sm:shrink-0" src="images/github-mark-white.png" alt="Github" />
            </a>
          </div>
          <div className="justify-center place-self-center text-center md:justify-start flex-wrap text-xl md:text-2xl lg:text-3xl xl:text-4xl w-3/4 md:w-3/4 md:ml-20 mt-10">
            FoodHaven is an app that allows users to search for Farmers' markets that accept SNAP and EBT benefits then find directions to them using Google Maps Platform.
          </div>
          <div className="text-5xl xl:text-6xl text-blue-500 font-extrabold md:pl-15 mt-10 text-center">
              Tech Stack
          </div>
          <div className="sm:max-2xl:carousel overflow-hidden grid grid-flow-col-dense md:grid-flow-row-dense grid-cols-auto grid-rows-1 md:grid-cols-4 md:grid-rows-3 justify-items-center gap-x-1 gap-y-40 md:gap-y-30 *:text-4xl *:w-md md:*:w-65 *:h-40 md:*:h-25 *:mt-20 md:*:mt-8 h-70 md:h-full md:mt-10">
            <div id="foodtech1" className="relative bg-[url(/images/Ruby_logo.svg)] bg-size-[110px] md:bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-1/1 md:top-35 left-0 right-0 text-center flex items-center justify-center">Ruby</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('foodtech9')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('foodtech2')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="foodtech2" className="sm:max-2xl:carousel relative bg-[url(/images/Ruby_On_Rails_Logo.svg.png)] bg-size-[190px] md:bg-cover bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-1/1 md:top-35 left-0 right-0 text-center flex items-center justify-center">Ruby on Rails</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('foodtech1')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('foodtech3')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="foodtech3" className="sm:max-2xl:carousel relative bg-[url(/images/sinatra_logo.png)] bg-size-[180px] md:bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-1/1 md:top:45 md:top-35 left-0 right-0 text-center flex items-center justify-center">Sinatra</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('foodtech2')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('foodtech4')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="foodtech4" className="relative bg-[url(/images/javascript_logo.png)] bg-size-[100px] md:bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-1/1 md:top-35 left-0 right-0 text-center flex items-center justify-center">Javascript</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('foodtech3')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('foodtech5')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="foodtech5" className="relative bg-[url(/images/google_maps_logo.png)] bg-size-[100px] md:bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-1/1 md:top-35 left-0 right-0 text-center flex items-center justify-center">Google Maps Platform</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('foodtech4')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('foodtech6')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="foodtech6" className="relative bg-[url(/images/bootstrap-logo.svg)] bg-size-[150px] md:bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-1/1 md:top-35 left-0 right-0 text-center flex items-center justify-center">Bootstrap</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('foodtech5')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('foodtech7')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="foodtech7" className="relative bg-[url()] bg-cover bg-center text-center">
              <div className="absolute bottom-0 top-0 md:top-35 left-0 right-0 text-center flex items-center place-self-center justify-center w-1/2">AWS - Elastic Beanstalk</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('foodtech6')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('foodtech8')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="foodtech8" className="relative bg-[url()] bg-cover bg-center text-center">
              <div className="absolute bottom-0 top-0 md:top-0 left-0 right-0 text-center flex items-center justify-center">AWS - EC2</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('foodtech7')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('foodtech9')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="foodtech9" className="relative bg-[url()] bg-cover bg-center text-center">
              <div className="absolute bottom-0 top-0 md:top-0 left-0 right-0 text-center flex items-center justify-center">AWS - RDS</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('foodtech8')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('foodtech1')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
          </div>

          <div className="carousel snap-x snap-mandatory overflow-hidden grid grid-flow-col-dense grid-cols-auto grid-rows-1 *:text-2xl lg:*:text-4xl xl:*:text-5xl *:w-screen *:h-100 md:*:h-10 md:*:h-180 lg:*:h-full xl:*:h-full *:mt-20 md:*:mt-8 h-150 lg:h-200 xl:h-250 w-screen md:mt-10">
            <div id="fooddemo1" className="relative bg-[url(/images/FoodHaven/FoodHaven_home_page.png)] bg-size-[300px] md:bg-size-[600px] lg:bg-size-[800px] xl:bg-size-[1050px] bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-1/1 md:top-100 lg:top-200 left-0 right-0 text-center flex items-center justify-center place-self-center">Home Page</div>
              <div className="caraousel absolute right-2 md:right-1/16 lg:right-1/64 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 md:*:h-15 lg:*:h-20 xl:*:h-25 *:w-12 md:*:w-15 lg:*:w-20 xl:*:w-25 *:rounded-full text-4xl lg:*:text-5xl xl:*:text-7xl *:bg-blue-500">
                <button onClick={() => scrollToId('fooddemo2')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="fooddemo2" className="relative bg-[url(/images/FoodHaven/FoodHaven_Market_search.png)] bg-size-[300px] md:bg-size-[600px] lg:bg-size-[800px] xl:bg-size-[1050px] bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-1/1 md:top-100 lg:top-200 left-0 right-0 text-center flex items-center justify-center w-3/4 place-self-center">Market search from the National Mall</div>
              <div className="caraousel absolute left-2 md:left-1/16 lg:left-1/64 right-2 md:right-1/16 lg:right-1/64 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 md:*:h-15 lg:*:h-20 xl:*:h-25 *:w-12 md:*:w-15 lg:*:w-20 xl:*:w-25 *:rounded-full text-4xl lg:*:text-5xl xl:*:text-7xl *:bg-blue-500">
                <button onClick={() => scrollToId('fooddemo1')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('fooddemo3')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="fooddemo3" className="relative bg-[url(/images/FoodHaven/FoodHaven_Market_search_results.png)] bg-size-[300px] md:bg-size-[600px] lg:bg-size-[800px] xl:bg-size-[1050px] bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-1/1 md:top-100 lg:top-200 left-0 right-0 text-center flex items-center justify-center place-self-center">Search results</div>
              <div className="caraousel absolute left-2 md:left-1/16 lg:left-1/64 right-2 md:right-1/16 lg:right-1/64 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 md:*:h-15 lg:*:h-20 xl:*:h-25 *:w-12 md:*:w-15 lg:*:w-20 xl:*:w-25 *:rounded-full text-4xl lg:*:text-5xl xl:*:text-7xl *:bg-blue-500">
                <button onClick={() => scrollToId('fooddemo2')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('fooddemo4')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="fooddemo4" className="relative bg-[url(/images/FoodHaven/FoodHaven_Directions.png)] bg-size-[300px] md:bg-size-[600px] lg:bg-size-[800px] xl:bg-size-[1050px] bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-1/1 md:top-100 lg:top-200 left-0 right-0 text-center flex items-center justify-center w-3/4 place-self-center">Directions to chosen market using Google Maps Platform</div>
              <div className="caraousel absolute left-2 md:left-1/16 lg:left-1/64 right-2 md:right-1/16 lg:right-1/64 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 md:*:h-15 lg:*:h-20 xl:*:h-25 *:w-12 md:*:w-15 lg:*:w-20 xl:*:w-25 *:rounded-full text-4xl lg:*:text-5xl xl:*:text-7xl *:bg-blue-500">
                <button onClick={() => scrollToId('fooddemo3')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('fooddemo1')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-screen md:w-150 text-3xl md:text-5xl xl:text-6xl font-extrabold pl-8 mt-20 mb-10">Grateful Together</div>
          <div className="flex flex-wrap space-x-10 justify-start *:text-2xl pl-15">
            <a className="inline-flex items-center justify-center" target="_blank" rel="noopener" href="https://github.com/orgs/GratefulTogether/repositories">
              <img className="mx-auto block h-15 md:h-20 lg:h-20 xl:h-25 rounded-full sm:mx-0 sm:shrink-0 mt-10" src="images/github-mark-white.png" alt="Github" />
            </a>
          </div>
          <div className="justify-center place-self-center text-center md:justify-start flex-wrap text-xl md:text-2xl lg:text-3xl xl:text-4xl w-3/4 md:w-3/4 md:ml-20 mt-10">
            Grateful Together is an app that allows users to post into a community jounal for things that they're grateful for using webhooks and cross origin resource sharing.
          </div>
          <div className="text-5xl xl:text-6xl text-blue-500 font-extrabold md:pl-15 mt-10 text-center">
              Tech Stack
          </div>
          <div className="sm:max-2xl:carousel snap-x snap-mandatory overflow-hidden grid grid-flow-col-dense md:grid-flow-row-dense grid-cols-auto md:grid-cols-3 grid-rows-1 gap-x-1 justify-items-center *:text-4xl  *:ease-in-out *:w-md md:*:w-65 *:h-45 md:*:h-25 md:*:mt-8 h-70 md:mt-10">
            <div id="gratefultech1" className="relative bg-[url(/images/Ruby_logo.svg)] bg-size-[110px] md:bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-1/1 md:top-35 left-0 right-0 text-center flex items-center justify-center">Ruby</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('gratefultech3')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('gratefultech2')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="gratefultech2" className="sm:max-2xl:carousel relative bg-[url(/images/Ruby_On_Rails_Logo.svg.png)] bg-size-[190px] md:bg-cover bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-1/1 md:top-35 left-0 right-0 text-center flex items-center justify-center">Ruby on Rails</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('gratefultech1')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('gratefultech3')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
            <div id="gratefultech3" className="relative bg-[url(/images/javascript_logo.png)] bg-size-[100px] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-1/1 md:top-35 left-0 right-0 text-center flex items-center justify-center">Javascript</div>
              <div className="sm:max-2xl:hidden 2xl:hidden caraousel absolute left-1/8 right-1/8 top-1/2 flex -translate-y-1/2 transform justify-between *:h-12 *:w-12 *:rounded-full *:bg-blue-500">
                <button onClick={() => scrollToId('gratefultech2')} className="btn btn-circle">&#8249;</button>
                <button onClick={() => scrollToId('gratefultech1')} className="btn btn-circle">&#8250;</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-1/2 md:w-screen md:w-150 text-3xl md:text-5xl xl:text-6xl font-extrabold pl-8 mt-5 md:mt-45 mb-10">Lego Inventory Manager</div>
          <div className="flex flex-wrap space-x-10 justify-start *:text-2xl pl-15">
            <a className="inline-flex items-center justify-center" target="_blank" rel="noopener" href="https://github.com/Jesse193/Lego-Inventory-Manager">
              <img className="mx-auto block h-15 md:h-20 lg:h-20 xl:h-25 rounded-full sm:mx-0 sm:shrink-0 mt-10" src="images/github-mark-white.png" alt="Github" />
            </a>
          </div>
          <div className="justify-center place-self-center text-center md:justify-start flex-wrap text-xl md:text-2xl lg:text-3xl xl:text-4xl w-3/4 md:w-3/4 md:ml-20 mt-10">
            Lego Inventory Manager is an app that allows users to add/remove Lego parts and sets to their own created lists using Rebrickable's API.
          </div>
          <div className="text-5xl xl:text-6xl text-blue-500 font-extrabold md:pl-15 mt-10 text-center">
            Tech Stack
          </div>

          <div className="items-center grid grid-flow-row-dense grid-cols-2 grid-rows-1 md:grid-cols-2 md:grid-rows-1 gap-x-1 md:gap-x-1 h-65 *:text-4xl *:w-full md:*:w-full *:h-25 *:mt-8 pb-20 justify-items-center">
            <div className="relative bg-[url(/images/Logo_C_sharp.png)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-35 left-0 right-0 text-center flex items-center justify-center">C#</div>
            </div>
            <div className="relative bg-[url(/images/NET_Core_Logo.png)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-35 left-0 right-0 text-center flex items-center justify-center">ASP.Net</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}