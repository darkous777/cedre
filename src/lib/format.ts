/**
 * French-Canadian price formatting: comma decimal, non-breaking space
 * before the dollar sign — e.g. 9.95 → "9,95 $".
 */
const NBSP = "\u00A0";

export function formatPrice(price: number): string {
  return `${price.toFixed(2).replace(".", ",")}${NBSP}$`;
}
