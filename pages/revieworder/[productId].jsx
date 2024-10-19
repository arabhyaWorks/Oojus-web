import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../context";
import discountedPrice from "../../utils/discountedPrice";
import { ref, get, set, push } from "firebase/database";
import database from "../../firebase/config";
import CCAvenue from "../../utils/CCAvenue";
import styles from "../../styles/pages/reviewOrder.module.css";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaShieldHalved } from "react-icons/fa6";


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
  const [domain, setDomain] = useState("http://localhost:3000");

  // Safely check for productData and provide fallback values
  const price = productData ? discountedPrice(productData) : 0;
  const gst = productData?.gst ?? 0; // Default gst to 0 if it's not available
  const [flatNo, setFlatno] = useState("");
  const [sector, setSector] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [isAddressNotFilled, setIsAddressNotFilled] = useState(false);
  const [errors, setErrors] = useState({});
  const [couponCode, setCouponCode] = useState("");

  useEffect(() => {
    fetchAddress();
  }, []);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const fullUrl = window.location.href; // Full URL
  //     const domain = window.location.origin; // Domain name (http://localhost:3000)
  //     setDomain(domain);


  //   }
  // }, [router.pathname]);

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
      console.error("this is your domain")
      console.error(domain)
      console.log("")
      console.log("")
      console.log("---------Performing Payment---------");
      console.log(name, email, phNumber, uid);
      console.log("")

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
        redirect_url: `${domain}/api/ccavenue-handle`,
        cancel_url: `${domain}/api/ccavenue-handle`,
        merchant_param1: uid, // UID
        merchant_param2: bookingRef.key, // bookingId
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
      {productData ? (
        <>

          <div className={styles.leftContainer}>
            {/* Early bird discount container */}
            <div className={styles.earlyBirdContainer}>
              <RiDiscountPercentFill size={22} color="" />
              <h1 className={styles.earlyBird}>
                Get this order at{" "}
                <span style={{ textDecoration: "line-through" }}>
                  ₹{discountedPrice(productData)}
                </span>{" "}
                <span>₹{discountedPrice(productData) - 100}</span>
              </h1>
            </div>

            {/* Product description and Quantity selection */}

            <div className={styles.productContainer}>
              <div className={styles.imageCarousel}>
                <img
                  src={productData?.images[0]}
                  alt={`Product image`}
                  className={styles.productImage}
                />
              </div>

              {/* Product info container */}
              <div className={styles.productInfoContainer}>
                {/*Price and Info */}
                <h1 className={styles.productTitle}>{productData?.name}</h1>
                <div className={styles.priceSection}>
                  <div style={{display:"flex", flexDirection:'row', gap:"10px"}}>
                  <span className={styles.price}>
                    ₹{discountedPrice(productData)}
                  </span>
                  <span className={styles.ogPrice}>₹{productData?.price}</span>
                  </div>
                  <span className={styles.off}>
                    ₹
                    {(
                      productData?.price - discountedPrice(productData)
                    ).toFixed(2)}{" "}
                    Off
                  </span>
                </div>

                {/* Quantity container */}
                <div className={styles.productOptions}>
                  <p style={{ color: "black" }}>Quantity:</p>

                  <div className={styles.qtyBtn}>
                    <button
                      className={styles.qtyButton}
                      onClick={() =>
                        setQuantity(quantity > 1 ? quantity - 1 : 1)
                      }
                    >
                      <FaMinus size={20} />
                    </button>
                    <span className={styles.quantity}>
                      {quantity.toString().padStart(2, "0")}
                    </span>
                    <button
                      className={styles.qtyButton}
                      onClick={() =>
                        setQuantity(quantity < 10 ? quantity + 1 : 10)
                      }
                    >
                      <FaPlus size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightContainer}>
            {/* Address details form to ask the user for their address details */}
            <div className={styles.rgtContainer}>
              <div className={styles.upparLabel}>
                <h2>Deliver To</h2>
                <h3>Change</h3>
              </div>

              <div className={styles.lowerLabel}>
                <h3>{name}</h3>
                <h3>{phNumber}</h3>
                <h3> {`${flatNo}, ${sector}, ${address}, ${pincode}`}</h3>
              </div>
            </div>

            <div className={styles.rgtContainer}>
              <h2>Coupon & Offers</h2>

              <div className={styles.couponContainer}>
                <input
                  type="text"
                  placeholder="Enter Coupon Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className={styles.couponInput}
                />
                <button className={styles.applyCoupon}>
                  <p>Apply</p>
                </button>
              </div>

              {/* <div className={styles.somecode}>
                <p>
                  Use code " BUMBUM50 " for instant 5% discount on full Payment
                </p>
              </div> */}
            </div>

            <div className={styles.rgtContainer}>
              <h2>Payment Details</h2>
              <div className={styles.billItem}>
                <p>Original Price</p>
                <p>₹{productData.price}</p>
              </div>
              <div className={styles.billItem}>
                <p>Discount</p>
                <p>{productData.discount}%</p>
              </div>
              <div className={styles.billItem}>
                <p>Price</p>
                <p>₹{discountedPrice(productData)}</p>
              </div>
              <div className={styles.billItem}>
                <p>Quanity</p>
                <p>{quantity}</p>
              </div>
              <div className={styles.billItem}>
                <p>G.S.T.{productData.gst}%</p>
                <p>
                  ₹
                  {(discountedPrice(productData) * quantity * productData.gst) /
                    100}
                </p>
              </div>
              {/* <div className={styles.billItem}>
                <p>Total Payable Amount</p>
                <p>
                  ₹
                  {(discountedPrice(productData) * quantity * productData.gst) /
                    100 +
                    discountedPrice(productData) * quantity}
                </p>
              </div> */}

              <div className={styles.payButton}>
                <p>
                  Total <br />
                  <span className={styles.price}>
                    ₹
                    {(
                      (discountedPrice(productData) *
                        quantity *
                        productData.gst) /
                        100 +
                      discountedPrice(productData) * quantity
                    ).toFixed(2)}
                  </span>
                </p>
                <button onClick={handlePayment}>Checkout</button>
              </div>
            </div>
            <div className={styles.secure} >
              <FaShieldHalved color="#9F5BE4" size={30}/>
              <p>Secure and hassle-free payments. Easy returns. 100% authentic products.</p>
            </div>
          </div>

          <>
{/* address details form to ask the user for their address details */}
          {/* <form>
            <label>Enter your Details</label>

            <input
              type="text"
              placeholder="Flat / House no. / Floor / Building *"
              onChange={(e) => setFlatno(e.target.value)}
              value={flatNo}
            />
            {errors.flatNo && (
              <p>{errors.flatNo}</p>
            )}

            <input
              type="text"
              placeholder="Block / Area / Sector *"
              onChange={(e) => setSector(e.target.value)}
              value={sector}
            />
            {errors.sector && (
              <p>{errors.sector}</p>
            )}

            <input
              type="text"
              placeholder="Address *"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
            {errors.address && (
              <p>{errors.address}</p>
            )}

            <input
              type="text"
              placeholder="Pincode *"
              onChange={(e) => setPincode(e.target.value)}
              value={pincode}
            />
            {errors.pincode && (
              <p>{errors.pincode}</p>
            )}

            <button type="button" onClick={pushAddress}>
              Add Address
            </button>
          </form> */}

          {/* payment details and total payable amount  */}
          {/* <div>
            <p>{discountedPrice(productData)}</p>

            <div>
              <p>G.S.T {gst}%</p>
              <p>Rs {(price * quantity * gst) / 100}</p>
            </div>

            <p>
              Total: Rs{" "}
              {Math.round((price * quantity * gst) / 100 + price * quantity)}
            </p>
          <button onClick={handlePayment}>Pay</button>
          </div> */}

          </>
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ReviewOrder;
