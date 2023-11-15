import React from "react";
import { Link, type HeadFC } from "gatsby"
import { SEO } from "../components/seo";
import Navbar from "../components/nav";



const NotFoundPage = () => {
    return(    
        <div className="mx-auto px-6 py-12">
          <Navbar/>
        <div className="mt-20 mx-10 lg:mx-20">
          <h1>Page not found</h1>
          <p>
          Sorry 😔, we couldn’t find what you were looking for.
          </p>
          <Link to="/" className="transition-none hover:text-white hover:underline border-solid">
            Click here to return home
          </Link>
        </div>
        </div>
    )
}

export const Head: HeadFC = () => (
    <>
    <SEO title="Page not Found" />
    <body className = "bg-slate-800 text-slate-400 font-ubuntu"></body>
    </>
)

export default NotFoundPage;





