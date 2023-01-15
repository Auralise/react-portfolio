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

    const style = {
        header: {

            color: {
                backgroundColor: "var(--sunglow)"

            },
            text: {
                primary: {
                    color: "var(--russian-violet)"
                },
                muted: {
                    color: "var(--russian-violet-muted)"
                }
            }
        },
        portfolio: {
            cards: {
                cardStyle: {
                    margin: "1rem",
                    flex: "1",
                    minWidth: "500px",

                },

                cardTextStyle: {
                    minHeight: "4rem"
                },

                imageStyle: {
                    height: "280px"
                },

                buttonColour: {
                    backgroundColor: "var(--blue-yonder)",
                    color: "white",
                },
            }
        },

        bodyStyle: {
            marginBottom: "8rem",
        },

        footer: {
            background: {
                backgroundColor: "var(--sunglow)"
            }
            
        }

    }

    const renderPage = () => {
        if (currentPage === "Portfolio") {
            return <Portfolio style={style.portfolio} />
        } else if (currentPage === "Contact") {
            return <Contact />
        } else if (currentPage === "Resume") {
            return <Resume />
        } else {
            return <About />
        }
    }

    //Page state handler
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="site-wrapper conatiner-md">
            <header className="pt-lg-1 ps-lg-3 pe-lg-3 sticky-top" style={style.header.color}>
                {/* TODO: Colours */}
                <div className="container d-flex">
                    <Header headerTextColour={style.header.text} handlePageChange={handlePageChange} />
                    <nav className="navbar navbar-expand-lg ms-auto">
                        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
                    </nav>
                </div>
            </header>

            <main className="container p-lg-3" style={style.bodyStyle}>
                {renderPage(currentPage)}
            </main>

            <footer className="footer-content fixed-bottom ps-3 pe-3 pt-3 text-center" style={style.footer.background}>
                <Footer />
            </footer>
        </div>
    )

}


export default SiteContainer;
