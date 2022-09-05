const hamMenu = document.querySelector(".ham-menu");
const navList = document.querySelector(".nav-list");
const dropDownMenu = document.querySelector(".dropdown-menu");
const subHeader = document.querySelector("#subheader_display_mobile")

window.addEventListener('scroll', () => {
  let yScroll = window.scrollY;

  if (yScroll > 0) {
    subHeader.style.display = 'none'
  } else {
    subHeader.style.display = 'flex'
  }
});

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    dropDownMenu.classList.toggle("active");
  });
  
document.querySelectorAll(".nav-links").forEach((link) =>
    link.addEventListener("click", () => {
    hamMenu.classList.remove("active");
    dropDownMenu.classList.remove("active");
    dropDownMenu.style.transition = "0.33s ease";
    })
);

