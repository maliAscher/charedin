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
