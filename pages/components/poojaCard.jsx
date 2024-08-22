
import styles from "../../styles/PoojaCard.module.css";
import RatingImage from "../icons/rating";

const PoojaCard = (props) => {
  const { mainImage, name,  details} = props;
  console.log(props);
  return (
    <div className={styles.superCont}>
      <div
        style={{
          backgroundImage: `url(${mainImage})`,
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
          {/* {" 4.5"} */}
            {details.rating}
          {" • "} {details.shastri} shastri
        </p>
      </div>

      <div style={{display:'flex', flexDirection:'row', margin:0}}>
        <p className={styles.price}>
          {" "}
          ₹{details.price}
        </p>
        <p className={styles.discount}>{" "}₹{details.originalPrice}</p>
      </div>
      </div>

    </div>
  );
};

export default PoojaCard;
