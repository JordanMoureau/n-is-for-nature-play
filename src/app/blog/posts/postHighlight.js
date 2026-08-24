"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import WaveTop from "@/app/components/waveTop";

import styles from "./posts.module.css";
import { posts } from "../posts.js";

function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export default function PostHighlights() {
  const pathname = usePathname();

  const highlightedPosts = useMemo(() => {
    const filteredPosts = posts.filter((post) => post.href !== pathname);

    return shuffleArray(filteredPosts).slice(0, 3);
  }, [pathname]);

  return (
    <section className={styles.highlights}>
      <section className={styles.heroWave}>
        <WaveTop wave="#338e74" spacer="#cbdcbe" />
      </section>

      <div className={styles.highlightsInner}>
        <div className={styles.highlightsHeading}>
          <h2>More From the Blog</h2>
        </div>

        <div className={styles.highlightCards}>
          {highlightedPosts.map((post) => (
            <Link
              href={post.href}
              className={styles.highlightCard}
              key={post.title}
            >
              <div className={styles.highlightImage}>
                <Image src={post.image} alt="" width={600} height={450} />
              </div>

              <div className={styles.highlightContent}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>

                <span className={styles.readMore}>
                  Read More <span>{">"}</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
