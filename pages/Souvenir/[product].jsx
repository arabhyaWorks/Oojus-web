import React from "react";
import styles from "../../styles/souvenir/product.module.css";
import SouvenirNavBar from "../components/souvenirNavBar";
import Footer from "../components/footer";
import { products } from "./products";
import ProductCard from "../components/productCard";

const product = {
  images: ["https://m.media-amazon.com/images/I/71pwb1poqRL._SX679_.jpg"],
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

const ProductComponent = ({}) => {
  return (
    <div className={styles.superContainer}>
      <SouvenirNavBar />

      <div className={styles.productContainer}>
        {/* Product Image Carousel */}
        <div className={styles.imageCarousel}>
          <img
            src={product.images[0]}
            alt={`Product image`}
            className={styles.productImage}
          />
        </div>

        <div>
          {/* Product Details */}
          <div className={styles.productDetails}>
            <h1 className={styles.productTitle}>{product.title}</h1>
            <div className={styles.ratingAndReviews}>
              <span className={styles.rating}>{product.rating} ★</span>
              <span className={styles.reviews}>
                ({product.reviews} ratings)
              </span>
            </div>
            <div className={styles.priceSection}>
              <span className={styles.discountedPrice}>
                ₹{product.discountedPrice}
              </span>
              <span className={styles.originalPrice}>
                ₹{product.originalPrice}
              </span>
              <span className={styles.discountPercentage}>
                -{product.discountPercentage}%
              </span>
            </div>
            <div className={styles.stockInfo}>
              <span>{product.inStock ? "In stock" : "Out of stock"}</span>
              <span>Ships from {product.seller}</span>
            </div>
            <div className={styles.buyOptions}>
              <button className={styles.addToCart}>Add to Cart</button>
              <button className={styles.buyNow}>Buy Now</button>
            </div>
          </div>

          {/* Product Specifications */}
          <div className={styles.productSpecifications}>
            <h2>Product Details</h2>
            <ul>
              {product.specifications.map((spec, index) => (
                <li key={index}>
                  <strong>{spec.label}: </strong>
                  {spec.value}
                </li>
              ))}
            </ul>
          </div>
          {/* About the product */}
          <div className={styles.productSpecifications}>
            <h2>About the Product</h2>
            <ul>
              {product.about.map((spec, index) => (
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
            .slice(0, 4)
            .map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
        </div>
      </section>

      <Footer/>
    </div>
  );
};

// Example product object structure

export default ProductComponent;
