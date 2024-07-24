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
import { useGetAdmins, useDeleteAdmin } from "../../hooks/admins";

const AdminCard = ({ id, username, onDelete }) => {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      spacing={2}
      bgcolor='background.paper'
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
  const [selectedAdminId, setSelectedAdminId] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const { data: admins, isLoading, isError, error } = useGetAdmins();
  const deleteAdminMutation = useDeleteAdmin();

  const handleDeleteClick = (id) => {
    setSelectedAdminId(id);
    setIsDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedAdminId) {
      deleteAdminMutation.mutate(selectedAdminId);
      setIsDeleteDialogOpen(false);
      setSelectedAdminId(null);
    }
  };

  const handleCloseDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
    setSelectedAdminId(null);
  };

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error: {error.message}</Typography>;

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
