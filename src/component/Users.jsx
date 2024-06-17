import React, { useState } from 'react';
import { TextField, Button, MenuItem, Container, Grid, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import UserCard from './UserCard'; // assuming the file name is UserCard.js

export default function Users() {
    const [filters, setFilters] = useState([{ field: '', query: '' }]);

    const handleFieldChange = (index) => (event) => {
        const newFilters = [...filters];
        newFilters[index].field = event.target.value;
        setFilters(newFilters);
    };

    const handleQueryChange = (index) => (event) => {
        const newFilters = [...filters];
        newFilters[index].query = event.target.value;
        setFilters(newFilters);
    };

    const handleAddFilter = () => {
        setFilters([...filters, { field: '', query: '' }]);
    };

    const handleRemoveFilter = (index) => () => {
        const newFilters = [...filters];
        newFilters.splice(index, 1);
        setFilters(newFilters);
    };

    const handleSearch = () => {
        console.log('Searching in all filters:', filters);
        // Add search logic here
    };

    const combo = [
        "מזהה",
        "תמונה",
        "שם פרטי",
        "שם משפחה",
        "שם משפחה של אמא",
        "שנה",
        "אודות",
        "חברים",
        "מחפש",
        "קישורים",
        "המלצות",
        "מקום",
        "לימודים",
        "עבודה"
    ];

    const users = [{ id: 0, picture: "", firstName: "שירה", lastName: "כהן", momLastName: "עבדה", syna: "זכרון משה", year: 2002, gender: "f", about: "בעלת מוטיבציה גבוהה, יצירתית", freinds: [1], lookingFor: { work: true, worker: false }, links: ["https://github.com/"], recos: [{ recoId: "", txt: "עבדנו ביחד בהאקתון, היתה חוויה מדהימה." }], zerem: ["ליטאי", ""], place: ["חיפה", "ירושלים"], study: ["הסמינר החדש"], work: [{}] },
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
        <Container style={{ direction: 'rtl', textAlign: 'center', minHeight: '100vh', paddingTop: '20px' }}>
            <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ backgroundColor: '#ffffff', padding: '20px' }}>
                {filters.map((filter, index) => (
                    <Grid container item spacing={2} key={index}>
                        <Grid item>
                            <TextField
                                select
                                label="בחר שדה"
                                value={filter.field}
                                onChange={handleFieldChange(index)}
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
                                {combo.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item>
                            <TextField
                                label="שאילתת חיפוש"
                                value={filter.query}
                                onChange={handleQueryChange(index)}
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
                            <Button variant="contained" color="secondary" onClick={handleRemoveFilter(index)}>
                                מחק
                            </Button>
                        </Grid>
                    </Grid>
                ))}
                <Grid item>
                    <Button variant="contained" color="primary" onClick={handleAddFilter}>
                        הוסף פילטר
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={handleSearch}>
                        חפש
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: '20px' }}>
                {users.map((user) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
                        <UserCard user={user} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
