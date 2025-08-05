'use client';
import { useState } from "react";
import Image from "next/image";
import "../../app/styles/alivaadining.css";
const DalhousieDining = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
    no_of_guest: '',
    source_enquiry: 'alivaa-dalhousie-dine',
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
          source_enquiry: 'alivaa-dalhousie-dine',
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
      {/* room */}
      <section className="room_cs mt-0 jawai-new-diining">
        <div className="container-md p-0 shadow-sm">
          <div className="global-heading-sec text-start">
            <div className="row align-items-center" data-aos="fade-in" data-aos-easing="ease-in-sine">
              <div className="col-md-7">
                <Image src="/dalhousie-img/dining-image.png" height={400} width={500} alt="image" className="w-100" />
              </div>
              <div className="col-md-5 space_in d-flex flex-column justify-content-center">
                <h2 className="inner-head mt-5">Daalchini</h2>
                <p className="mb-2 text-justify" style={{ textAlign: 'justify' }}>
                 Indulge in a wide range of luscious bites at our multicuisine restaurant in Dalhousie. Daalchini serves some of the choicest dishes from continental, oriental, and all other sorts of cuisine that you may want to taste during your stay. With its plush interiors, comfortable seats, and a surreal outside view, the restaurant has a very inviting vibe. You’d definitely want to have your breakfast, lunch, and dinner here with your friends, family, or colleagues.
                </p>
                <div className="new-text-center">
                  <a className="alivactacolor box-btn  bg_green rounded-0 btn btn-dark mt-3 auto-width-btn" data-bs-toggle="modal" data-bs-target="#banquet-enquiry">Enquire Now</a>
                </div>
                
              </div>
            </div>

           {/*  <div className="row bg-light bg-gradient align-items-center mt-3" data-aos="fade-in" data-aos-easing="ease-in-sine">
              <div className="col-md-7 order-lg-2">
                <Image src="/jawai-img/dine-pvt-dining.png" height={500} width={500} alt="image" className="w-100" />
              </div>

              <div className="col-md-5 order-lg-1 space_in d-flex flex-column justify-content-center">
                <h2 className="inner-head mt-5">Private Dining</h2>
                <p className="mb-2 text-justify" style={{ textAlign: 'justify' }}>
                  For those who seek an intimate and exclusive experience, our private dining area offers the perfect secluded setting. Whether it's a romantic dinner for two, a special celebration with loved ones, or a quiet gathering, this space provides an unparalleled ambiance.  
                </p>
                <a className="alivactacolor box-btn  bg_green rounded-0 btn btn-dark mt-3 auto-width-btn" data-bs-toggle="modal" data-bs-target="#banquet-enquiry">Enquire Now</a>
              </div>
              
            </div>

            <div className="row align-items-center py-4" data-aos="fade-in" data-aos-easing="ease-in-sine">
              <div className="col-md-7">
                <Image src="/jawai-img/dine-unique.png" height={400} width={500} alt="image" className="w-100" />
              </div>
              <div className="col-md-5 space_in d-flex flex-column justify-content-center">
                <h2 className="inner-head mt-5">Unique Dining Spaces: Beyond the Open Air</h2>
                <p className="mb-2 text-justify" style={{ textAlign: 'justify' }}>
                  In addition to our stunning open spaces, Jawai Palash also offers a distinctive closed dining area set under comfortable tents. This unique setting provides a cosy and intimate atmosphere, perfect for cooler evenings or when you desire a more private, yet equally charming, dining experience. 
                </p>
                <a className="alivactacolor box-btn  bg_green rounded-0 btn btn-dark mt-3 auto-width-btn" data-bs-toggle="modal" data-bs-target="#banquet-enquiry">Enquire Now</a>
              </div>
            </div> */}



          </div>
        </div>
      </section>

      <style jsx>{`

      @media (max-width: 768px) {
        .jawai-new-diining .space_in{
              text-align: center !important;
        margin-top: 3rem !important;
        padding: 0 15px !important;
        transform: none !important;
        padding-left: 30px !important;
        }
               .jawai-new-diining .text-justify{
               text-align:center!important;
               }

      }
               
      
      `}
      </style>

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
}
export default DalhousieDining;