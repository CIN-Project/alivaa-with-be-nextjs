'use client';

import React, { useEffect} from 'react';

// import Swiper from 'swiper';

import 'swiper/css';

import 'swiper/css/navigation';

import 'swiper/css/pagination';


import { motion } from "framer-motion";



// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// //import 'bootstrap/dist/css/bootstrap.min.css';

// dynamic(() => import('bootstrap/dist/js/bootstrap.bundle.min.js'), { ssr: false });



const HotelAttractions = ({metah, hotelAttraction}) => {

//   useEffect(() => {

//     if (typeof window !== 'undefined') {

//         import('bootstrap/dist/js/bootstrap.bundle.min.js');

//         }

//     }, []);

  



  return (

    

    <motion.section className="our-offers mb-5 about-us about-us_attract" >

       <motion.div className="container mt-5 gurgaon-attrac" style={{width:"90%"}} 

          initial={{ opacity: 0, y: 0 }}

          animate={{ opacity: 1, y: 0}}

          transition={{ duration: 0.6, delay: 0.6 }}

          viewport={{ once: true }}>

        <div className="new-rj-block " style={{textAlign:"center"}}>
  {metah.length > 0 && metah[0]?.page_heading && (
          <h3 className="global-heading inner-hd gurgaon-attrac text-center mtn-at1">{metah[0].page_heading}</h3>
        )}

         {metah.length > 0 && metah[0]?.page_description && (
          <p
            className="content-boxx gurgaon-attrac"
            dangerouslySetInnerHTML={{ __html: metah[0].page_description }}
          />
        )}

         

        </div>

        

        <div className="tab-content mt-3">

            <div className="tab-pane fade show active">

                <div className="special-offers about-us new-rj-block text-center mt-5">

<div className="container">
  {hotelAttraction?.map((item, index) => {
    const isEven = index % 2 === 0;

    return (
      <div
        key={item.id}
        className={`col-xs-12 no-pad voffset-2 res-no-margin ${
          index === 0
            ? "gururaon-attrac-worldmark-gurgaon"
            : index === 1
            ? "swimming-pool"
            : index === 2
            ? "swimming-pool-attrac"
            : "electric-vehicle-attrac mb-5 pb-5"
        }`}
      >
        <motion.div
          className="room-block"
          initial={{ opacity: 0, y: 50, x: isEven ? -450 : 350 }}
          whileInView={{ opacity: 1, y: 50, x: isEven ? -200 : 230 }}
          transition={{ duration: 2 }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="custom-img-responsive img-thumbnail wow fadeInUp animated"
            style={{
              width: "60%",
              height: "130%",
              marginLeft: isEven ? "-20px" : "-70px",
              visibility: "visible",
              animationDuration: "4s",
            }}
          />

          <motion.div
            className="room-main-info right-block wow fadeInDown animated gymnasuim-para"
            style={{
              width: "50%",
              height: "80%",
              visibility: "visible",
              animationDuration: "6s",
            }}
            initial={{
              opacity: 0,
              y: -250,
              x: isEven ? 850 : -1150,
            }}
            whileInView={{
              opacity: 1,
              y: -250,
              x: isEven ? 200 : -750,
            }}
            transition={{ duration: 2 }}
          >
            <h3
              className="global-heading-1"
              style={{ marginLeft: "30px", marginTop: "35px" }}
            >
              {item.title}
            </h3>
            <p
              className="text-two text-justify"
              style={{ fontSize: "14px", marginLeft: "30px" }}
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></p>
          </motion.div>
        </motion.div>
      </div>
    );
  })}
</div>
                </div>

            </div>



            

            </div>
            <br></br>
            
        </motion.div>

    </motion.section>

  );

};



export default HotelAttractions;