// "use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./loader.css";

const PaymentResponse = ({ totalPrice, customerDetails }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const responseData = urlParams.get('response');
    
    if (responseData) {
      try {
        const decodedData = JSON.parse(decodeURIComponent(responseData));
        console.log("Payment Response:", {
          partner_id: decodedData.partner_id,
          property_id: decodedData.property_id,
          reservation_id: decodedData.reservation_id,
          pg_transaction_id: decodedData.pg_transaction_id,
          status_code: decodedData.status_code,
          status: decodedData.status,
          error_msg: decodedData.error_msg,
          hash_key: decodedData.hash_key,
          amount: decodedData.amount,
          currency: decodedData.currency,
          ipn_flag: decodedData.ipn_flag
        });
      } catch (error) {
        console.error("Error parsing response:", error);
      }
    }
  }, []);

  const generateHashKey = () => {
    const timestamp = Date.now().toString();
    const randomString = Math.random().toString(36).substring(2, 15);
    return `${timestamp}${randomString}`;
  };

  const generateReservationId = () => {
    return Math.floor(Math.random() * 9000000000) + 1000000000;
  };

  const handlePayment = async () => {
    setIsLoading(true);

    try {
      const requestPayload = {
        property_id: "1703",
        property_name: "Test Property",
        partner_id: 5,
        pg_name: "AIR PAY",
        pg_id: 10,
        reservation_id: generateReservationId().toString(),
        amount: 10,
        currency: "INR",
        return_url: "https://www.cinuniverse.com/",
        commision_amount: "12",
        hash_key: generateHashKey(),
      };

      const form = document.createElement("form");
      form.name = "pghub";
      form.method = "POST";
      form.action = "https://securepay.staah.net/checkout_thirdparty.php";

      const paramValuesInput = document.createElement("input");
      paramValuesInput.type = "hidden";
      paramValuesInput.name = "paramvalues";
      paramValuesInput.value = JSON.stringify(requestPayload);
      form.appendChild(paramValuesInput);

      console.log("Payment Request Payload:", requestPayload);

      document.body.appendChild(form);
      form.submit();
      
    } catch (error) {
      console.error("Payment Error:", error);
      toast.error("Payment failed. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="payment-details primary-details">
      <h4 className="mb-3">MAKE PAYMENT</h4>
      <p className="mb-3">
        You will be redirected to a secure payment page to complete your transaction.
      </p>

      <div className="book-a-stay">
        <button
          type="button"
          className="btn btn-primary w-100"
          onClick={handlePayment}
          disabled={isLoading}
          aria-busy={isLoading}
        >
          {isLoading ? "Redirecting..." : "Pay Now"}
        </button>
      </div>

      {isLoading && (
        <div className="loader-overlay">
          <div className="loader"></div>
          <p className="loader-text">
            Please wait. Do not refresh or close your browser until we process your request.
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentResponse;