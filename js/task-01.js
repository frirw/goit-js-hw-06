const allElements = document.querySelectorAll(".item");
console.log(`Number of categories: ${allElements.length}`);

allElements.forEach((item) => {
  const allTitles = item.firstElementChild.textContent;
  console.log(`Category: ${allTitles}`);

  const allData = item.lastElementChild.children;
  console.log(`Elements: ${allData.length}`);
});
