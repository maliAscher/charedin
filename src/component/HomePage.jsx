//import './HomePage.css';
import profileImage from './icon-HomePage.jpg';
import { useNavigate } from 'react-router-dom';

  

function HomePage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    
    navigate('/login');
  };

  return (
    <div className='container'>
      <div className='image'>
        <img src={profileImage} alt='Lily Smith' />
      </div>
      <div className='text'>
        <h1>ברוכים הבאים</h1>
        <p>
          רוצים להכיר אנשים חדשים מהחברה החרדית? להתחבר עם ידידים ישנים? או אולי
          למצוא משרה חדשה?
          <br />
          הצטרפו אל CharedIn רשת הנטוורקינג של החברה החרדית!
          <br />
          בCharedIn תוכלו להיות חלק מקהילה תוססת של אנשים מהחברה החרדית.
          <br />
          רשת הנטוורקינג שלנו מאפשרת לכם לחפש חברים, להתחבר עם מכרים ולמצוא
          הזדמנויות תעסוקה מעניינות.
        </p>

        <button onClick={handleSubmit}>כניסה</button>
      </div>
    </div>
  );
}

export default HomePage;
