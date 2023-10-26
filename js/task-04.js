const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const counterElement = document.querySelector("#value");
const incrementButton = document.querySelector(
  "button[data-action='increment']"
);
const decrementButton = document.querySelector(
  "button[data-action='decrement']"
);

incrementButton.addEventListener("click", function () {
  counterValue.increment();
  counterElement.textContent = counterValue.value;
});

decrementButton.addEventListener("click", function () {
  counterValue.decrement();
  counterElement.textContent = counterValue.value;
});
