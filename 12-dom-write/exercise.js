// 12-dom-write: your work goes in this file.
// See your own page with:  npm run open 12 exercise
// Check your work with:    npm test 12

// Helper: the card whose h3 says that name, or undefined if there is none
function findCard(name) {
  const cards = Array.from(document.querySelectorAll("#list .card"));
  return cards.find((card) => card.querySelector("h3").textContent === name);
}

// Build each element, fill it in, nest them, then attach to the page
export function addProduct(name, price) {
  const card = document.createElement("li");
  card.classList.add("card");

  const heading = document.createElement("h3");
  heading.textContent = name;

  const priceText = document.createElement("p");
  priceText.classList.add("price");
  priceText.textContent = `${price} EGP`;

  card.append(heading, priceText);
  document.querySelector("#list").append(card);
}

// Find the card and remove it; do nothing if it is not there
export function removeProduct(name) {
  const card = findCard(name);
  if (card) {
    card.remove();
  }
}

// Find the card and add the sold-out class
export function markSoldOut(name) {
  const card = findCard(name);
  if (card) {
    card.classList.add("sold-out");
  }
}

// Remove every card, but keep the #list element itself
export function clearProducts() {
  for (const card of document.querySelectorAll("#list .card")) {
    card.remove();
  }
}

// Hand functions to addEventListener; the browser calls them on each click
export function wireButtons() {
  document.querySelector("#add").addEventListener("click", () => {
    addProduct("Notebook", 45);
  });
  document.querySelector("#reset").addEventListener("click", () => {
    clearProducts();
  });
}
