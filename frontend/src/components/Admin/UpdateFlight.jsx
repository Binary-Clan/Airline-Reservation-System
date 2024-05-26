import * as React from "react"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import {
  Button,
  CircularProgress,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material"
import SaveIcon from "@mui/icons-material/Save"
import { useGetFlight, useUpdateFlight } from "../../hooks/flight"
import toast from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"

const flightTypeOptions = ["Local", "Commercial", "Seaways", "Private"]
const seatTypeOptions = ["Economy", "Business"]

export default function UpdateFlight() {
  const { flightId } = useParams()
  const navigate = useNavigate()

  const { data: flightData, isLoading } = useGetFlight(flightId)
  const { mutate: updateFlightMutation } = useUpdateFlight()

  const [airline, setAirline] = React.useState("")
  const [flightName, setFlightName] = React.useState("")
  const [capacity, setCapacity] = React.useState("")
  const [flightType, setFlightType] = React.useState("")
  const [seatType, setSeatType] = React.useState("")
  const [maxWeightForPassenger, setMaxWeightForPassenger] = React.useState("")

  React.useEffect(() => {
    if (flightData) {
      console.log("inside use effect")
      setAirline(flightData.airlineService)
      setFlightName(flightData.flightName)
      setCapacity(flightData.capacity.toString())
      setFlightType(flightData.flightType)
      setSeatType(flightData.seatType)
      setMaxWeightForPassenger(flightData.maximumWeightForPassenger.toString())
    }
  }, [flightData])

  const handleUpdateFlight = () => {
    const updatedFlight = {
      airlineService: airline,
      flightName: flightName,
      capacity: parseInt(capacity, 10),
      flightType: flightType,
      seatType: seatType,
      maximumWeightForPassenger: parseFloat(maxWeightForPassenger),
    }

    updateFlightMutation(
      { id: flightId, updatedFlight },
      {
        onSuccess: () => {
          toast("✅ Flight updated successfully")
          navigate("/admin/manageFlights")
        },
        onError: (error) => {
          toast("😵 Error updating flight: " + error.message)
        },
      }
    )
  }

  if (isLoading) return <CircularProgress />

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography sx={{ marginBottom: 2 }} variant='h4'>
            Update Flight
          </Typography>
          <TextField
            fullWidth
            label='Select Airline Service'
            value={airline}
            onChange={(event) => setAirline(event.target.value)}
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
            onClick={handleUpdateFlight}
            startIcon={<SaveIcon />}
          >
            Update Flight
          </Button>
        </Grid>
      </Grid>
    </LocalizationProvider>
  )
}
