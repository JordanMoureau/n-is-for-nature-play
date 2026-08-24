import Image from "next/image";
import Link from "next/link";

import styles from "../posts.module.css";

import WaveBottom from "@/app/components/waveBottom";
import WaveTop from "@/app/components/waveTop";

import PostHighlights from "../postHighlight";
import OrganicButton from "@/app/components/organicButton";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/nature-play-and-our-sense-of-smell/`;

export const metadata = {
  title: "Olfactory Sensory Activities for Kids | Nature Play Ideas",

  description:
    "Explore how flowers, soil, herbs, compost, animals, and fragrant plants can support children’s sense of smell through sensory-rich nature play.",

  alternates: {
    canonical: "/nature-play-and-our-sense-of-smell/",
  },

  openGraph: {
    title: "Olfactory Sensory Activities for Kids | Nature Play Ideas",
    description:
      "Learn how scent-rich outdoor environments can support memory, sensory exploration, language, connection, and play for children.",
    url: pageUrl,
    type: "article",
  },

  twitter: {
    title: "Olfactory Sensory Activities for Kids | Nature Play Ideas",
    description:
      "Nature play ideas for supporting children’s sense of smell with fragrant plants, soil, herbs, animals, compost, and sensory gardens.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline: "Nature Play and Our Sense of Smell",
      description:
        "Nature play ideas for supporting children’s olfactory system through fragrant plants, soil, animals, compost, sensory gardens, and scent-based exploration.",
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
          name: "Nature Play and Our Sense of Smell",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function SenseOfSmellPost() {
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

            <h1>Nature Play and Our Sense of Smell</h1>

            <p className={styles.heroIntro}>
              Flowers, soil, herbs, animals, compost, rain, and growing things
              all give children rich opportunities to explore the world through
              scent.
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
              alt="Child smelling flowers in a sensory-rich nature play garden"
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
            <h2>Smell has a powerful connection to memory.</h2>

            <p>
              Our olfactory system is deeply connected to memory, which is why a
              single familiar scent can suddenly transport us back to a
              particular place, person, or moment.
            </p>

            <p>
              Jena describes the smell of peonies as immediately bringing her
              back to time spent at her grandfather Julius’s rural farmhouse,
              where she would bury her face in the flowers and compare the
              fragrances of different blooms.
            </p>

            <div className={styles.quote}>
              <p>
                Scent has a strange little superpower: one breath can bring an
                entire memory rushing back.
              </p>
            </div>

            <h3>Nature Invites Children to Get Close</h3>

            <p>
              Smell is a particularly intimate sensory experience. Children
              bring flowers close to their faces, crush leaves between their
              fingers, dig into soil, and lean toward plants to notice what
              changes.
            </p>

            <p>
              Those interactions make the sensory experience stronger and more
              memorable because children are actively participating rather than
              simply observing from a distance.
            </p>

            <h3>Add More Aromas to the Play Space</h3>

            <p>
              A scent-rich outdoor environment does not need to rely only on
              flowers.
            </p>

            <p>
              Fragrant plants, water and sand areas, digging spaces, soil,
              compost, and even caring for animals can all add distinct smells
              to a children’s play environment. Jena points out that kids often
              enjoy funky smells too, not just traditionally pleasant ones.
            </p>

            <h3>Help Children Notice and Describe What They Smell</h3>

            <p>
              Small cues can invite children to explore scent more
              intentionally. Jena suggests signage such as “Smell Me” near
              fragrant plants, particularly in spaces designed for children who
              may benefit from clearer sensory invitations.
            </p>

            <p>
              Adults can also ask children to describe the scents they notice:
              What does it remind you of? How does it make you feel? Is one
              plant sweeter, sharper, earthier, or stronger than another?
            </p>

            <p>
              Those conversations turn sensory play into opportunities for
              communication, comparison, emotional awareness, and vocabulary
              development.
            </p>

            <div className={styles.quote}>
              <p>
                “Good” and “bad” are only the beginning. What else does the
                smell remind you of?
              </p>
            </div>

            <h3>Digging Is a Full-Body Sensory Experience</h3>

            <p>
              Digging in the earth brings together smell, touch, movement,
              pressure, temperature, and visual exploration.
            </p>

            <p>
              Fresh soil has a distinctive scent that many people are naturally
              drawn to, making digging one of the simplest ways to add rich
              olfactory input to outdoor play.
            </p>

            <h3>Sensory Plants for Smell</h3>

            <p>
              Fragrant plants are one of the easiest ways to make scent a
              deliberate part of a nature play space.
            </p>

            <p>
              Jena highlights several favorites that offer dramatically
              different fragrance experiences for children.
            </p>

            <h3>Chocolate Cosmos</h3>

            <p>
              Chocolate cosmos may be the undefeated champion of novelty smells.
              Its dark flowers have a distinctly chocolate-like fragrance.
            </p>

            <p>
              Jena describes a child smelling one in her sensory garden and
              reacting with complete surprise because it smelled like a
              chocolate bar. That unexpected discovery immediately became
              something she wanted to share with the other children.
            </p>

            <h3>Scented Geraniums</h3>

            <p>
              Scented geraniums come in an enormous range of fragrances,
              including apple, mint, chocolate mint, citrus, rose, cinnamon,
              cedar, and more.
            </p>

            <p>
              Because the scent comes strongly from the foliage, children can
              gently rub or crush the leaves and compare how dramatically
              different varieties smell.
            </p>

            <h3>Grosso Lavender</h3>

            <p>
              Lavender is one of the most familiar fragrant plants, and Grosso
              lavender offers especially strong scent along with long flower
              spikes and plenty of visual and tactile interest.
            </p>

            <p>
              Its combination of fragrance, texture, color, and pollinator
              activity makes it particularly useful in sensory-rich children’s
              spaces.
            </p>

            <h3>Lilacs</h3>

            <p>
              Lilacs can fill an outdoor space with fragrance in spring.
              Different cultivars vary in intensity, so choosing particularly
              fragrant varieties can make the sensory experience much stronger.
            </p>

            <p>
              Jena recommends cultivars such as Miss Kim, Sensation, and Maidens
              Blush for especially noticeable fragrance.
            </p>

            <h3>Reine des Violettes Climbing Rose</h3>

            <p>
              This nearly thornless climbing rose produces fragrant,
              violet-colored flowers and can be trained along fences or over
              pergolas.
            </p>

            <p>
              That makes it possible to bring fragrance into the actual
              structure of a play environment rather than keeping aromatic
              plants only at ground level.
            </p>

            <h3>Vanilla Spice Summersweet</h3>

            <p>
              Summersweet produces fragrant white blooms with a sweet-spicy
              scent that attracts both children and pollinators.
            </p>

            <p>
              It adds another distinct fragrance profile while also creating
              opportunities for children to notice insects and other life drawn
              to flowering plants.
            </p>

            <h3>Build a Whole Palette of Smells</h3>

            <p>
              A sensory-rich outdoor space does not need every plant to smell
              the same or even smell traditionally pleasant.
            </p>

            <p>
              Flowers, herbs, earth, leaves, compost, animals, rain, and other
              natural materials can create a changing scent landscape that gives
              children more ways to notice, compare, remember, and connect with
              the natural world.
            </p>

            <div className={styles.listenBox}>
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
