// seatsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const seatsSlice = createSlice({
    name: 'seats',
    initialState: {
        selectedSeatIds: [],
    },
    reducers: {
        setSelectedSeatIds: (state, action) => {
            state.selectedSeatIds = action.payload;
        },
    },
});

export const { setSelectedSeatIds } = seatsSlice.actions;

export default seatsSlice.reducer;

