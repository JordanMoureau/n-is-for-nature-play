import Image from "next/image";
import Link from "next/link";

import styles from "../posts.module.css";

import WaveBottom from "@/app/components/waveBottom";
import WaveTop from "@/app/components/waveTop";

import PostHighlights from "../postHighlight";
import OrganicButton from "@/app/components/organicButton";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/ladybug-bridges-and-other-magic/`;

export const metadata = {
  title: "Ladybug Bridges and Other Magic | Nature Play & Childhood Wonder",

  description:
    "A sensory garden story about ladybugs, slug trails, raspberries, imagination, and the small moments that help children build a deep connection with nature.",

  alternates: {
    canonical: "/ladybug-bridges-and-other-magic/",
  },

  openGraph: {
    title: "Ladybug Bridges and Other Magic",
    description:
      "A small sensory-garden discovery becomes a story about ladybugs, magical rainbow bridges, imagination, and the beauty of children's connection with nature.",
    url: pageUrl,
    type: "article",
  },

  twitter: {
    title: "Ladybug Bridges and Other Magic",
    description:
      "A story about ladybugs, slug trails, childhood imagination, sensory gardens, and the tiny natural discoveries children notice better than adults.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline: "Ladybug Bridges and Other Magic",
      description:
        "A sensory-garden story about ladybugs, slug trails, childhood imagination, and the deep connection children can build with the natural world.",
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
          name: "Ladybug Bridges and Other Magic",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function LadybugBridgesPost() {
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

            <h1>Ladybug Bridges and Other Magic</h1>

            <p className={styles.heroIntro}>
              Sometimes the best thing happening in the garden is the thing
              nobody planned for.
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
              alt="Plants and natural details in a sensory-rich children's garden"
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
              Pay close enough attention and even one plant becomes a whole
              world.
            </h2>

            <p>
              One early summer day, Jena and her daughters were outside in the
              sensory garden picking raspberries for freezer jam.
            </p>

            <p>
              One of her daughters noticed that there seemed to be more ladybugs
              than usual gathered around the nearby Autumn Joy sedum. Raspberry
              picking immediately became less interesting.
            </p>

            <p>The whole group moved in for a closer look.</p>

            <div className={styles.quote}>
              <p>
                Sometimes distraction is just curiosity pointing somewhere
                better.
              </p>
            </div>

            <h3>A Tiny Ecosystem Hiding in Plain Sight</h3>

            <p>
              Once they slowed down and really looked, the plant was full of
              activity.
            </p>

            <p>
              There were different kinds of flies resting on unopened flower
              buds. A spider had tucked an egg nest beneath the curved underside
              of a leaf. And then they found something even stranger.
            </p>

            <p>
              Thin, dried slug trails stretched up the stems, across leaves, and
              over the broad flower heads of the sedum. In the light, the
              delicate trails had an iridescent rainbow sheen.
            </p>

            <h3>“Magical Rainbow Tape”</h3>

            <p>
              One of the girls decided the shimmering trails looked like magical
              rainbow tape.
            </p>

            <p>
              The dried slime was paper-thin and fragile. When they gently
              touched it, it broke apart.
            </p>

            <p>
              Slugs may not normally rank particularly high on a gardener&apos;s
              list of beloved visitors, but that morning they had accidentally
              left behind the raw material for a seven-year-old&apos;s
              imagination.
            </p>

            <div className={styles.quote}>
              <p>The slugs had built bridges for the ladybugs.</p>
            </div>

            <h3>Obviously, the Ladybugs Needed Bridges</h3>

            <p>
              The girls&apos; favorite explanation was wonderfully practical.
            </p>

            <p>
              Ladybugs have tiny legs. Traveling from one sedum stem to another
              would mean climbing all the way down one plant, crossing the
              ground, and climbing all the way back up the next.
            </p>

            <p>Exhausting.</p>

            <p>
              So perhaps the slugs — apparently generous little civil engineers
              — had stretched shimmering bridges between the stems to make the
              ladybugs&apos; journeys easier.
            </p>

            <h3>This Is What Nature Play Can Look Like</h3>

            <p>There was no lesson plan hiding in the garden that morning.</p>

            <p>
              Nobody set out to study insects, inspect spider nests, investigate
              slug trails, or invent transportation infrastructure for ladybugs.
            </p>

            <p>
              The children noticed something interesting, adults followed their
              attention, and an ordinary plant became a place filled with
              observation, storytelling, science, sensory experience, and
              imagination.
            </p>

            <p>
              That kind of experience is difficult to manufacture because its
              value comes partly from discovery.
            </p>

            <div className={styles.quote}>
              <p>
                There is magic all around us. Children are often simply better
                at noticing where it is hiding.
              </p>
            </div>

            <h3>One Sedum, Many Worlds</h3>

            <p>
              In one unassuming plant, the girls found ladybugs, flies, a
              spider, eggs, slugs, shimmering trails, and an entire imagined
              world connecting them.
            </p>

            <p>
              Jena describes moments like this as the beating heart of a
              child&apos;s relationship with nature: the point where curiosity
              meets living things and something ordinary suddenly becomes
              enormous.
            </p>

            <h3>Sensory Plant Feature: Autumn Joy Sedum</h3>

            <p>
              The plant at the center of the adventure was Autumn Joy sedum,
              also known as Sedum spectabile &apos;Autumn Joy.&apos;
            </p>

            <p>
              Jena describes it as a four-season perennial that grows to roughly
              two feet tall and slightly wider, with a hardiness range of about
              zones 4 through 11.
            </p>

            <p>
              Its broad flower heads and changing seasonal structure make it
              visually interesting, while the insects and other small creatures
              it attracts can add an entirely different layer of discovery for
              children.
            </p>

            <h3>Leave Room for the Unplanned Stuff</h3>

            <p>
              A sensory-rich nature play space does not need every interaction
              designed in advance.
            </p>

            <p>
              Sometimes the job of the environment is simply to contain enough
              life, variation, texture, movement, and change that children have
              something worth noticing.
            </p>

            <p>
              Then the adults can occasionally put down the raspberry basket and
              follow them.
            </p>

            <div className={styles.resourceBox}>
              <span>Want More Nature Play?</span>

              <h2>Nature Play for the 7 Senses</h2>

              <p>
                Explore Jena&apos;s guide to creating sensory-rich natural play
                and learning spaces where children have more opportunities to
                notice, imagine, move, explore, and connect.
              </p>

              <OrganicButton
                variant="green"
                href="/product/ebook-nature-play-for-the-7-senses/"
                fontSize={"2.2rem"}
              >
                Explore the Guide {">"}
              </OrganicButton>
            </div>
          </div>
        </section>
      </article>

      <PostHighlights />
    </main>
  );
}
