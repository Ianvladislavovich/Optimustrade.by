// Select the necessary elements
let iconCart = document.querySelector('.mobile-nav');
let cart = document.querySelector('.cart');
let close = document.querySelector('.close');

// Add click event listener to the iconCart element
iconCart.addEventListener('click', () => {
  if (cart.style.right === '-100%') {
    cart.style.right = '0';
  } else {
    cart.style.right = '-100%';
  }
});

// Add click event listener to the close element
close.addEventListener('click', () => {
  cart.style.right = '-100%';
});

// Fetch data from the JSON file
let products = null;
fetch('product1.json')
  .then(response => response.json())
  .then(data => {
    products = data;
    addDataToHTML();
  });

// Function to add data to the HTML
function addDataToHTML() {
  // Code to add data to the HTML goes here
  // Use the 'products' variable to access the fetched data
}