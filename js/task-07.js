const fontSizeControl = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

fontSizeControl.addEventListener("input", function () {
  const textSize = fontSizeControl.value;
  inputText.style.fontSize = `${textSize}px`;
});
