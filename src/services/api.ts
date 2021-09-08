import axios from 'axios';
import { API_ENDPOINT } from 'constants/environment';

const api = axios.create({
  baseURL: `${API_ENDPOINT}`,
  timeout: 1000 * 60,
});

export default api;
