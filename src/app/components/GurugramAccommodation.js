'use client'; 
import { Modal } from 'react-bootstrap';  // Import Bootstrap Modal
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown, faArrowCircleUp} from "@fortawesome/free-solid-svg-icons";
const GurugramAccommodation = () => {
      const [modalShow, setModalShow] = useState(false);
      const [modalShow1, setModalShow1] = useState(false);
      const [modalShow2, setModalShow2] = useState(false);
        const [showMore, setShowMore] = useState(false);
    return (
        <>
            <section className="about-us accomodation-main-gurugram accom-hoften">
                <article className="container text-center accom-hoften">
                    <div className="col-lg-12 col-xs-12 pull-left text-center">
                        <h2 className="global-heading-gurgaon pt-0 inner-hd">Hotel Rooms in Gurgaon</h2>
                        <p className="content-boxx text-center">
                            At Hoften-Sukh Vasa Morpho, we boast of having some of the best facilities to fit all the needs of our clientele.
                            From exceptional venues for events and meetings to a diverse range of delectable dining options, every aspect of our 
                            service is designed to provide comfort, convenient services, and lasting memories.
                        </p>

                        <h3 className="global-heading-gurugram">Check Out Our Best Rooms &amp; Suites</h3>
                    </div>

                    <div className="col-xs-12 no-pad voffset-2 res-no-margin deluxe-room">
                        <div className="room-block" id="view1-info">
                            <img src="images/rooms/deluxe-room-hoften.jpg" alt="Accommodation in Gurgaon" 
                                className="custom-img-responsive img-thumbnail" />

                            <div className="room-main-info">
                                <h6 className="global-heading-gurugram-1">Deluxe Room</h6>
                                <p className="color-grey text-justify">
                                    Our Deluxe Rooms are elegantly designed for single travellers and couples who seek peace and comfort.
                                    These rooms provide compact, comfortable living areas that feature a comfortable queen-sized bed, premium linens,
                                    and contemporary interiors. The in-suite bathroom contains amenities such as a rainfall shower and complimentary toiletries.
                                </p>
                                <p className="color-grey"><strong><b>144 sq. ft./View Varies</b></strong></p>
                                     <a
                                                  href="#"
                                                  className="text-primary d-block mt-1 mb-1 text-black font-semibold cursor-pointer hover:underline flex items-center"
                                                  onClick={(e) => {
                                                    e.preventDefault();
                                                    setModalShow1(true); // Show the modal when clicking Read More
                                                  }}
                                                >
                                                  {showMore ? "Read Less" : "Read More"}
                                                  <FontAwesomeIcon
                                                    icon={showMore ? faArrowCircleUp : faArrowCircleDown}
                                                    className="ms-2 text-lg"
                                                  />
                                                </a>
  <Modal className="featur_modal" show={modalShow1} onHide={() => setModalShow1(false)}>
        <Modal.Header closeButton className="fs-4">
          <Modal.Title>Deluxe Room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mt-3 list-disc list-inside text-gray-600"
          >
          <li>Interconnecting Rooms</li>
                                        <li>Internet</li>
                                        <li>Laundry (On Request)</li>
                                        <li>Personal Butler (On Request)</li>
                                        <li>Wheelchair Access (On Request)</li>
                                        <li>Smart TV</li>
                                        <li>Air Conditioner</li>
                                        <li>Electronic Safe</li>
                                        <li>Multimedia connections</li>
                                        <li>Coffee Maker</li>
                                        <li>Iron and Ironing Boards (On Request)</li>
          </motion.ul>
        </Modal.Body>
        {/* <Modal.Footer>
          <button
            className="btn btn-dark"
            onClick={() => setModalShow(false)}
          >
            Close
          </button>
        </Modal.Footer> */}
      </Modal>
                               

                                <a style={{color:"#fff", backgroundColor:"#245704 !important"}} 
                                    href="https://bookings.alivaahotels.com/inst/#/home?propertyId=402NT4HhhBGbbpoRahFpDYw3nQ5NDM=&JDRN=Y&RoomID=210380,210381,210383,210384,210385&ap=1&gsId=402NT4HhhBGbbpoRahFpDYw3nQ5NDM=" 
                                    className="hoftenctacolor btn btn-primary-hoften voffset-1">Book Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 no-pad voffset-20 res-no-margin deluxe-twin-room">
                        <div className="room-block" id="view2-info">
                            <img src="images/rooms/deluxe-twin-room-hoften.jpg" alt="Accommodation in Gurgaon" 
                                className="custom-img-responsive img-thumbnail" />
                            
                            <div className="room-main-info right-block">
                                <h6 className="global-heading-gurugram-1">Deluxe Twin Room</h6>
                                <p className="color-grey text-align-justify">
                                    Our Deluxe Twin Room is more than just a stay. We offer two twin-size beds, perfect for those who like separate beds
                                    with enough space for a comfortable stay. With its first-rate conveniences, this accommodation provides a pleasant and restful stay.
                                </p>
                                <p className="color-grey"><strong><b>144 sq. ft./View Varies</b></strong></p>


     <a
                  href="#"
                  className="text-primary d-block mt-1 mb-1 text-black font-semibold cursor-pointer hover:underline flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    setModalShow2(true); // Show the modal when clicking Read More
                  }}
                >
                  {showMore ? "Read Less" : "Read More"}
                  <FontAwesomeIcon
                    icon={showMore ? faArrowCircleUp : faArrowCircleDown}
                    className="ms-2 text-lg"
                  />
                </a>


          {/* Additional Features List with Animation */}
          <Modal className="featur_modal" show={modalShow2} onHide={() => setModalShow2(false)}>
        <Modal.Header closeButton className="fs-4">
          <Modal.Title>Deluxe Twin Room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mt-3 list-disc list-inside text-gray-600"
          >
             <li>Interconnecting Rooms</li>
                                        <li>Internet</li>
                                        <li>Laundry (On Request)</li>
                                        <li>Personal Butler (On Request)</li>
                                        <li>Wheelchair Access (On Request)</li>
                                        <li>Smart TV</li>
                                        <li>Air Conditioner</li>
                                        <li>Electronic Safe</li>
                                        <li>Coffee Maker</li>
                                        <li>Iron and Ironing Boards (On Request)</li>
          </motion.ul>
        </Modal.Body>
        {/* <Modal.Footer>
          <button
            className="btn btn-dark"
            onClick={() => setModalShow(false)}
          >
            Close
          </button>
        </Modal.Footer> */}
      </Modal>

                               

                                <a style={{color:"#fff", backgroundColor:"#245704 !important"}} 
                                    href="https://bookings.alivaahotels.com/inst/#/home?propertyId=402NT4HhhBGbbpoRahFpDYw3nQ5NDM=&JDRN=Y&RoomID=210380,210381,210383,210384,210385&ap=1&gsId=402NT4HhhBGbbpoRahFpDYw3nQ5NDM=" 
                                    className="hoftenctacolor btn btn-primary-hoften voffset-1">Book Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 no-pad voffset-20 res-no-margin outer-room-info-block">
                        <div className="room-block" id="view3-info">
                            <img src="images/rooms/deluxe-room-1.webp" alt="Accommodation in Gurgaon" 
                                className="custom-img-responsive img-thumbnail" />
                            
                            <div className="room-main-info">
                                <h6 className="global-heading-gurugram-1">Suites</h6>
                                <p className="color-grey text-justify">
                                    Suites are for guests who seek luxury along with all the basic amenities. The room is over 335 square feet and 
                                    features a living area and a sleeping area. It comes with a king-size bed, a seated reclining lounge, and a separate dining option, 
                                    all exclusively for the suite. Stylishly designed to provide comforts of both luxury and practicality, the suites provide curated 
                                    interior design pieces. The walk-in shower and a bathtub come with luxury skincare products to provide the desired ambiance of the spa.
                                </p>
                                <p className="color-grey"><strong><b>360 sq. ft./View Varies</b></strong></p>


     <a
                  href="#"
                  className="text-primary d-block mt-1 mb-1 text-black font-semibold cursor-pointer hover:underline flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    setModalShow1(true); // Show the modal when clicking Read More
                  }}
                >
                  {showMore ? "Read Less" : "Read More"}
                  <FontAwesomeIcon
                    icon={showMore ? faArrowCircleUp : faArrowCircleDown}
                    className="ms-2 text-lg"
                  />
                </a>


          {/* Additional Features List with Animation */}
          <Modal className="featur_modal" show={modalShow1} onHide={() => setModalShow1(false)}>
        <Modal.Header closeButton className="fs-4">
          <Modal.Title>Suites</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mt-3 list-disc list-inside text-gray-600">
            <li>Interconnecting Rooms</li>
                                        <li>Internet</li>
                                        <li>Laundry (On Request)</li>
                                        <li>Personal Butler (On Request)</li>
                                        <li>Wheelchair Access (On Request)</li>
                                        <li>Smart TV</li>
                                        <li>Air Conditioner</li>
                                        <li>Electronic Safe</li>
                                        <li>Coffee Maker</li>
                                        <li>Iron and Ironing Boards (On Request)</li>
          </motion.ul>
        </Modal.Body>
        {/* <Modal.Footer>
          <button
            className="btn btn-dark"
            onClick={() => setModalShow(false)}
          >
            Close
          </button>
        </Modal.Footer> */}
      </Modal>


                                <a style={{color:"#fff", backgroundColor:"#245704 !important"}} 
                                    href="https://bookings.alivaahotels.com/inst/#/home?propertyId=402NT4HhhBGbbpoRahFpDYw3nQ5NDM=&JDRN=Y&RoomID=210380,210381,210383,210384,210385&ap=1&gsId=402NT4HhhBGbbpoRahFpDYw3nQ5NDM=" 
                                    className="hoftenctacolor btn btn-primary-hoften voffset-1">Book Now</a>
                            </div>
                        </div>
                    </div>
                </article>
            </section>

            {/* Facilities Section */}
            <section className="about-us accomodation-main mt-5 new-hoften-acco-fac">
                <article className="container mt-5">
                    <div className="col-lg-12 col-xs-12 text-center">
                        <h6 className="global-heading-gurugram-1">Hoften-Sukh Vasa Morpho</h6>
                        <h6 className="global-heading-1 text-center" style={{color:"#3b3b3b"}}>Main Facilities</h6>
                    </div>

                    <ul className="main-facilities" style={{textAlign:"center"}}>
                        <li>
                            <img style={{filter: "grayscale(1)"}} 
                                src="images/wifi-icon.svg" 
                                alt="icon" 
                                className="facility-icon-btm"/>
                            
                            <h6 className="global-heading-gurugram-1" style={{ fontFamily: 'Verdana', color: "#245704" }}>High Speed Wi-fi</h6>
                            <p style={{textAlign: "justify",color: "#3b3b3b"}}>
                                Our advanced high-speed, unlimited Wi-fi is available throughout the property so you never have to be out of touch.
                            </p>
                        </li>
                    </ul>

                    <div>
                        <h6 className="global-heading-gurugram-1">Location</h6>
                        <hr />
                       
                    </div>
                </article>
            </section>
            <section className="container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14035.674790205063!2d77.063945!3d28.42171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d239cbc2877cf%3A0x2c0ac5da81bd9c8e!2sHoften%20Sukh%20Vasa%2C%20Sector%2051%20Gurgaon!5e0!3m2!1sen!2sin!4v1732025528047!5m2!1sen!2sin" 
                                width="100%" 
                                height="350" 
                                style={{border:"0"}} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </section>
        </>
    );
}

export default GurugramAccommodation;
