import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "../../styles/auth/verifyOtp.module.css";
import { useAuth } from "../../context";
import { ref, update } from "firebase/database";
import database from "../../firebase/config";

const VerifyOtp = () => {
  const router = useRouter();
  const { login, authOtp } = useAuth();
  console.log("this is context stored otp", authOtp);
  const otp = authOtp;

  const { name, email, phoneNumber, functionType } = router.query;

  const [userOtp, setUserOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  console.log(name, email, phoneNumber, otp, functionType);

  console.log("OTP:", otp);

  const registerUserToFirebase = async (uid, name, email, phoneNumber) => {
    console.log("Uid received in registerUserToFirebase", uid);
    const userRef = ref(database, "users/" + uid);
    console.log("registering user to firebase");
    console.log(userRef);

    try {
      await update(userRef, {
        userName: name,
        userEmail: email,
        phoneNumber: phoneNumber,
        uid: uid,
      });
      console.log("Data updated successfully.");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleVerifyOtp = async () => {
    console.log("OTP:", otp, userOtp);

    if (!userOtp) {
      alert("Please enter OTP");
      return;
    }

    if (userOtp !== otp) {
      alert("Invalid OTP");
      return;
    } else {
      setLoading(true);
      try {
        const response = await axios.post(
          "http://3.84.158.78:5000/api/auth/handle-auth",
          {
            name,
            email,
            phoneNumber,
          }
        );
        setLoading(false);

        if (response.data.message === "Authentication successful") {
          // Perform any actions after successful OTP verification
          console.log("Response from backend");
          //   console.log(response);
          console.log("uid ", response.data.userId);

          login(response.data.userId, name, email, phoneNumber);
          registerUserToFirebase(
            response.data.userId,
            name,
            email,
            phoneNumber
          );
          console.log("User logged in successfully");

          router.push("/Souvenir");
        } else {
          alert("Failed to verify OTP");
        }
      } catch (error) {
        setLoading(false);
        alert("Error: Failed to verify OTP");
        console.error(error);
      }
    }
  };

  return (
    <div className={styles.container}>
      {/* <img src="/Authillus.png" alt="Authentication Illustration" className="image" /> */}

      <h1>Oojus</h1>

      <h1 className="header">Enter OTP</h1>
      <p className="subheading">
        Enter the OTP code sent to your registered phone number
      </p>

      <div className="otp-input-container">
        <input
          type="text"
          maxLength="6"
          placeholder="Enter OTP"
          value={userOtp}
          onChange={(e) => setUserOtp(e.target.value)}
          className="otp-input"
        />
      </div>

      <button onClick={handleVerifyOtp} className="btn" disabled={loading}>
        {loading ? "Loading..." : "Submit"}
      </button>

      <div className="resend-container">
        <p>Didn’t receive the OTP?</p>
        <button
          onClick={() => alert("Resend OTP functionality")}
          className="resend-btn"
        >
          Resend OTP
        </button>
      </div>

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default VerifyOtp;
