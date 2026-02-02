import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Portfolio from "./portfolio.jsx"
import Contact from "./Contact.jsx"
import Layout from "./layout.jsx"
import NotFound from "./NotFound.jsx"
import { HashRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  </HashRouter>
)
