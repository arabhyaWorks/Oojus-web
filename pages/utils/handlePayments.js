const generateOrderId = () => {
  const timestamp = Date.now().toString().slice(5);
  const randomNum = Math.floor(1000 + Math.random() * 9000).toString();
  return `${timestamp}${randomNum}`; // Concatenate timestamp and random number
};

const handlePayment = async (order_id, amount, name, phoneNo, email) => {
  // Fetch the payment response from the Next.js API route
  try {
    const response = await fetch("/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_id: order_id ? order_id : generateOrderId(),
        amount: amount,
        name: name,
        phoneNo: phoneNo,
        email: email,
      }),
    });

    const textResponse = await response.text();
    return textResponse;
  } catch (error) {
    console.error("Failed to process payment:", error);
    return null;
  }
};

export { generateOrderId, handlePayment };
