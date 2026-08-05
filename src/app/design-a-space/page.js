const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/design-a-space`;

export const metadata = {
  title: "Design a Nature Play Space",

  description:
    "Plan a thoughtful nature play space with expert guidance for sensory gardens, natural playgrounds, outdoor classrooms, and child-centered learning environments.",

  alternates: {
    canonical: "/design-a-space",
  },

  openGraph: {
    title: "Design a Nature Play Space",
    description:
      "Get expert guidance designing sensory-rich outdoor play and learning environments for children.",
    url: "/design-a-space",
    type: "website",
  },

  twitter: {
    title: "Design a Nature Play Space",
    description:
      "Plan a sensory-rich nature play space, natural playground, or outdoor classroom with expert guidance.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "Design a Nature Play Space",
      description:
        "Plan a thoughtful nature play space with expert guidance for sensory gardens, natural playgrounds, outdoor classrooms, and child-centered learning environments.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: [
        {
          "@type": "Thing",
          name: "Nature play space design",
        },
        {
          "@type": "Thing",
          name: "Sensory garden design",
        },
        {
          "@type": "Thing",
          name: "Natural playground design",
        },
        {
          "@type": "Thing",
          name: "Outdoor classroom design",
        },
      ],
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/design-a-nature-play-space.jpg`,
      },
      breadcrumb: {
        "@id": `${pageUrl}/#breadcrumb`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "Nature Play Space Design",
      url: pageUrl,
      description:
        "Professional guidance for designing nature play spaces, sensory gardens, natural playgrounds, and outdoor learning environments for children.",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      serviceType: [
        "Nature play space design",
        "Sensory garden design",
        "Natural playground design",
        "Outdoor classroom design",
      ],
      audience: [
        {
          "@type": "Audience",
          audienceType: "Parents",
        },
        {
          "@type": "Audience",
          audienceType: "Educators",
        },
        {
          "@type": "Audience",
          audienceType: "Schools and early childhood programs",
        },
      ],
      mainEntityOfPage: {
        "@id": `${pageUrl}/#webpage`,
      },
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
          name: "Design a Space",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function DesignASpacePage() {
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
