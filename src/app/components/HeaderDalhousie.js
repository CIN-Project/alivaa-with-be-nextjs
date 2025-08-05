"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "app/booking-engine-widget/FormContext";

const HeaderDalhousie = () => {
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
              <button className="btn book-now-headerr mob1_none" onClick={toggleBookingFormm} id="book-now">
                Book Now
              </button>
            </div>
            <div className={`collapse navbar-collapse ${isOpen1 ? "show" : ""}`} id="navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/hotels-in-dalhousie">Overview</Link></li>
                <li><Link href="/rooms-in-dalhousie">Room & Suites</Link></li>
                <li><Link href="/restaurants-in-dalhousie">Dining</Link></li>
                <li><Link href="/meeting-events-in-dalhousie">Meetings & Events</Link></li>
                <li><Link href="/hotel-gallery-in-dalhousie">Gallery</Link></li>
                <li><Link href="/hotel-contact-in-dalhousie">Contact Us</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderDalhousie;
