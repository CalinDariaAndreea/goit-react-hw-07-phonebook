import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

const alertSlice = createSlice({
  name: 'handleAlerts',
  initialState,
  reducers: {
    setAlert(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setAlert } = alertSlice.actions;
export const alertReducer = alertSlice.reducer;
