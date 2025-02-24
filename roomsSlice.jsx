import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    name: 'Deluxe Room',
    type: 'Suite',
    availableFrom: '2025-02-01',
    availableTo: '2025-12-31',
    maxGuests: 3,
    description: 'A luxurious room with a beautiful view.',
    photos: ['./room2.jpg'],
    checkIn: '2025-05-10',
    checkOut: '2025-05-14',
    price: 200,
    rating: 4.5,
    amenities: ['WiFi', 'TV', 'Mini Bar']
  },
  {
    id: 2,
    name: 'Standard Room',
    type: 'Twin',
    availableFrom: '2025-2-16',
    availableTo: '2025-12-31',
    maxGuests: 2,
    description: 'A comfortable room with all basic amenities.',
    photos: ['./room4.jpg'],
    checkIn: '2025-04-10',
    checkOut: '2025-04-14',
    price: 100,
    rating: 4.0,
    amenities: ['WiFi', 'TV']
  },
  {
    id: 3,
    name: 'VIP Room',
    type: 'VIP',
    availableFrom: '2025-02-15',
    availableTo: '2025-12-31',
    maxGuests: 4,
    description: 'An exclusive room with premium services.',
    photos: ['./room1.webp'],
    checkIn: '2025-03-10',
    checkOut: '2025-03-14',
    price: 300,
    rating: 5.0,
    amenities: ['WiFi', 'TV', 'Mini Bar', 'Jacuzzi']
  }
];

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    addRoom: (state, action) => {
      state.push(action.payload);
    },
    deleteRoom: (state, action) => {
      return state.filter(room => room.id !== action.payload);
    },
    modifyRoom: (state, action) => {
      const index = state.findIndex(room => room.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    }
  }
});

export const { addRoom, deleteRoom, modifyRoom } = roomsSlice.actions;
export default roomsSlice.reducer;