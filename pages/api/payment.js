import { generateOrderId } from "../utils/handlePayments"; // Import your generateOrderId utility

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { order_id, amount, name, phoneNo, email } = req.body;

    const formData = new URLSearchParams();
    formData.append("merchant_id", "447588");
    formData.append("order_id", order_id || generateOrderId());
    formData.append("currency", "INR");
    formData.append("amount", amount); // use dynamic amount passed from client
    formData.append("redirect_url", "http://3.84.158.78:5000/ccavResponseHandler");
    formData.append("cancel_url", "http://3.84.158.78:5000/ccavResponseHandler");
    formData.append("language", "EN");
    formData.append("billing_name", name);
    formData.append("billing_address", "Santacruz");
    formData.append("billing_city", "Mumbai");
    formData.append("billing_state", "MH");
    formData.append("billing_zip", "400054");
    formData.append("billing_country", "India");
    formData.append("billing_tel", phoneNo);
    formData.append("billing_email", email);
    formData.append("delivery_name", "Sam");
    formData.append("delivery_address", "Vile Parle");
    formData.append("delivery_city", "Mumbai");
    formData.append("delivery_state", "Maharashtra");
    formData.append("delivery_zip", "400038");
    formData.append("delivery_country", "India");
    formData.append("delivery_tel", phoneNo);
    formData.append("merchant_param1", "additional Info.");
    formData.append("merchant_param2", "additional Info.");
    formData.append("merchant_param3", "additional Info.");
    formData.append("merchant_param4", "additional Info.");
    formData.append("merchant_param5", "additional Info.");
    formData.append("promo_code", "");
    formData.append("customer_identifier", "");

    try {
      // Make the payment request to the server
      const response = await fetch("http://3.84.158.78:5000/ccavRequestHandler", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      const textResponse = await response.text();

      // Return the text response from the payment request
      res.status(200).send(textResponse);
    } catch (error) {
      console.error("Failed to process payment:", error);
      res.status(500).json({ error: "Payment processing failed." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}