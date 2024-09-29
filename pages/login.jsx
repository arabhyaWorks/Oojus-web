import { useState } from "react";
import Image from "next/image";
import styles from "../styles/pages/Login.module.css"; // Add your custom styles

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [whatsappUpdates, setWhatsappUpdates] = useState(true);

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle OTP request logic here
    console.log("Phone Number:", phoneNumber);
    console.log("WhatsApp Updates:", whatsappUpdates);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        
        <div className={styles.overlayText}>
          <h1 className={styles.heading}>Start your spiritual journey with Oojus.</h1>
        
        </div>
      </div>

      <div className={styles.right}>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h1 className={styles.title}>Embark on your sacred journey through Kashi with Oojus.</h1>
          <h2>Enter Phone Number</h2>
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
              onChange={handlePhoneChange}
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
            <label htmlFor="whatsappUpdates">Send puja updates on WhatsApp</label>
          </div>
          <button type="submit" className={styles.otpButton}>Get OTP</button>
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