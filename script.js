document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('#navbar');
  const menu = document.querySelector('.menu');
  const closeMenu = document.querySelector('.close-menu');
  const menuItems = document.querySelectorAll('.menu1, .menu2, .menu3');

  function updateMenuVisibility() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 786) {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  }

  updateMenuVisibility();

  function openMenu() {
    navbar.classList.add('nav-mobile');
    navbar.classList.remove('nav-mobile-short');
    closeMenu.style.display = 'block';
    menu.style.display = 'none';
  }

  function closeMobileMenu() {
    navbar.classList.add('nav-mobile-short');
    navbar.classList.remove('nav-mobile');
    closeMenu.style.display = 'none';
    updateMenuVisibility();
  }

  menu.addEventListener('click', openMenu);
  closeMenu.addEventListener('click', closeMobileMenu);
  window.addEventListener('resize', updateMenuVisibility);

  menuItems.forEach((item) => {
    item.addEventListener('click', closeMobileMenu);
  });
  const form = document.querySelector('#contactForm');
  const formSubmit = form.querySelector('#form-submit');
  const email = form.querySelector('#email');
  const showError = form.querySelector('span');

  function emailLowerCase() {
    const emailValue = email.value;
    if (emailValue.toLowerCase() === emailValue) {
      showError.innerText = '';
      return true;
    }
    showError.classList.add('error');
    showError.innerText = `Please make your Email in lowercase. You need to type like this ${emailValue.toLowerCase()}`;
    return false;
  }

  formSubmit.addEventListener('click', (event) => {
    event.preventDefault();

    if (emailLowerCase()) {
      form.submit();
    }
  });
});
