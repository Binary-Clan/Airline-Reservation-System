import {Button, Stack, Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add.js";
import SelectedSeatInfoTable from "../FlightReservation/SelectedSeatInfoTable.jsx";
import React from "react";
import {useNavigate} from "react-router-dom";

const SelectedSeatInformation = () => {

    const navigate = useNavigate();
    return (
        <>
            <Stack spacing={2}>
                <Stack
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                    spacing={2}
                >
                    <Typography variant='h4'>Selected Seat Information</Typography>
                    <Button
                        onClick={() => navigate("/reservation/payment")}
                        startIcon={<AddIcon />}
                        variant='contained'
                        color='primary'
                    >
                        Add Payment Details
                    </Button>
                </Stack>
                <SelectedSeatInfoTable />
            </Stack>
        </>
    )
}

export default SelectedSeatInformation