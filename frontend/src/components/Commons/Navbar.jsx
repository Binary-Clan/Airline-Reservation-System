import { Stack, Button } from "@mui/material"
import logo from "../../assets/logo.png"

const Navbar = () => {
  const navBarItems = []

  return (
    <>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        spacing={2}
        padding={4}
      >
        <img width={300} src={logo} alt='' srcset='' />

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
