import React, { useState } from "react";
import styles from "../../styles/components/longBanner.module.css";

const LongBanner = (props) => {
  return (
    <div className={styles.longBannerCont}>
      <img
        src="https://www.satvikstore.in/cdn/shop/files/Gift-Card_1080x@2x.jpg?v=1697106186"
        alt=""
        className={styles.productDetailBanner}
      />
      <h1>this is long banner container</h1>
    </div>
  );
};

export default LongBanner;
