import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../../styles/souvenir/product.module.css";
import { useAuth } from "../../../context";
import discountedPrice from "../../../utils/discountedPrice";

import SouvenirNavBar from "../../components/souvenirNavBar";
import Footer from "../../components/footer";
import products from "../../../public/Product";
import ProductCard from "../../components/productCard";
import BreadCrum from "../../components/BreadCrum";

import { onValue, ref } from "firebase/database";
import database from "../../../firebase/config";

import LongBanner from "../../components/longBanner";



const ProductComponent = (props) => {
  const router = useRouter();
  const { setProductData } = useAuth();

  const { data } = props;
  console.log("data is here : ", data);

  const buyNow = () => {
    setProductData(data);
    router.push({
      pathname: `/revieworder/${data._id}`,
    });
  };

  return (
    <div className={styles.superContainer}>
      <SouvenirNavBar />
      <BreadCrum crumbs={["Souvenir", "Product", "Brass Idol"]} />

      {/* <h1>this is product id{router.query.productId}</h1> */}

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
          {/* 
          <div className={styles.imageThumbnails}>
            {data?.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product image ${index}`}
                className={styles.thumbnail}
              />
            ))}
          </div> */}
        </div>

        <div className={styles.detailsContainer}>
          {/* Product Details */}
          <div className={styles.productDetails}>
            <h1 className={styles.productTitle}>{data?.name}</h1>
            <div className={styles.ratingAndReviews}>
              <span className={styles.rating}>{data?.rating} ★</span>
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
            {/* <ul>
              {data?.description.map((spec, index) => (
                <li key={index}>
                  <strong>{spec.split(":")[0]}</strong>: {spec.split(":")[1]}
                </li>
              ))}
            </ul> */}

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

      <section className={styles.margin}>
        <h2 className={styles.heading}>New Arrivals</h2>

        <div className={styles.visit}>
          {Object.values(products)
            .slice(0, 5)
            .map((product, index) => (
              <ProductCard dimension={"square"} key={index} {...product} />
            ))}
        </div>
      </section>

      <section className={styles.margin}>
        <h2 className={styles.heading}>New Arrivals</h2>

        <div className={styles.visit}>
          {Object.values(products)
            .slice(0, 5)
            .map((product, index) => (
              <ProductCard dimension={"square"} key={index} {...product} />
            ))}
        </div>
      </section>

      <LongBanner />

      <Footer />
    </div>
  );
};

// Example product object structure

export const getServerSideProps = async (context) => {
  let data = null;
  console.log("context", context);

  const dbRef = ref(database, "souvenir/products/" + context.params.productId);
  onValue(dbRef, (snapshot) => {
    data = snapshot.val();
    console.error("this is product data");
    console.log("product data: ", data);
  });

  return {
    props: {
      data,
    },
  };
};

export default ProductComponent;
