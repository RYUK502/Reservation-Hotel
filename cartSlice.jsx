import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    },
    deleteOrder: (state, action) => {
      return state.filter(room => room.id !== action.payload);
    },
  }
});

export const { addOrder, deleteOrder } = cartSlice.actions;
export default cartSlice.reducer;