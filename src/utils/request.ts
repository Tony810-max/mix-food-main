import axios from 'axios';
import { env } from '@/utils/const';

const request = axios.create({
  baseURL: env.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default request;
