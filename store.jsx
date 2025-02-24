import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from './roomsSlice';
import cartReducer from './cartSlice';
import userReducer from './userSlice'; // Import du userSlice

const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    cart: cartReducer,
    user: userReducer, // Ajout du reducer user
  }
});

export default store;
