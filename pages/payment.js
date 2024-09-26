import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Payment = ({ encReq , accessCode}) => {
    const router = useRouter();

  useEffect(() => {
    const form = document.getElementById("nonseamless");
    if (form) {
      form.submit();
    }
  }, []); 

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
        <input type="hidden" name="access_code" id="access_code" value="AVPP15IH50BJ57PPJB" />
      </form>
    </div>
  );
};

export default Payment;