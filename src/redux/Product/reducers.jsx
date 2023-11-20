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
      return {};
    }

    case actions.SELECTED_PRODUCT: {
      return {};
    }

    case actions.REMOVE_SELECTED_PRODUCT: {
      return {};
    }

    default:
      return state;
  }
};

export default reducer;
