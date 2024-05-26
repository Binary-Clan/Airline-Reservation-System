
import React, { useState } from 'react';
import { Box, Stack } from '@mui/material';
import Seat from './Seat';

const Deck = ({ rows, cols }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatClick = (row, col) => {
        const seatId = `${row}-${col}`;
        setSelectedSeats((prev) => {
            if (prev.includes(seatId)) {
                return prev.filter((seat) => seat !== seatId);
            } else {
                return [...prev, seatId];
            }
        });
    };

    const renderSeats = () => {
        let seatElements = [];
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const seatId = `${row}-${col}`;
                seatElements.push(
                    <Seat
                        key={seatId}
                        row={row}
                        col={col}
                        onClick={handleSeatClick}
                        selected={selectedSeats.includes(seatId)}
                    />
                );
            }
        }
        return seatElements;
    };

    return (
        <Stack direction="column" alignItems="center" spacing={1} >
            {Array.from({ length: rows }).map((_, rowIndex) => (
                <Stack direction="row" key={rowIndex} spacing={1}>
                    {Array.from({ length: cols }).map((_, colIndex) => (
                        <Seat
                            key={`${rowIndex}-${colIndex}`}
                            row={rowIndex}
                            col={colIndex}
                            onClick={handleSeatClick}
                            selected={selectedSeats.includes(`${rowIndex}-${colIndex}`)}
                        />
                    ))}
                </Stack>
            ))}
        </Stack>
    );
};

export default Deck;
