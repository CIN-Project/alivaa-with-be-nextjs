"use client";

// import Link from 'next/link';

//import BookingForm from '../components/BookingForm';

import "../../app/styles/inner.css";

import { motion } from "framer-motion";

import HotelTab from '../components/HotelTab';

import Navbar from "../components/Navbar";



export default function PoliciesPage() {

 

    return (

      <>

     <section className='home-hdr-hght'>   
       <Navbar/>
       </section>

      <section className="banner-section">
      <video 

          playsInline 

          autoPlay 

          loop 

          muted 

          width="100%" 

          className="banner-img pt-0 myvideo web-video"> 

          <source src="/images/web-video-n.mp4" type="video/mp4" />

        </video>


      </section>

      {/* <BookingForm /> */}

<motion.section className="main-upper mt-5" id="privacy_policy">

            <article className="welcm-block aboutus-main-block">

               <div className="container">

                  <div className="col-12">

                     <div className="row">

                        <div className="col-lg-12 wow fadeInLeft animated mb-5" data-wow-duration="4s" style={{visibility: "visible",webkitanimationduration: "4s", mozanimationduration: "4s", animationduration: "4s"}}>

                           <div className="section-subtitle" style={{textAlign: "center"}}>

                            <h4 className="privacy-policy-heading inner-hd" style={{color:"#000"}}>Terms &amp; Conditions</h4>

                            </div>

                           <h4>POLICIES</h4>

                           <p className="content-boxx">

                          Arrival and Departure Policy Check in - 1400 Hours Early arrival is subject to availability. For guaranteed early check-in, reservation needs to be made starting from the previous night. 

Check out - 1200 Hours Late check-outs are available on request and subject to availability.



                           </p>



                           <h4>Identity Proof</h4>



                           <p className="content-boxx">In keeping with Government regulations, we request all guests (on single/double/triple occupancy) to carry a photo identity to present on check-in. Foreign nationals are required to present their valid passport and visa. Indian nationals can present any government issued photo identity address proof card e.g. driving license, passport, Aadhar card or voter’s ID card. PAN Card will not be accepted as the above. Also do keep handy proof of corporate affiliations, if you have made a corporate booking.</p>



                           <h4>Guarantee Policy</h4>

                           <p className="content-boxx">All bookings must be guaranteed at the time of reservation by a Credit Card. All major credit cards are accepted.</p>



                           <h4>Cancellation Policy</h4>



                           <p className="content-boxx">Reservation must be cancelled 72 hours prior to the planned date of arrival. Reservations cancelled within 72 hours of the arrival date will incur a cancellation fee equivalent to one night's accommodation charge.</p>



                           <p className="content-boxx">All reservations made using promotional rates require full payment upfront and cannot be changed or refunded.</p>



                           <h4>Guarantee and cancellation policy (for groups of 5 rooms or more)</h4>



                           <p className="content-boxx">We will be happy to confirm group reservations against an advance or on receipt of a valid credit card number and card expiry date.</p>



                           <h4>For room reservations</h4>



                           <p className="content-boxx">We understand that plans change sometimes. If you need to cancel/reduce/amend a guaranteed reservation, please do so 30 days prior to arrival. In case there is any no-show or cancellation/amendment of the conference/group (in part or full), within 30 days or less from the date of check in, a retention charge will become due as under: </p>



                           <p className="content-boxx"># of rooms being cancelled/no-shows X 1 night X applicable daily rate per room, including taxes. In addition, should any participants check out early, retention will be charged for those nights booked, now being released due to the early check out. </p>



                           <p className="content-boxx">Bookings made on non-cancellable/non-amendable packages/rates cannot be cancelled/amended. On doing so, the full amount of advance paid will be treated as the cancellation fee.</p>



                           <h4>

                             Child Policy

                           </h4>



                           <p className="content-boxx">Up to two children below the age of 6 years can stay on a complimentary basis, inclusive of breakfast, in the same room/suite</p>

                           <p className="content-boxx">For one child below 6 years of age, and/or one child between 6 and 12 years, we will provide an extra bed on chargeable basis in the same room/suite. Breakfast charges for the elder child will be at 50% of the buffet price

                          </p>

                           <p className="content-boxx">For two children above 6 years of age, an additional room/suite must be booked

                          </p>



                           <h4>

                             Your favorite things

                           </h4>



                           <ul>

                             <li className="content-boxx">If you have made a request for a specific bed type or smoking preference, we’ll try our best to accommodate it. </li>

                             <li className="content-boxx">Need an extra bed in your room? No problem, we can set it up at Rs. 1,500 plus applicable tax and service charge </li>

                             <li className="content-boxx">Kids stay free (room only)! Two children below the age of 12 years stay for free in the same room</li>

                             

                           </ul>



                           <h4>No smoking</h4>



                           <p className="content-boxx">The Government of India has introduced a ‘no smoking’ rule for hotels, restaurants and all public places. This means smoking is prohibited in all parts of the hotel except in designated guest rooms. Should you want a smoking room, please inform us when you make your reservation.</p>





                           <h4>Cancellation Policies:</h4>



                           <p className="content-boxx">➢ General: Cancellation made after 12 noon, 72 hrs. prior to the check-in date: One night's room rate will be billed to your card. </p>



                           <p className="content-boxx">➢ BNX: Non-cancellable, non-refundable and non-amendable for entire length of stay. Entire deposit on booking, non-refundable.</p>



                           <h4>Guarantee Policy: </h4>



                           <p className="content-boxx">Valid credit card details required to guarantee the reservations. We do accept Debit Cards &amp; Credit card on our website.</p>



                           <h4>Booking and Payment</h4>

                           <ul>

                             <li className="content-boxx">All bookings are subject to availability and confirmation.</li>

                             <li className="content-boxx">Payment for bookings must be made in full at the time of reservation unless otherwise agreed upon.</li>

                             <li className="content-boxx">We accept payments through various methods as outlined on our website.</li>

                           </ul>



                            <h4>Refund Policy</h4>



                            <p className="content-boxx">Upon receiving the request for cancellation from the guest (as per cancellation/no show policy), the hotel will immediately contact the bank to handle the crediting process. The refund will be made through the credit card used to purchase. In a normal scenario, the refunded amount shall reflect in the next billing cycle of the credit card. However, it could take around 15-20 business days for the actual crediting to take place depending on the bank’s practice.</p>



                            <h4>Privacy Policy</h4>



                            <p className="content-boxx">Alivaa Hotel is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.</p>

                         

                          <h4>Guest Conduct</h4>

                          <ul>

                            <li className="content-boxx">Guests are expected to behave in a respectful and responsible manner.</li>

                            <li className="content-boxx">Any damage caused to property or premises will be charged to the guest's account.</li>

                          </ul>



                        <h4>Information Collection</h4>

                        <ul>

                          <li className="content-boxx">We collect personal information such as name, email address, phone number, and payment details when you make a booking.</li>

                          <li className="content-boxx">We may also collect information through cookies and other tracking technologies.</li>

                        </ul>



                        <h4>

                          Use of Information

                        </h4>

                        <ul>

                          <li className="content-boxx">Your information is used to process bookings, provide customer service, and improve our services.</li>

                          <li className="content-boxx">We may send you promotional emails if you have opted in to receive them.</li>

                        </ul>



                        <h4>Information Sharing</h4>



                        <p className="content-boxx">We do not share your personal information with third parties except as necessary to process your booking or comply with legal requirements.</p>





                        <h4>Data Security</h4>



                        <p className="content-boxx">We implement appropriate security measures to protect your information from unauthorized access, alteration, or disclosure.</p>



                        <h5>Changes to This Policy</h5>

                        <p className="content-boxx"><strong>We may update this privacy policy from time to time. Any changes will be posted on our website.</strong> </p>





                        <h4>

                          Contact Information

                        </h4>



                        <p className="content-boxx">For cancellation or refund requests, please contact us at </p>

                        <p className="content-boxx"><strong>[stayalive@alivaahotels.com]</strong> or <strong>[+91 124 4170000]</strong>.</p>

                        <p className="content-boxx">Merchant Legal Name: LIBERATE HOTELS AND RESORTS PRIVATE LIMITED</p>

                        <p className="content-boxx">For any further assistance or inquiries, please feel free to contact us directly.</p>

                        </div>

                       

                     </div>

                  </div>

               </div>

            </article>

         </motion.section>

      </>

    );

  }