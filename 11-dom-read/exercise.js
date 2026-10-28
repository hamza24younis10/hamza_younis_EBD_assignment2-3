// 11-dom-read: your work goes in this file.
// See your own page with:  npm run open 11 exercise
// Check your work with:    npm test 11

// querySelector finds the first match; textContent is the text inside it
export function pageHeading() {
  return document.querySelector("h1").textContent;
}

// querySelectorAll finds every match; .length counts them
export function productCount() {
  return document.querySelectorAll(".card").length;
}

// A NodeList has no .map, so turn it into a real array first
export function productNames() {
  return Array.from(document.querySelectorAll(".card h3")).map((h3) => h3.textContent);
}

// Find the card whose h3 matches the name, then read its .price
export function priceOf(name) {
  const cards = Array.from(document.querySelectorAll(".card"));
  const card = cards.find((c) => c.querySelector("h3").textContent === name);
  if (!card) {
    return null;
  }
  return card.querySelector(".price").textContent;
}

// One selector picks only cards that also have the sold-out class
export function soldOutNames() {
  return Array.from(document.querySelectorAll(".card.sold-out h3")).map((h3) => h3.textContent);
}
