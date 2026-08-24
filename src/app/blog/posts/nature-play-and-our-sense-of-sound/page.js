import Image from "next/image";
import Link from "next/link";

import styles from "../posts.module.css";

import WaveBottom from "@/app/components/waveBottom";
import WaveTop from "@/app/components/waveTop";

import PostHighlights from "../postHighlight";
import OrganicButton from "@/app/components/organicButton";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/nature-play-and-our-sense-of-sound/`;

export const metadata = {
  title: "Auditory Sensory Activities for Kids | Nature Play Ideas",

  description:
    "Explore how nature sounds, social sounds, music, vibration, quiet spaces, and sensory plants can support children’s auditory development through nature play.",

  alternates: {
    canonical: "/nature-play-and-our-sense-of-sound/",
  },

  openGraph: {
    title: "Auditory Sensory Activities for Kids | Nature Play Ideas",
    description:
      "Learn how outdoor soundscapes can support regulation, play, learning, sensory development, and connection for children.",
    url: pageUrl,
    type: "article",
  },

  twitter: {
    title: "Auditory Sensory Activities for Kids | Nature Play Ideas",
    description:
      "Explore nature sounds, music, vibration, quiet spaces, and sensory plants that support children’s auditory development.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline: "Nature Play and Our Sense of Sound",
      description:
        "Nature play ideas for supporting children’s auditory sensory system through outdoor soundscapes, music, vibration, quiet spaces, and sensory plants.",
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
          name: "Nature Play and Our Sense of Sound",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function SenseOfSoundPost() {
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

            <h1>Nature Play and Our Sense of Sound</h1>

            <p className={styles.heroIntro}>
              Birds, wind, water, voices, music, rustling leaves, and quiet all
              shape the way children experience outdoor play.
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
              alt="Child exploring a sensory-rich natural outdoor environment"
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
            <h2>Sound reaches us incredibly fast.</h2>

            <p>
              Hearing is one of our fastest sensory systems, which means the
              sounds around children can influence how they experience a space
              before they even understand where those sounds are coming from.
            </p>

            <p>
              Sound is also closely tied to emotion. A familiar voice, birdsong,
              flowing water, laughter, or music can help a child feel safe,
              curious, calm, and ready to play. Loud, jarring, or uncomfortable
              sounds can have the opposite effect and push the nervous system
              toward stress or fight-or-flight.
            </p>

            <div className={styles.quote}>
              <p>
                The sounds around children help tell their nervous systems
                whether a space feels safe, interesting, exciting, or
                overwhelming.
              </p>
            </div>

            <h3>Three Kinds of Sound in Outdoor Play</h3>

            <p>
              Jena groups outdoor sensory sound into three broad categories:
              nature sounds, social sounds, and musical sounds. Each contributes
              something different to the way children experience a play space.
            </p>

            <p>
              Nature sounds might include birdsong, leaves moving in the wind,
              sand shifting under bare feet, insects buzzing, or water
              splashing. These kinds of sounds can add calm, interest, and
              sensory richness to an outdoor environment.
            </p>

            <p>
              Social sounds come from human connection: talking, whispering,
              laughing, singing, crying, shouting, and playing together.
              Sometimes those sounds feel nurturing and safe; sometimes they can
              become overwhelming.
            </p>

            <p>
              Music adds another layer entirely. Rhythm, vibration, melody,
              movement, and emotion all come together, making music a powerful
              sensory integration experience for developing children.
            </p>

            <h3>Sound Is Something We Feel Too</h3>

            <p>
              Sound is not only auditory. It also creates vibration that can be
              felt through the skin and body.
            </p>

            <p>
              A bass drum produces a very different physical sensation than a
              xylophone. Children experience those differences not just through
              their ears, but through their tactile sensory systems as sound
              waves move through and around them.
            </p>

            <h3>Quiet Belongs in a Soundscape</h3>

            <p>
              A thoughtfully designed sensory environment also needs places
              where children can retreat from sound.
            </p>

            <p>
              Cozy child-sized spaces — forts, tipis, tucked-away nooks, or
              areas enclosed by vegetation — can give children personal space to
              regulate and reduce sensory input when they need it.
            </p>

            <div className={styles.quote}>
              <p>
                A good soundscape is not simply full of interesting sounds. It
                also gives children somewhere to find quiet.
              </p>
            </div>

            <h3>Listen to the Play Space</h3>

            <p>
              One simple way to explore sound with children is to stop and
              listen.
            </p>

            <p>
              Close your eyes together outside and notice what you hear. Which
              sounds are close? Which are far away? Which feel pleasant,
              exciting, strange, or annoying? Do those sounds change throughout
              the day or across the seasons?
            </p>

            <p>
              These conversations can help children become more aware of their
              sensory environment while also building descriptive language and
            </p>

            <h3>Sensory Plants for Sound</h3>

            <p>
              Plants can make outdoor environments surprisingly musical. Seed
              pods rattle. Leaves rustle. Tall grasses swish and scratch when
              children brush past them or when the wind moves through.
            </p>

            <p>
              Jena highlights several plants that can add sound to a sensory
              garden, including All Gold Japanese Forest Grass, Silver Dollar
              Plant, Karl Foerster Feather Reed Grass, and quaking aspen.
            </p>

            <h3>All Gold Japanese Forest Grass</h3>

            <p>
              Japanese Forest Grass has smooth, inviting blades that children
              can brush with their hands or legs, producing soft swooshing
              sounds while also adding color and tactile interest to the space.
            </p>

            <h3>Silver Dollar Plant</h3>

            <p>
              As Silver Dollar Plant dries, its flat seed pods develop a papery,
              rattling quality. Shaking the dried stalks gives children another
              way to experiment with plant-based sound.
            </p>

            <h3>Karl Foerster Feather Reed Grass</h3>

            <p>
              Feather reed grass is sturdy enough for active play and produces a
              pleasant rustling sound as children move through it. Jena has even
              used it in maze-like plantings where children can wind through the
              grasses and experience the sound around their bodies.
            </p>

            <h3>Quaking Aspen</h3>

            <p>
              Quaking aspen earns its name from the movement and sound of its
              leaves in the wind. The leaves tremble and clack together,
              creating a distinctive natural soundscape that can make the
              movement of the wind almost tangible.
            </p>

            <p>
              As always, plants used in children's play areas should be
              non-toxic, and harmful pesticides or herbicides should be avoided
              in those spaces.
            </p>

            <div className={styles.resourceBox}>
              <span>Want to Learn More?</span>

              <h2>Nature Play for the 7 Senses</h2>

              <p>
                Explore more ways to create sensory-rich natural play and
                learning environments for children through Jena’s guide to the
                seven sensory systems.
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
