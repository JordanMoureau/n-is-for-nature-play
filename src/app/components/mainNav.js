"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import styles from "./mainNav.module.css";
import Link from "next/link";
import Image from "next/image";
import OrganicButton from "./organicButton";

export default function MainNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <div className={styles.leftNav}>
          <Link href="/">
            <span>home</span>
          </Link>

          <Link href="/design-a-space">
            <span>design a space</span>
          </Link>

          <Link href="/meet-jena">
            <span>meet jena</span>
          </Link>

          <Link href="/about-nature-play">
            <span>about nature play</span>
          </Link>
        </div>

        <div className={styles.rightNav}>
          <div className={styles.logoRow}>
            <Image
              src="/n-is-for-nature-play-logo.png"
              alt="N is for Nature Play logo"
              width={500}
              height={100}
              className={styles.logo}
              priority
            />

            <button
              className={styles.menuToggle}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />

              <motion.span
                animate={
                  menuOpen
                    ? { opacity: 0, scaleX: 0 }
                    : { opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.2 }}
              />

              <motion.span
                animate={
                  menuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.25 }}
              />
            </button>
          </div>

          <div className={styles.sider}>
            <div className={styles.courses}>
              <Link href="/e-books-and-courses">E-courses &amp; E-books</Link>
            </div>

            <OrganicButton variant="lavender" href="/contact-us">
              Contact Us
            </OrganicButton>

            <div className={styles.socialLinks}>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <Image
                  src="/instagram-icon.png"
                  alt=""
                  width={42}
                  height={42}
                  className={styles.socialIcon}
                />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <Image
                  src="/facebook-icon.png"
                  alt=""
                  width={42}
                  height={42}
                  className={styles.socialIcon}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{
              opacity: 0,
              y: -140,
              rotate: -3,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: [-3, 2, -1, 0],
              scale: [0.92, 1.04, 0.98, 1],
            }}
            exit={{
              opacity: 0,
              y: -120,
              rotate: 2,
              scale: 0.94,
            }}
            transition={{
              duration: 0.65,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            <div className={styles.mobileLinks}>
              <Link href="/" onClick={closeMenu}>
                home
              </Link>

              <Link href="/design-a-space" onClick={closeMenu}>
                design a space
              </Link>

              <Link href="/meet-jena" onClick={closeMenu}>
                meet jena
              </Link>

              <Link href="/about-nature-play" onClick={closeMenu}>
                about nature play
              </Link>
            </div>

            <div className={styles.mobileSocialLinks}>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image
                  src="/instagram-icon.png"
                  alt=""
                  width={42}
                  height={42}
                  className={styles.socialIcon}
                />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Image
                  src="/facebook-icon.png"
                  alt=""
                  width={42}
                  height={42}
                  className={styles.socialIcon}
                />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
