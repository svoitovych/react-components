import { configureStore } from "@reduxjs/toolkit";
import listsReducer from "../store/slices/listsSlice";

const store = configureStore({
  reducer: {
    lists: listsReducer,
  },
});

export default store;
