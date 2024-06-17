import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const UserCard = ({ user }) => {
  return (
    <Card
      sx={{ maxWidth: 300, textAlign: 'center', direction: 'rtl', mx: 'auto' }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <CardMedia
          component='img'
          image={user.profilePicture}
          alt={`${user.name}'s profile picture`}
          sx={{ width: 100, height: 100, borderRadius: '50%' }}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant='h6' component='div'>
          {user.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {user.title}
        </Typography>
        <Box mt={2}>
          <Typography variant='body2' color='text.primary'>
            {user.connectionDescription}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCard;
