import React, { useState } from "react";
import {
  Stack,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { colors } from "../../utils/colors";

const AdminCard = ({ id, username, onDelete }) => {
  return (
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
      <Button variant='outlined' color='primary' onClick={() => onDelete(id)}>
        Delete
      </Button>
    </Stack>
  );
};

const ManageAdmins = () => {
  const navigate = useNavigate();
  const [admins, setAdmins] = useState([
    {
      id: 1,
      username: "rusiru",
    },
    {
      id: 2,
      username: "john_doe",
    },
    {
      id: 3,
      username: "jane_smith",
    },
  ]);

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedAdminId, setSelectedAdminId] = useState(null);

  const handleDeleteClick = (id) => {
    setSelectedAdminId(id);
    setIsDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    setAdmins((prevAdmins) =>
      prevAdmins.filter((admin) => admin.id !== selectedAdminId)
    );
    setIsDeleteDialogOpen(false);
    setSelectedAdminId(null);
  };

  const handleCloseDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
    setSelectedAdminId(null);
  };

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
            onClick={() => navigate("/admin/addAdmin")}
            startIcon={<AddIcon />}
            variant='contained'
            color='primary'
          >
            Add New Admin
          </Button>
        </Stack>
        {admins.map((admin) => (
          <AdminCard
            key={admin.id}
            id={admin.id}
            username={admin.username}
            onDelete={handleDeleteClick}
          />
        ))}
      </Stack>

      <Dialog open={isDeleteDialogOpen} onClose={handleCloseDeleteDialog}>
        <DialogTitle>{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this admin?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color='error' autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ManageAdmins;
