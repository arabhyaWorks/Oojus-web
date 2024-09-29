import React, { useState } from 'react';
import Image from 'next/image';
import styles from '.././styles/bookpooja.module.css';

const BookPuja = () => {
  const [pincode, setPincode] = useState('');
  const [pujaMode, setPujaMode] = useState('Offline');
  const [dateTime, setDateTime] = useState('');
  const [language, setLanguage] = useState('Sanskrit');

  const handleBookPuja = () => {
    alert('Puja booked successfully!');
  };

  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <a href="/">← Back</a>
        <span> / Home / Puja / रुद्राभिषेक एवं शिवाराधन</span>
      </div>

      {/* Pooja Image */}
      <div className={styles.imageContainer}>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/pooja_images%2Fkaal.png?alt=media&token=4b695679-bdbd-4f6d-9481-50d2f8304d90"
          alt="Puja Image"
          width={500}
          height={300}
          className={styles.poojaImage}
        />
      </div>

      {/* Pooja Details */}
      <div className={styles.details}>
        <h1 className={styles.title}>रुद्राभिषेक एवं शिवाराधन</h1>
        <p>रुद्राभिषेक | Duration : 4 Hrs 30 Min</p>

        <div className={styles.formRow}>
          <input
            type="text"
            placeholder="Enter Pincode to check availability"
            className={styles.input}
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />

          <select
            value={pujaMode}
            className={styles.input}
            onChange={(e) => setPujaMode(e.target.value)}
          >
            <option value="Offline">Offline</option>
            <option value="Online">Online</option>
          </select>
        </div>

        <div className={styles.formRow}>
          <select
            value={language}
            className={styles.input}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="Sanskrit">संस्कृत</option>
            <option value="Hindi">हिंदी</option>
            <option value="English">English</option>
          </select>

          <input
            type="datetime-local"
            className={styles.input}
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
        </div>

        <button className={styles.bookButton} onClick={handleBookPuja}>
          Book Puja
        </button>
      </div>

      {/* Tab Navigation */}
      <div className={styles.tabContainer}>
        <ul>
          <li className={styles.activeTab}>About Puja</li>
          <li>Benefits</li>
          <li>Process</li>
          <li>Puja Samagri</li>
          <li>FAQ</li>
        </ul>
      </div>

      {/* Puja Content */}
      <div className={styles.pujaContent}>
        <h2>About Puja</h2>
        <p>
          वेद परमात्मा का साक्षात स्वरूप है। भगवान रूद्र का पूजन वेद के मन्त्रों द्वारा किया जाता है।
        </p>
        {/* Additional content as per your requirement */}
      </div>
    </div>
  );
};

export default BookPuja;