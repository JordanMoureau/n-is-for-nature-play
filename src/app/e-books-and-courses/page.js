import Image from "next/image";
import styles from "./ebooks.module.css";

import WaveTop from "../components/waveTop";
import WaveBottom from "../components/waveBottom";
import ContactForm from "../components/contactForm";
import Arrows from "../components/arrows";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/ebooks-courses`;

export const metadata = {
  title: "E-Books & Courses | Nature Play Resources",

  description:
    "Explore practical e-books and learning resources from N Is for Nature Play designed to help families understand sensory needs, nature play, and child-centered environments.",

  alternates: {
    canonical: "/ebooks-courses",
  },

  openGraph: {
    title: "E-Books & Courses | N Is for Nature Play",
    description:
      "Practical resources for creating sensory-rich, nature-connected spaces that support real children and real families.",
    url: "/ebooks-courses",
  },

  twitter: {
    title: "E-Books & Courses | N Is for Nature Play",
    description:
      "Explore practical nature play and sensory design resources from N Is for Nature Play.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "E-Books & Courses",
      description:
        "Digital resources about nature play, sensory development, and creating supportive environments for children.",
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
          name: "E-Books & Courses",
          item: pageUrl,
        },
      ],
    },
  ],
};

const ebooks = [
  {
    icon: "/icon-flower.png",
    title: "Nature Play for the 7 Senses",
    price: "$22",
    text: "A 30-page guide to understanding children's seven sensory systems and creating simple, budget-friendly nature play opportunities at home.",
    link: "/e-books-and-courses/nature-play-for-the-seven-senses",
    buttonText: "Explore the E-Book",
  },
  {
    icon: "/icon-pot.png",
    title: "Sensory Space Makeover",
    price: "$37",
    text: "Learn to see your home through your child's sensory lens and make practical changes that support more calm, regulation, connection, and everyday ease.",
    link: "/e-books-and-courses/sensory-space-make-over",
    buttonText: "Explore the Resource",
  },
];

export default function EbooksCoursesPage() {
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
            A little more knowledge can change
            <span>the way you see their world</span>
          </h1>

          <p>
            Practical resources for parents, caregivers, educators, and anyone
            who wants to better understand nature play, sensory needs, and the
            environments children grow in.
          </p>
        </div>
      </section>

      <section className={styles.intro}>
        <WaveBottom wave="#f7f6f2" spacer="#338e74" />
      </section>

      <section className={styles.resources} id="ebooks">
        <div className={styles.resourcesInner}>
          <div className={styles.resourcesHeading}>
            <h2>
              Start with something
              <span>you can use today.</span>
            </h2>
          </div>

          <div className={styles.ebookGrid}>
            {ebooks.map((ebook) => (
              <article className={styles.ebookCard} key={ebook.title}>
                <div className={styles.iconBox}>
                  <Image
                    src={ebook.icon}
                    alt=""
                    width={180}
                    height={180}
                    className={styles.ebookIcon}
                  />
                </div>

                <div className={styles.ebookContent}>
                  <p className={styles.eyebrow}>DIGITAL RESOURCE</p>

                  <h3>{ebook.title}</h3>

                  <p className={styles.price}>{ebook.price}</p>

                  <p className={styles.description}>{ebook.text}</p>

                  <a href={ebook.link} className={styles.resourceButton}>
                    {ebook.buttonText}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.courses} id="courses">
        <WaveTop wave="#f7f6f2" spacer="#338e74" />
        <div className={styles.coursesInner}>
          <div className={styles.constructionArt}>
            <Image
              src="/shovel.png"
              alt=""
              width={120}
              height={130}
              className={styles.shovel}
            />

            <Image
              src="/leaf-two.png"
              alt=""
              width={100}
              height={115}
              className={styles.leaf}
            />
          </div>

          <p className={styles.courseEyebrow}>COURSES</p>

          <h2>
            Something new is
            <span>growing here.</span>
          </h2>

          <p>
            Jena&apos;s online course library is currently being rebuilt. New
            learning experiences are on the way for parents, caregivers,
            educators, and professionals who want to understand children,
            sensory needs, nature play, and supportive spaces more deeply.
          </p>

          <div className={styles.underConstruction}>
            <span>Courses are currently under construction</span>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <WaveTop wave="#f7f6f2" spacer="#afa9d2" />

        <div className={styles.ctaInner}>
          <h2>
            Have a question about
            <span>where to start?</span>
          </h2>

          <p>
            Tell Jena a little about your child, your space, or what you are
            trying to understand. She can help point you toward the right place
            to begin.
          </p>

          <Arrows />
        </div>
      </section>

      <div id="contact">
        <ContactForm />
      </div>
    </main>
  );
}
