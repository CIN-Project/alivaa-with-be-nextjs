'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

export default function NavbarAliva() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(pathname === '/');
  const [hotelBrands, setHotelBrands] = useState([]);

  useEffect(() => {
    setIsOpen(pathname === '/');
  }, [pathname]);

  const toggleNavbar1 = () => {
    setIsOpen(!isOpen);
  };

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


  return (
    <header className={`clearHeader hght0 ${pathname !== '/' ? 'other-page' : 'proprty-hdr'}`}>
      <div id="navbar" className='main-nav-for-inner'>
        <div className="container-fluid">
          <nav className="navbar navbar-default navbar-static-top" role="navigation">
            <div className="navbar-header mt-2">
              {/* Mobile Toggle Button */}
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
                  Main Menu
                  <FontAwesomeIcon icon={faArrowCircleDown} className="ms-2 text-lg" />
                </p>
              </button>
            </div>

            {/* Navbar Links */}
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbar-collapse-2">
              <ul className="nav navbar-nav navbar-right">
                <li><Link href="/">Home</Link></li>
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
                <li><Link href="/special-offers">Special Offers</Link></li>
                <li className="dropdown">
                  Upcoming Property ▼
                  <ul className="dropdown-menu">
                    <li><Link href="/corbetthotel">Alivaa Jungle Resort</Link></li>
                    <li><Link href="/mumbaihotel">Alivaa Hotel, Mumbai</Link></li>
                    <li><Link href="/udaipurhotel">Alivaa Hotel, Udaipur</Link></li>
                  </ul>
                </li>
                <li><Link href="/contactus">Contact Us</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
