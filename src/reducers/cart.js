const initialState = {
  count: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, count: state.count + 1 };
    case 'REMOVE_FROM_CART':
      let temp = state.count - 1;
      return { ...state, count: temp > 0 ? temp : initialState.count };
    default:
      return state;
  }
};
