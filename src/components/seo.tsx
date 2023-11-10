import React from "react"
import type { ReactNode } from "react"


interface siteMetadata{
    title?: string
    description?: string
    siteUrl?: string
    children?: ReactNode

}
export const SEO = (props: siteMetadata) => {
    const { title, description, siteUrl, children} = props

  const seo = {
    title: title || "Sean Otto",
    description: description || "Short Showcase of my past projects",
    url: `${siteUrl}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" />
      {children}
    </>
  )
}