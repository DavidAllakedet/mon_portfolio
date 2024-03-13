import React, { useState, useEffect } from 'react';
import "./styles/banner.css";

const Banner = () => {
    const title = " Bienvenue sur mon Portfolio"; 

    const [animatedTitle, setAnimatedTitle] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex === title.length) {
                setIsAnimating(false); 
                clearInterval(intervalId); 
            } else {
                setAnimatedTitle(prevTitle => prevTitle + title[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }
        }, 200);

        return () => clearInterval(intervalId);
    }, [currentIndex, title]);

    useEffect(() => {
        if (!isAnimating && animatedTitle === title) {
            const timeoutId = setTimeout(() => {
                setAnimatedTitle("");
                setCurrentIndex(0);
                setIsAnimating(true);
            }, 2000);

            return () => clearTimeout(timeoutId); 
        }
    }, [animatedTitle, title, isAnimating]);

    return (
        <div className="banner-container">
            <div className="banner">
                <h1 className="banner-title">{animatedTitle}</h1> 
            </div>
        </div>
    );
}

export default Banner;
