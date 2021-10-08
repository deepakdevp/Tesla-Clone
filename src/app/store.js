import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/car/carSlice";
import menuReducer from "../features/menu/menuSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
    menuItems: menuReducer,
  },
});
