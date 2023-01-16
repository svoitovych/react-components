import { createSlice, nanoid } from "@reduxjs/toolkit";

export const carsListSlice = createSlice({
  name: "carsList",
  initialState: {
    search: "",
    carsList: [],
  },
  reducers: {
    carsSearch: (state, action) => {
      state.search = action.payload;
    },
    carsAdd: (state, action) => {
      state.carsList.push({ ...action.payload, id: nanoid() });
    },
  },
});

export const { carsAdd, carsRemove, carsSearch } = carsListSlice.actions;

export default carsListSlice.reducer;
