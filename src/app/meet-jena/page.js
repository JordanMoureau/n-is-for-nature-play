import Image from "next/image";
import styles from "./meetJena.module.css";

import WaveTop from "../components/waveTop";
import WaveBottom from "../components/waveBottom";
import OrganicButton from "../components/organicButton";
import ContactForm from "../components/contactForm";
import TheGrid from "../components/theGrid";

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

const bigBox = {
  title: "Landscape Architect",
  text: "Professional design training gives every project a strong foundation in how outdoor spaces function, flow, and grow over time.",
  backgroundImage: "/jena-main.jpg",
};

const midBoxes = [
  {
    title: "Artist + Builder",
    text: "I love spaces with texture, movement, personality, color, and just enough weirdness to make them memorable.",
    altColor: true,
  },
  {
    title: "Garden Fanatic",
    text: "Plants are not decoration. They are part of the sensory experience, the play, the seasons, and the life of the space.",
    backgroundImage: "/garden-detail.jpg",
  },
];

const smallBoxes = [
  {
    title: "Nature Play Expert",
    text: "My work is grounded in how children move, regulate, imagine, explore, learn, and connect with the world around them.",
    altColor: true,
  },
  {
    backgroundImage: "/girl-with-flower.jpg",
    alt: "Child exploring flowers outdoors",
  },
  {
    title: "Mom of Twins",
    text: "Because every beautiful theory eventually has to survive contact with actual children.",
    altColor: false,
  },
];

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
              I have always been interested in how places make people feel.
            </h2>

            <p>
              Outdoor spaces can invite movement, quiet, curiosity, connection,
              imagination, and discovery — or they can tell us exactly where to
              stand and exactly what to do.
            </p>

            <p>I am drawn to the first kind.</p>

            <p>
              My work brings together landscape architecture, nature play,
              sensory awareness, creativity, planting, and the practical reality
              of designing spaces that real families, schools, and communities
              have to live with every day.
            </p>
          </div>
        </div>

        <WaveBottom wave="#cbdcbe" spacer="#338e74" />
      </section>

      <section className={styles.heroImage}>
        <Image
          src="/abouthero.png"
          alt="Children exploring a natural outdoor environment"
          width={1400}
          height={900}
          priority
        />
      </section>

      <section className={styles.story}>
        <WaveTop wave="#e4b928" spacer="#338e74" />

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

        <WaveBottom wave="#338e74" spacer="#e4b928" />
      </section>

      <section className={styles.grid}>
        <div className={styles.gridtop}>
          <h2>A little more about the person behind the plans</h2>

          <div className={styles.iconrow}>
            <Image src="/leaf-two.png" alt="" width={75} height={85} />
            <Image src="/shovel.png" alt="" width={75} height={80} />
          </div>

          <p>
            N Is for Nature Play lives at the intersection of the things I care
            about most: thoughtful design, childhood, gardens, creativity,
            making things, and helping people see more possibility in the spaces
            they already have.
          </p>
        </div>

        <TheGrid bigBox={bigBox} midBoxes={midBoxes} smallBoxes={smallBoxes} />
      </section>

      <section className={styles.work}>
        <WaveTop wave="#e4b928" spacer="#afa9d2" />

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
              variant="yellow"
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
        <div className={styles.ctaInner}>
          <h2>
            Have a space you cannot stop
            <span>thinking about?</span>
          </h2>

          <p>Tell me about it. We can figure out what it wants to become.</p>

          <OrganicButton variant="yellow" href="#contact" fontSize={"2.6rem"}>
            Start a Conversation
          </OrganicButton>
        </div>
      </section>

      <div id="contact">
        <ContactForm Top={"#338e74"} />
      </div>
    </main>
  );
}
