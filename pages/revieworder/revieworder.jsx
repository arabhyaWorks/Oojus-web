import React, { useState } from "react";
import styles from "../../styles/reviewOrder.module.css";

const ProductCard = ({ quantity, onQuantityChange }) => {
  return (
    <div className={styles.productCard}>
      <img
        src="https://fossil.com/your-image.jpg"
        alt="Fossil Watch"
        className={styles.productImage}
      />
      <div className={styles.productInfo}>
        <h2>Fossil BQ3691 Rye Analog Watch for Women</h2>
        <p>Price: ₹8747.00</p>
        <p style={{ textDecoration: "line-through" }}>₹12495.00</p>
        <p>₹3748.00 Off</p>
        <div className={styles.productOptions}>
          <label>Size:</label>
          <select>
            <option>OneSize</option>
          </select>

          <label>Qty:</label>
          <select value={quantity} onChange={onQuantityChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <button className={styles.removeBtn}>Remove</button>
      </div>
    </div>
  );
};

const AddressSection = () => {
  return (
    <div className={styles.addressSection}>
      <h3>Deliver To</h3>
      <p>400001, Mumbai</p>
      <button className={styles.changeBtn}>Change</button>
    </div>
  );
};

const PricingSummary = ({ quantity }) => {
  const basePrice = 12495;
  const discount = 3748;
  const total = basePrice - discount;
  const processingFee = 29;
  const finalPrice = total + processingFee;

  return (
    <div className={styles.pricingSummary}>
      <h3>Bag Total</h3>
      <p>Bag Total: ₹{basePrice}</p>
      <p>Processing Fee: ₹{processingFee}</p>
      <p>Bag Subtotal: ₹{basePrice}</p>
      <p>Product Discount(s): -₹{discount}</p>
      <p>You will save ₹{discount} on this order</p>
      <h3>Total: ₹{finalPrice}</h3>
      <button className={styles.checkoutBtn}>Checkout</button>
    </div>
  );
};

const Bag = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div className={styles.bagContainer}>
      <div className={styles.bagHeader}>
        <h1>My Bag</h1>
      </div>
      <div className={styles.bagContent}>
        <div className={styles.productDetails}>
          <ProductCard
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
          />
        </div>
        <div className={styles.bagSidebar}>
          <AddressSection />
          <PricingSummary quantity={quantity} />
        </div>
      </div>
    </div>
  );
};

export default Bag;