import * as React from "react"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import {
  Autocomplete,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import { useAddFlight } from "../../hooks/flight"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const flightTypeOptions = ["Local", "Commercial", "Seaways", "Private"]
const seatTypeOptions = ["Economy", "Business"]

export default function AddFlight() {
  const [airline, setAirline] = React.useState(null)
  const [flightName, setFlightName] = React.useState(null)
  const [capacity, setCapacity] = React.useState(null)
  const [flightType, setFlightType] = React.useState(null)
  const [seatType, setSeatType] = React.useState(null)
  const [maxWeightForPassenger, setMaxWeightForPassenger] = React.useState(null)

  const { mutate: flightMutation } = useAddFlight()
  const navigate = useNavigate()

  const handleAddFlight = () => {
    const newFlight = {
      airlineService: airline,
      flightName: flightName,
      capacity: parseInt(capacity, 10),
      flightType: flightType,
      seatType: seatType,
      maximumWeightForPassenger: parseFloat(maxWeightForPassenger),
    }

    flightMutation(newFlight, {
      onSuccess: () => {
        toast("✅ Flight added successfully")
        setAirline(null)
        setFlightName("")
        setCapacity("")
        setFlightType(null)
        setSeatType(null)
        setMaxWeightForPassenger("")
        navigate("/admin/manageFlights")
      },
      onError: (error) => {
        toast("😵 Error adding flight: " + error.message)
      },
    })
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography sx={{ marginBottom: 2 }} variant='h4'>
            Add New Flight
          </Typography>
          <Autocomplete
            fullWidth
            options={["ABC", "CDF"] /* Your flight options here */}
            getOptionLabel={(option) => option}
            value={airline}
            onChange={(event, newValue) => setAirline(newValue)}
            renderInput={(params) => (
              <TextField {...params} label='Select Airline Service' />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label='Enter Flight Name'
            value={flightName}
            onChange={(event) => setFlightName(event.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label='Enter Flight Capacity of People'
            value={capacity}
            onChange={(event) => setCapacity(event.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            select
            fullWidth
            label='Select Flight Type'
            value={flightType}
            onChange={(event) => setFlightType(event.target.value)}
          >
            {flightTypeOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            select
            fullWidth
            label='Select Seat Type'
            value={seatType}
            onChange={(event) => setSeatType(event.target.value)}
          >
            {seatTypeOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label='Enter Maximum Weight Capacity per Person'
            value={maxWeightForPassenger}
            onChange={(event) => setMaxWeightForPassenger(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant='contained'
            color='primary'
            onClick={handleAddFlight}
            startIcon={<AddIcon />}
          >
            Add New Flight
          </Button>
        </Grid>
      </Grid>
    </LocalizationProvider>
  )
}
