import React from "react";
import Tabs from "../components/tab";

const Pooja = () => {
  return (
    <Tabs>
      <div key="info" title="Customer info">
        <p>We are showing customer info here</p>
      </div>
      <div key="payment-history" title="Payment history">
        <p>We are showing customer payment history here</p>
      </div>
      <div key="payment-methods" title="Payment methods">
        <p>We are showing customer payment methods here</p>
      </div>
    </Tabs>
  );
};

export default Pooja;
