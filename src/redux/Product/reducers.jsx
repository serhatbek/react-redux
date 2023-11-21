import actions from './actions';

const initialState = {
  products: [
    {
      id: 1,
      title: 'Serhat',
      category: 'Developer',
    },
  ],
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
        products: action.payload,
      };
    }

    case actions.REMOVE_SELECTED_PRODUCT: {
      return {
        ...state,
        products: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
