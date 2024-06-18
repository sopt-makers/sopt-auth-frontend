import axios from 'axios';

const API_URL = 'https://operation.api.dev.sopt.org/api/v1';

const instanceConfig = {
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
};

export const axiosInstance = axios.create(instanceConfig);
