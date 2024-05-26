import {Box, Typography} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FlightIcon from '@mui/icons-material/Flight';
import {colors} from "../../utils/colors.js";
const paymentSucess = () => {
    return (
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
            <Typography variant={"h4"}>Payment Sucess</Typography>
            <Typography variant={"h4"}>Thank You For Selecting Us</Typography>
            <Typography variant={"h4"}>Have a Safe Flight <FlightIcon/></Typography>
        </Box>
    )
}

export default paymentSucess