import axios from 'axios';

const axiosBaseUrl = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
});

axiosBaseUrl.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers
        ? (config.headers.Authorization = `Bearer ${token}`)
        : (config.headers = { Authorization: `Bearer ${token}` });
    }
    return config;
  },
  (erro) => {
    return Promise.reject(erro);
  },
);

export default axiosBaseUrl;
