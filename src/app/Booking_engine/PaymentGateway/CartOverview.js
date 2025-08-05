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
import Image from "next/image";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useBookingEngineContext } from "../../context/BookingEngineContext"; // Adjust the import path

import "flatpickr/dist/themes/material_green.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CartOverview = ({ goNext, onClose }) => {
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
    selectedAddOns,
    setAddOns,
    addonAmountToatal,
    setAddonAmountToatal,
    addonList,
    setAddonList,
    selectedAddonList,
    selectedSetAddonList,
  } = useBookingEngineContext();

  const [addonImgList, setAddonImgList] = useState({
    170500000000023: "addons-img/cycling.jpg",
    170500000000024: "addons-img/cabin-cleaning.webp",
    170500000000025: "addons-img/break-fast.webp",
    170500000000026: "addons-img/meditation.webp",
    170500000000027: "addons-img/physical-activity-adults.png",
    170500000000028: "addons-img/workouts-activity.jpg",
    170500000000029: "addons-img/cabin-cleaning.webp",
    170500000000030: "addons-img/cabin-cleaning.webp",
    170500000000031: "addons-img/cabin-cleaning.webp",
    170500000000032: "addons-img/cabin-cleaning.webp",
    170500000000033: "addons-img/meditation.webp",
    170500000000034: "addons-img/cabin-cleaning.webp",
  });
  //const [addonList, setAddonList] = useState([]);
  const [totalAddOns, setTotalAddOns] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const dummyImage = "/no_image.jpg";
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
  const [amountToatal, setAmountToatal] = useState(0);
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
  const fromDate = formatDate(selectedStartDate);
  const toDate = formatDate(selectedEndDate);

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
  //   if (finalAmount !== 0 && finalAmount !== null && !isNaN(finalAmount)) {
  //     setTotalPrice(finalAmount);
  // }

  useEffect(() => {
    setAmountToatal(totalPrice + addonAmountToatal);
    // setTotalPrice(totalPrice + addonAmountToatal);
  }, [addonAmountToatal, totalPrice, selectedRoom]);

  // useEffect(() => {
  //   const fetchProperties = async () => {
  //    // setAddOns([selectedAddOns]);
  //     try {
  //       // const response = await axios.get(
  //       //   "https://csbe-api.staah.net/?RequestType=info&PropertyId=1703,25950",
  //       //   {
  //       //     headers: {
  //       //       "Content-Type": "application/json",
  //       //       "x-api-key": process.env.NEXT_PUBLIC_API_KEY_GETDATA,
  //       //     },
  //       //   }
  //       // );

  //       const response = await axios.post("/api/staah-api/add-ons", {
  //         selectedPropertyId,
  //       });
  //       const properties = response?.data;
  //       if (Array.isArray(properties)) {
  //         const selectedAdons2 = properties[0]?.ExtrasData.filter((exd) =>
  //           Object.keys(selectedAddOns).includes(exd.AddonId)
  //         );
  //               // Calculate total amount
  //               const totalAddOnPrice = selectedAdons2.reduce((sum, addon) => {
  //                 const price = addon?.Rate?.[0]?.NZD?.amountAfterTax || addon?.AdultRate?.[0]?.NZD?.amountAfterTax || 0; // Extract price safely
  //                 return sum + parseFloat(price);
  //             }, 0);
  //         setTotalAddOns(totalAddOnPrice);
  //         setAddonList(selectedAdons2 || []);
  //         setLoading(true);
  //       } else {
  //         console.error("Invalid Property:", properties);
  //         setLoading(true);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching properties:", error);
  //       setLoading(true);
  //     }
  //   };

  //   fetchProperties();
  // }, []);

  // useEffect(() => {
  //   const selectedAdons = addonList?.filter((exd) =>
  //     Object.keys(selectedAddOns).includes(exd.AddonId)
  //   );
  //   const totalAddOnPrice = selectedAdons?.reduce((sum, addon) => {
  //     const price =
  //       addon?.Rate?.[0]?.NZD?.amountAfterTax ||
  //       addon?.AdultRate?.[0]?.NZD?.amountAfterTax ||
  //       0; 
  //     return sum + parseFloat(price);
  //   }, 0);
  //   setTotalAddOns(totalAddOnPrice);
  //   selectedSetAddonList(selectedAdons || []);
  //   setLoading(true);
  // }, []);


  useEffect(() => {
    
    const fetchPrices = async () => {
      if (!selectedPropertyId) return;
      try {
        const response = await axios.post("/api/staah-api/rate", {
          selectedPropertyId,
          fromDate,
          toDate,
        });
        const dayRate = response?.data?.Product[0]?.Rooms?.map(room => ({
          RoomId: room?.RoomId,
          MinInventory: room?.MinInventory,
          RateAfterTax: Object.values(room?.RatePlans?.[0]?.Rates || {})[0]?.OBP?.["1"]?.RateAfterTax || null
        }));
        console.log("dayRate", dayRate);
        console.log("selectedRoom", selectedRoom);
        // Update selectedRoom state
if (selectedRoom) {
  const updatedRooms = selectedRoom.map(sel => {
    const match = dayRate.find(rate => rate.RoomId == sel.roomId);
    return {
      ...sel,
      roomRate: match?.RateAfterTax ? parseFloat(match.RateAfterTax) : sel.roomRate
    };
  });

  setSelectedRoom(updatedRooms);
}
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };

    fetchPrices();

    // const selectedAdons = addonList?.filter((exd) =>
    //   Object.keys(selectedAddOns).includes(exd.AddonId)
    // );
    const selectedAdons = [];

Object.entries(selectedAddOns).forEach(([addonId, count]) => {
  const matchingAddons = addonList?.filter((addon) => addon.AddonId === addonId);
  if (matchingAddons?.length) {
    for (let i = 0; i < count; i++) {
      selectedAdons.push(matchingAddons[0]); // Push the same addon multiple times
    }
  }
});

    // const totalAddOnPrice = selectedAdons?.reduce((sum, addon) => {
    //   const price =
    //     addon?.Rate?.[0]?.NZD?.amountAfterTax ||
    //     addon?.AdultRate?.[0]?.NZD?.amountAfterTax ||
    //     0; // Extract price safely
    //   return sum + parseFloat(price);
    // }, 0);
    const totalAddOnPrice = selectedAdons.reduce((sum, addon) => {
      const price =
        addon?.Rate?.[0]?.NZD?.amountAfterTax ||
        addon?.AdultRate?.[0]?.NZD?.amountAfterTax ||
        0;
      return sum + parseFloat(price);
    }, 0);

    setTotalAddOns(totalAddOnPrice);
    selectedSetAddonList(selectedAdons || []);
    setLoading(true);
  }, []);

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
  // const removeProperty = (id) => {
  //   setSelectedRoom((prev) =>
  //     prev.map((room) =>
  //       room.id === id
  //         ? { ...room, roomId: '', roomName: '', roomRate: '', roomImage: null } // Use null instead of {}
  //         : room
  //     )
  //   );
  // };

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

  const handleAdd = (addonId, price) => {
    setAddOns((prev) => ({
      ...prev,
      [addonId]: (prev[addonId] || 0) + 1,
    }));
    setAmountToatal(totalPrice + parseInt(price));
    setAddonAmountToatal(addonAmountToatal + parseInt(price));
    //  setTotalPrice(totalPrice+parseInt(price));
  };

  const handleIncrement = (addonId, price) => {
    if (selectedAddOns[addonId] <= 4) {
      setAddOns((prev) => ({
        ...prev,
        [addonId]: prev[addonId] + 1,
      }));
      setAmountToatal(totalPrice + parseInt(price));
      // setTotalPrice(totalPrice+parseInt(price));
      setAddonAmountToatal(addonAmountToatal + parseInt(price));
    } else {
      setAddOns((prev) => ({
        ...prev,
      }));
    }
  };

  const handleDecrement = (addonId, price) => {
    setAddOns((prev) => {
      const newQty = prev[addonId] - 1;
      if (newQty <= 0) {
        const updatedState = { ...prev };
        delete updatedState[addonId];
        return updatedState;
      }
      return { ...prev, [addonId]: newQty };
    });

    setAmountToatal(totalPrice - parseInt(price));
    setAddonAmountToatal(addonAmountToatal - parseInt(price));
    //setTotalPrice(totalPrice-parseInt(price));
  };
  const getNZDPrice = (addon) => {
    const extractRate = (rateArray) => {
      if (!rateArray || rateArray.length === 0) return null;
      const nzdRate = rateArray.find((r) => r.NZD)?.NZD;
      return nzdRate ? `${nzdRate.amountAfterTax}` : "0";
    };

    return (
      extractRate(addon.Rate) ||
      extractRate(addon.AdultRate) ||
      extractRate(addon.ChildRate) ||
      "0"
    );
  };

  return (
    <div className="stay-info">
      <div className="wizard-step-global-padding">  

          <h4>YOUR CART</h4>
          <div className="accordion p-2" id="room-details">
            <h5 className="mb-2"> Rooms</h5>
            {selectedRoom?.length > 0
              ? selectedRoom.map((room, index) => (
                  <div className="accordion-item" key={room?.id || index}>
                    <div>
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
                        <div></div>
                      )}
                    </div>

                    {room?.roomId && room?.roomName ? (
                      <div className="row">
                        <div className="col-md-8">
                          <h6 className="my-2">{room.roomName}</h6>
                        </div>
                        <div className="col-md-12">
                          <h6 className="mb-2">
                            {room?.roomPackage} - ₹{room?.roomRate}
                          </h6>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))
              : null}

            <div className="accordion-item py-2">
              <h6>
                Stay Dates
                <div className="room-flex">
                  <p>
                    {formatDate(selectedStartDate)}{" "}
                    <FontAwesomeIcon icon={faArrowRight} />{" "}
                    {formatDate(selectedEndDate)}
                  </p>
                </div>
              </h6>
            </div>
            <div className="accordion-item py-2">
              <h6>Guests and Rooms</h6>
              <div className="room-flex">
                <p>{`${totalAdults} Adults, ${totalChildren} Children, ${totalRooms} Rooms`}</p>
              </div>
            </div>
          </div>
          <div className="cancellation-policy">
            <h5>Add-Ons</h5>

            <div>
              {isLoading == true ? (
                <div className="row justify-content-center">
                  {selectedAddonList.length > 0 ? (
                    selectedAddonList.map((addon, index) => (
                      <div
                        className="col-6 py-3"
                        key={index}
                        style={{
                          // background: "#f9f9f9",
                          borderRadius: "8px",
                          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                          textAlign: "center",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          src={addonImgList[addon.AddonId] || dummyImage}
                          alt={addon?.AddonName || "Addon Image"}
                          height={100}
                          width={120}
                          style={{ borderRadius: "5px", objectFit: "cover" }}
                        />
                        <div style={{ textAlign: "center", marginTop: "8px" }}>
                          <p style={{ fontWeight: "bold", margin: 0 }}>
                            {addon?.AddonName}
                          </p>
                          <p style={{ fontWeight: "bold", margin: 0 }}>
                            ₹{getNZDPrice(addon)}
                          </p>
                        </div>

                        {/* Add Button OR Counter */}
                        {selectedAddOns[addon.AddonId] ? (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginTop: "10px",
                              border: "1px solid #000",
                              borderRadius: "5px",
                              background: "#000",
                              color: "#fff",
                              padding: "2px 10px",
                            }}
                          >
                            <button
                              onClick={() =>
                                handleDecrement(addon.AddonId, getNZDPrice(addon))
                              }
                              style={{
                                border: "none",
                                background: "transparent",
                                color: "#fff",
                                fontSize: "18px",
                                cursor: "pointer",
                              }}
                            >
                              −
                            </button>
                            <span
                              style={{
                                margin: "0 10px",
                                color: "#fff",
                                fontSize: "16px",
                              }}
                            >
                              {selectedAddOns[addon.AddonId]}
                            </span>
                            <button
                              onClick={() =>
                                handleIncrement(addon.AddonId, getNZDPrice(addon))
                              }
                              style={{
                                border: "none",
                                background: "transparent",
                                color: "#fff",
                                fontSize: "18px",
                                cursor: "pointer",
                              }}
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() =>
                              handleAdd(addon.AddonId, getNZDPrice(addon))
                            }
                            style={{
                              marginTop: "10px",
                              border: "1px solid #000",
                              borderRadius: "5px",
                              background: "transparent",
                              color: "#000",
                              padding: "5px 15px",
                              cursor: "pointer",
                              fontSize: "16px",
                            }}
                          >
                            0
                          </button>
                        )}
                      </div>
                    ))
                  ) : (
                    <p>No add-ons</p>
                  )}
                </div>
              ) : (
                <div>
                  <p>Loading add-ons....</p>
                </div>
              )}
            </div>
          </div>
          <div className="cancellation-policy">
            <div className="room-flex">
              <p>Total Amount Payable </p>
              {/* <p><strong>₹{totalPrice}</strong></p> */}
              <p>
                <strong>₹{amountToatal}</strong>
              </p>
            </div>
            <p className="m-0 inclusive">*Inclusive of {taxRate} Tax</p>
            <div className="accordion-body">
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



      <div className="book-a-stay wizard-bottom-fixed">
        <button
          onClick={() => {
            goNext();
            setTotalPrice(amountToatal);
          }}
          className="btn btn-primary w-100"
        >
          Proceed to Details
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
                          <strong>Add-Ons Price:</strong> ? {totalAddOns.toFixed(2)}
                        </p>
                        <p>
                        <strong>Total Price:</strong> ?{" "}
                        {finalAmount + parseFloat(totalAddOns.toFixed(2))}
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
export default CartOverview;
