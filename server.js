const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

app.post('/checkout', (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const address = req.body.address;
  const selectedCountry = req.body.country;
  const selectedCity = req.body.city;

  if (!name || !phone || !address || !selectedCountry || !selectedCity) {
    res.status(400).send('Please fill in all the required fields');
    return;
  }

  console.log('Name:', name);
  console.log('Phone:', phone);
  console.log('Address:', address);
  console.log('Selected Country:', selectedCountry);
  console.log('Selected City:', selectedCity);

  // Send email notification
  sendEmail(name, phone, address, selectedCountry, selectedCity)
    .then(() => {
      res.send('Thank you for placing an order. Our representatives will contact you shortly.');

      // Send feedback response to the CRM or email
      sendFeedbackResponse(name, req.body.email);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      res.status(500).send('Failed to send email');
    });
});

// Function to send email using Nodemailer
async function sendEmail(name, phone, address, country, city) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'janvladislavovich@gmail.com',
      pass: 'Yan14051993Pikulik',
    },
  });

  async function sendFeedback(name, email, transport) {

    let transporter;
  
    if(transport === 'email') {
      transporter = nodemailer.createTransport({
        // email transport config
      });
    } else if(transport === 'crm') {
      transporter = crmTransport(); // create CRM transport
    }
  
    const mailOptions = {
      from: '...',
      to: email, 
      subject: '...',
      text: `Dear ${name},...` 
    };
  
    return transporter.send(mailOptions);
  
  }

  async function checkout() {

    // send order
  
    sendFeedback(name, email, 'email');
  
  }
  
  // also call it after fetching users
  
  sendFeedback(name, email, 'crm');

  function crmTransport() {
    return {
      send: async (mailOptions) => {
        // make request to CRM API
        await fetch('/crm/contact', {
          method: 'POST',
          body: mailOptions  
        });
      }
    }
  }

  const mailOptions = {
    from: 'your-gmail-account@gmail.com',
    to: 'janvladislavovich@gmail.com', // Replace with the recipient email address
    subject: 'New Order',
    text: `Name: ${name}\nPhone: ${phone}\nAddress: ${address}\nCountry: ${country}\nCity: ${city}`,
  };

  return transporter.sendMail(mailOptions);
}

// Function to send feedback response to the CRM or email
async function sendFeedbackResponse(name, email) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your-gmail-account@gmail.com',
      pass: 'your-gmail-password',
    },
  });

  const mailOptions = {
    from: 'your-gmail-account@gmail.com',
    to: email,
    subject: 'Order Feedback',
    text: `Dear ${name},\n\nThank you for placing an order. We appreciate your business.\n\nBest regards,\nThe Company`,
  };

  return transporter.sendMail(mailOptions);
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'checkout.html'));
});

// Add this endpoint to return the users data
app.get('/api/users', (req, res) => {
  const users = [{
    name: 'name',
    phone: 'phone',
    address: 'address',
    country: 'country',
    city: 'city',
    email: 'janvladislavovich@gmail.com'
  }];

  res.json(users);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});