import { Link } from "gatsby";
import React from "react"

type HeaderProps = {

    Title: string,
}

const Header = (props: HeaderProps) =>{
    const { Title} = props;

    return (
    <div className="text-gray-200 font-ubuntu">
        <h1 className="text-4xl font-bold">
            <Link to="/">
                {Title}
            </Link>
        </h1>
        <h2 className="mt-3 txt-lg font-medium">
            Software Engineer
        </h2>
    </div>

    )
  }

export default Header