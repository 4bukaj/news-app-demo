import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Layout } from '../../types/layout';

interface LayoutState {
  sidebarOpened: boolean;
  modalOpened: boolean;
  layout: Layout;
}

const initialState: LayoutState = {
  sidebarOpened: false,
  modalOpened: false,
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
    openModal: (state) => {
      state.modalOpened = true;
    },
    closeModal: (state) => {
      state.modalOpened = false;
    },
    toggleLayout: (state, action: PayloadAction<Layout>) => {
      state.layout = action.payload;
    },
  },
});

export const {
  openSidebar,
  closeSidebar,
  openModal,
  closeModal,
  toggleLayout,
} = layoutSlice.actions;

export default layoutSlice.reducer;
