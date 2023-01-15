import React from "react";

const Header = ({ headerTextColour, handlePageChange }) => {


    return (
        <div className="header-text" >
            <h1>
                <a
                    href="#about"
                    onClick={() => handlePageChange("About")}
                    className="text-decoration-none"
                    style={headerTextColour.primary}
                >
                    James Prince
                </a>
            </h1>
            <p style={headerTextColour.muted}>
                Full-stack developer
            </p>
        </div>
    )
}

export default Header;