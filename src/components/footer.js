import React from "react";

const Footer = () => {

    return (
        <div className="footer-content">
            <p>
                All content designed and developed by James Prince
            </p>

            <ul className="list-group-flush">
                <li className="list-group-item">
                    <a href="https://github.com/auralise" target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                </li>
                <li className="list-group-item">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;