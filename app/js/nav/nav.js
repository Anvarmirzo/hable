export const showNavMenu = () => {
  const burgerBtn = document.getElementById('burger-btn');
  const navMenu = document.querySelector('.main-nav-menu');
  if (burgerBtn && navMenu) {
    burgerBtn.addEventListener('click', function (e) {
      navMenu.classList.toggle('active');

      burgerBtn.classList.toggle('burger-btn--opened');
      burgerBtn.classList.toggle('burger-btn--closed');

      document.body.classList.toggle('hidden');
    });
  }
};

export const smoothScroll = () => {
  const links = document.querySelectorAll('.main-nav-menu a');
  const nav = document.querySelector('.main-nav-menu')
  const burger = document.getElementById('burger-btn');

  for (const link of links) {
    link.addEventListener('click', clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
    }

    if (burger.classList.contains('burger-btn--opened')) {
      burger.classList.remove('burger-btn--opened');
      burger.classList.add('burger-btn--closed');
    }

    for (const otherLink of links) {
      if (otherLink.classList.contains('active')) {
        otherLink.classList.remove('active');
      }
    }
    e.target.classList.add('active');

    const href = e.target.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
};

export const changeBgOnScroll = ()=>{
  const navbar = document.querySelector('.main-nav');
  window.addEventListener('scroll', function(e) {
    const lastPosition = window.scrollY;
    if (lastPosition > 50 ) {
      navbar.classList.add('bg')
    } else if (navbar.classList.contains('bg')) {
      navbar.classList.remove('bg')
    } else {
      navbar.classList.remove('bg')
    }
  })
}