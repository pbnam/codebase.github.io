import apiHandler from '../apiHandler';
import api from '../index';

describe('Test Api call', () => {
  it('should call app getPopular with the correct params', async () => {
    apiHandler.callApi = jest.fn();
    await api.getPopular({ page: 1 });
    expect(apiHandler.callApi).toBeCalledWith({
      method: 'GET',
      params: { page: 1 },
      url: 'tv/popular',
    });
  });
});
