import React from "react"



const Footer = () =>{

    return (
    <ul className="flex items-center">
        <li className="mr-2 text-xs">
            <span className="sr-only">
                Github
            </span>
            <a href="https://github.com/seanj29" className="text-black hover:text-blue-600 hover:border-text-blue-600 dark:hover:text-white dark:hover:border-white">
                <svg className="fill-current h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Github</title>
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            </a>
        </li>
        <li className="mr-2 text-xs">
            <span className="sr-only">
                Itch.io
            </span>
            <a href="https://seanj29.itch.io/" className="text-black hover:text-blue-600 hover:border-text-blue-600 dark:hover:text-white dark:hover:border-white">
                <svg className="fill-current h-16 w-16"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><title>Itch.io</title>
                    <path d="m322.7 284.6c-22.3 13.3-66.3 63.8-66.8 77.1v22c0 27.8 26 52.3 49.6 52.3 28.4 0 52-23.5 52-51.4 0 27.9 22.8 51.4 51.2 51.4s50.4-23.5 50.4-51.4c0 27.9 24.3 51.4 52.6 51.4h.5c28.4 0 52.6-23.5 52.6-51.4 0 27.9 22.1 51.4 50.4 51.4 28.4 0 51.2-23.5 51.2-51.4 0 27.9 23.6 51.4 52 51.4 23.6 0 49.6-24.4 49.6-52.3v-22c-.4-13.2-44.4-63.8-66.8-77.1-69.4-2.4-117.6-2.9-189.3-2.8s-169.4 1.1-189.2 2.8zm136.1 138.1c-2.8 4.9-6.1 9.1-10 12.8-10.7 10.5-25.4 16.9-41.5 16.9 0 0 0 0-.1 0-16.2 0-30.9-6.5-41.6-17-3.9-3.8-6.8-7.9-9.5-12.6-2.7 4.7-6.4 8.8-10.3 12.6-10.7 10.5-25.4 16.9-41.6 16.9 0 0 0 0-.1 0-1.9 0-4-.5-5.6-1.1-2.3 23.7-3.2 46.4-3.6 62.9v.1c0 8.4-.1 15.3-.1 24.9.4 49.8-4.9 161.4 22 188.8 41.7 9.7 118.3 14.1 195.2 14.2 76.9 0 153.6-4.5 195.2-14.2 26.9-27.4 21.5-139 22-188.8 0-9.6-.1-16.5-.1-24.9v-.1c-.3-16.5-1.3-39.2-3.6-62.9-1.6.6-3.7 1.1-5.6 1.1-16.2 0-30.9-6.5-41.6-17-3.9-3.8-7.6-7.9-10.3-12.6-2.7 4.7-5.7 8.8-9.5 12.6-10.7 10.5-25.4 17-41.6 17 0 0 0 0-.1 0-16.2 0-30.8-6.5-41.5-17-3.8-3.7-7.1-7.9-9.8-12.6l-.1-.3c-2.8 4.9-6.1 9.1-9.9 12.8-10.7 10.5-25.4 17-41.6 17 0 0 0 0-.1 0-.6 0-1.1 0-1.7 0-.6 0-1.1 0-1.7 0 0 0 0 0-.1 0-16.2 0-30.9-6.5-41.6-17-3.8-3.7-7.1-7.9-9.7-12.6zm-42.8 55.3c17 .1 32 0 50.6 20.4 14.7-1.5 30-2.3 45.3-2.3 15.3 0 30.7.7 45.3 2.3 18.8-20.4 33.8-20.3 50.7-20.4 8 0 40 0 62.3 62.6l23.9 85.9c17.8 63.9-5.7 65.5-34.9 65.5-43.2-1.6-67.2-33-67.2-64.5-24 3.9-52 5.9-80 5.9-28 0-56-2-80-5.9 0 31.5-24 62.9-67.3 64.6-29.2-.1-52.7-1.6-34.9-65.5l24-85.9c22.2-62.7 54.2-62.7 62.2-62.7zm96 49.2c0 .1-45.6 41.9-53.8 56.8l29.8-1.2v26c0 1.2 12 .7 24 .2 12 .6 24 1 24-.2v-26l29.8 1.2c-8.2-14.8-53.8-56.7-53.8-56.8z"/>
                </svg>
            </a>
        </li>
        <li className="mr-2 text-xs">
            <span className="sr-only">
                LinkedIn
            </span>
            <a href="https://www.linkedin.com/in/sean-otto-48936926a/" className="text-black hover:text-blue-600 hover:border-text-blue-600 dark:hover:text-white dark:hover:border-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current h-8 w-8" viewBox="0 0 24 24"><title>LinkedIn</title>
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
            </a>
        </li>
    </ul>
    )
  }

export default Footer