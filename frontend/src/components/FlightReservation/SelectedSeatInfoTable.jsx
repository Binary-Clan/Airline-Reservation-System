import React, { useMemo } from "react";
import {
  Box,
  Button,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import FlightIcon from "@mui/icons-material/Flight";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useGetSeats } from "../../hooks/seat";

const SelectedSeatInfoTable = () => {
  const { data: seatInfo = [], isLoading, isError } = useGetSeats();

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
              {/* Assuming 'airlineName' is available in data */}
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
            <Typography variant='h6'>{row.original.seatId}</Typography>
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
      {
        id: "actions",
        header: "Actions",
        size: 150,
        Cell: ({ row }) => (
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

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error fetching data</Typography>;

  const table = useMaterialReactTable({
    columns,
    data: seatInfo,
    pageSizeOptions: [5, 10, 20],
    defaultPageSize: 10,
  });

  return (
    <Box sx={{ width: "100%", margin: "0 auto" }}>
      <MaterialReactTable table={table} />
    </Box>
  );
};

export default SelectedSeatInfoTable;
