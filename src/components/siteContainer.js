// Import react
import React, { useState } from "react";


//Import layout components
import Header from "./header";
import Navigation from "./navigation";
import Footer from "./footer";


//Import page components
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";



const SiteContainer = () => {
    const [currentPage, setCurrentPage] = useState("About");

    const renderPage = () => {
        if (currentPage === "Portfolio") {
            return <Portfolio />
        } else if (currentPage === "Contact") {
            return <Contact />
        } else if (currentPage === "Resume"){
            return <Resume />
        } else {
            return <About />
        }
    }

    //Page state handler
    const handlePageChange = (page) => setCurrentPage(page);

    const bodyStyle = {
        marginBottom: "8rem",
    }

    return (
        <div className="site-wrapper conatiner-md">
            <header className="bg-light pt-lg-1 ps-lg-3 pe-lg-3 sticky-top">
                {/* TODO: Colours */}
                <div className="container d-flex">
                    <Header className="" handlePageChange={handlePageChange} />
                    <nav className="navbar navbar-expand-lg ms-auto">
                        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
                    </nav>
                </div>
            </header>

            <main className="container p-lg-3" style={bodyStyle}>
                {renderPage(currentPage)}
            </main>

            <footer className="footer-content fixed-bottom bg-light ps-3 pe-3 pt-3 text-center">
                <Footer />
            </footer>   
        </div>
    )

}


export default SiteContainer;
