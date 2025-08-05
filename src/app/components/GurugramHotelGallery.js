"use client"

import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { useState } from 'react'
import Image from 'next/image'

// Flat list of all images
const images = [
    
  { id: 23, src: "/hoften-img/hoften-new-fcd-1.webp", caption: "Facade", category: "facade" },
  { id: 1, src: "/hoften-img/hf-g-1.jpg", caption: "Room", category: "Rooms" },
  { id: 2, src: "/hoften-img/hf-g-2.jpg", caption: "Room", category: "Rooms" },
  { id: 3, src: "/hoften-img/hf-g-3.jpg", caption: "Room", category: "Rooms" },
  { id: 4, src: "/hoften-img/hf-g-4.jpg", caption: "Room", category: "Rooms" },
  { id: 5, src: "/hoften-img/hf-g-5.jpg", caption: "Room", category: "Rooms" },
  { id: 6, src: "/hoften-img/hf-g-6.jpg", caption: "Room", category: "Rooms" },
  // { id: 7, src: "/hoften-img/hf-g-7.jpg", caption: "Room", category: "Rooms" },
  { id: 8, src: "/hoften-img/hf-g-8.jpg", caption: "Room", category: "Rooms" },
  { id: 9, src: "/hoften-img/hf-g-9.jpg", caption: "Room", category: "Rooms" },
  { id: 10, src: "/hoften-img/hf-g-10.jpg", caption: "Room", category: "Rooms" },
  { id: 11, src: "/hoften-img/hf-g-11.jpg", caption: "Room", category: "Rooms" },
  { id: 12, src: "/hoften-img/hf-g-12.jpg", caption: "Room", category: "Rooms" },  

]

function GurugramHotelGallery() {
  const [activeCategory, setActiveCategory] = useState("all")

  // Add "all" as the first category
  const categories = ["all", ...new Set(images.map(img => img.category))]

  return (
    <div className="container-md mt-4 mb-5">
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

export default GurugramHotelGallery

