import { useState } from 'react'
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import { useForm, ValidationError } from '@formspree/react';
import ContactForm from './utils/contactForm';
import './App.css'

export default function Contact() {
  return (
    <>
      <section className="flex flex-col bg-gray-900 text-white max-w-screen min-h-screen">
        <div className="h-auto bg-center content-center">
          <p className="text-blue-500 font-extrabold text-center place-self-center text-[clamp(2rem,2vw,2rem)] mt-[5vw]">
              Contact Page
          </p>
        </div>
        <div className="m-auto justify-center max-lg:pt-10">
            <ContactForm/>
        </div>
      </section>
    </>
  );
}