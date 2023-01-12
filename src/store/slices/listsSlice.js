import { createSlice } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

export const listsSlice = createSlice({
  name: "lists",
  initialState: {
    songsList: [],
    moviesList: [],
  },
  reducers: {
    addSong: (state) => {
      state.songsList.push(faker.music.songName());
    },
    removeSong: (state, action) => {
      const movieIndex = state.songsList.indexOf(action.payload);
      state.songsList.splice(movieIndex, 1);
    },
    addMovie: (state) => {
      state.moviesList.push(faker.music.songName());
    },
    removeMovie: (state, action) => {
      const movieIndex = state.moviesList.indexOf(action.payload);
      state.moviesList.splice(movieIndex, 1);
    },
    clearAll: (state) => {
      state.songsList = [];
      state.moviesList = [];
    },
  },
});

export const { addSong, removeSong, addMovie, removeMovie, clearAll } =
  listsSlice.actions;

export default listsSlice.reducer;
