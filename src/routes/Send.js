const express = require("express");
const router = express.Router();
const { sendEmail } = require("../sendEmail.js");

router.post("/send/mail", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required details",
    });
  }

  try {
    await sendEmail({
      email: "gulzarhu80@gmail.com",
      subject: `PORTFOLIO WEBSITE CONTACT from ${name}`,
      name,
      userEmail: email,
      phone,
      message,
    });

    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

module.exports = router;
