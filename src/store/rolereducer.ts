import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const Roles = [
  "Unknown Personnel",
  "Guest",
  "Student",
  "Developer",
  "Executive Personnel",
];

//הסטייט מייצג עגלת קניות
const initialState = Roles[0];

export const rolereducer = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRole: (state, actions: PayloadAction<number>) => {
      if (actions.payload > state.length) return;
      return Roles[actions.payload];
    },
  },
});

//ייצוא הפעולות של הסטייט
export const { setRole } = rolereducer.actions;

// ייצוא ה-reducer לשימוש ב-store
// export default rolereducer;
