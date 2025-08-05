"use client";

import React, { useEffect } from "react";
import CryptoJS from "crypto-js";
import md5 from "md5";
import { useBookingEngineContext } from "../../context/BookingEngineContext" // Import the context

// Function to generate a unique reservation ID
const generateReservationId = () => {
    const timestamp = Date.now(); // Get current timestamp
    const randomString = Math.random().toString(36).substring(2, 8); // Generate a random string
    return `${timestamp}-${randomString}`; // Combine timestamp and random string
};

// Function to encrypt data into a hash
const encryptHash = (partnerId, partnerKey, data) => {
    let text = "";

    Object.keys(data).forEach((key) => {
        text += `${key}=${data[key]}||`;
    });

    // Remove the trailing "||"
    text = text.slice(0, -2);

    const encrypted = encrypt(text, partnerKey);
    return encrypted;
};

// AES encryption using CryptoJS
const encrypt = (plainText, key) => {
    const keyHex = CryptoJS.enc.Hex.parse(md5(key));
    const iv = CryptoJS.lib.WordArray.create(
        [0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f],
        16
    );

    const encrypted = CryptoJS.AES.encrypt(plainText, keyHex, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.ciphertext.toString(CryptoJS.enc.Hex);
};

const SendRequest = () => {
    const { userDetails, totalPrice, selectedPropertyId, selectedPropertyName, selectedPropertyPhone } = useBookingEngineContext(); // Get user details from context

    useEffect(() => {
        console.log("Form Data Submitted:", userDetails);
    }, [userDetails]); // Log form data when component mounts

    // Define the request data as an object
    const requestData = {
        property_id: selectedPropertyId,
        property_name: selectedPropertyName,
        property_tel: selectedPropertyPhone,
        partner_id: 5,
        pg_name: "AIRPAY",
        pg_id: 10,
        cust_name: userDetails.firstName + " " + userDetails.lastName, 
        cust_email: userDetails.email,
        cust_phone: userDetails.phone,
        cust_address: userDetails.address || "N/A",
        cust_city: userDetails.city || "N/A",
        cust_state: userDetails.state || "N/A",
        cust_country: userDetails.country || "N/A",
        cust_postalcode: userDetails.postalcode || "N/A",
        reservation_id: generateReservationId(),
        amount: totalPrice || "10", // Use total price from context
        currency: "INR",
        return_url: "https://sdsfoundation.com/webdemo/clarks-hotel/response.php",
        commision_amount: "1",
    };

    const partnerKey = process.env.NEXT_PUBLIC_API_KEY_PARTNERKEY;

    const hashKey = encryptHash(requestData.partner_id, partnerKey, requestData);

    requestData.hash_key = hashKey;

    const requestJson = JSON.stringify(requestData);

    return (
        <div>
            <h1>Payment Gateway Integration</h1>
            <p>Click the button below to proceed with the payment.</p>

            {/* Form to submit the request to the third-party payment gateway */}
            <form name="pghub" method="post" action="https://securepay.staah.net/checkout_thirdparty.php">
                <input type="hidden" name="paramvalues" value={requestJson} />
                <button type="submit" className="pay-now-button">Pay Now</button>
            </form>

            <style jsx>{`
                /* Basic styling for the Pay Now button */
                .pay-now-button {
                    padding: 10px 20px;
                    font-size: 16px;
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .pay-now-button:hover {
                    background-color: #45a049;
                }
            `}</style>
        </div>
    );
};

export default SendRequest;
