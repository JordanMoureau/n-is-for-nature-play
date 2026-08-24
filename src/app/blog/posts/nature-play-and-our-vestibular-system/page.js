import Image from "next/image";
import Link from "next/link";

import styles from "../posts.module.css";

import WaveBottom from "@/app/components/waveBottom";
import WaveTop from "@/app/components/waveTop";

import PostHighlights from "../postHighlight";
import OrganicButton from "@/app/components/organicButton";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/nature-play-and-our-vestibular-system/`;

export const metadata = {
  title: "Vestibular Activities for Kids | Nature Play & Movement",

  description:
    "Explore how swinging, spinning, balancing, jumping, dancing, climbing, and sensory paths can support children’s vestibular development through nature play.",

  alternates: {
    canonical: "/nature-play-and-our-vestibular-system/",
  },

  openGraph: {
    title: "Vestibular Activities for Kids | Nature Play & Movement",
    description:
      "Learn how movement-rich nature play supports balance, body awareness, confidence, regulation, and vestibular development in children.",
    url: pageUrl,
    type: "article",
  },

  twitter: {
    title: "Vestibular Activities for Kids | Nature Play & Movement",
    description:
      "Nature play ideas for supporting children’s vestibular system through swinging, spinning, balancing, jumping, dancing, and climbing.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline: "Nature Play and Our Vestibular System",
      description:
        "Nature play ideas and movement activities that support children’s vestibular system, including swinging, spinning, balancing, jumping, dancing, climbing, and sensory paths.",
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
          name: "Nature Play and Our Vestibular System",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function VestibularSystemPost() {
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

            <h1>Nature Play and Our Vestibular System</h1>

            <p className={styles.heroIntro}>
              Hop, swing, spin, skip, roll, rock, run, walk, crawl — movement
              gives children essential information about balance, gravity, and
              where their bodies are in space.
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
              alt="Children moving and balancing in a natural outdoor play space"
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
            <h2>The vestibular system is our sense of movement and balance.</h2>

            <p>
              The vestibular system is one of the body’s movement-based sensory
              systems. It is located in the inner ear and helps the brain
              understand where the head is in relation to gravity.
            </p>

            <p>
              It tells us whether we are upright, upside down, tilted, spinning,
              or moving through space. When that system is not working
              comfortably, we can feel dizzy, disoriented, or off-balance.
            </p>

            <div className={styles.quote}>
              <p>
                The more children move in different ways, the more opportunities
                they have to build and understand their vestibular system.
              </p>
            </div>

            <h3>Dancing</h3>

            <p>
              Dancing is an easy way to give children vestibular input while
              also engaging multiple sensory systems at once.
            </p>

            <p>
              Turning, swaying, jumping, bending, spinning, and changing
              direction all challenge the body to continually process movement
              and balance. And conveniently, it also works extremely well as an
              impromptu kitchen dance party.
            </p>

            <h3>Swinging</h3>

            <p>
              Swinging gives children repeated movement through space and can be
              adjusted to match different sensory needs.
            </p>

            <p>
              Nest swings are especially flexible because children can sit,
              recline, gently sway, or experience more active movement depending
              on what feels comfortable to them.
            </p>

            <h3>Balancing</h3>

            <p>
              Balance activities do not need specialized equipment. A garden
              hose arranged in a winding line on the lawn can become an instant
              balance path.
            </p>

            <p>
              Children can walk the line, try different body positions, move
              forward or backward, or turn it into a game as they become more
              confident.
            </p>

            <h3>Jumping</h3>

            <p>
              Logs, stepping rounds, rocks, and other natural features create
              opportunities for children to jump between different heights and
              distances.
            </p>

            <p>
              That kind of movement combines vestibular input with coordination,
              balance, proprioception, planning, and confidence.
            </p>

            <div className={styles.quote}>
              <p>
                Movement-rich play does not need to look the same for every
                child.
              </p>
            </div>

            <h3>Let Movement-Sensitive Kids Stay in Control</h3>

            <p>
              Some children actively seek spinning, swinging, and big movement.
              Others are much more sensitive to it.
            </p>

            <p>
              For movement-sensitive children, Jena emphasizes letting the child
              control the amount and intensity of vestibular input. That might
              mean gently swaying instead of swinging high, rocking slowly, or
              watching before choosing to participate.
            </p>

            <p>
              When children control their sensory experience, they can feel
              safer and more confident in their bodies.
            </p>

            <h3>Sensory Paths Encourage Different Kinds of Movement</h3>

            <p>
              A sensory path can invite children to hop, balance, step, crawl,
              turn, or move their bodies in unusual ways.
            </p>

            <p>
              The goal is not simply exercise. Changing movement patterns gives
              the vestibular system more varied information to process.
            </p>

            <h3>Trees Naturally Invite Movement</h3>

            <p>
              Trees may be one of the best natural vestibular play features
              available. Climbing involves balance, changing head position,
              reaching, dangling, shifting weight, and sometimes a carefully
              calculated jump back down.
            </p>

            <p>
              Jena describes both the maple she climbed as a child and the old
              cherry tree her own children use for hanging, swinging, climbing,
              and eventually playing inside a small fort built into the canopy.
            </p>

            <h3>Plants Can Create Movement Too</h3>

            <p>
              Dense plantings can encourage children to weave, turn, duck, and
              move through a space differently.
            </p>

            <p>
              Jena suggests ornamental grasses such as Karl Foerster Feather
              Reed Grass for creating maze-like paths. The grasses add movement
              opportunities while also producing swishing sounds as children
              pass through them.
            </p>

            <h3>Logs Make Excellent Natural Movement Features</h3>

            <p>
              Log segments can become balance beams, climbing features, rocking
              elements, or stepping stones.
            </p>

            <p>
              A large log round cut in half can become a rocker, while thinner
              “log cookies” can be arranged as stepping stones for hopping and
              balance play.
            </p>

            <p>
              Nature play does not have to rely on expensive playground
              equipment. Often the richest movement opportunities come from
              simple natural materials children can interact with in many
              different ways.
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
