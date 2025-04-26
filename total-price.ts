interface ITotalPrice {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}

const totalPrice = ({
  price,
  discount,
  isInstallment,
  months,
}: ITotalPrice): number => {
  const priceInOnMonth = price / months;
  const priceDiscountInOnMonth = priceInOnMonth * (1 - discount / 100);

  if (isInstallment) {
    return priceDiscountInOnMonth;
  } else {
    return priceDiscountInOnMonth * months;
  }
};

const calculatedPrice = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});
console.log(calculatedPrice); // 6250
