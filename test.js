// Select the cart box element and cart icon
const cartBox = document.querySelector('.cart-box');
const cartIcon = cartBox.querySelector('.cart-icon');

// Select the cart element
const cart = document.querySelector('.cart');

// Hide the cart on initial page load
cart.style.display = 'none';

// Show the cart when the cart icon is hovered
cartIcon.addEventListener('mouseover', showCart);

// Keep the cart visible when the cursor is over the cart or cart box
cart.addEventListener('mouseover', keepCart);
cartBox.addEventListener('mouseover', keepCart);

// Hide the cart when the cursor is outside the cart box and cart
cart.addEventListener('mouseleave', hideCart);
cartBox.addEventListener('mouseleave', hideCart);

// Function to show the cart
function showCart() {
  cart.style.display = 'block';
}

// Function to keep the cart visible
function keepCart() {
  cart.style.display = 'block';
}

// Function to hide the cart
function hideCart() {
  cart.style.display = 'none';
}


const animateElements = document.querySelectorAll('.animate-element');

animateElements.forEach(el => {
  observer.observe(el);
});


let listCart = [];
function checkCart(){
  var cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('listCart='));
  if(cookieValue){
      listCart = JSON.parse(cookieValue.split('=')[1]);
  }else{
      listCart = [];
  }
}

checkCart();
function addCart($idProduct){
    let productsCopy = JSON.parse(JSON.stringify(products));
    //// If this product is not in the cart
    if(!listCart[$idProduct]) 
    {
        listCart[$idProduct] = productsCopy.filter(product => product.id == $idProduct)[0];
        listCart[$idProduct].quantity = 1;
    }else{
        //If this product is already in the cart.
        //I just increased the quantity
        listCart[$idProduct].quantity++;
    }
    document.cookie = "listCart=" + JSON.stringify(listCart) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";

    addCartToHTML();
}

addCartToHTML();
function addCartToHTML(){
    // clear data default
    let listCartHTML = document.querySelector('.listCart');
    listCartHTML.innerHTML = '';

    let totalHTML = document.querySelector('.totalQuantity');
    let totalQuantity = 0;
// if has product in Cart
    if(listCart){
        listCart.forEach(product => {
            if(product){
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = 
                    `<img src="${product.image}">
                    <div class="content">
                        <div class="name">${product.name}</div>
                        <div class="price">$${product.price} </div>
                    </div>
                    <div class="quantity">
                        <button onclick="changeQuantity(${product.id}, '-')">-</button>
                        <span class="value">${product.quantity}</span>
                        <button onclick="changeQuantity(${product.id}, '+')">+</button>
                    </div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
            }
        })
    }
    totalHTML.innerText = totalQuantity;
}


function changeQuantity($idProduct, $type){
  switch ($type) {
      case '+':
          listCart[$idProduct].quantity++;
          break;
      case '-':
          listCart[$idProduct].quantity--;

          // if quantity <= 0 then remove product in cart
          if(listCart[$idProduct].quantity <= 0){
              delete listCart[$idProduct];
          }
          break;
  
      default:
          break;
  }
  // save new data in cookie
  document.cookie = "listCart=" + JSON.stringify(listCart) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
  // reload html view cart
  addCartToHTML();
}

