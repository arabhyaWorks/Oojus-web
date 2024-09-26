import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/PoojaCard.module.css";
import RatingImage from "../icons/rating";

const PoojaCard = (props) => {
  // Destructure the props and set default fallbacks using logical OR operator
  const {
    mainImage = "default-image-url.jpg", // Default image if not provided
    name = "No Name", // Default name if not provided
    details = {},
  } = props;

  const { rating = 0, shastri = 0, price = 0, originalPrice = 0 } = details;

  return (
    <div className={styles.superCont}>
      <div
        style={{
          backgroundImage: `url(${mainImage})`,
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
            {rating ? ` ${rating}` : " No rating"}{" • "} {shastri} shastri
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "row", margin: 0 }}>
          <p className={styles.price}>₹{price}</p>
          <p className={styles.discount}>₹{originalPrice}</p>
        </div>
      </div>
    </div>
  );
};

// PropTypes for validation
PoojaCard.propTypes = {
  mainImage: PropTypes.string.isRequired, // The main image URL must be a string and is required
  name: PropTypes.string.isRequired, // Name must be a string and is required
  details: PropTypes.shape({
    rating: PropTypes.number, // Rating must be a number
    shastri: PropTypes.number, // Shastri must be a number
    price: PropTypes.number.isRequired, // Price must be a number and is required
    originalPrice: PropTypes.number.isRequired, // Original price must be a number and is required
  }).isRequired, // The details object is required
};

// Default props for fallback values
PoojaCard.defaultProps = {
  mainImage: "default-image-url.jpg",
  name: "Default Pooja",
  details: {
    rating: 0,
    shastri: 0,
    price: 0,
    originalPrice: 0,
  },
};

export default PoojaCard;