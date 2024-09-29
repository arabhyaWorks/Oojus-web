import React, { useState, useEffect } from 'react';
// import styles from '../styles/Header.module.css'; // CSS Module for styling
import styles from '../../styles/components/stickyHeader.module.css'

const StickyHeader = () => {
  const [headerClass, setHeaderClass] = useState(styles.header); // Initially red

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderClass(`${styles.header} ${styles.scrolled}`);
      } else {
        setHeaderClass(styles.header);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up the event listener
    };
  }, []);

  return (
    <header className={headerClass}>
      <div className={styles.navbar}>
        <h1>OOJUS</h1>
        <nav>
          <ul className={styles.navLinks}>
            <li><a href="#home">Home</a></li>
            <li><a href="#consultancy">Shastri Consultancy</a></li>
            <li><a href="#pooja">Book a Pooja</a></li>
            <li><a href="#tour">Tour Packages</a></li>
            <li><a href="#gifts">Purchase Gifts</a></li>
          </ul>
        </nav>
        <div className={styles.cartIcon}>
          <img src="/cart-icon.png" alt="Cart" />
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;