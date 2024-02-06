const innerElement = document.querySelector('.inner-1');

innerElement.addEventListener('mouseover', () => {
  innerElement.style.animation = 'none';
  innerElement.style.opacity = '1';
});

innerElement.addEventListener('mouseout', () => {
  innerElement.style.animation = 'flash-animation 1s infinite';
});