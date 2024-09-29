import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context";
import { ref, get, set, push } from "firebase/database";
import database from "../firebase/config";

const Failed = () => {
  const router = useRouter();
  // const { usersBooking, uid } = useAuth();
  // console.log('uid', uid);
  // console.log("userbookings", usersBooking);

  // const handlePaymentStatus = () => {
  //   set(ref(database, `/bookings/${usersBooking?.bookingId}/paymentStatus`), 1);
  //   set(
  //     ref(database, `/users/${uid}/bookings/${usersBooking?.id}`),
  //     usersBooking
  //   );
  // };

  useEffect(() => {
    // handlePaymentStatus();
  }, []);

  return (
    <div>
      <h1 style={{ color: "black" }}>Failed Page</h1>
    </div>
  );
};

export default Failed;
