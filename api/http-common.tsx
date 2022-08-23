import axios from 'axios';
import environment from 'shared/constants/enviroment';

export default axios.create({
  baseURL: environment.reactAppApiUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
