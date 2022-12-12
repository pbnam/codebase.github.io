import { combineReducers } from 'redux';
import counterReducer from './slices/counter/counter';
import movieReducer from './slices/movie/movie';

const reducers = combineReducers({
  counter: counterReducer,
  movie: movieReducer,
});

export default reducers;
