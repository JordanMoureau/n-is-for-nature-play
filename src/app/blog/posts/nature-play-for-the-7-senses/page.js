import Image from "next/image";
import Link from "next/link";

import styles from "../posts.module.css";

import WaveBottom from "@/app/components/waveBottom";
import WaveTop from "@/app/components/waveTop";

import PostHighlights from "../postHighlight";
import OrganicButton from "@/app/components/organicButton";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/nature-play-for-the-7-senses/`;

export const metadata = {
  title: "Nature Play for the 7 Senses | Sensory Activities for Kids",

  description:
    "Explore children’s seven sensory systems and learn how sensory-rich nature play can support development, regulation, movement, imagination, and connection.",

  alternates: {
    canonical: "/nature-play-for-the-7-senses/",
  },

  openGraph: {
    title: "Nature Play for the 7 Senses | Sensory Activities for Kids",
    description:
      "Learn how touch, sight, taste, smell, sound, vestibular input, and proprioception all shape the way children experience outdoor play.",
    url: pageUrl,
    type: "article",
  },

  twitter: {
    title: "Nature Play for the 7 Senses | Sensory Activities for Kids",
    description:
      "Explore all seven sensory systems and how nature-rich play supports children’s development, regulation, learning, and connection.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline: "Nature Play for Our Children's 7 Senses",
      description:
        "An introduction to children’s seven sensory systems and the role sensory-rich nature play can have in development, regulation, movement, learning, and connection.",
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
          name: "Nature Play for the 7 Senses",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function NaturePlayForSevenSensesPost() {
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

            <h1>Nature Play for Our Children&apos;s 7 Senses</h1>

            <p className={styles.heroIntro}>
              Children experience the world through far more than sight, sound,
              touch, taste, and smell. Movement and body awareness matter too —
              and nature gives all seven systems room to work together.
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
              alt="Children exploring a sensory-rich natural play environment"
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
              Sometimes nature reaches children in ways we cannot predict.
            </h2>

            <p>
              Jena opens this post with a story shared by the former director of
              a small nature center in the Midwest.
            </p>

            <p>
              During an elementary school field trip, a teacher stood apart from
              the group crying. When the director checked on her, the teacher
              explained that one of her students — a boy with autism who had
              been nonverbal since birth — had approached her after only a short
              time at the nature center and spoken a full sentence about how
              beautiful the place was and how good the air smelled.
            </p>

            <p>
              We may never know exactly what happened for that child in that
              moment. But the story captures something important: sensory
              experience can create openings for connection, expression, and
              engagement that adults cannot always anticipate.
            </p>

            <div className={styles.quote}>
              <p>
                Nature gives children many different ways to connect with the
                world — and sometimes one of those ways opens a door.
              </p>
            </div>

            <h3>We All Understand the World Through Our Senses</h3>

            <p>
              Our sensory systems are constantly receiving information and
              helping the brain interpret what is happening around us.
            </p>

            <p>
              Heat from a campfire tells us to step back. The smell of something
              familiar tells us what might be cooking. Texture, sound, movement,
              temperature, pressure, balance, and body position all contribute
              to our understanding of a place.
            </p>

            <h3>Children Need Rich Sensory Experience</h3>

            <p>
              Childhood is a foundational period for sensory, neurological,
              motor, and cognitive development.
            </p>

            <p>
              Jena’s central argument is that children need varied, experiential
              sensory input in their daily lives — and nature-rich environments
              naturally provide enormous amounts of it.
            </p>

            <p>
              Digging in dirt, walking barefoot in grass, carrying sticks,
              splashing in a creek, climbing, listening to birds, smelling
              plants, balancing on logs, and playing with loose natural
              materials all involve multiple sensory systems at once.
            </p>

            <div className={styles.quote}>
              <p>
                A sensory-rich environment is often simply a nature-rich
                environment.
              </p>
            </div>

            <h3>Children Do Not All Experience Sensory Input the Same Way</h3>

            <p>Sensory processing varies from person to person.</p>

            <p>
              A sensation that barely registers for one child may be intensely
              uncomfortable for another. A clothing seam, a loud siren, a
              particular texture, or fast movement can feel completely different
              depending on how that child&apos;s sensory system processes input.
            </p>

            <p>
              Some children may be hypersensitive and experience too much input.
              Others may be hyposensitive and seek stronger stimulation. In
              either case, children often gravitate toward experiences that help
              their bodies find a more comfortable level of sensory input.
            </p>

            <h3>Inclusive Sensory Design Benefits Everyone</h3>

            <p>
              One of Jena&apos;s major conclusions from decades of designing
              outdoor environments for children is that spaces designed
              thoughtfully for children with autism and sensory differences tend
              to become better spaces for all children.
            </p>

            <p>
              Variety matters. Choice matters. Children benefit when a space
              offers opportunities for strong movement, gentle movement,
              texture, quiet, sound, retreat, climbing, observation, touch, and
              open-ended exploration rather than expecting every child to
              interact with the environment in exactly the same way.
            </p>

            <h3>So What Are the 7 Senses?</h3>

            <p>Most of us grow up learning about five senses:</p>

            <p>touch, sight, taste, smell, and sound.</p>

            <p>
              Those absolutely matter, but there are two additional sensory
              systems that are especially important when thinking about
              children&apos;s movement, development, and outdoor play:
              vestibular processing and proprioception.
            </p>

            <h3>The Vestibular System</h3>

            <p>
              The vestibular system is located in the inner ear and helps the
              brain understand the position and movement of the head in relation
              to gravity.
            </p>

            <p>
              It helps us know whether we are upright, sideways, upside down,
              speeding up, slowing down, swinging, or spinning.
            </p>

            <p>
              Running, walking, swinging, spinning, jumping, rocking, balancing,
              and climbing all provide vestibular input.
            </p>

            <h3>The Proprioceptive System</h3>

            <p>Proprioception is our sense of where our body is in space.</p>

            <p>
              It helps us know where our limbs are without having to look at
              them and helps the brain calculate how much force or pressure an
              action requires.
            </p>

            <p>
              Carrying, pushing, pulling, digging, climbing, lifting, squeezing,
              balancing, and manipulating objects all create proprioceptive
              input.
            </p>

            <div className={styles.quote}>
              <p>
                Once you start looking at play through all seven senses, simple
                outdoor activities suddenly look much more complex.
              </p>
            </div>

            <h3>Nature Lets the Senses Work Together</h3>

            <p>
              Sensory systems do not operate in tidy little categories during
              real play.
            </p>

            <p>
              A child digging in a garden may be smelling soil, seeing insects,
              gripping a shovel, judging how much force to use, balancing while
              crouched, hearing other children nearby, and feeling the
              temperature of the earth — all at the same time.
            </p>

            <p>
              That is part of what makes nature play so valuable. The
              environment does not isolate experience into one skill or one
              sense. It lets children engage their bodies and brains as whole
              systems.
            </p>

            <h3>Start Looking at Outdoor Play Differently</h3>

            <p>
              Once you understand the seven senses, ordinary activities begin to
              look different.
            </p>

            <p>
              Playing in sand becomes tactile and proprioceptive. Walking
              barefoot through grass combines touch, balance, movement, sight,
              and body awareness. Exploring a creek may involve nearly every
              sensory system at once.
            </p>

            <p>
              The goal is not to turn play into therapy homework. It is simply
              to recognize how much developmental richness already exists in
              natural, child-led experiences.
            </p>

            <div className={styles.resourceBox}>
              <span>Explore All 7 Senses</span>

              <h2>Nature Play for the 7 Senses</h2>

              <p>
                Jena&apos;s 30-page guide walks through the seven sensory
                systems and practical ways families can create budget-friendly,
                sensory-rich nature play spaces at home.
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
