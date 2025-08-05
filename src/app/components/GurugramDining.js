



'use client'; 

import { motion } from "framer-motion";

import { useState } from "react";

import "../../app/styles/alivaadining.css";



const GurugramDining = ()=>{
const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
    no_of_guest: '',
    source_enquiry: 'hoften-gurugram-dine',
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
      const response = await fetch('https://demo.cinuniverse.com/alivaa/dine-mail.php', {
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
          no_of_guest: '1',
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

    <section className="about-us accomodation-main gurugram-dining">

    <article className="container text-center">

      

      <div className="col-xs-12 no-pad voffset-2 res-no-margin">

        <motion.div className="room-block"

        initial={{ opacity: 0, x: -500, y: 0 }}

        whileInView={{ opacity: 1, x: -140, y: 0  }}

        transition={{ duration: 2 }}>

          

          <img src="images/hofton-gallery/mehac-cafe-hoften.webp" alt="Accommodation in Gurgaon" className="custom-img-responsive img-thumbnail  wow fadeInUp animated gurugram-dining" data-wow-duration="4s" style={{width: "60%", height:"110%",marginLeft:"100px",visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}/>

          <motion.div className="room-main-info right-block wow fadeInDown animated gurugram-dining" data-wow-duration="4s" style={{width:"50%",height:"78%",visibility: "visible", WebkitAnimationDuration: "6s",  MozAnimationDuration: "6s",  animationDuration: "6s"}}
          initial={{ opacity: 0, x: 500,y: -250 }}

          whileInView={{ opacity: 1, x: 130,y: -250  }}

          transition={{ duration: 2 }}>

          <h3 className="global-heading-gurugram-1" style={{marginTop:"20px",marginLeft:"20px", color:"#04542d !important"}}>

          Café Mahec

            </h3>

            <p className="text-two text-justify" style={{fontSize:"14px",marginLeft:"20px"}}>

            Taste the best of global flavours at Café Mahec, our in-house multi-cuisine restaurant in Gurugram that stands out for its warm ambience, fresh use of ingredients, and innovative recipes. Whether you are in the mood for the cafe's signature dish or unique flavours while being in the comfort of the cafe, our Café Mahec provides the most delicious creations for the different palates.

            </p>

            <a  style={{fontSize: "14px",marginLeft:"20px",backgroundColor:"#245704 !important"}} className="hoftenctacolor btn btn-primary-hoften" data-bs-toggle="modal" data-bs-target="#banquet-enquiry">Enquire Now</a>

          </motion.div>

        </motion.div>

      </div>

  

    </article>

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

    <div className="modal-body">
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

}

export default GurugramDining;