const btnMenu = document.querySelector('.btn-menu-container');
const nav = document.querySelector('.left-nav');
const allItemNavs = document.querySelectorAll('.nav-menu-item');
const containerLine = document.querySelector('.container-line');

btnMenu.addEventListener('click', ()=> {
  containerLine.classList.toggle('active')
  nav.classList.toggle('menu-visible')
})