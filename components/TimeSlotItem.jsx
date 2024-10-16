import React from 'react';
import styles from '../styles/components/TimeSlotItem.module.css'

const TimeSlotItem = ({ timeSlot, onClick, selected, index }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.dateItem} ${selected ? styles.selected : styles.unselected}`}
      style={{ marginLeft: index === 0 ? 0 : '10px' }}
    >
      <p className={selected ? styles.selectedText : styles.unselectedText}>
        {timeSlot}
      </p>
    </button>
  );
};

export default TimeSlotItem;