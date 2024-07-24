import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminHome = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth='md'>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "50vh",
          textAlign: "center",
        }}
      >
        <Typography variant='h3' component='h1' sx={{ marginBottom: 4 }}>
          Admin Home
        </Typography>
        <Stack direction='row' spacing={2} sx={{ justifyContent: "center" }}>
          <Button
            onClick={() => navigate("/admin/manageFlights")}
            variant='contained'
            color='primary'
            size='large'
          >
            Manage Flights
          </Button>
          <Button
            onClick={() => navigate("/admin/schedule")}
            variant='contained'
            color='secondary'
            size='large'
          >
            Manage Schedules
          </Button>
          <Button
            onClick={() => navigate("/admin/manageAdmins")}
            variant='contained'
            color='error'
            size='large'
          >
            Manage Admins
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default AdminHome;
