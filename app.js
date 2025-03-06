document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.main-mobile-links');
  const tog = document.querySelector('.hamburger');
  const mobileLinks = document.querySelectorAll('.main-mobile-links a');

  tog.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Close menu when a link is clicked
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });
});
