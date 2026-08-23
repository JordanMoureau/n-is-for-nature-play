import Image from "next/image";
import styles from "./aboutNaturePlay.module.css";

import WaveTop from "../components/waveTop";
import WaveBottom from "../components/waveBottom";
import OrganicButton from "../components/organicButton";
import ContactForm from "../components/contactForm";
import TheGrid from "../components/theGrid";

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

const cardContent = [
  {
    icon: "/icon-flower.png",
    title: "Design a Space",
    text: "Get guidance for creating a custom sensory-rich outdoor play area for your home, school, childcare center, or community space.",
    buttonText: "Start a Design Project",
    link: "/design",
  },
  {
    icon: "/icon-pot.png",
    title: "Learn to DIY",
    text: "Explore approachable guides for building outdoor play invitations, sensory gardens, and nature-based spaces at your own pace.",
    buttonText: "Shop eBooks",
    link: "/ebooks",
  },
  {
    icon: "/icon-net.png",
    title: "Take a Course",
    text: "Learn how to create nature play spaces step by step, with practical guidance you can actually use.",
    buttonText: "View Courses",
    link: "/courses",
  },
];

const bigBox = {
  title: "Teachers & Educators",
  text: "Nature gives children space to move, breathe, notice, dig, touch, climb, listen, and settle.",
  backgroundImage: "/hero.jpg",
};

const midBoxes = [
  {
    title: "Parents With a Vision",
    text: "Outdoor play builds balance, coordination, strength, confidence, and body awareness.",
    altColor: true,
  },
  {
    title: "Parks & Rec",
    text: "A stick can become a wand, a bridge, a tool, a sword, a fishing pole, or the entire plot of a tiny woodland opera.",
    backgroundImage: "/garden-detail.jpg",
  },
];

const smallBoxes = [
  {
    title: "Communities",
    text: "A stick can become a wand, a bridge, a tool, a sword, a fishing pole, or the entire plot of a tiny woodland opera.",
    altColor: true,
  },
  {
    backgroundImage: "/kids-bubbles.jpeg",
    alt: "Children exploring and playing outdoors",
  },
  {
    title: "Design a Space With Jena",
    text: "Fill out the contact form below to start a conversation about your outdoor space.",
    altColor: false,
  },
];

export default function AboutNaturePlayPage() {
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
            Outdoor Play spaces designed to help children explore, regulate,
            <span>Imagine & Grow</span>
          </h1>
          <p>
            N is for Nature Play helps families, schools, childcare centers, and
            outdoor learning programs turn ordinary outdoor areas into
            sensory-rich spaces for child-led exploration. Through custom
            design, e-books, and e-courses, we make nature play feel
            approachable, practical, and meaningful.
          </p>
        </div>
      </section>

      <section className={styles.intro}>
        <WaveTop wave="#e4b928" spacer="#cbdcbe" />
        <div className={styles.introBox}>
          <Image
            src="/abouthero.png"
            alt="Jena, founder of N Is for Nature Play"
            width={1400}
            height={900}
            priority
          />
          <div className={styles.introInner}>
            <h2>Children need more than playground equipment</h2>

            <p>
              Nature play gives children room to move, dig, climb, collect,
              pretend, build, observe, rest, and connect. A good outdoor space
              does not need to be fancy or perfect. It needs to invite real play
              — the kind that supports the whole child.
            </p>
          </div>
        </div>
        <WaveBottom wave="#cbdcbe" spacer="#338e74" />
      </section>

      <section className={styles.heroImage}>
        <Image
          src="/watercolor-two.png"
          alt="Jena, founder of N Is for Nature Play"
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
              Mud, sticks, gardens, pathways, quiet corners, and wild little
              worlds.
            </h2>

            <p>
              Kids need places to dig, climb, build, hide, imagine, wander,
              notice, make messes, test their bodies, and discover what happens
              when nobody tells them exactly how to play. Nature gives children
              something manufactured play spaces often can’t: an environment
              that changes with them. Sticks become tools. Mud becomes a
              kitchen. Plants become hiding places. Uneven ground becomes a
              challenge. Good outdoor design doesn’t control that experience. It
              creates the conditions for it.
            </p>
          </div>

          <div className={styles.cards}>
            <div className={styles.cardsBox}>
              {cardContent.map((card) => (
                <div className={styles.card} key={card.title}>
                  <img src={card.icon} alt="" className={styles.cardIcon} />
                  <div className={styles.inner}>
                    <h3>{card.title}</h3>

                    <p>{card.text}</p>
                  </div>
                  <div className={styles.buttonplacement}>
                    <OrganicButton
                      variant="yellowPlain"
                      href={card.link}
                      fontSize={"2.6rem"}
                    >
                      {card.buttonText}
                    </OrganicButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <WaveBottom wave="#338e74" spacer="#e4b928" />
      </section>

      <div className={styles.grid}>
        <div className={styles.gridtop}>
          <h2>Who We Work With</h2>
          <div className={styles.iconrow}>
            <Image src="/leaf-two.png" alt="" width={75} height={85} />
            <Image src="/shovel.png" alt="" width={75} height={80} />
          </div>
          <p>
            Nature Play isn’t just about entertainment. It has documented
            pysiological benefits to children and we know how to build spaces to
            enhance those benefits.
          </p>
        </div>
        <TheGrid bigBox={bigBox} midBoxes={midBoxes} smallBoxes={smallBoxes} />
      </div>

      <ContactForm Top={"#338e74"} />
    </main>
  );
}
