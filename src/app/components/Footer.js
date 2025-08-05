"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  

  return (
    <footer>
          <article className="container-footer container w-100">
            <div className="row">
              
              {/* Explore Section */}
              <motion.div className="col-lg-2 col-sm-6" 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}>
                <h4>Explore</h4>
                <ul className="f-links">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/special-offers">Special Offers</Link></li>
                  <li><Link href="/blog">Blogs</Link></li>
                  <li><Link href="/contactus">Contact Us</Link></li>
                  <li><Link href="/privacy-policy">Policies</Link></li>
                </ul>
              </motion.div>

              {/* Our Brands Section */}
              <motion.div className="col-lg-3 col-sm-6" 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}>
                <h4>Our Brands</h4>
                <ul className="f-links">
                  <li><Link href="/">Alivaa Hotels & Resorts</Link></li>
                  <li><Link href="/">Hoften Hotels</Link></li>
                   <li><Link href="/">Xenious</Link></li>
                </ul>
              </motion.div>

              {/* Social Media Section */}
              <motion.div className="col-lg-3 col-sm-6" 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}>
                <div className="ftr-social-section mt-0">
                  <h4>Follow us</h4>
                  <a className="btn btn-social" href="https://www.facebook.com/profile.php?id=61560140841449&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/fb-icon.svg" height={23} width={23} alt="Facebook" className="social-icon" />
                  </a>
                  <a className="btn btn-social" href="https://www.instagram.com/alivaahotels/" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/instagram-icon.svg" height={23} width={23} alt="Instagram" className="social-icon" />
                  </a>
                  <a className="btn btn-social" href="https://www.linkedin.com/company/alivaa-hotels-resorts/" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/linkedin-icon.svg" height={23} width={23} alt="LinkedIn" className="social-icon" />
                  </a>
                  <br />
                  <Link href="/">
                    <Image src="/images/alivaa-logo1-ftr.webp" alt="Alivaa Logo" width={120} height={92} />
                  </Link>
                </div>
              </motion.div>

              {/* Contact Section */}
              <motion.div className="col-lg-4 col-sm-6 mobile-center-items" 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}>
                <h4>Contact</h4>
                <p className="footer-link ftr-location">
                  <img src="/images/map-icon.svg" alt="Map Icon" className="map-marker social-icon" width={38} height={38} />
                  <a href="https://www.google.com/maps/place/Alivaa+Hotel+Gurugram+Sohna+Road+City+Center/" target="_blank" rel="noopener noreferrer">
                    Alivaa Hotel, Gurugram, Sohna Road, City Center
                  </a>
                </p>
                <p className="footer-link">
                  <img src="/images/phone-icon.svg" alt="Phone Icon" className="social-icon" width={18} height={18} />
                  <a href="tel:+911244170000">+91 124 4170000</a>
                </p>
                <p className="footer-link">
                  <img src="/images/mail-icon.svg" alt="Mail Icon" className="social-icon" width={18} height={18} />
                  <a href="mailto:stayalive@alivaahotels.com">stayalive@alivaahotels.com</a>
                </p>
              </motion.div>

            </div>
          </article>

          {/* Dynamic Copyright Year */}
          <span className="bottom-footer">
            Copyright © {new Date().getFullYear()} The Alivaa Hotels & Resorts. All rights reserved by Liberate Hotels and Resorts Private Limited. Powered by <a href="https://www.cinuniverse.com/" target="_blank" className="text-white">CIN Universe</a>.
          </span>
        </footer>
  );
};

export default Footer;
