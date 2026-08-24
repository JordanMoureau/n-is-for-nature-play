import Image from "next/image";
import Link from "next/link";

import styles from "../posts.module.css";

import WaveBottom from "@/app/components/waveBottom";
import WaveTop from "@/app/components/waveTop";

import PostHighlights from "../postHighlight";
import OrganicButton from "@/app/components/organicButton";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/nature-play-and-our-proprioceptive-system/`;

export const metadata = {
  title: "Proprioceptive Activities for Kids | Nature Play Ideas",

  description:
    "Learn how climbing, gardening, pushing, pulling, loose parts, and sensory plants can support children’s proprioceptive system through nature play.",

  alternates: {
    canonical: "/nature-play-and-our-proprioceptive-system/",
  },

  openGraph: {
    title: "Proprioceptive Activities for Kids | Nature Play Ideas",
    description:
      "Explore how movement-rich nature play supports body awareness, balance, coordination, strength, and proprioceptive development in children.",
    url: pageUrl,
    type: "article",
  },

  twitter: {
    title: "Proprioceptive Activities for Kids | Nature Play Ideas",
    description:
      "Nature play ideas for supporting children’s proprioceptive system through movement, gardening, loose parts, pushing, pulling, and climbing.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline: "Nature Play and Our Proprioceptive System",
      description:
        "Nature play ideas and activities that support children’s proprioceptive system, including climbing, gardening, pushing, pulling, loose parts, and sensory plants.",
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
          name: "Nature Play and Our Proprioceptive System",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function ProprioceptiveSystemPost() {
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

            <h1>Nature Play and Our Proprioceptive System</h1>

            <p className={styles.heroIntro}>
              Climbing, carrying, pushing, pulling, gardening, and loose-parts
              play all give children valuable information about their bodies and
              how they move through the world.
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
              alt="Children climbing and moving through a natural play environment"
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
            <h2>Proprioception is our body-awareness sense.</h2>

            <p>
              Our proprioceptive system helps us understand where our bodies are
              in relation to the world around us and where our limbs are in
              relation to the rest of our bodies.
            </p>

            <p>
              It also helps us judge how much force or pressure an activity
              requires — whether that means holding a crayon without snapping
              it, carrying something heavy, or knowing how hard to push against
              an object.
            </p>

            <div className={styles.quote}>
              <p>
                Close your eyes and touch your nose with one finger. That is
                your proprioceptive system quietly doing its job.
              </p>
            </div>

            <h3>Big Body Movement Feeds the Proprioceptive System</h3>

            <p>
              Children’s proprioceptive systems thrive on movement-based play.
              Climbing and jumping give muscles and joints plenty of input while
              also supporting balance, coordination, and body confidence.
            </p>

            <p>
              Logs, boulders, uneven surfaces, and other natural features can
              create exactly the kind of whole-body challenge that gives
              children rich proprioceptive feedback.
            </p>

            <h3>Gardening Is Full of Proprioceptive Input</h3>

            <p>
              Gardening asks children to use their bodies in a huge variety of
              ways. Planting seeds, digging with a hand trowel, raking,
              watering, transplanting seedlings, pruning, and harvesting all
              involve combinations of force, coordination, movement, and body
              awareness.
            </p>

            <p>
              Even ordinary garden tools can make the experience richer because
              children have to adjust how much pressure and strength they use
              depending on the task.
            </p>

            <h3>Pushing, Pulling & Carrying</h3>

            <p>
              Pushing a child-sized wheelbarrow or pulling a wagon combines
              balance, strength, resistance, and movement.
            </p>

            <p>
              You can also vary the intensity naturally. An empty wagon offers
              less resistance than one filled with loose parts or friends. A
              partly filled watering can is easier to carry than a full one.
              Those simple differences let children find the amount of sensory
              input that feels right for their bodies.
            </p>

            <div className={styles.quote}>
              <p>
                Sensory play works best when children have room to find the
                amount and intensity of input that feels right for them.
              </p>
            </div>

            <h3>Loose Parts Add Even More Possibility</h3>

            <p>
              Branches, stones, pinecones, seed pods, and other natural loose
              parts invite children to lift, carry, stack, drag, sort, build,
              balance, and manipulate objects in countless ways.
            </p>

            <p>
              Those activities combine proprioceptive input with fine-motor
              skills, balance, coordination, imagination, and problem-solving.
            </p>

            <h3>Sensory Plants Can Support Body Awareness Too</h3>

            <p>
              Plants can become part of proprioceptive play in surprisingly
              physical ways. Ornamental grasses and seed heads can become loose
              parts. Evergreen cones can be collected and built with. Edible
              plants invite children to squat, bend, reach, move branches, pick,
              carry, and coordinate their hands and eyes.
            </p>

            <p>
              Even something as simple as searching blueberry bushes for ripe
              berries asks the body to move through space, change position, and
              adjust pressure and coordination.
            </p>

            <h3>Think About the Whole Play Space</h3>

            <p>
              A proprioceptive-rich play environment does not need specialized
              equipment everywhere. It needs opportunities for children to use
              their muscles, joints, hands, balance, and strength in different
              ways.
            </p>

            <p>
              Uneven paths, logs, gardens, loose materials, watering cans,
              wagons, climbing opportunities, and plants can all become part of
              a space that gives children meaningful whole-body sensory input.
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
