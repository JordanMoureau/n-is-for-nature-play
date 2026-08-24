import Image from "next/image";
import Link from "next/link";

import styles from "../posts.module.css";

import WaveBottom from "@/app/components/waveBottom";
import WaveTop from "@/app/components/waveTop";

import PostHighlights from "../postHighlight";
import OrganicButton from "@/app/components/organicButton";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/nature-play-and-the-sense-of-sight/`;

export const metadata = {
  title: "Visual Sensory Activities for Kids | Nature Play Ideas",

  description:
    "Explore how color, movement, shape, pattern, texture, garden art, magnifying tools, and sensory plants can support children’s visual development through nature play.",

  alternates: {
    canonical: "/nature-play-and-the-sense-of-sight/",
  },

  openGraph: {
    title: "Visual Sensory Activities for Kids | Nature Play Ideas",
    description:
      "Learn how visually rich outdoor environments can support children’s observation, imagination, language, attention, and connection with nature.",
    url: pageUrl,
    type: "article",
  },

  twitter: {
    title: "Visual Sensory Activities for Kids | Nature Play Ideas",
    description:
      "Nature play ideas for supporting children’s sense of sight through color, texture, movement, pattern, visual contrast, and sensory plants.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline: "Nature Play and the Sense of Sight",
      description:
        "Nature play ideas for supporting children’s visual sensory system through color, movement, shape, pattern, texture, visual contrast, and sensory plants.",
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
          name: "Nature Play and the Sense of Sight",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function SenseOfSightPost() {
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

            <h1>Nature Play and the Sense of Sight</h1>

            <p className={styles.heroIntro}>
              Color, movement, pattern, texture, shape, light, plants, bugs,
              water, art, and changing seasons give children endless things to
              notice and explore.
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
              alt="Colorful sensory-rich outdoor play and learning garden"
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
            <h2>Sight helps children interpret the world around them.</h2>

            <p>
              Through vision, children learn to recognize shapes, colors,
              distance, depth, movement, and the visual characteristics of the
              places around them.
            </p>

            <p>
              Visual experiences also support language and social development.
              Children build vocabulary by naming and describing what they see
              while connecting with other people and with the natural world.
            </p>

            <div className={styles.quote}>
              <p>Nature is basically an endless visual scavenger hunt.</p>
            </div>

            <h3>Nature Already Offers Incredible Visual Variety</h3>

            <p>
              Butterfly wings, dandelion seed heads, spider webs covered in
              morning dew, water reflecting light, spores beneath fern leaves,
              bright autumn leaves, pinecones, bark, flowers, grasses, sand,
              stones, and trees all create different visual experiences.
            </p>

            <p>
              The more nature a play space contains, the more opportunities
              children have to observe differences in color, texture, pattern,
              form, movement, and scale.
            </p>

            <h3>Add Visual Features That Invite Interaction</h3>

            <p>
              Natural materials can be complemented by carefully chosen
              human-made visual features.
            </p>

            <p>
              Jena suggests sculptural garden arbors with climbing plants,
              kinetic features like wind spinners, outdoor art and sculpture,
              colorful plantings, murals, magnifying glasses, magnifying
              stations, kaleidoscopes, and telescopes.
            </p>

            <p>
              These additions can capture attention, spark imagination, and give
              children new ways to notice and investigate their surroundings.
            </p>

            <div className={styles.quote}>
              <p>
                Visual interest does not have to mean visual clutter. The goal
                is to give children something worth noticing.
              </p>
            </div>

            <h3>Color Can Change the Feeling of a Space</h3>

            <p>
              Plants can be used strategically to create different visual moods.
            </p>

            <p>
              Warm colors like red, orange, and yellow tend to feel more active
              and visually forward, while greens, blues, and purples often feel
              calmer and more visually receding.
            </p>

            <p>
              Grouping plants together in larger masses can create stronger
              visual impact than scattering small amounts throughout a space.
            </p>

            <h3>Shape and Form Matter Too</h3>

            <p>
              Plants with unusual forms can become landmarks or focal points in
              a play environment.
            </p>

            <p>
              Columnar shapes, weeping forms, twisted branches, textured bark,
              and dramatic flower structures can all help children notice
              differences in how living things grow and change.
            </p>

            <h3>Sensory Plants for Sight</h3>

            <p>
              Jena highlights several plants that add especially strong visual
              interest to children’s spaces.
            </p>

            <h3>Paperbark Maple</h3>

            <p>
              Paperbark maple is known for its curling, cinnamon-colored bark.
              The peeling layers create visual texture throughout the year and
              can make the tree an interesting focal point in a sensory garden.
            </p>

            <h3>Harry Lauder’s Walking Stick</h3>

            <p>
              This small tree or shrub has twisted, contorted branches that look
              almost sculptural.
            </p>

            <p>
              Its unusual shape makes it especially interesting during seasons
              when leaves are absent and the branch structure becomes more
              visible.
            </p>

            <h3>Magical Gold Forsythia</h3>

            <p>
              Forsythia brings intense yellow blooms in early spring, creating a
              bright burst of color after winter.
            </p>

            <p>
              Its early flowers can become a strong seasonal marker for
              children, helping them notice changes in the garden over time.
            </p>

            <h3>Dark Horse Weigela</h3>

            <p>
              Dark purple-bronze foliage makes this plant visually dramatic even
              before it flowers.
            </p>

            <p>
              Jena notes that the foliage becomes especially striking when
              paired with chartreuse or blue-toned plants, creating strong
              visual contrast.
            </p>

            <h3>Fanfare Blanketflower</h3>

            <p>
              Bright yellow, orange, and red blooms give this plant an energetic
              appearance, while its unusual petal shape rewards close
              inspection.
            </p>

            <p>
              Placing plants like this near paths, fairy gardens, or sitting
              areas gives children a reason to stop and look closely.
            </p>

            <h3>Gladiator Allium</h3>

            <p>
              Gladiator allium sends up tall stems topped with large, globe-like
              purple flowers.
            </p>

            <p>
              Jena suggests planting several together for a stronger visual
              statement and a more dramatic sense of scale.
            </p>

            <h3>Purple Passionflower</h3>

            <p>
              Passionflower has exceptionally intricate blooms that almost beg
              to be inspected up close.
            </p>

            <p>
              Because it is a climbing vine, it can also become part of arbors,
              tunnels, and cozy spaces where children can sit quietly and
              observe the flowers.
            </p>

            <h3>Sunflowers</h3>

            <p>
              Sunflowers bring height, bold color, strong shapes, and seasonal
              change into a play space.
            </p>

            <p>
              Jena especially likes using them to create sunflower houses by
              planting seeds in a circle and allowing the plants to form a
              living hut as they grow.
            </p>

            <h3>Let Children Help Choose What Comes Next</h3>

            <p>
              Creating visual interest does not need to become a giant design
              project all at once.
            </p>

            <p>
              Jena suggests choosing one feature children would enjoy — or
              letting them choose it themselves — and turning the addition into
              a family project.
            </p>

            <p>
              A wind spinner, a bright flower, a sunflower house, a magnifying
              station, or a piece of garden art can be enough to make an outdoor
              space feel newly interesting.
            </p>

            <p>
              As always, plants used in children’s play areas should be
              non-toxic, and pesticides, herbicides, and other harmful chemicals
              should be avoided in spaces where children play.
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
