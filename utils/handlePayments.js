const generateOrderId = () => {
  const timestamp = Date.now().toString().slice(5);
  const randomNum = Math.floor(1000 + Math.random() * 9000).toString();
  return `${timestamp}${randomNum}`; // Concatenate timestamp and random number
};

const handlePayment = async (
  order_id,
  amount
  // amount, name, phone_no
) => {
  //   let order_id = generateOrderId();
  const name = "Arabhaya";
  const phone_no = "9453183575";
  const email = "arabhaya7907@gmail.com";

  const formData = new URLSearchParams();
  formData.append("merchant_id", "447588");
  formData.append("order_id", order_id ? order_id : generateOrderId());
  formData.append("currency", "INR");
  // formData.append('amount', amount);
  formData.append("amount", "1");
  formData.append(
    "redirect_url",
    "https://a8c2-2402-a00-1b2-12f6-4403-824a-7dd6-fd6a.ngrok-free.app/ccavResponseHandler"
  );
  formData.append("cancel_url", "https://a8c2-2402-a00-1b2-12f6-4403-824a-7dd6-fd6a.ngrok-free.app/ccavResponseHandler");
  formData.append("language", "EN");
  formData.append("billing_name", name);
  formData.append("billing_address", "Santacruz");
  formData.append("billing_city", "Mumbai");
  formData.append("billing_state", "MH");
  formData.append("billing_zip", "400054");
  formData.append("billing_country", "India");
  formData.append("billing_tel", phone_no);
  formData.append("billing_email", email);
  formData.append("delivery_name", "Sam");
  formData.append("delivery_address", "Vile Parle");
  formData.append("delivery_city", "Mumbai");
  formData.append("delivery_state", "Maharashtra");
  formData.append("delivery_zip", "400038");
  formData.append("delivery_country", "India");
  formData.append("delivery_tel", phone_no);
  formData.append("merchant_param1", "additional Info.");
  formData.append("merchant_param2", "additional Info.");
  formData.append("merchant_param3", "additional Info.");
  formData.append("merchant_param4", "additional Info.");
  formData.append("merchant_param5", "additional Info.");
  formData.append("promo_code", "");
  formData.append("customer_identifier", "");

  try {
    const response = await fetch("https://a8c2-2402-a00-1b2-12f6-4403-824a-7dd6-fd6a.ngrok-free.app/ccavRequestHandler", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    const textResponse = await response.text();

    return textResponse;
  } catch (error) {
    console.error("Failed to process payment:", error);
    return null;
  }
};

export { generateOrderId, handlePayment };
