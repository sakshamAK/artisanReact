export const priceCalculator = (cartItem) => cartItem.reduce(
  (acc, next) => ({
    ...acc,
    price: acc.price + next.price * next.qty,
    checkoutPrice: acc.checkoutPrice + next.discount * next.qty,
    totalDiscount:
      acc.price +
      next.price * next.qty -
      (acc.checkoutPrice + next.discount * next.qty),
  }),
  { price: 0, checkoutPrice: 0, totalDiscount: 0 }
);