const navbar = document.querySelector('.navbar');

const changeNavBarColor = () => {
  if (window.scrollY > 20) {
    navbar.style.opacity = '0.5';
    navbar.style.transition = '2000ms';
  } else {
    navbar.style.opacity = '1';
  }
};

window.addEventListener('scroll', () => {
  changeNavBarColor();
});

navbar.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
