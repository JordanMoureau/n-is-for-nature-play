import Image from "next/image";
import styles from "./sensoryMakeover.module.css";

import WaveTop from "../../components/waveTop";
import WaveBottom from "../../components/waveBottom";
import ContactForm from "../../components/contactForm";
import Arrows from "../../components/arrows";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/ebooks/sensory-space-makeover`;

const purchaseUrl =
  "https://nisfornatureplay.com/product/sensory-space-makeover/";

export const metadata = {
  title: "Sensory Space Makeover | Digital Resource",

  description:
    "Learn how to create calmer, more sensory-supportive spaces at home with the Sensory Space Makeover from N Is for Nature Play.",

  alternates: {
    canonical: "/ebooks/sensory-space-makeover",
  },

  openGraph: {
    title: "Sensory Space Makeover",
    description:
      "Learn to see your home through your child's sensory lens and make practical changes that support calm, connection, and regulation.",
    url: "/ebooks/sensory-space-makeover",
  },

  twitter: {
    title: "Sensory Space Makeover",
    description:
      "Simple, practical guidance for creating calmer and more sensory-supportive spaces at home.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "Sensory Space Makeover",
      description:
        "A digital sensory-space resource for creating calmer, more supportive home environments for children.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      breadcrumb: {
        "@id": `${pageUrl}/#breadcrumb`,
      },
      inLanguage: "en-US",
    },

    {
      "@type": "Product",
      "@id": `${pageUrl}/#product`,
      name: "Sensory Space Makeover",
      description:
        "A digital resource with a printable sensory-space assessment, video walkthrough, and practical guidance for creating calmer home environments.",
      brand: {
        "@type": "Brand",
        name: "N Is for Nature Play",
      },
      offers: {
        "@type": "Offer",
        price: "37.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: purchaseUrl,
      },
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
          name: "E-Books & Courses",
          item: `${siteUrl}/ebooks-courses`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Sensory Space Makeover",
          item: pageUrl,
        },
      ],
    },
  ],
};

const included = [
  {
    number: "01",
    title: "Assess Your Space",
    text: "Use the printable Sensory Space Self-Assessment to notice where your home may be supporting your child — and where it may be creating sensory overload.",
  },
  {
    number: "02",
    title: "Learn What to Look For",
    text: "Follow Jena's video walkthrough to better understand the assessment and begin seeing your space through a sensory lens.",
  },
  {
    number: "03",
    title: "Make Small Changes",
    text: "Use practical guidance and quick-win strategies to create calmer spaces without redesigning your entire home.",
  },
];

