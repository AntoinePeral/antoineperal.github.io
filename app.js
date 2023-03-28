const btnMenu = document.querySelector('.btn-menu-container');
const nav = document.querySelector('.left-nav');
const allItemNavs = document.querySelectorAll('.nav-menu-item');
const containerLine = document.querySelector('.container-line');

btnMenu.addEventListener('click', ()=> {
  containerLine.classList.toggle('active')
  nav.classList.toggle('menu-visible')
});

if(window.matchMedia('(max_width: 1300px)')) {

  allItemNavs.forEach(item => {
    item.addEventListener('click', () => {
      nav.classList.toggle('menu-visible')
      containerLine.classList.toggle('active')
    })
  }  )
}

// Animation text

const txtAnimation = document.querySelector('.text-animation')

let typewriter = new Typewriter(txtAnimation, {
    loop: false,
    deleteSpeed: 20
})

typewriter
.pauseFor(1800)
.changeDelay(20)
.typeString('Moi c\'est Antoine Peral')
.pauseFor(300)
.typeString('<strong>, Développeur Full-Stack</strong> !')
.pauseFor(1000)
.deleteChars(13)
.typeString('<span style="color: #27ae60;"> CSS</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: #EA39ff;"> NodeJs</span> !')
.pauseFor(1000)
.deleteChars(9)
.typeString('<span style="color: midnightblue;"> React</span> !')
.pauseFor(1000)
.deleteChars(8)
.typeString('<span style="color: #ff6910;"> JavaScript</span> !')
.start()