import ContactForm from "../components/contactForm";
import WaveBottom from "../components/waveBottom";
import styles from "./contactUs.module.css";
import Image from "next/image";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/contact-us`;

const title = "Contact N Is for Nature Play";
const description =
  "Contact Jena at N Is for Nature Play with questions about custom nature play space designs, sensory gardens, courses, ebooks, and outdoor learning resources.";

export const metadata = {
  title: {
    absolute: title,
  },

  description,

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "N Is for Nature Play",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact Us",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function ContactUs() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className={styles.contactTopper}>
        <div className={styles.content}>
          <Image
            src="/n-logo.png"
            alt="N is for Nature Play"
            width={300}
            height={150}
            className={styles.logo}
          />

          <h1> Contact N is Nature Play </h1>
          <h2>for more information about custom designs, courses and More</h2>
        </div>
      </div>

      <ContactForm />
    </main>
  );
}
