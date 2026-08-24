import Image from "next/image";
import Link from "next/link";

import styles from "../posts.module.css";

import WaveBottom from "@/app/components/waveBottom";
import WaveTop from "@/app/components/waveTop";

import PostHighlights from "../postHighlight";
import OrganicButton from "@/app/components/organicButton";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/the-language-of-the-senses/`;

export const metadata = {
  title: "The Language of the Senses | Sensory Play & Child Development",

  description:
    "Explore how children understand and communicate with their environment through sensory experience, nature play, movement, texture, color, sound, and connection.",

  alternates: {
    canonical: "/the-language-of-the-senses/",
  },

  openGraph: {
    title: "The Language of the Senses | Sensory Play & Child Development",
    description:
      "Children are constantly having an unspoken conversation with their environment. Discover how sensory-rich nature play helps deepen that relationship.",
    url: pageUrl,
    type: "article",
  },

  twitter: {
    title: "The Language of the Senses | Sensory Play & Child Development",
    description:
      "Explore how children use their senses to understand, question, and build relationships with the environments around them.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline: "The Language of the Senses",
      description:
        "An exploration of how children use their sensory systems to understand, communicate with, and build relationships with the environments around them.",
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
          name: "The Language of the Senses",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function LanguageOfTheSensesPost() {
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

            <h1>The Language of the Senses</h1>

            <p className={styles.heroIntro}>
              Before children can explain what a space means to them, their
              bodies are already listening, questioning, exploring, and
              answering through the senses.
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
              alt="Child exploring leaves and natural materials through sensory play"
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
              Our senses are the filters through which we understand the world.
            </h2>

            <p>
              Children are constantly gathering information about the places
              around them. Before they have the language to explain exactly what
              they are feeling or noticing, their sensory systems are already
              helping them interpret the environment.
            </p>

            <p>
              Jena describes this as a kind of unspoken conversation between a
              child and the space they enter — whether that space is a
              playground, an outdoor classroom, a streetscape, or even their own
              bedroom.
            </p>

            <div className={styles.quote}>
              <p>Every environment is already saying something to a child.</p>
            </div>

            <h3>What Can This Place Offer Me?</h3>

            <p>
              When children enter a new environment, they begin asking questions
              without necessarily saying them out loud.
            </p>

            <p>
              What can I do here? What can I experience? Is there somewhere to
              move? Somewhere to hide? Something to touch? Something to
              investigate? Does this place feel safe? Interesting? Boring?
              Overwhelming? Inviting?
            </p>

            <p>
              Those questions shape the way a child begins interacting with the
              environment.
            </p>

            <h3>The Environment Always Answers</h3>

            <p>Spaces communicate back through sensory information.</p>

            <p>
              Color, shape, texture, fragrance, movement, sound, taste,
              temperature, light, and physical challenge all tell children
              something about what is possible in a place.
            </p>

            <p>
              A smooth open lawn communicates something different from a dense
              garden. A climbing tree offers a different invitation than a
              plastic bench. Running water, tall grasses, loose branches, bright
              flowers, mud, rocks, and shaded nooks each create different kinds
              of sensory conversations.
            </p>

            <div className={styles.quote}>
              <p>
                The richer the environment becomes, the more ways children have
                to respond to it.
              </p>
            </div>

            <h3>Play Deepens the Conversation</h3>

            <p>
              At first, a child may simply notice a space. Then they begin to
              interact with it.
            </p>

            <p>
              They touch something. Move something. Climb. Smell. Listen.
              Gather. Build. Watch. Dig. Taste. Balance. Hide.
            </p>

            <p>
              Through play, that initial sensory exchange becomes deeper. The
              child begins learning what the environment can do and what they
              themselves can do within it.
            </p>

            <h3>This Happens Before Language</h3>

            <p>
              One of the most important parts of this idea is that the
              conversation does not depend on spoken language.
            </p>

            <p>
              Infants experience it. Non-verbal children experience it. Children
              who communicate differently still build relationships with their
              surroundings through movement, sensation, curiosity, comfort,
              challenge, and repetition.
            </p>

            <h3>Nature Is Especially Good at Speaking This Language</h3>

            <p>Natural environments are full of variation.</p>

            <p>
              They change with weather, seasons, growth, decay, animals,
              sunlight, water, and the movement of people through them. That
              variability gives children an enormous amount of sensory
              information to respond to.
            </p>

            <p>
              Nature is rarely just one thing. A garden can be visually rich,
              tactile, fragrant, edible, noisy, quiet, challenging, calming, and
              unpredictable all at once.
            </p>

            <div className={styles.quote}>
              <p>
                Nature does not need children to understand it intellectually
                before they can begin building a relationship with it.
              </p>
            </div>

            <h3>Children Need Time to Listen</h3>

            <p>
              Jena emphasizes that children need both time and space for these
              relationships to develop.
            </p>

            <p>
              If every moment is directed, hurried, or filled with adult
              instruction, there is less room for a child to notice what an
              environment is offering and decide how they want to respond.
            </p>

            <p>
              Unstructured nature play gives children the chance to slow down,
              follow their own attention, and develop familiarity with a place.
              Over time, that familiarity can become a lasting relationship with
              nature.
            </p>

            <h3>That Relationship Can Become an Anchor</h3>

            <p>
              A meaningful connection with nature is not just about having fun
              outside.
            </p>

            <p>
              Jena describes that relationship as something children can carry
              with them throughout their lives — a source of familiarity,
              connection, comfort, and grounding when life becomes difficult or
              turbulent.
            </p>

            <h3>Design the Conversation, Not Just the Space</h3>

            <p>
              Thinking about sensory design changes the question from “What
              equipment should go here?” to “What experiences can this place
              offer?”
            </p>

            <p>
              Can children move in different ways? Can they find quiet? Can they
              touch living things? Can they investigate small details? Can they
              manipulate materials? Can they smell, listen, balance, build, and
              imagine?
            </p>

            <p>
              The goal is not to control how children use the environment. It is
              to give the environment enough richness that children have
              something meaningful to respond to.
            </p>

            <div className={styles.resourceBox}>
              <span>Explore the Senses</span>

              <h2>Nature Play for the 7 Senses</h2>

              <p>
                Learn more about how sensory-rich nature play can support
                children’s development, regulation, learning, and connection
                with the natural world.
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
