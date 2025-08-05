'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(pathname === '/');

    useEffect(() => {
        setIsOpen(pathname === '/');
    }, [pathname]);

    const toggleNavbar1 = () => {
        setIsOpen(!isOpen);
    };

    return (
      <header className={`clearHeader ${pathname !== '/' ? 'other-page' : 'proprty-hdr'}`}>
            <div id="navbar">
                <div className="container-fluid">
                    <nav className="navbar navbar-default navbar-static-top" role="navigation">
                        <div className="navbar-header">
                            {/* Mobile Toggle Button */}
                            <button className="navbar-toggler" type="button" onClick={toggleNavbar1} data-bs-toggle="collapse" data-bs-target="#navbar-collapse-2" aria-controls="navbar-collapse-2" aria-expanded={isOpen} aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            
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
                        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbar-collapse-2">
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
                                    <ul className="dropdown-menu">
                                        <li><Link href="/corbett-hotel">Alivaa Jungle Resort</Link></li>
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