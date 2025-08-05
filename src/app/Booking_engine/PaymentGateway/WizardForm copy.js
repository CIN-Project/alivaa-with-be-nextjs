"use client";
import { useState, useRef, useEffect } from "react";
import { useBookingEngineContext } from "../../context/BookingEngineContext";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFileLines, faCreditCard, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PostReservationApi from "../PostReservation";

// Static data
const steps = [
  { title: "Stay", icon: <FontAwesomeIcon icon={faHouse} /> },
  { title: "Detail", icon: <FontAwesomeIcon icon={faFileLines} /> },
  { title: "Payment", icon: <FontAwesomeIcon icon={faCreditCard} /> },
  { title: "Confirm", icon: <FontAwesomeIcon icon={faCheckCircle} /> },
];

const nextButtonLabels = ["Proceed to Details", "Continue to Payment", "Pay Now", "Back to home"];

const WizardSidebar = ({ isVisible, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const { selectedStartDate, selectedEndDate, totalPrice } = useBookingEngineContext();
  const { selectedRooms, getRoomNameById, selectedRoom, setUserDetails   } = useBookingEngineContext();
  const totalAdults = selectedRooms.reduce((sum, room) => sum + room.adults, 0);
  const totalChildren = selectedRooms.reduce((sum, room) => sum + room.children, 0);
  const totalRooms = selectedRooms.length;
  const [isFocused, setIsFocused] = useState(false);
  // const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gstNumber: "",
    specialRequests: "",
    agreeToTerms: false,
  });
  const containerRef = useRef(null);

  // Format date for display
  const formatDate = (date) => {
    if (!date) return "N/A";
    return new Date(date).toISOString().split('T')[0];
   
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    const { title, firstName, lastName, email, phone, agreeToTerms, gstNumber } = formData;
    if (!title || !firstName || !lastName || !email || !phone || !gstNumber || !agreeToTerms) {
      toast.error("Please fill all mandatory fields and accept terms & conditions.", {
        position: "top-right",
        autoClose: 3000,
      });
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Store user details in context
    setUserDetails({
      name: `${formData.title} ${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      gstNumber: formData.gstNumber,
      cardDetails: "Card details to be added in the payment step", // Placeholder
    });

    // Pass data to the API component
    return <PostReservationApi formData={formData} selectedStartDate={selectedStartDate} selectedEndDate={selectedEndDate} totalPrice={totalPrice} />;
  };

  // Handle step navigation
  const goNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className={`${isVisible ? "d-block" : "d-none"}`} id="sidebar_payment" ref={containerRef}>
      <div className="nav-sidebar" style={{ overflowY: "auto" }}>
        <div className="nav flex-column nav-pills me-0">
          {steps.map((step, index) => (
            <button key={index} className={`nav-link ${index === currentStep ? "active" : "active1"}`} onClick={() => setCurrentStep(index)}>
              <span>{step.icon}</span>
              {step.title}
            </button>
          ))}
        </div>
      </div>

      <div className="side-overlay isActive">
        <a className="widget-heading close-widget" onClick={onClose}>
          <span className="close-side-widget">x</span>
        </a>
        <div className="tab-content">
          <div className="tab-pane1">
            {currentStep === 0 && (
              <div className="stay-info">
                <h4>YOUR {steps[currentStep].title}</h4>
                <div className="accordion" id="room-details">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#room-adult" aria-expanded="true" aria-controls="room-adult">
                        <strong>{`${totalAdults} Adults, ${totalChildren} Children, ${totalRooms} Rooms`}</strong>
                      </button>
                    </h2>
                    {selectedRoom ? <p>{selectedRoom.roomName}</p> : <p>No room selected</p>}
                    <div id="room-adult" className="accordion-collapse collapse show" data-bs-parent="#room-details">
                      <div className="accordion-body">
                        <div className="room-flex">
                          <p>Best Available Rate - Room Only</p>
                          <p><strong>₹{totalPrice}</strong></p>
                        </div>
                        <a href="javascript:void(0)" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#rate-details">Rate Details</a>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Price
                      </button>
                      <p><strong>₹{totalPrice}</strong></p>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>{totalRooms} Rooms</p>
                        <div className="room-flex">
                          <p><strong>{formatDate(selectedStartDate)}</strong> To <strong>{formatDate(selectedEndDate)}</strong></p>
                          <p><strong>₹{totalPrice}</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="spacer">
                    <div className="room-flex">
                      <p>Total Amount Payable at Hotel</p>
                      <p><strong>₹{totalPrice}</strong></p>
                    </div>
                    <p className="m-0 inclusive">*Inclusive of all Taxes</p>
                  </div>
                </div>
                <div className="cancellation-policy">
                  <p><strong>Cancellation Policy</strong></p>
                  <span>
                    Free cancellation by 2PM - 1 day prior to arrival to avoid a penalty of 1 night charge plus any applicable taxes & fees.
                  </span>
                </div>
                <div className="book-a-stay">
                  <button onClick={goNext} className="btn btn-primary w-100" disabled={currentStep === steps.length - 1}>
                    {nextButtonLabels[currentStep]}
                  </button>
                </div>
              </div>
            )}

{currentStep === 1 && (
                <div className="primary-details">
                  <h4>Enter {steps[currentStep].title}</h4>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className=" mb-3 p-0">
                          {/* <div className="select-selected">Title</div> */}
                          <select id="title-select" name="title" value={formData.title}  onChange={handleChange}
                              className="form-control select-options select-selected" >
                              <option value={0}>Select Title</option>
                              <option value={1}>Mr</option>
                              <option value={2}>Ms</option>
                              <option value={3}>Mrs</option>
                              <option value={4}>Miss</option>
                              <option value={5}>Dr</option>
                              <option value={6}>Prof</option>
                            </select>
                        </div>
                       
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-box mb-3">
                          <input name="firstName" type="text" placeholder="First Name"
                            value={formData.firstName} onChange={handleChange} className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-box mb-3">
                          <input name="lastName" type="text" placeholder="Last Name"
                            value={formData.lastName} onChange={handleChange} className="form-control"/>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-box mb-3">
                          <input name="email" type="email" placeholder="Email" value={formData.email} 
                            onChange={handleChange} className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-box mb-3">
                          <div className="input-group">
                          <input name="phone" type="tel" placeholder="Phone" value={formData.phone} onChange={handleChange}
                              className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-box mb-3">
                          <div className="input-group">
                            <input name="gstnumber" type="text" placeholder="GST Number" value={formData.gstNumber}
                              onChange={handleChange} className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-box mb-3">
                          <textarea name="specialRequests" placeholder="Special Requests" value={formData.specialRequests} 
                          onChange={handleChange} className="form-control" cols={30} rows={3}></textarea>
                        </div>
                      </div>
                      
                     
                      <div className="col-lg-12 col-md-12">
                        <div className="mb-3 form-check">
                        <div className="form-check">
                            <input  type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange}
                              className="form-check-input" />
                              <label className="form-check-label">
                                I agree to the <a href="#">Privacy Policy</a> and <a href="#">Terms & Conditions</a>
                              </label>
                          </div>
                        </div>
                      </div>

                      {/* <button type="submit" className="btn btn-primary">
                          Submit
                        </button> */}
                        <div className="book-a-stay">
                          <button onClick={goNext} className="btn btn-primary w-100" type="submit" disabled={currentStep === steps.length - 1}>
                            {nextButtonLabels[currentStep]}
                          </button>
                        </div>
                      
                    </div>
                  </form>
                </div>
              )}

              {currentStep === 2 && (
                <div className="payment-details primary-details">
                  <h4>Make {steps[currentStep].title}</h4>
                  <div className="credit-card-images">
                    <Image alt="card image" height={40} width={60}  src="/images/crds-credit.png" className="credit-card-image" />
                    <Image alt="card image" height={40} width={60}  src="/images/crds-credit-1.png" className="credit-card-image" />
                    <Image alt="card image" height={40} width={60}  src="/images/crds-credit-2.png" className="credit-card-image" />
                    <Image alt="card image" height={40} width={60}  src="/images/crds-credit-3.png" className="credit-card-image" />
                    {/* <Image alt="card image" height={40} width={60}  src="/images/crds-credit.png" class="credit-card-image" /> */}
                  </div>
                 
                  <form>
                    <div className="custom-select form-select mb-3 p-0">
                      <div id="card-type">
                          <select id="card-select" value={selectedTitle} onChange={handleSelectChange} className="form-control" >
                            <option value={0}>Select Card Type</option>
                            <option value={1}>Visa</option>
                            <option value={2}>MasterCard</option>
                            <option value={3}>American Express</option>
                            <option value={4}>Discover</option>
                          </select>
                      </div>
                    </div>
                    <div className="form-box mb-3">
                      <input type="text" className="form-control" id="card-number" name="card-number" maxLength={16}
                        placeholder="1234 5678 9012 3456" required />
                    </div>
                    <div className="form-row">
                      <div className="form-box mb-3">
                        <input type="text" className="form-control" id="expiry-date" name="expiry-date" placeholder="Expiry Date (MM/YY)"
                          required />
                      </div>
                      <div className="form-box mb-3">
                        <input type="text" className="form-control" id="cvv" name="cvv" maxLength={4} placeholder="CVV"  />
                      </div>
                    </div>
                    <div className="form-box mb-3">
                      <input type="text"
                        className="form-control" id="cardholder-name" name="cardholder-name" placeholder="Name on Card" required />
                    </div>

                    <div className="book-a-stay">
                          <button onClick={goNext} className="btn btn-primary w-100" type="submit" disabled={currentStep === steps.length - 1}>
                            {nextButtonLabels[currentStep]}
                          </button>
                        </div>
                    
                  </form>
                </div>
              )}

              {currentStep === 3 && (
                <div className="booking-confirmed">
                  <Image src="/images/verified.gif" height={100} width={100} alt="confirmation" className="confirm-gif" />
                  <h3>Booking Confirmed</h3>
                  <p className="text-center">
                    Awesome! Your rooms are booked!
                    <br /> We sent you a confirmation email with all the details.
                  </p>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WizardSidebar;