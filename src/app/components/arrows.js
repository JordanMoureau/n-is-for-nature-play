"use client";

import styles from "./arrows.module.css";
import { motion } from "motion/react";

export default function Arrows() {
  const arrowAnimation = {
    y: [0, 12, 0],
  };

  return (
    <div className={styles.ctacta}>
      <motion.div
        className={styles.arrow}
        style={{ rotate: 90 }}
        animate={arrowAnimation}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {">"}
      </motion.div>
      Start a Project
      <motion.div
        className={styles.arrow}
        style={{ rotate: 90 }}
        animate={arrowAnimation}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {">"}
      </motion.div>
    </div>
  );
}
