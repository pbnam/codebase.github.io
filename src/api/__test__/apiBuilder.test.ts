import { apiBuilder } from 'api/apiBuilder';

describe('API builder Test', () => {
  it('should return correct config for getTvPopular', () => {
    const sut = apiBuilder.getTvPopular({ page: 1 });
    expect(sut.url).toMatch(/.*\/popular$/);
    expect(sut.method).toEqual('GET');
    expect(sut.params).toMatchObject({
      page: 1,
    });
  });
});
