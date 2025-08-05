"use client";
import "../../app/styles/inner.css";
import { motion } from "framer-motion";
const DalhousieHotelExtended = () => {
  return (
    <motion.section initial={{ opacity: 0, y: -500 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }} >
      <motion.div className="col-12" initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}>
        <h4 className="inner-hd">Accommodation</h4>
        <p className="content-boxx">The hotel redefines modern comfort with the charm of Dalhousie's natural beauty. Located amidst the hills of mountains, Blue Magnets hotel offers perfect harmony of comfort, convenience and nature. We understand the need of our guests seeking a good stay in the hills—they seek an experience that reflects their lifestyle and offers a peaceful retreat.</p>
        <p className="content-boxx">
          Our team is dedicated and committed to personalised services to ensure that our guests' every moment is filled with warmth and care. Our hotel rooms in five different formats provide spacious and comfortable accommodation in Dalhousie for everyone. Whether you’re travelling solo, with your family, or with a group of friends/colleagues, there’s a room or suite for you at The Hoften Blue Magnets, Dalhousie. 
        </p>
       
      </motion.div>
      <motion.div className="col-12" initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}>
        <h4 className="inner-hd">Our Restaurant</h4>
        <p className="content-boxx" style={{ textAlign: "justify" }}>Treat yourself to a memorable dining experience at our restaurant, where every dish is fresh and full of flavours. Our multicuisine menu brings you a delightful treat of continental, oriental and global specialities, thoughtfully crafted to cater to your taste buds. Enjoy a meal in an inviting ambience and breathtaking views of Dalhousie's natural beauty, which creates the perfect setting after a day of exploration. Whether you're sipping a hot cup of coffee or enjoying a hearty dinner, our restaurant stands out as one of the best restaurants in Dalhousie. Enjoy a perfect meal amidst the charm of the mountain. 
        </p>
      </motion.div>
      <motion.div className="col-12" initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}>
        <h4 className="inner-hd">Conference Hall</h4>
        <p className="content-boxx" style={{ textAlign: "justify", marginTop: "10px" }}>We offer a thoughtfully designed conference hall equipped with modern audio-visual technology, high-speed Wi-Fi and flexible seating arrangements. The hall is ideal for planning a corporate meeting, training session or a private gathering. Plan your next business meeting or special occasion with us for a truly memorable experience.
        </p>
      </motion.div>
    </motion.section>)
}
export default DalhousieHotelExtended;