import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuItems: [
    "Existing Inventory",
    "Used Inventory",
    "Trade In",
    "Test Drive",
    "Cybertruck",
    "Roadster",
    "Semi",
    "Charging",
    "Powerwall",
    "Commercial Energy",
    "Utilities",
    "Find Us",
    "Support",
  ],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});
export const selectMenuItems = (state) => state.menuItems.menuItems;

export default menuSlice.reducer;
