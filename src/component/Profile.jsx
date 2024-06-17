
import React, { useState } from 'react';
import { Container, Box, Typography, Button, Card, CardContent } from '@mui/material';
import profileImage from './icon-HomePage.jpg';
import RecommendationDialog from './RecommendationDialog'; // Import the RecommendationDialog component

const Profile = () => {
  const [openDialog, setOpenDialog] = useState(false);

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
          יעל יצחקי
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
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
              ...תוכן אודות יעל יצחקי
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
              נתונים שמראים את הקשר ביניהם...
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
            <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleDialogOpen}>
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
