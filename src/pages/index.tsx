import React from "react"
import type { HeadFC } from "gatsby"
import { SEO } from "../components/seo"

const IndexPage = () =>{

  return (
    <h1>
      
      Sean Otto

    </h1>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <SEO />
)
