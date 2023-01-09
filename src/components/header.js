import React from "react";

//Import Nav as this is part of the header component
import Navigation from "./navigation";

const Header = () => {
    return (
        <header className="header-wrapper">
            <h1>James Prince</h1>
            <p className="sub-heading">Full-stack developer</p>

            <Navigation />
        </header>
    )
}

export default Header;