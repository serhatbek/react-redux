import actions from './actions';

const initialState = {
  products: [],
  selectedProduct: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }

    case actions.SELECTED_PRODUCT: {
      return {
        ...state,
        selectedProduct: action.payload,
      };
    }

    case actions.REMOVE_SELECTED_PRODUCT: {
      return {
        ...state,
        selectedProduct: null,
      };
    }

    default:
      return state;
  }
};

export default reducer;
