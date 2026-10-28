// 13-forms: your work goes in this file.
// See your own page with:  npm run open 13 exercise
// Check your work with:    npm test 13

// The data lives here, in an ordinary array. The page is just a picture of it.
const items = [];

// Read both inputs: trim the name, turn the price text into a number
export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);
  return { name, price };
}

// Empty both inputs
export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

// Empty the list, then build one card per item (same card shape as module 12)
export function renderList(itemsToShow) {
  const list = document.querySelector("#list");
  list.textContent = "";

  for (const item of itemsToShow) {
    const card = document.createElement("li");
    card.classList.add("card");

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const priceText = document.createElement("p");
    priceText.classList.add("price");
    priceText.textContent = `${item.price} EGP`;

    card.append(heading, priceText);
    list.append(card);
  }
}

// Listen for submit: stop the reload, check the input, then add and redraw
export function wireForm() {
  const form = document.querySelector("#product-form");
  const error = document.querySelector("#error");

  form.addEventListener("submit", (event) => {
    // 1. Without this, the page reloads and everything is lost
    event.preventDefault();

    // 2. Read what was typed
    const { name, price } = readForm();

    // 3. An empty name is falsy, so !name catches it
    if (!name) {
      error.textContent = "Give the product a name.";
      return;
    }

    // 4. Empty or invalid price becomes 0 or NaN, neither is greater than 0
    if (!(price > 0)) {
      error.textContent = "Give the product a price.";
      return;
    }

    // 5. All good: clear the error, store the item, redraw, empty the form
    error.textContent = "";
    items.push({ name, price });
    renderList(items);
    clearForm();
  });
}
