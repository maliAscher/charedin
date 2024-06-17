import React, { useState } from 'react';
import { Container, Box, Typography, Button, Card, CardContent } from '@mui/material';
import profileImage from './icon-HomePage.jpg';
import RecommendationDialog from './RecommendationDialog'; // Import the RecommendationDialog component
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom

const Profile = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const location = useLocation();
  const { state: { user } } = location;

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="md">
      <Box textAlign="center" mt={4}>
        <img src={profileImage} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%', border: '5px solid white' }} />
        <Typography variant="h4" component="h1" gutterBottom>
          {user.firstName} {user.lastName}
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2, bgcolor: '#5753c9' }}>
          + הוסיפי כחברה
        </Button>
      </Box>

      <Box textAlign="right" my={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              אודות
            </Typography>
            <Typography variant="body1">
              {user.about}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box textAlign="right" my={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom className='textRtl'>
              מה הקשר ביניהם
            </Typography>
            <Typography variant="body1" className='textRtl'>
              ...נתונים שמראים את הקשר ביניהם
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box textAlign="right" my={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              המלצות
            </Typography>
            <Typography variant="body1" className='textRtl'>
              כאן יופיעו ההמלצות...
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2, bgcolor: '#5753c9' }} onClick={handleDialogOpen}>
              הוספת המלצה
            </Button>
          </CardContent>
        </Card>
      </Box>

      {/* Include RecommendationDialog component */}
      <RecommendationDialog open={openDialog} handleClose={handleDialogClose} />
    </Container>
  );
};

export default Profile;
