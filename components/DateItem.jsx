import React from 'react';

const DateItem = ({ date, onClick, selected, day, index }) => {
  return (
    <button
      onClick={onClick}
      style={{
        ...styles.dateItem,
        marginLeft: index === 0 ? 0 : '10px',
        ...(selected ? styles.selected : styles.unselected),
      }}
    >
      <p
        style={{
          fontWeight: '600',
          fontSize: '14px',
          color: selected ? 'white' : styles.color,
        }}
      >
        {date}
      </p>
      <p
        style={{
          fontWeight: '500',
          marginTop: '-4px',
          fontSize: '15px',
          color: selected ? 'white' : styles.color,
        }}
      >
        {day}
      </p>
    </button>
  );
};

const styles = {
  dateItem: {
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '55px',
    height: '60px',
    padding: '10px',
    cursor: 'pointer',
  },
  selected: {
    backgroundColor: '#B01432',
  },
  unselected: {
    border: '1.7px solid #B01432',
  },
  color: '#B01432',
};

export default DateItem;