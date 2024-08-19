import styles from "../../styles/ProductsCard.module.css";

const ProductsCard = (props) => {
  const { images, name } = props;
  console.log(props)
  return (
    <div
      style={{
        backgroundImage: `url(${images[0]})`,
      }}
      className={styles.card}
    >
      <div className={styles.overlay}>
        <p className={styles.title}>{name}</p>
      </div>
    </div>
  );
};

export default ProductsCard;
