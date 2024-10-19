import PropTypes from "prop-types";
import styles from "../../styles/components/ProductCardProductPage.module.css";
import RatingImage from "../icons/rating";
import { useRouter } from "next/router";
import Link from "next/link";

const ProductCard = (props) => {
  const router = useRouter();

  // Destructure props and provide default values
  const {
    images = [],
    name = "Unnamed Product",
    price = 0,
    discount = 0,
    dimension = false,
    _id = "",
  } = props;

  const discountedPrice = price - price * (discount / 100);

  return (
    <Link href={`/Souvenir/products/${_id}`} className={styles.superCont}>
      <div
        style={{
          backgroundImage: `url(${images[0] || "/default-image.jpg"})`, // Fallback image
          cursor: "pointer",
        }}
        className={dimension ? styles.dimensionalCard : styles.card}
      >
        <div className={styles.overlay}>
          <p className={dimension ? styles.dimensionalTitle : styles.title}>
            {discount > 0 ? `${discount}% off` : "No Discount"}
          </p>
        </div>
      </div>

      <div className={dimension ? styles.detailsDimension : styles.details}>
        <p className={styles.name}>
          {name.length > 24 ? name.slice(0, 24) + "..." : name}
        </p>

        <div className={styles.rating}>
          <RatingImage />
          <p className={styles.ratingText}>{" 4.5 • 5 - 7 days"}</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: 0,
            flex: 1,
          }}
        >
          <p className={styles.price}>
            ₹{discount > 0 ? discountedPrice.toFixed(2) : price}
          </p>
          {discount > 0 && <p className={styles.discount}>₹{price}</p>}
        </div>
      </div>
    </Link>
  );
};

// PropTypes validation
ProductCard.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number,
  dimension: PropTypes.bool,
  _id: PropTypes.string.isRequired,
};

// Default Props in case any are missing
ProductCard.defaultProps = {
  images: ["/default-image.jpg"],
  name: "Unnamed Product",
  price: 0,
  discount: 0,
  dimension: false,
  _id: "",
};

export default ProductCard;