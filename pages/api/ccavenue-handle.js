// pages/api/ccavenue-handle.js
import CCAvenue from "../../utils/CCAvenue";

import { ref, set } from "firebase/database";
import database from "../../firebase/config";

const handlePaymentStatus = async (param1, param2, param3, param4, value) => {
  const data = {
    // param1: "UID",
    // param2: "bookingId",
    // param3: "id",
    // param4: "bookingType",
    bookingId: param2,
    bookingType: param4,
    paymentStatus: value,
    id: param3,
  };
  set(ref(database, `/bookings/${param2}/paymentStatus`), value);
  set(ref(database, `/users/${param1}/bookings/${param3}`), data);
};

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      try {
        // Decrypt the Response Data from Request Body
        let data = CCAvenue.redirectResponseToJson(req.body.encResp);
        let param1 = data.merchant_param1;
        let param2 = data.merchant_param2;
        let param3 = data.merchant_param3;
        let param4 = data.merchant_param4;

        // Handle Redirect as per Payment Status
        if (data.order_status === "Success") {
          res.redirect(302, "/success");

          handlePaymentStatus(param1, param2, param3, param4, 0);
        } else {
          res.redirect(302, "/failed");
          handlePaymentStatus(param1, param2, param3, param4, 1);
        }
      } catch (error) {
        // Handling Errors if anything Issue/Problem while Payment
        console.error("Error processing CCAvenue request:", error);
        res.redirect(302, "/failed");
      }
      break;

    default:
      res.status(405).end("Method Not Allowed");
      break;
  }
}
