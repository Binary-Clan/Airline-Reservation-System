import React, { useMemo } from "react";
import { Box, Chip, IconButton, Stack, Typography } from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import FlightIcon from "@mui/icons-material/Flight";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useGetFlights } from "../../hooks/flight";

const AdminFlightScheduleTable = () => {
  const { data, isLoading, isError, error } = useGetFlights();

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
                : cell.getValue() === "Delayed"
                ? "warning"
                : cell.getValue() === "Cancelled"
                ? "error"
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
        Cell: ({ cell }) => (
          <Box display='flex' flexDirection='row' gap={1}>
            <IconButton color='primary'>
              <VisibilityIcon />
            </IconButton>
            <IconButton color='primary'>
              <EditIcon />
            </IconButton>
            <IconButton color='error'>
              <DeleteIcon />
            </IconButton>
          </Box>
        ),
      },
    ],
    []
  );

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return <Typography>Error: {error.message}</Typography>;
  }

  return (
    <Box sx={{ width: "100%", margin: "0 auto" }}>
      <MaterialReactTable
        columns={columns}
        data={data || []} // Provide default empty array if no data
        pageSizeOptions={[5, 10, 20]}
        defaultPageSize={10}
      />
    </Box>
  );
};

export default AdminFlightScheduleTable;
