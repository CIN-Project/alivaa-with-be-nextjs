/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'homesweb.staah.net',
            port: '',
            pathname: '/imagelibrary/**',
          },
        ],
        unoptimized: true,
      },
	  async redirects() {
return [
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
	{
        source: '/gurugram-meeting-events.php',
        destination: '/gurugram-meeting-events',
        permanent: true,
      },
      {
        source: '/gurugram-hotel-contact.php',
        destination: '/gurugram-hotel-contact',
        permanent: true,
      },
      {
        source: '/gurugram-hotel-offers.php',
        destination: '/gurugram-hotel-offers',
        permanent: true,
      },
      {
        source: '/gurugram-hotel.php',
        destination: '/gurugram-hotel',
        permanent: true,
      },
      {
        source: '/special-offers.php',
        destination: '/special-offers',
        permanent: true,
      },
      {
        source: '/gurugram-dining.php',
        destination: '/gurugram-dining',
        permanent: true,
      },
      {
        source: '/gurugram-accommodation.php',
        destination: '/gurugram-accommodation',
        permanent: true,
      },
      {
        source: '/gurgaon-hotel-offers.php',
        destination: '/gurgaon-hotel-offers',
        permanent: true,
      },
      {
        source: '/gurgaon-hotel.php',
        destination: '/gurgaon-hotels',
        permanent: true,
      },
      {
        source: '/gurgaon-hotel-contact.php',
        destination: '/gurgaon-hotel-contact',
        permanent: true,
      },
      {
        source: '/gurgaon-facilities.php',
        destination: '/gurgaon-facilities',
        permanent: true,
      },
      {
        source: '/gurgaon-dining.php',
        destination: '/gurgaon-restaurants',
        permanent: true,
      },
      {
        source: '/gurgaon-attractions.php',
        destination: '/gurgaon-tourist-attractions',
        permanent: true,
      },
      {
        source: '/gurgaon-accommodation.php',
        destination: '/gurgaon-rooms',
        permanent: true,
      },
      {
        source: '/contactus.php',
        destination: '/contactus',
        permanent: true,
      },
      {
        source: '/about.php',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/blog/gurugram-holi.html',
        destination: '/gurugram-holi',
        permanent: true,
      },
      {
        source: '/blog/concerts-in-gurgaon.html',
        destination: '/concerts-in-gurgaon',
        permanent: true,
      },
      {
        source: '/blog/nightlife-in-gurgaon.html',
        destination: '/nightlife-in-gurgaon',
        permanent: true,
      },
      {
        source: '/blog/gurugram-hotel-deal.html',
        destination: '/gurugram-hotel-deal',
        permanent: true,
      },
      {
        source: '/blog/new-year-celebration-gurgaon.html',
        destination: '/new-year-celebration-gurgaon',
        permanent: true,
      },
      {
        source: '/blog/restaurants-near-huda-city-centre.html',
        destination: '/restaurants-near-huda-city-centre',
        permanent: true,
      },
      {
        source: '/blog/best-hotel-deals-in-gurugram.html',
        destination: '/best-hotel-deals-in-gurugram',
        permanent: true,
      },
      {
        source: '/blog/best-restaurants-in-sohna-road.html',
        destination: '/best-restaurants-in-sohna-road',
        permanent: true,
      },
      {
        source: '/blog/valentine-day-getaway-in-delhi.html',
        destination: '/valentine-day-getaway-in-delhi',
        permanent: true,
      },
      {
        source: '/blog/places-to-visit-in-gurgaon.html',
        destination: '/places-to-visit-in-gurgaon',
        permanent: true,
      },
      {
        source: '/blog/hotels-near-huda-city-centre.html',
        destination: '/hotels-near-huda-city-centre',
        permanent: true,
      },
      {
        source: '/blog/luxury-services-at-alivaa-hotel-gurugram.html',
        destination: '/luxury-services-at-alivaa-hotel-gurugram',
        permanent: true,
      },
      {
        source: '/blog/best-hotels-in-gurgaon-with-a-pool.html',
        destination: '/best-hotels-in-gurgaon-with-a-pool',
        permanent: true,
      },
      {
        source: '/blog/hotel-near-medanta-hospital-gurgaon.html',
        destination: '/hotel-near-medanta-hospital-gurgaon',
        permanent: true,
      },
      {
        source: '/blog/exhibition-in-gurgaon.html',
        destination: '/exhibition-in-gurgaon',
        permanent: true,
      },
      {
        source: '/blog/things-to-do-in-gurgaon.html',
        destination: '/things-to-do-in-gurgaon',
        permanent: true,
      },
      {
        source: '/blog/best-hotels-near-sector-45.html',
        destination: '/best-hotels-near-sector-45',
        permanent: true,
      },
	    { source: '/gurgaon-hotels', destination: '/alivaa/gurgaon-hotels', permanent: true, },
      { source: '/gurgaon-hotel', destination: '/alivaa/gurgaon-hotels', permanent: true, },
      { source: '/gurgaon-rooms', destination: '/alivaa/gurgaon-hotels/rooms', permanent: true, },
      { source: '/gurgaon-restaurants', destination: '/alivaa/gurgaon-hotels/restaurants', permanent: true, },
      { source: '/gurgaon-facilities', destination: '/alivaa/gurgaon-hotels/facilities', permanent: true, },
      { source: '/gurgaon-hotel-offers', destination: '/alivaa/gurgaon-hotels/offers', permanent: true, },
      { source: '/gurgaon-tourist-attractions', destination: '/alivaa/gurgaon-hotels/attractions', permanent: true, },
      { source: '/gurgaon-gallery', destination: '/alivaa/gurgaon-hotels/gallery', permanent: true, },
      { source: '/gurgaon-hotel-contact', destination: '/alivaa/gurgaon-hotels/contact-us', permanent: true, },

      { source: '/mcleodganj', destination: '/alivaa/mcleodganj', permanent: true, },
      { source: '/mcleodganj-accommodation', destination: '/alivaa/mcleodganj/rooms', permanent: true, },
      { source: '/mcleodganj-dining', destination: '/alivaa/mcleodganj/restaurants', permanent: true, },
      { source: '/mcleodganj-facilities', destination: '/alivaa/mcleodganj/facilities', permanent: true, },
      { source: '/mcleodganj-gallery', destination: '/alivaa/mcleodganj/gallery', permanent: true, },
      { source: '/mcleodganj-contact', destination: '/alivaa/mcleodganj/contact-us', permanent: true, },

      { source: '/lansdowne', destination: '/alivaa/lansdowne', permanent: true, },
      { source: '/lansdowne-accommodation', destination: '/alivaa/lansdowne/rooms', permanent: true, },
      { source: '/lansdowne-dining', destination: '/alivaa/lansdowne/restaurants', permanent: true, },
      { source: '/lansdowne-facilities', destination: '/alivaa/lansdowne/facilities', permanent: true, },
      { source: '/lansdowne-meeting-events', destination: '/alivaa/lansdowne/events', permanent: true, },
      { source: '/lansdowne-hotel-offers', destination: '/alivaa/lansdowne/offers', permanent: true, },
      { source: '/lansdowne-gallery', destination: '/alivaa/lansdowne/gallery', permanent: true, },
      { source: '/lansdowne-contact', destination: '/alivaa/lansdowne/contact-us', permanent: true, },

      { source: '/jawai-palash-resort-overview', destination: '/alivaa/jawai-palash-resorts', permanent: true, },
      { source: '/jawai-palash-resort-rooms-suites', destination: '/alivaa/jawai-palash-resorts/rooms', permanent: true, },
      { source: '/jawai-palash-resort-dining', destination: '/alivaa/jawai-palash-resorts/restaurants', permanent: true, },
      { source: '/jawai-palash-resort-facilities', destination: '/alivaa/jawai-palash-resorts/facilities', permanent: true, },
      { source: '/jawai-palash-resort-attractions', destination: '/alivaa/jawai-palash-resorts/attractions', permanent: true, },
      { source: '/jawai-palash-resort-gallery', destination: '/alivaa/jawai-palash-resorts/gallery', permanent: true, },
      { source: '/jawai-palash-resort-contact', destination: '/alivaa/jawai-palash-resorts/contact-us', permanent: true, },

      { source: '/gurugram-hotel', destination: '/hoften/hoften-sukh-vasa-gurugram', permanent: true, },
      { source: '/gurugram-accommodation', destination: '/hoften/hoften-sukh-vasa-gurugram/rooms', permanent: true, },
      { source: '/gurugram-meeting-events', destination: '/hoften/hoften-sukh-vasa-gurugram/events', permanent: true, },
      { source: '/gurugram-dining', destination: '/hoften/hoften-sukh-vasa-gurugram/restaurants', permanent: true, },
      { source: '/gurugram-hotel-offers', destination: '/hoften/hoften-sukh-vasa-gurugram/offers', permanent: true, },
      { source: '/gurugram-gallery', destination: '/hoften/hoften-sukh-vasa-gurugram/gallery', permanent: true, },
      { source: '/gurugram-hotel-contact', destination: '/hoften/hoften-sukh-vasa-gurugram/contact-us', permanent: true, },

      { source: '/hotels-in-dalhousie', destination: '/hoften/blue-magnets-hotels-in-dalhousie', permanent: true, },
      { source: '/rooms-in-dalhousie', destination: '/hoften/blue-magnets-hotels-in-dalhousie/rooms', permanent: true, },
      { source: '/restaurants-in-dalhousie', destination: '/hoften/blue-magnets-hotels-in-dalhousie/restaurants', permanent: true, },
      { source: '/meeting-events-in-dalhousie', destination: '/hoften/blue-magnets-hotels-in-dalhousie/events', permanent: true, },
      { source: '/hotel-gallery-in-dalhousie', destination: '/hoften/blue-magnets-hotels-in-dalhousie/gallery', permanent: true, },
      { source: '/hotel-contact-in-dalhousie', destination: '/hoften/blue-magnets-hotels-in-dalhousie/contact-us', permanent: true, },

    
]
}
	  
};

export default nextConfig;
