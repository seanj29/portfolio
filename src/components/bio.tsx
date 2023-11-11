import { Link } from "gatsby";
import React from "react"
import type { ReactNode } from "react"

type BioProps = {

    Title: string,
    TextContent: string
}

const Bio = (props: BioProps) =>{
    const { Title, TextContent } = props;

    return (
    <div>
        <h1 className="text-4xl font-bold text-teal-200 font-ubuntu">
            <Link to="/">
                {Title}
            </Link>
        </h1>
        <main className="font-ubuntu text-teal-400 flex whitespace-pre-line my-2">
            <p>
                {TextContent}
            </p>
        </main>
    </div>

    )
  }

export default Bio