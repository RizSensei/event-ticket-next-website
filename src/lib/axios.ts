
import { getStoredToken } from './parseCookie';
import { BASEURL } from './urls';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: BASEURL,
});

axiosClient.interceptors.request.use((config) => {
  const token = getStoredToken();
  config.headers.Accept = '*/*';
  config.headers['access-control-allow-origin'] = '*';
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const response = error.response;

    if (response) {
      if (response.status === 403) {
        return null;
      }
    } else {
      console.error('Error response is undefined:', error);
    }

    return Promise.reject(error);
  },
);

export default axiosClient;
