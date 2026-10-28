// 07-npm: your work goes in this file, and in package.json.

import dayjs from "dayjs";

// format() turns a date into text using a pattern
export function formatDate(dateString) {
  return dayjs(dateString).format("DD/MM/YYYY");
}

// year() returns the year as a number
export function yearOf(dateString) {
  return dayjs(dateString).year();
}

// add() moves the date forward, then format() turns it back into text
export function addDays(dateString, days) {
  return dayjs(dateString).add(days, "day").format("YYYY-MM-DD");
}

// The package I chose and installed from the npm registry
export const myPackage = "nanoid";
