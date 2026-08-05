const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/meet-jenna`;

export const metadata = {
  title: "Meet Jenna | Nature Play & Sensory Design Expert",

  description:
    "Meet Jenna, the landscape architect and sensory-play expert behind N Is for Nature Play, helping families and educators create meaningful outdoor spaces.",

  alternates: {
    canonical: "/meet-jenna",
  },

  openGraph: {
    title: "Meet Jenna | N Is for Nature Play",
    description:
      "Learn about Jenna’s experience in landscape architecture, sensory play, nature-based learning, and outdoor environment design.",
    url: "/meet-jenna",
    type: "profile",
  },

  twitter: {
    title: "Meet Jenna | N Is for Nature Play",
    description:
      "Meet the landscape architect and sensory-play expert behind N Is for Nature Play.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "Meet Jenna",
      description:
        "Meet Jenna, the landscape architect and sensory-play expert behind N Is for Nature Play.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#jenna`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/jenna-nature-play.jpg`,
      },
      breadcrumb: {
        "@id": `${pageUrl}/#breadcrumb`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#jenna`,
      name: "Jenna",
      url: pageUrl,
      image: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/jenna-nature-play.jpg`,
      },
      jobTitle: [
        "Landscape Architect",
        "Nature Play Consultant",
        "Sensory Play Expert",
      ],
      description:
        "Landscape architect, nature play consultant, and sensory-play expert helping families, educators, and organizations create meaningful outdoor environments for children.",
      worksFor: {
        "@id": `${siteUrl}/#organization`,
      },
      knowsAbout: [
        "Nature play",
        "Landscape architecture",
        "Sensory play",
        "Sensory garden design",
        "Natural playground design",
        "Outdoor classroom design",
        "Nature-based learning",
        "Early childhood outdoor environments",
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
          name: "Meet Jenna",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function MeetJennaPage() {
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
