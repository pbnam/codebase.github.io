import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovie } from 'shared/types';
export interface IMovieState {
  movies: IMovie[];
  isLoading: boolean;
  error: string;
}
const initialState: IMovieState = {
  movies: [],
  isLoading: false,
  error: '',
};
const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    request: (state: IMovieState) => {
      state.isLoading = true;
      state.movies = [];
      state.error = '';
    },
    success: (state: IMovieState, action: PayloadAction<IMovie[]>) => {
      state.isLoading = false;
      state.movies = action.payload;
      state.error = '';
    },
    error: (state: IMovieState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.movies = [];
      state.error = action.payload;
    },
  },
});
export const { request, success, error } = movieSlice.actions;
export default movieSlice.reducer;
