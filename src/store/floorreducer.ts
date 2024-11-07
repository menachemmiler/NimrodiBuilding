import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//ההגדרה של הסטייט
//הסטייט מייצג עגלת קניות
const initialState = {
  floorAccess: [false, false, false, false, false]
}


export const floorreducer = createSlice({
  name: "floorAccess",
  initialState,
  reducers: {
    changeAccess: (state, actions: PayloadAction<number>) => {
      if (actions.payload > state.floorAccess.length) return;
      state.floorAccess[actions.payload] = !state.floorAccess[actions.payload];
    },
  },
});

//ייצוא הפעולות של הסטייט
export const { changeAccess } = floorreducer.actions;

// ייצוא ה-reducer לשימוש ב-store
// export default counterSlice;
