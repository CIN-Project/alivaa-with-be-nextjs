import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get("https://csbe-api.staah.net/?RequestType=info&PropertyId=1703,25950", {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY_GETDATA,
      },
    });

    return NextResponse.json(response?.data?.PropertyList || []);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Failed to fetch property data" }, { status: 500 });
  }
}
