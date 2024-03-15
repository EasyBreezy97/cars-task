const formatter = new Intl.NumberFormat("en-US");

function formatNumber(number: number) {
  return formatter.format(number);
}

function formatNumberWithSpace(number: number) {
  return formatter.format(number).replace(/,/g, " ");
}

export { formatNumber, formatNumberWithSpace };
