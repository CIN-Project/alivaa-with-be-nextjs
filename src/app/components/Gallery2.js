import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic"; // Use this only for Next.js
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Dynamically import OwlCarousel to prevent SSR issues
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const GalleryCarousel = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const options = {
    items: 3,
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 },
    },
  };

  const images = [
    "images/gallery/Thumb/9.jpg",
    "images/gallery/Thumb/10.jpg",
    "images/gallery/Thumb/11.jpg",
    "images/gallery/Thumb/12.jpg",
    "images/gallery/Thumb/17.jpg",
    "images/gallery/Thumb/13.jpg",
    "images/gallery/Thumb/19.jpg",
    "images/gallery/Thumb/20.jpg",
  ];

  return (
    <section className="gallery-section">
      <div className="container">
        <h4 className="text-center" style={{ color: "#4a4a4a" }}>Gallery</h4>
        <p className="text-center">
          Take a whirlwind tour or catch a quick glimpse of what to expect at the most fashionable hotel.
        </p>
        {isClient && (
          <OwlCarousel className="owl-theme" {...options}>
            {images.map((src, index) => (
              <div key={index} className="item text-center">
                <img src={src} alt="Gallery Image" style={{ height: "206px", width: "308px" }} />
              </div>
            ))}
          </OwlCarousel>
        )}
      </div>
    </section>
  );
};

export default GalleryCarousel;
