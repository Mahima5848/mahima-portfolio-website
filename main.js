const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.innerHTML = isOpen ? '<i class="bx bx-x"></i>' : '<i class="bx bx-menu"></i>';
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    if (menuButton) menuButton.innerHTML = '<i class="bx bx-menu"></i>';
  });
});

const roles = ['MERN Stack Developer', 'Frontend Developer', 'JavaScript Developer'];
const roleElement = document.querySelector('#role-text');
let roleIndex = 0;
if (roleElement) {
  setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleElement.classList.add('changing');
    setTimeout(() => {
      roleElement.textContent = roles[roleIndex];
      roleElement.classList.remove('changing');
    }, 180);
  }, 2400);
}

const yearElement = document.querySelector('#year');
if (yearElement) yearElement.textContent = new Date().getFullYear();
