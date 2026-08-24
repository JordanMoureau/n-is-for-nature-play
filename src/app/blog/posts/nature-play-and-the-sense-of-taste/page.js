import Image from "next/image";
import Link from "next/link";

import styles from "../posts.module.css";

import WaveBottom from "@/app/components/waveBottom";
import WaveTop from "@/app/components/waveTop";

import PostHighlights from "../postHighlight";
import OrganicButton from "@/app/components/organicButton";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/nature-play-and-the-sense-of-taste/`;

export const metadata = {
  title: "Taste Sensory Activities for Kids | Nature Play Ideas",

  description:
    "Explore how edible gardens, herbs, berries, vegetables, edible flowers, and foraging can support children’s sense of taste through sensory-rich nature play.",

  alternates: {
    canonical: "/nature-play-and-the-sense-of-taste/",
  },

  openGraph: {
    title: "Taste Sensory Activities for Kids | Nature Play Ideas",
    description:
      "Learn how growing and tasting edible plants can support sensory development, language, curiosity, and healthy food exploration for children.",
    url: pageUrl,
    type: "article",
  },

  twitter: {
    title: "Taste Sensory Activities for Kids | Nature Play Ideas",
    description:
      "Nature play ideas for supporting children’s sense of taste through edible gardens, herbs, berries, vegetables, flowers, and foraging.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline: "Nature Play and the Sense of Taste",
      description:
        "Nature play ideas for supporting children’s gustatory sensory system through edible gardens, herbs, berries, vegetables, flowers, and foraging.",
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
          name: "Nature Play and the Sense of Taste",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function SenseOfTastePost() {
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

            <h1>Nature Play and the Sense of Taste</h1>

            <p className={styles.heroIntro}>
              Berries, herbs, vegetables, edible flowers, and wild foods give
              children delicious ways to explore the world through taste.
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
              alt="Edible plants growing in a sensory-rich children’s garden"
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
              Taste is one of the ways children learn what the world is made of.
            </h2>

            <p>
              Taste receptors throughout the mouth help the brain identify
              flavors like sweet, sour, salty, bitter, and umami. This sensory
              system also plays an important survival role, helping us learn
              what is safe, nourishing, and enjoyable to eat.
            </p>

            <p>
              Children actually have more taste buds than adults, giving them a
              particularly rich stream of gustatory information as they build
              what Jena describes as a kind of internal food “database.” Nature
              gives them countless opportunities to add to it.
            </p>

            <div className={styles.quote}>
              <p>
                A ripe berry picked straight from the plant is a very different
                sensory experience from the same berry sitting quietly on a
                dinner plate.
              </p>
            </div>

            <h3>Growing Food Can Make Trying It Easier</h3>

            <p>
              Children are often more willing to try foods they have helped
              grow. A cherry tomato presented at dinner might get rejected,
              while the same tomato discovered on a plant during play can feel
              like an adventure instead of a demand.
            </p>

            <p>
              Edible plants woven into a playscape let tasting happen naturally.
              Kids can discover strawberries under leaves, snack on green beans,
              pick berries, or graze on herbs while they move through the space.
            </p>

            <h3>Taste Builds Language Too</h3>

            <p>
              Tasting can also become a language activity. Jena suggests
              choosing something from the garden together, slowing down to
              notice the flavor, and then describing it.
            </p>

            <p>
              Instead of stopping at “good,” “bad,” or “okay,” children can
              practice describing sweetness, sourness, texture, intensity, and
              even how a particular flavor makes them feel.
            </p>

            <h3>Create a Graze-able Playscape</h3>

            <p>
              Edible gardens do not have to live in a separate vegetable patch.
              Food plants can be mixed directly into children’s play and
              learning spaces.
            </p>

            <p>
              Potted herbs, berry bushes, fruit trees, climbing beans, cherry
              tomatoes, and edible groundcovers can all become part of the
              landscape. The result is a space children can literally taste as
              they explore it.
            </p>

            <div className={styles.quote}>
              <p>
                Sensory-rich nature play can be something children climb, smell,
                touch, hear — and snack on.
              </p>
            </div>

            <h3>Sensory Plants for Taste</h3>

            <p>
              Familiar edible plants are an easy starting point. Jena highlights
              strawberries, blueberries, thornless raspberries and blackberries,
              grapes, figs, apples, apricots, plums, pears, beans, cucumbers,
              cherry tomatoes, and sugar snap peas as kid-friendly options.
            </p>

            <p>
              Less-common choices can make the experience even more interesting.
              Honeyberry, lingonberry, aronia, quince, pawpaw, and jujube can
              introduce children to flavors they may not encounter at the
              grocery store.
            </p>

            <h3>Herbs Are Naturally Multi-Sensory</h3>

            <p>
              Herbs combine strong flavor with fragrance and texture, making
              them especially useful in sensory spaces.
            </p>

            <p>
              Jena recommends basil, lemon balm, rosemary, creeping thyme,
              oregano, chives, mint, and lavender. Many work well in pots or
              directly in the landscape, and creeping thyme can even grow
              between stepping stones where it releases fragrance when brushed
              or stepped on.
            </p>

            <h3>Edible Flowers Make Taste More Playful</h3>

            <p>
              Flowers can be part of the edible landscape too. Nasturtiums,
              pansies, calendula, dahlias, peonies, roses, lilacs, forsythia,
              apple blossoms, carnations, and hollyhocks can all bring color,
              texture, scent, and flavor into children’s food experiences.
            </p>

            <p>
              Adding edible petals to a salad or snack can turn ordinary food
              into something visually surprising and inviting.
            </p>

            <h3>Wild Edibles Add Another Layer of Discovery</h3>

            <p>
              Jena also encourages exploring edible plants already growing
              nearby. Dandelions, violets, clover, chickweed, chicory, amaranth,
              and other wild plants can become part of a child’s understanding
              of their home landscape.
            </p>

            <p>
              Her family even gathers wild greens and edible flowers to make
              what they call a “yard salad,” and they have made dandelion jelly
              from plants growing on their property.
            </p>

            <p>
              Wild-food identification does require care. Only eat plants that
              have been positively identified as edible, and avoid plants from
              areas exposed to pesticides, herbicides, roadside pollution, or
              other contamination.
            </p>

            <h3>Let Taste Be Part of the Landscape</h3>

            <p>
              A sensory-rich nature play space does not have to treat food as
              something separate from play. Growing, picking, smelling,
              touching, tasting, and talking about edible plants can all happen
              naturally as children move through the environment.
            </p>

            <p>
              The more ways children can interact with food without pressure,
              the more opportunities they have to build curiosity, confidence,
              sensory awareness, and positive associations with what they eat.
            </p>

            <div className={styles.resourceBox}>
              <span>Want to Learn More?</span>

              <h2>Nature Play for the 7 Senses</h2>

              <p>
                Explore more ways to create sensory-rich natural play and
                learning spaces for children through Jena’s guide to the seven
                sensory systems.
              </p>

              <OrganicButton
                variant="green"
                href="https://nisfornatureplay.gumroad.com/"
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
