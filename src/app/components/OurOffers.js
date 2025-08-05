'use client';
import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from "framer-motion";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

const offerData = {
    "all": [
        {
            "image": "/offers/day-use-offer-alivaa-ggn1.jpg",
            "title": "Day Use Rooms",
            "description": "Day Use Room 10 AM to 6 PM",
            "link": "/alivaa/gurgaon-hotels/offers"
        },
        {
            "image": "/offers/limited-time-offer-alivaa-lns1.png",
            "title": "Limited Time Offer",
            "description": "Up to 50% Off Exclusive Deals",
            "link": "/alivaa/lansdowne/offers"
        },
        {
            "image": "/offers/limited-time-offer-alivaa-mc1.png",
            "title": "Limited Time Offer",
            "description": "Up to 50% Off Exclusive Deals",
            "link": "/alivaa/mcleodganj/offers"
        },
        {
            "image": "/offers/limited-time-offer-alivaa-ggn1.png",
            "title": "Limited Time Offer",
            "description": "Up to 50% Off Exclusive Deals",
            "link": "/alivaa/gurgaon-hotels/offers"
        },
        {
            "image": "/offers/day-use-offer-hoften-ggn1.jpg",
            "title": "Day Use Rooms",
            "description": "Day Use Room 10 AM to 6 PM",
            "link": "/hoften/hoften-sukh-vasa-gurugram/offers"
        }
    ],
    "alivaa-gurugram": [
        {
            "image": "/offers/limited-time-offer-alivaa-ggn1.png",
            "title": "Limited Time Offer",
            "description": "Up to 50% Off Exclusive Deals",
            "link": "/alivaa/gurgaon-hotels/offers"
        },
        {
            "image": "/offers/day-use-offer-alivaa-ggn1.jpg",
            "title": "Day Use Rooms",
            "description": "Day Use Room 10 AM to 6 PM",
            "link": "/alivaa/gurgaon-hotels/offers"
        }
    ],
    "alivaa-mcleodganj": [
        {
            "image": "/offers/limited-time-offer-alivaa-mc1.png",
            "title": "Limited Time Offer",
            "description": "Up to 50% Off Exclusive Deals",
            "link": "/alivaa/mcleodganj/offers"
        }
    ],
    "hoften-gurugram": [
        {
            "image": "/offers/day-use-offer-hoften-ggn1.jpg",
            "title": "Day Use Rooms",
            "description": "Day Use Room 10 AM to 6 PM",
            "link": "/hoften/hoften-sukh-vasa-gurugram/offers"
        }
    ],
    "alivaa-lansdowne": [
        {
            "image": "/offers/limited-time-offer-alivaa-lns1.png",
            "title": "Limited Time Offer",
            "description": "Up to 50% Off Exclusive Deals",
            "link": "/alivaa/lansdowne/offers"
        }
    ]
};

const OurOffers = () => {
    const swiperRefs = {
        all: useRef(null),
        'alivaa-gurugram': useRef(null),
        'alivaa-mcleodganj': useRef(null),
        'alivaa-lansdowne': useRef(null),
        'hoften-gurugram': useRef(null)
        
    };

    useEffect(() => {
        Object.entries(swiperRefs).forEach(([key, ref]) => {
            if (ref.current) {
                new Swiper(ref.current, {
                    loop: true,
                    slidesPerView: 3,
                    spaceBetween: 5,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    breakpoints: {
                        0: { slidesPerView: 1, spaceBetween: 0 },
                        300: { slidesPerView: 1, spaceBetween: 0 },
                        450: { slidesPerView: 1, spaceBetween: 0 },
                        600: { slidesPerView: 1, spaceBetween: 0 },
                        800: { slidesPerView: 2, spaceBetween: 0 },
                        1000: { slidesPerView: key === 'all' ? 3 : 2, spaceBetween: 0 },
                        1200: { slidesPerView: 3, spaceBetween: 0 },
                    },
                    pagination: false,
                    modules: [Navigation, Pagination, Autoplay],
                });
            }
        });
    }, []);

    return (
        <motion.section 
            className="our-offers about-us home-our-offers"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}>
            <div className="container">
                <div className="new-rj-block mt-5">
                    <h2 className="about-us text-center mt-5">Our Offers</h2>
                </div>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    {Object.keys(offerData).map((category, index) => (
                        <li className="nav-item" role="presentation" key={category}>
                            <button 
                                className={`nav-link ${index === 0 ? 'active' : ''}`}
                                id={`${category}-tab`}
                                data-bs-toggle="tab"
                                data-bs-target={`#${category}`}
                                type="button"
                                role="tab"
                            >
                                {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(', ')}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="tab-content mt-3">
                    {Object.entries(offerData).map(([category, offers], index) => (
                        <div 
                            key={category}
                            className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
                            id={category}
                            role="tabpanel"
                        >
                            <div className="swiper offers-slider" ref={swiperRefs[category]}>
                                <div className="swiper-wrapper abc">
                                    {offers.map((offer, i) => (
                                        <div className="swiper-slide" key={i}>
                                            <Image height={300} width={300} src={offer.image} className="img-fluid" alt="Offer Image" />
                                            <div className="text-center">
                                                <div className="offers-text-home">
                                                    <h4 className="offer-name mt-3">{offer.title}</h4>
                                                    <p className="offer-description" style={{ fontSize: "14px", color: "#3b3b3b", fontFamily: 'VERDANA' }}>
                                                        {offer.description}
                                                    </p>
                                                </div>
                                                <Link href={offer.link} className="btn btn-primary voffset-2 cls-relax-offer">View Offer</Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default OurOffers;