// 08-async: your work goes in this file.

import { findProduct, findAllProducts } from "./fake-db.js";

// await pauses until the database answers, then we read the name
export async function productName(id) {
  const product = await findProduct(id);
  return product.name;
}

// Same as module 01's label, but the data arrives late
export async function priceLabel(id) {
  const product = await findProduct(id);
  return `${product.name} costs ${product.price} EGP`;
}

// try/catch stops a failed lookup from crashing the caller
export async function safeProductName(id) {
  try {
    const product = await findProduct(id);
    return product.name;
  } catch {
    return "Not found";
  }
}

// Await the whole list, then it is an ordinary array (module 04)
export async function namesInStock() {
  const products = await findAllProducts();
  return products.filter((product) => product.inStock).map((product) => product.name);
}
