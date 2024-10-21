import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context";
import { query, ref, orderByChild, equalTo, onValue } from "firebase/database";
import database from "../firebase/config";
import styles from "../styles/pages/Bookings.module.css";
import { OrbitProgress } from "react-loading-indicators";
import timeStampToDate from "../utils/timestampToDate";
import BreadCrum from "./components/BreadCrum";

const BookingCard = (booking, index, uid) => {
  const [bookingData, setBookingData] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const bookingRef = ref(database, `bookings/${booking.booking.bookingId}`);

      onValue(bookingRef, (snapshot) => {
        const data = snapshot.val();

        if (data) {
          setBookingData(data);
        } else {
          setBookingData({});
        }
        setLoading(false);
      });
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className={styles.bookingCard} key={index}>
      <div className={styles.bookingCardContent}>
        <div
          onClick={() => {
            router.push({
              pathname: `/Souvenir/products/${bookingData.productId}`,
            });
          }}
          className={styles.bookingImgContainer}
        >
          <img
            src={bookingData.image}
            className={styles.bookingImg}
            alt="Product Image"
          />
        </div>
        <div className={styles.bookingDetails}>
          <div className={styles.cardBody}>
            <h5 className={styles.cardTitle}>{bookingData.name}</h5>
            <p className={styles.cardText}>
              <strong className={styles.price}>
                Rs {bookingData.price * bookingData.quantity}
              </strong>
              <br />
              <span>
                Quantity: <strong>{bookingData.quantity}</strong>
              </span>
              <br />
              <span>
                Ordered On:{" "}
                <strong>
                  {timeStampToDate(bookingData.timeStamp).time}{" "}
                  {timeStampToDate(bookingData.timeStamp).date}
                </strong>
              </span>
              <br />
              <span>
                Payment Status:{" "}
                <strong
                  className={
                    bookingData.paymentStatus == "1"
                      ? styles.statusCompleted
                      : styles.statusPending
                  }
                >
                  {bookingData.paymentStatus == "1" ? "Successful" : "Failed"}
                </strong>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const BookingScreen = () => {
  const router = useRouter();
  const { uid, name, email, phNumber } = useAuth();
  const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const bookingRef = ref(database, `users/${uid}/bookings`);
      const bookingQuery = query(
        bookingRef,
        orderByChild("bookingType"),
        equalTo("souvenir_item")
      );

      onValue(bookingQuery, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setBookings(Object.values(data));
        } else {
          setBookings([]);
        }
        setLoading(false);
      });
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (uid) {
      fetchBookings();
    }
  }, [uid]);

  if (loading) {
    return (
      <div className={styles.LoaderContainer}>
        <OrbitProgress variant="disc" color="black" size="small" />
      </div>
    );
  } else {
    return (
      <div className={styles.superContainer}>
        <BreadCrum crumbs={["Booking History"]} />

        {/* <div className={styles.bookingFilterSection}>
            <h2 className={styles.mb4}>Bookings History</h2>
            <div className={styles.filterButtons}>
              <button className={`${styles.filterBtn} ${styles.active}`}>
                Diya & Prashad
              </button>
              <button className={styles.filterBtn}>Hotels</button>
              <button className={styles.filterBtn}>Souvenir</button>
              <button className={styles.filterBtn}>Book Guide</button>
              <button className={styles.filterBtn}>Cabs & Package</button>
            </div>
          </div> */}

        <div className={styles.bookingHistorySection}>
          {bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <BookingCard
                key={index.toString()}
                booking={booking}
                index={index}
                uid={uid}
              />
            ))
          ) : (
            <p>No bookings found.</p>
          )}
        </div>
      </div>
    );
  }
};

export default BookingScreen;
