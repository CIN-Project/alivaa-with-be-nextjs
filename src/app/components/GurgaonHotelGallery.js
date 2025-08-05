"use client";

import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState, useMemo } from "react";
import Image from "next/image";

function GurgaonHotelGallery({ galleryData }) {
  const [activeCategory, setActiveCategory] = useState("all");

  // ✅ Flatten all categories into a single array
  const images = useMemo(() => {
    if (!galleryData) return [];

    const allImages = [];

    const processImages = (arr, category) => {
      if (Array.isArray(arr)) {
        arr.forEach((img, index) => {
          allImages.push({
            id: `${category}-${index}`,
            src: img.gallery_image,
            caption: img.title || category,
            category: category.toLowerCase(),
          });
        });
      }
    };

    processImages(galleryData.gallery_room, "Rooms");
    processImages(galleryData.gallery_restaurant, "Dining");
    processImages(galleryData.gallery_event, "Event");
    processImages(galleryData.gallery_facade, "Facade");

    return allImages;
  }, [galleryData]);

  // ✅ All unique categories + "all"
  const categories = useMemo(() => {
    const unique = new Set(images.map(img => img.category));
    return ["all", ...Array.from(unique)];
  }, [images]);

  if (!images.length) return null;

  return (
    <div className="container-md mt-4 mb-5">
      {/* Filter Tabs */}
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
              <div key={id} className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
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
                      width={600}
                      height={400}
                      className="img-fluid"
                      alt={caption || category}
                      style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "cover",
                        cursor: "pointer",
                        borderRadius: "8px",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  )}
                </Item>
              </div>
            ))}
        </div>
      </Gallery>
    </div>
  );
}

export default GurgaonHotelGallery;
