'use client';

import React, { useEffect} from 'react';

// import Swiper from 'swiper';

import 'swiper/css';

import 'swiper/css/navigation';

import 'swiper/css/pagination';

import Link from "next/link";

import { motion } from "framer-motion";



// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

////import 'bootstrap/dist/css/bootstrap.min.css';



const GurgaonHotelFacilities = ({metah, hcontact}) => {

  // useEffect(() => {

  //   if (typeof window !== 'undefined') {

  //       import('bootstrap/dist/js/bootstrap.bundle.min.js');

  //       }

  //   }, []);

  



  return (

    <>

    <div className="row mb-5">

    <div className="container">     

    <motion.section className="our-offers about-us gurgaon-fac" 

    initial={{ opacity: 0, y: -0 }}

    animate={{ opacity: 1, y: -0}}

    transition={{ duration: 0.6, delay: 0.6 }}

    viewport={{ once: true }}>

      
<div className="container text-center">

   {metah &&
  metah.length > 0 &&
  metah[0] &&
  metah[0].page_heading && (
               <h1 className="global-heading-gurgaon inner-hd">{metah[0].page_heading}</h1>
             )}
  
  {/* <h1 id="gurgaon-hotel" className="global-heading-gurgaon sub-head">Hotel on Sohna Road, Gurgaon</h1> */}

  {metah && metah.length > 0 &&  metah[0] && (
          <p className="content-boxx">  {metah[0].page_description}</p>
  )}

       
      </div>


        <div className="container gurgaon-fac sectiontop">

        

        

        <motion.div className="tab-content"

        

    initial={{ opacity: 0, y: -110 }}

    animate={{ opacity: 1, y: 0}}

    transition={{ duration: 0.6, delay: 0.6 }}

    viewport={{ once: true }}>

            <div className="tab-pane fade show active">

                <div className="special-offers about-us new-rj-block text-center">

                    <div className="container">

                    {hcontact && hcontact.length > 0 && hcontact.map((item, index) => {
  if (!item) return null; // safeguard for null or undefined items
  return (
  <div
    key={item.id}
    className="col-xs-12 no-pad voffset-2 res-no-margin swimming-pool swimming-pool2"
    id={`facility-${index}`}
  >
    <motion.div
      className="room-block"
      initial={{ opacity: 0, y: 80, x: 190 }}
      whileInView={{ opacity: 1, x: 258 }}
      transition={{ duration: 0.9, delay: 0.3 * index }}
    >
                           {item?.video_link && item.video_link !== "-" ? (
                            <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
                            <iframe
                              loading="lazy"
                              title="Gumlet video player"
                              src={`https://play.gumlet.io/embed/${item.video_link}?autoplay=1&loop=1&mute=1&playsinline=1`}
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
                           ) : (
  <div>
    <img
      src={item?.image || "/default-fallback.jpg"}
      alt="Banner"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </div>

)}
      <motion.div
        className="room-main-info facilitycardcontent right-block wow fadeInDown animated swimming-pool-para"
        data-wow-duration="4s"
        style={{
          width: "50%",
          height: "80%",
          visibility: "visible",
        }}
        initial={{ opacity: 0, y: -250, x: -1150 }}
        whileInView={{ opacity: 1, x: -637 }}
        transition={{ duration: 0.9, delay: 0.3 * index }}
      >
        <h3
          className="global-heading-1"
          style={{ marginLeft: "0px", marginTop: "35px" }}
        >
          {item.title}
        </h3>
        <div
          className="text-two text-justify"
          style={{ fontSize: "14px", marginLeft: "0px" }}
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
      </motion.div>
    </motion.div>
  </div>
  );
})}
 


      
                    </div>

                </div>

            </div>



            <div className="tab-pane fade" id="hoften-hotels" role="tabpanel">

                <div className="special-offers about-us new-rj-block text-center mt-5">

                    <div className="row align-items-start m-0 mb-5">

                                <motion.div className="col-lg-5 p-0" 

                                    initial={{ opacity: 0, x: 100 }}

                                    whileInView={{ opacity: 1, x: 0 }}

                                    transition={{ duration: 0.9, delay: 0.9 }}>

                                    <div className="alivaa-album">

                                        <img

                                        src="/images/hoften-offer-3.jpg"

                                        alt="Executive Package"

                                        layout="responsive"

                                        className="img-fluid"

                                        />

                                    </div>

                                </motion.div>

    

                                <motion.div className="col-lg-6 offset-lg-1 p-0 text-start"

                                    initial={{ opacity: 0, x: -100 }}

                                    whileInView={{ opacity: 1, x: 0 }}

                                    transition={{ duration: 0.9, delay: 0.9 }}>

                                    <h2 className="global-heading">Introductory offer</h2>

                                    <ul>

                                        <li>25% off on Best Available Rate</li>

                                        <li>⁠Additional 10% discount for Logged-in users and mobile users</li>

                                        <li>⁠Booking Period : Nov to Mar 2025</li>

                                        <li>⁠Stay Period : Nov to Mar 2025</li>

                                    </ul>

                                    {/* Book Now Button */}

                                    <Link href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y" className="btn book-now-headerr" style={{ borderColor: '#000' }} id="book-now">

                                        Book Now

                                    </Link>

                                </motion.div>

                            </div>

                    </div>

                </div>

            </motion.div>

        </div>

    </motion.section>

                </div>

            </div>
            <br></br>
            <br></br>
            </>
  );

};



export default GurgaonHotelFacilities;