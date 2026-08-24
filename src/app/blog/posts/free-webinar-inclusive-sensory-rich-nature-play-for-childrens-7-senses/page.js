import Image from "next/image";
import Link from "next/link";

import styles from "../posts.module.css";

import WaveBottom from "@/app/components/waveBottom";
import WaveTop from "@/app/components/waveTop";

import PostHighlights from "../postHighlight";
import OrganicButton from "@/app/components/organicButton";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/free-webinar-inclusive-sensory-rich-nature-play-for-childrens-7-senses/`;

export const metadata = {
  title:
    "Inclusive Sensory-Rich Nature Play for Children’s 7 Senses | Free Webinar",

  description:
    "Watch Jena Ponti Jauchius explore children’s seven sensory systems, sensory-rich nature play, nervous system regulation, neurodiversity, and outdoor learning environments.",

  alternates: {
    canonical:
      "/free-webinar-inclusive-sensory-rich-nature-play-for-childrens-7-senses/",
  },

  openGraph: {
    title: "Inclusive Sensory-Rich Nature Play for Children’s 7 Senses",
    description:
      "Explore how nature play supports children’s seven sensory systems, regulation, learning, connection, and neurodiverse needs.",
    url: pageUrl,
    type: "article",
  },

  twitter: {
    title: "Inclusive Sensory-Rich Nature Play for Children’s 7 Senses",
    description:
      "A free webinar about children’s seven senses, sensory-rich nature play, regulation, learning, and inclusive outdoor environments.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline: "Inclusive Sensory-Rich Nature Play for Children’s 7 Senses",
      description:
        "A free webinar exploring children’s seven sensory systems, sensory-rich nature play, nervous system regulation, neurodiversity, and outdoor learning environments.",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      author: {
        "@id": `${siteUrl}/#person`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
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
          item: `${siteUrl}/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Inclusive Sensory-Rich Nature Play Webinar",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function SensoryNaturePlayWebinarPost() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <article>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <Link href="/blog" className={styles.back}>
              {"<"} Back to Blog
            </Link>

            <h1>Inclusive Sensory-Rich Nature Play for Children’s 7 Senses</h1>

            <p className={styles.heroIntro}>
              A free webinar about how children experience the world through
              seven sensory systems — and how nature-rich environments can
              support regulation, learning, connection, and play.
            </p>
          </div>
        </header>

        <section className={styles.heroWave}>
          <WaveBottom wave="#f7f6f2" spacer="#338e74" />
        </section>

        <section className={styles.featured}>
          <div className={styles.featuredInner}>
            <Image
              src="/watercolor-two.png"
              alt="Sensory-rich outdoor nature play environment for children"
              width={1200}
              height={850}
              priority
            />
          </div>
        </section>

        <section className={styles.heroWave}>
          <WaveTop wave="#338e74" spacer="#f7f6f2" />
        </section>

        <section className={styles.article}>
          <div className={styles.articleInner}>
            <h2>Children experience outdoor spaces with their whole bodies.</h2>

            <p>
              Nature play offers children an incredible range of sensory
              experiences. Movement, texture, sound, balance, pressure, light,
              temperature, and changing natural materials all become part of how
              children play, learn, connect, and understand the world around
              them.
            </p>

            <p>
              In this free webinar, Jena explores the seven sensory systems and
              how sensory-rich nature play can support children’s nervous
              systems, deepen their play, and create stronger opportunities for
              learning and connection.
            </p>

            <h3>There Are More Than Five Senses</h3>

            <p>
              Sight, sound, touch, taste, and smell are only part of the sensory
              picture. Children also rely on their vestibular and proprioceptive
              systems to understand movement, balance, body position, force, and
              where they are in space.
            </p>

            <p>
              These systems are constantly working together. A child climbing a
              log, carrying a heavy branch, balancing on a stone, digging in
              soil, or swinging is having a complex sensory experience — often
              without thinking about it consciously.
            </p>

            <div className={styles.quote}>
              <p>
                When we look at outdoor play through a sensory lens, we start to
                see just how much information children are gathering every
                moment.
              </p>
            </div>

            <h3>Supporting Regulation, Play & Learning</h3>

            <p>
              Sensory-rich nature play can help children regulate their nervous
              systems while creating richer opportunities for exploration,
              learning, and social connection.
            </p>

            <p>
              The goal is not to create one “perfect” sensory environment for
              every child. Children have different sensory needs. A supportive
              space offers enough variety that children can seek movement,
              challenge, texture, quiet, pressure, sound, or retreat depending
              on what their bodies need.
            </p>

            <h3>Designing for Neurodiverse Children</h3>

            <p>
              The webinar also looks at how outdoor play and learning spaces can
              be evaluated and adapted for children with different sensory
              profiles, including neurodiverse children.
            </p>

            <p>
              Jena walks through practical ways to examine the sensory quality
              of an existing space and identify opportunities to make it more
              inclusive, supportive, and engaging for the children who actually
              use it.
            </p>

            <div className={styles.listenBox}>
              <span>Free Webinar Replay</span>

              <h2>
                Inclusive Sensory-Rich Nature Play for Children’s 7 Senses
              </h2>

              <p>
                Watch the replay through Early Childhood Investigations and
                explore practical ways to create sensory-supportive outdoor play
                and learning environments.
              </p>

              <OrganicButton
                variant="green"
                href="https://www.earlychildhoodwebinars.com/"
                fontSize={"2rem"}
              >
                Watch Replay {">"}
              </OrganicButton>
            </div>
          </div>
        </section>
      </article>

      <PostHighlights />
    </main>
  );
}
