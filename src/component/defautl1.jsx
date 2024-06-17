import React, { useState } from 'react';
import { TextField, Button, MenuItem, Container, Grid } from '@mui/material';

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
        console.log(`Searching for ${searchQuery} in field ${selectedField}`);
        // כאן ניתן להוסיף את הלוגיקה לחיפוש
    };

    return (
        <Container>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item>
                    <TextField
                        select
                        label="Select Field"
                        value={selectedField}
                        onChange={handleFieldChange}
                        variant="outlined"
                    >
                        <MenuItem value="name">Name</MenuItem>
                        <MenuItem value="email">Email</MenuItem>
                        <MenuItem value="phone">Phone</MenuItem>
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField
                        label="Search Query"
                        value={searchQuery}
                        onChange={handleQueryChange}
                        variant="outlined"
                    />
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={handleSearch}>
                        Search
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}
