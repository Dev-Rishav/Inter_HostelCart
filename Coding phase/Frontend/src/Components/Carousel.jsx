import React, { useEffect, useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image URLs
  const images = [];

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
