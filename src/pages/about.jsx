import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Banner from "../components/common/banner";
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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex === title.length) {
                clearInterval(intervalId); // Arrêter l'intervalle
                setTimeout(() => {
                    setIsAnimating(false); // Arrêter l'animation après un délai
                    setAnimatedTitle(""); // Effacer le texte après un délai
                    setCurrentIndex(0); // Réinitialiser l'index
                    setIsAnimating(true); // Relancer l'animation
                }, 2000); // Délai de 2 secondes avant d'effacer le texte
            } else {
                setAnimatedTitle(prevTitle => prevTitle + title[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }
        }, 100);
        return () => clearInterval(intervalId);
    }, [currentIndex, title]);

    // Effet pour réinitialiser l'animation une fois qu'elle est terminée
    useEffect(() => {
        if (!isAnimating && animatedTitle === title) {
            // Réinitialiser le titre animé et relancer l'animation
            setAnimatedTitle("");
            setCurrentIndex(0);
            setIsAnimating(true);
        }
    }, [animatedTitle, title, isAnimating]);

    return (
        <React.Fragment>
            <Helmet>
                <title>{`About | ${INFO.main.title}`}</title>
            </Helmet>

            <div className="page-content">
                <NavBar active="about" />
                <Banner />
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
