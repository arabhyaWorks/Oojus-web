import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "..//../styles/components/tab.module.css";

const Tabs = ({ children }) => {
  const [active, setActive] = useState(0);
  const router = useRouter();
  const { tab } = router.query;

  useEffect(() => {
    if (!tab) return;

    const index = children.map((child) => child.key).indexOf(tab);

    if (index < 0) return;

    setActive(index);
  }, [router.query]);

  const handleClick = (e, index, cb = () => {}) => {
    e.preventDefault();

    router.push({ query: { ...router.query, tab: index } });
    setActive(index);
    cb && cb();
  };

  return (
    <div style={{ color: "black" }} className={styles.tabs}>
      <div className={styles.tabs__navigation}>
        {children.map((child, index) => (
          <a
            href="#"
            // style={{ margin: 10 }}
            className={` ${styles.tabs__navigation__item} ${
              index === active ? styles.active : ""
            }`}
            key={`tab-${index}`}
            onClick={(e) => handleClick(e, child.key, child.props.onClick)}
          >
            {child.props.title}
          </a>
        ))}
      </div>
      <div className={styles.tabs__body}>{children[active]}</div>
    </div>
  );
};

export default Tabs;
