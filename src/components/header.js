import React from "react";

const Header = (handlePageChange) => {
    return (
        <div className="header-text">
            <h1>
                <a 
                href="#about"
                onClick={() => handlePageChange("About")}
                className="text-decoration-none text-dark"
                >
                    James Prince
                </a>
            </h1>
            <p className="text-muted">Full-stack developer</p>
        </div>
    )
}

export default Header;