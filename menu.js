const menuToggle = document.querySelector('#menu-toggle');
const mainElt = document.querySelectorAll('#main-content');
const fullScreenMenu = document.querySelector('#full-screen-menu');
const closeFullScreenMenuBtn = document.querySelector('#close-fullscreen-menu-btn');
const fullMenuOption = document.querySelectorAll('#full-menu-option');

menuToggle.addEventListener('click', () => {
  fullScreenMenu.classList.remove('is-hidden');
  mainElt.forEach((curr) => {
    curr.classList.add('is-hidden');
  });
});

closeFullScreenMenuBtn.addEventListener('click', () => {
  fullScreenMenu.classList.add('is-hidden');
  mainElt.forEach((curr) => {
    curr.classList.remove('is-hidden');
  });
});

fullMenuOption.forEach((curr) => {
  curr.addEventListener('click', () => {
    fullScreenMenu.classList.add('is-hidden');
    mainElt.forEach((curr) => {
      curr.classList.remove('is-hidden');
    });
  });
});
