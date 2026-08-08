const slider = document.querySelector(".product-slider");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

next.addEventListener("click", () => {
    slider.scrollBy({
       left: slider.querySelector(".product-card").offsetWidth + 30,
        behavior: "smooth"
    });
});

prev.addEventListener("click", () => {
    slider.scrollBy({
       left: -(slider.querySelector(".product-card").offsetWidth + 30),
        behavior: "smooth"
    });
});