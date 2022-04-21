const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const backdrop = document.getElementById('backdrop');

let isMenuExpanded = false;

const toggleNavMenu = () => {
  isMenuExpanded = !isMenuExpanded;
  hamburger.dataset.expanded = `${isMenuExpanded}`;
  hamburger.ariaExpanded = isMenuExpanded;
  nav.dataset.expanded = `${isMenuExpanded}`;
};

hamburger.addEventListener('click', toggleNavMenu);
backdrop.addEventListener('click', toggleNavMenu);

window.addEventListener('resize', () => {
  document.body.classList.add('resize-animation-stopper');
});
