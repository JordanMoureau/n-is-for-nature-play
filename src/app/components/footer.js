import Image from "next/image";
import Link from "next/link";

import styles from "./footer.module.css";
import OrganicButton from "./organicButton";

const leftLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Design a Space",
    href: "/design-a-space",
  },
  {
    label: "Meet Jena",
    href: "/meet-jena",
  },
  {
    label: "About Nature Play",
    href: "/about-nature-play",
  },
  {
    label: "Contact",
    href: "/contact-us",
  },
];

const rightLinks = [
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "E-Books & Courses",
    href: "/e-books-and-courses",
  },
  {
    label: "The Ultimate DIY Guide",
    href: "/the-ultimate-diy-guide",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/n-is-for-nature-play-footer-logo.png"
            alt="N Is for Nature Play"
            width={520}
            height={430}
            className={styles.footerLogo}
          />
        </Link>

        <div className={styles.navigation}>
          <h2>Get Around</h2>

          <div className={styles.linkColumns}>
            <div className={styles.linkColumn}>
              {leftLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>

            <div className={styles.linkColumn}>
              {rightLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <div className={styles.findUsRow}>
            <h2>Find Us</h2>

            <div className={styles.socials}>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image
                  src="/instagram-icon.png"
                  alt=""
                  width={48}
                  height={48}
                />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Image src="/facebook-icon.png" alt="" width={48} height={48} />
              </a>
            </div>
          </div>

          <Link href="/contact-us">
            <OrganicButton variant="lavender" fontSize="3rem" href="/contact">
              Contact Us
            </OrganicButton>
          </Link>

          <Link href="/design-a-space">
            <OrganicButton
              variant="whiteOutline"
              fontSize="3rem"
              href="/design-a-space"
            >
              Create a Space
            </OrganicButton>
          </Link>
        </div>
      </div>
    </footer>
  );
}
