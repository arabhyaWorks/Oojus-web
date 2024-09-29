import React, { useEffect, useState } from "react";
import styles from "../../styles/pages/reviewOrder.module.css";
import { useRouter } from "next/router";
import { useAuth } from "../../context";
import discountedPrice from "../../utils/discountedPrice";
import { ref, get, set, push } from "firebase/database";
import database from "../../firebase/config";
import CCAvenue from "../../utils/CCAvenue";

const host = "http://localhost:3000";

const ReviewOrder = () => {
  const router = useRouter();
  const {
    productData,
    setProductData,
    setUsersBooking,
    uid,
    name,
    email,
    phNumber,
  } = useAuth();
  const [quantity, setQuantity] = useState(1);

  // Safely check for productData and provide fallback values
  const price = productData ? discountedPrice(productData) : 0;
  const gst = productData?.gst ?? 0; // Default gst to 0 if it's not available
  const [flatNo, setFlatno] = useState("");
  const [sector, setSector] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [isAddressNotFilled, setIsAddressNotFilled] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchAddress();
  }, []);

  const fetchAddress = async () => {
    try {
      const addressRef = ref(database, `/users/${uid}/address`);
      const snapshot = await get(addressRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        setFlatno(data.flatNo || "");
        setSector(data.sector || "");
        setAddress(data.address || "");
        setPincode(data.pincode || "");
      } else {
        console.log("No address data available");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  const pushAddress = async () => {
    if (!validateAddress()) {
      return;
    }

    const addressData = {
      flatNo: flatNo.trim(),
      sector: sector.trim(),
      address: address.trim(),
      pincode: pincode.trim(),
    };

    try {
      const addressRef = ref(database, `/users/${uid}/address`);
      await set(addressRef, addressData);
      console.log("Address added successfully");
      setErrors({});
    } catch (error) {
      console.error("Error adding address:", error);
    }
  };

  const validateAddress = () => {
    const newErrors = {};

    if (!flatNo.trim()) newErrors.flatNo = "Flat number is required";
    if (!sector.trim()) newErrors.sector = "Sector is required";
    if (!address.trim()) newErrors.address = "Address is required";
    if (!pincode.trim()) newErrors.pincode = "Pincode is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
    try {
      const bookingRef = push(ref(database, "/bookings"));
      const usersRef = push(ref(database, `/users/${uid}/bookings`));

      let paymentData = {
        merchant_id: "447588",
        order_id: bookingRef.key,
        amount: price.toFixed(2),
        currency: "INR",
        billing_email: email,
        billing_name: name,
        billing_address: address,
        billing_city: "Varanasi",
        billing_state: "UP",
        billing_zip: pincode,
        billing_country: "India",
        redirect_url: `${host}/api/ccavenue-handle`,
        cancel_url: `${host}/api/ccavenue-handle`,
        merchant_param1: uid, // UID
        merchant_param2: bookingRef.key,// bookingId
        merchant_param3: usersRef.key, // id
        merchant_param4: "souvenir_item", // bookingType
        language: "EN",
        billing_tel: phNumber,
      };

      let encReq = CCAvenue.getEncryptedOrder(paymentData);
      let accessCode = "AVPP15IH50BJ57PPJB";

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
        userName: name,
        paymentStatus: -1,
      };

      await set(bookingRef, bookingOrder);
      router.push({
        pathname: "/payment",
        query: { encReq, accessCode },
      });
    } catch (error) {
      console.error("Error during payment process:", error);
    }
  };

  const handlePayment = () => {
    if (validateAddress()) {
      performPayment(
        (price * quantity * gst) / 100 + price * quantity,
        productData,
        quantity,
        uid,
        name,
        phNumber,
        email
      );
    } else {
      setIsAddressNotFilled(true);
    }
  };

  return (
    <div className={styles.superContainer}>
      <h1 style={{ color: "black" }}>Review Order {name}</h1>

      {productData ? (
        <>
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
            </div>
          </div>

          {/* address details form to ask the user for their address details */}
          <form>
            <label>Enter your Details</label>

            <input
              type="text"
              placeholder="Flat / House no. / Floor / Building *"
              onChange={(e) => setFlatno(e.target.value)}
              value={flatNo}
              className={styles.input}
            />
            {errors.flatNo && (
              <p className={styles.errorText}>{errors.flatNo}</p>
            )}

            <input
              type="text"
              placeholder="Block / Area / Sector *"
              onChange={(e) => setSector(e.target.value)}
              value={sector}
              className={styles.input}
            />
            {errors.sector && (
              <p className={styles.errorText}>{errors.sector}</p>
            )}

            <input
              type="text"
              placeholder="Address *"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              className={styles.input}
            />
            {errors.address && (
              <p className={styles.errorText}>{errors.address}</p>
            )}

            <input
              type="text"
              placeholder="Pincode *"
              onChange={(e) => setPincode(e.target.value)}
              value={pincode}
              className={styles.input}
            />
            {errors.pincode && (
              <p className={styles.errorText}>{errors.pincode}</p>
            )}

            <button type="button" onClick={pushAddress}>
              Add Address
            </button>
          </form>

          {/* payment details and total payable amount  */}
          <div>
            <p>{discountedPrice(productData)}</p>

            <div>
              <p>G.S.T {gst}%</p>
              <p>Rs {(price * quantity * gst) / 100}</p>
            </div>

            <p>
              Total: Rs{" "}
              {Math.round((price * quantity * gst) / 100 + price * quantity)}
            </p>
          </div>

          <button onClick={handlePayment}>Pay</button>
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ReviewOrder;
