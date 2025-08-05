import { createContext, useContext, useState } from 'react';

const BookingEngineContext = createContext();

export const BookingEngineProvider = ({ children }) => {
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const [selectedPropertyName, setSelectedPropertyName] = useState(null);
  const [selectedPropertyPhone, setSelectedPropertyPhone] = useState(null);
  

  const [propertyId, setPropertyId] = useState(null);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedRackRate, setselectedRackRate] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [selectedRoomRate, setSelectedRoomRate] = useState(null);
  const [selectedRoomRackRate, setSelectedRoomRackRate] = useState(null);
  const [selectedRoomDetails, setSelectedRoomDetails] = useState(null);
  const [cancellationPolicyState, setCancellationPolicyState] = useState(null);
  const [selectedAddOns, setAddOns] = useState([]);
  const [addonAmountToatal, setAddonAmountToatal] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [addonList, setAddonList] = useState([]);
  const [selectedRateDataList,selectedSetRateDataList] = useState([]);
  const [selectedAddonList, selectedSetAddonList] = useState([]);
  // Store user details
  const [userDetails, setUserDetails] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gstNumber: "",
    specialRequests: "",
    agreeToTerms: false,
  });

  const updateUserDetails = (newDetails) => {
    setUserDetails((prev) => ({ ...prev, ...newDetails }));
  };

  const getRoomNameById = (roomId) => {
    if (!filteredRooms || filteredRooms.length === 0) return "Unknown Room";
    const room = filteredRooms.find((room) => room.roomCategoryId === roomId);
    return room ? room.roomName : "Unknown Room";
  };

  const setSelectedDates = (startDate, endDate, price) => {
    if (startDate > endDate) {
      console.error("Start date cannot be after end date");
      return;
    }
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
    setTotalPrice(price);
  };

  return (
    <BookingEngineContext.Provider
      value={{
        selectedPropertyPhone,
        setSelectedPropertyPhone,
        selectedPropertyName,
        setSelectedPropertyName,
        selectedPropertyId, 
        setSelectedPropertyId,
        propertyId,
        setPropertyId,
        cancellationPolicyState, 
        setCancellationPolicyState,
        selectedStartDate,
        selectedEndDate,
        totalPrice,
        setTotalPrice,
        searchResults,
        userDetails,
        selectedRoom,
        setSelectedRoom,
        selectedRooms,
        setSelectedRooms,
        filteredRooms,
        setFilteredRooms,
        getRoomNameById,
        setSearchResults,
        setUserDetails,
        setSelectedDates,
        selectedRoomRate,
        setSelectedRoomRate,
        selectedRackRate,
        setselectedRackRate,
        selectedRoomRackRate,
        setSelectedRoomRackRate,
        selectedRoomDetails,
        setSelectedRoomDetails,
        updateUserDetails,
        selectedAddOns,
        setAddOns,
        addonAmountToatal, 
        setAddonAmountToatal,
        currentStep, 
        setCurrentStep,
        addonList,
        setAddonList,
    selectedAddonList,
    selectedSetAddonList,
    selectedRateDataList,
    selectedSetRateDataList,
      }}
    >
      {children}
    </BookingEngineContext.Provider>
  );
};

const useBookingEngineContext = () => {
  const context = useContext(BookingEngineContext);
  if (!context) {
    throw new Error("useBookingEngineContext must be used within a BookingEngineProvider");
  }
  return context;
};

export { useBookingEngineContext };
