const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/blog`;

export const metadata = {
  title: "Nature Play Blog",

  description:
    "Explore practical articles about nature play, outdoor sensory activities, sensory gardens, forest school ideas, and nature-based learning for children.",

  alternates: {
    canonical: "/blog",
  },

  openGraph: {
    title: "Nature Play Blog",
    description:
      "Articles and practical resources about nature play, sensory activities, outdoor learning, forest school, and nature-based education.",
    url: "/blog",
    type: "website",
  },

  twitter: {
    title: "Nature Play Blog",
    description:
      "Explore practical articles about nature play, sensory activities, outdoor learning, and nature-based education.",
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
        "Articles about nature play, outdoor sensory activities, sensory gardens, forest school ideas, and nature-based learning for children.",
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
          name: "Forest school activities",
        },
        {
          "@type": "Thing",
          name: "Nature-based learning",
        },
        {
          "@type": "Thing",
          name: "Sensory garden design",
        },
      ],
      mainEntity: {
        "@id": `${pageUrl}/#blog`,
      },
      breadcrumb: {
        "@id": `${pageUrl}/#breadcrumb`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Blog",
      "@id": `${pageUrl}/#blog`,
      url: pageUrl,
      name: "N Is for Nature Play Blog",
      description:
        "Practical nature play ideas, outdoor sensory activities, educational resources, and guidance for parents and educators.",
      publisher: {
        "@id": `${siteUrl}/#organization`,
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
    </main>
  );
}
