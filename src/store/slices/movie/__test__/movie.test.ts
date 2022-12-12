import movieReducer, { error, IMovieState, request, success } from './../movie';
import { IMovie } from '../../../../shared/types';

describe('Movie Reducer Test', () => {
  it('should return isLoading = true when trigger request', () => {
    const prevState: IMovieState = {
      isLoading: false,
      error: '',
      movies: [],
    };
    expect(movieReducer(prevState, request)).toMatchObject({
      isLoading: true,
      error: '',
      movies: [],
    });
  });
  it('should return isLoading = false and list movies when trigger success', () => {
    const prevState: IMovieState = {
      isLoading: false,
      error: '',
      movies: [],
    };
    const payload: IMovie[] = [];
    expect(movieReducer(prevState, success(payload))).toMatchObject({
      isLoading: false,
      error: '',
      movies: payload,
    });
  });
  it('should return isLoading = false and has error when trigger error', () => {
    const prevState: IMovieState = {
      isLoading: false,
      error: '',
      movies: [],
    };
    expect(movieReducer(prevState, error('Get something wrong...'))).toMatchObject({
      isLoading: false,
      error: 'Get something wrong...',
      movies: [],
    });
  });
});
