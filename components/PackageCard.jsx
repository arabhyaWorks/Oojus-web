import React from "react";
import styles from "../styles/components/PackageCard.module.css";

const PackageCard = ({ image, title, index, buttonTitle, onClick, style }) => {
  return (
    <div
      style={style}
      className={`${styles.mustVisitItem} ${index === 0 ? styles.marginLeft : null}`}
    >
      <img src={image} alt="temple" className={styles.cardImage} />
      <div className={styles.hrlabelsCont}>
        <p className={styles.cardTitle}>{title}</p>
        {buttonTitle && (
          <button onClick={onClick} className={styles.book}>
            {buttonTitle}
          </button>
        )}
      </div>
    </div>
  );
};

const EventPackageCard = ({ item, index }) => {
  return (
    <div
      className={`${styles.mustVisitItem} ${index === 0 ? styles.marginLeft : null}`}
    >
      <div
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
        }}
        className={styles.cardImageContainer}
      >
        <div
          style={{
            borderTopLeftRadius: "20px",
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            borderBottomColor: "white",
          }}
          className={styles.dateCard}
        >
          <p className={styles.txt1}>15</p>
          <p className={styles.txt2}>Nov</p>
          <p className={styles.txt3}>2024</p>
        </div>
        <div
          style={{
            borderBottomRightRadius: "20px",
          }}
          className={styles.dateCard}
        >
          <p className={styles.txt1}>20</p>
          <p className={styles.txt2}>Nov</p>
          <p className={styles.txt3}>2024</p>
        </div>
      </div>
      <h2 className={styles.cardTitle}>{item.title}</h2>
    </div>
  );
};

export { PackageCard, EventPackageCard };
