import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Failed = () => {
  const router = useRouter();

  useEffect(() => {
    // Here you could add some logic to check the payment status via an API call.
    // Or you could handle payment failure logic if needed.
  }, []);

  const retryPayment = () => {
    // Logic to retry payment (this could navigate to a checkout or payment page)
    router.push("/Souvenir/products");
  };

  const goToHome = () => {
    // Navigate back to the home page
    router.push("/");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Payment Failed</h1>
      <p style={styles.message}>
        Unfortunately, your payment could not be processed at this time. Please try again or <br /> contact our support team for assistance.
      </p>

      <img
        src="https://cdn-icons-png.flaticon.com/512/753/753345.png"
        alt="Payment Failed"
        style={styles.image}
      />

      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={retryPayment}>
          Retry Payment
        </button>
        <button style={styles.button} onClick={goToHome}>
          Go to Home
        </button>
      </div>

      <div style={styles.helpContainer}>
        <p>
          If you continue to experience issues, please visit our{" "}
          <a href="/help" style={styles.helpLink}>
            Help Center
          </a>.
        </p>
      </div>
    </div>
  );
};

// Inline styles for simplicity, can be replaced with CSS or a CSS-in-JS solution.
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
    color: "#dc3545", // Red color for failed status
    fontSize: "2rem",
    marginBottom: "20px",
  },
  message: {
    color: "#6c757d",
    fontSize: "1.2rem",
    marginBottom: "20px",

  },
  image: {
    width: "150px",
    height: "150px",
    marginBottom: "30px",
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
  helpContainer: {
    marginTop: "20px",
    color:"black"
  },
  helpLink: {
    color: "#007bff",
    textDecoration: "underline",
    cursor: "pointer",
  },
};

export default Failed;