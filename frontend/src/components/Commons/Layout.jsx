import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import { Box } from "@mui/material"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box padding={4}>
        <Outlet />
      </Box>
    </>
  )
}

export default Layout
