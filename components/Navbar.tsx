"use client";
import styles from "./navbar.module.css";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { Posts } from "@/lib/interfaces";
import ThemeButton from "./ThemeButton";

export default function Navbar({ posts }: { posts: Posts[] }) {
  const [open, setOpen] = useState(false);


  function toggleMobileNav() {
    setOpen(!open);
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.navWrapper}>
        <div className={styles.leftWrapper}>Alex's Coding Blog</div>
        <div className={styles.rightWrapper}>
          <div className={`${styles.linkWrapper} ${open && styles.open}`}>
            <ul>
              <li className={`${styles.navLink}`}>
                <Link onClick={toggleMobileNav} href='/'>
                  Posts
                </Link>
              </li>
              <li className={`${styles.navLink}`}>
                <Link
                  onClick={toggleMobileNav}
                  href='https://arootroatch-dev.vercel.app'
                  target="_blank"
                >
                  Portfolio
                </Link>
              </li>

              <li className={styles.navLink}>
                <Link
                  onClick={toggleMobileNav}
                  href='https://arootroatch-dev.vercel.app/#contact'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.iconWrapper}>
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
            <span className={styles.separator}>|</span>
            <SearchBar posts={posts} />
            <ThemeButton />
            <Link href='' onClick={toggleMobileNav}>
              <RxHamburgerMenu className={styles.hamburger} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
