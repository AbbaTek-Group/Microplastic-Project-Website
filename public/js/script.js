let sidebar = document.querySelector(".mobile-nav");

let navIconClose = document.querySelector(".nav-icon-close");
let navIconOpen = document.querySelector(".nav-icon-open");

navIconClose.addEventListener("click", showNavBar);
navIconOpen.addEventListener("click", closeNavBar);

function showNavBar() {
  sidebar.style.display = "flex";
  sidebar.style.transition = "all 2s";
}

function closeNavBar() {
  sidebar.style.transition = "all 2s";
  sidebar.style.display = "none";
}
