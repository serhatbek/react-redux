const actions = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  SELECTED_PRODUCT: 'SELECTED_PRODUCT',
  REMOVE_SELECTED_PRODUCT: 'REMOVE_SELECTED_PRODUCT',
};

export default actions;

// Action creators
export const setProducts = (products) => ({
  type: actions.SET_PRODUCTS,
  payload: products,
});

export const selectProduct = (product) => ({
  type: actions.SELECTED_PRODUCT,
  payload: product,
});

export const removeSelectedProduct = () => ({
  type: actions.REMOVE_SELECTED_PRODUCT,
});
