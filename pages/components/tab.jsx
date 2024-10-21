import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/components/tab.module.css";

const Tabs = ({ children = [] }) => {
  const [active, setActive] = useState(0);
  const router = useRouter();
  const { tab } = router.query;

  // Ensure `children` is an array
  const tabsArray = Array.isArray(children) ? children : [children];

  useEffect(() => {
    if (!tab) return;

    const index = tabsArray.map((child) => child.key).indexOf(tab);

    if (index >= 0) {
      setActive(index);
    }
  }, [router.query, tab, tabsArray]);

  const handleClick = (e, index, cb = () => {}) => {
    e.preventDefault();

    router.push({ query: { ...router.query, tab: index } });
    setActive(index);
    cb && cb();
  };

  return (
    <div style={{ color: "black" }} className={styles.tabs}>
      <div className={styles.tabs__navigation}>
        {tabsArray.map((child, index) => (
          <a
            href="#"
            className={` ${styles.tabs__navigation__item} ${
              index === active ? styles.active : ""
            }`}
            key={`tab-${index}`}
            onClick={(e) => handleClick(e, index, child.props.onClick)}
          >
            {child.props.title}
          </a>
        ))}
      </div>
      <div className={styles.tabs__body}>{tabsArray[active]}</div>
    </div>
  );
};

export default Tabs;