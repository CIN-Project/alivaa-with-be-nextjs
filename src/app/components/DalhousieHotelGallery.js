"use client"

import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { useState } from 'react'
import Image from 'next/image'

// Flat list of all images
const images = [
    
  { id: 23, src: "/dalhousie-img/52.png", caption: "Facade", category: "facade" },
    { id: 24, src: "/dalhousie-img/61.png", caption: "Facade", category: "facade" },
      { id: 25, src: "/dalhousie-img/62.png", caption: "Facade", category: "facade" },

  { id: 1, src: "/dalhousie-img/44.png", caption: "Room", category: "Rooms" },
  { id: 2, src: "/dalhousie-img/45.png", caption: "Room", category: "Rooms" },
  { id: 3, src: "/dalhousie-img/46.png", caption: "Room", category: "Rooms" },
  { id: 4, src: "/dalhousie-img/47.png", caption: "Room", category: "Rooms" },
  { id: 5, src: "/dalhousie-img/50.png", caption: "Room", category: "Rooms" },
  { id: 6, src: "/dalhousie-img/51.png", caption: "Room", category: "Rooms" },
  // { id: 7, src: "/hoften-img/hf-g-7.jpg", caption: "Room", category: "Rooms" },
  { id: 8, src: "/dalhousie-img/54.png", caption: "Room", category: "Rooms" },
  { id: 9, src: "/dalhousie-img/55.png", caption: "Room", category: "Rooms" },
  { id: 10, src: "/dalhousie-img/56.png", caption: "Room", category: "Rooms" },
  { id: 11, src: "/dalhousie-img/63.png", caption: "Room", category: "Rooms" },
  { id: 12, src: "/dalhousie-img/64.png", caption: "Room", category: "Rooms" },  
  { id: 13, src: "/dalhousie-img/65.png", caption: "Room", category: "Rooms" },  
  { id: 14, src: "/dalhousie-img/66.png", caption: "Room", category: "Rooms" },  
  { id: 15, src: "/dalhousie-img/67.png", caption: "Room", category: "Rooms" },  

  { id: 16, src: "/dalhousie-img/48.png", caption: "dine", category: "dine" },
  { id: 17, src: "/dalhousie-img/49.png", caption: "event", category: "events" },
   { id: 18, src: "/dalhousie-img/53.png", caption: "event", category: "events" },
    { id: 19, src: "/dalhousie-img/57.png", caption: "dine", category: "dine" },
     { id: 20, src: "/dalhousie-img/58.png", caption: "dine", category: "dine" },
      { id: 21, src: "/dalhousie-img/59.png", caption: "dine", category: "dine" },
       { id: 22, src: "/dalhousie-img/60.png", caption: "dine", category: "dine" },

]

function DalhousieHotelGallery() {
  const [activeCategory, setActiveCategory] = useState("all")

  // Add "all" as the first category
  const categories = ["all", ...new Set(images.map(img => img.category))]

  return (
    <div className="container-md mt-4 mb-5 lansdowne-hotel-gallery-page mt-5">
      <div className="center text-center">
        <h1 className="global-heading-gurgaon inner-hd">The Hoften Blue Magnets Dalhousie – Gallery</h1>
      </div>
      {/* Filter Buttons */}
      <ul className="nav nav-tabs mb-3 d-flex flex-row gap-2">
        {categories.map(category => (
          <li key={category} className="nav-item">
            <button
              className={`nav-link ${activeCategory === category ? "bg-dark text-white" : "bg-light text-dark"}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      {/* Gallery */}
      <Gallery withCaption>
        <div className="row">
          {images
            .filter(img => activeCategory === "all" || img.category === activeCategory)
            .map(({ id, src, caption, category }) => (
              <div key={id} className="col-lg-4 col-md-4 col-sm-4 col-12 mb-3">
                <Item
                  original={src}
                  thumbnail={src}
                  caption={caption}
                  width="1024"
                  height="768"
                >
                  {({ ref, open }) => (
                    <Image
                      ref={ref}
                      onClick={open}
                      src={src}
                      className="img-fluid"
                      width={600}
                      height={400}
                      alt={caption || category}
                      style={{
                        width: '100%',
                        height: '250px',
                        objectFit: 'cover',
                        cursor: 'pointer',
                        borderRadius: '8px',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)'
                        }
                      }}
                    />
                  )}
                </Item>
              </div>
            ))}
        </div>
      </Gallery>
    </div>
  )
}

export default DalhousieHotelGallery

