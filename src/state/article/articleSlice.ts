import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from '../../types/articles';

interface ArticleState {
  currentCountry: string;
  articleData: Article;
}

const initialState: ArticleState = {
  currentCountry: 'pl',
  articleData: null,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    updateCurrentCountry: (state, action: PayloadAction<string>) => {
      state.currentCountry = action.payload;
    },
    updateArticleData: (state, action: PayloadAction<Article>) => {
      state.articleData = action.payload;
    },
  },
});

export const { updateCurrentCountry } = layoutSlice.actions;

export default layoutSlice.reducer;
