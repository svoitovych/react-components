import { configureStore } from "@reduxjs/toolkit";
import carsFormReducer, {
  carsFormName,
  carsFormPrice,
} from "./slices/carsFormSlice";
import carsListReducer, {
  carsAdd,
  carsRemove,
  carsSearch,
} from "./slices/carsListSlice";

const carsStore = configureStore({
  reducer: {
    form: carsFormReducer,
    cars: carsListReducer,
  },
});

export {
  carsStore,
  carsFormName,
  carsFormPrice,
  carsAdd,
  carsRemove,
  carsSearch,
};
