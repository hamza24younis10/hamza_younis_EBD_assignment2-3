// 01-basics — your work goes in this file.

// Says a value and its type, e.g. "45 is a number"
export function describeValue(value) {
  return `${value} is a ${typeof value}`;
}

// Builds a label, e.g. "Notebook costs 45 EGP"
export function priceLabel(product, amount) {
  return `${product} costs ${amount} EGP`;
}

// True only if strictly over 100
export function isExpensive(amount) {
  return amount > 100;
}

// Over 500 ships free, otherwise 50
export function shippingCost(orderTotal) {
  if (orderTotal > 500) {
    return 0;
  }
  return 50;
}

// 0 = out, 1-9 = low, 10+ = in stock (order of checks matters)
export function stockLabel(count) {
  if (count === 0) {
    return "Out of stock";
  } else if (count < 10) {
    return "Low stock";
  } else {
    return "In stock";
  }
}