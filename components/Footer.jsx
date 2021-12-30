import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <span>composergeorgeresh@gmail.com</span>
      </div>
      <ul>
        <Link href="/terms_and_conditions" passHref>
          <li>Terms and Conditions</li>
        </Link>
        <Link href="/refund_policy" passHref>
          <li>Refund Policy</li>
        </Link>
      </ul>
    </div>
  );
};

export default Footer;
