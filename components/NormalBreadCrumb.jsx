import React from "react";
import styles from "../styles/components/NormalBreadCrumb.module.css";

const ArrowIcon = ({}) => {
  return (
    <div style={{ width: 24, height: 24 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="transform scale-50 text-gray-400"
        fill="#9ca3af"
      >
        <g fill="none" fill-rule="evenodd">
          <polygon points="0 0 24 0 24 24 0 24"></polygon>
          <path
            color="#9ca3af"
            fill="currentcolor"
            d="M6.70710678,15.7071081 C6.31658249,16.0976324 5.68341751,16.0976324 5.29289322,15.7071081 C4.90236893,15.3165838 4.90236893,14.6834188 5.29289322,14.2928945 L11.2928932,8.29289454 C11.6714722,7.9143156 12.2810586,7.90106998 12.6757246,8.26284718 L19.4313874,14.2942293 C19.8385064,14.6674217 19.8660094,15.2999891 19.4928169,15.7071081 C19.1196245,16.1142271 18.4870572,16.14173 18.0799382,15.7685376 L12.0300757,10.3841391 L6.70710678,15.7071081 Z"
            transform="rotate(90 12.378 12.016)"
          ></path>
        </g>
      </svg>
    </div>
  );
};

const NormarlBreadCrum = ({ crums }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {crums.map((data, index) => {
        return (
          <>
            <>{index !== 0 ? <ArrowIcon /> : null}</>
            <p className={styles.crumTitle}>{data}</p>
          </>
        );
      })}
    </div>
  );
};

export default NormarlBreadCrum;
