import { Stack, Button } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='center'
      spacing={2}
      height={"70vh"}
    >
      <img width={800} src={logo} alt='' srcset='' />
      <Stack spacing={2} direction='row'>
        <Button
          onClick={() => navigate("/reservation/flightsList")}
          variant='contained'
          color='primary'
        >
          Book a flight
        </Button>
        <Button variant='outlined' color='primary'>
          Flight Schedule
        </Button>
      </Stack>
    </Stack>
  );
};
export default HomePage;
