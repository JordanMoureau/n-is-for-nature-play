"use client";

import { useState } from "react";

import OrganicButton from "./organicButton";
import styles from "./contactForm.module.css";
import LeafOne from "./leafOne";
import PencilIcon from "./pencilIcon";
import WaveTop from "./waveTop";

export default function ContactForm({ Top }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mqpaqjyo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(
          "Something went wrong while sending your message. Please try again."
        );
      }
    } catch (error) {
      setError(
        "Something went wrong while sending your message. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={styles.section}>
      <WaveTop wave={Top} />

      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.titleRow}>
            <div className={styles.leaf}>
              <LeafOne />
            </div>

            <h2>Work With Jena</h2>

            <span className={styles.pencil} aria-hidden="true">
              <PencilIcon />
            </span>
          </div>

          <p>
            Send a message to N is For Nature Play for information about custom
            designs, landscaping projects, webinars, and more.
          </p>
        </header>

        {submitted ? (
          <div className={styles.thankYou}>
            <h3>Thanks for reaching out!</h3>
            <p>
              Your message has been sent successfully. Jena will be in touch
              with you soon.
            </p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="_subject"
              value="New N is For Nature Play inquiry"
            />

            <input
              className={styles.honeypot}
              name="_gotcha"
              type="hidden"
              tabIndex="-1"
              autoComplete="off"
            />

            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="contact-name">Your name</label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-email">Your email address</label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className={`${styles.field} ${styles.messageField}`}>
              <label htmlFor="contact-project">
                What kind of project are you thinking about?
              </label>

              <textarea
                id="contact-project"
                name="project"
                placeholder="What kind of project are you thinking about?"
                rows="7"
                required
              />
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <div className={styles.submitRow}>
              <OrganicButton
                variant="green"
                fontSize="2.5rem"
                type="submit"
                width="19rem"
                disabled={submitting}
              >
                {submitting ? "Sending..." : "Send Message"}
              </OrganicButton>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
