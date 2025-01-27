import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Layout } from '../../types/layout';

interface LayoutState {
  sidebarOpened: boolean;
  layout: Layout;
}

const initialState: LayoutState = {
  sidebarOpened: false,
  layout: 'grid',
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.sidebarOpened = true;
    },
    closeSidebar: (state) => {
      state.sidebarOpened = false;
    },
    toggleLayout: (state, action: PayloadAction<Layout>) => {
      state.layout = action.payload;
    },
  },
});

export const { openSidebar, closeSidebar, toggleLayout } = layoutSlice.actions;

export default layoutSlice.reducer;
