import Link from "next/link";

import styles from "./terms.module.css";

import WaveBottom from "@/app/components/waveBottom";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nisfornatureplay.com";

const pageUrl = `${siteUrl}/terms/`;

export const metadata = {
  title: "Terms & Conditions | N Is for Nature Play",
  description:
    "Terms and conditions governing use of the N Is for Nature Play website, digital resources, courses, programs, and services.",
  alternates: {
    canonical: "/terms/",
  },
  openGraph: {
    title: "Terms & Conditions | N Is for Nature Play",
    description:
      "Terms and conditions governing use of the N Is for Nature Play website, digital resources, courses, programs, and services.",
    url: pageUrl,
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <main>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>Terms & Conditions</h1>

          <p className={styles.heroIntro}>
            Terms for using N Is for Nature Play, accessing our educational
            resources, and purchasing our digital products, programs, and
            services.
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
            Play website and your access to products, programs, educational
            materials, courses, memberships, eBooks, downloads, events, and
            other services offered by N Is for Nature Play, LLC.
          </p>

          <p>
            By using this website, placing an order, accepting purchase terms,
            or accessing our services, you agree to these Terms and Conditions.
            If you do not agree, please discontinue use of the website and our
            services.
          </p>

          <h3>Our Services</h3>

          <p>
            N Is for Nature Play provides educational resources and training
            materials for parents, early childhood professionals, educators, and
            other professionals. These resources may include downloadable
            eBooks, self-study materials, recorded interview series, courses,
            programs, memberships, events, and other digital content.
          </p>

          <p>
            The specific content, duration, access period, price, and features
            of a product or program will be described on the applicable order
            page or purchase page.
          </p>

          <h3>Account Access</h3>

          <p>
            Some products or programs may require a unique username, password,
            access link, or other account credentials. Access is provided to the
            purchaser for their authorized use and may not be shared with
            non-members or other unauthorized users.
          </p>

          <p>
            Sharing passwords, protected links, login information, or other
            restricted access credentials may result in suspension or removal
            from the applicable program or service.
          </p>

          <h3>Payment</h3>

          <p>
            Payment is required as described on the applicable order page.
            Depending on the product or service, payment may be made as a
            one-time purchase, installment plan, monthly payment, or other
            recurring arrangement.
          </p>

          <p>
            You agree to pay the amount associated with your purchase according
            to the payment terms presented when you order. Failure to make a
            required installment or recurring payment may result in suspension
            or termination of access to the applicable services or materials.
          </p>

          <p>
            N Is for Nature Play is not responsible for overdraft fees,
            insufficient-funds fees, over-limit charges, or similar fees charged
            by your bank, card issuer, or payment provider.
          </p>

          <h3>Refund Policy</h3>

          <p>
            Because our eBooks, courses, downloadable resources, recorded
            programs, and similar products are delivered digitally, purchases of
            these products are generally nonrefundable unless a different refund
            policy is expressly stated on the applicable purchase page.
          </p>

          <p>
            Please review product descriptions carefully before purchasing. If
            you experience a problem accessing a purchased resource or believe
            there is an issue with your order, please{" "}
            <Link href="/contact">contact N Is for Nature Play</Link>.
          </p>

          <h3>Educational Information</h3>

          <p>
            The information, products, programs, and resources provided by N Is
            for Nature Play are offered for educational and informational
            purposes only.
          </p>

          <p>
            Content concerning nature play, sensory development, outdoor
            learning, child development, environmental design, family
            activities, and related subjects is not a substitute for
            individualized professional advice, diagnosis, treatment, or
            services.
          </p>

          <h3>Medical and Professional Disclaimer</h3>

          <p>
            Our website, programs, and educational materials are not substitutes
            for advice or treatment from a physician, psychologist, therapist,
            educator, or other appropriately trained and licensed professional.
          </p>

          <p>
            You are responsible for determining whether any information,
            activity, strategy, product, or program is appropriate for you, your
            family, or the children in your care. When professional or medical
            guidance is needed, you should consult an appropriately qualified
            professional.
          </p>

          <h3>Safety and Supervision</h3>

          <p>
            Nature play, sensory activities, outdoor learning, events, and other
            activities may involve ordinary risks associated with physical
            activity, weather, plants, animals, tools, terrain, natural
            materials, and outdoor environments.
          </p>

          <p>
            Adults are responsible for providing appropriate supervision,
            evaluating their environment, and adapting activities to the age,
            abilities, needs, and circumstances of the children in their care.
          </p>

          <h3>No Guarantee of Results</h3>

          <p>
            N Is for Nature Play does not guarantee any particular personal,
            educational, developmental, professional, business, or other result
            from using our products, services, programs, or information.
          </p>

          <p>
            Examples, testimonials, demonstrations, or descriptions of results
            are provided for informational purposes and should not be
            interpreted as a promise that you will achieve the same or similar
            outcome. Results depend on many individual circumstances and
            factors.
          </p>

          <h3>Confidentiality and Online Communities</h3>

          <p>
            Some programs may include private online communities, membership
            spaces, group discussions, classes, calls, or forums.
          </p>

          <p>
            You may discuss your own experiences, but you agree to respect the
            privacy of other participants and not disclose confidential or
            personal information they share within a private program or
            community.
          </p>

          <p>
            Participants are expected to communicate respectfully. Conduct that
            substantially disrupts a program, harms other participants, or
            violates these Terms may result in removal from the applicable
            program or community.
          </p>

          <h3>Media Consent</h3>

          <p>
            Certain live programs, events, interviews, classes, or community
            experiences may be photographed, recorded, or otherwise documented.
            Where media consent applies to a particular program or event, those
            terms may permit N Is for Nature Play to use a participant&apos;s
            image, likeness, or voice for educational, promotional, advertising,
            or other business purposes.
          </p>

          <p>
            Any additional media or participation terms presented when
            registering for a specific event or program will also apply.
          </p>

          <h3>Intellectual Property</h3>

          <p>
            Unless otherwise stated, the text, graphics, photographs,
            illustrations, videos, recordings, branding, course materials,
            downloads, eBooks, program materials, and other original content
            provided by N Is for Nature Play are owned by N Is for Nature Play,
            LLC or used with permission.
          </p>

          <p>
            Purchasing or accessing a product or service does not transfer
            ownership of its intellectual property. Unless expressly authorized
            in writing, you may not copy, reproduce, republish, distribute,
            modify, sell, sublicense, transmit, display, commercially exploit,
            or create derivative works from protected N Is for Nature Play
            content.
          </p>

          <p>
            You may share links to publicly available pages on this website,
            provided you do not represent the content as your own.
          </p>

          <h3>Data Scraping and Automated Collection</h3>

          <p>
            Scraping, data mining, automated copying, bulk extraction, or other
            unauthorized collection of content or information from this website,
            our private communities, or platforms operated by N Is for Nature
            Play is prohibited.
          </p>

          <h3>Third-Party Services and Links</h3>

          <p>
            Our website, programs, or events may link to or rely upon
            third-party websites, platforms, payment processors, hosting
            services, speakers, vendors, facilities, or other service providers.
          </p>

          <p>
            N Is for Nature Play does not control third-party websites or
            services and is not responsible for their content, availability,
            privacy practices, terms, or independent actions.
          </p>

          <h3>Website and Program Availability</h3>

          <p>
            We make reasonable efforts to keep our website, resources, and
            programs available, but we do not guarantee uninterrupted or
            error-free access.
          </p>

          <p>
            Products, services, program content, recordings, features, and
            platforms may be updated, replaced, changed, discontinued, or
            removed where appropriate.
          </p>

          <p>
            References to &quot;lifetime access&quot; to hosted digital content
            mean access for as long as that content remains available through
            the applicable hosting platform. Availability of hosted recordings
            or materials may change over time.
          </p>

          <h3>Suspension or Termination</h3>

          <p>
            N Is for Nature Play may suspend or terminate access to a program,
            service, private community, or protected resource when a participant
            fails to make required payments, violates these Terms, improperly
            shares protected content or login credentials, disrupts a program,
            or otherwise engages in inappropriate conduct affecting the Company
            or other participants.
          </p>

          <h3>Limitation of Liability</h3>

          <p>
            To the fullest extent permitted by law, participation in our
            programs and use of our website, educational materials, resources,
            activities, and services is at your own risk.
          </p>

          <p>
            N Is for Nature Play, LLC and its representatives are not
            responsible for indirect, incidental, consequential, special,
            exemplary, or punitive damages resulting from use of our products,
            programs, services, website, or information.
          </p>

          <p>
            To the fullest extent permitted by law, any liability arising from a
            purchased program or service will not exceed the amount you paid to
            N Is for Nature Play for the applicable program or service.
          </p>

          <h3>Indemnification</h3>

          <p>
            To the extent permitted by law, you agree to indemnify and hold N Is
            for Nature Play, LLC and its representatives harmless from claims,
            losses, liabilities, damages, costs, or expenses resulting from your
            misuse of the services, violation of these Terms, or content or
            conduct for which you are legally responsible.
          </p>

          <h3>Relationship of the Parties</h3>

          <p>
            Your use of the website or participation in a program does not
            create an employment, partnership, joint venture, or agency
            relationship between you and N Is for Nature Play, LLC.
          </p>

          <h3>Governing Law</h3>

          <p>
            These Terms and any action arising from them are governed by the
            laws of the State of Washington, without regard to conflict-of-law
            principles.
          </p>

          <p>
            Except where another dispute-resolution procedure described below
            applies, the parties consent to jurisdiction and venue in the
            federal and state courts located in Spokane County, Washington.
          </p>

          <h3>Dispute Resolution and Arbitration</h3>

          <p>
            A dispute relating to these Terms, purchased content, programs,
            services, or the website may be submitted first to confidential
            mediation with a mutually selected qualified neutral located in
            Spokane, Washington. Mediation may be conducted in person, online,
            or by telephone.
          </p>

          <p>
            Either party may elect confidential binding arbitration governed by
            the Federal Arbitration Act. If arbitration is elected, the dispute
            will generally be decided by a neutral arbitrator rather than by a
            judge or jury, and rights to discovery and appeal may be more
            limited than they would be in court.
          </p>

          <p>
            Arbitration may be conducted in person, through documents, by
            telephone, or online. In-person arbitration will take place in
            Spokane, Washington. Courts may still be used where appropriate to
            compel arbitration, enforce or review an arbitration award, or seek
            permitted injunctive relief.
          </p>

          <h3>Severability and Waiver</h3>

          <p>
            If any portion of these Terms is determined to be invalid or
            unenforceable, the remaining provisions will continue in effect to
            the fullest extent permitted by law.
          </p>

          <p>
            A failure by either party to enforce a provision at one time does
            not waive the right to enforce that provision or another provision
            later.
          </p>

          <h3>Privacy</h3>

          <p>
            Your use of this website and our services is also subject to our{" "}
            <Link href="/privacy">Privacy Policy</Link>, which explains how N Is
            for Nature Play collects, uses, and protects personal information.
          </p>

          <h3>Additional Purchase Terms</h3>

          <p>
            Individual products, programs, memberships, events, or services may
            include additional terms on their order or registration pages. Those
            additional terms become part of your agreement when you make the
            applicable purchase or registration.
          </p>

          <h3>Changes to These Terms</h3>

          <p>
            N Is for Nature Play may update these Terms and Conditions from time
            to time. Updated terms will be posted on this page with a revised
            effective date.
          </p>

          <p>
            Your continued use of the website or applicable services after
            updated terms are posted constitutes acceptance of the revised Terms
            to the extent permitted by law.
          </p>

          <h3>Questions</h3>

          <p>
            If you have questions about these Terms and Conditions, your
            purchase, or an N Is for Nature Play program or service, please{" "}
            <Link href="/contact">contact N Is for Nature Play</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
