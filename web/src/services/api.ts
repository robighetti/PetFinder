import axios from 'axios';

import { useAuth } from '../hooks/auth';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('@petFinder:token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
