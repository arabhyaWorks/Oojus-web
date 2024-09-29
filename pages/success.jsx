import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Success = () => {
  const router = useRouter();

  const goToOrders = () => {
    // Navigate to the user's orders page
    router.push("/");
  };

  const continueShopping = () => {
    // Navigate to the homepage or shopping page
    router.push("/");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Payment Successful</h1>
      <img
        src="https://www.kablooe.com/wp-content/uploads/2019/08/check_mark.png"
        alt="Payment Success"
        style={styles.image}
      />
      <p style={styles.message}>
        Thank you for your purchase! Your payment was successfully processed.
      </p>



      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={goToOrders}>
          View My Orders
        </button>
        <button style={styles.button} onClick={continueShopping}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
    textAlign: "center",
  },
  header: {
    color: "#28a745", // Green color for success status
    fontSize: "2rem",
    marginBottom: "20px",
  },
  message: {
    color: "#6c757d",
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  image: {
    width: "200px",
    height: "200px",
    marginBottom: "30px",
  },
  orderDetails: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    textAlign: "left",
    width: "300px",
  },
  buttonContainer: {
    display: "flex",
    gap: "20px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

export default Success;