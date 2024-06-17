import React, { useState } from 'react';
import { TextField, Button, MenuItem, Container, Grid, InputAdornment, Card, CardContent, Typography, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import User from './User'; // נניח שהקומפוננטה User נמצאת בקובץ נפרד

export default function Users() {
    const [selectedField, setSelectedField] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const handleFieldChange = (event) => {
        setSelectedField(event.target.value);
    };

    const handleQueryChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        console.log(`מחפש ${searchQuery} בשדה ${selectedField}`);
        // כאן ניתן להוסיף את הלוגיקה לחיפוש
    };

    const users = [
        { name: 'יוחנן כהן', email: 'yohanan.cohen@example.com', phone: '123-456-7890' },
        { name: 'יעל לוי', email: 'yael.levi@example.com', phone: '234-567-8901' },
        { name: 'מיכאל ישראלי', email: 'michael.israeli@example.com', phone: '345-678-9012' },
        { name: 'אליס בראון', email: 'alice.brown@example.com', phone: '456-789-0123' },
        { name: 'בועז וייט', email: 'boaz.white@example.com', phone: '567-890-1234' },
        { name: 'צחי ירוק', email: 'tzahi.green@example.com', phone: '678-901-2345' }
    ];
    const usersList = [
        { id: 0, picture: "", firstName: "שירה", lastName: "כהן", momLastName: "עבדה", syna: "זכרון משה", year: 2002, gender: "f", about: "בעלת מוטיבציה גבוהה, יצירתית", freinds: [1], lookingFor: { work: true, worker: false }, links: ["https://github.com/"], recos: [{ recoId: "", txt: "עבדנו ביחד בהאקתון, היתה חוויה מדהימה." }], zerem: ["ליטאי", ""], place: ["חיפה", "ירושלים"], study: ["הסמינר החדש"], work: [{}] },
        { id: 1, picture: "", firstName: "אפרת", lastName: "לוי", momLastName: "אפלבוים", syna: "בית ישראל", year: 2000, gender: "f", about: "מפתחת תוכנה מנוסה", freinds: [0], lookingFor: { work: false, worker: true }, links: ["https://github.com/"], recos: [{ recoId: 2, txt: "עובדת מסורה ביותר" }], zerem: ["ליטאי", ""], place: ["ירושלים"], study: ["האוניברסיטה הפתוחה", "הסמינר החדש"], work: [{ place: "Microsoft", job: "Program developer" }] },
        { id: 2, picture: "", firstName: "אביגיל", lastName: "עבדה", momLastName: "אברהמי", syna: "אהל ישראל", year: 1990, gender: "f", about: "מפתחת תוכנה יצירתית ומקצועית", freinds: [0, 1], lookingFor: { work: false, worker: true }, links: ["https://github.com/"], recos: [{ recoId: "", txt: "עובדת מסורה ביותר" }], zerem: ["ליטאי", ""], place: ["ירושלים"], study: ["האוניברסיטה הפתוחה", "הסמינר החדש"], work: [{ place: "Microsoft", job: "Program developer" }] },
        { id: 3, picture: "", firstName: "תמר", lastName: "פרידמן", momLastName: "כהן", syna: "בית ישראל", year: 2000, gender: "f", about: "מפתחת תוכנה מנוסה", freinds: [0], lookingFor: { work: false, worker: true }, links: ["https://github.com/"], recos: [{ recoId: "", txt: "עובדת מסורה ביותר" }], zerem: ["ליטאי", ""], place: ["ירושלים"], study: ["האוניברסיטה הפתוחה", "הסמינר החדש"], work: [{ place: "Microsoft", job: "Program developer" }] },
        { id: 4, picture: "", firstName: "איילה", lastName: "פרידמן", momLastName: "אפלבוים", syna: "בית ישראל", year: 2000, gender: "f", about: "מפתחת תוכנה מנוסה", freinds: [0], lookingFor: { work: false, worker: true }, links: ["https://github.com/"], recos: [{ recoId: "", txt: "עובדת מסורה ביותר" }], zerem: ["ליטאי", ""], place: ["ירושלים"], study: ["האוניברסיטה הפתוחה", "הסמינר החדש"], work: [{ place: "Microsoft", job: "Program developer" }] },
        { id: 5, picture: "", firstName: "שרה", lastName: "כהנא", momLastName: "מזרחי", syna: "בית ישראל", year: 2000, gender: "f", about: "מפתחת תוכנה מנוסה", freinds: [0], lookingFor: { work: false, worker: true }, links: ["https://github.com/"], recos: [{ recoId: "", txt: "עובדת מסורה ביותר" }], zerem: ["ליטאי", ""], place: ["ירושלים"], study: ["האוניברסיטה הפתוחה", "הסמינר החדש"], work: [{ place: "Microsoft", job: "Program developer" }] },
        { id: 6, picture: "", firstName: "אסתר", lastName: "פרץ", momLastName: "אפלבוים", syna: "בית ישראל", year: 2000, gender: "f", about: "מפתחת תוכנה מנוסה", freinds: [0], lookingFor: { work: false, worker: true }, links: ["https://github.com/"], recos: [{ recoId: "", txt: "עובדת מסורה ביותר" }], zerem: ["ליטאי", ""], place: ["ירושלים"], study: ["האוניברסיטה הפתוחה", "הסמינר החדש"], work: [{ place: "Microsoft", job: "Program developer" }] },
        { id: 7, picture: "", firstName: "חיה", lastName: "דהן", momLastName: "לוי", syna: "בית ישראל", year: 2000, gender: "f", about: "מפתחת תוכנה מנוסה", freinds: [0], lookingFor: { work: false, worker: true }, links: ["https://github.com/"], recos: [{ recoId: "", txt: "עובדת מסורה ביותר" }], zerem: ["ליטאי", ""], place: ["ירושלים"], study: ["האוניברסיטה הפתוחה", "הסמינר החדש"], work: [{ place: "Microsoft", job: "Program developer" }] },
        { id: 8, picture: "", firstName: "יעל", lastName: "אברהמי", momLastName: "כהנא", syna: "בית ישראל", year: 2000, gender: "f", about: "מפתחת תוכנה מנוסה", freinds: [0], lookingFor: { work: false, worker: true }, links: ["https://github.com/"], recos: [{ recoId: "", txt: "עובדת מסורה ביותר" }], zerem: ["ליטאי", ""], place: ["ירושלים"], study: ["האוניברסיטה הפתוחה", "הסמינר החדש"], work: [{ place: "Microsoft", job: "Program developer" }] },
    ]


    return (
        <Container style={{ direction: 'rtl' }}>
            <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ marginTop: '20px' }}>
                <Grid item>
                    <TextField
                        select
                        label="בחר שדה"
                        value={selectedField}
                        onChange={handleFieldChange}
                        variant="outlined"
                        style={{ width: 200 }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            ),
                        }}
                    >
                        <MenuItem value="name">שם</MenuItem>
                        <MenuItem value="email">אימייל</MenuItem>
                        <MenuItem value="phone">טלפון</MenuItem>
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField
                        label="שאילתת חיפוש"
                        value={searchQuery}
                        onChange={handleQueryChange}
                        variant="outlined"
                        style={{ width: 300 }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={handleSearch}>
                        חפש
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: '20px' }}>
                {users.map((user, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <User name={user.name} email={user.email} phone={user.phone} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
