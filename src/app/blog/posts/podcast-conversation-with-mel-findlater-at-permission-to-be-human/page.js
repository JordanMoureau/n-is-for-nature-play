import Image from "next/image";
import Link from "next/link";

import styles from "../posts.module.css";

import WaveBottom from "@/app/components/waveBottom";
import WaveTop from "@/app/components/waveTop";

import PostHighlights from "../postHighlight";
import OrganicButton from "@/app/components/organicButton";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/podcast-conversation-with-mel-findlater-at-permission-to-be-human/`;

export const metadata = {
  title:
    "Nature Play, Motherhood & Human Connection | Permission to Be Human Podcast",

  description:
    "Listen to Jena Ponti Jauchius and Mel Findlater discuss nature, motherhood, sensory-rich play, parenting, and living a fuller, more connected human life.",

  alternates: {
    canonical:
      "/podcast-conversation-with-mel-findlater-at-permission-to-be-human/",
  },

  openGraph: {
    title:
      "Nature Play, Motherhood & Human Connection | Permission to Be Human",
    description:
      "Jena joins Mel Findlater to talk about nature, motherhood, sensory-rich play, parenting, and creating space for a fuller human experience.",
    url: pageUrl,
    type: "article",
  },

  twitter: {
    title:
      "Nature Play, Motherhood & Human Connection | Permission to Be Human",
    description:
      "Listen to Jena and Mel Findlater talk nature, sensory-rich play, parenting, motherhood, and human connection.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline:
        "Podcast Conversation with Mel Findlater at Permission to be Human",
      description:
        "Jena Ponti Jauchius joins Mel Findlater to discuss nature, motherhood, sensory-rich play, parenting, and living a fuller, more connected human life.",
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
          name: "Permission to Be Human Podcast",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function PermissionToBeHumanPost() {
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
              Podcast Conversation with Mel Findlater at Permission to Be Human
            </h1>

            <p className={styles.heroIntro}>
              A conversation about nature, motherhood, sensory-rich play,
              parenting, and what it means to live a bigger, fuller, more
              connected human life.
            </p>
          </div>
        </header>

        <section className={styles.heroWave}>
          <WaveBottom wave="#f7f6f2" spacer="#338e74" />
        </section>

        <section className={styles.featured}>
          <div className={styles.featuredInner}>
            <Image
              src="/girl-with-flower.jpg"
              alt="Child exploring flowers in a sensory-rich nature play space"
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
              What does nature have to do with living a bigger, more fully human
              life?
            </h2>

            <p>
              Jena sat down with Mel Findlater of Permission to Be Human for a
              conversation about nature, motherhood, parenting, and the role the
              natural world can play in helping us experience and express more
              of who we are.
            </p>

            <p>
              Their conversation moves beyond children's outdoor play and into
              something broader: the ways nature can support parents, women,
              families, and anyone trying to live with more connection,
              curiosity, and room to breathe.
            </p>

            <h3>Nature as a Partner in Parenting</h3>

            <p>
              Nature does not have to be another activity to plan, manage, or
              perfect. It can become a kind of co-collaborator in family life —
              offering children space to explore and regulate while giving
              parents room to slow down, observe, and connect.
            </p>

            <p>
              Sensory-rich nature play gives children opportunities to move,
              investigate, touch, listen, imagine, and follow their own
              curiosity without every experience needing to be directed by an
              adult.
            </p>

            <div className={styles.quote}>
              <p>
                Nature can support both children and adults in becoming more
                connected to themselves, each other, and the lives they want to
                build.
              </p>
            </div>

            <h3>Making Room for Big, Audacious Dreams</h3>

            <p>
              Jena and Mel also talk about what it means to have big dreams
              while moving through motherhood and everyday life.
            </p>

            <p>
              Nature can offer space away from constant expectations and
              performance — a place to reconnect with creativity, identity,
              possibility, and the parts of ourselves that are easy to lose in
              the noise of daily responsibilities.
            </p>

            <p>
              The conversation is ultimately about more than outdoor play. It is
              about how connection with the natural world can support fuller,
              richer experiences of parenting, womanhood, and being human.
            </p>

            <div className={styles.listenBox}>
              <span>Listen to the Conversation</span>

              <h2>Permission to Be Human</h2>

              <p>
                Listen to Jena's full conversation with Mel Findlater about
                nature, parenting, sensory-rich play, and making room for a
                bigger life.
              </p>

              <OrganicButton
                variant="green"
                href="https://www.permissiontobehuman.ca/"
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
