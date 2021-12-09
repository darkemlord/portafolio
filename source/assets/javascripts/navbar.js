const navbar = document.querySelector('.emanuel-navbar');
const logo = document.querySelector('.logo');

const changeNavbarStyle = () => {
  logo.style.background = 'red';
};

navbar.addEventListener('onmouseover', changeNavbarStyle);
