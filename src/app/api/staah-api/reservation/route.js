// app/api/staah-api/reservation/route.js

export async function POST(req) {
  try {
    const payload = await req.json();

    const response = await fetch("https://csbe-api.staah.net/?RequestType=reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": process.env.NEXT_PUBLIC_API_KEY_POSTDATA, 
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Server Error" }), { status: 500 });
  }
}
