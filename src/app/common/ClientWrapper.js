"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { BookingEngineProvider } from "../cin_context/BookingEngineContext";
import { createSignature } from "../../utilities/signature";

const Home = dynamic(() => import("../homepage"), { ssr: false });
export default function ClientWrapper() {
  const searchParams = useSearchParams();
  const [tokenKey, setTokenKey] = useState(null);
  const [status, setStatus] = useState(null);
  const [contentData, setContentData] = useState([]);

  // return <Home />;

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const selectedPropertyId = "51757";
        const hotelIds = [51757, 54943];
        // const selectedPropertyId = "25950";
        const selectedPropertyId = hotelIds.join(",");
        const timestamp = Date.now().toString();
        const secret = "ABDEFGHJKLMOPQRSTUVWXYZ123456789";
        const signature = await createSignature(
          JSON.stringify(selectedPropertyId),
          timestamp,
          secret
        );

        const response = await fetch(
          "https://cinbe.cinuniverse.com/api/cin-api/content",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-timestamp": timestamp,
              "x-signature": signature,
            },
            body: JSON.stringify({ selectedPropertyId }),
          }
        );
        const res = await response.json();
        sessionStorage.setItem("contentData", JSON.stringify(res));
        setContentData(res || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const token = searchParams.get("tokenKey");
    const stat = searchParams.get("status");
    setTokenKey(token);
    setStatus(stat);
  }, [searchParams]);
  return (
    <BookingEngineProvider>
      <Home contentData={contentData} tokenKey={tokenKey} status={status} />
    </BookingEngineProvider>
  );
}
