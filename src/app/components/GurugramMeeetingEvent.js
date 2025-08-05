







'use client';

import React, { useEffect} from 'react';

import { useState } from "react";
// import Swiper from 'swiper';

import 'swiper/css';

import 'swiper/css/navigation';

import 'swiper/css/pagination';

import Link from "next/link";

import { motion } from "framer-motion";

// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

//import 'bootstrap/dist/css/bootstrap.min.css';


import "../../app/styles/alivaadining.css";

const GurugramMeeetingEvent = () => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
    no_of_guest: '',
    source_enquiry: 'hoften-gurugram-event',
    web_source: 'alivaahotels.com',
  });

  const [responseMsg, setResponseMsg] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10-15 digits';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.no_of_guest) {
      newErrors.no_of_guest = 'Number of guests is required';
    } else if (+formData.no_of_guest < 0 || +formData.no_of_guest > 99) {
      newErrors.no_of_guest = 'Guests should be between 1 and 999';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMsg('');
  
    if (!validate()) {
  
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await fetch('https://demo.cinuniverse.com/alivaa/event-mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (result.status === 'success') {
        setResponseMsg(result.message || 'Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          date: '',
          no_of_guest: '',
          source_enquiry: 'alivaa-mcleodganj-dine',
          web_source: 'alivaahotels.com',
        });
      } else {
        setResponseMsg(result.message || 'Submission failed!');
      }
    } catch (err) {
      setResponseMsg('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
      setTimeout(() => setResponseMsg(''), 5000);
    }
  };

  return (
<>
    <section className="about-us meeting_ev accomodation-main-gurugram  accom-hoften" >

        <div className="mb-5 container">

        <div className="new-rj-block">

        <h2 className="global-heading-gurgaon inner-hd pt-0 text-center">

          Meeting & Events Halls In Gurugram - hoften</h2>

          <p className="content-boxx gurugram-para" style={{textAlign: "justify"}}>At hoften- Sukh Vasa Morpho, we boast of having some of the best facilities to fit all the needs of our clientele. From exceptional venues for events and meetings to a diverse range of delectable dining options, every aspect of our service is designed to provide comfort, convenient services, and lasting memories.

             </p>

        </div>

        

        <div className="tab-content mt-3">

            <div className="tab-pane fade show active">

                <div className="special-offers about-us new-rj-block text-center">

                    <div className="container">                        

      <div className="col-xs-12 conference-section">

        <motion.div className="room-block"

        initial={{ opacity: 0, x:-150, y: 50 }}

        whileInView={{ opacity: 1, x: 0, y: 50 }}

        transition={{ duration: 2 }}>

          

          <img src="/images/hofton-gallery/hoften-conference-room.jpg" alt="Accommodation in Gurgaon" className="custom-img-responsive img-thumbnail  wow fadeInUp animated" data-wow-duration="4s" style={{width: "55%", height:"130%",marginLeft:"100px",visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}/>

          <motion.div className="room-main-info conf-hall h95b right-block wow fadeInDown animated confer-hall" data-wow-duration="4s" style={{width:"50%", visibility: "visible", WebkitAnimationDuration: "6s",  MozAnimationDuration: "6s",  animationDuration: "6s"}}

          initial={{ opacity: 0, y: -275,x:750 }}

          whileInView={{ opacity: 1, x: -450, y: -275 }}

          transition={{ duration: 2 }}>

          <h6 className="global-heading-gurugram-1" style={{marginTop:"20px",marginLeft:"20px", color:"#04542d !important"}}>

          Conference Hall

            </h6>

            <p className="text-two text-justify" style={{fontSize:"14px",marginLeft:"20px"}}>

            Our <strong><b>Conference Hall in Gurugram</b></strong> offers you a wide, open space and versatile background that makes it suitable for conferences, seminars, and workshops. The event hall has enough seating for 150-200 persons or 60-70 round tables, which will allow organising significant corporate events using the latest facilities.

            </p>

            <a className="hoftenctacolor btn btn-dark rounded-0" style={{fontSize: "14px",marginLeft:"20px",backgroundColor:"#245704 !important"}} data-bs-toggle="modal" data-bs-target="#banquet-enquiry">Enquire Now</a>

          </motion.div>

        </motion.div>

      </div>

      

      <div className="col-xs-12 ballroom-section balsec">

        <motion.div className="room-block"

          initial={{ opacity: 0, y: 100 ,x: 300}}

          whileInView={{ opacity: 1, y: 100, x: 250 }}

          transition={{ duration: 1 }}>

          

          <img src="/images/hofton-gallery/hoften-new-ballroom-image.webp" alt="Accommodation in Gurgaon" className="custom-img-responsive-2 img-thumbnail  wow fadeInUp animated" data-wow-duration="4s" style={{width: "55%", height:"110%",visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}/>

          <motion.div className="room-main-info ball-room1 h95b right-block wow fadeInDown animated ballroom" data-wow-duration="4s" style={{width:"50%",height:"80%",visibility: "visible", WebkitAnimationDuration: "6s",  MozAnimationDuration: "6s",  animationDuration: "6s"}}

          initial={{ opacity: 0, y: -250 ,x: -250}}

          whileInView={{ opacity: 1, y: -285, x: -630 }}

          transition={{ duration: 2 }}>

          <h3 className="global-heading-gurugram-1" style={{marginTop:"20px",marginLeft:"20px", color:"#04542d !important"}}>

          Ballroom

            </h3>

            <p className="text-two text-justify" style={{fontSize:"14px",marginLeft:"20px"}}>

            The lavish ballroom sprawled across 6,000 sq. ft. can be used for different ceremonies. Our ballroom in Gurugram is fully equipped with air conditioning and can easily be subdivided into two halls, making it ideal for both business and other social events. The ballroom’s setting and design make sure that your event is successful and memorable, as they are well executed.

            </p>

            <a  style={{fontSize: "14px",marginLeft:"20px", marginTop:"25px",backgroundColor:"#245704 !important"}} className="hoftenctacolor btn btn-primary-hoften" data-bs-toggle="modal" data-bs-target="#banquet-enquiry">Enquire Now</a>

          </motion.div>

        </motion.div>

      </div>

      <div className="col-xs-12 rooftop-section mb-5">

        <motion.div className="room-block"

        initial={{ opacity: 0, y: 180, x:-450 }}

        whileInView={{ opacity: 1,y: 180, x: -170 }}

        transition={{ duration: 2 }}>

          

          <img src="/images/hofton-gallery/hoften-rooftop.jpg" alt="Accommodation in Gurgaon" className="custom-img-responsive img-thumbnail  wow fadeInUp animated hoften-rooftop" data-wow-duration="4s" style={{width: "55%", marginLeft:"130px",visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}/>

          <motion.div className="room-main-info roof-ton lt h95b right-block wow fadeInDown animated hoften-rooftop" data-wow-duration="4s" style={{width:"50%",visibility: "visible", WebkitAnimationDuration: "6s",  MozAnimationDuration: "6s",  animationDuration: "6s"}}

          initial={{ opacity: 0, y: -280,x:850 }}

          whileInView={{ opacity: 1,y: -250, x: 200 }}

          transition={{ duration: 2 }}>

          <h3 className="global-heading-gurugram-1" style={{marginTop:"20px",marginLeft:"20px", color:"#04542d !important"}}>

          Rooftop Venue

            </h3>

            <p className="text-two text-justify" style={{fontSize:"14px",marginLeft:"20px"}}>

            Barasti at Hoften, our exquisite 5,000 sq. ft. open-air rooftop venue, offers a stunning panorama of the city skyline. Perfect for social gatherings and celebrations, this space combines elegance with breathtaking views, creating a unique atmosphere for unforgettable events. Equipped with essential amenities, Barasti ensures a seamless experience for every occasion.

            </p>

            <a  style={{fontSize: "14px",marginLeft:"20px", marginBottom:"30px",backgroundColor:"#245704 !important"}} className="hoftenctacolor btn btn-primary-hoften" data-bs-toggle="modal" data-bs-target="#banquet-enquiry">Enquire Now</a>

          </motion.div>

        </motion.div>

      </div>

      <br></br>
      <br></br>
      <br></br>

                    </div>

                </div>

            </div>



            

            </div>

        </div>

    </section>
<div className="modal fade" id="banquet-enquiry" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">

<div className="modal-dialog" role="document">

  <div className="modal-content">

    <div className="modal-header" style={{textAlign: "left"}}>


      <h6 className="modal-title" id="myModalLabel" >Enquire Now</h6>

      <button style={{textAlign: "right"}} type="button" className="close"

        data-bs-dismiss="modal" aria-label="Close">

          <span aria-hidden="true">×</span></button>

    </div>

    <div className="modal-body dining-form">
    {responseMsg && (
  <div className="text-center mt-3">
    <p className="text-success">{responseMsg}</p>
  </div>
)}

  <form onSubmit={handleSubmit} noValidate>
    <div className="form-group">
      <input
        type="text"
        name="name"
        maxLength={100}
        className="form-control emptycls"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      {errors.name && <small className="text-danger">{errors.name}</small>}
    </div>

    <div className="form-group">
      <input
        type="email"
        name="email"
        maxLength={100}
        className="form-control emptycls"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      {errors.email && <small className="text-danger">{errors.email}</small>}
    </div>

    <div className="form-group">
      <input
        type="tel"
        name="phone"
        maxLength={10}
        className="form-control emptycls"
        placeholder="Enter Mobile No."
        value={formData.phone}
        onChange={handleInputChange}
      />
      {errors.phone && <small className="text-danger">{errors.phone}</small>}
    </div>

  
    <div className="form-group">
      <input
type="date"
name="date"
className="form-control emptycls"
id="edateId"
value={formData.date}
onChange={handleInputChange}
min={new Date().toISOString().split('T')[0]} // 👈 prevents past dates
/>
      {errors.date && <small className="text-danger">{errors.date}</small>}
    </div>

    <div className="form-group">
      <input
        type="number"
        name="no_of_guest"
        max={999}
        min={1}
        className="form-control emptycls"
        placeholder="No. of Guests"
            value={formData.no_of_guest}
onChange={(e) => {
if (e.target.value.length <= 2) handleInputChange(e);
}}

      />
      {errors.no_of_guest && <small className="text-danger">{errors.no_of_guest}</small>}
    </div>

<div className="form-group">
      <textarea
        name="message"
        rows="3"
        maxLength={1000}
        className="form-control emptycls"
        placeholder="Message"
        value={formData.message}
        onChange={handleInputChange}
      />
      {errors.message && <small className="text-danger">{errors.message}</small>}
    </div>

    <div className="text-center mt-3">
      <button type="submit" className="btn btn-primary hoften" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  </form>

      </div>

    </div>

    </div>

  </div>
  </>
  );

};



export default GurugramMeeetingEvent;