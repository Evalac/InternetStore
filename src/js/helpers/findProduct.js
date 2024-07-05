function findProduct(productId, instruments) {
  return instruments.find(({ id }) => id === productId);
}

export { findProduct };
