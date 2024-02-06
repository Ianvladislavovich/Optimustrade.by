const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

var t1 = gsap.timeline({ defaults: 1, ease: 'expo.inOut' });

function showMobileNav() {
  if (t1.reversed()) {
    t1.play();
  } else {
    t1.to(mobileNav, { right: 0 })
      .to(mobileNav, { height: '100vh' }, '-=.1')
      .to('.mobile-nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8')
      .to(mobileNav, { opacity: 1, pointerEvents: 'all' }, '-=.3')
      .to('.mobile-nav a', { opacity: 1 }, '-=1');
  }
}

function hideMobileNav() {
  t1.reverse();
}

// Set initial state of mobileNav
mobileNav.style.right = '-50%';

hamburger.addEventListener('mouseover', showMobileNav);
mobileNav.addEventListener('mouseleave', hideMobileNav);

mobileNav.addEventListener('touchstart', hideMobileNav);





   
   
   
   


