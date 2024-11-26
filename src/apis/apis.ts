import axios from 'axios';

//예시
export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});
