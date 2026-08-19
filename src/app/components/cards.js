import styles from "./cards.module.css";
import OrganicButton from "./organicButton";
import WaveTop from "./waveTop";

const cardContent = [
  {
    icon: "/icon-flower.png",
    title: "Design a Space",
    text: "Get guidance for creating a custom sensory-rich outdoor play area for your home, school, childcare center, or community space.",
    buttonText: "Start a Design Project",
    link: "/design",
  },
  {
    icon: "/icon-pot.png",
    title: "Learn to DIY",
    text: "Explore approachable guides for building outdoor play invitations, sensory gardens, and nature-based spaces at your own pace.",
    buttonText: "Shop eBooks",
    link: "/ebooks",
  },
  {
    icon: "/icon-net.png",
    title: "Take a Course",
    text: "Learn how to create nature play spaces step by step, with practical guidance you can actually use.",
    buttonText: "View Courses",
    link: "/courses",
  },
];

export default function Cards({ variant }) {
  return (
    <div className={styles.cards}>
      <WaveTop wave={"#afa9d2"} spacer={"#f7f6f2"} />
      {cardContent.map((card) => (
        <div className={styles.card} key={card.title}>
          <img src={card.icon} alt="" className={styles.cardIcon} />
          <div className={styles.inner}>
            <h3>{card.title}</h3>

            <p>{card.text}</p>
          </div>
          <div className={styles.buttonplacement}>
            <OrganicButton
              variant={variant}
              href={card.link}
              fontSize={"2.6rem"}
            >
              {card.buttonText}
            </OrganicButton>
          </div>
        </div>
      ))}
    </div>
  );
}
