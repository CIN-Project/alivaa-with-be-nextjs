'use client'; 

import { motion } from "framer-motion";

import BookingFormInner from "./BookingFormInner";



const GurgaonAccommodation = ()=>{
    return (

        <>
    <motion.section className="about-us accomodation-main gurgaon-dinign-inner sectiontop acco-main"
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: -10 }}
    transition={{ duration: 2 }}>
    <article className="container acco-main-article text-center" style={{marginBottom:"-250px"}}>

      <div className="col-xs-12 no-pad voffset-20 res-no-margin outer-room-info-block gurgaon-suite">

        <motion.div className="room-block" id="view1-info" 

        initial={{ opacity: 0, y: -350 }}

                whileInView={{ opacity: 1, y: -250 }}

                transition={{ duration: 0.6 }}

                viewport={{ once: true }}>


<video autoPlay loop muted playsInline className="w-100 primary-radius">
              <source src="/images/rooms/FamilyRoom.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

          {/* <img src="images/rooms/suite-new-image.webp" alt="Accommodation in Gurgaon" className="custom-img-responsive img-thumbnail  wow fadeInUp animated" data-wow-duration="4s" style={{visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}/> */}

            

          <motion.div className="room-main-info-n  wow fadeInDown animated accc-suite" data-wow-duration="4s" style={{visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}

          initial={{ opacity: 0, y: -150 }}

          whileInView={{ opacity: 1, y: -50 }}

          transition={{ duration: 2 }}

          viewport={{ once: true }}>

            <h6 className="global-heading-1">

              Suite

            </h6>

            <p className="color-grey text-justify">

              Enjoy the utmost comfort with cutting-edge amenities, and relax in your own balcony or sit-out patio with tranquil views.  Your experience will be elevated by our exceptional service and luxurious surroundings, with every detail carefully crafted to create a truly remarkable retreat.

            </p>

            <p className="color-grey"><strong><b>550 sq ft/View Varies</b></strong></p>

            <details>

              <summary>Read More</summary>

              <ul className="service-listing2">

              <li>

                  Premium, high-speed Internet access 

              </li>

              <li>

                50-inch smart TV

              </li>

              <li>

                Air Conditioner 

              </li>

              <li>

                In-room laptop-sized electronic safe

              </li>

              <li>

                Deluxe bath amenities and a hair dryer (on request)

              </li>

              <li>

                Coffee maker 

              </li>

              <li>

                Iron and ironing boards (on request)

              </li>

              <li>

                Generous workstation with ergonomic chair 

              </li>

              <li>

                Multimedia connections

              </li>

              <li>

                Mini bar

              </li>

            </ul>

            </details>

            <a href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&amp;JDRN=Y" className="btn btn-primary voffset-1">Book Now</a>

          </motion.div>

        </motion.div>

      </div> 

      <div className="col-xs-12 no-pad voffset-20 res-no-margin outer-room-info-block studio-room">

        <motion.div className="room-block" id="view2-info" 

        initial={{ opacity: 0, y: -350 }}

                whileInView={{ opacity: 1, y: -300 }}

                transition={{ duration: 0.6 }}

                viewport={{ once: true }}>

          
<video autoPlay loop muted playsInline className="w-100 primary-radius">
              <source src="/images/rooms/StudioRoom.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          {/* <img src="images/rooms/studio-room-1.webp" alt="Accommodation in Gurgaon" className="custom-img-responsive img-thumbnail  wow fadeInUp animated" data-wow-duration="4s" style={{visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}/> */}

          <motion.div className="room-main-info right-block wow fadeInDown animated" data-wow-duration="4s" style={{visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}

          initial={{ opacity: 0, y: -150 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 2 }}

          viewport={{ once: true }}>

          <h6 className="global-heading-1">

              Studio Room

            </h6>

            <p className="color-grey text-align-justify">

              This elegantly designed space features all modern amenities, including a private balcony/ sit-out area, exquisite wall painting and a fully-equipped kitchenette with a dishwasher, induction, microwave, chimney, and high-end cutlery. Perfect for long stays, this room is perfect for expats, medical treatment visitors, and interns, offering luxury, comfort, and all essential amenities for extended stays. 

            </p>

            <p className="color-grey"><strong><b>325 sq ft./View Varies</b></strong></p>

            <details>

              

                <ul className="service-listing2">

                  <p className="mt-3"><b>IN-ROOM AMENITIES</b></p>

                  <li>

                    Fully-equipped kitchenette (Dishwasher, Induction, Microwave)

                  </li>

                 

                  <li>

                    Premium, high-speed Internet access

                  </li>

                  <li>

                   42-inch smart TV

                  </li>

                  <li>

                    Air Conditioner

                  </li>

                  <li>

                    In-room laptop-sized electronic safe

                  </li>

                  <li>

                   Deluxe bath amenities and a hair dryer (on request)

                  </li>

                  <li>

                    Coffee maker

                  </li>

                  <li>

                    Iron and ironing boards (on request)

                  </li>

                  <li>

                   Generous workstation with ergonomic chair

                  </li>

                  <li>

                    Multimedia connections

                  </li>

                  <li>

                    Mini bar

                  </li>

                </ul>

                <summary>Read More</summary>

              </details>

            <a href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&amp;JDRN=Y" className="btn btn-primary voffset-1">Book Now</a>

          </motion.div>

        </motion.div>

      </div>

      <div className="col-xs-12 no-pad voffset-20 res-no-margin outer-room-info-block deluxe-room">

        <motion.div className="room-block" id="view3-info"

        initial={{ opacity: 0, y: -250 }}

        whileInView={{ opacity: 1, y: -300 }}

        transition={{ duration: 2 }}

        viewport={{ once: true }}>
 <video autoPlay loop muted playsInline className="w-100 primary-radius">
              <source src="/images/rooms/DeluxeRoom.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          
{/* 
          <img src="images/rooms/deluxe-room-1.webp" alt="Accommodation in Gurgaon" className="custom-img-responsive img-thumbnail  wow fadeInUp animated studio-room" data-wow-duration="4s" style={{visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}/> */}

          <motion.div className="room-main-info wow fadeInDown animated studio-room" data-wow-duration="4s" style={{visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}

          initial={{ opacity: 0, y: -250 }}

          whileInView={{ opacity: 1, y: -50 }}

          transition={{ duration: 2 }}

          viewport={{ once: true }}>

          <h6 className="global-heading-1">

              Deluxe Room

            </h6>

            <p className="color-grey text-justify">

              Experience the epitome of luxury in our Deluxe Rooms, where each room features plush king-sized or twin beds, a private balcony or sit-out area, and all the modern amenities. Immerse yourself in comfort, designed for the discerning traveller seeking an exceptional stay.

            </p>

            <p className="color-grey"><strong><b>325 sq ft./View Varies</b></strong></p>



            <details>

              <summary>Read More</summary>

                <ul className="service-listing2">

                  <li>

                    Premium, high-speed Internet access 

                  </li>

                  <li>

                    42-inch smart TV

                  </li>

                  <li>

                    Air Conditioner 

                  </li>

                  <li>

                    In-room laptop-sized electronic safe

                  </li>

                  <li>

                    Deluxe bath amenities and a hair dryer (on request)

                  </li>

                  <li>

                    Coffee maker 

                  </li>

                  <li>

                    Iron and ironing boards (on request)

                  </li>

                  <li>

                    Generous workstation with ergonomic chair 

                  </li>

                  <li>

                    Multimedia connections

                  </li>

                  <li>

                    Mini bar

                  </li>

                </ul>

              </details>

            <a href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&amp;JDRN=Y" className="btn btn-primary voffset-1">Book Now</a>

          </motion.div>

        </motion.div>

      </div>

      <div className="col-xs-12 no-pad voffset-20 res-no-margin executive-room">
        <motion.div className="room-block" id="view4-info"

        initial={{ opacity: 0, y: -250 }}

        whileInView={{ opacity: 1, y: -350 }}

        transition={{ duration: 2 }}>
 <video autoPlay loop muted playsInline className="w-100 primary-radius">
              <source src="/images/rooms/ExecutiveRoom.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          
{/* 
          <img src="images/rooms/executive-room-1.webp" alt="Accommodation in Gurgaon" className="custom-img-responsive img-thumbnail  wow fadeInUp animated" data-wow-duration="4s" style={{visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}/> */}

          <motion.div className="room-main-info right-block wow fadeInDown animated" data-wow-duration="4s" style={{visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}

          initial={{ opacity: 0, y: -150 }}

          whileInView={{ opacity: 1, y: -50 ,x:0}}

          transition={{ duration: 2 }}>

            <h6 className="global-heading-1">

              Executive Room

            </h6>

            <p className="color-grey text-justify">

              Indulge in the lavish comfort of a plush king-sized or twin bed, complete with all the modern amenities designed to cater to your every whim. Immerse yourself in exquisite wall art and enjoy a private balcony or sit-out area. At Alivaa, elegance meets sophistication for an unforgettable stay.

            </p>

            <p className="color-grey"><strong><b>325 sq ft./View Varies</b></strong></p>



            <details>

              <summary>Read More</summary>



                <ul className="service-listing2">

                  <li>

                    Premium, high-speed Internet access 

                  </li>

                  <li>

                    42-inch smart TV

                  </li>

                  <li>

                    Air Conditioner 

                  </li>

                  <li>

                    In-room laptop-sized electronic safe

                  </li>

                  <li>

                    Deluxe bath amenities and a hair dryer (on request)

                  </li>

                  <li>

                    Coffee maker 

                  </li>

                  <li>

                    Iron and ironing boards (on request)

                  </li>

                  <li>

                    Generous workstation with ergonomic chair 

                  </li>

                  <li>

                    Multimedia connections

                  </li>

                  <li>

                    Mini bar

                  </li>

                </ul>

            </details>

            <a href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&amp;JDRN=Y" className="btn btn-primary voffset-1">Book Now</a>

          </motion.div>

        </motion.div>

      </div>

      

    </article>

  </motion.section>

  <section className="about-us accomodation-main gurgaon-resorts-wifi">

    <article className="container">

      {/* <div className="col-lg-12 col-xs-12 mt-5 wow fadeInLeft text-center animated">

        <h6 className="global-heading-1">Alivaa Hotels &amp; Resorts <br/><p style={{ marginTop: "7px" ,color:"black", fontSize: "20px"}}>Main Facilities</p></h6>

        

      </div> */}

      <div className="row justify-content-center">

      <motion.div className="col-lg-8 col-xs-12">

      <h6 className="global-heading-1 inner-hd text-center">Alivaa Hotels &amp; Resorts <br/><p style={{marginTop:"7px", color: "#3b3b3b",fontSize: "24px"}}>Main Facilities</p></h6>
      <ul className="main-facilities">
        <li className="wow fadeInLeft animated" data-wow-duration="4s" style={{visibility: "visible",WebkitAnimationDuration: '4s', MozAnimationDuration: "4s", animationDuration: "4s"}}>
          <img src="images/car-icon.svg" alt="icon" className="facility-icon-btm" />
          <h6 className="global-heading-1">Valet Parking</h6>
          <p>
            Enjoy unlimited valet parking that is safe and secure with easy access and Valet Service.<br>
            </br>
          </p>
        </li>
        <li className="wow fadeInUp animated" data-wow-duration="4s" style={{visibility: "visible",WebkitAnimationDuration: '4s', MozAnimationDuration: "4s", animationDuration: "4s"}}>
          <img src="images/wifi-icon.svg" alt="icon" className="facility-icon-btm" />
          <h6 className="global-heading-1">High Speed Wifi</h6>
          <p>
            Our advanced high speed, unlimited Wifi is available throughout the property so you never have to be out of touch.
          </p>
        </li>
        <li className="wow fadeInRight animated" data-wow-duration="4s" style={{visibility: "visible",WebkitAnimationDuration: '4s', MozAnimationDuration: "4s", animationDuration: "4s"}}>
          <img src="images/swimming-pool.svg" alt="icon" className="facility-icon-btm" />
          <h6 className="global-heading-1">Swimming Pool</h6>
          <p>
            Our chic outdoor pool  has wide vistas and a carefully designed deck to provide privacy as well as space for socializing.
          </p>
        </li>
      </ul>
      

      </motion.div>

      </div>



      <div className="col-lg-12 text-left voffset-4 no-pad location-div">

        <h6 className="global-heading-1" style={{textAlign:"left"}}>Location</h6>

        <hr/>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.0253248766794!2d77.03770407469985!3d28.41849269376977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229c15fbf0c5%3A0x14ca65f09ab743f!2sAlivaa%20Hotel%20Gurugram%20Sohna%20Road%20City%20Center!5e0!3m2!1sen!2sin!4v1719313653024!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    </div>

    </article>

  </section>

        </>

    );

}

export default GurgaonAccommodation;