export default function SensoryMakeoverPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>DIGITAL SENSORY RESOURCE</p>

            <h1>
              Give your home a<span>Sensory Makeover</span>
            </h1>

            <p className={styles.heroDescription}>
              Learn to see your home through your child&apos;s sensory lens —
              and make simple, meaningful changes that support more calm,
              connection, and ease.
            </p>

            <div className={styles.priceRow}>
              <span className={styles.price}>$37</span>
              <span className={styles.fileType}>Digital Resource</span>
            </div>

            <a href={purchaseUrl} className={styles.buyButton}>
              Get the Sensory Makeover
            </a>
          </div>

          <div className={styles.heroArt}>
            <div className={styles.resourceShape}>
              <Image
                src="/icon-pot.png"
                alt=""
                width={230}
                height={230}
                className={styles.pot}
              />

              <p>The</p>

              <h2>
                Sensory Space
                <span>Makeover</span>
              </h2>

              <small>by Jena Ponti Jauchius</small>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.heroWave}>
        <WaveBottom wave="#f7f6f2" spacer="#338e74" />
      </section>

      <section className={styles.problem}>
        <div className={styles.problemInner}>
          <div className={styles.problemText}>
            <p className={styles.smallHeading}>YOUR SPACE IS TALKING</p>

            <h2>
              Your child&apos;s environment is always
              <span>sending signals.</span>
            </h2>

            <p>
              Light. Sound. Texture. Clutter. Movement. Smell. Every part of a
              space gives your child&apos;s nervous system information.
            </p>

            <p>
              Sometimes that information says, “You&apos;re safe here.”
              Sometimes it says, “This is too much.”
            </p>

            <p>
              Learning to recognize the difference can completely change the way
              you think about your home.
            </p>
          </div>

          <div className={styles.problemImage}>
            <Image
              src="/kids-leaf.jpeg"
              alt="Child exploring plants and natural sensory materials"
              width={800}
              height={900}
            />
          </div>
        </div>
      </section>

      <section className={styles.shift}>
        <WaveTop wave="#338e74" spacer="#e4b928" />

        <div className={styles.shiftInner}>
          <Image src="/leaf-two.png" alt="" width={95} height={110} />

          <h2>
            You don&apos;t need a<span>whole new house.</span>
          </h2>

          <p>
            You do not need a huge renovation, expensive sensory equipment, or
            perfectly designed rooms. Sometimes the biggest shift starts with
            understanding what is already happening in the space around your
            child.
          </p>
        </div>

        <WaveBottom wave="#e4b928" spacer="#f7f6f2" />
      </section>

      <section className={styles.included}>
        <div className={styles.includedInner}>
          <div className={styles.includedHeading}>
            <p className={styles.smallHeading}>WHAT YOU&apos;LL GET</p>

            <h2>
              Look. Understand.
              <span>Then adjust.</span>
            </h2>

            <p>
              The Sensory Space Makeover gives you a practical process for
              identifying what may be causing overwhelm and making changes that
              work with your child&apos;s sensory needs.
            </p>
          </div>

          <div className={styles.includedGrid}>
            {included.map((item) => (
              <article className={styles.includedCard} key={item.number}>
                <span>{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.whirlwind}>
        <div className={styles.whirlwindInner}>
          <div className={styles.whirlwindArt}>
            <Image
              src="/shovel.png"
              alt=""
              width={150}
              height={170}
              className={styles.shovel}
            />

            <div className={styles.whirlwindCircle}>
              <span>WHIRLWIND</span>
              <strong>ZONES</strong>
            </div>
          </div>

          <div className={styles.whirlwindText}>
            <p className={styles.smallHeading}>NOTICE THE OVERLOAD</p>

            <h2>
              Find your home&apos;s
              <span>Whirlwind Zones.</span>
            </h2>

            <p>
              Some spaces naturally collect more sensory input than others. They
              may be louder, busier, brighter, more cluttered, or simply harder
              for your child&apos;s nervous system to process.
            </p>

            <p>
              The Sensory Space Makeover helps you identify those areas and
              begin rebalancing them into spaces that better support regulation.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.forYou}>
        <WaveTop wave="#f7f6f2" spacer="#cbdcbe" />

        <div className={styles.forYouInner}>
          <div className={styles.forYouText}>
            <p className={styles.smallHeading}>THIS MAY BE FOR YOU IF...</p>

            <h2>
              Home feels a little more
              <span>chaotic than calm.</span>
            </h2>

            <ul>
              <li>
                Your child seems easily overwhelmed by certain rooms or routines
              </li>

              <li>
                You want to better understand your child&apos;s sensory
                differences
              </li>

              <li>
                You are looking for practical ways to support regulation at home
              </li>

              <li>
                You want changes that can work in a rental, apartment, small
                home, or large home
              </li>

              <li>
                You want to create more opportunities for calm, connection, and
                joy
              </li>
            </ul>
          </div>

          <Image
            src="/kids-stick.jpeg"
            alt="Child playing outdoors in a sensory-rich environment"
            width={700}
            height={700}
          />
        </div>
      </section>

      <section className={styles.jena}>
        <WaveTop wave="#cbdcbe" spacer="#338e74" />

        <div className={styles.jenaInner}>
          <Image
            src="/jena-main.jpg"
            alt="Jena Ponti Jauchius, sensory nature play designer"
            width={600}
            height={600}
          />

          <div className={styles.jenaText}>
            <p className={styles.jenaEyebrow}>MEET YOUR GUIDE</p>

            <h2>
              Sensory design without the
              <span>clinical overwhelm.</span>
            </h2>

            <p>
              Jena&apos;s work combines sensory design, nature play, and
              practical experience creating environments around the needs of
              real children.
            </p>

            <p>
              The goal is not to make your home perfect. It is to help you
              notice what your child&apos;s environment is asking of them — and
              where small changes can make daily life feel easier.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.testimonial}>
        <WaveTop wave="#338e74" spacer="#afa9d2" />

        <div className={styles.testimonialInner}>
          <Image src="/icon-flower.png" alt="" width={110} height={110} />

          <p>
            “Jena&apos;s understanding of children&apos;s needs and approach to
            nature play is nothing short of magic.”
          </p>

          <span>— Brooke M., Mom of 3 & Kindergarten Teacher</span>
        </div>
      </section>

      <section className={styles.purchase}>
        <div className={styles.purchaseInner}>
          <div className={styles.purchaseText}>
            <p className={styles.purchaseEyebrow}>START WITH ONE SPACE</p>

            <h2>
              Make home feel a little more
              <span>supportive.</span>
            </h2>

            <p>
              Get the Sensory Space Makeover and learn how to identify sensory
              overload, understand what your child may need, and make practical
              changes using the space you already have.
            </p>

            <div className={styles.purchaseBottom}>
              <strong>$37</strong>

              <a href={purchaseUrl} className={styles.purchaseButton}>
                Get the Sensory Makeover
              </a>
            </div>

            <p className={styles.digitalNote}>
              Digital product. No physical product will be mailed.
            </p>
          </div>

          <Image
            src="/icon-pot.png"
            alt=""
            width={220}
            height={220}
            className={styles.purchaseIcon}
          />
        </div>
      </section>

      <div id="contact">
        <ContactForm Top={"#338e74"} />
      </div>
    </main>
  );
}
