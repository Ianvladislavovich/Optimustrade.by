document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.querySelector('.cart-icon');
    const cart = document.querySelector('.cart');
    const closeBtn = document.querySelector('.close');
    const quantityDecreaseBtns = document.querySelectorAll('.quantity button:first-of-type');
    const quantityIncreaseBtns = document.querySelectorAll('.quantity button:last-of-type');
    const quantityValues = document.querySelectorAll('.quantity .value');
    const removeButtons = document.querySelectorAll('.item .remove');
  
   
  
    // Decrease quantity when decrease button is clicked
    quantityDecreaseBtns.forEach(function(button, index) {
      button.addEventListener('click', function() {
        let value = parseInt(quantityValues[index].textContent);
        if (value > 1) {
          value--;
          quantityValues[index].textContent = value;
        } else {
          const item = button.closest('.item');
          item.remove();jhnljho;p 
        }
      });
    });
  
    // Increase quantity when increase button is clicked
    quantityIncreaseBtns.forEach(function(button, index) {
      button.addEventListener('click', function() {
        let value = parseInt(quantityValues[index].textContent);
        value++;
        quantityValues[index].textContent = value;
      });
    });
  
    // Remove item when remove button is clicked
    removeButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const item = button.closest('.item');
        item.remove();
      });
    });
  });