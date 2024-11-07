import { configureStore } from "@reduxjs/toolkit";
import { rolereducer } from "./rolereducer";
import { floorreducer } from "./floorreducer";

export const store = configureStore({
  reducer: {
    floorAccess: floorreducer.reducer,
    role: rolereducer.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
