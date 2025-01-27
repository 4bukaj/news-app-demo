import { createSlice } from '@reduxjs/toolkit';

interface LayoutState {
  sidebarOpened: boolean;
  tileLayout: 'grid' | 'list';
}

const initialState: LayoutState = {
  sidebarOpened: false,
  tileLayout: 'grid',
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
    toggleTileLayout: (state) => {
      const { tileLayout: layout } = state;

      state.tileLayout = layout === 'grid' ? 'list' : 'grid';
    },
  },
});

export const { openSidebar, closeSidebar, toggleTileLayout } =
  layoutSlice.actions;

export default layoutSlice.reducer;
