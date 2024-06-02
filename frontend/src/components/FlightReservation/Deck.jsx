
import React, {useEffect, useState} from 'react';
import { Box, Stack } from '@mui/material';
import Seat from './Seat';
import {useDispatch} from "react-redux";

const Deck = ({ rows, cols, onSeatSelection }) => {
    //return the seat id to the parent
    const [selectedSeats, setSelectedSeats] = useState([]);

    const dispatch = useDispatch()

    useEffect(() => {
        onSeatSelection(selectedSeats);
    }, [selectedSeats, onSeatSelection]);
    const handleSeatClick = (row, col) => {
        const seatId =generateSeatNumber(row, col);
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
                const seatId = generateSeatNumber(row, col)
                seatElements.push(
                    <Seat
                        key={seatId}
                        row={row}
                        col={col}
                        onClick={handleSeatClick}
                        selected={selectedSeats.includes(generateSeatNumber(row,col))}
                    />
                );
            }
        }
        return seatElements;
    };

    const generateSeatNumber = (row, col) => {
        return row * cols + col + 1;
    };


    return (
        <Stack direction="column" alignItems="center" spacing={1} >
            {Array.from({ length: rows }).map((_, rowIndex) => (
                <Stack direction="row" key={rowIndex} spacing={1}>
                    {Array.from({ length: cols }).map((_, colIndex) => (
                        <Seat
                            key={generateSeatNumber(rowIndex, colIndex)}
                            row={rowIndex}
                            col={colIndex}
                            onClick={handleSeatClick}
                            selected={selectedSeats.includes(generateSeatNumber(rowIndex, colIndex))}
                            seatNumber={generateSeatNumber(rowIndex, colIndex)}
                        />
                    ))}
                </Stack>
            ))}
        </Stack>
    );
};

export default Deck;
