import React from "react"
import { Stack, Typography, Button } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import { useNavigate } from "react-router-dom"
import { colors } from "../../utils/colors"

const AdminCard = ({ id, username }) => {
  return (
    <>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        spacing={2}
        bgcolor={colors.cardBackground}
        borderRadius={2}
        padding={2}
      >
        <Typography variant='h6'>{username}</Typography>
        <Button variant='outlined' color='primary'>
          Delete
        </Button>
      </Stack>
    </>
  )
}

const ManageAdmins = () => {
  const navigate = useNavigate()
  const admins = [
    {
      id: 1,
      username: "rusiru",
    },
    {
      id: 1,
      username: "rusiru",
    },
    {
      id: 1,
      username: "rusiru",
    },
  ]

  return (
    <>
      <Stack spacing={2}>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          spacing={2}
        >
          <Typography variant='h4'>Manage Admins</Typography>
          <Button
            onClick={() => navigate("/admin/addSchedule")}
            startIcon={<AddIcon />}
            variant='contained'
            color='primary'
          >
            Add New Admin
          </Button>
        </Stack>
        {admins.map((admin) => (
          <AdminCard key={admin.id} id={admin.id} username={admin.username} />
        ))}
      </Stack>
    </>
  )
}

export default ManageAdmins
