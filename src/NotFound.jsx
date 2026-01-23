import { useState } from 'react';
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import './App.css'

const NotFound = () => {
  return (
    <>
      <section>
        <div class="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-center justify-center place-self-center w-screen pl-3 mt-0 pt-10">
          <h1>404 - Page Not Found</h1>
        </div>
        <div className="place-self-center w-9/10 sm:min-xl:w-9/10 2xl:w-6/10 pt-10">
          <iframe data-testid="embed-iframe" class="border-radius:12px justify-center place-self-center mt-10" src="https://open.spotify.com/embed/track/7gSQv1OHpkIoAdUiRLdmI6?utm_source=generator" width="80%" height="400" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" loading="lazy"></iframe>
        </div>
      </section>
    </>
  );
}
export default NotFound