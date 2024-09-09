import React, { useEffect, useState } from "react";
import styles from "../../styles/pages/reviewOrder.module.css";
import { useRouter } from "next/router";
import { useAuth } from "../context";
import discountedPrice from "../utils/discountedPrice";
import { handlePayment } from "../utils/handlePayments";

import { ref, get, set, push } from "firebase/database";
import database from "../../firebase/config";

const ReviewOrder = () => {
  const router = useRouter();
  const { productData, setProductData, uid, name, email, phNumber } = useAuth();
  // console.log("Name: ", name, "Email: ", email, "Phone Number: ", phNumber);
  const price = discountedPrice(productData);
  const [quantity, setQuantity] = useState(1);

  // console.log("productData", productData);

  const [flatNo, setFlatno] = useState(null);
  const [sector, setSector] = useState(null);
  const [address, setAddress] = useState(null);
  const [pincode, setPincode] = useState(null);

  const [isAddressNotFilled, setIsAddressNotFilled] = useState(false);

  useEffect(() => {
    fetchAddress();
  }, []);

  const fetchAddress = async () => {
    try {
      const addressRef = ref(database, `/users/${uid}/address`);
      const snapshot = await get(addressRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        setFlatno(data.flatNo);
        setSector(data.sector);
        setAddress(data.address);
        setPincode(data.pincode);
      } else {
        console.log("No address data available");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }

    console.log("fetching Address:", flatNo, sector, address, pincode);
  };

  const pushAddress = async () => {
    if (!flatNo || !sector || !address || !pincode) {
      alert("Please fill in all the fields to continue.");
      return;
    }
    const addressData = {
      flatNo: flatNo,
      sector: sector,
      address: address,
      pincode: pincode,
    };

    try {
      const addressRef = ref(database, `/users/${uid}/address`);
      await set(addressRef, addressData);
      console.log("Address added successfully");
      closeModal();
    } catch (error) {
      console.error("Error adding address:", error);
    }

    console.log("pushing Address:", flatNo, sector, address, pincode);
  };

  const performPayment = async (
    price,
    productData,
    quantity,
    uid,
    name,
    phNumber,
    email
  ) => {

    console.log("performPayment:", price, productData, quantity, uid, name, phNumber, email);
    try {
      
      // Push a new booking entry to Firebase Realtime Database
      const bookingRef = push(ref(database, "/bookings"));

      // Simulating handling of payment (this could be Razorpay, Stripe, etc.)
      // name, phoneNo, email
      const textResponse = await handlePayment(
        bookingRef.key,
        price,
        name,
        phNumber,
        email
      );

      const bookingOrder = {
        bookingId: bookingRef.key,
        bookingType: "souvenir_item",
        timeStamp: new Date().getTime(),
        name: productData.name,
        productId: productData._id,
        price: price,
        image: productData.images[0],
        quantity: quantity,
        userId: uid,
      };

      // Navigate to the PaymentScreen and pass necessary details
      router.push({
        pathname: "/payment", // Assuming you have a payment page
        query: {
          htmlContent: textResponse,
          bookingId: bookingRef.key,
          price: price,
          quantity: quantity,
        },
      });

      // Alternatively, if passing a lot of sensitive data, you could store it in localStorage or context
      localStorage.setItem("bookingOrder", JSON.stringify(bookingOrder));
    } catch (error) {
      console.error("Error during payment process:", error);
    }
  };

  return (
    <div className={styles.superContainer}>
      <h1 style={{ color: "black" }}>This is {router.query.productId}</h1>

      <div className={styles.productDetails}>
        <div className={styles.productImage}>
          <img src={productData?.images[0]} alt="Product" />
        </div>
        <div className={styles.productDescription}>
          <h1>{productData?.name}</h1>
          <p>{productData?.description}</p>
          <p>Price: {productData?.price}</p>
          <p>Discount: {productData?.discount}</p>
          <p>
            Discounted Price:{" "}
            {productData?.price -
              productData?.price * (productData?.discount / 100)}
          </p>
          <button
            className={styles.buttonStyle}
            onClick={() => setProductData(null)}
          >
            Back
          </button>
        </div>
      </div>

      <form>
        <label>Enter your Details</label>

        <input
          type="text"
          placeholder="Flat / House no. / Floor / Building *"
          onChange={(e) => setFlatno(e.target.value)}
          value={flatNo}
          className={styles.input}
        />

        <input
          type="text"
          placeholder="Block / Area / Sector *"
          onChange={(e) => setSector(e.target.value)}
          value={sector}
          className={styles.input}
        />

        <input
          type="text"
          placeholder="Address *"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          className={styles.input}
        />

        <input
          type="text"
          placeholder="Pincode *"
          onChange={(e) => setPincode(e.target.value)}
          value={pincode}
          className={styles.input}
        />

        <button type="button" onClick={pushAddress}>
          Add Address
        </button>
      </form>

      <div>
        <p>{discountedPrice(productData)}</p>

        <div>
          <p>G.S.T {productData["gst"] + typeof productData["gst"]}%</p>
          <p>Rs {(price * quantity * productData["gst"]) / 100}</p>
        </div>

        <p>
          Rs{" "}
          {Math.round(
            (price * quantity * productData.gst) / 100 + price * quantity
          )}
        </p>
      </div>

      <button
        onClick={() => {
          if (
            flatNo.trim() !== "" &&
            sector.trim() !== "" &&
            address.trim() !== "" &&
            pincode.trim() !== ""
          ) {
            performPayment(
              (price * quantity * productData.gst) / 100 + price * quantity,
              productData,
              quantity,
              uid,
              name,
              phNumber,
              email

            );
          } else {
            // alert('Enter the address details');
            setIsAddressNotFilled(true);
          }
        }}
      >
        Pay
      </button>
    </div>
  );
};

export default ReviewOrder;
