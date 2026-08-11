"use client";

import { motion } from "motion/react";

import styles from "./wave.module.css";

export default function WaveBottom({ wave = "#cdddc0", spacer = "#f7f6f2" }) {
  const path =
    "M766.53,327.03V0H0v337.03s29.12,8.92,65.7.99c36.58-7.93,80.08-42.63,132.48-30.74,52.4,11.89,131.49,63.39,176.97,54.47,45.48-8.92,142.37-61.41,187.85-62.4s150.98,34.67,203.53,33.68Z";
  return (
    <>
      <div className={styles.waveBottom} aria-hidden="true">
        <svg
          viewBox="0 270 766.53 94"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={path} fill={wave} />
        </svg>
      </div>

      <motion.div
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
        className={styles.waveBottomBorder}
        aria-hidden="true"
      >
        <svg
          viewBox="0 270 766.53 94"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={path} fill={spacer} />
        </svg>
      </motion.div>
    </>
  );
}
