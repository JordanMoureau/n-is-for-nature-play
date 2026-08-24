import Image from "next/image";
import Link from "next/link";

import styles from "../posts.module.css";

import WaveBottom from "@/app/components/waveBottom";
import WaveTop from "@/app/components/waveTop";

import PostHighlights from "../postHighlight";
import OrganicButton from "@/app/components/organicButton";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/podcast-conversation-video-citycurrent-with-andrew-bartolotta/`;

export const metadata = {
  title: "Sensory-Rich Nature Play & Child Development | CityCURRENT Interview",

  description:
    "Watch Jena Ponti Jauchius join Andrew Bartolotta of CityCURRENT to discuss sensory-rich nature play, children’s seven sensory systems, backyard playscapes, and holistic child development.",

  alternates: {
    canonical:
      "/podcast-conversation-video-citycurrent-with-andrew-bartolotta/",
  },

  openGraph: {
    title: "Sensory-Rich Nature Play & Child Development | CityCURRENT",
    description:
      "Jena joins Andrew Bartolotta to explore the seven sensory systems, nature play, backyard playscapes, and the role outdoor environments play in child development.",
    url: pageUrl,
    type: "article",
  },

  twitter: {
    title: "Sensory-Rich Nature Play & Child Development | CityCURRENT",
    description:
      "Watch Jena and Andrew Bartolotta discuss sensory-rich nature play, children’s seven senses, backyard playscapes, and holistic development.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline:
        "Podcast Conversation/Video with Andrew Bartolotta at CityCURRENT",
      description:
        "Jena Ponti Jauchius joins Andrew Bartolotta of CityCURRENT to discuss sensory-rich nature play, children’s seven sensory systems, backyard playscapes, and holistic child development.",
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
          name: "CityCURRENT Interview",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function CityCurrentPost() {
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

            <h1>
              Podcast Conversation/Video with Andrew Bartolotta at CityCURRENT
            </h1>

            <p className={styles.heroIntro}>
              A deep dive into sensory-rich nature play, children’s seven
              sensory systems, backyard playscapes, and the power of outdoor
              environments in child development.
            </p>
          </div>
        </header>

        <section className={styles.heroWave}>
          <WaveBottom wave="#f7f6f2" spacer="#338e74" />
        </section>

        <section className={styles.featured}>
          <div className={styles.featuredInner}>
            <Image
              src="/kids-stick.jpeg"
              alt="Children exploring and playing in a sensory-rich natural outdoor environment"
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
            <h2>What makes nature play so powerful for developing children?</h2>

            <p>
              Jena sat down with Andrew Bartolotta of CityCURRENT to talk about
              the power of sensory-rich nature play and the many ways outdoor
              environments support children’s development.
            </p>

            <p>
              The conversation takes a closer look at how children experience
              nature through not just five senses, but seven interconnected
              sensory systems. Movement, balance, body awareness, texture,
              sound, sight, and other forms of sensory input all work together
              as children explore the world around them.
            </p>

            <h3>Seven Sensory Systems at Work</h3>

            <p>
              Nature gives children opportunities to use their whole bodies.
              Climbing, balancing, digging, carrying, swinging, touching,
              listening, and observing all create layers of sensory information
              that help children understand themselves and their surroundings.
            </p>

            <p>
              These experiences support far more than physical movement. They
              can influence confidence, regulation, coordination, curiosity,
              problem-solving, and the way children engage with other people and
              the environment.
            </p>

            <div className={styles.quote}>
              <p>
                Sensory-rich nature play gives children more ways to move,
                explore, notice, experiment, and understand the world through
                their own bodies.
              </p>
            </div>

            <h3>Turning a Backyard Into a Playscape</h3>

            <p>
              The conversation also explores how families can begin thinking
              differently about their own outdoor spaces.
            </p>

            <p>
              A backyard does not need to become a traditional playground to
              support meaningful play. Natural materials, varied textures,
              opportunities for movement, planting, loose parts, water, digging,
              and places to pause can all help turn an ordinary outdoor space
              into a richer sensory environment.
            </p>

            <h3>Nature & Holistic Development</h3>

            <p>
              The larger idea behind the interview is simple: children develop
              as whole people, and the environments around them can support that
              development in equally interconnected ways.
            </p>

            <p>
              Sensory-rich nature play creates space for physical development,
              emotional regulation, imagination, social connection,
              independence, and discovery to happen together rather than as
              separate activities.
            </p>

            <div className={styles.listenBox}>
              <span>Watch the Interview</span>

              <h2>Sensory-Rich Nature Play with CityCURRENT</h2>

              <p>
                Watch Jena’s full conversation with Andrew Bartolotta about the
                seven sensory systems, backyard playscapes, and the power of
                nature in child development.
              </p>

              <OrganicButton
                variant="green"
                href="https://citycurrent.com/"
                fontSize={"2.2rem"}
              >
                Watch Now {">"}
              </OrganicButton>
            </div>
          </div>
        </section>
      </article>

      <PostHighlights />
    </main>
  );
}
