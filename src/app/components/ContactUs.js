"use client";
import { useState } from "react";
//import "../../app/styles/inner.css";

import { motion } from "framer-motion";

import toast from 'react-hot-toast';


const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    source_enquiry: 'alivaa-gurugram-contact-us',
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

        <motion.section className="contact-us-2  contact-us-main" 

        initial={{ opacity: 0, x: -50 }}

        whileInView={{ opacity: 1, x: 0 }}

        transition={{ duration: 0.6,  delay:0.12 }}>

        <motion.div className="container"

          initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.6 }}>

        <div className="col-lg-12 col-xs-12  contactus-section">

        <div className="row text-center verticalTop">

            <motion.div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInLeft animated" data-wow-duration="4s" 

          initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.6 }}>

                <span className="contact-icons-21">

                    <img src="images/map-icon.svg" alt="social-icon" className="social-icon-map"/>

                </span>

                <h6>Alivaa Hotels</h6>

                <p><a href="https://maps.app.goo.gl/wUQepQG85dWxhncL7" target="_blank"> Spaze Boulevard II, Badshahpur Sohna Rd Hwy, Malibu Town, Sector 47, Gurugram, Haryana- 122001</a></p>

               

            </motion.div>

            <motion.div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInDown animated" data-wow-duration="4s" 

          initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.6 }}>

                <span className="contact-icons-2">

                    <img src="images/phone-icon.svg" alt="social-icon" className="social-icon ml-3"  />

                </span>

                <h6>Phone Number</h6>

                <p><a href="tel:+911244170000">+91 124 4170000</a></p>

            </motion.div>

            <motion.div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInRight animated" data-wow-duration="4s" 

          initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.6 }}>

                <span className="contact-icons-2">

                    <img src="images/mail-icon.svg" alt="social-icon" className="social-icon ml-3" />

                </span>

                <h6>Email Address</h6>

                <p><a href="mailto:stayalive@alivaahotels.com">stayalive@alivaahotels.com</a></p>

            </motion.div>

        </div>

      </div>

      </motion.div>



      <motion.div className="container mt-4"

          initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.6 }}>

      <div className="col-lg-12 col-xs-12 voffset-5 contactus-section">

        <div className="row text-center verticalTop ml-3">

            <motion.div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInLeft animated" data-wow-duration="4s" 

          initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.6 }}>

                <span className="contact-icons-21">

                    <img src="images/map-icon.svg" alt="social-icon" className="social-icon-map" />

                </span>

                <h6>Hoften Sukh Vasa</h6>

                

                <p><a href="https://maps.app.goo.gl/t8SJ8E6KQytevEfr6" target="_blank"> J 18, Mayfield Garden, Sector-51, Gurugram, Haryana-122018, India</a></p>

				

            </motion.div>

            <motion.div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInDown " data-wow-duration="4s" 

          initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.6 }}>

                <span className="contact-icons-2">

                    <img src="images/phone-icon.svg" alt="social-icon" className="social-icon ml-3" />

                </span>

                <h6>Phone Number</h6>

                <p><a href="tel:+917827898967">+91 782 7898967</a></p>

            </motion.div>

            <motion.div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInRight animated" data-wow-duration="4s" 

          initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.6 }}>

                <span className="contact-icons-2">

                    <img src="images/mail-icon.svg" alt="social-icon" className="social-icon ml-3" />

                </span>

                <h6>Email Address</h6>

                <p>

                		<a href="mailto:dirsales.ggn1@alivaahotels.com">dirsales.ggn1@alivaahotels.com</a>

           					{/* <!-- <a href="mailto:reception@morphosukhvasa.com">reception@morphosukhvasa.com</a> --> */}

         				</p>

            </motion.div>

        </div>

      </div>

      </motion.div>

      <div className="col-xs-12 no-pad voffset-3 color-dark" id="cont-form">

        <hr></hr>

      </div>

      

      <motion.div className="container mt-4 contact-us-main-form"

          initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.6 }}>

      <div className="col-lg-11 col-xs-12 contactus-form main-contact-us-form voffset-3">

        <motion.div className="col-12 wow fadeInLeft animated mb-2" data-wow-duration="4s" 

          initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.6 }}>

            <h3 className="global-heading-about-2 mb-2">Contact Us</h3>

         
            <form onSubmit={handleSubmit} className="Query-form-fields" noValidate>

              

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
<div>
                  {/* ✅ Response Message */}
                  {responseMsg && (
                    <p className="btn" style={{ color: responseMsg.toLowerCase().includes('success') ? 'green' : 'green', fontWeight: 'bold' }}>
                      {responseMsg}
                    </p>
                  )}
</div>
                   
                  </div>

                </div>

              </div>

            </form> 

        </motion.div>

        <motion.div className="row mb-5" 

          initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.6 }}>

        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 wow fadeInRight animated" data-wow-duration="4s" >

          <div className="row" >

            <div className="col">

				<h3 className="global-heading-about-2"> Location Alivaa Hotels </h3>

            </div>

			 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.0253248766794!2d77.03770407469985!3d28.41849269376977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229c15fbf0c5%3A0x14ca65f09ab743f!2sAlivaa%20Hotel%20Gurugram%20Sohna%20Road%20City%20Center!5e0!3m2!1sen!2sin!4v1719313653024!5m2!1sen!2sin" width="100%" height="320"  loading="lazy" ></iframe>

			</div>

        </div>



        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 wow fadeInRight animated" data-wow-duration="4s" >

          <div className="row" >

            <div className="col">

						<h3  className="global-heading-about-2">

							Location Hoften Hotels

						</h3>

            </div>

						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.9186975512657!2d77.06394499999999!3d28.421709999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23005fc2e163%3A0xc2d2cfa9f94c031b!2sHoften%20Sukh%20Vasa%20Sector%2051%2C%20Gurugram%2C%20India!5e0!3m2!1sen!2sin!4v1747986378364!5m2!1sen!2sin" width="600" height="320" loading="lazy"></iframe>

			          </div>

        </div>

        </motion.div>





      </div>

      </motion.div>

  

    </motion.section>

    )

}

export default ContactUs  