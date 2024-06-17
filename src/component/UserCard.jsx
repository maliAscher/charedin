import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

const UserCard = ({ user }) => {
  const connections = ['למדתם ביחד בסמינר', 'חברה שלך ממליצה עליה', 'אתם מאותו עיר', 'למדתם ביחד בסמינר', 'חברה שלך ממליצה עליה', 'אתם מאותו עיר', 'למדתם ביחד בסמינר', 'חברה שלך ממליצה עליה', 'אתם מאותו עיר']
  const navigate = useNavigate();

  const profilePicture = user.profilePicture ? (
    <CardMedia
      component='img'
      image={user.profilePicture}
      alt={`${user.name}'s profile picture`}
      sx={{ width: 80, height: 80, borderRadius: '50%' }} // שינוי כאן
    />
  ) : (
    <PersonIcon sx={{ width: 80, height: 80, borderRadius: '50%', bgcolor: '#ccc', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 32 }} /> // שינוי כאן
  );

  return (
    <Card
      sx={{ maxWidth: 300, textAlign: 'center', direction: 'rtl', mx: 'auto' }}
      onClick={() => navigate('/Profile')}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        {profilePicture}
      </Box>
      <CardContent>
        <Typography gutterBottom variant='h6' component='div'>
          {user.firstName} {user.lastName}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {user.about}
        </Typography>
        <Box mt={2}>
          <Typography variant='body2' color='text.primary'>
            {connections[user.id]}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCard;
