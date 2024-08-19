import Link from "next/link";
import styles from "../../styles/Carosel.module.css";
import Image from "next/image";

import { IconContext } from "react-icons";
import { CiMobile1, CiSearch, CiShoppingCart } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";

const NavBar = () => (
  <div className={styles.navContainer}>
    <nav className={styles.flexCont}>


      <div className={styles.rgtCont}>
        <Link className={styles.navIcon} href="/">
          <IconContext.Provider
            value={{
              color: "white",
              size: "1.6em",
              style: { verticalAlign: "middle",
                // width: 33,
                // height: 30,
                // borderRadius:50,
                // padding:10,
                // paddingTop:3
               },
            }}
          >
            <IoMenuOutline />
          </IconContext.Provider>
        </Link>

        <Image
          src="https://www.adanione.com/static-assets/images/svg/adanione-white.svg"
          width="118"
          height="30"
          alt="Oojus: Kashi at One Step"
        />
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
        <Link className={styles.navIcon} href="/">
          <IconContext.Provider
            value={{
              color: "white",
              size: "1.6em",
              style: { verticalAlign: "middle", marginTop: -3 },
            }}
          >
            <CiSearch />
          </IconContext.Provider>
        </Link>

        <Link className={styles.navIcon} href="/">
          <IconContext.Provider
            value={{
              color: "white",
              size: "1.6em",
              style: { verticalAlign: "middle", marginTop: -3 },
            }}
          >
            <CiShoppingCart />
          </IconContext.Provider>
        </Link>
      </div>
    </nav>
  </div>
);

export default NavBar;
