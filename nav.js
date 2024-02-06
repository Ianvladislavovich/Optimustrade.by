// Function to handle scrolling to the target div
const scrollToDiv = (event, targetId) => {
    event.preventDefault();
    const targetDiv = document.getElementById(targetId);
    window.scrollTo({
      top: targetDiv.offsetTop,
      behavior: 'smooth'
    });
  };

// Get all the div elements
const divs = document.querySelectorAll('div');

// Get all the navigation links
const navLinks = document.querySelectorAll('nav a');

// Add click event listeners to each navigation link
navLinks.forEach(link => {
    const targetId = link.getAttribute('href').substring(1);
    link.addEventListener('click', (event) => scrollToDiv(event, targetId));
});

// Scroll event listener to highlight active navigation link
window.addEventListener('scroll', () => {
    const top = window.scrollY;

    divs.forEach(div => {
        const offset = div.offsetTop - 150;
        const height = div.offsetHeight;

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            const targetId = '#' + div.getAttribute('id');
            const activeLink = document.querySelector(`nav a[href="${targetId}"]`);
            activeLink.classList.add('active');
        }
    });
});