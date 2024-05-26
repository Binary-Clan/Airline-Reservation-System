import * as React from "react"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { TimePicker } from "@mui/x-date-pickers/TimePicker"
import {
  Autocomplete,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"

const statusOptions = ["On Time", "Delayed", "Cancelled"]

export default function AddFlightSchedule() {
  const [flight, setFlight] = React.useState(null)
  const [departureDate, setDepartureDate] = React.useState(null)
  const [departureTime, setDepartureTime] = React.useState(null)
  const [arrivalDate, setArrivalDate] = React.useState(null)
  const [arrivalTime, setArrivalTime] = React.useState(null)
  const [sourceAirport, setSourceAirport] = React.useState(null)
  const [destinationAirport, setDestinationAirport] = React.useState(null)
  const [status, setStatus] = React.useState("")

  const handleAddFlightSchedule = () => {
    console.log(departureDate)
    console.log(departureTime)
    console.log("Flight:", flight)
    console.log("Departure Date:", departureDate?.toISOString())
    console.log("Departure Time:", departureTime?.toISOString())
    console.log("Arrival Date:", arrivalDate?.toISOString())
    console.log("Arrival Time:", arrivalTime?.toISOString())
    console.log("Source Airport:", sourceAirport)
    console.log("Destination Airport:", destinationAirport)
    console.log("Status:", status)
    // Additional logic to handle adding flight schedule
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography sx={{ marginBottom: 2 }} variant='h4'>
            Add New Schedule
          </Typography>
          <Autocomplete
            fullWidth
            options={[] /* Your flight options here */}
            getOptionLabel={(option) => option.flightName}
            value={flight}
            onChange={(event, newValue) => setFlight(newValue)}
            renderInput={(params) => (
              <TextField {...params} label='Select Flight' />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <DatePicker
            sx={{ width: "100%" }}
            label='Departure Date'
            value={departureDate}
            onChange={(newValue) => setDepartureDate(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
        </Grid>
        <Grid item xs={6}>
          <TimePicker
            sx={{ width: "100%" }}
            label='Departure Time'
            value={departureTime}
            onChange={(newValue) => setDepartureTime(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
        </Grid>
        <Grid item xs={6}>
          <DatePicker
            sx={{ width: "100%" }}
            label='Arrival Date'
            value={arrivalDate}
            onChange={(newValue) => setArrivalDate(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
        </Grid>
        <Grid item xs={6}>
          <TimePicker
            sx={{ width: "100%" }}
            label='Arrival Time'
            value={arrivalTime}
            onChange={(newValue) => setArrivalTime(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            fullWidth
            options={[] /* Your source airport options here */}
            getOptionLabel={(option) => option.name}
            value={sourceAirport}
            onChange={(event, newValue) => setSourceAirport(newValue)}
            renderInput={(params) => (
              <TextField {...params} label='Select Source Airport' />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            fullWidth
            options={[] /* Your destination airport options here */}
            getOptionLabel={(option) => option.name}
            value={destinationAirport}
            onChange={(event, newValue) => setDestinationAirport(newValue)}
            renderInput={(params) => (
              <TextField {...params} label='Select Destination Airport' />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            fullWidth
            label='Status'
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            {statusOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant='contained'
            color='primary'
            onClick={handleAddFlightSchedule}
            startIcon={<AddIcon />}
          >
            Add New Flight Schedule
          </Button>
        </Grid>
      </Grid>
    </LocalizationProvider>
  )
}
