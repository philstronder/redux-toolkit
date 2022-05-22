import { configureStore } from "@reduxjs/toolkit";
import counteReducer from '../features/counter/counter-slice';
import { apiSlice } from '../features/dogs/dogs-api-slice'

export const store = configureStore({
  reducer: {
    counter: counteReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

