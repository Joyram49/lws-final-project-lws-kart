export const getPriceAfterDiscount = (price, discountPercentage) => {
  return price && price - (discountPercentage * price) / 100;
};
