import React from "react"
import AdminFlightScheduleTable from "./AdminFlightScheduleTable"
import { Stack, Typography, Button } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import { useNavigate } from "react-router-dom"
import FlightsTable from "./FlightsTable.jsx";

const ManageFlights = () => {
    const navigate = useNavigate()

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
