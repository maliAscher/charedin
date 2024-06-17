import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid } from '@mui/material';

export default function User({ name, email, phone }) {
    return (
        <Card style={{ margin: '10px' }}>
            <CardContent>
                <Grid container alignItems="center" spacing={2} direction="row-reverse">
                    <Grid item>
                        <Avatar>{name.charAt(0)}</Avatar>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5">{name}</Typography>
                        <Typography color="textSecondary">{email}</Typography>
                        <Typography color="textSecondary">{phone}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
