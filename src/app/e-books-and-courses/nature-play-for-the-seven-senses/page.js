import Image from "next/image";
import styles from "./sevenSenses.module.css";

import WaveTop from "../../components/waveTop";
import WaveBottom from "../../components/waveBottom";
import ContactForm from "../../components/contactForm";
import Arrows from "../../components/arrows";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/ebooks/nature-play-seven-senses`;

const purchaseUrl =
  "https://nisfornatureplay.com/product/ebook-nature-play-for-the-7-senses/";

export const metadata = {
  title: "Nature Play for the 7 Senses | E-Book",

  description:
    "Discover how nature play can support all seven sensory systems with this practical 30-page guide from nature play designer Jena Ponti Jauchius.",

  alternates: {
    canonical: "/ebooks/nature-play-seven-senses",
  },

  openGraph: {
    title: "Nature Play for the 7 Senses",
    description:
      "A practical guide to creating sensory-rich nature play experiences for children at home.",
    url: "/ebooks/nature-play-seven-senses",
  },

  twitter: {
    title: "Nature Play for the 7 Senses",
    description:
      "Learn how nature play supports children's seven sensory systems with this practical guide for families.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "Nature Play for the 7 Senses",
      description:
        "A 30-page digital guide to children's seven sensory systems and sensory-rich nature play.",
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
      name: "Nature Play for the 7 Senses",
      description:
        "A 30-page PDF guide to children's seven sensory systems and creating budget-friendly nature play spaces at home.",
      brand: {
        "@type": "Brand",
        name: "N Is for Nature Play",
      },
      offers: {
        "@type": "Offer",
        price: "22.00",
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
          name: "Nature Play for the 7 Senses",
          item: pageUrl,
        },
      ],
    },
  ],
};

const senses = [
  "Sight",
  "Sound",
  "Touch",
  "Taste & Smell",
  "Movement",
  "Body Awareness",
  "Balance",
];

export default function SevenSensesPage() {
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
            <p className={styles.eyebrow}>30-PAGE DIGITAL E-BOOK</p>

            <h1>
              Nature Play for the
              <span>7 Senses</span>
            </h1>

            <p className={styles.heroDescription}>
              Discover how outdoor play can support your child&apos;s whole
              sensory system — and how to create more of those opportunities
              right at home.
            </p>

            <div className={styles.priceRow}>
              <span className={styles.price}>$22</span>
              <span className={styles.fileType}>Instant PDF Download</span>
            </div>

            <a href={purchaseUrl} className={styles.buyButton}>
              Get the E-Book
            </a>
          </div>

          <div className={styles.heroArt}>
            <div className={styles.bookShape}>
              <Image
                src="/icon-flower.png"
                alt=""
                width={250}
                height={250}
                className={styles.flower}
              />

              <p>Nature Play</p>
              <h2>for the 7 Senses</h2>
              <span>by Jena Ponti Jauchius</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.heroWave}>
        <WaveBottom wave="#f7f6f2" spacer="#338e74" />
      </section>

      <section className={styles.intro}>
        <div className={styles.introInner}>
          <div className={styles.introImage}>
            <Image
              src="/kids-stick.jpeg"
              alt="Child exploring outdoors through nature play"
              width={800}
              height={800}
            />
          </div>

          <div className={styles.introText}>
            <p className={styles.smallHeading}>THERE ARE MORE THAN FIVE</p>

            <h2>
              Children experience the world through
              <span>seven sensory systems.</span>
            </h2>

            <p>
              Sensory experiences are constantly feeding children&apos;s bodies
              and brains information about themselves and the world around them.
            </p>

            <p>
              Nature play gives those systems room to work together through
              movement, exploration, texture, balance, sound, imagination, and
              real physical experiences.
            </p>

            <p>
              This guide helps you understand what those systems are and how
              everyday outdoor spaces can support them.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.senses}>
        <WaveTop wave="#338e74" spacer="#e4b928" />

        <div className={styles.sensesInner}>
          <div className={styles.sensesHeading}>
            <h2>
              Yep.
              <span>All seven.</span>
            </h2>

            <p>
              The senses go well beyond what children see, hear, smell, taste,
              and touch.
            </p>
          </div>

          <div className={styles.senseGrid}>
            {senses.map((sense, index) => (
              <div className={styles.senseCard} key={sense}>
                <span>0{index + 1}</span>
                <h3>{sense}</h3>
              </div>
            ))}
          </div>
        </div>

        <WaveBottom wave="#e4b928" spacer="#f7f6f2" />
      </section>

      <section className={styles.inside}>
        <div className={styles.insideInner}>
          <div className={styles.insideText}>
            <p className={styles.smallHeading}>INSIDE THE GUIDE</p>

            <h2>
              Start seeing play through a<span>sensory lens.</span>
            </h2>

            <p>
              This 30-page guide gives you a starting point for understanding
              how children&apos;s sensory systems work and how outdoor
              environments can support them naturally.
            </p>

            <ul>
              <li>An introduction to children&apos;s seven sensory systems</li>

              <li>
                Examples of nature-play features that support sensory
                development
              </li>

              <li>
                Practical ways to create richer outdoor play opportunities
              </li>

              <li>
                Ideas that can work even with smaller spaces and realistic
                budgets
              </li>

              <li>
                A different way to think about what your child may be seeking
                through play
              </li>
            </ul>
          </div>

          <div className={styles.insideImage}>
            <Image
              src="/kids-leaf.jpeg"
              alt="Child exploring plants and natural materials"
              width={800}
              height={900}
            />
          </div>
        </div>
      </section>

      <section className={styles.jena}>
        <WaveTop wave="#f7f6f2" spacer="#cbdcbe" />

        <div className={styles.jenaInner}>
          <Image
            src="/jena-main.jpg"
            alt="Jena Ponti Jauchius, nature play designer"
            width={600}
            height={600}
          />

          <div className={styles.jenaText}>
            <p className={styles.smallHeading}>GUIDANCE FROM JENA</p>

            <h2>
              Built from more than
              <span>20 years of experience.</span>
            </h2>

            <p>
              Jena Ponti Jauchius has spent more than two decades designing and
              building nature play spaces and children&apos;s sensory gardens.
            </p>

            <p>
              This guide brings that experience down to a scale families can
              actually use at home — helping you understand what makes an
              outdoor environment meaningful for the child using it.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.testimonial}>
        <WaveTop wave="#cbdcbe" spacer="#afa9d2" />

        <div className={styles.testimonialInner}>
          <Image src="/leaf-two.png" alt="" width={90} height={100} />

          <p>
            “Jena&apos;s understanding of children&apos;s needs and approach to
            nature play is nothing short of magic.”
          </p>

          <span>— Brooke M., Mom of 3 & Kindergarten Teacher</span>
        </div>
      </section>

      <section className={styles.purchase}>
        <div className={styles.purchaseInner}>
          <div>
            <p className={styles.courseEyebrow}>READY TO DIG IN?</p>

            <h2>
              Create more opportunities to
              <span>move, explore & grow.</span>
            </h2>

            <p>
              Get the 30-page Nature Play for the 7 Senses e-book delivered
              digitally and start looking at your child&apos;s outdoor world a
              little differently.
            </p>

            <div className={styles.purchaseBottom}>
              <strong>$22</strong>

              <a href={purchaseUrl} className={styles.purchaseButton}>
                Get the E-Book
              </a>
            </div>

            <p className={styles.digitalNote}>
              Digital PDF product. No physical product will be mailed.
            </p>
          </div>

          <Image
            src="/shovel.png"
            alt=""
            width={160}
            height={180}
            className={styles.purchaseShovel}
          />
        </div>
      </section>

      <div id="contact">
        <ContactForm />
      </div>
    </main>
  );
}
