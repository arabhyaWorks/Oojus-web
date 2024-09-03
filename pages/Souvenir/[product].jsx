import React, { useState } from "react";
import styles from "../../styles/souvenir/product.module.css";
import SouvenirNavBar from "../components/souvenirNavBar";
import Footer from "../components/footer";
import { products } from "./products";
import ProductCard from "../components/productCard";
import BreadCrum from "../components/BreadCrum";

import { onValue, ref } from "firebase/database";
import database from "../../firebase/config";

import LongBanner from "../components/longBanner";

const product = {
  images: [
    "https://m.media-amazon.com/images/I/71pwb1poqRL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/71pwb1poqRL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/71pwb1poqRL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/71pwb1poqRL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/71pwb1poqRL._SX679_.jpg",
  ],
  title: "Amazon Brand - Umi Lord Krishna Idol Statue",
  rating: 3.3,
  reviews: 8,
  discountedPrice: 628,
  originalPrice: 999,
  discountPercentage: 37,
  inStock: true,
  seller: "CraftVatika",
  specifications: [
    { label: "Theme", value: "Figures, Religion" },
    { label: "Brand", value: "Uml." },
    { label: "Color", value: "Golden" },
    { label: "Style", value: "Traditional" },
    { label: "Material", value: "Metal" },
    { label: "Occasion", value: "Wedding, Diwali" },
    { label: "Product Dimensions", value: "8.9L x 8.9W x 22.9H centimeters" },
  ],
  about: [
    "Nataraja Statue carved metal by artist and specially technique with color accents to give a look without sacrificing the details",
    "Size: 7.4 Inches Height X 4.7 Inches Length X 2.3 Inches Wide | Weight : 200g| Material: Metal.",
    "Placing dancing shiv statue at home & office. He is the ultimate source of love, compassion and wisdom and brings the same in one's life. As per vaastu, idols should be placed in north east corner of the house or office for greater results and prosperity",
    "Shiva as Nataraja is Dance who simultaneously destroys and creates the universe anew with each cycle of his mystical dance.",
    "As per VASTU Methology Spritual Idols Showpieces Placed in North East Direction of Drawing / Living & Pooja Room brings Wealth,Health,Peace & Happiness",
  ],
};

const discountedPrice = (data) => {
  return `₹${data.price - data.price * (data.discount / 100)}`;
};

const ProductComponent = (props) => {
  const { data } = props;
  console.log("data is here : ", data);

  return (
    <div className={styles.superContainer}>
      <SouvenirNavBar />
      <BreadCrum crumbs={["Souvenir", "Product", "Brass Idol"]} />

      <div className={styles.productContainer}>
        {/* Product Image Carousel */}
        <div className={styles.imageCarousel}>
          <img
            src={data?.images[0]}
            alt={`Product image`}
            className={styles.productImage}
          />

          <div className={styles.imageThumbnails}>
            {product?.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product image ${index}`}
                className={styles.thumbnail}
              />
            ))}
          </div>
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
              <span className={styles.originalPrice}>₹{data.price}</span>
              <span className={styles.discountPercentage}>
                -{data.discount}%
              </span>
            </div>
            <div className={styles.stockInfo}>
              <span>
                {data?.inStock > 0
                  ? "Product is available in Stock"
                  : "Out of stock"}
              </span>
              <span style={{ color: "red", marginLeft:5 }}>
                {data?.inStock > 6
                  ? "(Hurry up only few in stock are left)"
                  : null}
              </span>
              {/* <span>Ships from {product.seller}</span> */}
            </div>
            <div className={styles.buyOptions}>
              <button className={styles.addToCart}>Add to Cart</button>
              <button className={styles.buyNow}>Buy Now</button>
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

  const dbRef = ref(database, "souvenir/products/66a65a061bbcce2024861716");
  onValue(dbRef, (snapshot) => {
    data = snapshot.val();
    // console.log("product data: ", data);
  });

  return {
    props: {
      data,
    },
  };
};

export default ProductComponent;
