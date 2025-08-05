'use client';

import { useEffect } from "react";

const BookingFormHoften = () => {
  useEffect(() => {
    // Function to dynamically load scripts or styles
    const loadScript = (id, src, type = "script", callback) => {
      if (document.getElementById(id)) return callback && callback();

      let element;
      if (type === "link") {
        element = document.createElement("link");
        element.rel = "stylesheet";
        element.href = src;
      } else {
        element = document.createElement("script");
        element.src = src;
        element.async = true;
        element.onload = callback;
      }
      element.id = id;
      document.head.appendChild(element);
    };

    // Function to initialize datepicker
    const initDatePicker = () => {
      if (window.$ && window.$.fn.datepicker) {
        window.$("#checkin").datepicker({
          dateFormat: "dd-mm-yy",
          minDate: 0,
          onSelect: function (selectedDate) {
            let checkinDate = window.moment(selectedDate, "DD-MM-YYYY");
            let checkoutDate = checkinDate.clone().add(1, "days");

            window.$("#checkout").datepicker("option", "minDate", checkoutDate.toDate());
            window.$("#checkout").datepicker("setDate", checkoutDate.format("DD-MM-YYYY"));
          },
        });

        window.$("#checkout").datepicker({
          dateFormat: "dd-mm-yy",
          minDate: "+1d",
        });
      } else {
        console.error("jQuery UI Datepicker not loaded properly.");
      }
    };

    // Load scripts and styles in order
    loadScript("jquery-ui-css", "https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css", "link");
    loadScript("jquery", "https://code.jquery.com/jquery-3.6.0.min.js", "script", () => {
      loadScript("jquery-ui", "https://code.jquery.com/ui/1.12.1/jquery-ui.js", "script", () => {
        loadScript("moment", "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js", "script", initDatePicker);
      });
    });

    // Cleanup function to remove injected scripts when component is unmounted
    return () => {
      ["propInfo", "jquery", "jquery-ui", "moment"].forEach((id) => {
        const script = document.getElementById(id);
        if (script) script.remove();
      });
    };
  }, []); // Empty dependency array to run once when component is mounted

  // Function to handle form submission
  const submitReservation = (event) => {
    event.preventDefault(); // Prevent default form submission

    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const adults = document.getElementById("adults").value;
    const rooms = document.getElementById("rooms").value;

    if (!checkin || !checkout) {
      alert("Please select check-in and check-out dates.");
      return;
    }

    const checkinFormatted = window.moment(checkin, "DD-MM-YYYY").format("YYYY-MM-DD");
    const checkoutFormatted = window.moment(checkout, "DD-MM-YYYY").format("YYYY-MM-DD");

    const reservationURL = `https://live.ipms247.com/booking/book-rooms-morphosukhvasagurugram?checkin=${checkinFormatted}&checkout=${checkoutFormatted}&adults=${adults}&rooms=${rooms}`;
    
    window.location.href = reservationURL; // Redirect to the reservation page
  };

  return (
    <section className="booking-form-section wow fadeInDown" data-wow-duration="2s" id="booking-engine">
      <article className="container">
        <div className="enqiure-inner">
          <div className="row">
            <div className="custom-form-outer-div">
              <div className="reservation-widget">
                <h3>Book Your Stay</h3>

                <label htmlFor="hotel">Hotel:</label>
                <select id="hotel" defaultValue="1">
                  <option value="1">Hotel Often</option>
                </select>

                <label htmlFor="checkin">Check-in:</label>
                <input type="text" id="checkin" autoComplete="off" required />

                <label htmlFor="checkout">Check-out:</label>
                <input type="text" id="checkout" autoComplete="off" required />

                <label htmlFor="adults">Adults:</label>
                <select id="adults" defaultValue="2">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>

                <label htmlFor="rooms">Rooms:</label>
                <select id="rooms" defaultValue="1">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <button onClick={submitReservation}>Search</button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default BookingFormHoften;
