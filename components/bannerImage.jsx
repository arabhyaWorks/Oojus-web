import React from "react";
import styles from '../styles/components/bannerImage.module.css'

const BannerImage = ({ src, alt, heading, subheading }) => {
  return (
    <div className={styles.superContainer}>
      <div className={styles.mainImageContainer}>
        <img src={src} alt={alt} className={styles.image} />
        <div className={styles.blurContainer}>
          <>
            <h1>{heading}</h1>
            <h2>{subheading}</h2>
          </>
        </div>
      </div>
    </div>
  );
};

export default BannerImage;
