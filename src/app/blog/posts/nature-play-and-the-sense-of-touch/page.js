import Image from "next/image";
import Link from "next/link";

import styles from "../posts.module.css";

import WaveBottom from "@/app/components/waveBottom";
import WaveTop from "@/app/components/waveTop";

import PostHighlights from "../postHighlight";
import OrganicButton from "@/app/components/organicButton";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/nature-play-and-the-sense-of-touch/`;

export const metadata = {
  title: "Tactile Sensory Activities for Kids | Nature Play Ideas",

  description:
    "Explore tactile sensory activities for kids using mud, water, sand, loose parts, nature looms, sensory paths, and touch-friendly plants.",

  alternates: {
    canonical: "/nature-play-and-the-sense-of-touch/",
  },

  openGraph: {
    title: "Tactile Sensory Activities for Kids | Nature Play Ideas",
    description:
      "Learn how texture, temperature, loose parts, mud, water, sand, and sensory plants can support children’s tactile development through nature play.",
    url: pageUrl,
    type: "article",
  },

  twitter: {
    title: "Tactile Sensory Activities for Kids | Nature Play Ideas",
    description:
      "Nature play ideas for supporting children’s sense of touch with textures, temperatures, loose parts, mud, water, sand, and sensory plants.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline: "Nature Play and the Sense of Touch",
      description:
        "Nature play ideas for supporting children’s tactile sensory system through texture, temperature, loose parts, mud, water, sand, sensory paths, and tactile plants.",
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
          name: "Nature Play and the Sense of Touch",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function SenseOfTouchPost() {
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

            <h1>Nature Play and the Sense of Touch</h1>

            <p className={styles.heroIntro}>
              Soft, fuzzy, smooth, bumpy, prickly, warm, cool, cold, muddy,
              sandy, leafy, and wet — nature gives children endless ways to
              understand the world through touch.
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
              alt="Tactile plants and natural materials in a sensory-rich children's play garden"
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
            <h2>Touch helps children understand their surroundings.</h2>

            <p>
              Our skin is our largest organ and is constantly receiving
              information about the environment. Through touch, children learn
              about temperature, texture, pressure, comfort, danger, and the
              physical qualities of the world around them.
            </p>

            <p>
              A hot surface tells the body to pull away. A warm fuzzy blanket
              can communicate comfort and safety. A rough piece of bark, cold
              water, soft moss, or gritty sand all send completely different
              kinds of sensory information to the brain.
            </p>

            <div className={styles.quote}>
              <p>
                Texture and temperature turn an ordinary outdoor space into a
                full-body sensory experience.
              </p>
            </div>

            <h3>Think Texture and Temperature</h3>

            <p>
              One of the easiest ways to increase tactile value in a play space
              is to look for variety.
            </p>

            <p>
              Soft. Fuzzy. Smooth. Hard. Bumpy. Prickly. Warm. Cool. Cold. Icy.
              The more variation children can explore, the more opportunities
              they have to understand and respond to different tactile
              experiences.
            </p>

            <h3>Let Children Explore Touch on Their Own Terms</h3>

            <p>
              Some children seek out strong tactile input, while others are much
              more sensitive to it.
            </p>

            <p>
              A space with a wide variety of textures and temperatures lets
              children approach those experiences at their own pace. That can be
              especially valuable for children who are hypersensitive or
              hyposensitive to touch and need more control over the sensory
              input they receive.
            </p>

            <div className={styles.quote}>
              <p>
                Give children lots of the textures they already love, then let
                curiosity do the rest.
              </p>
            </div>

            <h3>Mud, Water & Sand</h3>

            <p>
              Mud kitchens, water play, sand play, and combinations of all three
              offer huge tactile variety.
            </p>

            <p>
              Children can experience wet and dry, warm and cool, gritty and
              smooth, sticky and slippery — often within the same play session.
              Tools, containers, spoons, scoops, buckets, and natural materials
              can expand the experience even further.
            </p>

            <h3>Natural Loose Parts</h3>

            <p>
              Loose parts are another easy way to add tactile richness.
              Branches, leaves, bark, stones, cones, seed pods, acorns, shells,
              grasses, and other natural materials all invite children to pick
              up, sort, carry, stack, rub, squeeze, and manipulate different
              textures.
            </p>

            <p>
              A loose-parts area may occasionally look beautifully chaotic, but
              the sensory value can be enormous.
            </p>

            <h3>Nature Looms & Sensory Paths</h3>

            <p>
              A garden trellis, obelisk, or section of fencing can become a
              simple nature loom where children weave grasses, leaves, flowers,
              twigs, and other found materials.
            </p>

            <p>
              Sensory paths can also combine multiple textures underfoot and
              encourage children to experience natural materials through hands,
              feet, balance, and movement.
            </p>

            <h3>Cozy Spaces Matter Too</h3>

            <p>
              Tactile experiences do not always need to be intense or messy.
              Soft outdoor cushions, blankets, enclosed nooks, or comfortable
              seating areas can provide soothing tactile input and a place to
              regulate.
            </p>

            <p>
              Sensory-rich design works best when children can move between
              stimulation and comfort depending on what their bodies need.
            </p>

            <h3>Sensory Plants for Touch</h3>

            <p>
              Plants are some of the best tactile materials available because
              every part of them can feel different: bark, leaves, stems,
              flowers, seed heads, cones, pods, and grasses.
            </p>

            <p>
              Jena suggests using tactile plants where children naturally spend
              time — near sand areas, cozy spaces, fairy gardens, paths, or
              gathering areas — so the plants are close enough to be touched
              again and again.
            </p>

            <h3>Big Ears Lamb’s Ears</h3>

            <p>
              Lamb’s ears is one of Jena’s favorite tactile plants. The broad
              leaves are exceptionally soft and fleecy, making them inviting
              even for many children who are cautious about touch.
            </p>

            <p>
              The Big Ears variety is especially useful because it offers that
              dramatic fuzzy texture without spreading quite as aggressively as
              some other varieties.
            </p>

            <h3>Coneflower</h3>

            <p>
              Coneflowers offer almost the opposite experience. Their seed heads
              are firm and spiny, creating a strong textural contrast next to
              something soft like lamb’s ears.
            </p>

            <p>
              Leaving the seed heads in place through fall and winter also
              extends their play value while providing food for birds.
            </p>

            <h3>Woolly Thyme</h3>

            <p>
              Woolly thyme creates a low-growing, soft surface that children can
              even walk across barefoot.
            </p>

            <p>
              Plants like this are especially useful along paths and stepping
              areas where children naturally come into direct contact with the
              landscape.
            </p>

            <h3>Purple Emperor Sedum</h3>

            <p>
              Sedum adds yet another tactile quality through its thick,
              succulent leaves and fluffy flower heads.
            </p>

            <p>
              Leaving the dried flowers through winter can add texture and
              seasonal interest long after the growing season ends.
            </p>

            <h3>Little Bunny Dwarf Fountain Grass</h3>

            <p>
              Fine grass blades and very soft seed heads make dwarf fountain
              grass particularly inviting to touch.
            </p>

            <p>
              Its small size also makes it easy to place near child-scale
              pathways and activity areas where little hands can naturally reach
              it.
            </p>

            <h3>Create Contrast</h3>

            <p>
              Tactile planting becomes especially interesting when dramatically
              different textures are planted together.
            </p>

            <p>
              A spiny coneflower beside fuzzy lamb’s ears, soft grasses near
              rough bark, or smooth leaves beside textured seed heads gives
              children an immediate opportunity to compare how different plants
              feel.
            </p>

            <h3>Let Children Know Nature Through Their Hands</h3>

            <p>
              Touch turns nature from something children look at into something
              they actively know.
            </p>

            <p>
              Through digging, gathering, weaving, planting, splashing,
              building, and touching living plants, children become participants
              in the outdoor environment rather than observers standing beside
              it.
            </p>

            <p>
              As always, plants used in children’s play spaces should be
              non-toxic, and pesticides, herbicides, and other harmful chemicals
              should be avoided in areas where children play.
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
