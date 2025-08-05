"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import ExperienceSlider from "app/components/ExperienceSlider";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Roomshitesaliva from "app/components/RoomSuitsAliva";
import GallerySection from "./GallerySectionOverview";
// import "../../gurgaonhotel.css";
import { useEffect } from "react";
import { motion } from "framer-motion";

import GurgaonHotelExtended from "app/components/GurgaonHotelExtended";


import Link from 'next/link';

import { useState, useRef } from "react";

import Image from 'next/image';

import 'bootstrap/dist/css/bootstrap.min.css';



// import Image from "next/image";

import "swiper/css";

import "swiper/css/navigation";



import HeaderAlivaa from "app/components/HeaderAlivaa";


import NavbarAliva from "app/components/NavbarAliva";

import BookNowForm from "app/booking-engine-widget/BookNowForm";

export default function HotelOverviewClient({ hotelData, brand_slug, hotel_slug }) {
const [isExpanded, setIsExpanded] = useState(false);

    const offersSwiperRef = useRef(null);

    const facilitiesSwiperRef = useRef(null);


    if (offersSwiperRef.current) {

        new Swiper(offersSwiperRef.current, {

            loop: true,

            slidesPerView: 3,

            spaceBetween: 5,

            // responsive: true,

            breakpoints: {

                320: { slidesPerView: 1 }, // 1 slide for small screens

                480: { slidesPerView: 1 }, // 1 slide for mobile

                768: { slidesPerView: 2 }, // 2 slides for tablets

                1024: { slidesPerView: 3 }, // 3 slides for larger screens

            },

            autoplay: {

                delay: 3000,

                disableOnInteraction: false,

            },



            pagination: false,

            modules: [Navigation, Pagination, Autoplay],

        });

    }

    if (facilitiesSwiperRef.current) {

        new Swiper(facilitiesSwiperRef.current, {

            loop: true,

            slidesPerView: 3,

            spaceBetween: 5,

            breakpoints: {

                320: { slidesPerView: 1 }, // 1 slide for small screens

                480: { slidesPerView: 1 }, // 1 slide for mobile

                768: { slidesPerView: 2 }, // 2 slides for tablets

                1024: { slidesPerView: 3 }, // 3 slides for larger screens

            },

            autoplay: {

                delay: 3000,

                disableOnInteraction: false,

            },

            pagination: false,

            modules: [Navigation, Pagination, Autoplay],

        });

    }



const {
  hotel_banner_slider: bannerSlider,
  hotels: hotelList,
  rooms_n_suites: roomSuites,
  hotel_restaurants: restaurants,
  hotel_offers: offers,
  hotel_faqs: faqs,
  near_by_hotel_data: nearbyHotels,
  hotel_testimonials: testimonials,
  hotel_amenities: amenities,
  hotel_amenitiesall: allAmenities,
  hotel_facilities: facilities,
  gallery:gallerydata,
  things_to_dos_culture_category: cultureThings,
  things_to_dos_healthcare_category: healthcareThings,
  things_to_dos_landmark_category: landmarkThings,
  things_to_dos_shopping_category: shoppingThings,
  hotel_event: events,
  hotel_meta: meta,
} = hotelData;

 // on load function call for loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (

        <>
            <section className='home-hdr-hght'>

                <NavbarAliva />

                <HeaderAlivaa />


            </section>

<section className="banner-section">
 {bannerSlider &&
  bannerSlider.length > 0 &&
  bannerSlider[0] && (
    <div className="banner_img_room myvideo pt-0 web-video desk-video" style={{ width: '93%', height: '70vh' }}>
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9' }}>
        {bannerSlider[0].slider_video && bannerSlider[0].slider_video !== "-" ? (
          <iframe
            loading="lazy"
            title="Gumlet video player"
            src={`https://play.gumlet.io/embed/${bannerSlider[0].slider_video}?autoplay=1&loop=1&mute=1&playsinline=1`}
            style={{
              border: "none",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            allow="autoplay; accelerometer; gyroscope; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          ></iframe>
        ) : bannerSlider[0].banner_image ? (
          <Image
            src={bannerSlider[0].banner_image}
            alt={bannerSlider[0].title || "Banner Image"}
            width={1920}
            height={1080}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "12px",
            }}
          />
        ) : null}
      </div>
    </div>
)}



                <div className="social-icon-banner" >
                    <a className="btn btn-social" href="https://www.facebook.com/profile.php?id=61560140841449&amp;mibextid=ZbWKwL" target="_blank">
                        <img src="/images/fb-icon.svg" height="25" width="25" alt="social-icon" className="social-icon" />
                    </a>

                    <a className="btn btn-social" href="https://www.instagram.com/alivaahotels/" target="_blank">
                        <img src="/images/instagram-icon.svg" height="25" width="25" alt="social-icon" className="social-icon" />
                    </a>

                    <a className="btn btn-social" href="https://www.linkedin.com/company/alivaa-hotels-resorts/" target="_blank">
                        <img src="/images/linkedin-icon.svg" height="25" width="25" alt="social-icon" className="social-icon" />
                    </a>

                </div>
                <span className="updown-arrow">
                    <img src="../../images/down-arrow.png" />
                </span>
              

            </section>


            <section className="booking-form-section">

                <BookNowForm />

            </section>






            <section className="your-break about-us sec-padding">


                <div className="container">


                    <div className="search-content about-us new-rj-block text-center">


    {hotelList &&
                hotelList.length && meta[0] &&
                hotelList.map((val, index) => (
                 
                        <div className="container gurgaon-hotel" key={index}>
                            <h2 id="gurgaon-hotel" className="global-heading-gurgaon inner-hd pt-3" >{val.hotel_name}</h2>

                            <h1 id="gurgaon-hotel" className="global-heading-gurgaon sub-head">{val.sub_title}</h1>

                           <div className="content-boxx hotel_rd_more">
  <div className="content-boxx hotel_rd_more">

    <div dangerouslySetInnerHTML={{ __html: val.short_desc }}></div>

    {isExpanded && (
      <GurgaonHotelExtended homeDescription={val.home_description} />
    )}

    <motion.button
      className="read-more-btnn rd_more text-blue-600 underline ml-2"
      onClick={() => setIsExpanded(!isExpanded)}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      {isExpanded ? "Read less" : "Read more"}
    </motion.button>

  </div>
</div>

                        </div>
))}

                    </div>




        <Roomshitesaliva roomSuites={roomSuites} hotelList={hotelList} brand_slug={brand_slug} hotel_slug={hotel_slug} />
                    <section className="your-break pt-0 exp1 d-none">
                        <ExperienceSlider />
                    </section>
                    {/* <HotelTab/> */}


                
                        <motion.section className="our-offers about-us alivaa-new-offers-see"

                            initial={{ opacity: 0, y: -150 }}

                            animate={{ opacity: 1, x: 0, y: -100 }}

                            transition={{ duration: 0.6, delay: 0.6 }}>

                            <div className="container">


{hotelList && hotelList.length > 0 && (
                                <h4 className="global-heading-gurgaon inner-hd text-center">{hotelList[0].offers_heading}</h4>)}

{hotelList && hotelList.length > 0 && (
                                <p className="content-boxx text-center">
                                   {hotelList[0].offers_content}
                                </p>
)}


                                <div className="tab-content" id="myTabContent"

                                    initial={{ opacity: 0, y: -150 }}

                                    animate={{ opacity: 1, x: 0, y: 0 }}

                                    transition={{ duration: 0.6, delay: 0.6 }}>



                                    <div className="tab-pane fade show active overview-alivaa-offer-slider" id="all" role="tabpanel">

                                        <Swiper
                                            modules={[Navigation]}
                                            navigation
                                            loop={true}
                                            spaceBetween={10}
                                            slidesPerView={1}
                                            breakpoints={{
                                                600: { slidesPerView: 2 },
                                                900: { slidesPerView: 3 },
                                                1200: { slidesPerView: 3 },
                                            }}>
                                            <div className="swiper-wrapper justify-content-center" >
                                                {offers &&
                offers.length &&
                offers.map((val, index) => (

                                                <SwiperSlide key={index}>
                                                    <img src={val?.image} className="img-fluid w-100 w-100 img2" alt="Alivaa Images" />
                                                    <div className="text-center">
                                                        <div className="offers-text-home">
                                                            <h6 className="offer-name"> {val.title}</h6>
                                                            <p className="offer-description">
                                                                {/* Day Use Room 10 AM to 6 PM */}
                                                                {val.description}
                                                            </p>
                                                        </div>
                                                       <Link href={`/${brand_slug}/${hotel_slug}/offers`}className="btn btn-primary voffset-2 cls-relax-offer">View Offer</Link>
                                                    </div>
                                                </SwiperSlide>

                                                  ))}

                                               
                                            </div>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>

                        </motion.section>
                       

                        <motion.section className="rooms-info-block gurgaon-hotel-facilities mt-0 pt-0"

                            initial={{ opacity: 0, x: -50 }}

                            whileInView={{ opacity: 1, y: -10, x: 0 }}

                            transition={{ duration: 0.6, delay: 0.6 }}>

                            <div className="container mb-0">

                                <div className="col-lg-12 no-pad">

                                    <div className="col-lg-12 text-center wow fadeInDown animated" data-wow-duration="4s" style={{ visibility: "visible", WebkitAnimationDuration: "4s", MozAnimationDuration: "4s", animationDuration: "4s" }}>

{hotelList &&
  hotelList.length > 0 &&
  hotelList[0].facilities_heading && (
    <h4 className="global-heading-gurgaon inner-hd text-center mt-0 pt-0">
      {hotelList[0].facilities_heading}
    </h4>
)}

                                    </div>

                                    <div className="col-lg-12 text-center wow fadeInDown animated" data-wow-duration="4s" style={{ visibility: "visible", WebkitAnimationDuration: "4s", MozAnimationDuration: "4s", animationDuration: "4s" }}>
{hotelList && hotelList.length > 0 && ( 
                                        <p className="content-boxx text-center mb-5">

                                           {hotelList[0].facilities_content}

                                        </p>
)}
                                    </div>

                                </div>



                                <div className="tab-content" >



                                    <div className="tab-pane fade show active">

                                        <div className="offers-slider">

                                            <Swiper

                                                modules={[Navigation]}

                                                navigation

                                                loop={true}

                                                spaceBetween={10}

                                                slidesPerView={1}

                                                breakpoints={{

                                                    600: { slidesPerView: 2 },

                                                    900: { slidesPerView: 3 },

                                                    1200: { slidesPerView: 3 },

                                                }}>

{facilities && facilities.length > 0 && facilities.map((val, index) => (
  <SwiperSlide key={index}>
    {/* Video if video_link exists and is not "-" */}
    {val.video_link && val.video_link !== "-" ? (
      <div
        className="banner_img_room2 myvideo pt-0 web-video desk-video"
        style={{
          height: "35vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <iframe
          loading="lazy"
          title={`Facility video - ${val.title}`}
          src={`https://play.gumlet.io/embed/${val.video_link}?background=true&autoplay=true&loop=true&disableControls=true`}
          style={{
            border: "none",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          allow="autoplay; accelerometer; gyroscope; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    ) : val.image ? (
      // Image fallback if no video or video_link is "-"
      <Image
        src={val.image}
        alt={val.title || "Facility Image"}
        width={500}
        height={600}
        className="w-100 banner_img_room2"
        style={{ objectFit: 'cover' }}
      />
    ) : null}

    <div className="overlay"></div>

    <div className="icon-box icon-box-body">
      <div className="icon-box-button">
        <div className="btn-wrapper icon-position">
          <a
            href={`/${val.title?.toLowerCase().replace(/\s+/g, '-')}`}
            className="icon-box-link view1-info"
          >
            {val.title}
          </a>
        </div>
      </div>
    </div>
  </SwiperSlide>
))}




                                            </Swiper>



                                        </div>

                                    </div>

                                </div>



                            </div>

                        </motion.section>


  <GallerySection gallery={gallerydata} hotelList={hotelList}/>




                     <motion.section className="gallery-section mb-tst gurgaon-hotel-testimonials" 

                    initial={{ opacity: 0, y: -350 }}

                    animate={{ opacity: 1, x: 0 ,y: -200}}

                    transition={{ duration: 0.6, delay: 0.6 }}>


                            <article className="container mb-5">

                                <div className="col-lg-12 text-center wow fadeInDown animated mb-5" data-wow-duration="4s" style={{ visibility: "visible", WebkitAnimationDuration: "4s", MozAnimationDuration: "4s", animationDuration: "4s" }}>

{/* 
    {hotelList && hotelList.length > 0 && (
                                <h4 className="global-heading-gurgaon inner-hd text-center">{hotelList[0].gallery_heading}</h4>)} */}


                                    <h4 className="global-heading-gurgaon inner-hd text-center" style={{ color: "#4a4a4a" }}>Testimonials</h4>

                                </div>



                                <div className="col-lg-12 no-padd gal-slider1 mb-5">

                                    <Swiper

                                        modules={[Navigation]}

                                        navigation

                                        loop={true}

                                        spaceBetween={10}

                                        slidesPerView={1}

                                        breakpoints={{

                                            600: { slidesPerView: 2 },

                                            900: { slidesPerView: 3 },

                                            1200: { slidesPerView: 3 },

                                        }}

                                    >

{testimonials &&
                testimonials.length &&
                testimonials.map((val, index) => (
                                        <SwiperSlide key={index}>

                                            <div className="test-item">

                                                <span>

                                                  {val?.rating_image && (
  <Image
    src={val.rating_image}
    alt="Rating"
    width={100}
    height={20}
    className="rating-stars"
    style={{ objectFit: 'contain' }}
  />
)}
                                                </span>

                                                <p>

                                                    {val.description}

                                                </p>

 <div className="testimonials_inner_profile">
     {val?.image && (
<Image
    src={val?.image}
    alt="Rating"
    width={50} // Adjust width as needed
    height={50} // Adjust height as needed
    className="rating-stars"
    style={{ objectFit: 'contain' }}
  />
     )}
</div>

                                            </div>

                                        </SwiperSlide>

                ))}

                                    </Swiper>

                                </div>

                            </article>

                        </motion.section>

                  

                </div>


            </section>

        </>
  );
}
