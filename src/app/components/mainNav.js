import styles from "./mainNav.module.css";
import Link from "next/link";
import Image from "next/image";
import OrganicButton from "./organicButton";

export default function MainNav() {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <div className={styles.leftNav}>
          <Link href="/">home</Link>
          <Link href="/">design a space</Link>
          <Link href="/">meet jena</Link>
          <Link href="/">about nature play</Link>
        </div>

        <div className={styles.rightNav}>
          <Image
            src="/n-is-for-nature-play-logo.png"
            alt="N is for Nature Play logo"
            width={500}
            height={100}
            className={styles.logo}
            priority
          />

          <div className={styles.sider}>
            <div className={styles.courses}>
              <Link href="/">E-courses &amp; E-books</Link>
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
    </div>
  );
}
