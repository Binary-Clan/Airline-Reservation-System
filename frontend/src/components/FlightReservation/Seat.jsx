// Seat.js
import React from 'react';
import { Box } from '@mui/material';

const Seat = ({ row, col, onClick, selected, seatNumber }) => {
    return (
        <Box
            sx={{
                width: 30,
                height: 30,
                backgroundColor: selected ? 'blue' : 'lightgray',
                border: '1px solid gray',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 1,
            }}
            onClick={() => onClick(row, col)}
        >
            {seatNumber}
        </Box>
    );
};

export default Seat;
