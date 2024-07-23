import React, { useMemo } from "react";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import FlightIcon from "@mui/icons-material/Flight";
import { useNavigate } from "react-router-dom";
import { useGetFlightSchedules } from "../../hooks/flightSchedule";

const FlightSchedulesList = () => {
  const navigate = useNavigate();
  const {
    data: flightSchedules = [],
    isLoading,
    isError,
  } = useGetFlightSchedules();

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
              onClick={() =>
                navigate(
                  `/reservation/flight-reservation/${row.original.scheduleId}`
                )
              }
              variant='contained'
              color='primary'
            >
              Book the Flight
            </Button>
          </Box>
        ),
      },
    ],
    [navigate]
  );

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error fetching data</Typography>;

  const table = useMaterialReactTable({
    columns,
    data: flightSchedules,
    pageSizeOptions: [5, 10, 20],
    defaultPageSize: 10,
  });

  return (
    <Box sx={{ width: "100%", margin: "0 auto" }}>
      <MaterialReactTable table={table} />
    </Box>
  );
};

export default FlightSchedulesList;
