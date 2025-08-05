import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const paramvalues = formData.get("paramvalues");
    const responseJson = JSON.parse(paramvalues);
    //const paymentStatus = responseJson.status;
    
    // if (paymentStatus === "success") {
      const html = `
        <html>
          <head>
            <script>
              sessionStorage.setItem('paymentResponse', JSON.stringify(${JSON.stringify(
                responseJson
              )}));
              window.location.href = '/';
            </script>
          </head>
          <body>Redirecting...</body>
        </html>
      `;

      return new Response(html, {
        status: 200,
        headers: {
          "Content-Type": "text/html",
        },
      });
    // }

    // return NextResponse.redirect("https://clarksdemo.cinuniverse.com/payment/failed", {
    //   status: 302,
    // });
    // return (
    //   <>
      
    //   <div className="text-center p-10">
    //         <h1 className="text-3xl font-bold text-red-600">Payment Failed At Route</h1>
           
    //       </div>
    //   </>
    // )
  } catch (error) {
    console.error("Error processing response:", error);
   // return NextResponse.redirect("/payment/failed", { status: 500 });
    return (
      <>
          <div className="text-center p-10">
            <h1 className="text-3xl font-bold text-red-600">Payment Failed At Route Catch</h1>
          </div>
      </>
    )
  }
}
