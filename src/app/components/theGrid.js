import styles from "./thegrid.module.css";

export default function TheGrid({ bigBox, midBoxes = [], smallBoxes = [] }) {
  const renderBox = (box, className) => {
    if (!box) return null;

    return (
      <div
        className={`${className} ${box.altColor ? styles.altColor : ""}`}
        style={
          box.backgroundImage
            ? {
                backgroundImage: `linear-gradient(
                  rgba(226, 186, 47, 0.7),
                  rgba(226, 186, 47, 0.7)
                ), url(${box.backgroundImage})`,
              }
            : undefined
        }
      >
        {box.number && <div className={styles.number}>{box.number}</div>}

        {box.title && <h2>{box.title}</h2>}

        {box.text && <p>{box.text}</p>}
      </div>
    );
  };

  return (
    <section className={styles.thegrid}>
      <div className={styles.toprow}>
        {renderBox(bigBox, styles.bigone)}

        <div className={styles.doubles}>
          {midBoxes.map((box, index) => (
            <div key={index}>{renderBox(box, styles.midbox)}</div>
          ))}
        </div>
      </div>

      <div className={styles.lowerrow}>
        {smallBoxes.map((box, index) => (
          <div key={index}>{renderBox(box, styles.lowbox)}</div>
        ))}
      </div>
    </section>
  );
}
