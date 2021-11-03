import axios from 'axios';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';

const findOne = (id: number) => {
  return axios
    .get(`${API_ENDPOINT}/users/${id}`)
    .then((response) => response.data);
};

export { findOne };
