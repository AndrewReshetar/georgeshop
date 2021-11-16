import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
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
