"use client";
import "../../app/styles/inner.css";
import { useState } from "react";
import { motion } from "framer-motion";
import toast from 'react-hot-toast';
const DalhousieHotelContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    source_enquiry: 'alivaa-dalhousie-contact-us',
    web_source: 'alivaahotels.com',
  });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');
  const [errors, setErrors] = useState({});
  const validate = () => {
    const newErrors = {};
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    // Email validation (simple regex)
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    // Phone validation (digits only, length check)
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Phone must be at least 10 digits and contain digits only';
    }
    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Message must be at least 5 characters';
    }
    setErrors(newErrors);
    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error message on input change
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error('Please fix the errors in the form.');
      return;
    }
    setLoading(true);
    setResponseMsg('');
    try {
      const response = await fetch('https://demo.cinuniverse.com/alivaa/contact-mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.status === 'success') {
        toast.success(result.message || 'Form submitted successfully!');
        setResponseMsg(result.message || 'Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          source_enquiry: 'alivaa-gurugram-contact-us',
          web_source: 'alivaahotels.com',
        });
        setErrors({});
      } else {
        toast.error(result.message || 'Submission failed!');
        setResponseMsg(result.message || 'Submission failed!');
      }
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
      setResponseMsg('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
      setTimeout(() => setResponseMsg(''), 8000); // Clear message after 5 seconds
    }
  };
  return (
    <motion.section className="hoften-main-contactt contact-us contacthoften"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.12 }}>
      <motion.div className="container mt-5"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}>
        <div className="col-lg-12 col-xs-12 voffset-5 contactus-section">
          <div className="row text-center verticalTop" style={{ marginLeft: "5px" }}>
            <motion.div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInLeft animated" data-wow-duration="4s"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}>
              <span className="hoftenctacolor contact-icons-hoften" style={{ backgroundColor: "#245704 !important" }}>
                <img src="images/map-icon.svg" alt="social-icon-hoften" className="social-icon" style={{ margin: "auto" }} />
              </span>
              <h6 style={{ fontSize: "16px" }}>Address</h6>
              <p style={{ fontSize: "14px", color: "#245704" }}><a href="https://maps.app.goo.gl/wUQepQG85dWxhncL7" target="_blank"> Banikhet Dalhousie Road Dalhousie Hills PO Banikhet, Dalhousie, Himachal Pradesh 176303</a></p>
            </motion.div>
            <motion.div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInDown animated" data-wow-duration="4s"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}>
              <span className="contact-icons-hoften" style={{ backgroundColor: "#245704 !important" }}>
                <img src="images/phone-icon.svg" alt="social-icon" className="social-icon-hoften" style={{ margin: "auto" }} />
              </span>
              <h6 style={{ fontSize: "16px" }}>Phone Number</h6>
              {/* <p style={{fontSize: "14px", color:"#245704"}}><a href="tel:+911244170000">+91 782 7898967</a></p> */}
              <p style={{ fontSize: "14px", color: "#245704" }}><a href="tel:+7827898967">+91 782 7898967</a></p>
            </motion.div>
            <motion.div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInRight animated" data-wow-duration="4s"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}>
              <span className="contact-icons-hoften" style={{ backgroundColor: "#245704 !important" }}>
                <img src="images/mail-icon.svg" alt="social-icon" className="social-icon-hoften" style={{ margin: "auto" }} />
              </span>
              <h6 style={{ fontSize: "16px" }}>Email Address</h6>
              <p style={{ fontSize: "14px", color: "#245704" }}><a href="mailto:dirsales.ggn1@alivaahotels.com">dirsales.ggn1@alivaahotels.com </a></p>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <div className="col-xs-12 no-pad voffset-3 color-dark" id="cont-form">
        <hr></hr>
      </div>
      <motion.div className="container mt-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}>
        <div className="col-lg-12 col-xs-12 contactus-form voffset-3">
          <motion.div className="row mb-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 wow fadeInRight animated" data-wow-duration="4s" >
              <div className="row" >
                <h2 style={{ fontSize: "24px", color: "#245704" }}>Contact us</h2>
                <form onSubmit={handleSubmit} className="space-y-4 max-w-md contactus-form" noValidate>
                  <div className="col-xs-12 no-pad">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-xs-12">
                        <input
                          type="text"
                          name="name"
                          maxLength={30}
                          placeholder="Name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full p-2 border form-control ${errors.name ? 'is-invalid' : ''}`}
                        />
                        {errors.name && <small className="text-danger">{errors.name}</small>}
                      </div>
                      <div className="col-lg-6 col-md-6 col-xs-12">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          maxLength={100}
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full p-2 border form-control ${errors.email ? 'is-invalid' : ''}`}
                        />
                        {errors.email && <small className="text-danger">{errors.email}</small>}
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 no-pad ">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-xs-12">
                        <input
                          type="tel"
                          maxLength={10}
                          name="phone"
                          placeholder="Phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full p-2 border form-control ${errors.phone ? 'is-invalid' : ''}`}
                        />
                        {errors.phone && <small className="text-danger">{errors.phone}</small>}
                      </div>
                      <div className="col-lg-6 col-md-6 col-xs-12">
                        <input
                          type="text"
                          name="subject"
                          max={50}
                          placeholder="Subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full p-2 border form-control ${errors.subject ? 'is-invalid' : ''}`}
                        />
                        {errors.subject && <small className="text-danger">{errors.subject}</small>}
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 no-pad ">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-xs-12">
                        <textarea
                          name="message"
                          placeholder="Message"
                          maxLength={500}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className={`w-full p-2 border form-control ${errors.message ? 'is-invalid' : ''}`}
                        />
                        {errors.message && <small className="text-danger">{errors.message}</small>}
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 no-pad">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-xs-12 voffset-bottom2">
                        <button type="submit" disabled={loading} className="btn btn-primary mt-3">
                          {loading ? 'Sending...' : 'Submit'}
                        </button>
                        {/* ✅ Response Message */}
                        {responseMsg && (
                          <p className="mt-3" style={{ color: responseMsg.toLowerCase().includes('success') ? 'green' : 'green', fontWeight: 'bold' }}>
                            {responseMsg}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 wow fadeInRight animated" data-wow-duration="4s" >
              <div className="row" >
                <div className="col">
                  <h2 style={{ fontSize: "24px", color: "#245704" }}> Location</h2>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13016.019406598312!2d75.9440006!3d32.5500584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c917c026261c7%3A0xb454af6f1e9d4b7a!2sBanikhet%2C%20Dalhousie%2C%20Himachal%20Pradesh%20176303!5e0!3m2!1sen!2sin!4v1719145047687!5m2!1sen!2sin"
                  width="100%" height="320"></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}
export default DalhousieHotelContact