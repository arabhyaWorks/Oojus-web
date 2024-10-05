import React from "react";
import { handlePayment } from "../../utils/handlePayments";
import { useRouter } from "next/router";

const TestingPayments = () => {
  const router = useRouter();
  const handleClick = async () => {
    const response = await handlePayment();
    console.log(response);
    router.push({
      pathname: "/payment2",
      query: { response },
    });
  };

  return (
    <div>
      <h1 style={{ color: "black" }}>Testing payments</h1>
      <button onClick={handleClick}>Pay</button>
    </div>
  );
};

export default TestingPayments;
