import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.scss";

const Header = () => {
  const [navbarStyle, setNavbarStyle] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbarStyle(true);
    } else {
      setNavbarStyle(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }

  return (
    <header className={`${!navbarStyle ? styles.header : styles.headerActive}`}>
      <nav className={styles.nav}>
        <ul>
          <Link href="/" passHref>
            <li>Home</li>
          </Link>
          <Link href="/about" passHref>
            <li>About</li>
          </Link>
          <Link href="/shop" passHref>
            <li>Shop</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
