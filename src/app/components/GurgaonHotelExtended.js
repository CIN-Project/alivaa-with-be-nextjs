



"use client";

import "../../app/styles/inner.css";

import { motion } from "framer-motion";

const GurgaonHotelExtended = ({homeDescription })=>{



    return (

    

    <motion.section initial={{ opacity: 0, y: -500 }}

    animate={{ opacity: 1, y: 0 }}

    transition={{ duration: 0.6, delay: 0.6 }} >

      <motion.div className="col-12" initial={{ opacity: 0, y: -100 }}

    whileInView={{ opacity: 1, y: 0 }}

    transition={{ duration: 0.6, delay: 0.6 }}>
       <span dangerouslySetInnerHTML={{ __html: homeDescription }}></span>

{/* <h4 className="inner-hd">Accommodation</h4>
<p className="content-boxx">Located on Sohna Road in Gurgaon, Alivaa Hotels 
understands today's travellers needs and is committed to excellence in every aspect of hospitality. 

We understand what our guest is looking for while booking a stay. Guests desire an environment that 

resonates with their lifestyle, and we strive to create an atmosphere that is a perfect blend of 

exceptional services personalised to each guest's needs. From the moment you step in, we make sure 

that you experience an ambiance of warmth, which is followed by our attentive staff ensuring that your 

stay with us is a memorable one.</p>
          <p className="content-boxx" style={{textAlign: "justify", marginTop: "none"}}>Alivaa Hotels stands out in the world of hospitality when it comes to luxury, 

            comfort, and lifestyle. We are not only a hotel but an experience that provides comfort, elegance, 

            and unmatched services to its guests. Alivaa Hotels offers a range of well-appointed and beautifully 

            designed rooms that showcase a superior sense of style. Every room has been crafted with the aim of 

            providing the utmost comfort and luxury to guests. From spacious luxury suites that offer you to witness 

            splendid views of the city to intimate cozy rooms that are ideal for relaxation that allows you to 

            recharge. Whether you are on a business trip or leisure vacation, we will provide you with the perfect 

            setting along with top modern amenities. We take pride in our accommodation, where our dedicated staff 

            is committed to ensuring that every guest feels valued and cared for. So we invite you to explore the 

            vacation of your dreams. If you are looking for the best stay in Gurgaon, then Alivaa Hotels & Resorts 

            is your final destination to reach. Book your luxury stay in Gurgaon with us; we promise to provide you 

            with an experience that will exceed your expectations.



          </p> */}

      </motion.div>

      

      {/* <motion.div className="col-12" initial={{ opacity: 0, y: -100 }}

    whileInView={{ opacity: 1, y: -80}}

    transition={{ duration: 0.6, delay: 0.6 }}>

          <h4 className="inner-hd">Our Cafe</h4>

          <p className="content-boxx" style={{textAlign: "justify"}}>What attracts towards our Staywoke Cafe is its vibrant space where 

            food meets creativity. Our carefully crafted menu includes different varieties of options, from 

            healthy bowls to delightful desserts. The ambiance is so welcoming and relaxed that it makes it 

            a perfect place to spend time with your family and friends. The hotel's location offers a 

            convenient, accessible, and vibrant atmosphere, attracting both guests and locals. The lively 

            environment at Staywoke makes it a desirable food stop in Gurgaon. Experience the upscale dining 

            experience at Staywoke which is positioned as one of the best cafes in Gurgaon . 

            Enjoy every meal in a cozy sitting where every dish is crafted to satisfy your cravings.

          </p>

      </motion.div>

      <motion.div className="col-12" initial={{ opacity: 0, y: -120 }}

    whileInView={{ opacity: 1, y: -100 }}

    transition={{ duration: 0.6, delay: 0.6 }}>

          <h4 className="inner-hd">Wellness and Relaxation</h4>

          <p className="content-boxx" style={{textAlign: "justify",marginBottom:"-80px"}}>At Alivaa Hotels, we are not only focusing on comfort and luxury but 

            we also extend our wellness offering to cater to both mind and body and ensure that you have a 

            wonderful time during your stay. For those who are fitness freak and love to maintain their 

            fitness routine while travelling, we have our fully equipped fitness center with modern exercise 

            equipments. Elevate your stay with our swimming pool and gymnasium facilities. The swimming pool 

            area is designed to cater to guests of all ages. Take a refreshing dip in peaceful surroundings 

            and soak up in the sun. You can enjoy refreshing beverages and snacks right next to your lounge 

            chair. Alivaa, with its offerings, turns out to be an amazing hotel with a swimming pool in 

            Gurgaon, Sohna Road. An unforgettable experience at Alivaa Hotels awaits you. Visit us and 

            discover the perfect balance of luxury and relaxation.

          </p>

      </motion.div> */}

    

</motion.section>


)

}

export default GurgaonHotelExtended;