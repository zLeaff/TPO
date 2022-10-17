const subHeader = document.querySelector("#subheader");
const pageLogo = document.querySelector("#page_logo");
const subHeaderDropdown = document.querySelector("#subheader_dropdown");
const dropdownContactList = document.querySelector(".dropdown-contact-list");
const dropdownContactItem = document.querySelector(".dropdown-contact-item");
const hamMenu = document.querySelector(".ham-menu");
const navList = document.querySelector(".nav-list");
const dropDownMenu = document.querySelector(".dropdown-menu");

//Subheader dropdown
subHeaderDropdown.addEventListener("click", () => {
  dropdownContactList.classList.toggle("active")
  dropdownContactItem.classList.toggile("active")
});


//Navbar dropdown menu
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

