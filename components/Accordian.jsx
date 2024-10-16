import React, { useState } from "react";
import styles from "../styles/components/accordian.module.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Icon for up/down

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleAccordion} className={styles.accordianHeader}>
        <h3>{title}</h3>
        <div
          className={styles.arrowButton}
          style={{
            transform: isOpen ? "rotate(180deg)" : null,
          }}
        >
          <FiChevronUp size={"1.5rem"} />{" "}
        </div>
      </button>

      <div
        className={`${styles.accordianContent} ${isOpen ? styles.open : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
