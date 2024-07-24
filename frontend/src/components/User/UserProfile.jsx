import React, { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button, Grid, TextField, Typography } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { getUser, updateUser } from "../../services/user";

export default function UserProfile() {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [nic, setNic] = useState("");
  const [passportId, setPassportId] = useState("");
  const [country, setCountry] = useState("");
  const [birthDay, setBirthDay] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  // Fetch user data from API on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUser();
        setUserName(userData.username || "");
        setFirstName(userData.firstName || "");
        setLastName(userData.lastName || "");
        setFullName(userData.fullName || "");
        setNic(userData.nic || "");
        setPassportId(userData.passportId || "");
        setCountry(userData.country || "");
        setBirthDay(userData.birthDay ? dayjs(userData.birthDay) : null);
        setPhoneNumber(userData.phoneNumber || "");
        setEmail(userData.email || "");
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleSaveUserProfile = async () => {
    try {
      await updateUser({
        username: userName,
        firstName,
        lastName,
        fullName,
        nic,
        passportId,
        country,
        birthDay: birthDay?.toISOString(),
        phoneNumber,
        email,
      });
      // You might want to show a success message here
      console.log("Profile updated successfully");
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
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
