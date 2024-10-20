import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/components/stickyHeader.module.css";
import { useRouter } from "next/router";
import { IoMdCart } from "react-icons/io";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdMenu as HamMenu } from "react-icons/io";
import MenuIcon from "../icons/menuIcon";
import Accordion from "../../components/navigationAccordian";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const DraverComp = ({}) => {
  return (
    <div className={styles.drawerContainer}>
      <div className={styles.upperCont}>
        {/* <img src="/favicon.png" alt="Oojus: Kashi at one Place" className={styles.upperLogo} /> */}
        <h1>OOJUS</h1>
      </div>

      <div className={styles.lowerCont}>
        <Accordion title="Purchase Souvenirs">
          <p>Rudrakasha Beads</p>
          <p>Rudrakasha Malas</p>
          <p>Brass Idols</p>
          <p>Brass Idols</p>
        </Accordion>
        <Accordion title="Book Puja">
          <p>Griha Shanti puja</p>
          <p>Dash Mahavidya puja</p>
          <p>Kaal Sarp dosh puja</p>
        </Accordion>
        <Accordion title="Tour Packages">
          <p>Unique Moments in Kashi Sarnath - 5 Days Trip</p>
          <p>
            2 Days All-Inclusive Packages - Enjoy the serene beauty of kashi
          </p>
          <p>3 Days All-Inclusive Trip - Enjoy the spritual nature of kashi</p>
        </Accordion>

        <Accordion title="Shaligram">
          <p>Ram ji on Shaligram</p>
          <p>Mahalaxmi Shaligram</p>
          <p>Ganesh ji on Shaligram</p>
          <p>Laxmi Narayan on Shaligram</p>
        </Accordion>
        <Accordion title="Must Visit Places in Kashi">
          <p>Sarnath: Explore the birthplace of Buddhism.</p>
          <p>Kashi Vishwanath Temple: Pay homage to Lord Shiva.</p>
          <p>Dashashwamedh Ghat: Experience the famous Ganga Aarti.</p>
          <p>Assi Ghat: Relax with yoga by the river.</p>
          <p>Manikarnika Ghat: Witness the cycle of life and death.</p>
          <p>Ramnagar Fort: Discover royal history and artifacts.</p>
          <p>Tulsi Manas Temple: See verses of Ramayana engraved on walls.</p>

        </Accordion>
      </div>
    </div>
  );
};

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navClass, setNavClass] = useState("");
  const router = useRouter();
  const [fill, setFill] = useState("white");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const fullUrl = window.location.href;
      const domain = window.location.origin;

      console.log("Full URL:", fullUrl);
      console.log("Domain Name:", domain);
    }
  }, []);

  useEffect(() => {
    if (router.pathname === "/") {
      const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);

        if (position > 50) {
          setNavClass(styles.navScrolled);
          setFill(styles.svgScrolled);
        } else {
          setFill("white");

          setNavClass("");
        }
      };

      window.addEventListener("scroll", handleScroll);

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
        <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
          <DraverComp />
        </Drawer>
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
          <button className={styles.svgButton} onClick={toggleDrawer}>
            <MenuIcon fill={"black"} styles={`${styles.svgStyles} ${fill}`} />
          </button>
        </nav>
      </div>
    );
  }
};

export default NavBar;
