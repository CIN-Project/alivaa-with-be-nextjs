"use client";

import { useBookingEngineContext } from "../../context/BookingEngineContext"
import React, { useEffect, useState, useMemo, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import axios from "axios";

const styles = {
  input: {
    padding: "5px",
    fontSize: "12px",
    width: "250px",
  },
};

const DatePicker = ({ selectedStartDate, selectedEndDate, rates }) => {
  const { setSelectedDates, selectedPropertyId } = useBookingEngineContext();
  const [pricesMap, setPricesMap] = useState({});
  const dateInputRef = useRef(null);
  const currentDate = useMemo(() => new Date(), []);
  const sixMonthsLater = useMemo(() => {
    const date = new Date();
    date.setMonth(currentDate.getMonth() + 6);
    return date;
  }, [currentDate]);
  const fromDate = useMemo(() => currentDate.toISOString().split("T")[0], [currentDate]);
  const toDate = useMemo(() => sixMonthsLater.toISOString().split("T")[0], [sixMonthsLater]);

  useEffect(() => {
    const fetchPrices = async () => {
      if (!selectedPropertyId) return;
      try {
        const response = await axios.post("/api/staah-api/rate-et", {
          selectedPropertyId,
          fromDate,
          toDate,
        });
        const dayRate = response.data?.PropertyList?.[0]?.DayRate || {};
        const prices = {};
        for (const date in dayRate) {
          prices[date] = dayRate[date]?.Rate || 0;
        }
        setPricesMap(prices);
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };
  
    fetchPrices();
  }, []);
  
  
  useEffect(() => {
    if (!dateInputRef.current) return;
  
    const flatpickrInstance = flatpickr(dateInputRef.current, {
      mode: "range",
      dateFormat: "Y-m-d",
      minDate: fromDate,
      showMonths: 1,
      static: true,
      fixedHeight: true,
      showOutsideDays: false,
      defaultDate:
        selectedStartDate && selectedEndDate
          ? [new Date(selectedStartDate), new Date(selectedEndDate)]
          : null,
      onChange: (selectedDates) => {
        if (selectedDates.length === 2) {
          const [startDate, endDate] = selectedDates;
          const startDateFormatted = formatDate(startDate);
          const endDateFormatted = formatDate(endDate);
  
          let priceSum = 0;
          const tempDate = new Date(startDate);
          while (tempDate <= endDate) {
            const dateKey = formatDate(tempDate);
            if (pricesMap[dateKey]) {
              priceSum += pricesMap[dateKey];
            }
            tempDate.setDate(tempDate.getDate() + 1);
          }
  
          setSelectedDates(startDateFormatted, endDateFormatted, priceSum);
        }
      },
      onDayCreate: (dObj, dStr, fp, dayElem) => {
        const date = formatDate(dayElem.dateObj);
        if (pricesMap[date] !== undefined) {
          const priceTag = document.createElement("div");
          priceTag.className = "flatpickr-price";
          priceTag.style.fontSize = "10px";
          priceTag.style.position = "absolute";
          priceTag.style.bottom = "8px";
          priceTag.style.left = "50%";
          priceTag.style.transform = "translateX(-50%)";
          priceTag.textContent = `₹${pricesMap[date]}`;
          dayElem.appendChild(priceTag);
        }
      },
    });
    flatpickrInstance.open();
    return () => {
      flatpickrInstance.destroy();
    };
  }, [ pricesMap]);
  
  

  // Helper function to format dates as YYYY-MM-DD without timezone conversion
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div style={styles.input}>
      <input
  id="datePicker"
  ref={dateInputRef}
  placeholder="Please Select Date"
  className="form-control"
  style={{
    padding: "8px",
    fontSize: "13px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    display: "none"
  }}
/>

    </div>
  );
};

export default DatePicker;