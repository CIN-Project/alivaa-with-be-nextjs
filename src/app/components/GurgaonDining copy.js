'use client'; 

//import { useEffect, useState } from "react";
import { useState } from "react";
import "../../app/styles/alivaadining.css";

const GurgaonDining = ({rsoot})=>{
 const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
    no_of_guest: '',
    source_enquiry: 'alivaa-gurugram-dine',
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
            {/* room */}
            <div id="dining">
                {rsoot &&
                rsoot.length &&
                rsoot.map((val, index) => (
            <section className="room_cs mt-0" key={index}>
              <div className="container-md p-0 shadow-sm">
                <div className="global-heading-sec text-start">
                  <div className="row align-items-center" data-aos="fade-in" data-aos-easing="ease-in-sine">
                    {/* Left Column (Image) */}
                    <div className="col-md-7">
                      {/* <video autoPlay loop muted playsInline className="w-100 over-room-vd primary-radius">
                          <source src="/images/dining/CafeStaywoke.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video> */}
                            <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
                            <iframe
                              loading="lazy"
                              title="Gumlet video player"
                              src={`https://play.gumlet.io/embed/${val.video_link}?autoplay=1&loop=1&mute=1&playsinline=1`}
                              style={{
                                border: "none",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                              }}
                              allow="autoplay; accelerometer; gyroscope; encrypted-media; picture-in-picture; fullscreen"
                              allowFullScreen
                            ></iframe>
                          </div>
                    </div>

                    {/* Right Column (Text) */}
                    <div className="col-md-5 space_in d-flex flex-column justify-content-center">
                      <h2 className="inner-head mt-5">Cafe Staywoke</h2>
                      <p className="mb-2" style={{textAlign:"justify"}}>
                    {val.short_description}
                      </p>

<div className="container my-0 m-0 mt-2 p-0">
<div className="resto-timing">  
{/* <h4 className="mb-0">Cafe Staywoke</h4> */}
<ul className="mt-3 mb-0">
<li>
<span className="hd1">Breakfast</span>
</li>
<li>
<span>
<strong>Open | </strong> Mon - Fri: {val.opening_hour} am to {val.closing_hour} am
</span><br></br>
<span>Sat & Sun : 7 am to 11am</span>
</li>
<li>
<span>
<i className="fa fa-credit-card" aria-hidden="true" /> {val.payment_type}
</span>
</li>
</ul>
</div>
</div>

                      <a className="box-btn  bg_green rounded-0 btn btn-dark mt-3 auto-width-btn" style={{backgroundColor:"#002d62"}} data-bs-toggle="modal" data-bs-target="#banquet-enquiry">Enquire Now</a>

                           <div className="modal fade mt-5" id="banquet-enquiry" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog mt-5" role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{textAlign: "left"}}>
                            <h6 className="modal-title" id="myModalLabel">Enquire Now</h6>
                            <button style={{textAlign: "right"}} type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
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
            
                    </div>
                  </div>
                </div>
              </div>
            </section>

       
))}
</div>
            </>
        );
}

export default GurgaonDining;