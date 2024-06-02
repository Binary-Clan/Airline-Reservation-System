// store.js
import { configureStore } from '@reduxjs/toolkit';
import seatsReducer from './seatslice.js';

const store = configureStore({
    reducer: {
        seats: seatsReducer,
    },
});

export default store;
