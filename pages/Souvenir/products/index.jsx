import React, { useEffect, useState } from "react";
import styles from "../../../styles/souvenir/products.module.css";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";
import ProductCard from "../../components/productCard";
import database from "../../../firebase/config";
import { ref, onValue } from "firebase/database";

const swiggy =
  "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/download.png?alt=media&token=adf72db0-e054-4af9-9c4a-41b5dc0cc82e";

const Souvenir = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from Firebase on component mount
  useEffect(() => {
    const dbRef = ref(database, "souvenir/products/");
    
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const fetchedData = snapshot.val() ? Object.values(snapshot.val()) : [];
      setData(fetchedData);
      setLoading(false); // Stop loading after fetching data
    });

    // Clean up subscription to avoid memory leaks
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.souvenir}>
      <section>
        <Image
          src={swiggy}
          layout="responsive"
          width={1918}
          height={533}
          alt="Banner Image"
        />
      </section>

      <section className={styles.feedContainer}>
        <div>
          <div className={styles.sideFilters}>
            <h2 className={styles.filterText}>Pricings</h2>
            <div className={styles.priceFilter}>
              {/* Pricing Filters */}
              <div className={styles.labelItem}>
                <input type="checkbox" id="under500" name="under500" value="500" />
                <label className={styles.labels} htmlFor="under500">
                  Under ₹500
                </label>
              </div>

              <div className={styles.labelItem}>
                <input type="checkbox" id="between500to1000" name="between500to1000" value="500to1000" />
                <label className={styles.labels} htmlFor="between500to1000">
                  ₹500 - ₹1000
                </label>
              </div>

              <div className={styles.labelItem}>
                <input type="checkbox" id="between1000to2000" name="between1000to2000" value="1000to2000" />
                <label className={styles.labels} htmlFor="between1000to2000">
                  ₹1000 - ₹2000
                </label>
              </div>

              <div className={styles.labelItem}>
                <input type="checkbox" id="above2000" name="above2000" value="2000" />
                <label className={styles.labels} htmlFor="above2000">
                  ₹2000 and above
                </label>
              </div>
            </div>

            <h2 className={styles.filterText}>Availability</h2>
            <div className={styles.priceFilter}>
              <div className={styles.labelItem}>
                <input type="checkbox" id="inStock" name="inStock" />
                <label className={styles.labels} htmlFor="inStock">
                  In Stock
                </label>
              </div>

              <div className={styles.labelItem}>
                <input type="checkbox" id="outOfStock" name="outOfStock" />
                <label className={styles.labels} htmlFor="outOfStock">
                  Out of Stock
                </label>
              </div>
            </div>

            <h2 className={styles.filterText}>Customer Review</h2>
            <div className={styles.priceFilter}>
              {/* Star Ratings */}
              {[5, 4, 3, 2, 1].map((rating) => (
                <div className={styles.ratingContainer} key={rating}>
                  {[...Array(5)].map((star, i) => (
                    <FaStar
                      key={i}
                      size="1.5em"
                      color={i < rating ? "#ffd700" : "#dcdcdc"}
                      className={styles.star}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.productsContainer}>
          <h2 className={styles.heading}>Purchase Gifts</h2>

          <div className={styles.visit}>
            {data?.slice(0, 9).map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Souvenir;