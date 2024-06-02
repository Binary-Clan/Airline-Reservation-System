import React, { useMemo } from "react"
import { Box, Button, Chip, IconButton, Stack, Typography } from "@mui/material"
import { MaterialReactTable, useMaterialReactTable } from "material-react-table"
import FlightIcon from "@mui/icons-material/Flight"
import { useSelector } from 'react-redux';

const initialSeatInfo = [
    {
        seat: "1",
        flightName: "Ax5C",
        seatId: "002",
        status: "Available",
        class: "Economy Class",
        description: "Enjoy your Trip with screen, free headphone and meal"
    },
    {
        seat: "2",
        flightName: "Ax5C",
        seatId: "003",
        status: "Available",
        class: "Economy Class",
        description: "Enjoy your Trip with screen, free headphone and meal"
    },
    {
        seat: "3",
        flightName: "Ax5C",
        seatId: "022",
        status: "Available",
        class: "Business Class",
        description: "Enjoy your Trip with screen, free headphone and unlimited meal"
    },
    {
        seat: "4",
        flightName: "Ax5C",
        seatId: "0023",
        status: "Available",
        class: "Business Class",
        description: "Enjoy your Trip with screen, free headphone and unlimite meal"
    }
]

const SelectedSeatInfoTable = () => {

    const selectedSeatIds = useSelector((state) => state.seats.selectedSeatIds);

    const filteredSeatInfo = useMemo(() => {
        return initialSeatInfo.map((seat, index) => ({
            ...seat,
            seatId: selectedSeatIds[index] !== undefined ? selectedSeatIds[index] : seat.seatId,
        }));
    }, [selectedSeatIds]);

    const columns = useMemo(
        () => [
            {
                accessorKey: "flightName",
                header: "Flight Name",
                size: 150,
                Cell: ({ cell, row }) => (
                    <Stack
                        direction='row'
                        justifyContent='flex-start'
                        alignItems='center'
                        spacing={2}
                    >
                        <FlightIcon />
                        <Stack spacing={-1}>
                            <Typography variant='h6'>{cell.getValue()}</Typography>
                            <Typography variant='body1'>
                                {row.original.airlineName}
                            </Typography>
                        </Stack>
                    </Stack>
                ),
            },
            {
                accessorKey: "seatId",
                header: "Seat Id",
                size: 200,
                Cell: ({ row }) => (
                    <Stack direction='column' justifyContent='center' alignItems='center'>
                        <Typography variant='h6'>
                            {row.original.seatId}
                        </Typography>
                    </Stack>
                ),
            },
            {
                accessorKey: "status",
                header: "Status",
                size: 150,
                Cell: ({ cell }) => (
                    <Chip
                        label={cell.getValue()}
                        color={
                            cell.getValue() === "Available"
                                ? "success"
                                : cell.getValue() === "Unavailable"
                                    ? "warning"
                                    : "default"
                        }
                        variant='outlined'
                    />
                ),
            },
            {
                accessorKey: "class",
                header: "Class",
                size: 200,
                Cell: ({ row }) => (
                    <Stack direction='column' justifyContent='center' alignItems='center'>
                        <Typography variant='h6'>{row.original.class}</Typography>
                    </Stack>
                ),
            },
            {
                accessorKey: "description",
                header: "Description",
                size: 200,
                Cell: ({ row }) => (
                    <Stack direction='column' justifyContent='center' alignItems='center'>
                        <Typography variant='h6'>{row.original.description}</Typography>
                    </Stack>
                ),
            },
        ],
        []
    )

    const table = useMaterialReactTable({
        columns,
        data: filteredSeatInfo,
        pageSizeOptions: [5, 10, 20],
        defaultPageSize: 10,
    })

    return (
        <Box sx={{ width: "100%", margin: "0 auto" }}>
            <MaterialReactTable table={table} />
        </Box>
    )
}

export default SelectedSeatInfoTable
