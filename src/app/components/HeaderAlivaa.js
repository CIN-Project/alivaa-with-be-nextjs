"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "app/booking-engine-widget/FormContext";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Menu label and path map based on hotel_menu response
const MENU_ITEMS = [
  { key: "room_count", label: "Room & Suites", path: "/rooms" },
  { key: "dine_count", label: "Dining", path: "/restaurants" },
  { key: "facilities_count", label: "Facilities", path: "/facilities" },
  { key: "offers_count", label: "Offers", path: "/offers" },
  { key: "gallery_count", label: "Gallery", path: "/gallery" },
  { key: "event_count", label: "Meetings & Events", path: "/events" },
  { key: "attraction_count", label: "Attractions", path: "/attractions" },
  { key: "experience_count", label: "Experiences", path: "/experiences" },
  { key: "contact_count", label: "Contact Us", path: "/contact-us" },
];

const HeaderAlivaa = () => {
  const { brand_slug, hotel_slug } = useParams();
  const [isOpen1, setIsOpen1] = useState(true);
  const { isFormOpen, setIsFormOpen } = useForm();
  const pathname = usePathname();

  const [menuCounts, setMenuCounts] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen1(window.innerWidth > 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await axios.post(`${API_BASE_URL}/hotel-menu`, {
          brand_slug,
          city_slug: "",
          hotel_slug,
          web_source: "alivaahotels.com",
        });
        setMenuCounts(res.data.hotel_menu);
      } catch (error) {
        console.error("Error fetching hotel menu:", error);
      }
    };

    if (brand_slug && hotel_slug) fetchMenu();
  }, [brand_slug, hotel_slug]);

  const toggleNavbar = () => setIsOpen1(!isOpen1);

  const toggleBookingForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFormOpen(!isFormOpen);
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
                aria-expanded={isOpen1}
              >
                <span className="navbar-toggler-icon d-desk-none"></span>
                <p className="menu_txt">
                  Property Menu{" "}
                  <FontAwesomeIcon icon={faArrowCircleDown} className="ms-2 text-lg" />
                </p>
              </button>

              <Link className="navbar-brand" href="/">
                <img src="/images/alivaa-logo1.webp" height="71" width="92" alt="Alivaa Logo" />
              </Link>

              <button
                className="btn book-now-headerr mob1_none"
                onClick={toggleBookingForm}
                id="book-now"
              >
                Book Now
              </button>
            </div>

            <div
              className={`collapse navbar-collapse ${isOpen1 ? "show" : ""}`}
              id="navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right">
                <li><Link href="/">Home</Link></li>
                <li><Link href={`/${brand_slug}/${hotel_slug}`}>Overview</Link></li>

                {/* Dynamic Menu Links */}
                {menuCounts &&
                  MENU_ITEMS.map(({ key, label, path }) => {
                    const count = menuCounts[key];
                    if (count && count > 0) {
                      return (
                        <li key={key}>
                          <Link href={`/${brand_slug}/${hotel_slug}${path}`}>{label}</Link>
                        </li>
                      );
                    }
                    return null;
                  })}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderAlivaa;
