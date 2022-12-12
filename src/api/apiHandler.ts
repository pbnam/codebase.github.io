import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export type TEnvironment = 'uat' | 'sit' | 'production' | 'mock';
export const config: (env: TEnvironment) => AxiosRequestConfig = (env) => {
  const API_KEY = '64e9c0b550ae1b08c54bf65bb08aba0b';
  const options: { [key: string]: AxiosRequestConfig } = {
    sit: {
      baseURL: 'https://api.themoviedb.org/3/',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'SIT App',
      },
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    },

    uat: {
      baseURL: '',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'UAT App',
      },
    },

    production: {
      baseURL: '',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'PROD App',
      },
    },

    mock: {
      baseURL: '',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };

  return options[env];
};

const callApi = async <T extends { [key: string]: any }>(apiRequest: AxiosRequestConfig): Promise<T> => {
  const instance: AxiosInstance = axios.create(config(process.env.REACT_APP_ENV as TEnvironment));
  try {
    const { data } = await instance.request(apiRequest);
    return Promise.resolve(data);
  } catch (exception) {
    return Promise.reject(exception);
  }
};

export default { callApi };
