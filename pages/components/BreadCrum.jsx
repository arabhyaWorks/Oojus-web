import React from "react";
import styles from "../../styles/components/BreadCrum.module.css";
import HomeIcon from "../icons/homeIcon";

const BreadCrum = ({ crumbs }) => {
  console.log("Crumbs: ", crumbs);

  return (
    <div className={styles.bdContainer}>
      <a href="/">
        <HomeIcon />
        Home
      </a>
      <>
        {crumbs.map((crumb, index) => {
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
