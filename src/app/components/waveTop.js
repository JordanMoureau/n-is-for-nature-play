"use client";

import styles from "./wave.module.css";
import { motion } from "motion/react";

export default function WaveTop({ spacer = "#cbdcbe", wave = "#f7f6f2" }) {
  return (
    <>
      <div
        initial={{ y: 2 }}
        whileInView={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 1,
          mass: 0.8,
        }}
        viewport={{
          once: true,
          amount: 0.7,
        }}
        className={styles.waveTop}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 766.53 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,25.46v317.03h766.53V25.46s-29.12-6.92-65.7-.99c-36.58,5.93-80.08,32.63-132.48,22.74C515.95,37.32,436.85-6.18,391.38.74c-45.48,6.92-142.37,51.41-187.85,52.4S52.54,24.47,0,25.46Z"
            fill={wave}
          />
        </svg>
      </div>
      <div className={styles.wave} aria-hidden="true">
        <svg
          viewBox="0 0 766.53 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,25.46v317.03h766.53V25.46s-29.12-6.92-65.7-.99c-36.58,5.93-80.08,32.63-132.48,22.74C515.95,37.32,436.85-6.18,391.38.74c-45.48,6.92-142.37,51.41-187.85,52.4S52.54,24.47,0,25.46Z"
            fill={spacer}
          />
        </svg>
      </div>
    </>
  );
}
