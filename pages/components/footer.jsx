import styles from "../../styles/Footer.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import Qrcode from "../../public/qrCode.png";
import Image from "next/image";

const Footer = () => {
  const router = useRouter();

  if (
    ["/login", "/otpScreen", "/testingPayments", "/signup"].some((route) =>
      router.pathname.includes(route)
    )
  ) {
    return null;
  } else {
    return (
      <footer className={styles.footerParentCont}>
        <div className={styles.borderImage} />
        <div className={styles.footer}>
          <div className={styles.footerContainer}>
            <div className={styles.footerColumn}>
              <h4>Discover</h4>
              <ul>
                <li className={styles.items}>
                  <Link href="/adani-one-pay">Shaligram</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/scan-and-pay">Bracelets</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/icici-credit-cards">Silver Items</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/offers-discount">Brass idols</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/bill-payments">Rudraksha</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/blogs">Oojus Specials</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/video-gallery">Wooden</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/domestic-flights">Mala</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/international-flights">Itra</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/international-airlines">Bhabhut</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/travel-insurance">Benarasi Saree</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/long-weekend-calendar">Paintings</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h4>Services</h4>
              <ul>
                <li className={styles.items}>
                  <Link href="/flight-booking">Puja Booking</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/hotels">Hotels</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/trains">Tour Package</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/bus">Tour Guide</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/cab-booking">Cab Booking</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/holidays">Boats</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/duty-free">Shastri Consultancy</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/food-beverages">Souvenir</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/pranaam-service">Iteniery</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/parking">Utilities</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/porter">Food in Kashi</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/lounge">Nav Durga Yatra</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/lost-and-found">Bhairav Yatra</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/all-services">All Services</Link>
                </li>
              </ul>
            </div>
            <div id={styles.poojaBooking} className={styles.footerColumn}>
              <h4>Pooja Booking</h4>
              <ul>
                <li className={styles.items}>
                  <Link href="/ground-transportation">Satyanarayan katha</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/duty-free">Somwar Puja</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/cargo">Dosh Nivaran Puja</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/fuel-farm">Grah Santi Puja</Link>
                </li>
              </ul>
              <h4>Must Visit Places</h4>
              <ul>
                <li className={styles.items}>
                  <Link href="/airports">Swarved Mandir</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/adani-total-gas">BHU Vishwanath Temple</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/adani-electricity">
                    Markandey Mahadev Mandir
                  </Link>
                </li>
                <li className={styles.items}>
                  <Link href="/adani-wilmar">Dhamek Stupa</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/adani-realty">Bharat Mata Mandir</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/adani-capital">Tulsi Manas Mandir</Link>
                </li>
                <li className={styles.items}>
                  <Link href="/adani-housing-finance">Vindhyachal Mandir</Link>
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
                  <Link href="/adani-one">Oojus</Link>
                </li>
              </ul>
              <h4>Company</h4>
              <ul>
                <li className={styles.items}>
                  <Link href="/about-us">About Us</Link>
                </li>
              </ul>
            </div>
            <div id={styles.scanImage} className={styles.footerColumn}>
              <h4>Scan to Download App</h4>
              <Image src={Qrcode} alt="QR Code" className={styles.qrCode} />
              <div className={styles.appLinks}>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>
              ©2024 3i Consulting Pvt. Ltd. •{" "}
              <Link href="/privacy-policy">Privacy Policy</Link> •{" "}
              <Link href="/terms-conditions">Terms & Conditions</Link>
            </p>
            <div className={styles.socialLinks}>
              <Link
                className={styles.socialIcons}
                href="https://www.facebook.com/"
              >
                <FaFacebookF />
              </Link>
              <Link
                className={styles.socialIcons}
                href="https://www.facebook.com/"
              >
                <FaInstagram />
              </Link>
              <Link
                className={styles.socialIcons}
                href="https://www.facebook.com/"
              >
                <FaWhatsapp />
              </Link>
              <Link
                className={styles.socialIcons}
                href="https://www.facebook.com/"
              >
                <FaXTwitter />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
