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

const flightTypeOptions = ["Local", "Commercial", "Seaways", "Private"]
const seatTypeOptions = ["Economy", "Business"]


export default function AddFlight() {
    const [airline, setAirline] = React.useState(null)
    const [flightName, setFlightName] = React.useState(null)
    const [capacity, setCapacity] = React.useState(null)
    const [flightType, setFlightType] = React.useState(null)
    const [seatType, setSeatType] = React.useState(null)
    const [maxWeightForPassenger, setMaxWeightForPassenger] = React.useState(null)

    const handleAddFlight = () => {
        console.log("Airline:", airline)
        console.log("Flight Name:", flightName)
        console.log("Capacity:", capacity)
        console.log("Flight Type:", flightType)
        console.log("Seat Type:", seatType)
        console.log("Maximum weight for a person:", maxWeightForPassenger)
        // Additional logic to handle adding flight
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
                        options={[] /* Your flight options here */}
                        getOptionLabel={(option) => option.name}
                        value={airline}
                        onChange={(event, newValue) => setAirline(newValue)}
                        renderInput={(params) => (
                            <TextField {...params} label='Select Airline Service' />
                        )}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Autocomplete
                        fullWidth
                        options={[] /* Your source airport options here */}
                        getOptionLabel={(option) => option.name}
                        value={flightName}
                        onChange={(event, newValue) => setFlightName(newValue)}
                        renderInput={(params) => (
                            <TextField {...params} label='Select Flight Name' />
                        )}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        label="Enter Flight Capacity of People"
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
                        label="Enter Maximum Weight Capacity per Person"
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
