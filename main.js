const iconMenu = document.querySelector(".fi-rr-sushi");
const menuContainer = document.querySelector(".navbar__container");
const mdMenu = document.querySelector(".navbar__container--mobile");
let size = window.innerWidth;

iconMenu.addEventListener("click", ()=>{
  menuContainer.classList.toggle("open");
});

if(size >= 1024) {
  mdMenu.classList.remove("navbar__container--mobile");
  mdMenu.classList.add("navbar__container--desktop");
}