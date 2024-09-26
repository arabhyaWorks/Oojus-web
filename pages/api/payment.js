// import { generateOrderId } from "../../utils/handlePayments"; 
import CCAvenue from "../../utils/CCAvenue";
import { useRouter } from "next/router";

export default function Payment() {
  const host = "http://localhost:3000";
  const router = useRouter();

  const paymentCCAvenue = () => {
    let paymentData = {
      merchant_id: "447588", // Merchant ID (Required)
      order_id: "ORD123", // Order ID - It can be generated from our project
      amount: "1", // Payment Amount (Required)
      currency: "INR", // Payment Currency Type (Required)
      billing_email: "johndoe@gmail.com", // Billing Email (Optional)
      billing_name: "John Doe", // Billing Name (Optional)
      billing_address: "Address Details", // Billing Address (Optional)
      billing_city: "Ahmedabad", // Billing City (Optional)
      billing_state: "Gujarat", // Billing State (Optional)
      billing_zip: "380002", // Billing Zip (Optional)
      billing_country: "India", // Billing COuntry (Optional)
      redirect_url: `${host}/api/ccavenue-handle`, // Success URL (Required)
      cancel_url: `${host}/api/ccavenue-handle`, // Failed/Cancel Payment URL (Required)
      merchant_param1: "Extra Information", 
      merchant_param2: "Extra Information", 
      merchant_param3: "Extra Information", 
      merchant_param4: "Extra Information", 
      language: "EN", // Language (Optional)
      billing_tel: "1234567890", // Billing Mobile Number (Optional)
    };

    let encReq = CCAvenue.getEncryptedOrder(paymentData);
    let accessCode = "AVPP15IH50BJ57PPJB";

    // router.push(URL);
    router.push({
      pathname: "/paymentPage",
      query: { encReq , accessCode },
    });
  };

  return (
    <>
      <button onClick={paymentCCAvenue}>Pay Now</button>
    </>
  );
}
