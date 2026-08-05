import ContactForm from "./components/contactForm";
import WaveBottom from "./components/waveBottom";
import styles from "./page.module.css";

import Image from "next/image";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

export const metadata = {
  title: "Nature Play Spaces, Sensory Gardens & Outdoor Learning",

  description:
    "Create meaningful nature play spaces for children with consulting, sensory garden design, outdoor learning courses, ebooks, and practical resources.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Nature Play Spaces, Sensory Gardens & Outdoor Learning",
    description:
      "Create meaningful nature play spaces with expert consulting, sensory garden design, courses, ebooks, and educational resources.",
    url: "/",
  },

  twitter: {
    title: "Nature Play Spaces, Sensory Gardens & Outdoor Learning",
    description:
      "Consulting and resources for creating meaningful outdoor play and learning environments for children.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "N Is for Nature Play",
      description:
        "Nature play consulting, sensory garden design, outdoor learning resources, courses, and ebooks.",
      inLanguage: "en-US",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: "N Is for Nature Play",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.png`,
      },
      image: `${siteUrl}/images/nature-play-og.jpg`,
      description:
        "Nature play consulting and educational resources for parents, educators, schools, and early childhood programs.",
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      knowsAbout: [
        "Nature play",
        "Sensory garden design",
        "Natural playground design",
        "Outdoor classroom design",
        "Outdoor sensory play",
        "Nature-based early childhood education",
        "Landscape architecture",
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Nature Play Spaces, Sensory Gardens & Outdoor Learning",
      description:
        "Create meaningful nature play spaces for children with consulting, sensory garden design, outdoor learning courses, ebooks, and practical resources.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#organization`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/nature-play-home-hero.jpg`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#services`,
      name: "Nature Play Services and Resources",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Service",
            name: "Nature Play Consulting",
            url: `${siteUrl}/consulting`,
            description:
              "Professional guidance for nature play spaces, sensory gardens, outdoor classrooms, and natural learning environments.",
            provider: {
              "@id": `${siteUrl}/#organization`,
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Course",
            name: "Nature Play Courses",
            url: `${siteUrl}/courses`,
            description:
              "Educational courses for creating nature-based play and learning experiences for children.",
            provider: {
              "@id": `${siteUrl}/#organization`,
            },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "CreativeWork",
            name: "Nature Play Ebooks",
            url: `${siteUrl}/ebooks`,
            description:
              "Practical ebooks and downloadable resources about nature play, sensory environments, and outdoor learning.",
            publisher: {
              "@id": `${siteUrl}/#organization`,
            },
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className={styles.hero}>
        <div className={styles.content}>
          <Image
            src="/n-logo.png"
            alt="N is for Nature Play"
            width={300}
            height={150}
            className={styles.logo}
          />

          <h1>from ABC to Nature Play</h1>
          <h2>
            Build outdoor play spaces that help kids explore, regulate & grow
          </h2>
        </div>

        <WaveBottom wave="#f7f6f2" spacer="#afa9d2" />
      </div>

      <div className={styles.heroImage}>
        <Image
          src={"/hero.jpg"}
          alt="N is for Nature Play"
          width={1200}
          height={800}
        />
      </div>

      <ContactForm />
    </main>
  );
}
