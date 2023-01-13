import { createSlice } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

export const songsListSlice = createSlice({
  name: "songs",
  initialState: {
    value: [],
  },
  reducers: {
    addSong: (state) => {
      state.value.push(faker.music.songName());
    },
    removeSong: (state, action) => {
      const songIndex = state.value.indexOf(action.payload);
      state.value.splice(songIndex, 1);
    },
    clearSongsList: (state) => {
      state.value = [];
    },
  },
});

export const { addSong, removeSong, clearSongsList } = songsListSlice.actions;

export default songsListSlice.reducer;
