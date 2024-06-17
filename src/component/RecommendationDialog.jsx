import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const RecommendationDialog = ({ open, handleClose }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        const email = formJson.email;
        console.log(email);
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <DialogTitle textAlign="right">הוספת המלצה</DialogTitle>
            <DialogContent>

                <TextField
                    inputProps={{
                        style: { textAlign: 'right' }
                    }}
                    autoFocus
                    required
                    margin="dense"
                    type="text"
                    fullWidth
                    variant="standard"
                />

            </DialogContent>
            <DialogActions sx={{ justifyContent: 'flex-start' }}>
                <Button onClick={handleClose}>ביטול</Button>
                <Button type="submit" onClick={handleSubmit} color="primary" sx={{ bgcolor: '#5753c9' }}>
                    הוספה
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default RecommendationDialog;
