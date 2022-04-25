const btn = document.querySelector(".nav-btn");
const nav = document.querySelector("ul")
btn.addEventListener("click", () => {
    nav.classList.toggle("active");
})