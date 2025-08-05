'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import { useForm } from 'app/booking-engine-widget/FormContext';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const [hotelBrands, setHotelBrands] = useState([]);
  const { isFormOpen, setIsFormOpen } = useForm();
  const [isRoomMenuOpen, setIsRoomMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    async function fetchHotelBrands() {
      try {
        const res = await axios.post(
          'https://cmsapi.cinuniverse.com/hotelcitylist',
          { web_source: 'alivaahotels.com' }
        );
        if (res.data?.ErrorCode === 1) {
          setHotelBrands(res.data.data || []);
        }
      } catch (error) {
        console.error('Error fetching hotel city list:', error);
      }
    }

    fetchHotelBrands();
  }, []);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleBookingForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFormOpen(!isFormOpen);
    if (isRoomMenuOpen) setIsRoomMenuOpen(false);
  };

  return (
    <header className="clearHeader hght100 proprty-hdr homenav">
      <div id="navbar">
        <div className="container-fluid">
          <nav className="navbar navbar-default navbar-static-top" role="navigation">
            <div className="navbar-header">
              {/* Mobile Toggle Button */}
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleNavbar}
                data-bs-toggle="collapse"
                data-bs-target="#navbar-collapse-2"
                aria-controls="navbar-collapse-2"
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Logo */}
              <Link className="navbar-brand" href="/">
                <Image src="/images/alivaa-logo1.webp" height={71} width={92} alt="Alivaa Logo" />
              </Link>

              {/* Book Now Button */}
              <button
                className="btn book-now-headerr"
                onClick={toggleBookingForm}
                style={{ borderColor: '#000' }}
                id="book-now"
              >
                Book Now
              </button>
            </div>

            {/* Navbar Links */}
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbar-collapse-2">
              <ul className="nav navbar-nav navbar-right">
                <li><Link href="/">Home</Link></li>

                {/* Dynamic Hotel Dropdown */}
                <li className="dropdown">
                  Our Hotels ▼
                  <ul className="dropdown-menu menu1">
                   {hotelBrands.length > 0 && hotelBrands.map((brand) => (
                        <li className="has-submenu" key={brand.brand_slug}>
                          <span className="menu-label">{brand.brand_name}</span>
                          <ul className="inner_menu">
                            {brand.city_list.map((city) => (
                              <li key={city.hotel_slug}>
                                <Link href={`/${brand.brand_slug}/${city.hotel_slug}`}>
                                  {city.city_name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                   ))}
                  </ul>
                </li>

                {/* Hardcoded Upcoming Properties */}
                <li className="dropdown">
                  Upcoming Property ▼
                  <ul className="dropdown-menu">
                    <li><Link href="/corbetthotel">Alivaa Jungle Resort, Corbett</Link></li>
                    <li><Link href="/mumbaihotel">Alivaa Hotel, Mumbai</Link></li>
                    <li><Link href="/udaipurhotel">Alivaa Hotel, Udaipur</Link></li>
                  </ul>
                </li>

                <li><Link href="/special-offers">Special Offers</Link></li>
                <li><Link href="/blog">Blogs</Link></li>
                <li><Link href="/contactus">Contact Us</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
