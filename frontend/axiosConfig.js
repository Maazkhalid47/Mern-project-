import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    const Token = localStorage.getItem('Token');

    if (Token) {
      config.headers['Authorization'] = `Bearer ${Token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;