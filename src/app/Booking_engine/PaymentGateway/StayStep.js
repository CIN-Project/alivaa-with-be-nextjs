"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignRight,
  faArrowRight,
  faFileEdit,
  faHouse,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import * as ReactDOM from "react-dom";
import axios from "axios";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useBookingEngineContext } from "../../context/BookingEngineContext";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import StayStepRoomManager from "./StayStepRoomManager";
import "flatpickr/dist/themes/material_green.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "./DatePicker";
import Properties from "./Properties";
const StayStep = ({ goNext, onClose }) => {
  const {
    selectedPropertyPhone,
    selectedPropertyName,
    selectedPropertyId,
    selectedStartDate,
    selectedEndDate,
    totalPrice,
    setTotalPrice,
    selectedRoom,
    setSelectedRoom,
    selectedRooms,
    selectedRoomRate,
    getRoomNameById,
    setSelectedRoomDetails,
    cancellationPolicyState,
    addonList,
    setAddonList,
  } = useBookingEngineContext();

  const dummyImage = "/no_image.jpg";
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const totalAdults = selectedRooms.reduce((sum, room) => sum + room.adults, 0);
  const totalChildren = selectedRooms.reduce(
    (sum, room) => sum + room.children,
    0
  );
  const totalRooms = selectedRooms.length;
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [isPropertyVisible, setIsPropertyVisible] = useState(false);
  const [isRoomsVisible, setIsRoomsVisible] = useState(false);
  const [isRoomsClose, setIsRoomsClose] = useState(false);

  const [filters, setFilters] = useState({
    offer: "",
    query: "",
    dateRange: { start: "", end: "", totalPrice: 0 },
    guests: { adults: 1, children: 0, rooms: 1 },
  });
  const formatDate = (date) => {
    if (!date) return "N/A";
    return new Date(date).toISOString().split("T")[0];
  };

  const calculateNumberOfDays = () => {
    if (!selectedStartDate || !selectedEndDate) return 1;
    const start = new Date(selectedStartDate);
    const end = new Date(selectedEndDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const calculateBasePrice = () => {
    const numberOfDays = calculateNumberOfDays();

    // Sum all selectedRoom's roomRate
    const totalRoomRate = selectedRoom?.reduce(
      (sum, room) => sum + (room?.roomRate || 0),
      0
    );

    return totalRoomRate * numberOfDays;
  };

  const calculateTotalWithTax = () => {
    const basePrice = calculateBasePrice();
    const taxRate = basePrice >= 7000 ? 0.18 : 0.12;
    const taxAmount = basePrice * taxRate;
    return basePrice + taxAmount;
  };

  const basePrice = calculateBasePrice();
  const finalAmount = calculateTotalWithTax();




  useEffect(() => {
    const fetchAddOns = async () => {
      try {
        if (selectedPropertyId != null) {
          const response = await axios.post("/api/staah-api/add-ons", {
            selectedPropertyId,
          });
          const properties = response?.data;
          if (Array.isArray(properties)) {
            setAddonList(properties[0]?.ExtrasData || []);
          } else {
            console.error("Invalid Property:", properties);
          }
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchAddOns(); // Call the async function inside useEffect
  }, [selectedPropertyId]);

  useEffect(() => {
    if (finalAmount !== 0 && finalAmount !== null && !isNaN(finalAmount)) {
      setTotalPrice(finalAmount);
    }
  }, [finalAmount, selectedRoom]); // Runs only when `finalAmount` changes

  const taxRate = basePrice >= 7000 ? "18%" : "12%";

  const openCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };
  const openPropertyPage = (id) => {
    setSelectedRoomDetails({ isPropertyVisible: false, id: id });
    setSelectedRoomId(id);
    setIsPropertyVisible(true);
  };
  const removeProperty = (id) => {
    setSelectedRoom((prev) =>
      prev.map((room) =>
        room.id === id
          ? { ...room, roomId: "", roomName: "", roomRate: "", roomImage: null } // Use null instead of {}
          : room
      )
    );
  };

  const openDatePickerPage = () => {
    setIsDatePickerVisible(!isDatePickerVisible);
  };

  const handleDateChange = (startDate, endDate, totalPrice) => {
    setFilters({
      ...filters,
      dateRange: { start: startDate, end: endDate, totalPrice },
    });
  };
  const openRoomPage = () => {
    setIsRoomsClose(true);
    setIsRoomsVisible(!isRoomsVisible);
  };

  const closeRoomChange = () => {
    setIsRoomsClose(false);
    setIsRoomsVisible(false);
  };
  const handleRoomChange = (adults, children, roomCount) => {
    setFilters((prev) => ({
      ...prev,
      guests: { adults, children, rooms: roomCount },
    }));
  };


  const proceedAddOn =(selectedRoom)=>{
    const isProceed = selectedRoom.every( room => room.roomId);
    if(isProceed){
      goNext();
    }else{
  
      alert("select your rooms");
    }
  }

  return (
    <div className="stay-info">
      <div className="wizard-step-global-padding">
          <h4>YOUR STAY</h4>
          <div className="accordion" id="room-details">
            {selectedRoom?.length > 0
              ? selectedRoom.map((room, index) => (
                  <div className="accordion-item" key={room?.id || index}>
                    <div className="m-2">
                      {typeof room.roomImage === "string" &&
                      room.roomImage?.trim() !== "" ? (
                        <Image
                          src={room.roomImage}
                          className="img-fluid room-image rounded-3"
                          alt="Room Image"
                          height={80}
                          width={100}
                          onError={(e) => (e.target.src = dummyImage)}
                        />
                      ) : (
                        // Grey placeholder when no image is available
                        <div>
                          <div
                            className="room-placeholder rounded-3"
                            style={{
                              width: "auto",
                              height: "80px",
                              backgroundColor: "#ccc",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                              margin: "5px",
                            }}
                            onClick={() => {
                              openPropertyPage(room?.id);
                              onClose();
                            }}
                          >
                            Select Room
                          </div>
                        </div>
                      )}
                    </div>

                    {room?.roomId && room?.roomName ? (
                      <div className="row p-2">
                        <div className="col-8">
                          <h6 className="h6">{room.roomName}</h6>
                        </div>
                        <div className="col-4">
                          <div className="row">
                            <div className="col-2">
                              <FontAwesomeIcon
                                className="cursor-pointer"
                                icon={faEdit}
                                onClick={() => {
                                  openPropertyPage(room?.id);
                                  onClose();
                                }}
                              />
                            </div>
                            <div className="col-2 ml-2">
                              <FontAwesomeIcon
                                className="cursor-pointer"
                                icon={faTrashAlt}
                                onClick={() => removeProperty(room?.id)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          {/* <h6>Best Available Rate - Room Only ₹{room?.roomRate}</h6> */}
                          <h6>
                            {room?.roomPackage} - ₹{room?.roomRate}
                          </h6>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))
              : null}

            <div className="accordion-item m-2">
              <h6>
                Stay Dates
                <div className="room-flex my-2">
                  <p onClick={openDatePickerPage}>
                    {formatDate(selectedStartDate)}{" "}
                    <FontAwesomeIcon icon={faArrowRight} />{" "}
                    {formatDate(selectedEndDate)}
                  </p>
                </div>
              </h6>
              {isDatePickerVisible && (
                <div className="main-bx-field mb-3 bdr-booking-bottom wizard-calender">
                  <DatePicker
                    selectedStartDate={selectedStartDate}
                    selectedEndDate={selectedEndDate}
                    rates={totalPrice}
                  />
                </div>
              )}
            </div>
            <div className="accordion-item m-2">
              <h6 className="mb-2">
                Guests and Rooms &nbsp;&nbsp;
                <FontAwesomeIcon icon={faEdit} onClick={openRoomPage} />
              </h6>
              {isRoomsVisible && (
                <div className="row">
                  <div className=" col-md-12 main-bx-field filter-item me-3 bdr-booking-bottom wizard-room-manager">
                    <StayStepRoomManager onRoomChange={handleRoomChange} />
                  </div>
                </div>
              )}
              {/* {!isRoomsVisible && */}
              <div className="room-flex mb-2">
                <p>{`${totalAdults} Adults, ${totalChildren} Children, ${totalRooms} Rooms`}</p>
              </div>
              {/* } */}
            </div>

            <div className="accordion-item m-2">
              <div className="room-flex">
                <p>Total Amount Payable </p>
                <p>
                  <strong>₹{finalAmount}</strong>
                </p>
              </div>
              <p className="m-0 inclusive">*Inclusive of {taxRate} Tax</p>
              <div className="accordion-body my-2 p-0">
                <button
                  type="button"
                  className="btn btn-link p-0"
                  data-bs-toggle="modal"
                  data-bs-target="#rateDetailsModal-b"
                >
                  Rate Details
                </button>
              </div>
            </div>
          </div>
          <div className="cancellation-policy">
            <p>
              <strong>Cancellation Policy</strong>
            </p>
            <span>
              {cancellationPolicyState}
              {/* Free cancellation by 2PM - 1 day prior to arrival to avoid a penalty of 1 night charge plus any applicable taxes & fees. */}
            </span>
          </div>
      </div>
      {/* <div className="book-a-stay wizard-bottom-fixed">
        <button onClick={goNext} className="btn btn-primary w-100">
          Proceed to Add-Ons
        </button>
      </div> */}
      <div className="book-a-stay wizard-bottom-fixed">
        <button onClick={()=>proceedAddOn(selectedRoom)} className="btn btn-primary w-100">
          Proceed to Add-Ons
        </button>
      </div>

      {ReactDOM.createPortal(
        <div
          className="modal fade"
          id="rateDetailsModal-b"
          tabIndex="-1"
          aria-labelledby="rateDetailsModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="rateDetailsModalLabel">
                  Rate Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  {" "}
                  CLOSE{" "}
                  <Image
                    src="./images/white_close_icon.svg"
                    alt="close icon"
                    width={25}
                    height={25}
                  />
                </button>
              </div>
              <div className="modal-body">
                <div className="popup-box-contentrj1">
                  <div className="popup-amenity-items">
                    {selectedRoom && (
                      <div>
                        <h6 className="py-2">{selectedRoom.roomName}</h6>
                        <h6>{selectedRoom.RoomDescription}</h6>
                        <p>
                          <strong>Base Price:</strong> ₹ {basePrice}
                        </p>
                        <p>
                          <strong>Tax ({taxRate}):</strong> ₹{" "}
                          {finalAmount - basePrice}
                        </p>
                        <p>
                          <strong>Total Price:</strong> ₹ {finalAmount}
                        </p>
                        <p>
                          <strong>Check-in:</strong>{" "}
                          {formatDate(selectedStartDate)}
                        </p>
                        <p>
                          <strong>Check-out:</strong>{" "}
                          {formatDate(selectedEndDate)}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-3">
                  <h6>Cancellation Policy</h6>
                  <p>{cancellationPolicyState}</p>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default StayStep;
