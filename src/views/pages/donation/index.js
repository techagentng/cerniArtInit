import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import AppBar from 'ui-component/extended/AppBar';

const Donation = () => {
    return (
        <>
            <AppBar />
            <Container sx={{ paddingY: { xs: 5, md: 10 } }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h2" sx={{ mb: 3 }}>
                        Donation Page
                    </Typography>
                    <Typography variant="body1">
                        This page is under construction.
                    </Typography>
                </Box>
            </Container>
        </>
    );
};

export default Donation;
