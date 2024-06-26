import React, { useState } from "react"
import AdminFlightScheduleTable from "./AdminFlightScheduleTable"
import { Stack, Typography, Button, TextField, Grid } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import SearchIcon from "@mui/icons-material/Search"
import { useNavigate } from "react-router-dom"
import FlightsTable from "./FlightsTable.jsx"
import { useGetFlight } from "../../hooks/flight.js"

const ManageFlights = () => {
  const navigate = useNavigate()

  const [flightId, setFlightId] = useState(null)

  return (
    <>
      <Stack spacing={2}>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          spacing={2}
        >
          <Typography variant='h4'>Manage Flights</Typography>
          <Button
            onClick={() => navigate("/admin/addFlight")}
            startIcon={<AddIcon />}
            variant='contained'
            color='primary'
          >
            Add New Flight
          </Button>
        </Stack>
        <FlightsTable />
      </Stack>
    </>
  )
}

export default ManageFlights
