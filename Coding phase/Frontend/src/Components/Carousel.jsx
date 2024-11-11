import React, { useEffect, useState } from "react";
import h1 from "../assets/h1.jpg";
import h2 from "../assets/h2.jpg";
import h4 from "../assets/h4.jpg";
import h6 from "../assets/h6.jpg";
import h7 from "../assets/h7.jpg";
import h8 from "../assets/h8.avif";
import h9 from "../assets/h9.jpg";
import h10 from "../assets/h10.jpg";
import h12 from "../assets/h12.jpg";
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image URLs
  const images = [(h1),(h2),(h4),(h6),(h7),(h8),(h9),(h10),(h12)];

  useEffect(() => {
    const interval = setInterval(() => {
      // Change to the next image every 3 seconds
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Clean up on component unmount
  }, [images.length]);

  return (
    <div className="relative w-full max-w-md h-md mx-auto overflow-hidden rounded-lg shadow-lg">
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item w-full ${
              index === currentIndex ? "block" : "hidden"
            }`}
          >
            <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>

      {/* Optional Dots for navigation */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
