// Toggle Navigation Element: Abre e fecha o menu quando clicar no ícone hamburguer e x
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
/* procura por todos que tenham a classe 'toggle' */

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  }) // procura por cada elemento que tenha 'show' como classe e coloca se não houver
}

// Exit Menu when Click: Quando clicar em um item do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a')
/* procura por todos com as classes 'nav ul li a' */

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  }) // remove se houver um nav com a classe 'show'
}

// Add class 'scroll' in #header: Muda o header da página quando der scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight // retorna só o height (altura) do header
function changeHeaderWhenScroll() {
  if (this.window.scrollY >= navHeight) {
    header.classList.add('scroll') // scroll é maior que a altura do header
  } else {
    header.classList.remove('scroll') // menor que a altura do header
  }
}

// Testimonials Carousel Slider Swiper: Cria a interação com o Swiper dos Depoimentos
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true, // habilita a rodinha no mouse
  keyboard: true, // habilita as teclas do teclado
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: Mostra os elementos quando estiver descendo a página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .swiper,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Back to Top: Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (this.window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu Ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll: aqui é chamado todas as funções que usam do argumento 'scroll' */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
