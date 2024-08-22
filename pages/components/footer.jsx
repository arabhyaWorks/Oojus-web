import styles from "../../styles/Footer.module.css";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import Qrcode from '../../public/qrcode.png';
import GooglePlay from '../../public/googlePlay.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <h4>Discover</h4>
          <ul>
            <li className={styles.items}>
              <Link href="/adani-one-pay">Cabs in varanasi</Link>
            </li>
            <li className={styles.items}>
              <Link href="/scan-and-pay">Scan & Pay</Link>
            </li>
            <li className={styles.items}>
              <Link href="/icici-credit-cards">
                Adani One ICICI Bank Credit Cards
              </Link>
            </li>
            <li className={styles.items}>
              <Link href="/offers-discount">Offer & Discount</Link>
            </li>
            <li className={styles.items}>
              <Link href="/bill-payments">Bill Payments</Link>
            </li>
            <li className={styles.items}>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className={styles.items}>
              <Link href="/video-gallery">Video Gallery</Link>
            </li>
            <li className={styles.items}>
              <Link href="/domestic-flights">Domestic Flights</Link>
            </li>
            <li className={styles.items}>
              <Link href="/international-flights">International Flights</Link>
            </li>
            <li className={styles.items}>
              <Link href="/international-airlines">International Airlines</Link>
            </li>
            <li className={styles.items}>
              <Link href="/travel-insurance">Travel Insurance</Link>
            </li>
            <li className={styles.items}>
              <Link href="/long-weekend-calendar">Long Weekend Calendar</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Services</h4>
          <ul>
            <li className={styles.items}>
              <Link href="/flight-booking">Flight Booking</Link>
            </li>
            <li className={styles.items}>
              <Link href="/hotels">Hotels</Link>
            </li>
            <li className={styles.items}>
              <Link href="/trains">Trains</Link>
            </li>
            <li className={styles.items}>
              <Link href="/bus">Bus</Link>
            </li>
            <li className={styles.items}>
              <Link href="/cab-booking">Cab Booking</Link>
            </li>
            <li className={styles.items}>
              <Link href="/holidays">Holidays</Link>
            </li>
            <li className={styles.items}>
              <Link href="/duty-free">Duty Free</Link>
            </li>
            <li className={styles.items}>
              <Link href="/food-beverages">Food & Beverages</Link>
            </li>
            <li className={styles.items}>
              <Link href="/pranaam-service">Pranaam Service</Link>
            </li>
            <li className={styles.items}>
              <Link href="/parking">Parking</Link>
            </li>
            <li className={styles.items}>
              <Link href="/porter">Porter</Link>
            </li>
            <li className={styles.items}>
              <Link href="/lounge">Lounge</Link>
            </li>
            <li className={styles.items}>
              <Link href="/lost-and-found">Lost & Found</Link>
            </li>
            <li className={styles.items}>
              <Link href="/all-services">All Services</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Airport Businesses</h4>
          <ul>
            <li className={styles.items}>
              <Link href="/ground-transportation">Ground Transportation</Link>
            </li>
            <li className={styles.items}>
              <Link href="/duty-free">Duty Free</Link>
            </li>
            <li className={styles.items}>
              <Link href="/cargo">Cargo</Link>
            </li>
            <li className={styles.items}>
              <Link href="/fuel-farm">Fuel Farm</Link>
            </li>
          </ul>
          <h4>Adani Businesses</h4>
          <ul>
            <li className={styles.items}>
              <Link href="/airports">Airports</Link>
            </li>
            <li className={styles.items}>
              <Link href="/adani-total-gas">Adani Total Gas</Link>
            </li>
            <li className={styles.items}>
              <Link href="/adani-electricity">Adani Electricity</Link>
            </li>
            <li className={styles.items}>
              <Link href="/adani-wilmar">Adani Wilmar</Link>
            </li>
            <li className={styles.items}>
              <Link href="/adani-realty">Adani Realty</Link>
            </li>
            <li className={styles.items}>
              <Link href="/adani-capital">Adani Capital</Link>
            </li>
            <li className={styles.items}>
              <Link href="/adani-housing-finance">Adani Housing Finance</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Help And Support</h4>
          <ul>
            <li className={styles.items}>
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li className={styles.items}>
              <Link href="/feedback">Feedback</Link>
            </li>
            <li className={styles.items}>
              <Link href="/track-refund-status">Track Refund Status</Link>
            </li>
            <li className={styles.items}>
              <Link href="/faqs">FAQs</Link>
            </li>
            <li className={styles.items}>
              <Link href="/adani-one">AdaniOne</Link>
            </li>
          </ul>
          <h4>Company</h4>
          <ul>
            <li className={styles.items}>
              <Link href="/about-us">About Us</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Scan to Download App</h4>
          <Image src={Qrcode} alt="QR Code" className={styles.qrCode} />    
          <div className={styles.appLinks}>
            {/* <img
              src="/path-to-apple-store-badge"
              alt="Download on the App Store"
            /> */}

            {/* <img src={"/googlePlay.png"} alt="" style={{width:'100%', height:undefined}} /> */}


            {/* <Image className={styles.googleIcon}
             width={250}
              // height={60}
             src={GooglePlay} alt="Get it on Google Play" /> */}
          </div>
          <h4>Our Awards</h4>
          <ul className={styles.awardsList}>
            <li className={styles.items}>
              Case Study Presentation Award, 2024
            </li>
            <li className={styles.items}>Greentech Award, 2024</li>
            <li className={styles.items}>DG+ Award, 2023</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>
          ©2024 3i Consulting Pvt. Ltd. • <Link href="/privacy-policy">Privacy Policy</Link> •{" "}
          <Link href="/terms-conditions">Terms & Conditions</Link>
        </p>
        <div className={styles.socialLinks}>
          <Link className={styles.socialIcons} href="https://www.facebook.com/">
            <FaFacebookF />
          </Link>
          <Link className={styles.socialIcons} href="https://www.facebook.com/">
            <FaInstagram />
          </Link>
          <Link className={styles.socialIcons} href="https://www.facebook.com/">
            <FaWhatsapp />
          </Link>
          <Link className={styles.socialIcons} href="https://www.facebook.com/">
            <FaXTwitter />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
