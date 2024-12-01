const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Adjust this for your email provider
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your email password or App Password
  },
});

const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: ` "DSH Healtcare" ${process.env.EMAIL_USER}`,
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error.message);
    throw new Error('Email could not be sent');
  }
};

module.exports = sendEmail;
