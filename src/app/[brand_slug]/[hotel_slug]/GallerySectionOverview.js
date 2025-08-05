import { motion } from "framer-motion";

// Example usage: <GallerySection gallery={gallery} />

const GallerySection = ({ gallery, hotelList }) => {

  if (!Array.isArray(gallery) || gallery.length === 0) {
    return null; // or return a fallback <p>No images available</p>
  }

  // Chunk into pairs
  const chunkedImages = [];
  for (let i = 0; i < gallery.length; i += 2) {
    chunkedImages.push(gallery.slice(i, i + 2));
  }

  return (
    <motion.section
      className="gallery-section gurgaon-hotel"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, x: 0, y: -50 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <article className="container-fluid no-padd">
        <div className="col-lg-12 text-center wow fadeInDown animated" data-wow-duration="4s">
          {hotelList && hotelList.length > 0 && (
                                <h4 className="global-heading-gurgaon inner-hd text-center">{hotelList[0].gallery_heading}</h4>)}

{hotelList && hotelList.length > 0 && (
                                <p className="content-boxx text-center">
                                   {hotelList[0].gallery_content}
                                </p>
)}


        
        </div>

        <div className="col-lg-12 no-padd wow fadeInUp animated" data-wow-duration="4s">
          <div className="owl-carousel owl-theme gal-slider owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div className="owl-stage" style={{ animation: "scrollGallery 20s linear infinite", display: "flex" }}>
                {chunkedImages.map((pair, index) => (
                  <div key={index} className="owl-item col-md-4 col-12" style={{ width: "306.667px", marginRight: "10px" }}>
                    <div className="item text-center p-1">
                      {pair.map((img, i) => (
                        <div key={i} className="inner-img-section mb-2">
                          <img
                            src={img.gallery_image}
                            alt={img.title || "Gallery image"}
                            style={{ height: "206px", width: "308px", objectFit: "cover" }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </motion.section>
  );
};

export default GallerySection;


