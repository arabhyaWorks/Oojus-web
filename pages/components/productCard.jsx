import styles from "../../styles/ProductCard.module.css";
import RatingImage from "../icons/rating";

const ProductCard = (props) => {
  const { images, name, price, discount, dimension } = props;
  return (
    <div className={styles.superCont}>
      <div
        style={{
          backgroundImage: `url(${images[0]})`,
          // backgroundColor:'lightgreen'
        }}
        className={dimension ? styles.dimensionalCard : styles.card}
      >
        <div className={styles.overlay}>
          <p className={dimension ? styles.dimensionalTitle: styles.title}>{"10% off Above ₹1000"}</p>
        </div>
      </div>

      <div
        className={dimension ? styles.detailsDimension : styles.details}
        // className={styles.detailsDimension}
      >
        <p className={styles.name}>{name.length > 24 ? name.slice(0,24)+"...": name}</p>
        {/* <p className={styles.name}>{name.slice(0,23)+" .."}</p> */}
        {/* <p className={styles.name}>{name}</p> */}
        <div className={styles.rating}>
          <RatingImage />
          <p className={styles.ratingText}>
            {" "}
            {" 4.5"}
            {" • "} 5 - 7 days
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "row", margin: 0 }}>
          <p className={styles.price}> ₹{price - price * (discount / 100)}</p>
          <p className={styles.discount}> ₹{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
