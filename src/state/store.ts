import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './layout/layoutSlice';
import articleReducer from './article/articleSlice';

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    article: articleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
