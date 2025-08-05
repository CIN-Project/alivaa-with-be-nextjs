// "use client";
import Link from "next/link";
import Image from "next/image";

const BannerSocial = () => {
  return (
    <>
      <div className="social-icon-banner">
          <Link
            className="btn btn-social"
            href="https://www.facebook.com/profile.php?id=61560140841449&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/fb-icon.svg"
              height={25}
              width={25}
              alt="social-icon"
              className="social-icon"
            />
          </Link>

          <Link
            className="btn btn-social"
            href="https://www.instagram.com/alivaahotels/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/instagram-icon.svg"
              height={25}
              width={25}
              alt="social-icon"
              className="social-icon"
            />
          </Link>

          <Link
            className="btn btn-social"
            href="https://www.linkedin.com/company/alivaa-hotels-resorts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/linkedin-icon.svg"
              height={25}
              width={25}
              alt="social-icon"
              className="social-icon"
            />
          </Link>
        </div>
    </>
  )
}

export default BannerSocial