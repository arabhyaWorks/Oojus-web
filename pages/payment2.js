import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Payment = ({}) => {
  const router = useRouter();

  useEffect(() => {
    const form = document.getElementById("nonseamless");
    if (form) {
      form.submit();
    }
  }, []);

  return <div>{router.query.encReq}</div>
};

export default Payment;
