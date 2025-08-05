"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const OurBrands = () => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      // Initialize navigation after component is mounted
      swiperRef.current.swiper.params.navigation.prevEl = prevButtonRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextButtonRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <motion.section
      className="our-brands experience-section offer_sec about-us new-our-brands up-exp-sec"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.12 }}
    >
      <div className="container">
        <div className="new-rj-block mt-5">
          <h2 className="about-us text-center mt-5">Our Brands</h2>
        </div>
        <div className="row">
          <div className="col-md-12 position-relative logo-bolck">
            <Swiper
              ref={swiperRef}
              loop={true}
              spaceBetween={10}
              slidesPerView={1}
              modules={[Navigation]}
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="new-bg-block">
                  <div className="inner alivaa-bg">
                    <p className="category-image">
                     <Image height={200} width={200} src="/images/alivaa-logo1.webp" className="our-brand-image" alt="Alivaa Logo" />
                    </p>
                  </div>
                  <div className="brand-new-content">
                    <p style={{ fontSize: "13px", fontFamily: "VERDANA" }}>
                    Alivaa Hotels & Resorts is a premium hotel that redefines the art of hospitality. We are a Luxury, Fashion, and Lifestyle Brand that offers an unmatched luxury, comfort, and exceptional service to its guests. Our rooms are well designed with elegance and sophistication and equipped with modern amenities keeping your needs in mind. We provide the perfect escape for both business and leisure travelers.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className="new-bg-block">
                  <div className="inner hoften-bg">
                    <p className="category-image">
                     <Image height={200} width={200} src="/images/hoften-logo1.png" className="our-brand-image" alt="Hoften Logo" />
                    </p>
                  </div>
                  <div className="brand-new-content">
                    <p style={{ fontSize: "13px", fontFamily: "VERDANA" }}>
                      The Hoften is a practical, mid-scale hotel brand created for travelers who appreciate clean design, essential comforts and everyday convenience. As a part of the Alivaa Group, it delivers a reliable stay without unnecessary frills—just well-designed spaces, consistent service, and a price point that makes sense.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

                            {/* Slide 3 */}
              <SwiperSlide>
                <div className="new-bg-block">
                  <div className="inner alivaa-bg">
                    <p className="category-image">
                     <Image height={200} width={200} src="/images/xenius.png" className="our-brand-image" alt="xenius Logo" />
                    </p>
                  </div>
                  <div className="brand-new-content">
                    <p style={{ fontSize: "13px", fontFamily: "VERDANA" }}>
                      Xenious Hotels & Resorts—inspired by the Greek word “Xenios” meaning warmth and care—offers a smart, welcoming stay for young travellers and professionals. With over 11 years of expertise in hotel management and consulting, Xenious Hotels promises comfort while exceeding guest expectations. From business-friendly hotels near city hubs to elegant luxury stays, eco-friendly resorts, and spiritual destination getaways, every Xenious property blends comfort, convenience, and thoughtful service. Positioned in the mid-market segment, we focus on quality, consistency and modern hospitality—we aim to make your every stay from good to great.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              
            </Swiper>

            {/* ✅ Navigation Buttons (Positioned at Bottom-Right) */}
            <div className="swiper-nav">
              <button className="swiper-button-prev custom-swiper-button" ref={prevButtonRef}></button>
              <button className="swiper-button-next custom-swiper-button" ref={nextButtonRef}></button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurBrands;
