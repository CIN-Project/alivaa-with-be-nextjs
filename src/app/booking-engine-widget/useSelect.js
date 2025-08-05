import { useState, useEffect, useRef } from "react";

export default function useSelect() {
  // Static hotels list for Shirdi and Amritsar
  const hotels = [
    {
      hotel_name: "Alivaa Hotel, Mcleodganj",
      // synxis_id: "1234",
      reserve_pegsbe_url: "https://alivaahotels.securedreservations.com/reservation?bID=6d7880d9-c05f-4be6-811f-eeb846d0c59d&cID=f1c6c3f5-04d5-4180-9895-7f3e3f6b240c&destination=id=185914d6-4ebc-48b5-b982-6e81e5eb35b0&type=2&checkInDate=2025-05-14&checkOutDate=2025-05-15&guest=[ac1=2]&roomPropertyID=185914d6-4ebc-48b5-b982-6e81e5eb35b0",
      // hotel_code: "SHD123",
    },
    {
      hotel_name: "Alivaa Hotel, Gurugram",
      // synxis_id: "5678",
      reserve_pegsbe_url: "https://bookings.alivaahotels.com/inst/#/home?propertyId=981NJ8TQ49ro3Z7RTrbLaPgGZCWk8ihVQvzMylYvu085aOhvZIjS2TE3NTc=&checkIn=2025-05-14&checkOut=2025-05-15&clientWidth=1265&JDRN=Y&RoomID=184902,184903,185018,185019,184904,185017,185949&noofrooms=1&adult0=1&child0=0&gsId=981NJ8TQ49ro3Z7RTrbLaPgGZCWk8ihVQvzMylYvu085aOhvZIjS2TE3NTc=",
      // hotel_code: "AMR567",
    },
    {
      hotel_name: "Hoften Hotel, Gurugram",
      // synxis_id: "5678",
      reserve_pegsbe_url: "https://live.ipms247.com/booking/book-rooms-morphosukhvasagurugram",
      // hotel_code: "AMR567",
    },
  ];

  const [options, setOptions] = useState([]);
  const [selectedHotelUrl, setSelectedHotelUrl] = useState("");
  const [hotelCode, setHotelCode] = useState("");
  const [defaultHotel, setDefaultHotel] = useState(null);

  // Set the options for dropdown based on the static hotel data
  useEffect(() => {
    const allOptions = [
      { label: "Select/Type a hotel or city", value: "" }, // Default option
      ...hotels.map((hotel) => ({
        label: `${hotel.hotel_name} (${hotel.city_name})`, // Hotel + City
        value: hotel.synxis_id, // Hotel ID as value
        type: "hotel", // Identify as hotel
      })),
      
    ];

    setOptions(allOptions);

    // Set default hotel if provided
    if (defaultHotel) {
      setSelectedHotelUrl(defaultHotel.reserve_pegsbe_url || "");
      setHotelCode(defaultHotel.hotel_code || "");
    }
  }, [defaultHotel]);

  // Function to handle selection change
  const handleSelectChange = (selectedOption) => {
    const value = selectedOption?.value || "";
    const type = selectedOption?.type || "";

    console.log("Selected Value:", value);

    if (type === "hotel") {
      // Find the selected hotel by its synxis_id
      const selectedHotel = hotels.find((hotel) => hotel.synxis_id === value);
      setSelectedHotelUrl(selectedHotel?.reserve_pegsbe_url || "");
      setHotelCode(selectedHotel);
    } 
  };

  return {
    options,             
    selectedHotelUrl,    
    hotelCode,           
    handleSelectChange, 
    defaultHotel,
  };
}
