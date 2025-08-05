"use client";

import React, { useState } from "react";
import CryptoJS from "crypto-js";
import md5 from "md5";
import { useBookingEngineContext } from "../../context/BookingEngineContext";

// Generate numeric reservation ID with min 14 digits
const generateNumericReservationId = () => {
  const timestamp = Date.now().toString(); // 13 digits
  const randomDigits = Math.floor(Math.random() * 900000000 + 1000).toString(); // 9 random digits
  return timestamp + randomDigits; // 13 + 9 = 22 digits (always more than 14)
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
    [0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f],
    16
  );
  return CryptoJS.AES.encrypt(plainText, keyHex, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).ciphertext.toString(CryptoJS.enc.Hex);
};

const SendRequest = () => {
  const { userDetails, totalPrice, selectedPropertyId, selectedPropertyName, selectedPropertyPhone } = useBookingEngineContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [requestJson, setRequestJson] = useState(null);

  const generateToken = async () => {
    const response = await fetch('http://staahbe.cinuniverse.com/GenerateToken', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ partner_id: 5 })
    });
    if (!response.ok) throw new Error('Token generation failed');
    const data = await response.json();
    return data.token || data.access_token;
  };

  const generateReservationIdFromAPI = async (token) => {
    const reservationId = generateNumericReservationId(); // Generate numeric ID first
    const response = await fetch('http://staahbe.cinuniverse.com/GenerateReservationId', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        property_id: selectedPropertyId,
        reservation_id: reservationId // Send our generated numeric ID
      })
    });
    if (!response.ok) throw new Error('Reservation ID validation failed');
    const data = await response.json();
    return data.reservation_id || reservationId; // Use API's ID or fallback to ours
  };

  const handlePaymentInitiation = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const token = await generateToken();
      const reservationId = await generateReservationIdFromAPI(token);
      
      const finalRequestData = {
        property_id: selectedPropertyId,
        property_name: selectedPropertyName,
        property_tel: selectedPropertyPhone,
        partner_id: 5,
        pg_name: "AIRPAY",
        pg_id: 10,
        cust_name: `${userDetails.firstName} ${userDetails.lastName}`,
        cust_email: userDetails.email,
        cust_phone: userDetails.phone,
        cust_address: userDetails.address || "N/A",
        cust_city: userDetails.city || "N/A",
        cust_state: userDetails.state || "N/A",
        cust_country: userDetails.country || "N/A",
        cust_postalcode: userDetails.postalcode || "N/A",
        reservation_id: reservationId,
        amount: totalPrice,
        currency: "INR",
        // return_url: "https://sdsfoundation.com/webdemo/clarks-hotel/response.php",
        return_url: "http://clarksdemo.cinuniverse.com/response",
        
        commision_amount: "1",
      };

      const hashKey = encryptHash(finalRequestData.partner_id, process.env.NEXT_PUBLIC_API_KEY_PARTNERKEY, finalRequestData);
      finalRequestData.hash_key = hashKey;

      const finalRequestJson = JSON.stringify(finalRequestData);
      console.log("Final Request Data:", finalRequestData);
      setRequestJson(finalRequestJson);
      
    } catch (error) {
      setError(error.message);
      console.error("Payment Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="payment-container">
      <h1>Payment Gateway Integration</h1>
      <p>Click below to proceed with payment</p>

      {error && (
        <div className="error-message">
          Error: {error}
          <button onClick={() => setError(null)}>×</button>
        </div>
      )}

      {!requestJson ? (
        <button 
          onClick={handlePaymentInitiation} 
          disabled={isLoading}
          className="payment-button"
        >
          {isLoading ? 'Processing...' : 'Initiate Payment'}
        </button>
      ) : (
        <form 
          method="post" 
          action="https://securepay.staah.net/checkout_thirdparty.php"
          className="payment-form"
        >
          <input type="hidden" name="paramvalues" value={requestJson} />
          <button type="submit" className="payment-button">
            Proceed to Payment
          </button>
        </form>
      )}

      <style jsx>{`
        .payment-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .payment-button {
          background: #4CAF50;
          color: white;
          border: none;
          padding: 12px 24px;
          font-size: 16px;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .payment-button:hover {
          background: #45a049;
        }
        .payment-button:disabled {
          background: #cccccc;
          cursor: not-allowed;
        }
        .error-message {
          background: #ffebee;
          color: #d32f2f;
          padding: 12px;
          border-radius: 4px;
          margin: 15px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .payment-form {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default SendRequest;