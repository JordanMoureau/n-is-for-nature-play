const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/e-books-and-courses`;

export const metadata = {
  title: "Nature Play E-Books & Online Courses",

  description:
    "Explore nature play e-books and online courses for parents, educators, and early childhood professionals creating sensory-rich outdoor learning experiences.",

  alternates: {
    canonical: "/e-books-and-courses",
  },

  openGraph: {
    title: "Nature Play E-Books & Online Courses",
    description:
      "Practical nature play guides and online courses for creating sensory-rich outdoor play and learning environments for children.",
    url: "/e-books-and-courses",
    type: "website",
  },

  twitter: {
    title: "Nature Play E-Books & Online Courses",
    description:
      "Explore practical e-books and courses for nature play, sensory learning, and outdoor education.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "Nature Play E-Books & Online Courses",
      description:
        "Nature play e-books and online courses for parents, educators, and early childhood professionals creating sensory-rich outdoor learning experiences.",
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
          name: "Early childhood outdoor education",
        },
      ],
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/nature-play-ebooks-courses.jpg`,
      },
      breadcrumb: {
        "@id": `${pageUrl}/#breadcrumb`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}/#resources`,
      name: "Nature Play E-Books and Courses",
      itemListOrder: "https://schema.org/ItemListUnordered",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Course",
            name: "Nature Play Online Courses",
            url: `${pageUrl}#courses`,
            description:
              "Online educational courses covering nature play, sensory learning, and outdoor environments for children.",
            provider: {
              "@id": `${siteUrl}/#organization`,
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Book",
            name: "Nature Play E-Books",
            url: `${pageUrl}#ebooks`,
            description:
              "Digital guides and educational resources about nature play, sensory activities, and outdoor learning.",
            publisher: {
              "@id": `${siteUrl}/#organization`,
            },
          },
        },
      ],
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
          name: "E-Books and Courses",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function EbooksAndCoursesPage() {
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
