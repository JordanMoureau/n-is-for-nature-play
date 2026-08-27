import Image from "next/image";
import styles from "./meetJena.module.css";

import WaveTop from "../components/waveTop";
import WaveBottom from "../components/waveBottom";
import OrganicButton from "../components/organicButton";
import ContactForm from "../components/contactForm";
import TheGrid from "../components/theGrid";
import Arrows from "../components/arrows";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/meet-jenna`;

export const metadata = {
  title: "Meet Jena | N Is for Nature Play",

  description:
    "Meet Jena, landscape architect, nature play designer, artist-builder, garden fanatic, and mom behind N Is for Nature Play.",

  alternates: {
    canonical: "/meet-jenna",
  },

  openGraph: {
    title: "Meet Jena | N Is for Nature Play",
    description:
      "Meet the landscape architect and nature play designer behind N Is for Nature Play.",
    url: "/meet-jenna",
  },

  twitter: {
    title: "Meet Jena | N Is for Nature Play",
    description:
      "Meet Jena, landscape architect, nature play designer, artist-builder, garden fanatic, and mom.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "Meet Jena",
      description:
        "Meet Jena, landscape architect, nature play designer, artist-builder, garden fanatic, and mom behind N Is for Nature Play.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${pageUrl}/#person`,
      },
      breadcrumb: {
        "@id": `${pageUrl}/#breadcrumb`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": `${pageUrl}/#person`,
      name: "Jena",
      jobTitle: "Landscape Architect and Nature Play Designer",
      description:
        "Landscape architect, nature play designer, artist-builder, garden enthusiast, and founder of N Is for Nature Play.",
      worksFor: {
        "@id": `${siteUrl}/#organization`,
      },
      knowsAbout: [
        "Landscape architecture",
        "Nature play",
        "Sensory garden design",
        "Outdoor learning environments",
        "Natural playground design",
        "Child-centered outdoor design",
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
          name: "Meet Jena",
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

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            Hi, I’m Jena.
            <span>I design places where childhood gets to happen.</span>
          </h1>

          <p>
            Landscape architect, nature play designer, artist-builder, garden
            fanatic, and mom of twins.
          </p>
        </div>
      </section>

      <section className={styles.intro} id="story">
        <WaveTop wave="#e4b928" spacer="#cbdcbe" />

        <div className={styles.introBox}>
          <Image
            src="/jena-main.jpg"
            alt="Jena, founder of N Is for Nature Play"
            width={1000}
            height={1000}
            priority
          />

          <div className={styles.introInner}>
            <h2>
              I have always been interested in how spaces make people feel.
            </h2>

            <p>
              Outdoor spaces can invite movement, quiet, curiosity, connection,
              imagination, and discovery — or they can tell us exactly where to
              stand and exactly what to do. I am drawn to the first kind. My
              work brings together landscape architecture, nature play, sensory
              awareness, creativity, planting, and the practical reality of
              designing spaces that real families, schools, and communities have
              to live with every day.
            </p>
          </div>
        </div>

        <WaveBottom wave="#cbdcbe" spacer="#338e74" />
      </section>

      <section className={styles.heroImage}>
        <Image
          src="/kids-bubbles.jpeg"
          alt="Children exploring a natural outdoor environment"
          width={1400}
          height={900}
          priority
        />
      </section>

      <section className={styles.story}>
        <WaveTop wave="#e4b928" spacer="#f7f6f2" />

        <div className={styles.storyInner}>
          <div className={styles.storyText}>
            <h2>
              I believe children deserve spaces that leave room for surprise.
            </h2>

            <p>
              A child does not need every experience designed for them. They
              need places where they can make choices, test ideas, move their
              bodies, notice small things, invent games, get muddy, find quiet,
              build something strange, and change their minds halfway through.
            </p>

            <p>That is what I want a good nature play space to do.</p>

            <p>
              My job is not to control the play. My job is to create the
              conditions that make richer play possible.
            </p>
          </div>
        </div>

        <WaveBottom wave="#f7f6f2" spacer="#e4b928" />
      </section>

      <section className={styles.work}>
        <div className={styles.workInner}>
          <div className={styles.workText}>
            <h2>
              Working together should feel
              <span>creative, practical & collaborative.</span>
            </h2>

            <p>
              You do not need to arrive with a finished idea. You can come with
              a messy yard, a strange corner of a playground, twenty saved
              inspiration photos, one very specific dream, or simply the feeling
              that the space could be better.
            </p>

            <p>
              We start with what is there, who uses it, what matters to you, and
              what the space needs to do. Then we build from there.
            </p>

            <OrganicButton
              variant="yellowPlain"
              href="/design-a-space"
              fontSize={"2.4rem"}
            >
              Design a Space
            </OrganicButton>
          </div>

          <div className={styles.workImage}>
            <Image
              src="/kids-leaf.jpeg"
              alt="Children playing outdoors"
              width={800}
              height={800}
            />
          </div>
        </div>

        <WaveBottom wave="#afa9d2" spacer="#338e74" />
      </section>

      <section className={styles.cta}>
        <WaveTop wave={"#afa9d2"} spacer={"#f7f6f2"} />
        <div className={styles.ctaInner}>
          <h2>
            Have a space you cannot stop
            <span>thinking about?</span>
          </h2>
          <Arrows />
        </div>
      </section>

      <div id="contact">
        <ContactForm Top={"#338e74"} />
      </div>
    </main>
  );
}
