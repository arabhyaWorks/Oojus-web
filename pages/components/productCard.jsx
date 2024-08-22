import styles from "../../styles/ProductCard.module.css";
import RatingImage from "../icons/rating";

const ProductCard = (props) => {
  const { images, name, price, discount } = props;
  console.log(props);
  return (
    <div className={styles.superCont}>
      <div
        style={{
          backgroundImage: `url(${images[0]})`,
          // backgroundColor:'lightgreen'
        }}
        className={styles.card}
      >
        <div className={styles.overlay}>
          <p className={styles.title}>{"10% off Above ₹1000"}</p>
        </div>
      </div>

      <div className={styles.details}>
      <p className={styles.name}>{name}</p>
      <div className={styles.rating}>
        <RatingImage />
        <p className={styles.ratingText}>
          {" "}
          {" 4.5"}
          {" • "} 5 - 7 days
        </p>
      </div>

      <div style={{display:'flex', flexDirection:'row', margin:0}}>
        <p className={styles.price}>
          {" "}
          ₹{price - price * (discount / 100)}
        </p>
        <p className={styles.discount}>{" "}₹{price}</p>
      </div>
      </div>

    </div>
  );
};

export default ProductCard;
