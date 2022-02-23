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