import React from "react"

type BioProps = {

    TextContent: string
}

const Bio = (props: BioProps) =>{
    const { TextContent } = props;

    return (
    <div>
        <main className="font-ubuntu text-black dark: text-slate-50/70 flex whitespace-pre-line mt-5">
            <p>
                {TextContent}
            </p>
        </main>
    </div>

    )
  }

export default Bio