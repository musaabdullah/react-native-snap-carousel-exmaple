import * as api from '../api/Products';

export const getProducts = () => async dispatch => {
  try {
    const res = await api.getProducts();
    // console.log('from Actions' + res.data[0]);
    dispatch({type: 'GET_PRODUCTS', payload: res.data});
  } catch (error) {
    console.log(error.message);
  }
};
