export function numberText(number) {
  if (number < 10000) {
    return number.toString();
  } else {
    return Math.round(number / 10000) + '万';
  }
}

export function priceText(number) {
  try {
    var n = parseFloat(number).toFixed(3);
    n = n.substring(0, n.length - 1);
    return n;
  } catch (ex) {
    return number;
  }
}