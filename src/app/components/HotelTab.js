'use client';

import { useEffect, useRef } from 'react';

// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { motion } from "framer-motion";

//import 'bootstrap/dist/css/bootstrap.min.css';





const OurOffers = () => {

//   const alivaSwiperRef = useRef(null);

//   const hofenSwiperRef = useRef(null);

  



//   useEffect(() => {

//     if (typeof window !== 'undefined') {

//         import('bootstrap/dist/js/bootstrap.bundle.min.js');

//     if (alivaSwiperRef.current) {

//       new Swiper(alivaSwiperRef.current, {

//         loop: true,

//         slidesPerView: 3,

//         spaceBetween: 10,

//         autoplay: {

//             delay: 3000,

//             disableOnInteraction: false,

//           },

       

//         pagination: false,

//         modules: [Navigation, Pagination, Autoplay],

//       });

//     }



//     if (hofenSwiperRef.current) {

//       new Swiper(hofenSwiperRef.current, {

//         loop: true,

//         slidesPerView: 2,

//         spaceBetween: 10,

//         autoplay: {

//             delay: 3000,

//             disableOnInteraction: false,

//           },

//          pagination: { el: ".swiper-pagination", clickable: true },

//          pagination: false,

//         modules: [Pagination, Autoplay],

//       });

//     }



   

// }

//   }, []);

// useEffect(() => {

//     if (typeof window !== 'undefined') {

//         import('bootstrap/dist/js/bootstrap.bundle.min.js');

//     }

//     }, []);



  return (

 

    <motion.section className="ourbrand our-offers about-us"

    initial={{ opacity: 0, x: -50 }}

    whileInView={{ opacity: 1, x: 0 }}

    transition={{ duration: 0.6, delay: 0.10}}>

        <div className="container">

        <div className="new-rj-block">

          <h3 className="global-heading-about  inner-hd text-center">Our Brands</h3>

        </div>
        <div className="container">
        <ul className="nav nav-tabs1" id="myTab" role="tablist">

        <li className="nav-item1" role="presentation">
             {/* <a href="#Aliva-Hotels" role="tab" aria-controls="Aliva-Hotels" data-toggle="tab">Alivaa Hotels </a> */}
            <button className="nav-link active" id="alivaa-tab" data-bs-toggle="tab" data-bs-target="#aliva" type="button" role="tab">Alivaa Hotels</button>

            </li>
            <li  className="nav-item1">
                {/* <a href="#Hoften-Hotels" aria-controls="Hoften-Hotels" role="tab" data-toggle="tab">Hoften Hotels</a>
                </li> */}
            {/* <li className="nav-item" role="presentation">*/}

            <button className="nav-link" id="hoften-tab" data-bs-toggle="tab" data-bs-target="#hoften" type="button" role="tab">Hoften Hotels</button>

            </li> 

        </ul>

        

        <div className="container">
        <div className="tab-content" id="myTabContent">

            <div className="tab-pane fade show active" id="aliva" role="tabpanel">

               
            <div className="tab-content special-offers about-us new-rj-block text-center">

                <div className="row align-items-start m-0">

                    <div className="col-lg-6 p-0" >

                        {/* <div className="alivaa-pagecontent" > */}

                            <h3 className="global-heading-about nnnn">Alivaa Hotels & Resorts</h3>

                            <p className="voffset-bottom2 text-justify content-boxx rrr text-start" id="ccontent">Located in the heart of Gurgaon, Alivaa Hotels & Resorts offers our guests a perfect blend of modern luxury and impressive service. Whether you are here for business or leisure, we make sure to provide you a peaceful escape while being just minutes away from the bustling city center. The property features elegant rooms along with modern amenities, and personalized services to ensure that your stay is both comfortable and memorable with us. For added facility, indulge in gourmet dining options, or rejuvenate with our spa and wellness offerings.</p>

                        {/* </div> */}

                    </div>

                    <div className="col-lg-6 col-md-6 col-xs-12">

                        {/* <div className="aliva-image"> */}

                            <img src="/images/aboutus/alivaa-facade.jpg" className="custom-img-responsive img-thumbnail alivaa" alt="alivaa-image" />

                        {/* </div> */}

                    </div>

                </div>
                </div>

            </div>

            

            <div className="tab-pane fade" id="hoften" role="tabpanel">

            <div className="tab-content special-offers about-us new-rj-block text-center">

                    <div className="row align-items-start m-0 mb-5">
                    <div className="col-lg-6 col-md-6 col-xs-12">

                        {/* <div className="alivaa-pagecontent"> */}

                            <h3 className="global-heading-about nnnn">Hoften Hotels</h3>

                            <p className='voffset-bottom2 text-justify content-boxx rrr text-start'>Hoften Hotels in Gurugram offers the perfect blend of comfort, quality, and value, making it the ideal choice for both business and leisure travelers. With its contemporary design and modern amenities, Hoften provides a relaxing and convenient stay in one of the most dynamic cities in India. Located near major business districts, shopping malls, and popular attractions, our hotel offers easy access to everything Gurugram has to offer. At Hoften, we are committed to delivering exceptional service at a competitive price, offering you a perfect balance of comfort and convenience for your stay in Gurugram.</p>

                            

                        {/* </div> */}

                    </div>

                    <div className="col-lg-6 col-md-6 col-xs-12">

                        {/* <div className="aliva-image"> */}

                            <img src="/images/aboutus/hoften-facade.webp" className="custom-img-responsive img-thumbnail hoften" alt="hoften-image" />

                        {/* </div> */}

                    </div>

                </div>

                </div>
            </div>
            </div>

        </div>
        </div>
        </div>

        {/* </div> */}

    </motion.section>

  );

};



export default OurOffers;