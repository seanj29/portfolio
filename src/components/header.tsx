import { Link } from "gatsby";
import React from "react"



const Header = () =>{

    return (
    <div className="text-black dark:text-gray-200 font-ubuntu">
        <h1 className="text-4xl font-bold">
            <Link to="/">
                Sean Otto
            </Link>
        </h1>
        <h2 className="text-gray-900 dark:text-slate-50/70 mt-3 txt-lg font-medium">
            Software Engineer
        </h2>
    </div>

    )
  }

export default Header