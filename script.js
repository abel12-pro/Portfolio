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

  // pop up
  const projects = [
    {
      id: 'project-1',
      image: 'project_image/Portfolio1.png',
      name: 'Tonic',
      roles: ['CANOPY', 'Back End Dev', '2015'],
      shortDescription:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      longDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 'project-2',
      image: 'project_image/Portfolio2.png',
      name: 'Multi-Post Stories',
      roles: ['CANOPY', 'Back End Dev', '2015'],
      shortDescription:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      longDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 'project-3',
      image: 'project_image/Portfolio3.png',
      name: 'Facebook 360',
      roles: ['CANOPY', 'Back End Dev', '2015'],
      shortDescription:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      longDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 'project-4',
      image: 'project_image/Portfolio4.png',
      name: 'Uber Navigation',
      roles: ['CANOPY', 'Back End Dev', '2015'],
      shortDescription:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      longDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
  ];

  for (let i = 0; i < projects.length; i += 1) {
    const projectsContainer = document.querySelector('#work-section');
    // Check if the current index is odd
    const isOdd = i % 2 !== 0;

    projectsContainer.innerHTML += `<div class="card ${
      isOdd ? 'row-reverse' : ''
    }">
    <img src=${projects[i].image} alt="Project Screenshot" />
    <div class="card-inner">
      <div class="project-name">
        <h2>${projects[i].name}</h2>
        <i class="fa-solid fa-xmark fa-xl project-close-btn"></i>
      </div>
      <p>
        <strong>${projects[i].roles[0]}</strong>
        <i class="fa-solid fa-circle fa-2xs"></i>${projects[i].roles[1]}
        <i class="fa-solid fa-circle fa-2xs"></i>${projects[i].roles[2]}
      </p>
      <div class="description-container">
        <p class="short-description">
          ${projects[i].shortDescription}
        </p>
        <div class="tag-container">
          <ul>
            <li>${projects[i].technologies[0]}</li>
            <li>${projects[i].technologies[1]}</li>
            <li>${projects[i].technologies[2]}</li>
          </ul>
          <div class="project-details-btn">
            <button type="button" class="see-project">See Project</button>
            <button class="see-live">See Live</i> <img src="project_image/see-live.svg" alt="See Live"></button>
            <button class="see-source">See Source</i> <img src="project_image/see-source.svg" alt="See Source"></img></button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  }

  /** ********    Popup Window       ********* */
  const cards = document.querySelectorAll('.card');

  for (let i = 0; i < cards.length; i += 1) {
    const card = cards[i];
    const seeProject = card.querySelector('.see-project');
    const shortDescription = card.querySelector('.short-description');
    const cardInner = card.querySelector('.card-inner');
    const image = card.querySelector('img');
    const descriptionContainer = card.querySelector('.description-container');
    const tagContainer = card.querySelector('.tag-container');
    const projectName = card.querySelector('.project-name');
    const projectCloseBtn = card.querySelector('.project-close-btn');
    const seeLiveBtn = card.querySelector('.see-live');
    const seeSourceBtn = card.querySelector('.see-source');
    const wrapper = document.querySelector('.main-contianer-first');
    const aboutSection = document.querySelector('#main-aboutme');
    const contactSection = document.querySelector('#contact-form');

    seeProject.addEventListener('click', () => {
      const project = projects[i];

      card.classList.add('popup');
      seeProject.style.display = 'none';
      projectCloseBtn.style.display = 'block';
      shortDescription.innerHTML = project.longDescription;
      cardInner.style.paddingRight = '0';
      cardInner.insertBefore(image, descriptionContainer);

      projectName.style.display = 'flex';
      projectName.style.justifyContent = 'space-between';
      projectName.style.alignItems = 'center';

      seeLiveBtn.style.display = 'block';
      seeLiveBtn.style.display = 'flex';
      seeLiveBtn.style.alignItems = 'center';

      seeSourceBtn.style.display = 'block';
      seeSourceBtn.style.display = 'flex';
      seeSourceBtn.style.alignItems = 'center';

      /** Blur * */

      wrapper.classList.add('blur');
      aboutSection.classList.add('blur');
      contactSection.classList.add('blur');

      cards.forEach((element) => {
        if (!element.getAttribute('class').includes('popup')) {
          element.classList.add('blur');
        }
      });

      /** Desktop Popup * */
      if (window.innerWidth >= 768) {
        descriptionContainer.classList.add('descriptionContainerPopup');
        cardInner.classList.add('cardInnerPopup');
        image.classList.add('imagePopup');
        tagContainer.classList.add('tagContainerPopup');
        shortDescription.classList.add('shortDescriptionPopup');
      }
    });

    projectCloseBtn.addEventListener('click', () => {
      const project = projects[i];
      card.classList.remove('popup');
      seeProject.style.display = 'block';
      projectCloseBtn.style.display = 'none';
      shortDescription.innerHTML = project.shortDescription;
      card.insertBefore(image, cardInner);
      seeLiveBtn.style.display = 'none';
      seeSourceBtn.style.display = 'none';

      /** Desktop Popup * */

      descriptionContainer.classList.remove('descriptionContainerPopup');
      cardInner.classList.remove('cardInnerPopup');
      image.classList.remove('imagePopup');
      tagContainer.classList.remove('tagContainerPopup');
      shortDescription.classList.remove('shortDescriptionPopup');

      /** Blur * */

      wrapper.classList.remove('blur');
      aboutSection.classList.remove('blur');
      contactSection.classList.remove('blur');

      cards.forEach((element) => {
        element.classList.remove('blur');
      });
    });
  }
  // preserve data in the browser
  const name = form.querySelector('#name');
  const message = form.querySelector('#description');

  const storedData = localStorage.getItem('userData');
  const convertStoredData = storedData ? JSON.parse(storedData) : {};
  if (convertStoredData) {
    name.value = convertStoredData.name || '';
    email.value = convertStoredData.email || '';
    message.value = convertStoredData.message || '';
  }
  function updateFormData() {
    const nameValue = name.value;
    const emailValue = email.value;
    const messageValue = message.value;
    const formData = {
      name: nameValue,
      email: emailValue,
      message: messageValue,
    };
    const jsonFormData = JSON.stringify(formData);
    localStorage.setItem('userData', jsonFormData);
  }
  name.addEventListener('input', updateFormData);
  email.addEventListener('input', updateFormData);
  message.addEventListener('input', updateFormData);
});
