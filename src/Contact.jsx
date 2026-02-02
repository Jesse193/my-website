import { useState } from 'react'
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import { useForm, ValidationError } from '@formspree/react';
import ContactForm from './utils/contactForm';
import './App.css'

export default function Contact() {
  return (
    <>
      <section className="bg-gray-900 max-w-screen text-white mt-10 mb-0 pt-10 min-h-screen">
        <h1 className="place-self-center text-2xl pb-5">Contact me here</h1>
        <div className="w-[80vw] h-min-h-screen place-self-center place-items-center bg-gray-700">
          <ContactForm/>
        </div>
      </section>
    </>
  );
}