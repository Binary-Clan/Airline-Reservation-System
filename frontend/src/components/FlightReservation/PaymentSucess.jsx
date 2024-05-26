import {Box, Stack, Typography} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FlightIcon from '@mui/icons-material/Flight';
import {colors} from "../../utils/colors.js";
import Deck from "./Deck.jsx";
import React from "react";
const paymentSucess = () => {
    return (
        <>
        <Box
            textAlign={"center"}
            padding={'2em'}
            margin={'2em'}
            borderRadius={'1em'}
            backgroundColor={colors.cardGreyBackground}
            width={'60%'}
            marginLeft={'auto'}
            marginRight={'auto'}
        >
            <CheckCircleIcon color={"info"} fontSize={"large"} width={'8em'} />
            <Typography variant={"h4"}>Payment Success</Typography>
            <Typography variant={"h4"}>Thank You For Selecting Us</Typography>
            <Typography variant={"h4"}>Have a Safe Flight <FlightIcon/></Typography>
        </Box>
    <Typography variant="h4" gutterBottom>
        Your Seat Selection
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
        <Typography variant="body" gutterBottom >
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
            <Deck rows={30} cols={6} />
        </Box>
        <Typography variant="body1" gutterBottom>
            End
        </Typography>
            </Stack>
    </>
    )
}

export default paymentSucess