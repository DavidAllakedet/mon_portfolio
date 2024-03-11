import React, { useState, useEffect } from 'react';
import "./styles/banner.css";

const Banner = () => {
    const title = " Bienvenue sur mon Portfolio"; // Titre à animer

    const [animatedTitle, setAnimatedTitle] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex === title.length) {
                setIsAnimating(false); // Arrêter l'animation une fois que tout le titre est affiché
                clearInterval(intervalId); // Arrêter l'intervalle
            } else {
                setAnimatedTitle(prevTitle => prevTitle + title[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }
        }, 200);

        return () => clearInterval(intervalId);
    }, [currentIndex, title]);

    // Effet pour réinitialiser l'animation une fois qu'elle est terminée
    useEffect(() => {
        if (!isAnimating && animatedTitle === title) {
            // Attendre 2 secondes avant de réinitialiser l'animation
            const timeoutId = setTimeout(() => {
                // Réinitialiser le titre animé et relancer l'animation
                setAnimatedTitle("");
                setCurrentIndex(0);
                setIsAnimating(true);
            }, 2000);

            return () => clearTimeout(timeoutId); // Nettoyer le timeout lorsque le composant est démonté
        }
    }, [animatedTitle, title, isAnimating]);

    return (
        <div className="banner-container">
            <div className="banner">
                <h1 className="banner-title">{animatedTitle}</h1> {/* Utilisation de animatedTitle pour afficher le titre */}
            </div>
        </div>
    );
}

export default Banner;
