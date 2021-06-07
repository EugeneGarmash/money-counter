import axios from 'axios';

const testaxios = axios.create({
  baseURL: 'https://eugene-s-project-72ed7.firebaseio.com/',
});

export default testaxios;