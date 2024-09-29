import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context";

const Payment = ({ encReq, accessCode }) => {
  const router = useRouter();
  const { usersBooking } = useAuth();
  console.log("this is user bookings", usersBooking);

  useEffect(() => {
    const form = document.getElementById("nonseamless");
    if (form) {
      form.submit();
    }
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push("/failed");
  //   }, 2000);
  // } , []);

  return (
    <div>
      <form
        id="nonseamless"
        method="post"
        name="redirect"
        action="https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"
      >
        <input
          type="hidden"
          id="encRequest"
          name="encRequest"
          value={router.query.encReq}
        />
        <input
          type="hidden"
          name="access_code"
          id="access_code"
          value="AVPP15IH50BJ57PPJB"
        />
      </form>
      <h1 style={{ color: "black" }}>Payment Page</h1>  
    </div>
  );
};

export default Payment;
