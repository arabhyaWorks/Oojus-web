import React from "react";

const MenuIcon = ({ width = 30, height = 30,  styles }) => {
  return (
    <svg
      width={width}
      height={height}
      className={styles}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="3" width="28" height="3.65217" rx="1"/>
      <rect x="1" y="12.7391" width="28" height="3.65217" rx="1" />
      <rect x="1" y="22.4783" width="28" height="3.65217" rx="1" />
    </svg>
  );
};

export default MenuIcon;