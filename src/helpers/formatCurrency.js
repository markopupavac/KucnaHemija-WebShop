function formatCurrency(amount, currencyCode = "RSD") {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  }).format(amount);

  return formattedAmount;
}

export default formatCurrency;
