"use client";

import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CryptoJS from "crypto-js";
import md5 from "md5";
import { useBookingEngineContext } from "../../context/BookingEngineContext";

import { generateToken } from "../../../utilities/tokenService";

const generateNumericReservationId = () => {
  const timestamp = Date.now().toString();
  const randomDigits = Math.floor(Math.random() * 900000000 + 1000).toString();
  return timestamp + randomDigits;
};

const encryptHash = (partnerId, partnerKey, data) => {
  let text = "";
  Object.keys(data).forEach((key) => {
    text += `${key}=${data[key]}||`;
  });
  text = text.slice(0, -2);
  return encrypt(text, partnerKey);
};

const encrypt = (plainText, key) => {
  const keyHex = CryptoJS.enc.Hex.parse(md5(key));
  const iv = CryptoJS.lib.WordArray.create(
    [
      0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b,
      0x0c, 0x0d, 0x0e, 0x0f,
    ],
    16
  );
  return CryptoJS.AES.encrypt(plainText, keyHex, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).ciphertext.toString(CryptoJS.enc.Hex);
};

const BookingAndPayment = () => {
  const {
    updateUserDetails,
    totalPrice,
    selectedRooms,
    selectedRoom,
    selectedRoomDetails,
    selectedStartDate,
    selectedEndDate,
    selectedPropertyId,
    setSelectedRoomRate,
    selectedRoomRate,
    selectedRoomOffers,
    selectedPropertyName,
    selectedPropertyPhone,
    selectedAddonList,
    selectedSetAddonList,
  } = useBookingEngineContext();

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

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const hiddenFormRef = useRef(null);
  const [hiddenInputValue, setHiddenInputValue] = useState("");

  useEffect(() => {
    // console.log("selected Room Details",selectedRoomDetails);
    // console.log("selected Room Rate", selectedRoomRate);
    console.log("selected Rooms", selectedRooms);
    console.log("selected Room", selectedRoom);
  }, []);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const { title, firstName, lastName, email, phone, agreeToTerms } = formData;
    const newErrors = {};

    if (!title) newErrors.title = "Please select a title.";
    if (!firstName) newErrors.firstName = "Please enter your first name.";
    if (!lastName) newErrors.lastName = "Please enter your last name.";
    if (!email) newErrors.email = "Please enter your email.";
    if (!phone) newErrors.phone = "Please enter your phone number.";
    if (!agreeToTerms)
      newErrors.agreeToTerms = "You must agree to the terms & conditions.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const generateToken = async () => {
  //   const response = await fetch("https://staahbe.cinuniverse.com/GenerateToken", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ UserId: "clarks_pg", Password: "clarks@2025" }),
  //   });
  //   if (!response.ok) throw new Error("Token generation failed");
  //   const data = await response.json();
  //   return data.result[0].tokenKey;
  // };

  const generateReservationIdFromAPI = async (token) => {
    const reservationId = generateNumericReservationId();
    const response = await fetch(
      "https://staahbe.cinuniverse.com/GenerateReservationId",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          property_id: selectedPropertyId,
          reservation_id: reservationId,
        }),
      }
    );
    if (!response.ok) throw new Error("Reservation ID validation failed");
    const data = await response.json();
    return data.result[0].reservation_id || reservationId;
  };
  const paymentRequestToAPI = async (token, obj) => {
    const strObj = JSON.stringify(obj);
    const response = await fetch(
      "https://staahbe.cinuniverse.com/PaymentRequest",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(obj),
      }
    );
    if (!response.ok) throw new Error("Payment request failed");
    const data = await response.json();
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      const firstError = Object.values(errors)[0];
      toast.error(firstError, { position: "top-right", autoClose: 3000 });
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      updateUserDetails(formData);

      const token = await generateToken();
      localStorage.setItem("token", token);
      const reservationId = await generateReservationIdFromAPI(token);

      const finalRequestData = {
        property_id: selectedPropertyId,
        property_name: selectedPropertyName,
        property_tel: selectedPropertyPhone,
        partner_id: 5,
        pg_name: "AIRPAY",
        pg_id: 10,
        cust_name: `${formData.firstName} ${formData.lastName}`,
        cust_email: formData.email,
        cust_phone: formData.phone,
        cust_address: "N/A",
        cust_city: "N/A",
        cust_state: "N/A",
        cust_country: "N/A",
        cust_postalcode: "N/A",
        reservation_id: reservationId,
        amount: totalPrice,
        currency: "INR",
        // return_url: "https://clarksdemo.cinuniverse.com/response",
        return_url: "https://alivaahotelsdemo.cinuniverse.com/api/payment/response",
        commision_amount: "1",
      };

      const hashKey = encryptHash(
        finalRequestData.partner_id,
        process.env.NEXT_PUBLIC_API_KEY_PARTNERKEY,
        finalRequestData
      );
      finalRequestData.hash_key = hashKey;
      sessionStorage.setItem(
        "bookingData",
        JSON.stringify({
          formData,
          totalPrice,
          selectedRoom,
          selectedStartDate,
          selectedEndDate,
        })
      );

      const payload = {
        PropertyId: selectedPropertyId,
        apikey: process.env.NEXT_PUBLIC_API_KEY_GETDATA,
        action: "reservation_info",
        reservations: {
          reservation: [
            {
              reservation_datetime: new Date().toISOString().split("T")[0],
              reservation_id: reservationId,
              commissionamount: "0.00",
              deposit: totalPrice?.toString(),
              totalamountaftertax: totalPrice?.toString(),
              totaltax: "10",
              promocode: "",
              payment_required: "0",
              payment_type: "Channel Collect",
              currencycode: "INR",
              status: "Confirm",
              is_subscribed: false,
              customer: {
                email: formData?.email,
                salutation: formData?.title,
                first_name: formData?.firstName ? formData?.firstName : "",
                last_name: formData?.lastName ? formData?.lastName : "",
                remarks: formData?.specialRequests,
                telephone: formData?.phone,
              },
              paymentcarddetail: {
                CardHolderName: formData?.cardholderName,
                CardType: formData?.cardType,
                ExpireDate: formData?.expiryDate,
                CardNumber: formData?.cardNumber?.toString(),
                cvv: formData?.cvv?.toString(),
                PaymentRefenceId: Math.floor(
                  Math.random() * 1000000000
                )?.toString(),
              },
              room: selectedRoom?.map((room) => ({
                arrival_date: selectedStartDate,
                departure_date: selectedEndDate,
                arrival_time: "24:00",
                sepcial_request: formData?.specialRequests,
                bedding: {
                  BedId: "",
                  BedType: "",
                  Beds: "",
                },
                room_id: room?.roomId?.toString(),
                room_name: room?.roomName,
                salutation: formData?.title,
                first_name: formData?.firstName ? formData?.firstName : "",
                last_name: formData?.lastName ? formData?.lastName : "",
                price: [
                  {
                    date: selectedStartDate,
                    rate_id: room?.rateId,
                    rate_name: room?.roomPackage,
                    amountaftertax: room?.roomRate?.toString()
                      ? room?.roomRate?.toString()
                      : "0",
                    extraGuests: {
                      extraAdult: room?.adults?.toString(),
                      extraChild: room?.children?.toString(),
                      extraAdultRate: "0",
                      extraChildRate: "0",
                    },
                    fees: [
                      {
                        name: "Cleaning Fees",
                        amountaftertax: "0",
                        taxes: [
                          {
                            name: "service charge",
                            value: "0.00",
                          },
                        ],
                      },
                    ],
                    Addons: selectedAddonList?.map((addon) => ({
                      AddonId: addon?.AddonId,
                      AddonName: addon?.AddonName,
                      AddonType: addon?.AddonType,
                      PriceType: addon?.PriceType,
                      AmountAfterTax: addon?.AmountAfterTax,
                      Tax: addon?.Tax,
                      MandatoryExtras: true,
                      Adult: {
                        Quantity: "0",
                        Rate: "0",
                        AmountAfterTax: "0",
                        Tax: "0",
                      },
                      Children: {
                        Quantity: "0",
                        Rate: "0",
                        AmountAfterTax: "0",
                        Tax: "0",
                      },
                      Base: {
                        Quantity: "0",
                        Rate: "0",
                        AmountAfterTax: "0",
                        Tax: "0",
                      },
                    })),
                  },
                ],
                amountaftertax: room?.roomRate?.toString()
                  ? room?.roomRate?.toString()
                  : "0",
                remarks: "No Smoking",
                GuestCount: [
                  {
                    AgeQualifyingCode: "10",
                    Count: room?.adults?.toString(),
                  },
                ],
              })),
            },
          ],
        },
      };
      console.log("payload", payload);
      const finalRequestData2 = {
        property_id: selectedPropertyId,
        property_name: selectedPropertyName,
        property_tel: selectedPropertyPhone,
        partner_id: "5",
        pg_name: "AIRPAY",
        pg_id: "10",
        cust_name: `${formData.firstName} ${formData.lastName}`,
        cust_email: formData.email,
        cust_phone: formData.phone,
        cust_address: "N/A",
        cust_city: "N/A",
        cust_state: "N/A",
        cust_country: "N/A",
        cust_postalcode: "N/A",
        reservation_id: reservationId.toString(),
        amount: totalPrice.toString(),
        currency: "INR",
        // return_url: "https://clarksdemo.cinuniverse.com/response",
        return_url: "https://clarksdemo.cinuniverse.com/api/payment/response",
        commision_amount: "1",
        ReservationJson: JSON.stringify(payload),
      };

      finalRequestData2.hash_key = hashKey;
      const jsonString = JSON.stringify(finalRequestData);
      const resp = await paymentRequestToAPI(token, finalRequestData2);
      if (resp?.errorMessage == "success") {
        //  const resp = await paymentRequestToAPI(token,payload);
        setHiddenInputValue(jsonString);
        // Allow state to update before submitting the form
        setTimeout(() => {
          hiddenFormRef.current.submit();
        }, 100);
      } else {
        alert(resp?.errorMessage);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="booking-payment-form detail-stepp-for-booking">
      <div className="wizard-step-global-padding"> 
      <h4 className="mb-3">Booking & Payment</h4>

      <form onSubmit={handleSubmit}>
        {/* User Detail Fields */}
        <div className="mb-3">
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`form-select ${errors.title ? "is-invalid" : ""}`}
          >
            <option value="">Select Title*</option>
            <option value="Mr">Mr</option>
            <option value="Ms">Ms</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
            <option value="Prof">Prof</option>
          </select>
          {errors.title && (
            <div className="invalid-feedback">{errors.title}</div>
          )}
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
            placeholder="First Name"
          />
          {errors.firstName && (
            <div className="invalid-feedback">{errors.firstName}</div>
          )}
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
            placeholder="Last Name"
          />
          {errors.lastName && (
            <div className="invalid-feedback">{errors.lastName}</div>
          )}
        </div>

        <div className="mb-3">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            placeholder="Email"
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            placeholder="Phone Number"
          />
          {errors.phone && (
            <div className="invalid-feedback">{errors.phone}</div>
          )}
        </div>

        <div className="mb-3">
          <input
            name="gstNumber"
            type="text"
            placeholder="GST Number"
            value={formData.gstNumber}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <textarea
            name="specialRequests"
            placeholder="Special Requests"
            value={formData.specialRequests}
            onChange={handleChange}
            className="form-control"
          ></textarea>
        </div>
        <div className="form-check mb-3">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className={`form-check-input ${
              errors.agreeToTerms ? "is-invalid" : ""
            }`}
          />
          <label className="form-check-label">
            I agree to the terms & conditions
          </label>
          {errors.agreeToTerms && (
            <div className="invalid-feedback">{errors.agreeToTerms}</div>
          )}
        </div>

        <div className="wizard-bottom-fixed">
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Continue to Payment"}
          </button>
        </div>
        
      </form>

      {error && <div className="alert alert-danger mt-3">Error: {error}</div>}

      {/* Auto-submitted payment form */}
      <form
        ref={hiddenFormRef}
        method="post"
        action="https://securepay.staah.net/checkout_thirdparty.php"
        style={{ display: "none" }}
      >
        <input type="hidden" name="paramvalues" value={hiddenInputValue} />
      </form>
</div>
     
      
    </div>
  );
};

export default BookingAndPayment;
