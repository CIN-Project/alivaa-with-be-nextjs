"use client";
import { useState, useEffect } from "react";
import { useBookingEngineContext } from "../../context/BookingEngineContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFileLines, faCreditCard, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import StayStep from "./StayStep";
import AddOnsStep from "./AddOnsStep";
import CartOverview from "./CartOverview";
import DetailStep from "./DetailStep";
import PaymentStep from "./PaymentStep";
import ConfirmStep from "./ConfirmStep";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const steps = [
  { title: "Stay", icon: <FontAwesomeIcon icon={faHouse} /> },
  { title: "AddOns", icon: <FontAwesomeIcon icon={faHouse} /> },
  { title: "Overview", icon: <FontAwesomeIcon icon={faFileLines} /> },
  { title: "Detail", icon: <FontAwesomeIcon icon={faCreditCard} /> },
  // { title: "Payment", icon: <FontAwesomeIcon icon={faCreditCard} /> },
  { title: "Confirm", icon: <FontAwesomeIcon icon={faCheckCircle} /> },
];

const nextButtonLabels = ["Proceed to Details", "Continue to Payment", "Pay Now", "Back to home"];

const WizardSidebar = ({ isVisible, onClose }) => {
  //const [currentStep, setCurrentStep] = useState(0);
  const { selectedStartDate,setSelectedStartDate, selectedEndDate,setSelectedEndDate, totalPrice,setTotalPrice, selectedRooms, selectedRoom, setSelectedRoom,
    setUserDetails,selectedRoomDetails,setSelectedRoomDetails,currentStep, setCurrentStep } = useBookingEngineContext();
  const totalAdults = selectedRooms.reduce((sum, room) => sum + room.adults, 0);
  const totalChildren = selectedRooms.reduce((sum, room) => sum + room.children, 0);
  const totalRooms = selectedRooms.length;
  const  [selectStartDate ,setStartDate   ] = useState(null);
  const  [selectEndDate ,setEndDate   ] = useState(null);
  // State for form data
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gstNumber: "",
    specialRequests: "",
    agreeToTerms: false,
    cardType: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  });

