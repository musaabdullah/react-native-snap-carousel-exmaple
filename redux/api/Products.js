import axios from 'axios';

const baseUrl = 'https://fakestoreapi.com/products';

export const getProducts = () => axios.get(baseUrl);
