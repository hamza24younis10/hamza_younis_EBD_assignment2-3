// 03-objects — your work goes in this file.

// Dot access: the key name is written directly
export function productName(product) {
  return product.name;
}

// Bracket access: the key name is stored in a variable
export function getField(product, field) {
  return product[field];
}

// Nested object: follow the path step by step
export function studentCity(student) {
  return student.address.city;
}

// Destructuring: pull name and price out into their own variables
export function summarize(product) {
  const { name, price } = product;
  return `${name} costs ${price} EGP`;
}

// Spread: copy every key into a new object, then override price
export function withPrice(product, newPrice) {
  return { ...product, price: newPrice };
}