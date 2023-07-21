import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import sizeReducer from '../features/sizechart/sizeSlice';

export const store = configureStore({
  reducer: {
    size: sizeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
