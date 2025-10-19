// TOGGLE MENU

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// FOOTER CURRENT YEAR

const today = new Date();
const currentYear = today.getFullYear();
const year = document.querySelector(".year");
year.textContent = currentYear;
