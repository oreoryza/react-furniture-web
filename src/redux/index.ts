// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import fetchReducer from './async/fetchData';

const store = configureStore({
  reducer: {
    fetch: fetchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;