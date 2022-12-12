import { AxiosRequestConfig } from 'axios';

export interface ApiBuilder {
  getTvPopular: (params: { [key: string]: any }) => AxiosRequestConfig;
}

export const apiBuilder: ApiBuilder = {
  getTvPopular: (params) => ({
    method: 'GET',
    params,
    url: `tv/popular`,
  }),
};
