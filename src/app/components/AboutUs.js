'use client'; 

import { useState } from "react";

import { motion } from "framer-motion";



export default function AboutUs() {

  const fullText = `Alivaa Hotels & Resorts is an upscale hospitality brand built around the idea of elevating everyday stays through thoughtful design, seamless service and an eye for modern living. Positioned at the intersection of comfort, style, and functionality, 

Alivaa caters to the evolving needs of today’s traveler—whether on a short city break, a business trip or an extended stay. We endeavour to provide our guests a consistent guest experience, contemporary spaces, essential amenities and personalized service that feels intuitive, not indulgent. At Alivaa, we believe in staying true to what matters—genuine comfort, quiet sophistication, and reliable hospitality.`;


  const charLimit = 200; 

  const [isExpanded, setIsExpanded] = useState(false); 



  return (

    <section  className="search-content about-us new-rj-block" id="alivaa-about-us">

      <article className="container">     

        <motion.div
          className="col-lg-12 text-center about-conteeent heading"

          initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.6 }}

        >
          <h2 className="about-us text-center mt-3">About Alivaa Hotels & Resorts</h2>

          <p className="content-boxx text-center" id="ccontent">

            {isExpanded ? fullText : fullText.slice(0, charLimit) + "... "}

            <button

              className="read-more-btnn text-blue-600 underline ml-2"

              onClick={() => setIsExpanded(!isExpanded)}

            >

              {isExpanded ? "Read less" : "Read more"}

            </button>

          </p>

          <h3 className="stay-alive-title mt-4">Stay Alive</h3>

        </motion.div>

      </article>

    </section>

  );

}

