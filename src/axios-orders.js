import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-527eb.firebaseio.com/'
});

export default instance;
