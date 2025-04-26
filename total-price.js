var totalPrice = function (_a) {
    var price = _a.price, discount = _a.discount, isInstallment = _a.isInstallment, months = _a.months;
    var priceInOnMonth = price / months;
    var priceDiscountInOnMonth = priceInOnMonth * (1 - discount / 100);
    if (isInstallment) {
        return priceDiscountInOnMonth;
    }
    else {
        return priceDiscountInOnMonth * months;
    }
};
var calculatedPrice = totalPrice({
    price: 100000,
    discount: 25,
    isInstallment: true,
    months: 12,
});
console.log(calculatedPrice); // 6250
