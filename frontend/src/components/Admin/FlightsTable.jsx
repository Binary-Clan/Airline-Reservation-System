import React, { useMemo } from "react"
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
} from "@mui/material"
import { MaterialReactTable, useMaterialReactTable } from "material-react-table"
import FlightIcon from "@mui/icons-material/Flight"
import VisibilityIcon from "@mui/icons-material/Visibility"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { useGetFlights } from "../../hooks/flight"
import { useNavigate } from "react-router-dom"

const FlightsTable = () => {
  const { data: flights, isLoading } = useGetFlights()
  const navigate = useNavigate()
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
            <IconButton color='error'>
              <DeleteIcon />
            </IconButton>
          </Box>
        ),
      },
    ],
    []
  )

  const table = useMaterialReactTable({
    columns,
    data: flights || [],
    pageSizeOptions: [5, 10, 20],
    defaultPageSize: 10,
  })

  return (
    <Box sx={{ width: "100%", margin: "0 auto" }}>
      {isLoading ? <CircularProgress /> : <MaterialReactTable table={table} />}
    </Box>
  )
}

export default FlightsTable
