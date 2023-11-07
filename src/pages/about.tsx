import React from "react";
import type { HeadFC } from "gatsby"
import Layout from "../components/layout";



const AboutPage = () => {
    return(    
    <Layout pageTitle="About Page">
        <p>Hi there! I'm the one that did this.</p>
    </Layout>
    )
}

export const Head: HeadFC = () => <title>About Me</title>

export default AboutPage
