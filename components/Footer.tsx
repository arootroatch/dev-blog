import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import { FaGithub,  FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.leftColumn}>
          <p>Designed and developed by Alex Root-Roatch, Copyright © 2024</p>
          <p>All Rights Reserved</p>
        </div>
        <div>
          <p>
            <a href='#top' className={styles.top}>
              Back to top
            </a>
          </p>
          <Link
            href='www.linkedin.com/in/arootroatch'
            className={styles.navIcon}
          >
            <FaLinkedin className={styles.icon} />
          </Link>
          <Link
            href='https://github.com/arootroatch'
            className={styles.navIcon}
          >
            <FaGithub className={styles.icon} />
          </Link>
          <Link
            href='https://twitter.com/ARootRoatch'
            className={styles.navIcon}
          >
            <FaXTwitter className={styles.icon} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
