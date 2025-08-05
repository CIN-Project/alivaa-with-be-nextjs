"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowCircleDown} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "app/booking-engine-widget/FormContext";

const HeaderAlivaa = () => {

     const pathname = usePathname();
      const [isOpen, setIsOpen] = useState(pathname === '/');
      // const { isFormOpen, setIsFormOpen } = useForm();
  
      useEffect(() => {
          setIsOpen(pathname === '/');
      }, [pathname]);
  
      const toggleNavbar1 = () => {
          setIsOpen(!isOpen);
      };
  
        
  const [isOpen1, setIsOpen1] = useState(true);
   const [isRoomMenuOpen, setIsRoomMenuOpen] = useState(false);
    const { isFormOpen, setIsFormOpen } = useForm();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsOpen1(false);
      } else {
        setIsOpen1(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavbar = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleBookingFormm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFormOpen(!isFormOpen);
    if (isRoomMenuOpen) {
      setIsRoomMenuOpen(false);
    }
  };


  return (
    <>

      
            {/* Mobile Toggle Buttons */}
            {isMobile && (
              <div className="mobile-menu-toggles mt-2">
                <button onClick={togglePropertyMenu} className="navbar-toggler w-100 text-start mb-2">
                  Property Menu <FontAwesomeIcon icon={faArrowCircleDown} className="ms-2" />
                </button>
                <button onClick={toggleMainMenu} className="navbar-toggler w-100 text-start">
                  Main Menu <FontAwesomeIcon icon={faArrowCircleDown} className="ms-2" />
                </button>
              </div>
            )}


    {/* Property Menu */}
    <header className="clearHeader mob_design neww-aliva-headerr">
      <div id="navbar">
        <div className="container-fluid">
          <nav className="navbar navbar-default navbar-static-top" role="navigation">
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleNavbar}
                data-bs-toggle="collapse"
                data-bs-target="#navbar-collapse-1"
                aria-controls="navbar-collapse-1"
                aria-expanded={isOpen1}
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon d-desk-none"></span>
              <p className="menu_txt">  Property Menu    <FontAwesomeIcon
                                  icon={faArrowCircleDown}
                                  className="ms-2 text-lg"
                                /></p>
              </button>
              <Link className="navbar-brand" href="/">
                <img src="/images/alivaa-logo1.webp" height="71" width="92" alt="Alivaa Logo" />
              </Link>
              <button className="btn book-now-headerr mob1_none" onClick={toggleBookingFormm}  id="book-now">
                Book Now
              </button>
            </div>
            <div className={`collapse navbar-collapse ${isOpen1 ? "show" : ""}`} id="navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/gurgaon-hotels">Overview</Link></li>
                <li><Link href="/gurgaon-rooms">Room & Suites</Link></li>
                <li><Link href="/gurgaon-restaurants">Dining</Link></li>
                <li><Link href="/gurgaon-facilities">Facilities</Link></li>
                <li><Link href="/gurgaon-hotel-offers">Offers</Link></li>
                <li><Link href="/gurgaon-tourist-attractions">Attractions</Link></li>
                <li><Link href="/blog">Blogs</Link></li>
                <li><Link href="/gurgaon-gallery">Gallery</Link></li>
                <li><Link href="/gurgaon-hotel-contact">Contact Us</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>

{/* main menu */}
     <header className={`clearHeader hght0 ${pathname !== '/' ? 'other-page' : 'proprty-hdr'}`}>
            <div id="navbar" className='main-nav-for-inner'>
                <div className="container-fluid">
                    <nav className="navbar navbar-default navbar-static-top" role="navigation">
                        <div className="navbar-header mt-2">
                            {/* Mobile Toggle Button */}
                            <button className="navbar-toggler position-fixed mt-5" type="button" onClick={toggleNavbar1} data-bs-toggle="collapse" data-bs-target="#navbar-collapse-2" aria-controls="navbar-collapse-2" aria-expanded={isOpen} aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                      <p className="menu_txt2">  Main Menu    <FontAwesomeIcon
                                                                  icon={faArrowCircleDown}
                                                                  className="ms-2 text-lg"
                                                                /></p>
                            </button>
                            
                            {/* Logo */}
                            {/* <Link className="navbar-brand" href="/">
                                <img src="/images/alivaa-logo1.webp" height="71" width="92" alt="Alivaa Logo" />
                            </Link> */}

                            {/* Book Now Button */}
                            {/* <button className="btn book-now-headerr" style={{ borderColor: '#000' }} id="book-now">
                                Book Now
                            </button> */}
                        </div>

                        {/* Navbar Links */}
                        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbar-collapse-2">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link href="/">Home</Link></li>
                                <li className="dropdown">
                                    Our Hotels ▼ 
                                    <ul className="dropdown-menu menu1">
                                  
                                    <li className="has-submenu">
                                        <span className="menu-label">Alivaa</span>
                                        <ul className="inner_menu">  
                                            <li><Link href="/gurgaon-hotels">Gurugram </Link></li>
                                            <li><Link href="/mcleodganj">McLeodganj </Link></li>
                                        </ul>
                                        </li>
                                        <li className="has-submenu">
                                        <span className="menu-label">Hoften</span>
                                        <ul className="inner_menu">  
                                            <li><Link href="/gurugram-hotel">Gurugram </Link></li>
                                        </ul>
                                        </li>

                                        {/* <li><Link href="/gurugram-hotel">Hoften Hotel</Link></li> */}
                                    </ul>
                                </li>
                                <li><Link href="/special-offers">Special Offers</Link></li>
                                <li className="dropdown">
                                    Upcoming Property ▼ 
                                    <ul className="dropdown-menu">
                                        <li><Link href="/corbetthotel">Alivaa Jungle Resort</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="/contactus">Contact Us</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    </>
  );
};

export default HeaderAlivaa;
