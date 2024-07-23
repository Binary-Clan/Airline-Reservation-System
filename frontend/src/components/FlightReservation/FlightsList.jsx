import React, { useMemo } from "react";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import FlightIcon from "@mui/icons-material/Flight";
import { useNavigate } from "react-router-dom";

const flightScheduleData = [
  {
    scheduleId: "1",
    flightName: "Ax5C",
    airlineName: "Sri Lankan Air",
    status: "Departed",
    arrivalDateTime: "16 May 3:55 AM",
    departureDateTime: "15 May 2:55 PM",
    source: "Sri Lanka",
    destination: "Dubai",
  },
  {
    scheduleId: "2",
    flightName: "B787",
    airlineName: "Emirates",
    status: "On Time",
    arrivalDateTime: "18 May 6:30 AM",
    departureDateTime: "17 May 10:30 PM",
    source: "Dubai",
    destination: "London",
  },
  {
    scheduleId: "3",
    flightName: "QR922",
    airlineName: "Qatar Airways",
    status: "Delayed",
    arrivalDateTime: "20 May 12:45 PM",
    departureDateTime: "20 May 3:00 AM",
    source: "Doha",
    destination: "Sydney",
  },
  {
    scheduleId: "4",
    flightName: "AF198",
    airlineName: "Air France",
    status: "Cancelled",
    arrivalDateTime: "22 May 9:20 AM",
    departureDateTime: "21 May 11:00 PM",
    source: "Paris",
    destination: "New York",
  },
];

const FlightsList = () => {
  const navigate = useNavigate();
  const columns = useMemo(
    () => [
      {
        accessorKey: "flightName",
        header: "Flight",
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
        accessorKey: "status",
        header: "Status",
        size: 150,
        Cell: ({ cell }) => (
          <Chip
            label={cell.getValue()}
            color={
              cell.getValue() === "Departed"
                ? "success"
                : cell.getValue() === "On Time"
                ? "warning"
                : "default"
            }
            variant='outlined'
          />
        ),
      },
      {
        accessorKey: "arrivalDateTime",
        header: "Arrival and Departure",
        size: 200,
        Cell: ({ row }) => (
          <Stack direction='column' justifyContent='center' alignItems='center'>
            <Typography variant='h6'>
              {row.original.departureDateTime}
            </Typography>
            <Typography variant='h6'>|</Typography>
            <Typography variant='h6'>{row.original.arrivalDateTime}</Typography>
          </Stack>
        ),
      },
      {
        accessorKey: "source",
        header: "Source and Destination",
        size: 200,
        Cell: ({ row }) => (
          <Stack direction='column' justifyContent='center' alignItems='center'>
            <Typography variant='h6'>{row.original.source}</Typography>
            <Typography variant='h6'>|</Typography>
            <Typography variant='h6'>{row.original.destination}</Typography>
          </Stack>
        ),
      },
      {
        id: "actions",
        header: "Actions",
        size: 150,
        Cell: ({ row }) => (
          <Box display='flex' flexDirection='row' gap={1}>
            <Button
              onClick={() => navigate("/reservation/flight-reservation")}
              variant='contained'
              color='primary'
            >
              Book the Flight
            </Button>
          </Box>
        ),
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: flightScheduleData,
    pageSizeOptions: [5, 10, 20],
    defaultPageSize: 10,
  });

  return (
    <Box sx={{ width: "100%", margin: "0 auto" }}>
      <MaterialReactTable table={table} />
    </Box>
  );
};

export default FlightsList;
