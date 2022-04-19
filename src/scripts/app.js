const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const backdrop = document.getElementById('backdrop');

let isMenuExpanded = false;
let resizeTimer;

const toggleNavMenu = () => {
  isMenuExpanded = !isMenuExpanded;
  hamburger.dataset.expanded = `${isMenuExpanded}`;
  hamburger.ariaExpanded = isMenuExpanded;
  nav.dataset.expanded = `${isMenuExpanded}`;
};

const stopAnimationOnResize = () => {
  document.body.classList.add('resize-animation-stopper');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('resize-animation-stopper');
  }, 400);
};

window.addEventListener('resize', stopAnimationOnResize);
hamburger.addEventListener('click', toggleNavMenu);
backdrop.addEventListener('click', toggleNavMenu);
