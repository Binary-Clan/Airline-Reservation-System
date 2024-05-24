import React from "react"
import AdminFlightScheduleTable from "./AdminFlightScheduleTable"
import { Stack, Typography, Button } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"

const AdminFlightSchedule = () => {
  return (
    <>
      <Stack spacing={2}>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          spacing={2}
        >
          <Typography variant='h4'>Flight Schedule</Typography>
          <Button startIcon={<AddIcon />} variant='contained' color='primary'>
            Add New Schedule
          </Button>
        </Stack>
        <AdminFlightScheduleTable />
      </Stack>
    </>
  )
}

export default AdminFlightSchedule
