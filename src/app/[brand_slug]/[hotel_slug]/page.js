import React from "react";
import axios from "axios";
import HotelOverviewClient from "./HotelOverviewClient";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default async function HotelDetailPage({ params }) {
  const resolvedParams = await params;
  const { hotel_slug, brand_slug  } = resolvedParams
  const city_alias = ""; // used as city_slug in the API

  let hotelData = {
    hotel_banner_slider: [],
    hotels: [],
    rooms_n_suites: [],
    hotel_restaurants: [],
    hotel_offers: [],
    hotel_faqs: [],
    near_by_hotel_data: [],
    hotel_testimonials: [],
    hotelfacilities: [],
    hotel_amenities: [],
    hotel_amenitiesall: [],
    things_to_dos_culture_category: [],
    things_to_dos_healthcare_category: [],
    things_to_dos_landmark_category: [],
    things_to_dos_shopping_category: [],
    hotel_event: [],
    hotel_meta: []
  };

  try {
    const response = await axios.post(
      `${API_BASE_URL}/hotel-overview`,
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
    <HotelOverviewClient
      hotelData={hotelData}
      brand_slug={brand_slug}
      city_alias={city_alias}
      hotel_slug={hotel_slug}
    />
  );
}
