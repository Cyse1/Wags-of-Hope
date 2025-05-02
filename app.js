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

  // Get all cards
  const cards = document.querySelectorAll('.event-card');
  
  // Check viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 && 
      rect.bottom >= 0
    );
  }
  
  // Handle scroll
  function handleScroll() {
    const cardSection = document.getElementById('events');
    
    if (isInViewport(cardSection)) {
      cards.forEach(card => {
        card.classList.add('visible');
      });
    } else {
      cards.forEach(card => {
        card.classList.remove('visible');
      });
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});