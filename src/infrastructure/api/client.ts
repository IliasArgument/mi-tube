import { API_CONFIG } from '@/modules/auth/config/api.config';
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: API_CONFIG.baseURL,
  withCredentials: API_CONFIG.withCredentials,
  timeout: API_CONFIG.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});
