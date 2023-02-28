var menuToggle = document.querySelector('.mk-header__menu-toggle');
var mobileNav = document.querySelector('.mk-header__mobile-nav');

menuToggle.addEventListener('click', function() {
  mobileNav.classList.toggle('active');
  menuToggle.classList.toggle('active');
});