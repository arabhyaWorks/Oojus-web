import React from "react";
import styles from "../../styles/askNandiHeader.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.leftCont}>
        <div className={styles.logoCont}>
          <img
            src="https://vyaparbackend.s3.amazonaws.com/uploads/logo.jpg"
            alt=""
            className={styles.logo}
          />
        </div>

        <div className={styles.titleCont}>
          <p className={styles.heading}>Ask Nandi</p>
          <div className={styles.subHeadingCont}>
            <div className={styles.subhcont}>
              <p className={styles.subheading}>Powered by </p>
            </div>
            <a href="https://bhashini.gov.in/" target="_blank">
              <img
                className={styles.bhasiniLogo}
                src="https://vyaparbackend.s3.amazonaws.com/uploads/bhasini.png"
                alt="Bhasini Digital India"
              />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.closeBtnContainer}>
        <img
          className={styles.closeBtn}
          src="https://vyaparbackend.s3.amazonaws.com/uploads/closebtn.png"
          alt="close"
        />
      </div>
    </div>
  );
};

export default Header;
