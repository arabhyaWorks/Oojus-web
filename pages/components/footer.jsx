import styles from '../../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerColumn}>
                    <h4>Discover</h4>
                    <ul>
                        <li>Adani One Pay</li>
                        <li>Scan & Pay</li>
                        <li>Adani One ICICI Bank Credit Cards</li>
                        <li>Offer & Discount</li>
                        <li>Bill Payments</li>
                        <li>Blogs</li>
                        <li>Video Gallery</li>
                        <li>Domestic Flights</li>
                        <li>International Flights</li>
                        <li>International Airlines</li>
                        <li>Travel Insurance</li>
                        <li>Long Weekend Calendar</li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h4>Services</h4>
                    <ul>
                        <li>Flight Booking</li>
                        <li>Hotels</li>
                        <li>Trains</li>
                        <li>Bus</li>
                        <li>Cab Booking</li>
                        <li>Holidays</li>
                        <li>Duty Free</li>
                        <li>Food & Beverages</li>
                        <li>Pranaam Service</li>
                        <li>Parking</li>
                        <li>Porter</li>
                        <li>Lounge</li>
                        <li>Lost & Found</li>
                        <li>All Services</li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h4>Airport Businesses</h4>
                    <ul>
                        <li>Ground Transportation</li>
                        <li>Duty Free</li>
                        <li>Cargo</li>
                        <li>Fuel Farm</li>
                    </ul>
                    <h4>Adani Businesses</h4>
                    <ul>
                        <li>Airports</li>
                        <li>Adani Total Gas</li>
                        <li>Adani Electricity</li>
                        <li>Adani Wilmar</li>
                        <li>Adani Realty</li>
                        <li>Adani Capital</li>
                        <li>Adani Housing Finance</li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h4>Help And Support</h4>
                    <ul>
                        <li>Contact Us</li>
                        <li>Feedback</li>
                        <li>Track Refund Status</li>
                        <li>FAQs</li>
                        <li>AdaniOne</li>
                    </ul>
                    <h4>Company</h4>
                    <ul>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h4>Scan to Download App</h4>
                    <img src="/path-to-qr-code" alt="QR Code" className={styles.qrCode} />
                    <div className={styles.appLinks}>
                        <img src="/path-to-apple-store-badge" alt="Download on the App Store" />
                        <img src="/path-to-google-play-badge" alt="Get it on Google Play" />
                    </div>
                    <h4>Our Awards</h4>
                    <ul className={styles.awardsList}>
                        <li>Case Study Presentation Award, 2024</li>
                        <li>Greentech Award, 2024</li>
                        <li>DG+ Award, 2023</li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>©2024 Adani One • <a href="/privacy-policy">Privacy Policy</a> • <a href="/terms-conditions">Terms & Conditions</a></p>
                <div className={styles.socialLinks}>
                    <a href="#"><img src="/path-to-facebook-icon" alt="Facebook" /></a>
                    <a href="#"><img src="/path-to-twitter-icon" alt="Twitter" /></a>
                    <a href="#"><img src="/path-to-linkedin-icon" alt="LinkedIn" /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;