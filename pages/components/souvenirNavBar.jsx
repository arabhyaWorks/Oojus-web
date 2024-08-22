import React from 'react';
import styles from '../../styles/SouvenirNavBar.module.css'; // Import your CSS module for styling
// import logo from './logo.png'; // Import your logo image
// import profileIcon from './profileIcon.png'; // Import your profile icon image

const SouvenirNavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <button className={styles.menuButton}>
          <span className={styles.hamburgerIcon}>☰</span>
        </button>
        <div className={styles.logoContainer}>
          {/* <img src={logo} alt="Souvenir Logo" className={styles.logo} /> */}
          <div className={styles.logoText}>
            <h4>Chhatrapati Shivaji Maharaj</h4>
            <p>INTERNATIONAL AIRPORT MUMBAI</p>
          </div>
        </div>
      </div>
      <div className={styles.navCenter}>
        <div className={styles.searchBar}>
          <input 
            type="text" 
            placeholder="Search for brands & products" 
            className={styles.searchInput}
          />
          <span className={styles.searchIcon}>🔍</span>
        </div>
      </div>
      <div className={styles.navRight}>
        <button className={styles.cartButton}>
          🛒
        </button>
        {/* <img src={profileIcon} alt="Profile Icon" className={styles.profileIcon} /> */}
      </div>
    </nav>
  );
};

export default SouvenirNavBar;