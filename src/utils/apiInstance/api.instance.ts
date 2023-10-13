import axios from 'axios';
import { error } from 'console';

export const makeInstance = (baseURL: string, multipart?: boolean) => {
  const instance = axios.create({
    headers: {
      'Content-Type': `${multipart ? 'multipart/form-data' : 'application/json'}`
    },
    baseURL: baseURL,
    timeout: 60000
  });

  instance.interceptors.request.use(
    async function (config: any) {
      return { ...config };
    },
    function (error: any) {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    function(response: any) {
      return response
    },
    function (error: any) {
      return Promise.reject(error)
    }
  );

  return instance;
}