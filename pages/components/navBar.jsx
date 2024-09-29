import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/components/stickyHeader.module.css";
import { useRouter } from "next/router";

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navClass, setNavClass] = useState("");
  const router = useRouter(); // Hook to get the current route

  useEffect(() => {
    // Check if the current path is `/`
    if (router.pathname === "/") {
      const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);

        if (position > 50) {
          setNavClass(styles.navScrolled); // Add white background and black text
        } else {
          setNavClass(""); // Reset to transparent background
        }
      };

      // Add scroll event listener if on root path
      window.addEventListener("scroll", handleScroll);

      // Cleanup scroll event listener when component unmounts or path changes
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setNavClass(styles.navScrolled);
    }
  }, [router.pathname]); // Run effect when the path changes
  if (router.pathname !== "/login") {
    return (
      <div
        className={`${styles.navContainer} ${navClass}`}
        style={{
          marginBottom: router.pathname === "/" ? "-100px" : null,
        }}
      >
        <nav className={styles.flexCont}>
          <div className={styles.rgtCont}>
            <h1 className={styles.logoText}>OOJUS</h1>
          </div>
          <div>
            <Link className={styles.navItem} href="/">
              Home
            </Link>
            <Link className={styles.navItem} href="/about">
              Shastri Consultancy
            </Link>
            <Link className={styles.navItem} href="/">
              Book a Pooja
            </Link>
            <Link className={styles.navItem} href="/">
              Tour Packages
            </Link>
            <Link className={styles.navItem} href="/">
              Purchase Gifts
            </Link>
            {/* <Link className={styles.navIcon} href="/">
            <IconContext.Provider
              value={{
                color: "inherit",
                size: "1.6em",
                style: { verticalAlign: "middle", marginTop: -3 },
              }}
            >
              <CiShoppingCart />
            </IconContext.Provider>
          </Link> */}
          </div>
        </nav>
      </div>
    );
  }
};

export default NavBar;
