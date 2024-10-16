import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'; // Use Next.js Image component for optimization
import styles from '../styles/components/CabType.module.css'; // CSS Module import

const CabType = ({
  cabType,
  price,
  seater,
  source,
  onClick,
  selected,
  isCabSelected,
}) => {
  const scaleAnim = useRef(0.95); // Initial scale value as a state
  const [currentScale, setCurrentScale] = useState(scaleAnim.current);

  // Handle scale animation logic
  const scaleUp = () => setCurrentScale(1.1);
  const scaleDown = () => setCurrentScale(0.85);
  const scaleNeutral = () => setCurrentScale(0.95);

  useEffect(() => {
    if (!isCabSelected) {
      scaleNeutral();
    } else if (selected && isCabSelected) {
      scaleUp();
    } else {
      scaleDown();
    }
  }, [selected, isCabSelected]);

  return (
    <button onClick={onClick}
      className={`${styles.animatedView} ${selected ? styles.selected : styles.unselected}`}
    //   style={{ transform: `scale(${currentScale})` }}
    >
      <div className={styles.cabButton}>
        <img src={source} alt={cabType} width={31} height={70} />
        <div className={styles.cabDetails}>
          <p className={selected ? styles.selectedText : styles.unselectedText}>
            {cabType}
          </p>
          <p className={selected ? styles.selectedText : styles.unselectedText}>
            {seater}
          </p>
          <p className={`${styles.price} ${selected ? styles.selectedPrice : ''}`}>
            {price}
          </p>
        </div>
      </div>
    </button>
  );
};

export default CabType;