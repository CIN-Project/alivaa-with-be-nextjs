'use client';

import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ExperienceSlider = () => {
  const swiperRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ title: "", src: "", alt: "" });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      new Swiper(swiperRef.current, {
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerView: "auto",
        effect: "coverflow",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: { slidesPerView: 1, spaceBetween: 10 },
          600: { slidesPerView: 2, spaceBetween: 20 },
          1000: { slidesPerView: 2, spaceBetween: 30 },
          1200: { slidesPerView: 2, spaceBetween: 50 },
        },
        modules: [Navigation, EffectCoverflow],
      });
    }
  }, []);

  const experiences = [
    { src: "/images/experience-h-1.webp", alt: "Heritage Transport Museum", title: "Heritage Transport Museum", mdlhd: "Explore India’s Transport Heritage", mdltext: "Heritage Transport Museum in Gurgaon showcases India’s rich transport history with vintage cars, locomotives, aircraft, and more. With interactive exhibits and rare artifacts, it brings alive the evolution of travel. A must-visit destination for history and innovation enthusiasts alike!" },
    { src: "/images/cuberhub.jpg", alt: "Cyberhub", title: "Cyberhub", mdlhd: "Experience the Pulse of Gurgaon at Cyber Hub", mdltext: "Cyber Hub is Gurgaon’s ultimate destination for dining, entertainment, and nightlife. With trendy cafes, gourmet restaurants, and live events, it’s a vibrant hotspot that promises unforgettable experiences. Perfect for food lovers, party-goers, and families alike!" },
    { src: "/images/ambiencemall.jpg", alt: "Ambience Mall", title: "Ambience Mall", mdlhd: "Shop, Dine, and Unwind at Ambience Mall", mdltext: "Ambience Mall, Gurgaon, offers the perfect blend of luxury shopping, diverse dining, and endless entertainment. With top global brands, gourmet restaurants, and exciting activities, it’s a one-stop destination for an unparalleled lifestyle experience." },
    { src: "/images/damadamalake.jpg", alt: "Damdama Lake", title: "Damdama Lake", mdlhd: "Escape to the Serenity of Damdama Lake", mdltext: "Damdama Lake, nestled amidst the Aravalli Hills, is a tranquil getaway perfect for nature lovers and adventure enthusiasts. Enjoy boating, trekking, and birdwatching, or simply relax by the scenic waters for a refreshing retreat from city life." },
    { src: "/images/gokarting.jpg", alt: "F9 Go Karting", title: "F9 Go Karting", mdlhd: "Feel the Thrill at F9 Go Karting", mdltext: "F9 Go Karting in Gurgaon is the ultimate destination for adrenaline junkies. Experience high-speed fun on a professionally designed track with thrilling turns and competitive races. Perfect for friends, families, and corporate outings!" },
  ];

  const handleReadMore = (item) => {
    setModalData(item);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <section className="experience-section about-us">
      <div className="new-rj-block g-0">
        <h2 className="about-us text-center">Experiences</h2>
      </div>
{/* 
      <h3 className="absolute-experience">EXPERIENCES</h3> */}

      <motion.div
        className="swiper experience-slider"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        ref={swiperRef}
      >
        <div className="swiper-wrapper">
          {experiences.map((item, index) => (
            <div className="swiper-slide" key={index}>
              <Image src={item.src} alt={item.alt} height={300} width={300} className="slide-image" />
              <div className="inner">
                <button className="linkmodal" onClick={() => handleReadMore(item)}>Read more</button>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="swiper-nav">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </motion.div>

      {/* Modal */}
      {showModal && (
        <div className="modal-backdrop expmodal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <h4>{modalData.mdlhd}</h4>          
            <p>{modalData.mdltext}</p>
          </div>
        </div>
      )}
    
    </section>
  );
};

export default ExperienceSlider;
