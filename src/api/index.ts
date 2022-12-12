import { IGetTvPopularResponse } from 'shared/types';
import { apiBuilder } from 'api/apiBuilder';
import apiHandler from './apiHandler';

interface ApiWorker {
  getPopular: (params: { [key: string]: any }) => Promise<IGetTvPopularResponse>;
}

const api: ApiWorker = {
  getPopular: (params) => apiHandler.callApi<IGetTvPopularResponse>(apiBuilder.getTvPopular(params)),
};

export default api;
