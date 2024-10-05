import { useState } from "react";
import { useRouter } from "next/router";
import { OrbitProgress } from "react-loading-indicators";
import { useAuth } from "../context";
import axios from "axios";
import styles from "../styles/pages/Login.module.css";

import { ref, update, onValue } from "firebase/database";
import database from "../firebase/config";

const Login = () => {
  const router = useRouter();
  const { passLoginData, setPassLoginData, login, productData } = useAuth();
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const [databaseUserName, setDatabaseUserName] = useState("");
  const [databaseUserEmail, setDatabaseUserEmail] = useState("");

  console.log(passLoginData);
  console.log(productData);

  const registerUserToFirebase = async (uid, name, email, phoneNumber) => {
    console.log("Registering the user to Firebase...");
    const userRef = ref(database, `users/${uid}`);

    const userData =
      passLoginData.functionType === "login"
        ? {
            phoneNumber: phoneNumber,
            uid: uid,
          }
        : {
            userName: name,
            userEmail: email,
            phoneNumber: phoneNumber,
            uid: uid,
          };

    try {
      await update(userRef, userData);

      if (passLoginData.functionType === "login") {
        onValue(userRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            setDatabaseUserName(data.userName);
            setDatabaseUserEmail(data.userEmail);

            // Ensuring that the data has been fetched before calling login
            login(uid, data.userName, data.userEmail, phoneNumber);
            console.log("User data fetched and login successful.");
          } else {
            console.error("Error: No data found for the user.");
          }
        });
      } else {
        login(uid, name, email, phoneNumber);
        console.log("User registered and login successful.");
      }
    } catch (error) {
      console.error("Error adding user data: ", error);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault(); // Prevent form submission and reloading

    if (!otp) {
      alert("Please enter the OTP");
      return;
    }
    if (otp !== passLoginData.otp) {
      alert("Invalid OTP");
      return;
    } else {
      setLoading(true); // Start loading spinner
      try {
        console.log(
          "Data being sent:",
          passLoginData.name,
          passLoginData.email,
          passLoginData.phoneNumber
        );
        const response = await axios.post(
          "http://3.84.158.78:5000/api/auth/handle-auth",
          {
            name: passLoginData.name,
            email: passLoginData.email,
            phoneNumber: passLoginData.phoneNumber,
          }
        );
        setLoading(false); // Stop loading spinner
        console.log(response.data);

        if (response.data.message === "Authentication successful") {
          // Register user to Firebase and proceed
          await registerUserToFirebase(
            response.data.userId,
            passLoginData.name,
            passLoginData.email,
            passLoginData.phoneNumber
          );
          router.push({
            pathname: `/revieworder/${productData._id}`,
          });
        } else {
          alert("Failed to verify OTP");
        }
      } catch (error) {
        setLoading(false); // Stop loading spinner
        console.error("Error during OTP verification:", error);
        alert("An error occurred while verifying OTP");
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.overlayText}>
          <h1 className={styles.heading}>
            Start your spiritual journey with Oojus.
          </h1>
        </div>
      </div>

      <div className={styles.right}>
        <form className={styles.loginForm} onSubmit={handleVerifyOtp}>
          <h1 className={styles.title}>
            Enter the OTP code we just sent you on your registered Phone number
          </h1>

          <div className={styles.inputGroup}>
            <div className={styles.labelHeader}>
              <p className={styles.labelHeaderTxt}>Enter the OTP</p>
            </div>
            <div className={styles.inputContainer}>
              <input
                type="text"
                id="otp-code"
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
                className={styles.input}
                required
              />
            </div>
          </div>

          <button type="submit" className={styles.otpButton} disabled={loading}>
            {loading ? (
              <OrbitProgress
                variant="disc"
                color="white"
                size="small"
                text=""
                textColor=""
              />
            ) : (
              "Submit"
            )}
          </button>

          <p className={styles.terms}>
            By continuing, you agree to our{" "}
            <a href="/terms">Terms of Service</a> and{" "}
            <a href="/privacy">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;