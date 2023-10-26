const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const allIngredients = document.querySelector("#ingredients");

const ingredientsList = ingredients.map((ingredient) => {
  const updatedList = document.createElement("li");
  updatedList.textContent = ingredient;
  updatedList.classList.add("item");
  return updatedList;
});

console.log(ingredientsList);
allIngredients.append(...ingredientsList);
