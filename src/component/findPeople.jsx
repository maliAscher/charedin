import React, { useState } from 'react';

export default function findPeople() {
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
        <div>
            <div>
                <label htmlFor="fieldSelect">Select Field:</label>
                <select id="fieldSelect" value={selectedField} onChange={handleFieldChange}>
                    <option value="">Select a field</option>
                    <option value="name">Name</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                </select>
            </div>
            <div>
                <label htmlFor="searchInput">Search Query:</label>
                <input
                    id="searchInput"
                    type="text"
                    value={searchQuery}
                    onChange={handleQueryChange}
                />
            </div>
            <div>
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
}

