"use client";
import { useBookingEngineContext } from "../context/BookingEngineContext";
import * as ReactDOM from "react-dom";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import "flatpickr/dist/themes/material_green.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlane, faDiamond, faMaximize, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import RoomManager from "./RoomManager";

import DateRangePicker from "./Flatpicker";
import WizardSidebar from "./PaymentGateway/WizardForm";
import './booking.css';

const dummyImage = "/no_image.jpg";

const FilterBar = () => {
  const { setSelectedPropertyId, setFilteredRooms, setSelectedRoom, setSelectedRoomRate, setPropertyId} = useBookingEngineContext();
  const [filters, setFilters] = useState({
    offer: "",
    query: "",
    dateRange: { start: "", end: "", totalPrice: 0 },
    guests: { adults: 1, children: 0, rooms: 1 },
  });

  const [cancellationPolicy, setCancellationPolicy] = useState('');
  const [destination, setDestination] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [propertyList, setPropertyList] = useState([]);
  const [isClassAddedBook, setIsClassAddedBook] = useState(false);
  const [activeHotel, setActiveHotel] = useState(null);
  const [visibleOfferRoomId, setVisibleOfferRoomId] = useState(null);
  const [selectedRoomOffers, setSelectedRoomOffers] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const inputRef = useRef(null);

  // Fetch property list on component mount
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const config = {
          method: "get",
          maxBodyLength: Infinity,
          url: `https://csbe-api.staah.net/?RequestType=info&PropertyId=1703,25950`,
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY_GETDATA,
          },
        };

        const response = await axios(config);
        const properties = response.data?.PropertyList;

        if (Array.isArray(properties)) {
          setPropertyList(properties);
        } else {
          console.error("Invalid Property:", properties);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  function handleBlur() {
    setTimeout(() => {
      setIsFocused(false);
    }, 200);
  }

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsFocused(false);
    }
  };

  // Handle destination input change
  const handleDestinationChange = async (e) => {
    const input = e.target.value;
    setIsFocused(true);
    setDestination(input);

    if (input) {
      try {
        const matchedSuggestions = propertyList
          .flatMap((property) => [
            { name: property.PropertyData.Address.City, id: property.PropertyData.PropertyId },
            { name: property.PropertyData.PropertyName, id: property.PropertyData.PropertyId },
          ])
          .filter((item) => item.name.toLowerCase().includes(input.toLowerCase()));
        setSuggestions([...new Set(matchedSuggestions)]);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  // Handle search
  const handleSearch = () => {
    if (!destination.trim()) {
      toast.error("Please enter a city/hotel.");
      return;
    }
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '100';
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    document.querySelector('.hotels-rooms-list').style.overflow = 'auto';
    // console.log("Searching with destination:", destination, "and date range:", filters.dateRange);
  
    setIsClassAddedBook(true);
  
    if (propertyList) {
      const result = propertyList.filter((property) => {
        const matchesDestination =
          destination
            ? property.PropertyData.Address.City.toLowerCase().includes(destination.toLowerCase()) ||
              property.PropertyData.PropertyName.toLowerCase().includes(destination.toLowerCase())
            : true;
        return matchesDestination;
      });
  
      setFilteredProperties(result);
      setHasSearched(true);
      // console.log("Filtered Properties:", result);
    } else {
      console.error("PropertyList is undefined or not an array");
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setDestination(suggestion.name);
    setSelectedPropertyId(suggestion.id); // Set the selected property ID
    setSuggestions([]);

    // Automatically filter properties when a suggestion is clicked
    const result = propertyList.filter((property) => property.PropertyData.PropertyId === suggestion.id);
    setFilteredProperties(result);
    setHasSearched(true);
  };

  // Rest of your original code remains unchanged
  const handleGetDetails = (room) => {
    setSelectedRoom(room);
    setSelectedRoomRate(room.RackRate);
    console.log('SeletedRoom:', selectedRoom.RackRate);
  };
  const handleDateChange = (startDate, endDate, totalPrice) => {
    setFilters({
      ...filters,
      dateRange: { start: startDate, end: endDate, totalPrice },
    });
  };

  const handleRoomChange = (adults, children, roomCount) => {
    setFilters((prev) => ({
      ...prev,
      guests: { adults, children, rooms: roomCount },
    }));
  };

  const showBookingEngine = () => {
    setIsVisible(true);
  };

  const hideBookingEngine = () => {
    setIsVisible(false);
  };

  const toggleBookNow = (id) => {
    setActiveHotel((prev) => (prev === id ? null : id));
  };

  const toggleAmenitiesPopup = () => {
    setShowAllAmenities(!showAllAmenities);
  };

  const removeHtmlTags = (htmlString) => {
    return htmlString
      .replace(/\n|\t/g, "")
      .replace(/<\/?ul>/g, "")
      .replace(/<br\s*\/?>/g, "")
      .replace(/&nbsp;/g, " ");
  };
  const [isWizardVisible, setIsWizardVisible] = useState(false);

  const toggleWizard = () => {
    setIsWizardVisible(!isWizardVisible);
  };

  // const setCancellationPolicy  = (mapping) => {
  //   CancellationPolicy(!isWizardVisible);
  // };

  // const handleGetDetails = (room) => {
  //   setSelectedRoom(room);
  //   setSelectedRoomRate(room.RackRate);
  //   console.log('SeletedRoom:', selectedRoom.RackRate);
  // };

  return (
    <>
      <section className="banner-section">
        <div className="banner-image">
          <video src="/img/banner-video.mp4" autoPlay muted loop className="video-banner"></video>
          <div className="banner-search-btn">
            {!isVisible && (
              <a className="banner-search-btn-link" onClick={showBookingEngine} id="booking-engine-btn">
                <Image src="/img/search-icon-white.svg" height={500} width={500} alt="search icon" />
              </a>
            )}
          </div>
        </div>
      </section>

      <section className={`booking-form-wrapper toggle-div ${isVisible ? "visible" : "hidden"}`}>
        <div className="container-fluid">
          <div id="booking-bar" className={`booking-bar ${isClassAddedBook ? "fullscreen" : ""}`}>
            <div className="hide-booking-engine" onClick={hideBookingEngine}>
              CLOSE <Image alt="close icon" width="25" height="25" src="./images/white_close_icon.svg" style={{width: '25px', height: '25px'}} />
            </div>
            <div className="booking-bar-form">
              <div className="main-bx-field mb-3 mb-md-0">
                <div className="custom-select form-select">
                  <select className="select-options" onChange={(e) => setFilters({ ...filters, offer: e.target.value })}>
                    <option value="0">Website-Only Benefits</option>
                    <option value="1">Extra 5% Off</option>
                    <option value="2">Free High-Speed Wi-Fi</option>
                    <option value="3">Best Rate Guaranteed</option>
                    <option value="4">Welcome Amenities</option>
                  </select>
                </div>
              </div>
              <div className="main-bx-field filter-item me-3 position-relative">
                <input ref={inputRef} type="text" value={destination} onChange={handleDestinationChange}
                  onFocus={handleFocus} onBlur={handleBlur} onKeyDown={handleKeyDown}
                  placeholder="Search hotel/city" className="form-control" aria-label="Search Hotel/City" required />
                    {isFocused && destination.trim() === '' && (
                          <div id="suggestions" className="suggestions-list popup-box" style={{ display: 'block', position: 'absolute', width: '100%', zIndex: 1000 }}>
                            <small>hotels</small>
                            <div id="hotels-listing" className="hotels-listing">
                              <p>POPULAR DESTINATIONS</p>
                              <ul role="listbox" aria-labelledby="search-input">
                                <li>Amritsar</li>
                                <li>Shimla</li>
                                <li>Hyderabad</li>
                              </ul>
                              <div className="amenities">
                                <p>INSPIRATION</p>
                                <ul>
                                  <li>
                                    <Image src="/images/icon-images/bag.png" alt="icon" height={20} width={20} />
                                    <span>Nature</span>
                                  </li>
                                  <li>
                                    <Image src="/images/icon-images/lunch.svg" alt="icon" height={20} width={20} />
                                    <span>Hiking</span>
                                  </li>
                                  <li>
                                    <Image src="/images/icon-images/temperature.png" alt="icon" height={20} width={20} />
                                    <span>Kayaking</span>
                                  </li>
                                </ul>
                                <a href="#" className="view-all-hotel-btn">VIEW ALL HOTELS</a>
                              </div>
                            </div>
                          </div>
                    )}

                {suggestions.length > 0 && (
                  <ul className="list-group position-absolute w-100">
                    {suggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="list-group-item"
                        onClick={() => handleSuggestionClick(suggestion)}
                        style={{ cursor: 'pointer' }}
                      >
                        {suggestion.name || suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div> 
              <div className="main-bx-field mb-3 mb-md-0 bdr-booking-bottom">
                <DateRangePicker onDateChange={handleDateChange} />
              </div>
              <div className="main-bx-field filter-item me-3 bdr-booking-bottom">
                <RoomManager onRoomChange={handleRoomChange} />
              </div>
              <div className="main-bx-field mb-2 mb-md-0 this-is-offer-options">
                <div className="custom-select form-select">
                  <select className="select-options">
                    <option value="0">None</option>
                    <option value="1">Corporate Access Code</option>
                    <option value="2">Travel Agency Code</option>
                    <option value="3">Business Connect Code</option>
                    <option value="4">Group Code</option>
                  </select>
                </div>
              </div>
              <div id="search" className="search-icon hotel-search-btn-wrapper">
                <a href="#" onClick={handleSearch}>
                  <span>Search</span>
                  <FontAwesomeIcon icon={faSearch} />
                </a>
              </div>
            </div>

            {/* Display filtered properties */}
            <div className="hotels-list hotels-rooms-list">
              <div className="row m-0">
                <div className="col-md-12 p-0">
                  {hasSearched && filteredProperties.length === 0 ? (
                    <p>No properties found matching your criteria.</p>
                  ) : (
                    <div>
                      {filteredProperties.map((property) => (
                            <div key={property.PropertyData.PropertyId} className="card rounded-3 mb-3">
                              <div className="row g-0">
                                <div className="col-md-9">
                                  <div className="row">
                                    <div className="col-md-4 col-sm-4">
                                      <Image src={property.PropertyData.PropertyImages && property.PropertyData.PropertyImages.length > 0 ? property.PropertyData.PropertyImages[0] : dummyImage} alt="alt" width={200} height={150} className='img-fluid rounded-3 property-image' />
                                    </div>
                                    <div className="col-md-8 col-sm-8">
                                      <div className="card-body p-0">
                                        <div className="property-main-content">
                                          <p className="hotel-info mb-1">
                                            <span>{property.PropertyData.PropertyName}</span>
                                          </p>
                                          <div className="hotel-dist">
                                            <span className="highlight-Text">{property.PropertyData.Address.City}</span>
                                            <span className="drive">
                                              {`${property.PropertyData.Address.AddressLine}, ${property.PropertyData.Address.City}, ${property.PropertyData.Address.State}, ${property.PropertyData.Address.Country}, ${property.PropertyData.Address.PostalCode}`}
                                            </span>
                                          </div>
                                          <div className="hotels-amenities">
                                            {property.PropertyData.Amenities && Object.entries(property.PropertyData.Amenities)
                                              .slice(0, 1)
                                              .map(([category, items]) => (
                                                <div key={category}>
                                                  <ul>
                                                    {Array.isArray(items) && items.slice(0, 4).map((item, index) => (
                                                      <li key={index}>{item}</li>
                                                    ))}
                                                  </ul>
                                                  {Array.isArray(items) && items.length > 2 && (
                                                    <button onClick={() => toggleAmenitiesPopup(property.PropertyData.PropertyId)} className="view-amenities-btn mt-3" data-bs-toggle="modal" data-bs-target={`#amenitiesModal-${property.PropertyData.PropertyId}`}>
                                                      View Amenities
                                                    </button>
                                                  )}
                                                </div>
                                              ))}
                                          </div>
                                          {ReactDOM.createPortal(
                                            <div className="modal fade" id={`amenitiesModal-${property.PropertyData.PropertyId}`} tabIndex="-1" aria-labelledby={`amenitiesModalLabel-${property.PropertyData.PropertyId}`} aria-hidden="true">
                                              <div className="modal-dialog modal-dialog-centered modal-lg">
                                                <div className="modal-content">
                                                  <div className="modal-header">
                                                    <h5 className="modal-title" id={`amenitiesModalLabel-${property.PropertyData.PropertyId}`}>{property.PropertyData.PropertyName} Amenities</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"> CLOSE <Image src="./images/white_close_icon.svg" alt="close icon" width={25} height={25} style={{width: '25px', height: '25px'}} /></button>
                                                  </div>
                                                  <div className="modal-body">
                                                    <div className="popup-box-contentrj">
                                                      <div className='popup-amenity-items'>
                                                        {Object.entries(property.PropertyData.Amenities).map(([category, items]) => (
                                                          Array.isArray(items) && items.map((item, index) => (
                                                            <span key={index}> <FontAwesomeIcon icon={faDiamond} />  {item}</span>
                                                          ))
                                                        ))}
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>,
                                            document.body
                                          )}

                                          <div className="location">
                                            <p>
                                              <FontAwesomeIcon icon={faPlane} />
                                              Sri Guru Ram Das Ji International Airport -
                                              Amritsar - 13 KM
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="price-details">
                                    <span>Starting Rate/Night</span>
                                    <p className="priceText">
                                      <strong>₹ {`${Math.min(...property.RoomData.map((room) => room.RackRate))}`}</strong>
                                    </p>
                                  </div>
                                  <div className="book-a-stay d-flex justify-content-end">
                                    <button className="btn btn-primary accordion-button" onClick={() => {
                                      const propertyId = property.PropertyData.PropertyId;
                                      console.log("Property ID:", propertyId);
                                      toggleBookNow(propertyId);
                                      setTimeout(() => {
                                        const element = document.getElementById(`hotel-${propertyId}`);
                                        if (element) {
                                          element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                      }, 100);
                                    }}>
                                      book now
                                    </button>
                                  </div>
                                </div>
                              </div>

                              {activeHotel === property.PropertyData.PropertyId && (
                                <div className="book-now-content" id={`hotel-${property.PropertyData.PropertyId}`}>
                                  <div className="accordion-body mt-4">
                                    {Array.isArray(property.RoomData) && property.RoomData.length > 0 ? (
                                      property.RoomData.map((rooms) => (
                                        <div key={rooms.RoomId} className="row g-0" >
                                          <div className="col-md-9">
                                            <div className="row">
                                              <div className="col-md-4">
                                                <Image src={rooms.Images && rooms.Images.length > 0 ? rooms.Images[0] : dummyImage} className="img-fluid rounded-3 room-image" alt="image" height={300} width={300} />
                                              </div>
                                              <div className="col-md-8">
                                                <div className="card-body p-0">
                                                  <div>
                                                    <p className="hotel-info mb-1">
                                                      <span>{rooms.RoomName}</span>
                                                      <span className="rating">
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-regular fa-star" />
                                                        <i className="fa-regular fa-star" />
                                                      </span>
                                                    </p>
                                                    <div className="hotel-dist">
                                                      <span className="highlight-Text">{rooms.Address.City}</span>
                                                      <span className="drive">
                                                        1.8 km drive to Deltin Royale
                                                      </span>
                                                    </div>
                                                    <div className="tile-placeholder">
                                                      <span className='room-description'> {rooms.RoomDescription} </span>
                                                    </div>
                                                    <div className="facilities-roomm">
                                                      <span className='s-room-amenitiess'>
                                                        {Object.entries(rooms.RoomAmenities).slice(0, 1)
                                                          .map(([category, items]) => (
                                                            <ul key={`${rooms.RoomId}-${category}`} className="single-room-amenities">
                                                              {Array.isArray(items) && items.map((item, index) => (
                                                                <li key={`${rooms.RoomId}-${index}`}>{item}</li>
                                                              ))}
                                                            </ul>
                                                          ))}
                                                        <button className="view-amenities-btn mt-3"
                                                          data-bs-toggle="modal" 
                                                          data-bs-target={`#amenities-modal-${rooms.RoomId}`}
                                                        >
                                                          View More Amenities
                                                        </button>
                                                      </span>
                                                    
                                                    {ReactDOM.createPortal(
                                                      <div className="modal fade" id={`amenities-modal-${rooms.RoomId}`} tabIndex="-1" aria-labelledby={`amenitiesModalLabel-${rooms.RoomId}`} aria-hidden="true">
                                                        <div className="modal-dialog modal-dialog-centered modal-lg">
                                                          <div className="modal-content">
                                                            <div className="modal-header">
                                                              <h5 className="modal-title" id={`amenitiesModalLabel-${rooms.RoomId}`}>{rooms.RoomName} Amenities</h5>
                                                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">CLOSE <Image src="./images/white_close_icon.svg" alt="close icon" width={25} height={25} style={{width: '25px', height: '25px'}} /></button>
                                                            </div>
                                                            <div className="modal-body">
                                                              <div className='popup-amenity-items'>
                                                                {Object.entries(rooms.RoomAmenities).map(([category, items]) => (
                                                                  Array.isArray(items) && items.map((item, index) => (
                                                                    <span key={`amenity-${rooms.RoomId}-${category}-${index}`}><FontAwesomeIcon icon={faDiamond} />  {item}</span>
                                                                  ))
                                                                ))}
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>,
                                                      document.body
                                                    )}
                                                    </div>
                                                    <div className="room-type-single">
                                                      <Image
                                                        src="/images/basketball-court.svg"
                                                        width={25}
                                                        height={25}
                                                        className="rounded-3 amenities-imgg"
                                                        alt="image"
                                                        style={{width: '25px', height: '25px'}}
                                                      />
                                                      <p className='bold-text'>
                                                        {rooms.RoomView} 
                                                      </p>
                                                      
                                                      
                                                      <p className="bold-text ms-2">
                                                        <FontAwesomeIcon icon={faPeopleGroup} className="mx-2 mt-1" />
                                                        Up to {rooms.MaxGuest} Guests
                                                      </p>
                                                      
                                                      <p className='ms-3 bold-text'> 
                                                          <FontAwesomeIcon icon={faMaximize} /> {rooms.RoomSize}
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-md-3">
                                            <div className="price-details">
                                              <div className="d-flex">
                                                <span>very good</span>
                                                <span className="ratingvalue">3.9</span>
                                                <p>{property.PropertyData.Rating} Ratings</p>
                                              </div>
                                             
                                              
                                              <div className="make-flex">
                                                <p className="lineThrough">₹ 5,999</p>
                                                <p className="priceText">₹ {rooms.RackRate}</p>
                                                
                                                <p className="midGreyText">
                                                  + taxes & fees 
                                                </p>
                                                {/* <p className="midGreyText">
                                                  + ₹ 648 taxes & fees <span>Per Night</span>
                                                </p> */}
                                              </div>
                                            </div>
                                            <div className="book-a-stay d-flex justify-content-end">
                                              <button
                                                className="btn btn-primary"
                                                onClick={() => {
                                                  setVisibleOfferRoomId((prev) => (prev === rooms.RoomId ? null : rooms.RoomId));
                                                                          
                                                  setSelectedRoom({ roomId: rooms.RoomId, roomName: rooms.RoomName });
                                                  setSelectedRoomRate({ roomId: rooms.RoomId, roomName: rooms.RackRate });
                                                  setTimeout(() => {
                                                    document.getElementById(`offer-${rooms.RoomId}`)?.scrollIntoView({ behavior: 'smooth' });
                                                  }, 100);
                                                }}
                                              >
                                                Get Details
                                              </button>
                                            </div>
                                          </div>
                                          {visibleOfferRoomId === rooms.RoomId && (
                                            <div id={`offer-${rooms.RoomId}`} className="offers-container mt-4">
                                              <div className="accordion-body">
                                                {property.RateData.filter(
                                                  (rate) =>
                                                    property.Mapping.some(
                                                      (map) => map.RoomId === rooms.RoomId && map.RateId === rate.RateId
                                                    )
                                                ).map((rate, idx) => {
                                                  const mapping = property.Mapping.find(map => map.RoomId === rooms.RoomId && map.RateId === rate.RateId)
                                                  return (
                                                  <div key={idx} className="row mb-3">
                                                    <div className="col-md-9">
                                                      <p className="hotel-info mb-1">
                                                        <span>{rate.RateName}</span>
                                                        <span> - ₹ {mapping?.PackageRate}</span>
                                                        <span> - Cancellation Policy: {mapping?.CancellationPolicy}</span>
                                                        
                                                      </p>
                                                      <div className="hotel-dist">
                                                        <ul className="hotel-room-offers">
                                                          <div dangerouslySetInnerHTML={{ __html: removeHtmlTags(rate.RateDescription) }} />
                                                        </ul>
                                                        <a className="text-start"
                                                          onClick={() => setSelectedRoomOffers([rate])}
                                                          data-bs-toggle="modal" 
                                                          data-bs-target="#rateDetailsModal">
                                                          Rate Details
                                                        </a>
                                                      </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                      <div className="price-details">
                                                        <div>
                                                          <p>MEMBER RATE</p>
                                                          <p>₹ {rate.MemberRate || '12,150'}</p>
                                                          <div className="book-a-stay">
                                                            <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> Login / Join</a>
                                                          </div>
                                                        </div>
                                                        <div>
                                                          <p>STANDARD RATE</p>
                                                          <p>₹ { rooms.RackRate}</p>
                                                          <div className="select-button book-a-stay">
                                                            <button className="btn btn-primary" onClick={() => {
                                                              toggleWizard()
                                                              setIsVisible(true)
                                                              setCancellationPolicy(mapping.CancellationPolicy)
                                                              // Store cancellation policy in context
                                                              // setSelectedRoom(rooms)
                                                              // setSelectedRoomRate(mapping?.PackageRate)
                                                              // setPropertyId(property.PropertyId)
                                                              // setSelectedPropertyId(property.PropertyId)
                                                              // setFilteredRooms([rooms])
                                                              // Define setCancellationPolicy in your context like this:
                                                              // const [cancellationPolicy, setCancellationPolicy] = useState('')
                                                              // if (mapping?.CancellationPolicy) {
                                                              //   setCancellationPolicy(mapping.CancellationPolicy)
                                                              // }
                                                            }}> 
                                                             Select </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                )
                                                }
                                                )
                                                }
                                              </div>
                                            </div>
                                          )}

                                            {/* In other component, display the cancellation policy like this:
                                            import { useContext } from 'react'
                                            import { BookingContext } from '../context/BookingContext'

                                            const OtherComponent = () => {
                                              const { cancellationPolicy } = useContext(BookingContext)
                                              
                                              return (
                                                <div>
                                                  <h3>Cancellation Policy:</h3>
                                                  <p>{cancellationPolicy}</p>
                                                </div>
                                              )
                                            } */} 
                                            
                                         {ReactDOM.createPortal(
                                            <div className="modal fade" id="rateDetailsModal" tabIndex="-1" aria-labelledby="rateDetailsModalLabel" aria-hidden="true">
                                              <div className="modal-dialog modal-dialog-centered">
                                                <div className="modal-content">
                                                  <div className="modal-header">
                                                    <h5 className="modal-title" id="rateDetailsModalLabel">Rate Details</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setSelectedRoomOffers([])}> CLOSE <Image src="./images/white_close_icon.svg" alt="close icon" width={25} height={25} style={{width: '25px', height: '25px'}} /></button>
                                                  </div>
                                                  <div className="modal-body">
                                                    <div className="offer-list">
                                                      {selectedRoomOffers.map((rate, idx) => (
                                                        <div key={idx} className="offer-item">
                                                          <h5>{rate.RateName}</h5>
                                                          <h5>{rate.Meal}</h5>
                                                          <div className="popup-amenity-items py-3">
                                                            <div dangerouslySetInnerHTML={{ __html: removeHtmlTags(rate.RateDescription) }} />
                                                          </div>
                                                          <p><b>Min Package Rate :</b> ₹ {property.Mapping.find(map => map.RateId === rate.RateId)?.MinPackageRate}</p>
                                                          <p><b>Extra Adult Rate :</b> ₹ {property.Mapping.find(map => map.RateId === rate.RateId)?.ExAdRate}</p>
                                                          <p><b>Extra Child Rate :</b> ₹ {property.Mapping.find(map => map.RateId === rate.RateId)?.ExChildRate}</p>
                                                         
                                                          <div className="cancellation-div">
                                                            <h6>Cancellation Policy</h6>
                                                            <p>{property.Mapping.find(map => map.RateId === rate.RateId)?.CancellationPolicy}</p>
                                                          </div>
                                                        </div>
                                                      ))}
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>,
                                            document.body
                                          )}
                                        </div>
                                      ))
                                     ) : (
                                      <p>No room data available for this property.</p>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WizardSidebar isVisible={isWizardVisible} onClose={() => setIsWizardVisible(false)} />
    </>
  );
};

export default FilterBar;