import Link from "next/link";

import styles from "./terms.module.css";

import WaveBottom from "@/app/components/waveBottom";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/terms/`;

export const metadata = {
  title: "Terms & Conditions | N Is for Nature Play",
  description:
    "Terms and conditions for using the N Is for Nature Play website, resources, and digital content.",
  alternates: {
    canonical: "/terms/",
  },
  openGraph: {
    title: "Terms & Conditions | N Is for Nature Play",
    description:
      "Terms and conditions for using the N Is for Nature Play website, resources, and digital content.",
    url: pageUrl,
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <main>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <Link href="/" className={styles.back}>
            {"<"} Back Home
          </Link>

          <h1>Terms & Conditions</h1>

          <p className={styles.heroIntro}>
            The simple stuff about using N Is for Nature Play, our resources,
            and the content shared here.
          </p>
        </div>
      </header>

      <section className={styles.heroWave}>
        <WaveBottom wave="#f7f6f2" spacer="#338e74" />
      </section>

      <section className={styles.legalPage}>
        <div className={styles.legalInner}>
          <p className={styles.updated}>Last updated: September 2026</p>

          <h2>Welcome to N Is for Nature Play</h2>

          <p>
            These Terms and Conditions govern your use of the N Is for Nature
            Play website. By using this website, you agree to these terms. If
            you do not agree with them, please discontinue use of the site.
          </p>

          <h3>Educational Information</h3>

          <p>
            The information and resources shared on N Is for Nature Play are
            provided for general educational and informational purposes. Content
            about nature play, sensory experiences, outdoor learning, child
            development, landscape design, and related topics is not intended to
            replace professional medical, therapeutic, psychological,
            educational, or other individualized advice.
          </p>

          <p>
            Every child and family is different. You are responsible for
            deciding whether an activity, resource, product, or recommendation
            is appropriate for your own circumstances.
          </p>

          <h3>Safety and Supervision</h3>

          <p>
            Nature play and outdoor activities may involve ordinary risks
            associated with physical activity, natural materials, weather,
            plants, animals, tools, terrain, and outdoor environments.
          </p>

          <p>
            Adults are responsible for providing appropriate supervision,
            assessing their environment, and adapting activities to the age,
            abilities, needs, and circumstances of the children in their care.
          </p>

          <h3>Digital Products and Resources</h3>

          <p>
            N Is for Nature Play may offer downloadable guides, educational
            materials, digital resources, courses, or other products. These
            materials are provided for personal or professional educational use
            by the purchaser unless otherwise stated.
          </p>

          <p>
            Purchasing or accessing a resource does not transfer ownership of
            the underlying intellectual property or grant permission to resell,
            reproduce, distribute, publish, or commercially exploit the
            material.
          </p>

          <h3>Intellectual Property</h3>

          <p>
            Unless otherwise stated, the text, graphics, photographs,
            illustrations, branding, downloadable materials, and original
            content appearing on this website belong to N Is for Nature Play or
            are used with permission.
          </p>

          <p>
            You may share links to publicly available pages on this website, but
            you may not copy, republish, sell, or substantially reproduce site
            content without permission.
          </p>

          <h3>Third-Party Links</h3>

          <p>
            This website may contain links to third-party websites, services,
            products, or resources. N Is for Nature Play does not control those
            third parties and is not responsible for their content, privacy
            practices, availability, or policies.
          </p>

          <h3>Website Availability</h3>

          <p>
            We do our best to keep the website accurate, useful, and available,
            but we cannot guarantee that every page, feature, resource, or
            service will always be available or error-free.
          </p>

          <p>
            Content, products, features, and services may be updated, changed,
            or removed at any time.
          </p>

          <h3>Limitation of Liability</h3>

          <p>
            To the fullest extent permitted by law, N Is for Nature Play is not
            responsible for losses, injuries, damages, or other consequences
            arising from the use of this website, its educational content, or
            activities undertaken based on information provided through the
            site.
          </p>

          <h3>Changes to These Terms</h3>

          <p>
            These Terms and Conditions may be updated from time to time. Any
            revised terms will be posted on this page with an updated revision
            date.
          </p>

          <h3>Questions</h3>

          <p>
            If you have questions about these Terms and Conditions, please{" "}
            <Link href="/contact">contact N Is for Nature Play</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
