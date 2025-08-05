"use client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DalhousieNewEnquiryPopupBook = ({ source = "alivaa-dalhousie", webSource = "alivaahotels.com" }) => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const [checkinDate, setCheckinDate] = useState(today);
  const [checkoutDate, setCheckoutDate] = useState(tomorrow);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    rooms: "1",
    adults: "1",
    children: "0",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClient, setIsClient] = useState(false); // add this to control portal rendering

  useEffect(() => {
    setIsClient(true); // only true on client-side
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checkinDate || !checkoutDate) {
      toast.error("Please select check-in and check-out dates.");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      ...formData,
      source_enquiry: source,
      web_source: webSource,
      checkin_date: checkinDate.toISOString().split("T")[0],
      checkout_date: checkoutDate.toISOString().split("T")[0],
    };

    try {
      const res = await fetch("https://demo.cinuniverse.com/alivaa/be-enquiry.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.status === "success") {
        toast.success(result.message);
        document.getElementById("enquiryModalClose").click();

        // Reset form
        setFormData({
          name: "",
          phone: "",
          message: "",
          rooms: "1",
          adults: "1",
          children: "0",
        });
        setCheckinDate(today);
        setCheckoutDate(tomorrow);
      } else {
        toast.error(result.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Failed to send enquiry.");
    }

    setIsSubmitting(false);
  };

  const modal = (
    <div className="modal fade" id="dalhousie-enquiry" tabIndex="-1" aria-labelledby="enquiryModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header py-3">
            <h5 className="modal-title" id="enquiryModalLabel">Enquire Now</h5>
            <button type="button" id="enquiryModalClose" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="row g-3">
                <div className="col-md-6 col-6">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="form-control" required />
                </div>
                <div className="col-md-6 col-6">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="form-control" maxLength={10} required />
                </div>
                <div className="col-md-6 col-6">
                  <label className="form-label">Check-in Date</label>
                  <DatePicker
                    selected={checkinDate}
                    onChange={(date) => {
                      setCheckinDate(date);
                      const nextDay = new Date(date);
                      nextDay.setDate(date.getDate() + 1);
                      setCheckoutDate(nextDay);
                    }}
                    minDate={today}
                    dateFormat="yyyy-MM-dd"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-6 col-6">
                  <label className="form-label">Check-out Date</label>
                  <DatePicker
                    selected={checkoutDate}
                    onChange={(date) => setCheckoutDate(date)}
                    minDate={checkinDate}
                    dateFormat="yyyy-MM-dd"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-4 col-4">
                  <label htmlFor="rooms" className="form-label">Rooms</label>
                  <input type="number" name="rooms" id="rooms" value={formData.rooms} onChange={handleChange} className="form-control" min="1" required />
                </div>
                <div className="col-md-4 col-4">
                  <label htmlFor="adults" className="form-label">Adults</label>
                  <input type="number" name="adults" id="adults" value={formData.adults} onChange={handleChange} className="form-control" min="1" required />
                </div>
                <div className="col-md-4 col-4">
                  <label htmlFor="children" className="form-label">Children</label>
                  <input type="number" name="children" id="children" value={formData.children} onChange={handleChange} className="form-control" min="0" />
                </div>
                <button type="submit" className="btnjawai-submit" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <style jsx>{`
        .modal{z-index: 9999999999!important;}
        #dalhousie-enquiry .btn-close{color:#000;opacity:1;font-size:1rem;}
        input.form-control, select.form-control{border-radius:0rem;}
        label.form-label{text-align:left;display:block;font-weight:500;}
        .btnjawai-submit {
          padding: 7px 15px;
          margin-top: 1em;
          background-color: #002d62;
          border: 1px solid #000;
          color: #fff;
          border-radius: 4px !important;
          transition: background-color 0.3s ease;
          text-transform: uppercase;
          font-weight: 500;
          letter-spacing: 2px;
        }
        .modal-content{border-bottom: 5px solid #002d62;}
        @media (max-width: 767px) {
          .modal-content {padding: 1rem;}
          .react-datepicker-wrapper .form-control,
          .form-control{font-size: 10px;padding: 0.575rem .75rem!important;}
          label.form-label{margin-bottom: 0px;}
          #dalhousie-enquiry .col-md-6,
          #dalhousie-enquiry .col-md-4 {margin-bottom: .1rem !important;}
        }
      `}</style>
    </div>
  );

  return <>{isClient && ReactDOM.createPortal(modal, document.body)}</>;
};

export default DalhousieNewEnquiryPopupBook;
