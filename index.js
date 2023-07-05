const menu = document.querySelector(".fa-bars");
const links = document.querySelector(".links")


menu.addEventListener("click",()=>{
    links.classList.toggle("active")
})