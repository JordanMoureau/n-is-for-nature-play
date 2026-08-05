const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/the-ultimate-diy-guide`;

export const metadata = {
  title: "The Ultimate DIY Nature Play Guide",

  description:
    "Create an engaging nature play space with a practical DIY guide covering sensory play, outdoor learning, natural materials, and child-led exploration.",

  alternates: {
    canonical: "/the-ultimate-diy-guide",
  },

  openGraph: {
    title: "The Ultimate DIY Nature Play Guide",
    description:
      "A practical guide to creating sensory-rich, child-led nature play spaces using natural materials and thoughtful outdoor design.",
    url: "/the-ultimate-diy-guide",
    type: "article",
  },

  twitter: {
    title: "The Ultimate DIY Nature Play Guide",
    description:
      "Create a sensory-rich nature play space with practical guidance for natural materials, outdoor learning, and child-led play.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "The Ultimate DIY Nature Play Guide",
      description:
        "Create an engaging nature play space with a practical DIY guide covering sensory play, outdoor learning, natural materials, and child-led exploration.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: [
        {
          "@type": "Thing",
          name: "Nature play",
        },
        {
          "@type": "Thing",
          name: "Outdoor sensory play",
        },
        {
          "@type": "Thing",
          name: "Nature play space design",
        },
      ],
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/ultimate-diy-nature-play-guide.jpg`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}/#article`,
      headline: "The Ultimate DIY Nature Play Guide",
      description:
        "A practical guide to creating sensory-rich, child-led nature play spaces using natural materials and thoughtful outdoor design.",
      url: pageUrl,
      mainEntityOfPage: {
        "@id": `${pageUrl}/#webpage`,
      },
      image: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/ultimate-diy-nature-play-guide.jpg`,
      },
      author: {
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      about: [
        "Nature play",
        "Outdoor sensory play",
        "Natural playground design",
        "Backyard nature play areas",
        "Nature-based learning",
      ],
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
          name: "The Ultimate DIY Nature Play Guide",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function UltimateDiyGuidePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}
