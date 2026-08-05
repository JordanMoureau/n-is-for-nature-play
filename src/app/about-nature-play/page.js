const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/about-nature-play`;

export const metadata = {
  title: "What Is Nature Play?",

  description:
    "Learn what nature play is, why it matters for child development, and how outdoor sensory experiences support creativity, regulation, learning, and growth.",

  alternates: {
    canonical: "/about-nature-play",
  },

  openGraph: {
    title: "What Is Nature Play?",
    description:
      "Explore the benefits of nature play, outdoor sensory experiences, and child-led learning in natural environments.",
    url: "/about-nature-play",
    type: "article",
  },

  twitter: {
    title: "What Is Nature Play?",
    description:
      "Learn how nature play supports children’s sensory development, creativity, emotional regulation, and learning.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "What Is Nature Play?",
      description:
        "Learn what nature play is, why it matters for child development, and how outdoor sensory experiences support creativity, regulation, learning, and growth.",
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
          name: "Nature-based learning",
        },
        {
          "@type": "Thing",
          name: "Child development",
        },
      ],
      mainEntity: {
        "@id": `${pageUrl}/#article`,
      },
      breadcrumb: {
        "@id": `${pageUrl}/#breadcrumb`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}/#article`,
      headline: "What Is Nature Play?",
      description:
        "An introduction to nature play and the ways outdoor sensory experiences support children’s creativity, regulation, learning, and development.",
      url: pageUrl,
      mainEntityOfPage: {
        "@id": `${pageUrl}/#webpage`,
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
        "Nature-based learning",
        "Child-led play",
        "Early childhood development",
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
          name: "About Nature Play",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function AboutNaturePlayPage() {
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
