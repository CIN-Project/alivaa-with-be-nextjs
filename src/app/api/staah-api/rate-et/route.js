// app/api/staah-api/rate-et/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { selectedPropertyId, fromDate, toDate } = await req.json();

    const url = `https://csbe-api.staah.net/?RequestType=BeRate&PropertyId=${selectedPropertyId}&FromDate=${fromDate}&ToDate=${toDate}&Product=no`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY_GETRATEET,
      },
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in rate-et API:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
