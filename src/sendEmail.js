const nodemailer = require("nodemailer");
const generateContactEmail = require("./emailTemplate.js"); // import template

const sendEmail = async (options) => {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const htmlContent = generateContactEmail({
      name: options.name,
      email: options.userEmail,
      phone: options.phone,
      message: options.message,
    });

    await transporter.sendMail({
      from: process.env.SMTP_MAIL,
      to: options.email,
      subject: options.subject,
      html: htmlContent,
    });

    console.log("Email sent successfully!");
  } catch (err) {
    console.error("Nodemailer error:", err);
    throw err;
  }
};

module.exports = { sendEmail };
