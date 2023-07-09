const btn = document.getElementById("toggle");
const nav = document.getElementById("nav-cel");

btn.addEventListener("click", () => {
    nav.classList.toggle("show");
});
