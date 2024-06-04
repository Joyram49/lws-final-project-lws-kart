export const getSubtotal = (cart) => {
  const totalPrice = cart.reduce((total, item) => {
    const priceAfterDiscount = parseFloat(item.product.priceAfterDiscount);
    const quantity = item.quantity;
    return total + priceAfterDiscount * quantity;
  }, 0);
  return totalPrice;
};
