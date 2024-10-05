import React from "react";
import styles from "../../styles/components/BreadCrum.module.css";
import HomeIcon from "../icons/homeIcon";

const BreadCrum = ({ crumbs }) => {

  return (
    <div className={styles.bdContainer}>
      <a href="/" style={{display:"flex", alignItems:'center',gap:"5px"}}>
        <HomeIcon />
        Home
      </a>
      <>
        {crumbs &&
          crumbs.length > 0 &&
          crumbs.map((crumb, index) => {
            return (
              <span>
                /
                <a href="" className={styles.bdText}>
                  {crumb}
                </a>
              </span>
            );
          })}
      </>
    </div>
  );
};

export default BreadCrum;
