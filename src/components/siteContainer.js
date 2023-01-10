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



function SiteContainer() {
    const [currentPage, setCurrentPage] = useState("Portfolio");

    const renderPage = () => {
        if (currentPage === "About") {
            return <About />
        } else if (currentPage === "Contact") {
            return <Contact />
        } else if (currentPage === "Resume"){
            return <Resume />
        } else {
            return <Portfolio />
        }
    }

    //Page state handler
    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <div className="site-wrapper">
            <header className="header-content">
                <Header />
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>

            <main className="main-content">
                {renderPage(currentPage)}
            </main>

            <footer className="footer-content">
                <Footer />
            </footer>   
        </div>
    )

}


export default SiteContainer;
