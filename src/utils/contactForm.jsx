import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../App.css'

function ContactForm() {
  const [state, handleSubmit] = useForm("xrelowjz");
  if (state.succeeded) {
    return <div className="w-[20vw] tex-wrap text-center"><p>Thanks for contacting me! I'll get back to you as soon as I can.</p></div>;
  }
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 grid-rows-2 space-y-1 justify-items-center content-evenly place-items-center place-self-center *:text-black *:font-bold">
      <div className="justify-center">
        <label className="text-white" htmlFor="email">
          Email Address:
        </label>
        <div className="w-[60vh] mt-2">
          <input className="bg-white w-[40vh]"
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
      <div className="justify-center col-span-full">
        <label className="text-white" htmlFor="message">
          Message:
        </label>
        <div className="mt-2">
          <textarea className="bg-white w-[60vh] h-[20vh] resize-none"
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
      <div className="pb-5 pt-10">
        <button className="justify-center bg-green-500 rounded-md h-[2vw] w-[6vw]" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </div>
    </form>
  );
}

function Contact() {
  return (
    <ContactForm />
  );
}

export default Contact;