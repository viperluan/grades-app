import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://grades-app-back.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
  },
});
