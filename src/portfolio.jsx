import { useState } from 'react'
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import './App.css'

export default function Portfolio() {
  return (
    <>
      <section className="bg-gray-900 text-white mt-10 mb-0 min-h-screen">
        <div>
          <p className="w-150 text-6xl font-extrabold pl-3 mt-0 pt-10 text-center justify-center place-self-center">
            My Projects
          </p>
          <div className="w-150 text-5xl font-extrabold pl-8 mt-0 pt-10 mb-15 mt-10">FoodHaven</div>
          <div className="flex flex-wrap space-x-10 justify-start *:text-2xl pl-15">
            <a className="inline-flex items-center justify-center" target="_blank" rel="noopener" href="https://github.com/orgs/FoodHaven/repositories">
              <img className="mx-auto block h-15 rounded-full sm:mx-0 sm:shrink-0" src="src/assets/images/github-mark-white.png" alt="Github" />
            </a>
            <a target="_blank" rel="noopener" className="underline decoration-sky-500" href="https://foodhaven-u4d9.onrender.com/">
              FoodHaven
            </a>
          </div>
          <div className="justify-start flex-wrap text-1xl w-150 ml-20 mt-10">
            FoodHaven is an app that allows users to search for Farmers' markets that accept SNAP and EBT benefits then find directions to them using Google Maps Platform.
          </div>
          <div className="text-5xl text-blue-500 font-extrabold pl-15 mt-8">
              Tech Stack
          </div>
          <div className="grid grid-cols-3 place-items-center justify-start *:text-4xl *:w-65 *:h-25 *:mt-8 *:mb-30">
            <div className="relative bg-[url(/src/assets/images/Ruby_logo.svg)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-25 left-0 right-0 text-center flex items-center justify-center mt-12">Ruby</div>
            </div>
            <div className="relative bg-[url(/src/assets/images/Ruby_On_Rails_Logo.svg.png)] bg-cover bg-center text-center">
              <div className="absolute bottom-0 top-25 left-0 right-0 text-center flex items-center justify-center mt-12">Ruby on Rails</div>
            </div>
            <div className="relative bg-[url(/src/assets/images/sinatra_logo.png)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-25 left-0 right-0 text-center flex items-center justify-center mt-12">Sinatra</div>
            </div>
            <div className="relative bg-[url(/src/assets/images/javascript_logo.png)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-25 left-0 right-0 text-center flex items-center justify-center mt-12">Javascript</div>
            </div>
            <div className="relative bg-[url(/src/assets/images/google_maps_logo.png)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-25 left-0 right-0 text-center flex items-center justify-center mt-12">Google Maps Platform</div>
            </div>
            <div className="relative bg-[url(/src/assets/images/bootstrap-logo.svg)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-25 left-0 right-0 text-center flex items-center justify-center mt-12">Bootstrap</div>
            </div>
            <div className="relative bg-[url()] bg-cover bg-center text-center">
              <div className="absolute bottom-0 top-25 left-0 right-0 text-center flex items-center justify-center mt-12">AWS - Elastic Beanstalk</div>
            </div>
            <div className="relative bg-[url()] bg-cover bg-center text-center">
              <div className="absolute bottom-0 top-25 left-0 right-0 text-center flex items-center justify-center mt-12">AWS - EC2</div>
            </div>
            <div className="relative bg-[url()] bg-cover bg-center text-center">
              <div className="absolute bottom-0 top-25 left-0 right-0 text-center flex items-center justify-center mt-12">AWS - RDS</div>
            </div>
          </div>
          <div className="w-150 text-5xl font-extrabold text-center justify-center place-self-center pl-8 mt-15 mb-10">Scroll To See how the App Works</div>
          <div className="w-340 h-260 justify-start place-self-center snap-x overflow-x-auto grid grid-flow-col-dense mb-12 *:snap-center *:text-2xl *:w-340 *:h-220 *:mt-2 *:mb-12">
            <div className="relative bg-[url(/src/assets/images/FoodHaven/FoodHaven_home_page.png)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 120 left-0 right-0 text-center flex items-center justify-center mt-77">Home Page</div>
              <div className="absolute bottom-75 left-300 right-0 text-center items-center justify-center text-green-500 bg-transparent text-4xl bg-transparent font-extrabold mb-35 text-center flex items-center justify-center animate-pulse">
                →
              </div>
            </div>
            <div className="relative bg-[url(/src/assets/images/FoodHaven/FoodHaven_Market_search.png)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 120 left-0 right-0 text-center flex items-center justify-center mt-77">Market search from the National Mall</div>
              <div className="absolute bottom-75 left-300 right-0 text-center items-center justify-center text-green-500 bg-transparent text-4xl bg-transparent font-extrabold mb-35 text-center flex items-center justify-center animate-pulse">
                →
              </div>
            </div>
            <div className="relative bg-[url(/src/assets/images/FoodHaven/FoodHaven_Market_search_results.png)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 120 left-0 right-0 text-center flex items-center justify-center mt-77">Search results</div>
              <div className="absolute bottom-75 left-300 right-0 text-center items-center justify-center text-green-500 bg-transparent text-4xl bg-transparent font-extrabold mb-35 text-center flex items-center justify-center animate-pulse">
                →
              </div>
            </div>
            <div className="relative bg-[url(/src/assets/images/FoodHaven/FoodHaven_Directions.png)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 120 left-0 right-0 text-center flex items-center justify-center mt-77">Directions to chosen market using Google Maps Platform</div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-150 text-5xl font-extrabold pl-8 mt-2 mb-10">Grateful Together</div>
          <div className="flex flex-wrap space-x-10 justify-start *:text-2xl pl-15">
            <a className="inline-flex items-center justify-center" target="_blank" rel="noopener" href="https://github.com/orgs/GratefulTogether/repositories">
              <img className="mx-auto block h-15 rounded-full sm:mx-0 sm:shrink-0" src="src/assets/images/github-mark-white.png" alt="Github" />
            </a>
            <a target="_blank" rel="noopener" className="underline decoration-sky-500" href="https://gratefultogether.vercel.app/">
              Grateful Together
            </a>
          </div>
          <div className="justify-start flex-wrap text-1xl w-150 ml-20 mt-10">
            Grateful Together is an app that allows users to post into a community jounal for things that they're grateful for using webhooks and cross origin resource sharing.
          </div>
          <div className="text-5xl text-blue-500 font-extrabold pl-15 mt-8">
              Tech Stack
          </div>
          <div className="grid grid-cols-3 place-items-center justify-start *:text-4xl *:w-65 *:h-25 *:mt-8 *:mb-30">
            <div className="relative bg-[url(/src/assets/images/Ruby_logo.svg)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-25 left-0 right-0 text-center flex items-center justify-center mt-12">Ruby</div>
            </div>
            <div className="relative bg-[url(/src/assets/images/Ruby_On_Rails_Logo.svg.png)] bg-cover bg-center text-center">
              <div className="absolute bottom-0 top-25 left-0 right-0 text-center flex items-center justify-center mt-12">Ruby on Rails</div>
            </div>
            <div className="relative bg-[url(/src/assets/images/javascript_logo.png)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-25 left-0 right-0 text-center flex items-center justify-center mt-12">Javascript</div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-150 text-5xl font-extrabold pl-8 mt-2 mb-10">Lego Inventory Manager</div>
          <div className="flex flex-wrap space-x-10 justify-start *:text-2xl pl-15">
            <a className="inline-flex items-center justify-center" target="_blank" rel="noopener" href="https://github.com/Jesse193/Lego-Inventory-Manager">
              <img className="mx-auto block h-15 rounded-full sm:mx-0 sm:shrink-0" src="src/assets/images/github-mark-white.png" alt="Github" />
            </a>
          </div>
          <div className="justify-start flex-wrap text-1xl w-150 ml-20 mt-10">
            Lego Inventory Manager is an app that allows users to add/remove Lego parts and sets to their own create lists using Rebrickable's API.
          </div>
          <div className="text-5xl text-blue-500 font-extrabold pl-15 mt-8">
              Tech Stack
          </div>
          <div className="grid grid-cols-3 place-items-center justify-start *:text-4xl *:w-65 *:h-25 *:mt-8 *:mb-30">
            <div className="relative bg-[url(/src/assets/images/Logo_C_sharp.png)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-25 left-0 right-0 text-center flex items-center justify-center mt-12">C#</div>
            </div>
            <div className="relative bg-[url(/src/assets/images/NET_Core_Logo.png)] bg-contain bg-no-repeat bg-center text-center">
              <div className="absolute bottom-0 top-25 left-0 right-0 text-center flex items-center justify-center mt-12">ASP.Net</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}