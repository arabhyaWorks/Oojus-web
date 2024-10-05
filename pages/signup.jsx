import { useState } from "react";
// import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/pages/Login.module.css";
import { OrbitProgress } from "react-loading-indicators";
import axios from "axios";
import { useAuth } from "../context";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const { passLoginData, setPassLoginData } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const [whatsappUpdates, setWhatsappUpdates] = useState(true);
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Phone Number:", phoneNumber);
    console.log("WhatsApp Updates:", whatsappUpdates);
  };

  const handleCreateAccount = async () => {
    if (!name || !email || !phoneNumber) {
      toggleOverlay();
      return;
    }

    if (!isValidEmail(email)) {
      alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "http://3.84.158.78:5000/api/auth/send-otp",
        {
          name,
          email,
          phoneNumber: phoneNumber,
        }
      );

      if (response.data) {
        setPassLoginData({
          name,
          email,
          phoneNumber,
          otp: response.data.otp,
          functionType: "register",
        });

        router.push("/otpScreen");
      }
      if (response.data) {
        console.log("Success" + "OTP sent successfully" + response.data.otp);
      }

      console.log("Response:", response.data);
      setLoading(false);
    } catch (error) {
      // setError(JSON.stringify(error.request));
      setLoading(false);
      if (error.response) {
        console.error("Response error:", error.response.data);
        alert("Error", `Server responded with status ${error.response.status}`);
      } else if (error.request) {
        console.error("Request error:", error.request);
        alert("Error", "No response received from server");
      } else {
        console.error("Error", error.message);
        alert("Error", error.message);
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
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <h1 className={styles.title}>
            Embark on your sacred journey through Kashi with Oojus.
          </h1>
          {/* <h2>Enter Phone Number</h2> */}

          <div className={styles.inputGroup}>
            <div className={styles.labelHeader}>
              <p className={styles.labelHeaderTxt}>Enter Your Name</p>
            </div>
            <div className={styles.inputContainer}>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.labelHeader}>
              <p className={styles.labelHeaderTxt}>Enter Your Email Address</p>
            </div>
            <div className={styles.inputContainer}>
              {/* +91 */}
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.labelHeader}>
              <p className={styles.labelHeaderTxt}>Enter Phone Number</p>
            </div>
            <div className={styles.inputContainer}>
              +91
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phoneNumber}
                maxlength="10"
                size="10"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="whatsappUpdates"
              checked={whatsappUpdates}
              onChange={() => setWhatsappUpdates(!whatsappUpdates)}
            />
            <label htmlFor="whatsappUpdates">
              Send puja updates on WhatsApp
            </label>
          </div>

          <button
            type="submit"
            // disabled={true}
            className={styles.otpButton}
            // loading={loading}
            onClick={handleCreateAccount}
          >
            {/* Create Account */}
            {loading ? (
              <OrbitProgress
                variant="disc"
                color="white"
                size="small"
                text=""
                textColor=""
              />
            ) : (
              "Create Account"
            )}
          </button>
          <p className={styles.terms}>Already have an <Link href={'/login'}  >Account</Link>?</p>
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
