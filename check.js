const readline = require('readline');
const express = require('express');

const app = express();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

app.post('/checkout', (req, res) => {
  rl.question('Enter the selected country: ', (selectedCountry) => {
    rl.question('Enter the selected city: ', (selectedCity) => {
      let country = selectedCountry.trim();
      let city = selectedCity.trim();

      if (!country || !city) {
        res.status(400).send('Country and city required');
        rl.close();
        return;
      }

      // Perform further processing with the selected country and city values
      // For example, you can send these values to the server or perform some client-side actions

      console.log('Selected Country:', country);
      console.log('Selected City:', city);

      rl.close();
      res.send('Checkout completed successfully');
    });
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});