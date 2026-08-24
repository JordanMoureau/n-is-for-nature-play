import Image from "next/image";
import Link from "next/link";

import styles from "../posts.module.css";

import WaveBottom from "@/app/components/waveBottom";
import WaveTop from "@/app/components/waveTop";

import PostHighlights from "../postHighlight";
import OrganicButton from "@/app/components/organicButton";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/podcast-conversation-outdoor-classrooms-with-victoria-hackett/`;

export const metadata = {
  title:
    "Outdoor Classrooms, Sensory Play & Backyard Learning Gardens | Podcast",

  description:
    "Listen to Jena Ponti Jauchius and Victoria Hackett discuss outdoor classrooms, sensory-rich nature play, easy DIY sensory features, and meaningful childhood connection.",

  alternates: {
    canonical:
      "/podcast-conversation-outdoor-classrooms-with-victoria-hackett/",
  },

  openGraph: {
    title: "Outdoor Classrooms, Sensory Play & Backyard Learning Gardens",
    description:
      "Jena joins Victoria Hackett to talk outdoor learning, sensory-rich nature play, DIY sensory features, and the power of connection.",
    url: pageUrl,
    type: "article",
  },

  twitter: {
    title: "Outdoor Classrooms, Sensory Play & Backyard Learning Gardens",
    description:
      "Listen to Jena and Victoria Hackett discuss sensory-rich nature play, outdoor classrooms, DIY sensory features, and childhood connection.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline:
        "Podcast Conversation with Victoria Hackett at Outdoor Classrooms",
      description:
        "Jena Ponti Jauchius joins Victoria Hackett to discuss outdoor learning, sensory-rich nature play, easy DIY sensory features, and meaningful childhood connection.",
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
          name: "Outdoor Classrooms Podcast",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function OutdoorClassroomsPost() {
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
              Podcast Conversation with Victoria Hackett at Outdoor Classrooms
            </h1>

            <p className={styles.heroIntro}>
              A conversation about outdoor learning, sensory-rich nature play,
              easy DIY sensory features, and the power of connection in
              childhood.
            </p>
          </div>
        </header>

        <section className={styles.heroWave}>
          <WaveBottom wave="#f7f6f2" spacer="#338e74" />
        </section>

        <section className={styles.featured}>
          <div className={styles.featuredInner}>
            <Image
              src="/garden-detail.jpg"
              alt="Natural sensory-rich outdoor learning environment for children"
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
              What happens when outdoor learning and sensory play come together?
            </h2>

            <p>
              Jena sat down with Victoria Hackett of Outdoor Classrooms for a
              conversation about the intersection of outdoor learning and
              sensory experiences.
            </p>

            <p>
              Victoria supports educators, early childhood professionals, and
              parents who want to create outdoor classrooms and backyard
              learning gardens, making this conversation a natural meeting point
              between thoughtful design and everyday outdoor learning.
            </p>

            <h3>Why All Kids Need Sensory-Rich Nature Play</h3>

            <p>
              Children experience outdoor environments with their whole bodies.
              Texture, movement, sound, balance, resistance, light, plants,
              water, soil, and changing natural materials all become part of how
              children explore and understand the world around them.
            </p>

            <p>
              Sensory-rich nature play gives children opportunities to engage
              deeply with those experiences while supporting movement,
              curiosity, regulation, imagination, and learning.
            </p>

            <div className={styles.quote}>
              <p>
                Outdoor learning becomes richer when children have room to move,
                notice, touch, experiment, imagine, and connect.
              </p>
            </div>

            <h3>Simple Sensory Features You Can Create Yourself</h3>

            <p>
              Jena and Victoria also talk about sensory features that do not
              require a major landscape project or elaborate playground
              equipment.
            </p>

            <p>
              Small DIY additions can create meaningful opportunities for
              digging, carrying, pouring, touching, balancing, listening, and
              experimenting — giving children more ways to actively engage with
              an outdoor space.
            </p>

            <h3>The Magic of Childhood & the Power of Connection</h3>

            <p>
              At the center of the conversation is something bigger than any
              individual activity or garden feature: connection.
            </p>

            <p>
              Outdoor spaces can give children time and freedom to notice small
              things, follow their own ideas, build relationships, and
              experience the kind of open-ended wonder that is easy to lose in
              overly structured environments.
            </p>

            <div className={styles.listenBox}>
              <span>Listen to the Conversation</span>

              <h2>Outdoor Classrooms with Victoria Hackett</h2>

              <p>
                Listen to Jena and Victoria talk sensory-rich nature play,
                simple DIY features, outdoor learning, and the power of
                childhood connection.
              </p>

              <OrganicButton
                variant="green"
                href="https://pod.link/"
                fontSize={"2.2rem"}
              >
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
