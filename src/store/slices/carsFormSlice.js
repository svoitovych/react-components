import { createSlice } from "@reduxjs/toolkit";
import { carsAdd } from "./carsListSlice";

export const carsFormSlice = createSlice({
  name: "carsForm",
  initialState: {
    name: "",
    price: 0,
  },
  reducers: {
    carsFormName: (state, action) => {
      state.name = action.payload;
    },
    carsFormPrice: (state, action) => {
      state.price = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(carsAdd, (state) => {
      state.name = "";
      state.price = 0;
    });
  },
});

export const { carsFormName, carsFormPrice } = carsFormSlice.actions;

export default carsFormSlice.reducer;
