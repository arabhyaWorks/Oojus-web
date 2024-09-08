import styles from "../../styles/components/ProductCard.module.css";
import RatingImage from "../icons/rating";
import { useRouter } from "next/router";
import Link from 'next/link'



const ProductCard = (props) => {
  const router = useRouter();
  const { images, name, price, discount, dimension, _id} = props;
  
  return (
    <Link 
    // onClick={()=>{
    //   // alert("Product Clicked")
    //   router.push({
    //     pathname: `/Souvenir/${_id}`,
    //     query: {
    //       name,
    //       email,
    //       phoneNumber: phone,
    //       functionType: "register",
    //     },
    //   });
    // }} 
    href={`/Souvenir/products/${_id}`}
    className={styles.superCont}>
      <div
        style={{
          backgroundImage: `url(${images[0]})`,
          // backgroundColor:'lightgreen'
          cursor: "pointer",
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
    </Link>
  );
};

export default ProductCard;
