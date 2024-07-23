import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button, Grid, TextField, Typography } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

export default function UserProfile() {
  const [userName, setUserName] = React.useState("john_doe");
  const [firstName, setFirstName] = React.useState("John");
  const [lastName, setLastName] = React.useState("Doe");
  const [fullName, setFullName] = React.useState("John Doe");
  const [nic, setNic] = React.useState("123456789V");
  const [passportId, setPassportId] = React.useState("A12345678");
  const [country, setCountry] = React.useState("United States");
  const [birthDay, setBirthDay] = React.useState(null);
  const [phoneNumber, setPhoneNumber] = React.useState("+1234567890");
  const [email, setEmail] = React.useState("john.doe@example.com");

  const handleSaveUserProfile = () => {
    console.log("UserName:", userName);
    console.log("FirstName:", firstName);
    console.log("LastName:", lastName);
    console.log("FullName:", fullName);
    console.log("NIC:", nic);
    console.log("PassportId:", passportId);
    console.log("Country:", country);
    console.log("Birthday:", birthDay?.toISOString());
    console.log("PhoneNumber:", phoneNumber);
    console.log("Email:", email);
    // Additional logic to handle saving user profile
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography sx={{ marginBottom: 2 }} variant='h4'>
            User Profile
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Username'
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label='First Name'
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label='Last Name'
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Full Name'
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label='NIC'
            value={nic}
            onChange={(event) => setNic(event.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label='Passport ID'
            value={passportId}
            onChange={(event) => setPassportId(event.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label='Country'
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <DatePicker
            sx={{ width: "100%" }}
            label='Birthday'
            value={birthDay}
            onChange={(newValue) => setBirthDay(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label='Phone Number'
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label='Email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant='contained'
            color='primary'
            onClick={handleSaveUserProfile}
            startIcon={<SaveIcon />}
          >
            Save Profile
          </Button>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}
