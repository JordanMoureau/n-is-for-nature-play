import Image from "next/image";
import Link from "next/link";

import styles from "../posts.module.css";

import WaveBottom from "@/app/components/waveBottom";
import WaveTop from "@/app/components/waveTop";

import PostHighlights from "../postHighlight";
import OrganicButton from "@/app/components/organicButton";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/podcast-conversation-with-ryann-watkin-at-raising-wild-hearts/`;

export const metadata = {
  title:
    "Nature, Sensory Learning & Child Development | Raising Wild Hearts Podcast",

  description:
    "Listen to Jena Ponti Jauchius on the Raising Wild Hearts podcast discussing nature play, sensory learning, child development, the seven senses, and neurodiversity.",

  alternates: {
    canonical:
      "/podcast-conversation-with-ryann-watkin-at-raising-wild-hearts/",
  },

  openGraph: {
    title: "Nature, Sensory Learning & Child Development | Raising Wild Hearts",
    description:
      "Jena joins Ryann Watkin to talk about nature play, sensory development, the seven senses, and creating inclusive environments for children.",
    url: pageUrl,
    type: "article",
  },

  twitter: {
    title: "Nature, Sensory Learning & Child Development | Raising Wild Hearts",
    description:
      "Listen to Jena Ponti Jauchius talk nature play, sensory learning, child development, and neurodiversity.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline: "Podcast Conversation with Ryann Watkin at Raising Wild Hearts",
      description:
        "Jena Ponti Jauchius joins Ryann Watkin to discuss nature play, sensory learning, child development, the seven sensory systems, and neurodiversity.",
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
          name: "Raising Wild Hearts Podcast",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function RaisingWildHeartsPost() {
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
              Podcast Conversation with Ryann Watkin at Raising Wild Hearts
            </h1>

            <p className={styles.heroIntro}>
              A conversation about nature, sensory learning, child development,
              neurodiversity, and why the child-nature connection matters.
            </p>
          </div>
        </header>

        <section className={styles.heroWave}>
          <WaveBottom wave="#f7f6f2" spacer="#338e74" />
        </section>

        <section className={styles.featured}>
          <div className={styles.featuredInner}>
            <Image
              src="/kids-leaf.jpeg"
              alt="Child exploring leaves and nature through sensory play"
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
            <h2>
              Have you listened to the Raising Wild Hearts podcast with Ryann
              Watkin?
            </h2>

            <p>
              Jena joined Ryann for a deep conversation about the importance of
              the child-nature connection, sensory-rich nature play, child
              development, and neurodiversity.
            </p>

            <h3>Nature, Sensory Learning & Child Development</h3>

            <p>
              The conversation explores the ways children understand themselves
              and their environment through sensory experience. Nature creates
              endless opportunities to move, touch, climb, listen, balance,
              investigate, and follow curiosity.
            </p>

            <p>
              Jena also walks through the seven sensory systems and talks about
              how natural play environments can support children's body
              awareness, independence, regulation, and sense of self.
            </p>

            <div className={styles.quote}>
              <p>
                Nature gives children space to discover who they are through
                movement, sensory experience, curiosity, and play.
              </p>
            </div>

            <h3>Creating Space for Neurodiverse Children</h3>

            <p>
              The episode also looks at neurodiversity and the importance of
              creating environments that work for different bodies, minds, and
              sensory needs.
            </p>

            <p>
              Inclusive play does not mean expecting every child to experience a
              space in the same way. It means creating enough variety,
              flexibility, movement, challenge, and quiet that children can find
              what works for them.
            </p>

            <div className={styles.listenBox}>
              <span>Listen to the Episode</span>

              <h2>Nature, Sensory Learning, and Child Development</h2>

              <p>
                Listen to Jena's full conversation with Ryann Watkin on Raising
                Wild Hearts.
              </p>

              <OrganicButton variant="green" href="/blog" fontSize={"2.2rem"}>
                Listen Now {">"}
              </OrganicButton>
            </div>
          </div>
        </section>
      </article>

      <PostHighlights />
    </main>
  );
}
