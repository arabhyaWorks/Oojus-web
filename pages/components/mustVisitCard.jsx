import styles from "../../styles/MustVisitCard.module.css";

const MustVisitCard = (props) => {
  const { image, name } = props;
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={styles.card}
    >
      <div className={styles.overlay}>
        <p className={styles.title}>{name}</p>
      </div>
    </div>
  );
};

export default MustVisitCard;
