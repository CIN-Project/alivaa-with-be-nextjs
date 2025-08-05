"use client";
import * as React from "react";
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Calendar, Search, X } from "lucide-react";
import dynamic from "next/dynamic";
import toast, { Toaster } from 'react-hot-toast';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./booking-style.css";

const Select = dynamic(() => import('react-select'), { ssr: false });

import useBook from "./useBook";
import { useForm } from './FormContext';

export default function BookNowForm() {

  const [isRoomMenuOpen, setIsRoomMenuOpen] = useState(false);
  const { isFormOpen, setIsFormOpen } = useForm();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const pathname = usePathname();

  const {
    rangeStart, setRangeStart, selectEndDate, rangeEnd, setRangeEnd, today1,
    formRows, children, adult, countroom,
    handleIncrement, handleDecrement, addNewRow, handleRemove
  } = useBook();

  const hotelOptions = [
    { 
      value: '',
      label: 'Select Hotel',
      isDisabled: true
    },
     {
      value: 'gurugram1',
      label: 'Alivaa Hotel, Gurugram',
      url: 'https://bookings.alivaahotels.com/inst/#/home?propertyId=981NJ8TQ49ro3Z7RTrbLaPgGZCWk8ihVQvzMylYvu085aOhvZIjS2TE3NTc=&JDRN=Y&RoomID=184902,184903,185018,185019,184904,185017,185949'
    },
    {
      value: 'gurugram2',
      label: 'Hoften Hotel, Gurugram',
      url: 'https://live.ipms247.com/booking/book-rooms-morphosukhvasagurugram'
    },
    { 
      value: 'mcleodganj',
      label: 'Alivaa Hotel, Mcleodganj',
      url: 'https://alivaahotels.securedreservations.com/reservation?bID=6d7880d9-c05f-4be6-811f-eeb846d0c59d&cID=f1c6c3f5-04d5-4180-9895-7f3e3f6b240c&destination=id=185914d6-4ebc-48b5-b982-6e81e5eb35b0&type=2'
    },
    { 
      value: 'lansdowne',
      label: 'Alivaa Hotel, Lansdowne',
      url: 'https://www.swiftbook.io/inst/#/home?propertyId=602NTIJ2geUuL2SfAqTDsRZZ6tXYTwa8NhGQ4ODY=&checkIn=2025-05-28&checkOut=2025-05-30&clientWidth=1280&JDRN=Y&RoomID=209630,209631,209632,209633,209709&noofrooms=2&adult0=3&child0=0&adult1=1&child1=0&gsId=602NTIJ2geUuL2SfAqTDsRZZ6tXYTwa8NhGQ4ODY='
    },
   
  ];

  const checkInDatePickerRef = useRef(null);
  const checkOutDatePickerRef = useRef(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const isHomePage = pathname === '/';

const [monthsToShow, setMonthsToShow] = useState(2);

useEffect(() => {
  const updateMonthsToShow = () => {
    if (window.innerWidth < 768) {
      setMonthsToShow(1); // mobile: show one month
    } else {
      setMonthsToShow(2); // desktop/tablet: show two months
    }
  };

  updateMonthsToShow(); // set on load
  window.addEventListener('resize', updateMonthsToShow); // update on resize

  return () => {
    window.removeEventListener('resize', updateMonthsToShow);
  };
}, []);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isRoomMenuOpen && !event.target.closest('.rooms-child-outer-block')) {
        setIsRoomMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isRoomMenuOpen]);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const formatDateForGurugram = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleCheckAvailability = () => {
    if (!selectedHotel) {
      toast.error("Please select a hotel");
      return;
    }

    let bookingUrl = selectedHotel.url;
    
    if (selectedHotel.value === 'mcleodganj') {
      const checkInDate = formatDate(rangeStart);
      const checkOutDate = formatDate(rangeEnd);
      let guestString = '[';
      formRows.forEach((row, index) => {
        if (index > 0) guestString += ',';
        guestString += `ac${index + 1}=${row.count1}`;
      });
      guestString += ']';
      bookingUrl += `&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&guest=${guestString}&roomPropertyID=185914d6-4ebc-48b5-b982-6e81e5eb35b0`;
    } else if (selectedHotel.value === 'gurugram1') {
      const checkIn = formatDateForGurugram(rangeStart);
      const checkOut = formatDateForGurugram(rangeEnd);
      bookingUrl += `&checkIn=${checkIn}&checkOut=${checkOut}&clientWidth=1265&noofrooms=${countroom}`;
      
      formRows.forEach((row, index) => {
        bookingUrl += `&adult${index}=${row.count1}&child${index}=${row.count2}`;
      });
      bookingUrl += `&gsId=981NJ8TQ49ro3Z7RTrbLaPgGZCWk8ihVQvzMylYvu085aOhvZIjS2TE3NTc=`;
    } else if (selectedHotel.value === 'lansdowne') {
  const checkIn = formatDate(rangeStart);
  const checkOut = formatDate(rangeEnd);

  // Start building the base URL
  bookingUrl = `https://www.swiftbook.io/inst/#/home?propertyId=602NTIJ2geUuL2SfAqTDsRZZ6tXYTwa8NhGQ4ODY=`;
  bookingUrl += `&checkIn=${checkIn}&checkOut=${checkOut}`;
  bookingUrl += `&clientWidth=1280`; // Optional: device width
  bookingUrl += `&noofrooms=${countroom}`;

  // Add each room's adult and child count
  formRows.forEach((row, index) => {
    bookingUrl += `&adult${index}=${row.count1}&child${index}=${row.count2}`;
  });

  // Optional: gsId or other identifiers can be added here if needed
  bookingUrl += `&gsId=602NTIJ2geUuL2SfAqTDsRZZ6tXYTwa8NhGQ4ODY=`;
}

    window.open(bookingUrl, "_blank");
  };

  const handleHotelSelect = (option) => {
    setSelectedHotel(option);
  };

  const openCheckInCalendar = (e) => {
    e.stopPropagation();
    checkInDatePickerRef.current.setOpen(true);
  };

  const openCheckOutCalendar = (e) => {
    e.stopPropagation();
    checkOutDatePickerRef.current.setOpen(true);
  };

  const toggleBookingForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFormOpen(!isFormOpen);
    if (isRoomMenuOpen) {
      setIsRoomMenuOpen(false);
    }
  };

  const handleRoomMenuToggle = (e) => {
    e.stopPropagation();
    setIsRoomMenuOpen(!isRoomMenuOpen);
  };

  return (
    <>
      <Toaster position="top-right" />

      <div className={`header_booking_engine_container ${isFormOpen ? "show" : ""} ${isHomePage ? 'home-page-class' : ''}`}>
        <div className="header_booking_engine">
          <div className="row justify-content-center">
            <div className="header-search-select-option col-12 col-md-3">
              <label htmlFor="hotel-select">Hotel/City</label>
              <Select
                className="form-control p-0 border-0"
                id="hotel-select"
                options={hotelOptions}
                onChange={handleHotelSelect}
                defaultValue={hotelOptions[0]}
              />
            </div>

            <div className="datepicker-outer col-12 col-md-2">
              <label htmlFor="check-in">Check-in</label>
              <div className="datepicker-container">
                <DatePicker
                  selectsStart
                  selected={rangeStart}
                  dateFormat="dd/MM/yyyy"
                  onCalendarOpen={() => setIsCalendarOpen(true)}
                  onCalendarClose={() => setIsCalendarOpen(false)}
                  minDate={today1}
                  startDate={rangeStart}
                  endDate={rangeEnd}
                  className="form-control pl-2"
                  id="check-in"
                  onChange={(date) => setRangeStart(date)}
                  monthsShown={monthsToShow}
                  shouldCloseOnSelect={true}
                  ref={checkInDatePickerRef}
                />
                <span className="calendar-icon" onClick={openCheckInCalendar}>
                  <Calendar size={20} />
                </span>
              </div>
            </div>

            <div className="datepicker-outer col-12 col-md-2">
              <label htmlFor="check-out">Check-out</label>
              <div className="datepicker-container">
                <DatePicker
                  selectsEnd
                  selected={rangeEnd}
                  dateFormat="dd/MM/yyyy"
                  onCalendarOpen={() => setIsCalendarOpen(true)}
                  onCalendarClose={() => setIsCalendarOpen(false)}
                  id="check-out"
                  endDate={rangeEnd}
                  className="form-control pl-2"
                  onChange={selectEndDate}
                  monthsShown={monthsToShow}
                  shouldCloseOnSelect={true}
                  minDate={rangeStart}
                  ref={checkOutDatePickerRef}
                />
                <span className="calendar-icon" onClick={openCheckOutCalendar}>
                  <Calendar size={20} />
                </span>
              </div>
            </div>

            <div className="rooms-child-outer-block col-12 col-md-3" style={{ position: "relative" }}>
              <label htmlFor="rooms-childs-input">Please Select</label>
              <input
                type="text"
                id="rooms-childs-input"
                className="rooms-childs-input form-control"
                value={`Rooms: ${countroom} - Adults: ${adult()} - Children: ${children()}`}
                readOnly
                onClick={handleRoomMenuToggle}
              />
              {isRoomMenuOpen && (
                <div className="showmoreT add-rooms-block" style={{ position: "absolute", top: "100%", left: 0, width: "100%" }} onClick={(e) => e.stopPropagation()}>
                  <div>
                    {formRows.map((row, index) => (
                      <div key={row.id} className="add-rooms-div">
                        <div className="room-name-or-remove">
                          <span>Room {index + 1}</span>
                            <button className="yellow-btn rmv" onClick={() => handleRemove(row.id)} style={{display: "block" }}>
                              Remove
                            </button>
                        </div>
                        
                        <div className="row justify-content-center ms-0">
                          <div className="col-6">
                            <div className="form-group plus-min-style">
                              <p>Adult(s):</p>
                              <button onClick={() => handleDecrement(row.id, "count1")} disabled={row.count1 <= 1}>-</button>
                              <span style={{ margin: "0 6px" }}>{row.count1}</span>
                              <button onClick={() => handleIncrement(row.id, "count1")} disabled={row.count1 >= 2}>+</button>
                            </div>
                          </div>
                          <div className="col-6">
                              <div className="form-group plus-min-style">
                                <p>Child(ren):</p>
                                <button onClick={() => handleDecrement(row.id, "count2")} disabled={row.count2 <= 0}>-</button>
                                <span style={{ margin: "0 10px" }}>{row.count2}</span>
                                <button onClick={() => handleIncrement(row.id, "count2")} disabled={row.count2 >= 2}>+</button>
                              </div>
                          </div>
                        </div>
                        
                      </div>
                    ))}
                    <button onClick={addNewRow} className="yellow-btn btn">
                      Add Room
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="col-12 col-md-2">
              <button className="yellow-btn btn" onClick={handleCheckAvailability}>Check Availability</button>
            </div>
          </div>
        </div>
      </div>


      <div className={`booking-search-bar-btn-div ${isHomePage ? 'home-page-class' : ''}`} style={{ zIndex: isCalendarOpen ? 0 : 10 }}>
        <button 
          onClick={toggleBookingForm} 
          className="booking-toggle-btn"
          aria-label={isFormOpen ? "Close booking form" : "Open booking form"}
        >
          {isFormOpen ? (
            <X size={20} color="black" />
          ) : (
            <Search size={20} color="black" />
          )}
        </button>
      </div>
    </>
  );
}