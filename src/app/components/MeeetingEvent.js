'use client';
import React, { useEffect } from 'react';
import { useState } from "react";
// import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import 'swiper/css/pagination';
import Link from "next/link";
import { motion } from "framer-motion";
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "../../app/styles/alivaadining.css";
const MeeetingEvent = ({htls, metah}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
    no_of_guest: '',
    source_enquiry: '',
    web_source: 'alivaahotels.com',
  });

      // Dynamically set source_enquiry when hcontact is loaded
    useEffect(() => {
      if (htls?.[0]?.source_enquiry) {
        setFormData((prev) => ({
          ...prev,
          source_enquiry: htls[0].source_enquiry,
        }));
      }
    }, [htls]);


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

               {metah &&
  metah.length > 0 &&
  metah[0] &&
  metah[0].page_heading && (
      <h2 className="global-heading-gurgaon inner-hd pt-0 text-center">{metah[0].page_heading}</h2>)}

{metah && metah[0] && metah.length > 0 && (  
        <p className="content-boxx gurugram-para">
        {metah[0].page_description}
        </p>
)}

          
          </div>


{htls && (
  <section className="room_cs mt-0 jawai-new-diining"> 
    <div className="container-md p-0 shadow-sm">
      <div className="global-heading-sec text-start">
        <div className="row align-items-center" data-aos="fade-in" data-aos-easing="ease-in-sine">
          <div className="col-md-7">
            <Image
              src={htls.image || "/fallback.jpg"}
              height={400}
              width={500}
              alt={htls.title || "Event image"}
              className="w-100"
            />
          </div>
          <div className="col-md-5 space_in d-flex flex-column justify-content-center align-self-center">
            <h3 className="inner-head mt-5">{htls.title || "Event Space"}</h3>
            <p className="mb-2 text-justify" style={{ textAlign: 'justify' }}>
              {htls.short_description || "We host versatile indoor event spaces ideal for business meets, social functions, and grand celebrations."}
            </p>
            <a
              className="alivactacolor box-btn bg_green rounded-0 btn btn-dark mt-3 auto-width-btn"
              data-bs-toggle="modal"
              data-bs-target="#banquet-enquiry"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)}



        </div>
      </section>
      <div className="modal fade" id="banquet-enquiry" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header" style={{ textAlign: "left" }}>
              <h6 className="modal-title" id="myModalLabel" >Enquire Now</h6>
              <button style={{ textAlign: "right" }} type="button" className="close"
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
export default MeeetingEvent;




{/* <a style={{ fontSize: "14px", marginLeft: "20px", marginTop: "25px", backgroundColor: "#245704 !important" }} className="hoftenctacolor btn btn-primary-hoften" data-bs-toggle="modal" data-bs-target="#banquet-enquiry">Enquire Now</a> */}