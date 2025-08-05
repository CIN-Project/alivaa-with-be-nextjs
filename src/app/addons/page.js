"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AddOnsPage() {
  const [addonList, setAddonList] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          "https://csbe-api.staah.net/?RequestType=info&PropertyId=1703,25950",
          {
            headers: {
              "Content-Type": "application/json",
              "x-api-key": process.env.NEXT_PUBLIC_API_KEY_GETDATA,
            },
          }
        );

        const properties = response.data?.PropertyList;
        if (Array.isArray(properties)) {
          setAddonList(properties[0]?.ExtrasData || []);
        } else {
          console.error("Invalid Property:", properties);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="hotels-list hotels-rooms-list">
      {/* <div className="row m-0">
        <div className="col-md-12 p-0">
        <p>Add-Ons</p>
          {addonList.length > 0 ? (
            addonList.map((addon, index) => (
              <div key={index} className="accordion-item">
                <div className="room-flex">
                  
                  <p><strong>{addon?.AddonName}</strong></p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading add-ons...</p>
          )}
        </div>
      </div> */}
    </div>
  );
}
