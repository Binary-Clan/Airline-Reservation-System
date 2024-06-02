import {Box, Button, Stack, Typography} from "@mui/material";
import React, {useState} from "react";
import {colors} from "../../utils/colors.js";
import Deck from "./Deck.jsx";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setSelectedSeatIds} from "../../../Redux/seatslice.js";

const SelectSeat = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [selectedSeats, setSelectedSeats] = useState([])
    const handleSeatSelection = (seats)=>{
        setSelectedSeats(seats)
        console.log(seats);
    }

    const handleProceedCheckout = ()=>{
        dispatch(setSelectedSeatIds(selectedSeats))
        navigate('/reservation/seat-info')
    }
    return (
        <Stack
            direction='column'
            spacing={2}
        >
            <Typography
                display={'flex'}
                fontSize={24}
                justifyContent={'start'}
                fontWeight={'bold'}
                padding={1}>
                Reservations for the Flight from Sri Lanka to Dubai
            </Typography>
            <Stack spacing={2} direction='row' justifyContent='start'>

                <Box
                    display='block'
                    alignContent={'center'}
                    width='20em'
                    height='10em'
                    borderRadius={'1em'}
                    bgcolor={colors.cardGreyBackground}

                >
                    <Typography
                        display={'flex'}
                        fontSize={24}
                        justifyContent={'center'}
                        padding={1}
                    >
                        Flight Name
                    </Typography>
                    <Typography
                        display={'flex'}
                        fontSize={24}
                        justifyContent={'center'}
                        padding={1}
                    >
                        Ax5C
                    </Typography>
                    <Typography
                        display={'flex'}
                        fontSize={18}
                        justifyContent={'center'}
                        padding={1}
                    >
                        Sri Lankan Air Line
                    </Typography>

                </Box>

                <Box
                    display='block'
                    alignContent={'center'}
                    width='20em'
                    height='10em'
                    borderRadius={'1em'}
                    bgcolor={colors.cardGreyBackground}

                >
                    <Typography
                        display={'flex'}
                        fontSize={24}
                        justifyContent={'center'}
                        padding={1}
                    >
                        Remaining Seats
                    </Typography>
                    <Typography
                        display={'flex'}
                        fontSize={24}
                        justifyContent={'center'}
                        padding={1}
                    >
                        20
                    </Typography>
                    <Typography
                        display={'flex'}
                        fontSize={18}
                        justifyContent={'center'}
                        padding={1}
                    >
                        Out of 80
                    </Typography>
                </Box>
            </Stack>
            <Typography
                display={'flex'}
                fontSize={24}
                justifyContent={'start'}
                fontWeight={'bold'}
                padding={1}>
                Seat Arrangement
            </Typography>

            <Stack sx={{ textAlign: 'center', padding: 2 ,
                // background:colors.cardGreyBackground,
                borderRadius: '1em'
            }}
                   justifyContent={'center'}
                   justifyItems={'center'}
                   justifySelf={'center'}
                   direction={'column'}
            >
                <Typography variant="h4" gutterBottom>
                    Airplane Seat Selection
                </Typography>
                <>
                    <Typography variant="body" gutterBottom>
                        Front
                    </Typography>

                    <Box
                        display='flex'
                        borderRadius={'40%'}
                        width={'40%'}
                        // height={'50vh'}
                        backgroundColor={colors.cardBackground}
                        justifyContent={'center'}
                        alignItems={'center'}
                        marginLeft={'auto'}
                        marginRight={'auto'}
                    >
                        <Deck
                            rows={30} cols={6}
                            onSeatSelection={handleSeatSelection}
                        />
                    </Box>
                    <Typography variant="body1" gutterBottom>
                        End
                    </Typography>
                </>
            </Stack>
            <stack spacing={2} direction='row' justifyContent='center'>
                <Button variant="contained" color={'primary'}
                        onClick={handleProceedCheckout}
                >
                    Proceed to Checkout
                </Button>
            </stack>

        </Stack>
    )
}

export default SelectSeat