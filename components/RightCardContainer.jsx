import React from "react";
import styles from "../styles/components/RightCardContainer.module.css";

const RightCardContainer = ({ image, Icon, buttonTitle, children }) => {
  return (
    <div className={styles.rgtCardCont}>
      {image ? <img src={image} className={styles.cardTopImg} /> : null}
      <div className={styles.cardBottomContainer}>
        {children ? children : null}

        {buttonTitle ? (
          <button>
            {Icon && <Icon />}
            {buttonTitle}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default RightCardContainer;
