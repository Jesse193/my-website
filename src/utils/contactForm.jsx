import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../App.css'

function ContactForm() {
  const [state, handleSubmit] = useForm("xrelowjz");
  if (state.succeeded) {
    return <div className="w-[20vw] tex-wrap text-center"><p>Thanks for contacting me! I'll get back to you as soon as I can.</p></div>;
  }
  return (
    <div className="relative self-center flex flex-col items-center justify-center bg-gray-700 w-screen h-[90vh] md:h-[60vw] lg:w-[80vw] lg:h-[60vh] xl:w-[70vw] xl:h-[80vh] 2xl:w-[50vw] 2xl:h-[70vh]">

      <form onSubmit={handleSubmit} className="m-auto self-center flex flex-col items-center justify-center min-h-screen *:text-black *:font-bold">
        <h1 className="self-center text-2xl !text-white absolute top-1">You Can Contact Me Here</h1>
        <div className="self-center">
          <label className="text-white" htmlFor="email">
            Email Address:
          </label>
          <div className="w-[90vw] md:w-[70vw] lg:w-[60vw] 2xl:w-[30vw] mt-[1vw]">
            <input className="bg-white w-[90vw] md:w-[70vw] lg:w-[60vw] 2xl:w-[30vw]"
              id="email"
              type="email" 
              name="email"
            />
          </div>
        </div>
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <div className="slef-center mt-[4vw]">
          <label className="text-white" htmlFor="message">
            Message:
          </label>
          <div className="mt-[1vw]">
            <textarea className="bg-white w-[90vw] h-[25vh] md:w-[70vw] md:h-[15vw] lg:w-[60vw] lg:h-[20vh] 2xl:w-[30vw] resize-none"
              id="message"
              type="message"
              name="message"
            />
          </div>
          
        </div>
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <textarea className="invisible" 
          type="text" 
          name="_gotcha" 
        /> 
        <button className="justify-center bg-green-500 rounded-md h-[10vw] w-[20vw] md:h-[5vw] md:w-[10vw] xl:h-[3vw] xl:w-[6vw] 2xl:w-[3vw] 2xl:h-[1.5vw]" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

function Contact() {
  return (
    <ContactForm />
  );
}

export default Contact;