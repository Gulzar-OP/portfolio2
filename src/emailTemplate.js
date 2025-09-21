// emailTemplate.js
const emailStyles = require("./emailStyles.js");

const generateContactEmail = ({ name, email, phone, message }) => {
  return `
    <html>
      <head>
        <style>
          ${emailStyles}
        </style>
      </head>
      <body>
        <div class="container">
          <h2>New Contact Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <div class="footer">
            Sent from your portfolio website
          </div>
        </div>
      </body>
    </html>
  `;
};

module.exports = generateContactEmail;
