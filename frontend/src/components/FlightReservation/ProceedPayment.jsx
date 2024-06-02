import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import RemoveIcon from '@mui/icons-material/Remove';
import {
    Autocomplete, Box,
    Button,
    Grid,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import {colors} from "../../utils/colors.js";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import {useSelector} from "react-redux";
import {useAddReservation} from "../../hooks/seatreserve.js";

const ProceedPayment = () => {
    const navigate  = useNavigate();
    const cardOption = ["CREDIT CARD", "DEBIT CARD"]

    const [expiryDate, setExpiryDate] = React.useState(null)
    const [cardType, setCardType] = React.useState("")
    const [cardNumber, setCardNumber] = React.useState("")
    const [csv, setCsv] = React.useState("")
    const selectedSeatIds = useSelector((state) => state.seats.selectedSeatIds);
    const {mutate: addReservationMutate} = useAddReservation()
    const handlePayment = () => {
        console.log(cardType)
        console.log(cardNumber)
        console.log(csv)
        console.log(expiryDate)
        handleAddReservation()
        // selectedSeatIds.forEach((seatId) => {
        //     handleAddReservation(seatId)
        // })
        // navigate("/reservation/payment-success")
    }

    const handleAddReservation = () => {
        const newReservation = {
            customerId: 12345,
            scheduleId:12345,
            flightId:12345,
            seatId:1,
            paymentId:12345
        }

        addReservationMutate(newReservation, {
            onSuccess: () => {
                toast("✅ Reservation(s) added successfully")
                navigate("/reservation/payment-success")

            },
            onError: (error) => {
                toast("😵 Error adding reservation: " + error.message)
            },
        })
    }

    function clearFields() {
        setCardType('')
        setExpiryDate(null)
    }

    return (
        <>
        <Typography sx={{ marginBottom: 2 }} variant='h4'>
            Payment Configuration
        </Typography>
        <Box width={'50%'} marginLeft={'auto'} marginRight={'auto'} borderRadius={'1em'}
             backgroundColor={colors.cardGreyBackground}
             padding={'3em'}
        >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={2}>
                <Grid item xs={12}>

                    <Typography sx={{ marginBottom: 2 }} variant='h5' >
                        Add you card details to proceed payment
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        select
                        fullWidth={true}
                        label='Card Type'
                        value={cardType}
                        onChange={(event) => setCardType(event.target.value)}
                    >
                        {cardOption.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                        <TextField
                            value={cardNumber}
                            onChange={(event) => setCardNumber(event.target.value)}
                            fullWidth label='Card Number' />
                    </Grid>
                <Grid item xs={12}>
                    <TextField
                        value={csv}
                        onChange={(event) => setCsv(event.target.value)}
                        fullWidth label='CSV' />
                </Grid>
                <Grid item xs={6}>
                    <DatePicker
                        label='Expiry Date'
                        value={expiryDate}
                        fullWidth={true}
                        onChange={(newValue) => setExpiryDate(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Grid>
                <Grid item xs={12} justifySelf={"flex-end"}>
                    <Button
                        variant='contained'
                        color='inherit'
                        onClick={clearFields}
                        startIcon={<RemoveIcon/>}
                    >
                        cancel
                    </Button>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={handlePayment}
                        startIcon={<AddIcon />}
                    >
                        Checkout
                    </Button>
                </Grid>
            </Grid>
        </LocalizationProvider>
        </Box>
            </>
    )
}

export default ProceedPayment