import Image from "next/image";
import Link from "next/link";
import styles from "./blog.module.css";

import WaveTop from "../components/waveTop";
import WaveBottom from "../components/waveBottom";
import ContactForm from "../components/contactForm";
import Arrows from "../components/arrows";
import OrganicButton from "../components/organicButton";
import BlogPosts from "./blogPosts";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/blog`;

export const metadata = {
  title: "Nature Play Blog",

  description:
    "Explore nature play, sensory development, outdoor learning, child development, and practical ways to create richer outdoor experiences for children.",

  alternates: {
    canonical: "/blog",
  },

  openGraph: {
    title: "Nature Play Blog",
    description:
      "Ideas, conversations, and resources about sensory-rich nature play, child development, outdoor learning, and creating spaces where children can thrive.",
    url: "/blog",
  },

  twitter: {
    title: "Nature Play Blog",
    description:
      "Explore sensory-rich nature play, outdoor learning, child development, and thoughtful spaces made for real childhood.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "Nature Play Blog",
      description:
        "Articles, podcasts, resources, and education about nature play, sensory development, outdoor learning, and child development.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      breadcrumb: {
        "@id": `${pageUrl}/#breadcrumb`,
      },
      inLanguage: "en-US",
    },

    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}/#breadcrumb`,
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
          name: "Blog",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function BlogPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            the N is for Nature Play Blog
            <span> Big ideas about little people & wild places</span>
          </h1>

          <p>
            Thoughts, resources, conversations, and practical guidance about
            nature play, sensory development, outdoor learning, and the spaces
            children grow up in.
          </p>
        </div>
      </section>

      <section className={styles.heroWave}>
        <WaveBottom wave="#f7f6f2" spacer="#338e74" />
      </section>

      <section className={styles.blog}>
        <BlogPosts />
      </section>

      <section className={styles.cta}>
        <WaveTop wave="#338e74" spacer="#afa9d2" />

        <div className={styles.ctaInner}>
          <h2>
            Ready to take all those
            <span>big ideas outside?</span>
          </h2>

          <p>
            If you are thinking about your own backyard, school, childcare
            center, park, or community space, tell Jena what you are working
            with.
          </p>

          <OrganicButton
            variant="white"
            href={"/contact-us"}
            fontSize={"2.7rem"}
          >
            Start A Project
          </OrganicButton>
        </div>
      </section>
    </main>
  );
}
