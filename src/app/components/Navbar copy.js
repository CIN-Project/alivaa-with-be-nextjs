'use client';

//import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

import Link from 'next/link';



export default function Navbar() {

    const [isOpen, setIsOpen] = useState(true);
    const toggleNavbar = () => {

      setIsOpen(!isOpen);

    };

  

    return (

      <header className="clearHeader">

        <div id="navbar">

          <div className="container-fluid">

            <nav className="navbar navbar-default navbar-static-top" role="navigation">

              <div className="navbar-header">

                {/* Mobile Toggle Button */}

                <button className="navbar-toggler" type="button" onClick={toggleNavbar} data-bs-toggle="collapse" data-bs-target="#navbar-collapse-1" aria-controls="navbar-collapse-1" aria-expanded={isOpen} aria-label="Toggle navigation">

                  <span className="navbar-toggler-icon d-none"></span>

                </button>

                {/* <button 

                  type="button" 

                  className="navbar-toggle" 

                  onClick={() => setIsOpen(!isOpen)}

                >

                  <span className="sr-only">Toggle navigation</span>

                  <span className="icon-bar"></span>

                  <span className="icon-bar"></span>

                  <span className="icon-bar"></span>

                </button> */}

  

                {/* Logo */}

                <Link className="navbar-brand" href="/">

                  <img src="/images/alivaa-logo1.webp" height="71" width="92" alt="Alivaa Logo" />

                </Link>

  

                {/* Book Now Button */}

                <button className="btn book-now-headerr" style={{ borderColor: '#000' }} id="book-now">

                  Book Now

                </button>

              </div>

  

              {/* Navbar Links */}

              <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbar-collapse-1">

                <ul className="nav navbar-nav navbar-right">

                  <li><Link href="/">Home</Link></li>

                  <li className="dropdown">
                  Our Hotels ▼ 

                    <ul className="dropdown-menu">

                      <li><Link href="/gurgaon-hotel">Alivaa Hotel</Link></li>

                      <li><Link href="/gurugram-hotel">Hoften Hotel</Link></li>

                    </ul>

                  </li>

                  <li><Link href="/special-offers">Special Offers</Link></li>

                  <li className="dropdown">
                  Upcoming Property ▼ 
                    {/* <a href="#" className="dropdown-toggle" role="button">

                      Upcoming Property ▼ <span className="caret"></span>

                    </a> */}

                    <ul className="dropdown-menu">

                      <li><Link href="/corbett-hotel">Alivaa Jungle Resort</Link></li>

                    </ul>

                  </li>

                  <li><Link href="/contactus">Contact Us</Link></li>

                  {/* <li><button className="book-now">Book Now</button></li> */}

                </ul>

              </div>

            </nav>

          </div>

        </div>

      </header>

    );

  }



  