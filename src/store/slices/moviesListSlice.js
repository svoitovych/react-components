import { createSlice } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

export const moviesListSlice = createSlice({
  name: "movies",
  initialState: {
    value: [],
  },
  reducers: {
    addMovie: (state) => {
      state.value.push(faker.music.songName());
    },
    removeMovie: (state, action) => {
      const movieIndex = state.value.indexOf(action.payload);
      state.value.splice(movieIndex, 1);
    },
    clearMoviesList: (state) => {
      state.value = [];
    },
  },
});

export const { addMovie, removeMovie, clearMoviesList } =
  moviesListSlice.actions;

export default moviesListSlice.reducer;
