import { Link } from "gatsby";
import React from "react"
import type { ReactNode } from "react"

type BioProps = {

    TextContent: string
}

const Bio = (props: BioProps) =>{
    const { TextContent } = props;

    return (
    <div>
        <main className="font-ubuntu text-cyan-50 flex whitespace-pre-line my-2">
            <p>
                {TextContent}
            </p>
        </main>
    </div>

    )
  }

export default Bio