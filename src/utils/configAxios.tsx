import axios from 'axios';

const axiosBaseUrl = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
});

axiosBaseUrl.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  console.log(token);

  if (token) {
    config.headers.Authorization = `Bearer ${token.toString().trim()}`;

    return config;
  }
  return config;
});

export default axiosBaseUrl;
