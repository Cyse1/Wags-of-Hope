document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.main-mobile-links');
  const tog = document.querySelector('.hamburger')

  tog.addEventListener('click', () => {
    menu.classList.toggle('active')
  })

})