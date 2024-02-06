const menu = document.querySelector('.container');
const menuLinks = document.querySelector('.navbar__menu');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);