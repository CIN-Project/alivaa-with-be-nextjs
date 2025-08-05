"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "app/booking-engine-widget/FormContext";
import BookNowForm from "app/booking-engine-widget/BookNowForm";

export default function NavbarAliva() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(pathname === "/");
  const { isFormOpen, setIsFormOpen } = useForm();

  useEffect(() => {
    setIsOpen(pathname === "/");
  }, [pathname]);

  const toggleNavbar1 = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        className={`clearHeader hght0 ${
          pathname !== "/" ? "other-page" : "proprty-hdr"
        }`}
      >
        <div id="navbar" className="main-nav-for-inner">
          <div className="container-fluid">
            <nav
              className="navbar navbar-default navbar-static-top"
              role="navigation"
            >
              <div className="navbar-header mt-2">
                <button
                  className="navbar-toggler position-fixed mt-5"
                  type="button"
                  onClick={toggleNavbar1}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar-collapse-2"
                  aria-controls="navbar-collapse-2"
                  aria-expanded={isOpen}
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                  <p className="menu_txt2">
                    {" "}
                    Main Menu{" "}
                    <FontAwesomeIcon
                      icon={faArrowCircleDown}
                      className="ms-2 text-lg"
                    />
                  </p>
                </button>
              </div>
              <div
                className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
                id="navbar-collapse-2"
              >
                <div className="inner-mobile-header">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <div className="accordion-header" id="inner-main-menu">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          Main Menu
                        </button>
                      </div>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="inner-main-menu"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul className="nav navbar-nav navbar-right">
                            <li>
                              <Link href="/">Home</Link>
                            </li>
                            <li className="dropdown">
                              Our Hotels ▼
                              <ul className="dropdown-menu menu1">
                                <li className="has-submenu">
                                  <span className="menu-label">Alivaa</span>
                                  <ul className="inner_menu">
                                    <li>
                                      <Link href="/gurgaon-hotels">
                                        Gurugram{" "}
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/mcleodganj">
                                        McLeodganj{" "}
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/lansdowne">Lansdowne </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li className="has-submenu">
                                  <span className="menu-label">Hoften</span>
                                  <ul className="inner_menu">
                                    <li>
                                      <Link href="/gurugram-hotel">
                                        Gurugram{" "}
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link href="/special-offers">Special Offers</Link>
                            </li>
                            <li className="dropdown">
                              Upcoming Property ▼
                              <ul className="dropdown-menu">
                                <li>
                                  <Link href="/corbetthotel">
                                    Alivaa Jungle Resort
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/mumbaihotel">
                                    Alivaa Hotel, Mumbai
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/udaipurhotel">
                                    Alivaa Hotel, Udaipur
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link href="/contactus">Contact Us</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <div className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Property Menu
                        </button>
                      </div>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul className="nav navbar-nav navbar-right">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/gurgaon-hotels">Overview</Link></li>
                                <li><Link href="/gurgaon-rooms">Room & Suites</Link></li>
                                <li><Link href="/gurgaon-restaurants">Dining</Link></li>
                                <li><Link href="/gurgaon-facilities">Facilities</Link></li>
                                <li><Link href="/gurgaon-hotel-offers">Offers</Link></li>
                                <li><Link href="/gurgaon-tourist-attractions">Attractions</Link></li>
                                <li><Link href="/gurgaon-gallery">Gallery</Link></li>
                                <li><Link href="/gurgaon-hotel-contact">Contact Us</Link></li>
                            </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="nav navbar-nav navbar-right mobile-hidden-main-nav this-is-for-desktop">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="dropdown">
                    Our Hotels ▼
                    <ul className="dropdown-menu menu1">
                      <li className="has-submenu">
                        <span className="menu-label">Alivaa</span>
                        <ul className="inner_menu">
                          <li>
                            <Link href="/gurgaon-hotels">Gurugram </Link>
                          </li>
                          <li>
                            <Link href="/mcleodganj">McLeodganj </Link>
                          </li>
                          <li>
                            <Link href="/lansdowne">Lansdowne </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-submenu">
                        <span className="menu-label">Hoften</span>
                        <ul className="inner_menu">
                          <li>
                            <Link href="/gurugram-hotel">Gurugram </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/special-offers">Special Offers</Link>
                  </li>
                  <li className="dropdown">
                    Upcoming Property ▼
                    <ul className="dropdown-menu">
                      <li>
                        <Link href="/corbetthotel">Alivaa Jungle Resort</Link>
                      </li>
                      <li>
                        <Link href="/mumbaihotel">Alivaa Hotel, Mumbai</Link>
                      </li>
                      <li>
                        <Link href="/udaipurhotel">Alivaa Hotel, Udaipur</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/contactus">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
