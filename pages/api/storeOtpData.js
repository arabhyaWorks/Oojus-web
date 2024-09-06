// pages/api/storeOtpData.js
export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phoneNumber, otp } = req.body;

    // You can store these securely in your session/cookies or a DB.
    // For simplicity, we'll return it as a response.

    res.status(200).json({
      message: "OTP data stored",
      data: { name, email, phoneNumber, otp },
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
