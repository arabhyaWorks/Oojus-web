import React from "react";
import styles from "../styles/components/RightCardContainer.module.css";

const RightCardContainer = ({ image, Icon, buttonTitle, children, onClick }) => {
  return (
    <div className={styles.rgtCardCont}>
      {image ? <img src={image} className={styles.cardTopImg} /> : null}
      <div className={styles.cardBottomContainer}>
        {children ? children : null}

        {buttonTitle ? (
          <button onClick={onClick}>
            {Icon && <Icon />}
            {buttonTitle}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default RightCardContainer;
