import Image from "next/image";
import styles from "./designASpace.module.css";

import WaveTop from "../components/waveTop";
import WaveBottom from "../components/waveBottom";
import OrganicButton from "../components/organicButton";
import ContactForm from "../components/contactForm";
import TheGrid from "../components/theGrid";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/design-a-space`;

export const metadata = {
  title: "Design a Nature Play Space",

  description:
    "Work with N Is for Nature Play to create a thoughtful, sensory-rich outdoor play space for your home, school, childcare center, park, or community.",

  alternates: {
    canonical: "/design-a-space",
  },

  openGraph: {
    title: "Design a Nature Play Space",
    description:
      "Create an outdoor play space designed around movement, sensory exploration, imagination, regulation, and real child-led play.",
    url: "/design-a-space",
  },

  twitter: {
    title: "Design a Nature Play Space",
    description:
      "Work with N Is for Nature Play to create thoughtful outdoor spaces where children can explore, regulate, imagine, and grow.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "Design a Nature Play Space",
      description:
        "Custom nature play and sensory-rich outdoor space design for homes, schools, childcare centers, parks, and communities.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${pageUrl}/#service`,
      },
      breadcrumb: {
        "@id": `${pageUrl}/#breadcrumb`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "Nature Play Space Design",
      url: pageUrl,
      description:
        "Custom guidance and landscape design for sensory-rich, child-led outdoor play environments.",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      serviceType: [
        "Nature play design",
        "Sensory garden design",
        "Outdoor classroom design",
        "Natural playground design",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}/#breadcrumb`,
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
          name: "Design a Space",
          item: pageUrl,
        },
      ],
    },
  ],
};

const processCards = [
  {
    icon: "/icon-flower.png",
    title: "Tell Me About Your Space",
    text: "Share what you have now, who uses it, what is frustrating you, and what you hope the space could become.",
    buttonText: "Start Here",
    link: "#contact",
  },
  {
    icon: "/icon-pot.png",
    title: "We Build the Plan",
    text: "I bring together the site, sensory needs, movement, planting, materials, play opportunities, and practical constraints into one thoughtful design.",
    buttonText: "See Who It's For",
    link: "#who-we-work-with",
  },
  {
    icon: "/icon-net.png",
    title: "Bring It to Life",
    text: "You leave with a clear design direction for creating a space that works beautifully for real children in real life.",
    buttonText: "Start Your Project",
    link: "#contact",
  },
];

const bigBox = {
  title: "Families",
  text: "You want a backyard that gives your children more room to move, imagine, explore, regulate, and settle into real play.",
  backgroundImage: "/kids-leaf.jpeg",
};

const midBoxes = [
  {
    title: "Schools & Childcare",
    text: "You want an outdoor environment that supports learning, movement, sensory needs, creativity, and child-led discovery.",
    altColor: true,
  },
  {
    title: "Parks & Communities",
    text: "You want a public space that invites families to gather, explore, move, play, and connect with the natural world.",
    backgroundImage: "/garden-detail.jpg",
  },
];

const smallBoxes = [
  {
    title: "You Have a Vision",
    text: "You know the space could be more, but you need help turning scattered ideas into one cohesive plan.",
    altColor: true,
  },
  {
    backgroundImage: "/girl-with-flower.jpg",
    alt: "Child exploring flowers in a nature play space",
  },
  {
    title: "You Need a Starting Point",
    text: "You do not need to have everything figured out before reaching out. That is part of the process.",
    altColor: false,
  },
];

export default function DesignASpacePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            Turn your outdoor space into somewhere children can
            <span>Explore, Regulate & Grow</span>
          </h1>

          <p>
            Custom nature play design for families, schools, childcare centers,
            parks, and communities that want more than a traditional playground.
          </p>
        </div>
      </section>

      <section className={styles.intro}>
        <WaveTop wave="#e4b928" spacer="#cbdcbe" />

        <div className={styles.introBox}>
          <Image
            src="/jena-main.jpg"
            alt="Jena, nature play designer and landscape architect"
            width={1000}
            height={1000}
            priority
          />

          <div className={styles.introInner}>
            <h2>You already have the space. It just needs a better plan.</h2>

            <p>
              Maybe your yard feels empty. Maybe your school playground is all
              equipment and nowhere to explore. Maybe you know you want gardens,
              sensory play, climbing, digging, loose parts, and quiet spaces —
              but you do not know how to make all of it work together.
            </p>

            <p>
              That is where I come in. I help turn the space you already have
              into a thoughtful outdoor environment built around the children
              who actually use it.
            </p>
          </div>
        </div>

        <WaveBottom wave="#cbdcbe" spacer="#338e74" />
      </section>

      <section className={styles.heroImage}>
        <Image
          src="/abouthero.png"
          alt="Children exploring a natural outdoor play environment"
          width={1400}
          height={900}
          priority
        />
      </section>

      <section className={styles.story} id="process">
        <WaveTop wave="#e4b928" spacer="#338e74" />

        <div className={styles.storyInner}>
          <div className={styles.storyText}>
            <h2>
              A beautiful space is nice. A space children actually use is
              better.
            </h2>

            <p>
              Good nature play design creates opportunities for movement,
              sensory exploration, imagination, connection, regulation,
              discovery, and rest.
            </p>

            <p>
              Every project begins with the site, the children, and the people
              responsible for caring for it. The goal is not to fill the space
              with more stuff. It is to make the space itself invite play.
            </p>
          </div>

          <div className={styles.processHeading}>
            <h3>How it works</h3>
            <p>
              You do not need a finished vision before you reach out. We build
              that together.
            </p>
          </div>

          <div className={styles.cards}>
            <div className={styles.cardsBox}>
              {processCards.map((card) => (
                <div className={styles.card} key={card.title}>
                  <Image
                    src={card.icon}
                    alt=""
                    width={200}
                    height={200}
                    className={styles.cardIcon}
                  />

                  <div className={styles.inner}>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>

                  <div className={styles.buttonplacement}>
                    <OrganicButton
                      variant="yellowPlain"
                      href={card.link}
                      fontSize={"2.4rem"}
                    >
                      {card.buttonText}
                    </OrganicButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <WaveBottom wave="#338e74" spacer="#e4b928" />
      </section>

      <section className={styles.grid} id="who-we-work-with">
        <div className={styles.gridtop}>
          <h2>Is this for you?</h2>

          <div className={styles.iconrow}>
            <Image src="/leaf-two.png" alt="" width={75} height={85} />
            <Image src="/shovel.png" alt="" width={75} height={80} />
          </div>

          <p>
            I work with people who want outdoor spaces that feel thoughtful,
            imaginative, practical, and genuinely useful for children.
          </p>
        </div>

        <TheGrid bigBox={bigBox} midBoxes={midBoxes} smallBoxes={smallBoxes} />
      </section>

      <section className={styles.cta}>
        <WaveTop wave="#e4b928" spacer="#afa9d2" />

        <div className={styles.ctaInner}>
          <h2>
            Ready to see what your space
            <span>could become?</span>
          </h2>

          <p>
            Tell me what you are working with, who uses the space, and what you
            wish it could do better. You do not need a perfect plan before you
            reach out.
          </p>

          <OrganicButton variant="yellow" href="#contact" fontSize={"2.6rem"}>
            Start a Design Project
          </OrganicButton>
        </div>
      </section>

      <div id="contact">
        <ContactForm Top={"#338e74"} />
      </div>
    </main>
  );
}
