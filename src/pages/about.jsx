import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import INFO from "../data/user";
import "./styles/about.css";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const title = INFO.about.title;
    const [animatedTitle, setAnimatedTitle] = useState("");

    useEffect(() => {
        let isMounted = true;
        let index = 0;

        const intervalId = setInterval(() => {
            if (isMounted) {
                setAnimatedTitle((prevTitle) => {
                    if (index === title.length) {
                        return ""; 
                    } else {
                        return prevTitle + title[index];
                    }
                });
                index++;

                if (index === title.length + 1) {
                    index = 0; 
                }
            }
        }, 100); 

        return () => {
            isMounted = false;
            clearInterval(intervalId);
        };
    }, [title]);

    return (
        <React.Fragment>
            <Helmet>
                <title>{`About | ${INFO.main.title}`}</title>
            </Helmet>

            <div className="page-content">
                <NavBar active="about" />
                <div className="content-wrapper">
                    <div className="about-logo-container">
                        <div className="about-logo">
                            <Logo width={46} />
                        </div>
                    </div>

                    <div className="about-container">
                        <div className="about-main">
                            <div className="about-right-side">
                                <div className="title about-title">{animatedTitle}</div>

                                <div className="subtitle about-subtitle">
                                    {INFO.about.description}
                                </div>

                                <a
                                    href="/path/to/your/cv.pdf"
                                    download
                                    className="cv-download-link"
                                >
                                    Télécharger mon CV
                                </a>
                            </div>

                            <div className="about-left-side">
                                <div className="about-image-container">
                                    <div className="about-image-wrapper">
                                        <img
                                            src="about.webp"
                                            alt="about"
                                            className="about-image"
                                        />
                                    </div>
                                </div>

                                <div className="about-socials">
                                    <Socials />
                                </div>
                            </div>
                        </div>
                        <div className="about-socials-mobile">
                            <Socials />
                        </div>
                    </div>
                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
