import Link from "next/link";
import styles from "./organicButton.module.css";

const SHAPES = {
  green: {
    viewBox: "0 0 166.01 43.16",
    textColor: "#f7f6f2",
    widthEm: 6,
    paths: [
      {
        d: "M15,40.01s-12.48-1.85-14.06-12.16S-1.2,10.41,7.14,6.45C15.48,2.49,41.21-.95,79.33.24c38.12,1.19,59.8-3.83,76.24,6.61,16.44,10.44,12.63,30.53-5.48,33.04-18.11,2.51-30.97-1.2-62.18,1.06-31.21,2.25-62.7,3.94-72.9-.93Z",
        fill: "#33856b",
      },
    ],
  },

  white: {
    viewBox: "0 0 166.01 43.16",
    textColor: "#e4b928",
    widthEm: 7.5,
    paths: [
      {
        d: "M15,40.01s-12.48-1.85-14.06-12.16S-1.2,10.41,7.14,6.45C15.48,2.49,41.21-.95,79.33.24c38.12,1.19,59.8-3.83,76.24,6.61,16.44,10.44,12.63,30.53-5.48,33.04-18.11,2.51-30.97-1.2-62.18,1.06-31.21,2.25-62.7,3.94-72.9-.93Z",
        fill: "#f5f2f0",
      },
    ],
  },

  lavender: {
    viewBox: "0 0 142.8 43.18",
    textColor: "#f5f2f0",
    widthEm: 5.5,
    paths: [
      {
        d: "M12.82,40.04s-10.67-1.85-12.01-12.16C-.54,17.58-1.02,10.44,6.1,6.48,13.23,2.51,35.22-.92,67.8.27s51.11-3.83,65.16,6.61c14.05,10.44,10.79,30.53-4.68,33.04s-26.47-1.2-53.14,1.06-53.59,3.94-62.3-.93Z",
        fill: "#a39abe",
      },
      {
        d: "M15.9,35.72s-10.41-1.61-11.73-10.57c-1.31-8.96-1.79-15.17,5.17-18.62C16.3,3.08,37.76.09,69.57,1.13c31.8,1.03,49.89-3.33,63.6,5.75,13.71,9.08,10.53,26.55-4.57,28.73-15.11,2.18-25.84-1.04-51.87.92-26.04,1.96-52.31,3.43-60.82-.8Z",
        fill: "none",
        stroke: "#393550",
        strokeWidth: 1.84,
      },
    ],
  },

  whiteOutline: {
    viewBox: "0 0 182.03 43.16",
    textColor: "#dcb42e",
    widthEm: 6.5,
    paths: [
      {
        d: "M17.4,40.01s-13.61-1.85-15.32-12.16S-.26,10.41,8.83,6.45C17.92,2.49,45.97-.95,87.53.24c41.56,1.19,65.19-3.83,83.11,6.61,17.92,10.44,13.77,30.53-5.97,33.04-19.74,2.51-33.77-1.2-67.79,1.06-34.03,2.25-68.36,3.94-79.48-.93Z",
        fill: "#f5f2f0",
      },
      {
        d: "M17.09,37.86s-13.35-1.61-15.04-10.57C.37,18.32-.24,12.12,8.68,8.67c8.92-3.45,36.44-6.44,77.22-5.4S149.88-.06,167.46,9.01c17.59,9.08,13.51,26.55-5.86,28.73s-33.13-1.04-66.52.92c-33.39,1.96-67.08,3.43-77.99-.8Z",
        fill: "none",
        stroke: "#dcb42e",
        strokeWidth: 2.09,
      },
    ],
  },

  yellow: {
    viewBox: "0 0 157.55 74.6",
    textColor: "#f5f2f0",
    widthEm: 6,
    paths: [
      {
        d: "M109.55,68.05s-24.44,1.35-64.29,5.96S2.1,54.17,1.66,48.01s-4.4-23.34,1.76-29.94S17.07,1.99,46.36,2.65s40.29.42,54.17-1.55,40.51-4.83,52.84,26.65-5.36,52.98-17.47,45.28-26.34-4.98-26.34-4.98Z",
        fill: "#dbb32f",
      },
      {
        d: "M107.54,65s-22.84,1.18-60.07,5.19C10.23,74.21,7.14,52.92,6.73,47.55s-4.11-20.33,1.65-26.08c5.76-5.75,12.76-14,40.12-13.42,27.36.58,37.65.36,50.61-1.35s37.85-4.21,49.37,23.22c11.52,27.42-5.01,46.15-16.33,39.43s-24.61-4.34-24.61-4.34Z",
        fill: "none",
        stroke: "#393552",
        strokeWidth: 3.61,
      },
    ],
  },
};

export default function OrganicButton({
  variant = "green",
  href,
  children,
  type = "button",
  fontSize = "1.6rem",
  className = "",
  disabled = false,
  onClick,
}) {
  const shape = SHAPES[variant] || SHAPES.green;

  const sharedProps = {
    className: `${styles.button} ${className}`.trim(),
    style: {
      fontSize,
      width: `${shape.widthEm}em`,
    },
  };

  const content = (
    <>
      <svg className={styles.svg} viewBox={shape.viewBox} aria-hidden="true">
        {shape.paths.map((path, index) => (
          <path
            key={index}
            d={path.d}
            fill={path.fill}
            stroke={path.stroke}
            strokeWidth={path.strokeWidth}
            strokeMiterlimit="10"
          />
        ))}
      </svg>

      <span className={styles.label} style={{ color: shape.textColor }}>
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} {...sharedProps}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} {...sharedProps}>
      {content}
    </button>
  );
}
