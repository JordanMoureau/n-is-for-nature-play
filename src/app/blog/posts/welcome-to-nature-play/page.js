import Image from "next/image";
import Link from "next/link";

import styles from "../posts.module.css";

import WaveBottom from "@/app/components/waveBottom";
import WaveTop from "@/app/components/waveTop";

import PostHighlights from "../postHighlight";
import OrganicButton from "@/app/components/organicButton";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/hello-world/`;

export const metadata = {
  title: "Welcome to N Is for Nature Play | Sensory-Rich Nature Play for Kids",

  description:
    "Meet Jena and discover why sensory-rich nature play can be inclusive, healing, joyful, and deeply supportive for children of all abilities and diversities.",

  alternates: {
    canonical: "/hello-world/",
  },

  openGraph: {
    title: "Welcome to N Is for Nature Play",
    description:
      "Meet Jena and explore the heart behind sensory-rich nature play, inclusive outdoor learning, healing environments, and joyful childhood experiences.",
    url: pageUrl,
    type: "article",
  },

  twitter: {
    title: "Welcome to N Is for Nature Play",
    description:
      "Discover why Jena believes sensory-rich nature play can help children of all abilities learn, regulate, connect, and thrive.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline: "Welcome to N is for Nature Play!",
      description:
        "An introduction to Jena Ponti Jauchius and the philosophy behind sensory-rich nature play for children of all abilities and diversities.",
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
          name: "Welcome to N Is for Nature Play",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function WelcomeToNaturePlayPost() {
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

            <h1>Welcome to N Is for Nature Play!</h1>

            <p className={styles.heroIntro}>
              A big, warm, tree-huggin’ welcome — and a look at why sensory-rich
              nature play matters so much for children, families, and the people
              who care for them.
            </p>
          </div>
        </header>

        <section className={styles.heroWave}>
          <WaveBottom wave="#f7f6f2" spacer="#338e74" />
        </section>

        <section className={styles.featured}>
          <div className={styles.featuredInner}>
            <Image
              src="/jena-main.jpg"
              alt="Jena, landscape architect and sensory nature play designer"
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
            <h2>A Big, Warm, Tree Huggin’ Welcome</h2>

            <p>
              Whether you are brand new to nature play or already deep in the
              world of outdoor learning, Jena created N Is for Nature Play to
              share a fresh, heartfelt perspective on why natural play matters
              so much for children.
            </p>

            <p>
              Jena is a landscape architect with more than 20 years of
              experience designing nature-based play, learning, and therapeutic
              landscapes for children of many different abilities and
              diversities. Today, she teaches parents, educators, therapeutic
              professionals, and others how to create sensory-rich spaces where
              kids can play, learn, regulate, and grow.
            </p>

            <div className={styles.quote}>
              <p>
                The goal is not just to build prettier outdoor spaces. It is to
                create places where children can truly blossom.
              </p>
            </div>

            <h3>Nature Play for All 7 Senses</h3>

            <p>
              Jena’s approach centers on engaging all seven sensory systems:
              sight, touch, taste, smell, sound, vestibular processing, and
              proprioception.
            </p>

            <p>
              That matters because children learn, regulate, move, and connect
              through sensory experience. A rich outdoor environment gives them
              many different ways to seek the kind and intensity of input that
              works best for their bodies.
            </p>

            <h3>Reason #1: Sensory-Rich Nature Play Is Inclusive</h3>

            <p>
              Children are wonderfully different from one another. They have
              different bodies, learning styles, sensory needs, strengths, and
              ways of engaging with the world.
            </p>

            <p>
              Jena compares this to gardening: every plant has different
              conditions in which it thrives. Children are no different.
              Sensory-rich nature play works well because it offers more than
              one way to participate, learn, move, and explore.
            </p>

            <p>
              A child can learn letters sitting at a table, drawing them in
              sand, building them with natural materials, or tracing them with a
              finger. They can sit, kneel, lie on their stomach, stand, pace, or
              move while learning.
            </p>

            <div className={styles.quote}>
              <p>
                Nature does not ask every child to experience the world in the
                same way.
              </p>
            </div>

            <h3>Nature Meets Children Where They Are</h3>

            <p>
              One of the most powerful things about natural environments is
              their flexibility.
            </p>

            <p>
              Nature can be quiet or stimulating, gentle or challenging,
              structured or open-ended. Children can observe, climb, hide,
              build, dig, move, rest, collect, or simply sit and watch.
            </p>

            <p>
              Jena describes nature as a companion that can meet children where
              they are physically, cognitively, emotionally, and socially.
            </p>

            <h3>Reason #2: Sensory-Rich Nature Play Is Healing</h3>

            <p>
              Nature’s relationship with physical and emotional well-being is
              one of the reasons Jena believes so strongly in natural play and
              learning environments.
            </p>

            <p>
              She points to research around nature and well-being, but also to
              something more personal: her own experience of recovering from
              cancer, emergency surgeries, exhaustion, and the intense demands
              of early motherhood.
            </p>

            <p>
              In 2018, she began building a children’s sensory garden at home
              with help and enthusiastic supervision from her daughters. Over
              time, that garden became not just a place for the children, but a
              source of physical activity, mental clarity, emotional support,
              and connection for the whole family.
            </p>

            <div className={styles.quote}>
              <p>
                A nature play space can support the whole family, not just the
                children using it.
              </p>
            </div>

            <h3>Reason #3: Sensory-Rich Nature Play Brings Joy</h3>

            <p>The third reason is simpler: joy.</p>

            <p>
              Jena writes that one of the great purposes of childhood is
              discovering what brings us joy — and that children seem to
              understand this instinctively. They notice tiny things. They
              connect deeply. They play without needing a productivity goal
              attached to it.
            </p>

            <p>
              Adults often lose some of that ability as life becomes centered
              around schedules, achievement, efficiency, and the next thing that
              needs to get done.
            </p>

            <p>
              Children can remind us that joy usually lives in much smaller
              moments: finding a frog, watching a bug, digging in the dirt,
              building something strange, noticing a flower, or simply being
              outside together.
            </p>

            <h3>Children Can Be Our Teachers</h3>

            <p>
              One of the deeper ideas behind N Is for Nature Play is that
              children are not just recipients of good design or good parenting.
            </p>

            <p>
              They can show adults how to slow down, notice more, question old
              assumptions, and experience the world with more curiosity and
              individuality.
            </p>

            <p>Nature-rich spaces give them somewhere to do exactly that.</p>

            <div className={styles.resourceBox}>
              <span>Want to Go Deeper?</span>

              <h2>Nature Play for the 7 Senses</h2>

              <p>
                Explore Jena’s guide to creating natural play and learning
                spaces that support all seven sensory systems and give children
                more ways to move, explore, regulate, and connect.
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
