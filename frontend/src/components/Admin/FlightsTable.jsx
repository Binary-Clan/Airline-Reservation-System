import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
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
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const FlightsTable = () => {
  const navigate = useNavigate();
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [flightsData, setFlightsData] = useState([]);

  const mockFlights = [
    {
      id: "1",
      flightName: "Flight 101",
      airlineName: "Airways",
      capacity: 200,
      flightType: "International",
      seatType: "Economy",
      maximumWeightForPassenger: 30,
      airlineService: "Full Service",
    },
    {
      id: "2",
      flightName: "Flight 202",
      airlineName: "Sky High",
      capacity: 150,
      flightType: "Domestic",
      seatType: "Business",
      maximumWeightForPassenger: 40,
      airlineService: "Low Cost",
    },
    // Add more mock data as needed
  ];

  useEffect(() => {
    setFlightsData(mockFlights);
  }, []);

  const handleDeleteClick = (flight) => {
    setSelectedFlight(flight);
    setIsDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedFlight) {
      setFlightsData((prevData) =>
        prevData.filter((flight) => flight.id !== selectedFlight.id)
      );
      toast("✅ Successfully deleted");
      setIsDeleteDialogOpen(false);
      setSelectedFlight(null);
    }
  };

  const handleCloseDeleteDialog = () => {
    setSelectedFlight(null);
    setIsDeleteDialogOpen(false);
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "Flight ID",
        size: 10,
        Cell: ({ row }) => (
          <Stack
            direction='column'
            justifyContent='flex-start'
            alignItems='flex-start'
          >
            <Typography variant='h6'>{row.original.id}</Typography>
          </Stack>
        ),
      },
      {
        accessorKey: "flightName",
        header: "Flight Name",
        size: 180,
        Cell: ({ cell, row }) => (
          <Stack
            direction='row'
            justifyContent='flex-start'
            alignItems='flex-start'
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
        accessorKey: "capacity",
        header: "Capacity",
        size: 50,
        Cell: ({ row }) => (
          <Stack
            direction='column'
            justifyContent='flex-start'
            alignItems='flex-start'
          >
            <Typography variant='h6'>{row.original.capacity}</Typography>
          </Stack>
        ),
      },
      {
        accessorKey: "flightType",
        header: "Flight Type",
        size: 200,
        Cell: ({ row }) => (
          <Stack
            direction='column'
            justifyContent='flex-start'
            alignItems='flex-start'
          >
            <Typography variant='h6'>{row.original.flightType}</Typography>
          </Stack>
        ),
      },
      {
        accessorKey: "seatType",
        header: "Seat Type",
        size: 200,
        Cell: ({ row }) => (
          <Stack
            direction='column'
            justifyContent='flex-start'
            alignItems='flex-start'
          >
            <Typography variant='h6'>{row.original.seatType}</Typography>
          </Stack>
        ),
      },
      {
        accessorKey: "maximumWeightForPassenger",
        header: "Max: Weight per Person",
        size: 150,
        Cell: ({ row }) => (
          <Stack
            direction='column'
            justifyContent='flex-start'
            alignItems='flex-start'
          >
            <Typography variant='h6'>
              {row.original.maximumWeightForPassenger}
            </Typography>
          </Stack>
        ),
      },
      {
        accessorKey: "airlineService",
        header: "Airline Service",
        size: 200,
        Cell: ({ row }) => (
          <Stack
            direction='column'
            justifyContent='flex-start'
            alignItems='flex-start'
          >
            <Typography variant='h6'>{row.original.airlineService}</Typography>
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
            <IconButton
              onClick={() => navigate(`/admin/editFlight/${row.original.id}`)}
              color='primary'
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => handleDeleteClick(row.original)}
              color='error'
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ),
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: flightsData,
    pageSizeOptions: [5, 10, 20],
    defaultPageSize: 10,
  });

  return (
    <Box sx={{ width: "100%", margin: "0 auto" }}>
      <>
        <MaterialReactTable table={table} />
        <Dialog
          open={isDeleteDialogOpen}
          onClose={handleCloseDeleteDialog}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>
            {"Confirm Deletion"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              Are you sure you want to delete this flight?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDeleteDialog} color='primary'>
              Cancel
            </Button>
            <Button onClick={handleConfirmDelete} color='error' autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </>
    </Box>
  );
};

export default FlightsTable;
