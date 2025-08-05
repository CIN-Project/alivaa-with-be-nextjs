"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { generateToken } from "../../../utilities/tokenService";
import { useBookingEngineContext } from "../../context/BookingEngineContext";

const ConfirmStep = ({ onClose, goNext }) => {
  // const { selectedStartDate,setSelectedStartDate, selectedEndDate,setSelectedEndDate, totalPrice,setTotalPrice, selectedRooms, selectedRoom, setSelectedRoom,
  //   setUserDetails,selectedRoomDetails,setSelectedRoomDetails,currentStep, setCurrentStep } = useBookingEngineContext();
    const [responseObject, setResponseObject] = useState(null);
    //const [reservationJson, setReservationJson] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
  
      useEffect(() => {
        const storedData = sessionStorage?.getItem("paymentResponse");
        if (storedData) {
            const parsed = JSON.parse(storedData);
            // Convert partner_id to string explicitly
            parsed.partner_id = String(parsed.partner_id);
          setResponseObject(parsed);
         // handleReturnHome();
          sessionStorage?.removeItem("paymentResponse");
        } 
        else {
         // router.replace("/payment/failed"); // fallback
          setResponseObject(null);
        }
      }, []);
      useEffect(() => {
        if (responseObject) {
          handleReturnHome(); // now responseObject is ready
          sessionStorage?.removeItem("paymentResponse");
        }
      }, [responseObject]);
    // const handleReturnHome = async (obj) => {
    //   if (!obj) return;
    //   setLoading(true);
    //   const token = await generateToken();
  
    //   try {
    //     const res = await fetch("https://staahbe.cinuniverse.com/PaymentResponse", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${token}`,
    //       },
    //       body: JSON.stringify(obj),
    //     });
  
    //     if (res.ok) {
    //       router.push("/");
    //     } else {
    //       alert("Failed to save payment. Please try again.");
    //     }
    //   } catch (err) {
    //     console.error("Error posting to API:", err);
    //     alert("Something went wrong.");
    //   } finally {
    //     setLoading(false);
    //   }
    // };
  
    const handleReturnHome = async () => {
      goNext();
      sessionStorage?.removeItem("paymentResponse");
      if (!responseObject) return;
      setLoading(true);
      const token = await generateToken();
      try {
        const res = await fetch("https://staahbe.cinuniverse.com/PaymentResponse", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(responseObject),
        });
        const data = await res.json(); // 👈 get the response body
        if (res.ok) {
          console.log("Payment Response2222", data);
          const response = data.result[0].reservationJson
          //console.log("Reservation Json", response);
          const parsedOnce = JSON.parse(response); // still a string
          console.log("parsed Once Json", parsedOnce);
          const finalJson = JSON.parse(response); // now a usable object
          console.log("finalJson", finalJson);
           const responseReservation = await fetch("/api/staah-api/reservation", {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify(finalJson),
           });
           const result = await responseReservation.json();
           if (result.data == "Booking Post Successfully.") {
           const reponsFromStaah = {
              reservation_id: data.result[0].reservation_id,
              ReservationStatus: "success"
          };
            const finalRes = await fetch("https://staahbe.cinuniverse.com/ReservationResponse", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify(reponsFromStaah),
            });
           // setCurrentStep(4); 
            const finalData = await finalRes.json();
            console.log("final Data from our api", finalData);
           }
           //const responseReservationData = await res.json();
          console.log("result", result);
          setResponseObject(null);
          //setCurrentStep(0);
          //router.push("/");
          onClose();
        } else {
          alert("Failed to save payment. Please try again.");
        }
      } catch (err) {
        console.error("Error posting to API:", err);
        alert("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };
    // if (!responseObject) return <p className="text-center p-10">Loading...</p>;
  
    return (
    <>

 {responseObject?.status == "success"? (
   <div className="booking-confirmed">
       <Image src="/images/verified.gif" height={100} width={100} alt="confirmation" className="confirm-gif" />
       <h3>Booking Confirmed</h3>
       {/* <h3>Payment Successful</h3> */}
       <p className="text-center">
         Awesome! Your rooms are booked!
         <br /> We sent you a confirmation email with all the details.
         <br /> I am at Confirm Page.
         <br /> Reservation ID: {responseObject?.reservation_id}
       </p>
       
     <button
      //  onClick={handleReturnHome}
       onClick={() => {onClose();}}
       disabled={loading}
       className="mt-6 btn btn-primary"
     >
       {loading ? "Saving..." : "Close"}
     </button>
     </div>):(
       <div className="text-center p-10">
       <h1 className="text-3xl font-bold text-red-600">{responseObject?.error_msg}</h1>
       
     <button
       onClick={() => {onClose();}}
       disabled={loading}
       className="mt-6 btn btn-primary"
     >
       {loading ? "Saving..." : "Close"}
     </button>
     </div>
     )}
   </>
   );
};

export default ConfirmStep;