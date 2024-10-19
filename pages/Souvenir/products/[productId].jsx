import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../../styles/souvenir/product.module.css";
import { useAuth } from "../../../context";
import discountedPrice from "../../../utils/discountedPrice";

import SouvenirNavBar from "../../components/souvenirNavBar";
import Footer from "../../components/footer";
import products from "../../../public/Product";
import ProductCard from "../../components/productCardProductPage";
import BreadCrum from "../../components/BreadCrum";
import { FaStar } from "react-icons/fa";

import { onValue, ref, set } from "firebase/database";
import database from "../../../firebase/config";

import LongBanner from "../../components/longBanner";

const ProductComponent = () => {
  const [data, setData] = useState(null);
  const router = useRouter();
  const { setProductData } = useAuth();
  const [uid, setUid] = useState(null);

  //console.log("data is here : ", data);

  const buyNow = () => {
    setProductData(data);

    if (uid !== null) {
      router.push({
        pathname: `/revieworder/${data._id}`,
      });
    } else {
      router.push({
        pathname: "/signup",
      });
    }
  };

  const fetchProductData = () => {
    const dbRef = ref(database, "souvenir/products/" + router.query.productId);
    onValue(dbRef, (snapshot) => {
      setData(snapshot.val());
    });
  };

  useEffect(() => {
    fetchProductData();
    setUid(localStorage.getItem("uid"));
  }, [router.query.productId]);

  return (
    <div className={styles.superContainer}>
      <BreadCrum crumbs={["Souvenir", "Product", "Brass Idol"]} />

      <>
        {data && (
          <div className={styles.productContainer}>
            {/* Product Image Carousel */}
            <div className={styles.imageCarousel}>
              <img
                src={data?.images[0]}
                alt={`Product image`}
                className={styles.productImage}
              />

              <div className={styles.imageThumbnails}>
                {new Array(5).fill("data").map((image, index) => (
                  <img
                    key={index}
                    src={data.images[1]}
                    alt={`Product image ${index}`}
                    className={styles.thumbnail}
                  />
                ))}
              </div>
            </div>

            <div className={styles.detailsContainer}>
              {/* Product Details */}
              <div className={styles.productDetails}>
                <h2 className={styles.productTitle}>{data?.name}</h2>
                <div className={styles.ratingAndReviews}>
                  <span className={styles.rating}>{data?.rating}</span>
                  <FaStar className={styles.rating} />

                  <span className={styles.reviews}>({3232} ratings)</span>
                </div>
                <div className={styles.priceSection}>
                  <span className={styles.discountedPrice}>
                    {discountedPrice(data)}
                  </span>
                  <span className={styles.originalPrice}>₹{data?.price}</span>
                  <span className={styles.discountPercentage}>
                    -{data?.discount}%
                  </span>
                </div>
                <div className={styles.stockInfo}>
                  <span>
                    {data?.inStock > 0
                      ? "Product is available in Stock"
                      : "Out of stock"}
                  </span>
                  <span style={{ color: "red", marginLeft: 5 }}>
                    {data?.inStock > 6
                      ? "(Hurry up only few in stock are left)"
                      : null}
                  </span>
                  {/* <span>Ships from {product.seller}</span> */}
                </div>
                <div className={styles.buyOptions}>
                  <button className={styles.addToCart}>Add to Cart</button>
                  <button onClick={buyNow} className={styles.buyNow}>
                    Buy Now
                  </button>
                </div>
              </div>

              {/* Product Specifications */}
              <div className={styles.productSpecifications}>
                <h2>About this Product</h2>

                <p>{data?.about}</p>
              </div>
              {/* About the product */}
              <div className={styles.productSpecifications}>
                <h2>Product Features</h2>
                <ul>
                  {data?.productFeatures.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </>

      <section className={styles.margin}>
        <h2 className={styles.heading}>New Arrivals</h2>

        <div className={styles.visit}>
          {Object.values(products)
            .slice(0, 5)
            .map((product, index) => (
              <div style={{
                marginLeft:index === 0 ? "1rem" : null,
              }}>
                <ProductCard key={index} {...product} />
              </div>
            ))}
        </div>
      </section>

      <section className={styles.margin}>
        <h2 className={styles.heading}>New Arrivals</h2>

        <div className={styles.visit}>
          {Object.values(products)
            .slice(0, 5)
            .map((product, index) => (
              <div style={{
                marginLeft:index === 0 ? "1rem" : null,
              }}>
                <ProductCard key={index} {...product} />
              </div>
            ))}
        </div>
      </section>



      <LongBanner />
    </div>
  );
};

export default ProductComponent;
