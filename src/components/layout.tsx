import React from 'react'
import { Link } from 'gatsby'
import type { ReactNode } from "react"

interface LayoutProps {
    pageTitle: string;
    children: ReactNode;
}


const Layout = (props: LayoutProps) => {
    const { pageTitle, children } = props;
    
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout