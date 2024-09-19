import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Make sure to create this CSS file
import image1 from './images/first.jpg';
import image2 from './images/second.jpg';
import image3 from './images/back.jpg';
import image4 from './images/thired.jpg';
const slides = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
];
const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next slide
    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    // Function to go to the previous slide
    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    // Set up auto-sliding effect
    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, 3000); // Change slide every 3 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="slideshow">
            <button className="prev" onClick={goToPreviousSlide}>&lt;</button>
            <img src={slides[currentIndex].src} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
            <button className="next" onClick={goToNextSlide}>&gt;</button>
        </div>
    );
};

export default Slideshow;
