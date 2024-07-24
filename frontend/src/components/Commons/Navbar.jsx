import { Stack, Button, Avatar, IconButton } from "@mui/material";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { blue, deepOrange } from "@mui/material/colors";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const Navbar = () => {
  const navBarItems = [];
  const navigate = useNavigate();

  return (
    <>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        spacing={2}
        paddingX={4}
        paddingY={2}
      >
        <Link to={"/"}>
          <img width={300} src={logo} alt='' srcset='' />
        </Link>
        <Stack
          direction='row'
          justifyContent='flex-end'
          alignItems='center'
          spacing={2}
        >
          <Button variant='contained' color='primary'>
            Checkout your seat
          </Button>
          {/* <Button variant='contained' color='primary'>
            Login
          </Button>
          <Button variant='contained' color='primary'>
            Register
          </Button> */}
          <Avatar
            onClick={() => navigate("/user/userProfile")}
            sx={{ bgcolor: blue[500] }}
          >
            NS
          </Avatar>
          <IconButton onClick={() => navigate("/admin/home")}>
            <AdminPanelSettingsIcon />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
};

export default Navbar;
