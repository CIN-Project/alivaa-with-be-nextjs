



"use client";

import "../../app/styles/inner.css";

import { motion } from "framer-motion";

const GurugramHotelExtened = ()=>{



    return (<>

    

    <motion.section initial={{ opacity: 0, y: -500 }}

    animate={{ opacity: 1, y: 0 }}

    transition={{ duration: 0.6, delay: 0.6 }}>

    <div className="container">

      <motion.div className="col-12" initial={{ opacity: 0, y: -100 }}

    whileInView={{ opacity: 1, y: 0 }}

    transition={{ duration: 0.6, delay: 0.6 }}>

          <h4 className="inner-hd">Accommodation</h4>

          <p className="content-boxx">All of our rooms with 335 sq feet of space are carefully designed for comfort and efficiency, making them perfect for both short-term as well as long-term stays. Also, these rooms are equipped with a private balcony and a modern kitchenette, suitable for extended stays by families. We offer interconnected rooms for groups or families who’d like to stay close, providing the perfect blend of space and privacy.



          </p>

      </motion.div>

      

      <motion.div className="col-12" initial={{ opacity: 0, y: -100 }}

    whileInView={{ opacity: 1, y: 0 }}

    transition={{ duration: 0.6, delay: 0.6 }}>

          <h4 className="inner-hd">Café Mahec</h4>

          <p className="content-boxx">Taste the best of global flavours at Café Mahec, our in-house multi-cuisine dining that stands out for its warm ambience, fresh use of ingredients, and innovative recipes. Whether you are in the mood for the cafe's signature dish or unique flavours while being in the comfort of the cafe, our Café Mahec provides the most delicious creations for the different palates.

          </p>

      </motion.div>

      

    </div>

    

</motion.section>

</>)

}

export default GurugramHotelExtened;