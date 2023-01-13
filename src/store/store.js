import { configureStore } from "@reduxjs/toolkit";
import songsListReducer from "./slices/songsListSlice";
import moviesListReducer from "./slices/moviesListSlice";

const store = configureStore({
  reducer: {
    movies: moviesListReducer,
    songs: songsListReducer,
  },
});

export default store;
