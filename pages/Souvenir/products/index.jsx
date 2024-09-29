import styles from '../../../styles/souvenir/products.module.css'
import SouvenirNavBar from "../../components/souvenirNavBar";
import Footer from "../../components/footer";
import Image from "next/image";
import CategoriesCarousel from "../../components/categoriesCarousel";
import ProductCard from "../../components/productCard";
import { FaStar, FaRegStar } from "react-icons/fa";

import database from "../../../firebase/config";
import { ref, onValue } from "firebase/database";

const swiggy =
  "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/download.png?alt=media&token=adf72db0-e054-4af9-9c4a-41b5dc0cc82e";

const Souvenir = (props) => {
  const { data } = props;
  console.log("data is here : ", data);

  return (
    <div className={styles.souvenir}>

      <section>
        <Image
          src={swiggy}
          layout="responsive"
          width={1918}
          height={533}
          style={{}}
          alt="Banner Image"
        />
      </section>

      <section className={styles.feedContainer}>
        <div>
          <div className={styles.sideFilters}>
            <h2 className={styles.filterText}>Pricings</h2>
            <div className={styles.priceFilter}>
              <div className={styles.labelItem}>
                <input
                  type="checkbox"
                  id="under500"
                  name="under500"
                  value="500"
                />
                <label className={styles.labels} htmlFor="under500">
                  Under ₹500
                </label>
              </div>

              <div className={styles.labelItem}>
                <input
                  type="checkbox"
                  id="between500to1000"
                  name="between500to1000"
                  value="500to1000"
                />
                <label className={styles.labels} htmlFor="between500to1000">
                  ₹500 - ₹1000
                </label>
              </div>

              <div className={styles.labelItem}>
                <input
                  type="checkbox"
                  id="between1000to2000"
                  name="between1000to2000"
                  value="1000to2000"
                />
                <label className={styles.labels} htmlFor="between1000to2000">
                  ₹1000 - ₹2000
                </label>
              </div>

              <div className={styles.labelItem}>
                <input
                  type="checkbox"
                  id="above2000"
                  name="above2000"
                  value="2000"
                />
                <label className={styles.labels} htmlFor="between1000to2000">
                  ₹1000 - ₹2000
                </label>
              </div>

              <div className={styles.labelItem}>
                <input
                  type="checkbox"
                  id="above2000"
                  name="above2000"
                  value="2000"
                />
                <label className={styles.labels} htmlFor="between1000to2000">
                  Alphabetically: A-Z
                </label>
              </div>

              <div className={styles.labelItem}>
                <input
                  type="checkbox"
                  id="above2000"
                  name="above2000"
                  value="2000"
                />
                <label className={styles.labels} htmlFor="between1000to2000">
                  Alphabetically: Z-A
                </label>
              </div>

              <div className={styles.labelItem}>
                <input
                  type="checkbox"
                  id="above2000"
                  name="above2000"
                  value="2000"
                />
                <label className={styles.labels} htmlFor="between1000to2000">
                  Featured
                </label>
              </div>

              <div className={styles.labelItem}>
                <input
                  type="checkbox"
                  id="above2000"
                  name="above2000"
                  value="2000"
                />
                <label className={styles.labels} htmlFor="between1000to2000">
                  New Arrivals
                </label>
              </div>
            </div>

            <h2 className={styles.filterText}>Availability</h2>
            <div className={styles.priceFilter}>
              <div className={styles.labelItem}>
                <input
                  type="checkbox"
                  id="under500"
                  name="under500"
                  value="500"
                />
                <label className={styles.labels} htmlFor="">
                  In Stock
                </label>
              </div>

              <div className={styles.labelItem}>
                <input
                  type="checkbox"
                  id="between500to1000"
                  name="between500to1000"
                  value="500to1000"
                />
                <label className={styles.labels} htmlFor="between500to1000">
                  Out of Stock
                </label>
              </div>
            </div>

            <h2 className={styles.filterText}>Customer Review</h2>
            <div className={styles.priceFilter}>
              <div className={styles.ratingContainer}>
                <FaStar size="1.5em" color="#ffd700" className={styles.star} />
                <FaStar size="1.5em" color="#ffd700" className={styles.star} />
                <FaStar size="1.5em" color="#ffd700" className={styles.star} />
                <FaStar size="1.5em" color="#ffd700" className={styles.star} />
                <FaStar size="1.5em" color="#ffd700" className={styles.star} />
              </div>

              <div className={styles.ratingContainer}>
                <FaStar size="1.5em" color="#ffd700" className={styles.star} />
                <FaStar size="1.5em" color="#ffd700" className={styles.star} />
                <FaStar size="1.5em" color="#ffd700" className={styles.star} />
                <FaStar size="1.5em" color="#ffd700" className={styles.star} />
                <FaRegStar
                  size="1.5em"
                  color="#ffd700"
                  className={styles.star}
                />
              </div>

              <div className={styles.ratingContainer}>
                <FaStar size="1.5em" color="#ffd700" className={styles.star} />
                <FaStar size="1.5em" color="#ffd700" className={styles.star} />
                <FaStar size="1.5em" color="#ffd700" className={styles.star} />
                <FaRegStar
                  size="1.5em"
                  color="#ffd700"
                  className={styles.star}
                />
                <FaRegStar
                  size="1.5em"
                  color="#ffd700"
                  className={styles.star}
                />
              </div>

              <div className={styles.ratingContainer}>
                <FaStar size="1.5em" color="#ffd700" className={styles.star} />
                <FaStar size="1.5em" color="#ffd700" className={styles.star} />
                <FaRegStar
                  size="1.5em"
                  color="#ffd700"
                  className={styles.star}
                />
                <FaRegStar
                  size="1.5em"
                  color="#ffd700"
                  className={styles.star}
                />
                <FaRegStar
                  size="1.5em"
                  color="#ffd700"
                  className={styles.star}
                />
              </div>

              <div className={styles.ratingContainer}>
                <FaStar size="1.5em" color="#ffd700" className={styles.star} />
                <FaRegStar
                  size="1.5em"
                  color="#ffd700"
                  className={styles.star}
                />
                <FaRegStar
                  size="1.5em"
                  color="#ffd700"
                  className={styles.star}
                />
                <FaRegStar
                  size="1.5em"
                  color="#ffd700"
                  className={styles.star}
                />
                <FaRegStar
                  size="1.5em"
                  color="#ffd700"
                  className={styles.star}
                />
              </div>
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

export const getServerSideProps = async (context) => {
  let data = null;

  const dbRef = ref(database, "souvenir/products/");
  onValue(dbRef, (snapshot) => {
    data = Object.values(snapshot.val());
  });

  console.log(data);

  return {
    props: {
      data,
    },
  };
};

