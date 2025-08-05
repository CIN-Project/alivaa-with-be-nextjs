"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useBookingEngineContext } from "../../context/BookingEngineContext";
import Image from "next/image";

const AddOnsStep = ({ onClose, goNext }) => {
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
  //const [addonList, setAddonList] = useState([]);
  //const [addonAmountToatal, setAddonAmountToatal] = useState(0);
  const [amountToatal, setAmountToatal] = useState(0);
  //const [isIncreaseDecrease, setIncreaseDecrease] = useState(false);
  //const [selectedAddOns, setAddOns] = useState({});

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

  const dummyImage = "/no_image.jpg";

  useEffect(() => {
    setAmountToatal(totalPrice + addonAmountToatal);
    // setTotalPrice(totalPrice + addonAmountToatal);
  }, [addonAmountToatal, totalPrice, selectedRoom]);

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
    <div style={{ background: "#fff" }}>
      <div className="wizard-step-global-padding">
        <div className="row">
          <div className="col-md-7">
            <h5>Add-Ons</h5>
          </div>
          <div className="col-md-5 text-align-right">
            {/* <p>Toata<b>: {totalPrice}</b></p> */}
            <p>
              Total<b>: {amountToatal}</b>
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "15px",
            marginTop: "15px",
          }}
        >
          {addonList.length > 0 ? (
            addonList.map((addon, index) => (
              <div
                key={index}
                style={{
                  background: "#f9f9f9",
                  padding: "10px",
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
                    <span style={{ margin: "0 10px", fontSize: "16px" }}>
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
                    <span style={{ margin: "0 10px", fontSize: "16px" }}>
                      0
                    </span>
                    <button
                      onClick={() =>
                        handleAdd(addon.AddonId, getNZDPrice(addon))
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
                )}
              </div>
            ))
          ) : (
            <p>Loading add-ons...</p>
          )}
        </div>

      </div>
      <div style={{ marginTop: "20px" }} className="wizard-bottom-fixed">
          <button
            onClick={() => {
              goNext();
              setTotalPrice(amountToatal);
            }}
            className="btn btn-primary w-100"
          >
            {Object.keys(selectedAddOns).length > 0
              ? "Proceed to Cart Overview"
              : "Skip to Cart Overview"}
            {/* Proceed to Cart Overview */}
          </button>
        </div>
    </div>
  );
};

export default AddOnsStep;
