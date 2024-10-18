import React from "react";
import styles from "../styles/components/ImageClosure.module.css";

const ImageClosure = ({img1, img2, img3}) => {
  return (
    <div className={styles.imgCont}>
      <div className={styles.lftImgCont}>
        <img src={img1} alt="kashi at one place" className={styles.lftImg} />
      </div>
      <div className={styles.rgtImgCont}>
        <img src={img2} alt="kashi at one place" className={styles.rgtImg} />
        <img src={img3} alt="kashi at one place" className={styles.rgtImg} />
      </div>
    </div>
  );
};

export default ImageClosure;