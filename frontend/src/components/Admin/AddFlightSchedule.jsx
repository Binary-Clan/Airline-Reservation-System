import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import {
  Autocomplete,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useAddFlight } from "../../hooks/flight";

const statusOptions = ["On Time", "Delayed", "Cancelled"];
const airports = [
  { code: "LAX", name: "Los Angeles International Airport" },
  { code: "JFK", name: "John F. Kennedy International Airport" },
  { code: "ORD", name: "O'Hare International Airport" },
  { code: "ATL", name: "Hartsfield-Jackson Atlanta International Airport" },
  { code: "DFW", name: "Dallas/Fort Worth International Airport" },
  { code: "DXB", name: "Dubai International Airport" },
  { code: "SIN", name: "Singapore Changi Airport" },
  { code: "LHR", name: "London Heathrow Airport" },
  { code: "CDG", name: "Charles de Gaulle Airport" },
  { code: "HND", name: "Tokyo Haneda Airport" },
];

export default function AddFlightSchedule() {
  const [flight, setFlight] = React.useState(null);
  const [departureDate, setDepartureDate] = React.useState(null);
  const [departureTime, setDepartureTime] = React.useState(null);
  const [arrivalDate, setArrivalDate] = React.useState(null);
  const [arrivalTime, setArrivalTime] = React.useState(null);
  const [sourceAirport, setSourceAirport] = React.useState(null);
  const [destinationAirport, setDestinationAirport] = React.useState(null);
  const [status, setStatus] = React.useState("");

  const mutation = useAddFlight();

  const handleAddFlightSchedule = () => {
    const flightSchedule = {
      flightName: flight,
      departureDateTime: `${departureDate?.format(
        "YYYY-MM-DD"
      )}T${departureTime?.format("HH:mm:ss")}`,
      arrivalDateTime: `${arrivalDate?.format(
        "YYYY-MM-DD"
      )}T${arrivalTime?.format("HH:mm:ss")}`,
      source: sourceAirport?.name,
      destination: destinationAirport?.name,
      status,
    };

    mutation.mutate(flightSchedule, {
      onSuccess: () => {
        // Optionally, you can reset the form or show a success message here
        console.log("Flight schedule added successfully");
      },
      onError: (error) => {
        // Handle error case
        console.error("Error adding flight schedule:", error);
      },
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography sx={{ marginBottom: 2 }} variant='h4'>
            Add New Schedule
          </Typography>
          <Autocomplete
            fullWidth
            options={
              ["Flight 101", "Flight 202"] /* Your flight options here */
            }
            getOptionLabel={(option) => option}
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
            options={airports}
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
            options={airports}
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
            disabled={mutation.isLoading} // Disable the button while loading
          >
            {mutation.isLoading ? "Adding..." : "Add New Flight Schedule"}
          </Button>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}
