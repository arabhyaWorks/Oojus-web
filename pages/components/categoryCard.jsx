import styles from "../../styles/CategoryCard.module.css";
import { useRouter } from "next/router";

const CategoryCard = (props) => {
  const { images, name } = props;
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/Souvenir/products`);
      }}
      style={{
        backgroundImage: `url(${images && images.length > 0 && images[0]})`,
      }}
      className={styles.card}
    >
      <div className={styles.overlay}>
        <p className={styles.title}>{name && name}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
