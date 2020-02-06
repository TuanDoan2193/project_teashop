const left = document.querySelector(".left");
const right = document.querySelector(".right");
const banner = document.querySelector(".main-banner");

left.addEventListener("mouseenter", () => {
  banner.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
  banner.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  banner.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  banner.classList.remove("hover-right");
});
