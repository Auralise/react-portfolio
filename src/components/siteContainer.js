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


    return (
        <div className="site-wrapper container container-md">
            <header className="header-content bg-light p-lg-3">
                {/* TODO: Colours */}
                <nav className="navbar navbar-expand-lg d-lg-flex">
                    <Header handlePageChange={handlePageChange} />
                    <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
                </nav>
            </header>

            <main className="main-content p-lg-3">
                {renderPage(currentPage)}
            </main>

            <footer className="footer-content">
                <Footer />
            </footer>   
        </div>
    )

}


export default SiteContainer;
