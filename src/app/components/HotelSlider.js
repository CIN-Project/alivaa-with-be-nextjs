import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import JawaiNewEnquiryPopupBook from "./JawaiNewEnquiryPopupBook";
import LansdowneNewEnquiryPopupBook from "./LansdowneNewEnquiryPopupBook";
import DalhousieNewEnquiryPopupBook from "./DalhousieNewEnquiryPopupBook";

const OurHotelsSlider = () => {
  return (
    <>
    <section className="your-break about-us sec-padding">
      <div className="container">
        <h2 className="about-us text-center mt-5">Our Hotels</h2>
        <div className="winter-sec htlslder">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={false}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 3 }
            }}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="winter-box shadow-sm">
                <Image height={200} width={200} src="/images/new-alivaa-facade.webp" alt="Alivaa Hotel Gurugram" className="w-100 primary-radius mt-0" />
                <div className="winter-box-content carddd">
                  <h3 className="winter-box-heading">Alivaa Hotel, Gurugram</h3>
                  <p className="winter-box-para card-texttt">
                    We are a luxury, fashion, and lifestyle brand that is not just part of the hotel business...
                  </p>
                  <Link href="/alivaa/gurgaon-hotels" className="read-more-btnnn">Read more</Link>
                  <div className="winter-box-btn">
                    <Link href="/alivaa/gurgaon-hotels" className="box-btn know-more">Explore More</Link>
                    <Link href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y" className="box-btn book-noww">Book Now</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="winter-box shadow-sm">
                <Image height={200} width={200} src="/images/hoften-new-fcd-1.webp" alt="The Hoften" className="w-100 primary-radius mt-0" />
                <div className="winter-box-content carddd">
                  <h3 className="winter-box-heading">The Hoften, Gurugram</h3>
                  <p className="winter-box-para card-texttt">The Hoften is a practical, mid-scale hotel brand created....</p>
                  <Link href="/hoften/sukh-vasa-gurugram" className="read-more-btnnn">Read more</Link>
                  <div className="winter-box-btn">
                    <Link href="/hoften/hoften-sukh-vasa-gurugram" className="box-btn know-more">Explore More</Link>
                    <Link href="https://bookings.alivaahotels.com/inst/#/home?propertyId=402NT4HhhBGbbpoRahFpDYw3nQ5NDM=&JDRN=Y&RoomID=210380,210381,210383,210384,210385&ap=1&gsId=402NT4HhhBGbbpoRahFpDYw3nQ5NDM=" className="box-btn book-noww">Book Now</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

             <SwiperSlide>
              <div className="winter-box shadow-sm">
                <Image height={200} width={200} src="/dalhousie-img/hoften-dalhousie.png" alt="The Hoften" className="w-100 primary-radius mt-0" />
                <div className="winter-box-content carddd">
                  <h3 className="winter-box-heading">The Hoften Blue Magnets, Dalhousie</h3>
                  <p className="winter-box-para card-texttt">Welcome to one of the best hotels in Dalhousie, where....</p>
                  <Link href="/hoften/blue-magnets-hotels-in-dalhousie" className="read-more-btnnn">Read more</Link>
                  <div className="winter-box-btn">
                    <Link href="/hoften/blue-magnets-hotels-in-dalhousie" className="box-btn know-more">Explore More</Link>
                    <Link href="#" className="box-btn book-noww" data-bs-toggle="modal" data-bs-target="#dalhousie-enquiry">Enquire Now</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="winter-box shadow-sm">
                <Image height={200} width={200} src="/images/mcleodganj-hotel.jpg" alt="Alivaa Mcleodganj" className="w-100 primary-radius mt-0" />
                <div className="winter-box-content carddd">
                  <h3 className="winter-box-heading">Alivaa Hotel, Mcleodganj</h3>
                  <p className="winter-box-para card-texttt">
                    Alivaa Hotel provides a perfect retreat in the peaceful environment of McLeodganj...
                  </p>
                  <Link href="/alivaa/mcleodganj" className="read-more-btnnn">Read more</Link>
                  <div className="winter-box-btn">
                    <Link href="/alivaa/mcleodganj" className="box-btn know-more">Explore More</Link>
                    <Link href="https://alivaahotels.securedreservations.com/reservation?bID=6d7880d9-c05f-4be6-811f-eeb846d0c59d&cID=f1c6c3f5-04d5-4180-9895-7f3e3f6b240c&destination=id=185914d6-4ebc-48b5-b982-6e81e5eb35b0&type=2&checkInDate=2025-05-20&checkOutDate=2025-05-20&guest=[ac1=2]&roomPropertyID=185914d6-4ebc-48b5-b982-6e81e5eb35b0" className="box-btn book-noww">Book Now</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}

            <SwiperSlide>
              <div className="winter-box shadow-sm">
                <img src="/lansdowne-img/lansdowne-facade.jpg" alt="Alivaa Hotel, Lansdowne" className="w-100 primary-radius mt-0" />
                <div className="winter-box-content carddd">
                  <h3 className="winter-box-heading">Alivaa Hotel, Lansdowne</h3>
                  <p className="winter-box-para card-texttt">
                    Spend a serene mountain escape at Viceroy in the Himalaya, which...
                  </p>
                  <Link href="/alivaa/lansdowne" className="read-more-btnnn">Read more</Link>
                  <div className="winter-box-btn">
                    <Link href="/alivaa/lansdowne" className="box-btn know-more">Explore More</Link>
                    {/* <Link href="https://bookings.alivaahotels.com/inst/#/home?propertyId=863NTQTKSN9pxhpc7Nmf9ycwpyyT5hmcqmIJ9ILVwh0eqVxGX4ODY=&JDRN=Y&RoomID=209630,209631,209632,209633,209709&ap=1&gsId=863NTQTKSN9pxhpc7Nmf9ycwpyyT5hmcqmIJ9ILVwh0eqVxGX4ODY=" className="box-btn book-noww">Book Now</Link> */}
                    <Link href="#" className="box-btn book-noww" data-bs-toggle="modal" data-bs-target="#LansEnquiryModal">Enquire Now</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="winter-box shadow-sm">
                <img src="/jawai-img/jawai-hotel-img.jpg" alt="Alivaa Hotel, Jawai" className="w-100 primary-radius mt-0" />
                <div className="winter-box-content carddd">
                  <h3 className="winter-box-heading">Alivaa Hotel, Jawai</h3>
                  <p className="winter-box-para card-texttt">
                    Drawing its roots from nature and motivated by the “Flame of the Forest”...
                  </p>
                  <Link href="/alivaa/jawai-palash-resorts" className="read-more-btnnn">Read more</Link>
                  <div className="winter-box-btn">
                    <Link href="/alivaa/jawai-palash-resorts" className="box-btn know-more">Explore More</Link>
                    <Link href="#" className="box-btn book-noww" data-bs-toggle="modal" data-bs-target="#enquiryModall">Enquire Now</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="winter-box shadow-sm">
                <img src="/lotwara-fort/lotwara-fort.jpg" alt="Alivaa Heritage Lotwara Fort" className="w-100 primary-radius mt-0" />
                <div className="winter-box-content carddd">
                  <h3 className="winter-box-heading">Alivaa Heritage Lotwara Fort</h3>
                  <p className="winter-box-para card-texttt">
                    Alivaa Lotwara Fort is an 18th-century Rajput fort. It was built on...
                  </p>
                  <Link href="/alivaa/heritage-lotwara-fort-hotels-in-dausa" className="read-more-btnnn">Read more</Link>
                  <div className="winter-box-btn">
                    <Link href="/alivaa/heritage-lotwara-fort-hotels-in-dausa" className="box-btn know-more">Explore More</Link>
                    <Link href="#" className="box-btn book-noww" data-bs-toggle="modal" data-bs-target="#enquiryModall">Enquire Now</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="winter-box shadow-sm">
                <img src="/hoften-noida/hoften-noida.jpg" alt="The Hoften Lotus Court, Noida" className="w-100 primary-radius mt-0" />
                <div className="winter-box-content carddd">
                  <h3 className="winter-box-heading">The Hoften Lotus Court, Noida</h3>
                  <p className="winter-box-para card-texttt">
                    Located in a calm but convenient part of Noida, the Hoften Lotus Court...
                  </p>
                  <Link href="/hoften/lotus-court-hotels-in-noida" className="read-more-btnnn">Read more</Link>
                  <div className="winter-box-btn">
                    <Link href="/hoften/lotus-court-hotels-in-noida" className="box-btn know-more">Explore More</Link>
                    <Link href="#" className="box-btn book-noww" data-bs-toggle="modal" data-bs-target="#enquiryModall">Enquire Now</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="winter-box shadow-sm">
                <img src="/xenious-banglore/bengaluru.jpg" alt="The Hoften Sterling Plaza, Bangalore" className="w-100 primary-radius mt-0" />
                <div className="winter-box-content carddd">
                  <h3 className="winter-box-heading">The Hoften Sterling Plaza, Bangalore</h3>
                  <p className="winter-box-para card-texttt">
                    The Hoften Sterling Plaza is an oasis of peace and tranquility...
                  </p>
                  <Link href="/hoften/sterling-plaza-hotels-near-bangalore-airport" className="read-more-btnnn">Read more</Link>
                  <div className="winter-box-btn">
                    <Link href="/hoften/sterling-plaza-hotels-near-bangalore-airport" className="box-btn know-more">Explore More</Link>
                    <Link href="#" className="box-btn book-noww" data-bs-toggle="modal" data-bs-target="#enquiryModall">Enquire Now</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="winter-box shadow-sm">
                <img src="/xenious-amritsar/amritsar.jpg" alt="Xenious Amritsar" className="w-100 primary-radius mt-0" />
                <div className="winter-box-content carddd">
                  <h3 className="winter-box-heading">Xenious Amritsar</h3>
                  <p className="winter-box-para card-texttt">
                    Welcome to one of the best hotels in Amritsar, where there is...
                  </p>
                  <Link href="/xenious/hotels-in-amritsar" className="read-more-btnnn">Read more</Link>
                  <div className="winter-box-btn">
                    <Link href="/xenious/hotels-in-amritsar" className="box-btn know-more">Explore More</Link>
                    <Link href="#" className="box-btn book-noww" data-bs-toggle="modal" data-bs-target="#enquiryModall">Enquire Now</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="winter-box shadow-sm">
                <img src="/goa-image/goa.jpg" alt="Xenious Cashew Leaf Resort, Goa" className="w-100 primary-radius mt-0" />
                <div className="winter-box-content carddd">
                  <h3 className="winter-box-heading">Xenious Cashew Leaf Resort, Goa</h3>
                  <p className="winter-box-para card-texttt">
                    The Xenious Cashew Leaf Resort is cocooned in a serene valley...
                  </p>
                  <Link href="/xenious/cashew-leaf-resorts-in-goa" className="read-more-btnnn">Read more</Link>
                  <div className="winter-box-btn">
                    <Link href="/xenious/cashew-leaf-resorts-in-goa" className="box-btn know-more">Explore More</Link>
                    <Link href="#" className="box-btn book-noww" data-bs-toggle="modal" data-bs-target="#enquiryModall">Enquire Now</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 5 */}
            <SwiperSlide>
              <div className="winter-box shadow-sm">
                <Image height={200} width={200} src="/images/corebett-new-image.webp" alt="Corbett Jungle Resort" className="w-100 primary-radius mt-0" />
                <div className="winter-box-content carddd">
                  <h3 className="winter-box-heading">Alivaa Jungle Resort, Corbett</h3>
                  <p className="winter-box-para card-texttt">Your perfect pause, hidden in the wild.</p>
                  <div className="winter-box-btn">
                    <Link href="/" className="box-btn book-noww tooltipp mt-4" title="coming soon">
                      Coming soon<span className="tooltiptextt">Coming soon</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 6 */}
             <SwiperSlide>
              <div className="winter-box shadow-sm">
                <img src="/mumbai-img/alivaa-mumbai-home.jpg" alt="Alivaa Hotel Mumbai" className="w-100 primary-radius mt-0" />
                <div className="winter-box-content carddd">
                  <h3 className="winter-box-heading">Alivaa Hotel, Mumbai</h3>
                  <p className="winter-box-para card-texttt">A stay as vibrant as the city itself.</p>
                  <div className="winter-box-btn">
                    <Link href="/" className="box-btn book-noww tooltipp mt-4" title="coming soon">
                      Coming soon<span className="tooltiptextt">Coming soon</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 7 */}
             <SwiperSlide>
              <div className="winter-box shadow-sm">
                <img src="/udaipur-img/alivaa-udaipur-home.jpg" alt="Alivaa Hotel Udaipur" className="w-100 primary-radius mt-0" />
                <div className="winter-box-content carddd">
                  <h3 className="winter-box-heading">Alivaa Hotel, Udaipur</h3>
                  <p className="winter-box-para card-texttt">Stay amidst heritage, history, and serene lake views. </p>
                  <div className="winter-box-btn">
                    <Link href="/" className="box-btn book-noww tooltipp mt-1" title="coming soon">
                      Coming soon<span className="tooltiptextt">Coming soon</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>




          </Swiper>
        </div>
      </div>
    </section>

    <JawaiNewEnquiryPopupBook />
    <LansdowneNewEnquiryPopupBook />
    <DalhousieNewEnquiryPopupBook />

    </>
  );
};

export default OurHotelsSlider;
