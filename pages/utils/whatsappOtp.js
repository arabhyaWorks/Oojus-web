import axios from "axios";

const sendWhatsAppOtp = async (phoneNumber, otpCode) => {
  const phone_number_id = "366490143206901";

//   const access_token = process.env.GRAPH_API_TOKEN;
  const access_token =
    "EAALqsiz91T0BO3LnVYr9PcwtAjCYrUZAvRTPG9L8xpjyRi8GWZAMs8cpNDDZCIDNabiCxiaM3Svm1ECysnRm2ZCI10J4bZAIT955mXsXFzyLZBgaTQrYOmOzyL5e38rUm9bAl0asiCGRqU0bhpNAJCHib4CFGZAZCA4gcDZBKwQ3ZB9TGAZB4dYMUoBT0lpoQbeBuZBcM59HBDuZCMXbbkm4SXnQZD";
//   console.log("Access Token:", access_token);
//   console.log(code === access_token);

  const url = `https://graph.facebook.com/v20.0/${phone_number_id}/messages`;

  const data = {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: phoneNumber,
    type: "template",
    template: {
      name: "otpauth",
      language: {
        code: "en",
      },
      components: [
        {
          type: "body",
          parameters: [
            {
              type: "text",
              text: otpCode,
            },
          ],
        },
        {
          type: "button",
          sub_type: "URL",
          index: "0",
          parameters: [
            {
              type: "text",
              text: otpCode,
            },
          ],
        },
      ],
    },
  };

  try {
    const response = await axios({
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      data: data,
    });
    console.log("OTP Sent Successfully:", response.data);
  } catch (error) {
    console.error(
      "Error sending OTP:",
      error.response ? error.response.data : error.message
    );
  }
};

export default sendWhatsAppOtp;
