import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "../../styles/auth/signup.module.css";
import sendWhatsAppOtp from "../utils/whatsappOtp";
import { useAuth } from "../context/index";

const Signup = () => {
  const router = useRouter();
  const { setAuthOtp } = useAuth();

  const [name, setName] = useState("R Animesh");
  const [email, setEmail] = useState("animesh@civiccraft.in");
  const [phone, setPhone] = useState("9452624111");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCreateAccount = async () => {
    if (!name || !email || !phone) {
      alert("Please fill in all the fields to continue.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Invalid Email: Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "http://3.84.158.78:5000/api/auth/send-otp",
        {
          name,
          email,
          phoneNumber: phone,
        }
      );

      sendWhatsAppOtp(phone, response.data.otp);

      if (response.data) {
        console.log("OTP data stored:", response.data.otp);
        setAuthOtp(response.data.otp);
        router.push({
          pathname: "/auth/verifyOtp",
          query: {
            name,
            email,
            phoneNumber: phone,
            functionType: "register",
          },
        });
      }

      console.log("Response:", response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message || "Something went wrong");
      setLoading(false);
    }
  };

  const removeUID = async () => {
    try {
      localStorage.removeItem("uid");
      console.log("UID removed");
    } catch (e) {
      console.error("Error removing UID:", e);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ fontWeight: "700", fontSize: "30px", color: "black" }}>
          Oojus
        </h1>
      </div>

      <div>
        <label>Full Name</label>
        <input
          type="text"
          placeholder="First name and last name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className={styles.input}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="abc@xyz.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={styles.input}
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="+91 1234567890"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          className={styles.input}
        />
      </div>

      <button
        onClick={handleCreateAccount}
        // className={styles.btn}
        disabled={loading}
      >
        {loading ? "Loading..." : "Create Account"}
      </button>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <p style={{ fontSize: "12px", color: "#AAAAAA" }}>
          By continuing, you agree to our{" "}
          <span
            style={{
              color: "#54A7FB",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => removeUID()}
          >
            Terms of Service
          </span>{" "}
          and{" "}
          <span
            style={{
              color: "#54A7FB",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Privacy Policy
          </span>
          .
        </p>
      </div>

      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>
          <p>Error: {error}</p>
        </div>
      )}
    </div>
  );
};

export default Signup;
