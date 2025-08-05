// app/api/staah-api/rate-et/route.js
import { NextResponse } from "next/server";

// promoCode = "c3VtbWVyMTA="

export async function POST(req) {
  try {
    const { selectedPropertyId, fromDate, toDate , promoCode} = await req.json();

    const url = `https://csbe-api.staah.net/?RequestType=bedata&PropertyId=${selectedPropertyId}&CheckInDate=${fromDate}&CheckOutDate=${toDate}&Product=no&PromoCode?=${promoCode}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY_GETRATE,
      },
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in rate-et API:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
