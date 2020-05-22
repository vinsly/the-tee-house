export const addItemToCart = (cartItems, newItem) => {
  const existingCartItem = cartItems.find((item) => {
    return item.id === newItem.id;
  });
  if (existingCartItem) {
    return cartItems.map((item) => {
      return item.id === newItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};
