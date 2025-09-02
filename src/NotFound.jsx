import { useState } from 'react';
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import './App.css'

const NotFound = () => {
  return (
    <>
      <section>
        <div class="text-white w-150 text-6xl font-extrabold pl-3 mt-0 pt-10 text-center justify-center place-self-center">
          <h1>
            404 - Page Not Found
          </h1>
        </div>
        <div>
          <iframe data-testid="embed-iframe" class="border-radius:12px justify-center place-self-center mt-10" src="https://open.spotify.com/embed/track/7gSQv1OHpkIoAdUiRLdmI6?utm_source=generator" width="60%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" loading="lazy"></iframe>
        </div>
      </section>
    </>
  );
}
export default NotFound