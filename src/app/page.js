// "use client";
// import dynamic from "next/dynamic";
// const Home = dynamic(() => import("./homepage"), { ssr: false });

// export default function page() {
//   return <Home />;
// }


import { Suspense } from "react";
import ClientWrapper from "./common/ClientWrapper";
export default function Page() {
  // return <Home />;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientWrapper />
    </Suspense>
  );
}
// import Home from "./homepage";

// export default function Page() {
//   return <Home />;
// }

