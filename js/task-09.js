function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bgColor = document.querySelector("span.color");
const changeColor = document.querySelector("button.change-color");
const body = document.body;

changeColor.addEventListener("click", function () {
  const currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  bgColor.textContent = currentColor;
});
