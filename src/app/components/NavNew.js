import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import dynamic from "next/dynamic";

const Select = dynamic(() => import('react-select'), { ssr: false });

export default function HeaderPage2() {
  const { brand_slug, city_alias, hotel_slug, synxis_id } = useParams();

  const pathname = usePathname();

  
const [isOpen, setOpen] = useState(false);
const toggleMenu = () => setOpen(!isOpen);
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [isOpen2, setOpen2] = useState({
  main: false,     // Closed by default
  property: false, // Closed by default
});

const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);


  // script for switch disable end

   // script start for second menu
   const [isScrolled, setIsScrolled] = useState(false);
   const [showBackToTop, setShowBackToTop] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       const scrollPosition = window.scrollY;
 
       if (scrollPosition > 50) {
         setIsScrolled(true);
         setShowBackToTop(true);
       } else {
         setIsScrolled(false);
         setShowBackToTop(false);
       }
     };
 

     
     window.addEventListener('scroll', handleScroll);
 
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);
  // script end for second menu



  const [isOpen1, setIsOpen1] = useState(false);

  const navbarDropdown = () => {
    setIsOpen1(true);
  };

  const closePop = () => {
    setIsOpen1(false);
  };


  return (
    <>

    {/* Hamburger icon for mobile only */}
    <button
  className={`lg:hidden p-2 text-xl d-none-desk ${isMobileMenuOpen ? 'text-close' : 'text-black'}`}
  onClick={() => setMobileMenuOpen(prev => !prev)}
>
  {isMobileMenuOpen ? 'X' : '☰'}
</button>

 {/* Mobile Menu - only visible below lg */}
 {isMobileMenuOpen && (
  <div className="accordion-wrapper mob_menu block lg:hidden">
    {/* Accordion Item 1 - Main Menu */}
    <div className="accordion-item">
      <button
        className="accordion-toggle w-full text-left"
        onClick={() =>
          setOpen2(prev => ({
            main: !prev.main,
            property: false // Close property when main is toggled
          }))
        }
      >
        {isOpen2.main ? 'Main Menu ▲' : 'Main Menu ▼'}
      </button>
      {isOpen2.main && (
        <nav className="menu2 bg-white border-t border-b">
          <ul>
            <li><Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link></li>
            <li><Link href="/hotels" className={`nav-link ${pathname === '/hotels' ? 'active' : ''}`}>Destinations</Link></li>
            <li><Link href="/special-offer" className={`nav-link ${pathname === '/SpecialOfferPage' ? 'active' : ''}`}>Offers & Promotions</Link></li>
            <li><Link href="/rewards" className={`nav-link ${pathname === '/RewardPage' ? 'active' : ''}`}>Rewards Program</Link></li>
            <li><Link href="/ourbrands" className={`nav-link ${pathname === '/OurBrandsPage' ? 'active' : ''}`}>Our Brands</Link></li>
            <li><Link href="/CityHotel" className={`nav-link ${pathname === '/CityHotelPage' ? 'active' : ''}`}>Sustainability</Link></li>
          </ul>
        </nav>
      )}
    </div>

  


    {/* Accordion Item 2 - Property Menu */}
    <div className="accordion-item">
      <button
        className="accordion-toggle w-full text-left bg-gray-200"
        onClick={() =>
          setOpen2(prev => ({
            main: false, // Close main when property is toggled
            property: !prev.property
          }))
        }
      >
        {isOpen2.property ? 'Property Menu ▲' : 'Property Menu ▼'}
      </button>
      {isOpen2.property && (
        <div className="property-menu bg-white border-t border-b">
          <ul>
            <li><Link href={`/pages/${brand_slug}/${city_alias}/${hotel_slug}`}>Overview</Link></li>
            <li><Link href={`/pages/${brand_slug}/${city_alias}/${hotel_slug}/special-offers`}>Offers</Link></li>
            <li><Link href={`/pages/${brand_slug}/${city_alias}/${hotel_slug}/rooms-overview`}>Rooms</Link></li>
            <li><Link href={`/pages/${brand_slug}/${city_alias}/${hotel_slug}/restaurants`}>Restaurants</Link></li>
            <li><Link href={`/pages/${brand_slug}/${city_alias}/${hotel_slug}/meeting-event`}>Events</Link></li>
            <li><Link href={`/pages/${brand_slug}/${city_alias}/${hotel_slug}/facilities`}>Facilities</Link></li>
            <li><Link href={`/pages/${brand_slug}/${city_alias}/${hotel_slug}/gallery`}>Gallery</Link></li>
            <li><Link href={`/pages/${brand_slug}/${city_alias}/${hotel_slug}/contact-us`}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </div>
  </div>
)}




<div className="hidden lg:block">
{/* main menu */}
<nav className="menu2" id="menu2">
        <div className="navbar">
          <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1" />
              <span className="line line2" />
              <span className="line line3" />
            </div>
            <div className="menu-items mt20">
              <ul>

                <li className="nav-item active">
                  <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} href="/">
                    Home
                  </Link>

                </li>

                <li className="nav-item active">
                  <Link className={`nav-link ${pathname === '/hotels' ? 'active' : ''}`} href="/hotels">
                    Hotels
                  </Link>
                </li>


                <li className="nav-item">
                  <Link
                    className={`nav-link ${pathname === '/SpecialOfferPage' ? 'active' : ''}`}
                    href="/special-offer"
                  >
                    Offers &amp; Promotions
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className={`nav-link ${pathname === '/RewardPage' ? 'active' : ''}`}
                    href="/rewards"
                  >
                    Rewards Program
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${pathname === '/OurBrandsPage' ? 'active' : ''}`}
                    href="/ourbrands"
                  >
                    Our Brands
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${pathname === '/CityHotelPage' ? 'active' : ''}`}
                    href="/CityHotel"
                  >
                    Sustainability
                  </Link>
                </li>

              </ul>


            </div>
          </div>
        </div>

      </nav>
{/* main menu end */}

      <header className="relative-top fixed top_rght">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link className="navbar-brand navbar-brand2" href="/">
           
              <Image src="./images/logoimg.png" height="100" width="200" alt="Lemon Tree Hotels" className="logo" />
            </Link>

            {/* <a className="mobile-top-book-now" id="mobile-book-now-btn" href="#">
              Book Now
            </a> */}
            <button id="navbarDropdown" className="nav-link desk-none dropdown-toggle mt-0 top-book-now mobile-top-book-now" onClick={navbarDropdown} style={{ display: isOpen ? "none" : "block" }}>Book Now
      </button>

          </div>
        </nav>



      </header>


{/* property menu */}
      <div className="header">
      <div id="header-sroll" className={isScrolled ? 'small' : ''}> 
       
          <nav
            id="navbar_top"
            className="navbar navbar-expand-lg navbar-dark"
          >
            <div className="container">
              <Link className="navbar-brand" href="/">
               
                        <Image src="./images/alivaa-logo1.png" height="100" width="200" alt="Lemon Tree Hotels" className="logo1" />
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#main_nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="main_nav">

                <ul className="navbar-nav m-auto mt-0">

                <li className="nav-item">
               
                <Link href={`/pages/${brand_slug}/${city_alias}/${hotel_slug}`}
                className={`underline nav-link ${pathname === `/pages/${brand_slug}/${city_alias}/${hotel_slug}` ? 'active' : ''}`}
                >Overview</Link>           
             </li>

           <li className="nav-item">
                <Link href={`/pages/${brand_slug}/${city_alias}/${hotel_slug}/special-offers`} className={`underline nav-link ${pathname === `/pages/${brand_slug}/${city_alias}/${hotel_slug}/special-offers` ? 'active' : ''}`}>Offers</Link>

                  </li>

                  <li className="nav-item">
                <Link href={`/pages/${brand_slug}/${city_alias}/${hotel_slug}/rooms-overview`} className={`underline nav-link ${pathname === `/pages/${brand_slug}/${city_alias}/${hotel_slug}/rooms-overview` ? 'active' : ''}`}>Rooms</Link>
             
                  </li>
                  <li className="nav-item">
                <Link href={`/pages/${brand_slug}/${city_alias}/${hotel_slug}/restaurants`} className={`underline nav-link ${pathname === `/pages/${brand_slug}/${city_alias}/${hotel_slug}/restaurants` ? 'active' : ''}`}> Restaurants</Link>
                  </li>

                  <li className="nav-item">
                <Link href={`/pages/${brand_slug}/${city_alias}/${hotel_slug}/meeting-event`} className={`underline nav-link ${pathname === `/pages/${brand_slug}/${city_alias}/${hotel_slug}/meeting-event` ? 'active' : ''}`}> Events</Link>
                </li>

                <li className="nav-item">
                <Link href={`/pages/${brand_slug}/${city_alias}/${hotel_slug}/facilities`} className={`underline nav-link ${pathname === `/pages/${brand_slug}/${city_alias}/${hotel_slug}/facilities` ? 'active' : ''}`}> Facilities</Link>
                </li>

                <li className="nav-item">
                <Link href={`/pages/${brand_slug}/${city_alias}/${hotel_slug}/gallery`} className={`underline nav-link ${pathname === `/pages/${brand_slug}/${city_alias}/${hotel_slug}/gallery` ? 'active' : ''}`}> Gallery</Link>
                </li>

                <li className="nav-item">
                <Link href={`/pages/${brand_slug}/${city_alias}/${hotel_slug}/contact-us`} className={`underline nav-link ${pathname === `/pages/${brand_slug}/${city_alias}/${hotel_slug}/contact-us` ? 'active' : ''}`}> Contact Us</Link>
                </li>

                </ul>

              
              </div>
           
            </div>
           
          </nav>
         
        </div>

       
      </div>


</div>

    </>
  )
}