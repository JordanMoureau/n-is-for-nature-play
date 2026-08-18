import ContactForm from "./components/contactForm";
import WaveBottom from "./components/waveBottom";
import styles from "./page.module.css";
import Cards from "./components/cards";

import Image from "next/image";
import OrganicButton from "./components/organicButton";
import WaveTop from "./components/waveTop";
import LeafOne from "./components/leafOne";
import TheGrid from "./components/theGrid";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

export const metadata = {
  title: "Nature Play Spaces, Sensory Gardens & Outdoor Learning",

  description:
    "Create meaningful nature play spaces for children with consulting, sensory garden design, outdoor learning courses, ebooks, and practical resources.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Nature Play Spaces, Sensory Gardens & Outdoor Learning",
    description:
      "Create meaningful nature play spaces with expert consulting, sensory garden design, courses, ebooks, and educational resources.",
    url: "/",
  },

  twitter: {
    title: "Nature Play Spaces, Sensory Gardens & Outdoor Learning",
    description:
      "Consulting and resources for creating meaningful outdoor play and learning environments for children.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "N Is for Nature Play",
      description:
        "Nature play consulting, sensory garden design, outdoor learning resources, courses, and ebooks.",
      inLanguage: "en-US",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: "N Is for Nature Play",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.png`,
      },
      image: `${siteUrl}/images/nature-play-og.jpg`,
      description:
        "Nature play consulting and educational resources for parents, educators, schools, and early childhood programs.",
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      knowsAbout: [
        "Nature play",
        "Sensory garden design",
        "Natural playground design",
        "Outdoor classroom design",
        "Outdoor sensory play",
        "Nature-based early childhood education",
        "Landscape architecture",
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Nature Play Spaces, Sensory Gardens & Outdoor Learning",
      description:
        "Create meaningful nature play spaces for children with consulting, sensory garden design, outdoor learning courses, ebooks, and practical resources.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#organization`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/nature-play-home-hero.jpg`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#services`,
      name: "Nature Play Services and Resources",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Service",
            name: "Nature Play Consulting",
            url: `${siteUrl}/consulting`,
            description:
              "Professional guidance for nature play spaces, sensory gardens, outdoor classrooms, and natural learning environments.",
            provider: {
              "@id": `${siteUrl}/#organization`,
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Course",
            name: "Nature Play Courses",
            url: `${siteUrl}/courses`,
            description:
              "Educational courses for creating nature-based play and learning experiences for children.",
            provider: {
              "@id": `${siteUrl}/#organization`,
            },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "CreativeWork",
            name: "Nature Play Ebooks",
            url: `${siteUrl}/ebooks`,
            description:
              "Practical ebooks and downloadable resources about nature play, sensory environments, and outdoor learning.",
            publisher: {
              "@id": `${siteUrl}/#organization`,
            },
          },
        },
      ],
    },
  ],
};

const bigBox = {
  number: "#1",
  title: "Calmer Nervous Systems",
  text: "Nature gives children space to move, breathe, notice, dig, touch, climb, listen, and settle.",
  backgroundImage: "/kids-bubbles.jpeg",
};

const midBoxes = [
  {
    number: "#2",
    title: "Stronger Bodies",
    text: "Outdoor play builds balance, coordination, strength, confidence, and body awareness.",
    altColor: true,
  },
  {
    number: "#3",
    title: "Deeper Imagination",
    text: "A stick can become a wand, a bridge, a tool, a sword, a fishing pole, or the entire plot of a tiny woodland opera.",
    backgroundImage: "/kids-leaf-happy.jpeg",
  },
];

const smallBoxes = [
  {
    number: "#4",
    title: "Connection",
    text: "Children build relationships with each other, their caregivers, and the living world around them.",
    altColor: true,
  },
  {
    backgroundImage: "/kids-stick.jpeg",
    alt: "Children playing outside",
  },
  {
    number: "#5",
    title: "Sensory",
    text: "Children build relationships with each other, their caregivers, and the living world around them.",
    altColor: true,
  },
];

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className={styles.hero}>
        <div className={styles.content}>
          <Image
            src="/n-logo.png"
            alt="N is for Nature Play"
            width={300}
            height={150}
            className={styles.logo}
          />

          <h1>from ABC to Nature Play</h1>
          <h2>
            Build outdoor play spaces that help kids explore, regulate & grow
          </h2>
        </div>

        <WaveBottom wave="#f7f6f2" spacer="#afa9d2" />
      </div>

      <div className={styles.heroImage}>
        <Image
          src={"/hero.jpg"}
          alt="N is for Nature Play"
          width={1200}
          height={800}
        />
      </div>

      <section className={styles.introSection}>
        <WaveTop wave={"#afa9d2"} spacer={"#f7f6f2"} />
        <WaveBottom wave={"#f7f6f2"} spacer={"#afa9d2"} />
        <div className={styles.introContent}>
          <h2 className={styles.introHeading}>
            I Help Families &amp; Educators
            <br />
            Create Outdoor Spaces That Feel
            <div className={styles.introAccent}>magical &amp; meaningful.</div>
          </h2>

          <p className={styles.introText}>
            Children need more than playground equipment. They need mud, sticks,
            gardens, textures, movement, quiet corners, climbing, digging,
            pretending, and places where their whole bodies can settle into
            play.
            <br /> <br />
            At N is for Nature Play, Jena brings together landscape design,
            child development, sensory awareness, and hands-on creativity to
            help you build outdoor spaces that support real learning,
            regulation, confidence, and connection.
          </p>

          <div className={styles.bottomRow}>
            <LeafOne />

            <div className={styles.bumper}>
              <OrganicButton variant="yellow" fontSize={"2.2rem"}>
                Meet Jena
              </OrganicButton>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.imageLeafKids}></section>

      <Cards variant={"white"} />

      <section className={styles.naturePlaySection}>
        <WaveTop wave={"#338e74"} spacer={"#3d385c"} />
        <div className={styles.naturePlayContent}>
          <h2>
            Nature Play Spaces for Homes, Schools,
            <br />
            Childcare Centers, and Outdoor Learning Programs
          </h2>

          <p>
            Whether you’re starting with a backyard, a preschool playground, a
            school garden, or a larger community space, N is for Nature Play
            helps transform ordinary outdoor areas into meaningful environments
            for child-led exploration.
            <br />
            <br />
            Every space can include opportunities for movement, sensory play,
            loose parts, imaginative play, garden interaction, quiet regulation,
            and hands-on discovery.
          </p>

          <OrganicButton
            variant={"white"}
            href={"/about-nature-play"}
            fontSize={"3rem"}
          >
            Learn More
          </OrganicButton>
        </div>
        <WaveBottom spacer={"#e4b928"} wave={"#3d385c"} />
      </section>

      <div className={styles.grid}>
        <div className={styles.gridtop}>
          <h2>What children gain from sensory-based nature play</h2>
          <div className={styles.iconrow}>
            <Image src="/leaf-two.png" alt="" width={75} height={85} />
            <Image src="/shovel.png" alt="" width={75} height={80} />
          </div>
          <p>
            Nature Play isn't just about entertainment. It has documented
            pysiological benefits to children and we build spaces to enhance
            those benefits for kids.
          </p>
        </div>
        <TheGrid bigBox={bigBox} midBoxes={midBoxes} smallBoxes={smallBoxes} />
      </div>

      <ContactForm />
    </main>
  );
}
