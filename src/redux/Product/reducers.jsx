import actions from './actions';

const initialState = {
  products: [],
  selectedProduct: {},
  isLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    }

    case actions.SET_SELECTED_PRODUCT: {
      return {
        ...state,
        selectedProduct: action.payload,
        isLoading: false,
      };
    }

    case actions.REMOVE_SELECTED_PRODUCT: {
      return {
        ...state,
        selectedProduct: {},
      };
    }

    default:
      return state;
  }
};

export default reducer;
