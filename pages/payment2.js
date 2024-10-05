import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Payment = () => {
  const router = useRouter();
  const { response } = router.query;

  useEffect(() => {
    const form = document.getElementById("nonseamless");
    if (form) {
      form.submit();
    }
  }, []);

  return (
    <div style={{ backgroundColor: "red" }}>
      <div
        dangerouslySetInnerHTML={{
          __html: response
        }}
      />
    </div>
  );
};

export default Payment;