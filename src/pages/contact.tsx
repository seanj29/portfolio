import React, { useState } from "react"
import type { HeadFC } from "gatsby"
import Navbar from "../components/nav"
import { SEO } from "../components/seo"
import Footer from "../components/socials";


const ContactPage = () =>{

    //

  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfCHRDEFYbuwJ_AO0Mr2wlgFzDs6C8nhw6ncDplNNdJIEwpQA/viewform?usp=pp_url"
  const [nameValue, setNameValue] = useState("")
  const [emailValue, setEmailValue] = useState("")
  const [numberValue, setNumberValue] = useState("")
  const [subjectValue, setSubjectValue] = useState("")
  const [messageValue, setMessageValue] = useState("")

  function handleFormSubmit(){
    window.open(`${formUrl}&entry.1588175006=${encodeURI(nameValue)}&entry.1500911423=${encodeURI(subjectValue)}&entry.1931597131=${encodeURI(emailValue)}&entry.43927614=${encodeURI(numberValue)}&entry.142169962=${encodeURI(messageValue)}`, "_blank")
  }

  return (
    
    <div className="mx-auto px-6 py-12">
      <Navbar/>
      <div className="mt-10 mx-6 lg:mx-20 bg-white dark:bg-gray-900 rounded-lg">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <form className="space-y-8" autoComplete="on" onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full Name<span className="text-red-600"> *</span></label>
                <input type="text" id="name" value={nameValue} onChange={(e) => setNameValue(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John Smith" required/>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input type="text" id="subject" value={subjectValue} onChange={e => setSubjectValue(e.target.value)} autoComplete="off" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light " placeholder="What is your inquiry about?"/>
              </div>
              <div className="inline-flex space-x-24">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email<span className="text-red-600"> *</span></label>
                  <input type="email" id="email" value={emailValue} onChange={e => setEmailValue(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light " placeholder="name@email.com" required/>
                </div>
                <div>
                  <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
                  <input type="tel" id="number" value={numberValue} onChange={e => setNumberValue(e.target.value)} pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light " placeholder="0777333777"/>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Message<span className="text-red-600"> *</span></label>
                <textarea id="message" value={messageValue} onChange={e => setMessageValue(e.target.value)} rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 " placeholder="Leave a comment..." required></textarea>
              </div>
              <button type="submit" disabled={(nameValue && subjectValue && emailValue) ? false: true} className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-teal-700 sm:w-fit hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:bg-teal-700 disabled:dark:hover:bg-teal-600">Submit (Brings you to google forms with the options filled out)</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ContactPage

export const Head: HeadFC = () => (
      <>
      <SEO title="Contact Form" description="Portfolio for Sean Otto"/>
      <body className = "bg-slate-500 dark:bg-slate-800 text-slate-800 dark:text-slate-400 font-ubuntu"></body>
      </>
)
