import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/components/stickyHeader.module.css";
import { useRouter } from "next/router";
import { IoMdCart } from "react-icons/io";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdMenu as HamMenu} from "react-icons/io";
import MenuIcon from '../icons/menuIcon';


const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navClass, setNavClass] = useState("");
  const router = useRouter();
  const [fill, setFill] = useState("white")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const fullUrl = window.location.href; // Full URL
      const domain = window.location.origin; // Domain name (http://localhost:3000)

      console.log("Full URL:", fullUrl);
      console.log("Domain Name:", domain); // Outputs: http://localhost:3000
    }
  }, []);

  useEffect(() => {
    // Check if the current path is `/`
    if (router.pathname === "/") {
      const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);

        if (position > 50) {
          setNavClass(styles.navScrolled); // Add white background and black text
          setFill(styles.svgScrolled)
        } else {
          setFill("white")

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
  }, [router.pathname]);

  if (
    ["/login", "/otpScreen", "/testingPayments", "/signup"].some((route) =>
      router.pathname.includes(route)
    )
  ) {
    return null;
  } else {
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
          <div className={styles.navItemContainer}>
            <Link className={styles.navItem} href="/">
              Home
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
            <Link
              onClick={() => {
                localStorage.clear();
                router.push("/login");
              }}
              className={styles.navItem}
              href="/"
            >
              Logout
            </Link>
            <Link className={styles.navItem} href="/bookings">
              Bookings
            </Link>
          </div>
            <MenuIcon fill={'black'} styles={`${styles.svgStyles} ${fill}`}/>
        </nav>
      </div>
    );
  }
};

export default NavBar;
