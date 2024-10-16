import React from "react";
import styles from "../styles/components/DateItem.module.css";

const DateItem = ({ date, onClick, selected, day, index }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.dateItem} ${
        selected ? styles.selected : styles.unselected
      }`}
      style={{ marginLeft: index === 0 ? 0 : "10px" }}
    >
      <p className={selected ? styles.selectedText : styles.unselectedText}>
        {date}
      </p>
      <p
        className={selected ? styles.selectedText : styles.unselectedText}
        style={{ marginTop: "-4px" }}
      >
        {day}
      </p>
    </button>
  );
};

export default DateItem;
