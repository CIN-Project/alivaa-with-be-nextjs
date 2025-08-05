import React from "react";
import axios from "axios";
import HotelEventClient from "./HotelEventClient";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default async function HotelEventPage({ params }) {
  const resolvedParams = await params;
  const { hotel_slug, brand_slug  } = resolvedParams
  const city_alias = ""; // used as city_slug in the API

  let hotelData = {
    hotel_banner_slider: [],  
    hotel_event: [],
    hotel_meta: []
  };

  try {
    const response = await axios.post(
      `${API_BASE_URL}/hotel-events`,
      {
        brand_slug: brand_slug,
        city_slug: city_alias,
        hotel_slug: hotel_slug,
        web_source: "alivaahotels.com"
      }
    );
    hotelData = response.data;
  } catch (error) {
    console.error("Error fetching hotel data:", error);
  }

  return (
    <HotelEventClient
      hotelData={hotelData}
      brand_slug={brand_slug}
      city_alias={city_alias}
      hotel_slug={hotel_slug}
    />
  );
}
