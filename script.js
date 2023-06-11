//varibles

const john = document.querySelector(".slide-two");
const tanya = document.querySelector(".slide-one");
const prev = document.querySelector(".containerPrev");
const next = document.querySelector(".containerNext");
const text = document.querySelector(".text");
const hide = document.querySelector(".hide");
text.classList.add("show");

function changeSlide() {
    tanya.classList.toggle("active");
    john.classList.toggle("active");
    if (john.classList.contains("active")) {
        text.classList.remove("show");
        hide.classList.add("show");
    } else if (tanya.classList.contains("active")) {
        text.classList.add("show");
        hide.classList.remove("show");
    }
}
prev.addEventListener('click', changeSlide);
next.addEventListener('click', changeSlide);