"use client";

//import BookingForm from '../components/BookingForm';

import "../../app/styles/inner.css";


import Link from "next/link";


export default function CorbetPage() {

    return (

      <>

<section>
<header className="clearHeader bg-green proprty-hdr">
            <div id="navbar">
                <div className="container-fluid">
                    <nav className="navbar navbar-default navbar-static-top" role="navigation">
                        <div className="navbar-header">
                            {/* Mobile Toggle Button */}
                       
                            
                            {/* Logo */}
                            <Link className="navbar-brand" href="/">
                                <img src="/images/alivaa-logo1.webp" className="corbet-logo" height="71" width="92" alt="Alivaa Logo" />
                            </Link>

                            {/* Book Now Button */}
                            <Link href="/" className="text-white">Home</Link>
                        </div>

                       
                    </nav>
                </div>
            </div>
        </header>
      </section>


      <section className="banner-section" style={{marginBottom:"6rem !important"}}>
 
    <img alt="Hotels in Gurgaon" className="banner-img hght100vh pt-0 mb-5" src="/images/corbettbanner.jpg" />
    <div className="mt-5 position-absolute">

<h3 className="main-hero-title coming-hero-title">Coming Soon in CORBETT...</h3>

 </div>

    <div className=" social-icon-banner" >
            <a className="btn btn-social" href="https://www.facebook.com/profile.php?id=61560140841449&amp;mibextid=ZbWKwL" target="_blank">
              <img src="/images/fb-icon.svg" height="25" width="25" alt="social-icon" className="social-icon" />
            </a>
          
            <a className="btn btn-social" href="https://www.instagram.com/alivaahotels/" target="_blank">
              <img src="/images/instagram-icon.svg" height="25" width="25" alt="social-icon" className="social-icon" />
            </a>
           
            <a className="btn btn-social" href="https://www.linkedin.com/company/alivaa-hotels-resorts/" target="_blank">
            <img src="/images/linkedin-icon.svg" height="25" width="25" alt="social-icon" className="social-icon" />
            </a>
           
          </div>
          <span className="updown-arrow">
          <img src="images/down-arrow.png"/>
        </span>
   
      
</section>



      

      </>

    );

}