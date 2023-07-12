import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://opentdb.com',
  timeout: 20000
});

const successResponse = ({ data }) => data;
const errorResponse = (err) => {
  throw err;
};

instance.interceptors.response.use(successResponse, errorResponse);

export default instance;
// permite reutilizar as chamadas que precisam de uma configuração inicial, tipo headers e
