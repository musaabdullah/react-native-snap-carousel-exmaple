const initialState = {
  products: [],
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      state = {
        products: action.payload,
      };

      return state;
    default:
      return state;
  }
};

export default products;
