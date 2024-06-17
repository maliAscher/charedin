import React from 'react';
import './HomePage.css'
import profileImage from './component/icon-HomePage.jpg'; // וודא שהתמונה במיקום הנכון בפרויקט שלך

function HomePage() {
  return (
    // <div className="container">
    //   <div className="text">
    //     <h1>Welcome to my Web Development Portfolio!</h1>
    //     <p>
    //       I'm Lily Smith, a passionate web developer based in USA. Here, you'll get a glimpse of my journey in the world of web development, where creativity meets functionality.
    //     </p>
    //     <a href="/terms">Read my Terms and Conditions</a>
    //   </div>
    //   <div className="image">
    //     <img src={profileImage} alt="Lily Smith" />
    //   </div>
    // </div>
    <div className="container">
      <div className="image">
        <img src={profileImage} alt="Lily Smith" />
      </div>
      <div className="text">
        <h1>ברוכים הבאים!!</h1>
        <p>
          היכנסו לעולם החדש של נטוורקינג מקצועי.

          NetConnect הוא הפלטפורמה המושלמת לחיבור עם אנשי מקצוע, יזמים ובעלי עסקים מכל התחומים. כאן תוכלו להרחיב את הרשת שלכם, לשתף פעולה בפרויקטים ולהגיע להזדמנויות עסקיות חדשות.

          התחילו את המסע שלכם:

          צרו פרופיל מקצועי - הציגו את הכישורים, הניסיון וההישגים שלכם בצורה מרשימה.
          התחברו עם אנשי מקצוע - גלו אנשי קשר חדשים לפי תחום עניין, תעשייה או מיקום גיאוגרפי.
          השתתפו באירועים מקוונים - הצטרפו לוובינרים, סדנאות ואירועים המאפשרים למידה והתקשרות עם מומחים בתעשייה.
          שפרו את הקריירה שלכם - התעדכנו בהזדמנויות עבודה חדשות ופתחו דלתות לקריירה הבאה שלכם.
          הצטרפו עכשיו וגלו את הכוח של נטוורקינג אפקטיבי!
        </p>

        {/* <a href="/signUp">כניסה</a> */}
        <button>כניסה</button>
      </div>
    </div>
  );
}

export default HomePage;
