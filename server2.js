const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON-encoded bodies
app.use(express.json());

// Define a route to handle the form submission
app.post('/submit', (req, res) => {
  const email = req.body.email;

  if (!email || email.trim() === '') {
    return res.status(400).json({ error: 'Invalid email' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Send email notification
  sendEmail(email)
    .then(() => {
      res.status(200).json({ message: 'Email sent successfully' });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    });
});

// Basic email validation using a regular expression
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Function to send email using Nodemailer
async function sendEmail(email) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'janvladislavovich@gmail.com',
      pass: 'Yan14051993Pikulik',
    },
  });

  const mailOptions = {
    from: 'your-gmail-account@gmail.com',
    to: 'janvladislavovich@gmail.com',
    subject: 'New form submission',
    text: `Email: ${email}`,
  };

  return transporter.sendMail(mailOptions);
}

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
