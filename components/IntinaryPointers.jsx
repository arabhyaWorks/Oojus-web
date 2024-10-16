import React from "react";
import styles from "../styles/components/IntinaryPointers.module.css";

const ItinaryItemHeader = ({ day }) => {
  return (
    <div className={styles.itinaryCont}>
      <div className={styles.itinaryBlock}>
        <p>{day}</p>
      </div>
      <div className={styles.itinaryText}>
        <h3>Day {day}</h3>
      </div>
    </div>
  );
};

const ItinaryItem = ({ time, activity, last }) => {
  return (
    <div className={styles.itinaryPointerCont}>
      <div
        className={styles.itinaryLineCont}
        style={{ justifyContent: last ? "flex-start" : "center" }}
      >
        <div className={styles.itenaryLine} />
        <div className={styles.itinaryDot} />
        {last ? null : <div className={styles.itenaryLine} />}
      </div>

      <div className={styles.itinaryText}>
        <div className={styles.itinaryDetail}>
          <p>{time}</p>
        </div>
        <p>{activity}</p>
      </div>
    </div>
  );
};

export { ItinaryItemHeader, ItinaryItem };
