import { Stack, Button } from "@mui/material"
import logo from "../../assets/logo.png"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  const navBarItems = []
  const navigate = useNavigate()

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
            Login
          </Button>
          <Button variant='contained' color='primary'>
            Register
          </Button>
        </Stack>
      </Stack>
    </>
  )
}

export default Navbar