useEffect(()=>{
  onClose;
},[selectedRoomDetails?.isPropertyVisible])


 useEffect(() => {
   const storedData = sessionStorage?.getItem("bookingData");
   if (storedData) {
     const parsed = JSON.parse(storedData);
     //console.log("bookingData after Payment",parsed);
     //setFormData(parsed?.formData);
     setFormData(prev => ({
      ...prev,
      ...parsed?.formData,
    }));
    
     setSelectedRoom(parsed?.selectedRoom);
     setTotalPrice(parseInt(parsed?.totalPrice));
     //setSelectedStartDate(formatDate(parsed?.selectedStartDate));
     //setSelectedEndDate(formatDate(parsed?.selectedEndDate));
     setStartDate(new Date(parsed?.selectedStartDate));
     setEndDate(new Date(parsed?.selectedEndDate));
    //  console.log("StartDate parsed:", parsed?.selectedStartDate, typeof parsed?.selectedStartDate);
    //  console.log("Converted StartDate:", new Date(parsed?.selectedStartDate));
     
    //  console.log("formData after Payment",formData);
    //  console.log("selectedRoom after Payment",selectedRoom);
    //  console.log("bookingData after Payment2",parsed);
     sessionStorage?.removeItem("bookingData");
   }
   else{
   // console.log("bookingData from sessionStorage", storedData);
    sessionStorage?.removeItem("bookingData");
   }
 }, []);


  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validate form for each step
  const validateStep = () => {
    switch (currentStep) {
      case 0: // Stay step
        if (!selectedRoom || !selectedStartDate || !selectedEndDate) {
          toast.error("Please select a room and dates.", { position: "top-right", autoClose: 3000 });
          return false;
        }
        return true;
        
      case 1: // Add-Ons step
      if (!selectedRoom || !selectedStartDate || !selectedEndDate) {  
        toast.error("Please select a room and dates.", { position: "top-right", autoClose: 3000 });
        return false;
      }
      return true;
      case 2: // Overview step
        if (!selectedRoom || !selectedStartDate || !selectedEndDate) {
          toast.error("Please select a room and dates.", { position: "top-right", autoClose: 3000 });
          return false;
        }
        return true;

      case 3: // Detail step
        const { title, firstName, lastName, email, phone, agreeToTerms,cardType, cardNumber, expiryDate, cvv, cardholderName } = formData;
        if (!title || !firstName || !lastName || !email || !phone || !agreeToTerms) {
          toast.error("Please fill all mandatory fields and accept terms & conditions.", { position: "top-right", autoClose: 3000 });
          return false;
        } else if (!cardType || !cardNumber || !expiryDate || !cvv || !cardholderName) {
            toast.error("Please fill all payment details.", { position: "top-right", autoClose: 3000 });
            return false;
          }
        return true;

      // case 4: // Payment step
      //   const { cardType, cardNumber, expiryDate, cvv, cardholderName } = formData;
      //   if (!cardType || !cardNumber || !expiryDate || !cvv || !cardholderName) {
      //     toast.error("Please fill all payment details.", { position: "top-right", autoClose: 3000 });
      //     return false;
      //   }
      //   return true;

      default:
        return true;
    }
  };

  // Handle next step
  const goNext = () => {
    // console.log("steps length",steps.length);
    // console.log("currentStep",currentStep);
    if (!validateStep()) return;
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
        console.log("handleSubmit Reached");
      //handleSubmit();
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    // console.log("handleSubmit Method");
    // console.log("total Price", totalPrice);
    // console.log("form Data", formData);
    //  console.log("selected StartDate", selectStartDate);
    //  console.log("selected EndDate", selectEndDate);
    //  console.log("selected Room", selectedRoom);
    //  console.log("selected Rooms", selectedRooms);
  
    let payload;
  
    try {
      payload = {
        PropertyId: "25950",
        apikey: "OWaKazzwqYYH7e9GjLo2xF0ihV03l1YV",
        action: "reservation_info",
        reservations: {
          reservation: [
            {
              reservation_datetime: new Date().toISOString().split("T")[0],
              reservation_id: Math.floor(Math.random() * 1000000000000).toString(),
              commissionamount: "0.00",
              deposit: totalPrice.toString(),
              totalamountaftertax: totalPrice.toString(),
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
                first_name: formData?.firstName? formData?.firstName : "Ajay",
                last_name: formData?.lastName? formData?.lastName : "Kumar",
                remarks: formData?.specialRequests,
                telephone: formData?.phone,
              },
              paymentcarddetail: {
                CardHolderName: formData?.cardholderName,
                CardType: formData?.cardType,
                ExpireDate: formData?.expiryDate,
                CardNumber: formData?.cardNumber.toString(),
                cvv: formData?.cvv.toString(),
                PaymentRefenceId: Math.floor(Math.random() * 1000000000).toString(),
              },
              room: selectedRoom?.map((room) => ({
                arrival_date: selectStartDate,
                departure_date: selectEndDate,
                arrival_time: "24:00",
                sepcial_request: formData?.specialRequests,
                bedding: {
                  BedId: "1",
                  BedType: "King Size",
                  Beds: "1",
                },
                room_id: room?.roomId.toString(),
                room_name: room?.roomName,
                salutation: formData?.title,
                first_name: formData?.firstName? formData?.firstName : "Ajay",
                last_name: formData?.lastName? formData?.lastName : "Kumar",
                price: [
                  {
                    date: selectStartDate,
                    rate_id: "170500000000004",
                    rate_name: "Bread & Breakfast",
                    amountaftertax: room?.roomRate?.toString() ? room?.roomRate?.toString(): "2500",
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
                  },
                ],
                amountaftertax: room?.roomRate?.toString() ? room?.roomRate?.toString(): "2500",
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
  
      console.log("payload details before try", payload);
    } catch (err) {
      console.log(" console.log Error while building payload:", err);
      console.error("console.error Error while building payload:", err);
      toast.error("Unexpected error while preparing data.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
  
    try {
      // const response = await fetch("https://csbe-api.staah.net/?RequestType=reservation", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "X-API-Key": "OWaKazzwqYYH7e9GjLo2xF0ihV03l1YV" 
      //   },
      //   body: JSON.stringify(payload),
      // });
      const response = await fetch("/api/staah-api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
  
      const result = await response.json();

      console.log("csbe-api Response", response);
      if (response.ok) {
        
      toast.success("Reservation successful!");
      setCurrentStep(currentStep + 1);
       // toast.success("Reservation successful!", { position: "top-right", autoClose: 3000 });
       // setCurrentStep(currentStep + 1);
      } else {
        //toast.error("Reservation failed. Please try again.", { position: "top-right", autoClose: 3000 });
   
        console.error(result);
        toast.error("Reservation failed.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
      // console.error("Fetch error:", error);
      // toast.error("An error occurred. Please try again.", { position: "top-right", autoClose: 3000 });
    }
  };
  

  // Add/remove overlay and body scroll lock when wizard is active/closed
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden"; // Disable body scroll
    } else {
      document.body.style.overflow = "auto"; // Enable body scroll
    }
  }, [isVisible]);

  return (
    <>
      {/* Overlay */}
      {isVisible && <div className="overlay" onClick={onClose}></div>}

      {/* Wizard Sidebar */}
      <div className={`wizard-sidebar ${isVisible ? "active" : ""}`}>
        <div className="nav-sidebar" style={{ overflowY: "auto" }}>
          <div className="nav flex-column nav-pills me-0">
            {steps.map((step, index) => (
              <button key={index} className={`nav-link ${index === currentStep ? "active" : "active1"}`} onClick={() => setCurrentStep(index)}>
                <span>{step.icon}</span>
                {step.title}
              </button>
            ))}
          </div>
        </div>

        <div className="side-overlay isActive">
          <a className="widget-heading close-widget wizard-close-fixed-btn" onClick={onClose}>
            <span className="close-side-widget">x</span>
          </a>
          <div className="tab-content">
            <div className="tab-pane1">
              {currentStep === 0 && (
                <StayStep
                  totalAdults={totalAdults}
                  totalChildren={totalChildren}
                  totalRooms={totalRooms}
                  selectedRoom={selectedRoom}
                  totalPrice={totalPrice}
                  selectedStartDate={selectedStartDate}
                  selectedEndDate={selectedEndDate}
                  goNext={goNext}
                  onClose={onClose}
                />
              )}
              {currentStep == 1 && (
                <AddOnsStep
                goNext={goNext}
                onClose={onClose}
                />
              )}
              {currentStep == 2 && (
                <CartOverview
                // totalAdults={totalAdults}
                // totalChildren={totalChildren}
                // totalRooms={totalRooms}
                // selectedRoom={selectedRoom}
                // totalPrice={totalPrice}
                // selectedStartDate={selectedStartDate}
                // selectedEndDate={selectedEndDate}
                // formData={formData}
                // handleChange={handleChange}
                goNext={goNext}
                onClose={onClose}
                />
              )}
              {currentStep === 3 && (
                <DetailStep
                  formData={formData}
                  handleChange={handleChange}
                  goNext={goNext}
                />
              )}
              {currentStep === 4 && (
                <ConfirmStep 
                goNext={goNext}
                onClose={onClose}/>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WizardSidebar;