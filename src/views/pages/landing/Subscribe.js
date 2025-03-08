import { Button, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFormOpen } from 'store/slices/cartslice'; // Adjust the path based on your project structure
import FadeInWhenVisible from './Animation2';

const Jumbo = styled(Paper)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A4833',
    margin: '0 auto',
    width: '100%',
    height: 'auto',
    borderRadius: '20px'
});

const ButtonSX = {
    borderRadius: 2,
    backgroundColor: '#ff6b77',
    color: 'white',
    padding: '12px 130px', // Increased padding for longer buttons
    width: '100%', // Increased from 80% to 90% for longer width
    marginTop: '20px'
};

const Subscribe = () => {
    const dispatch = useDispatch();

    const handleFormClick = () => {
        dispatch(setFormOpen(true));
    };

    return (
        <Container sx={{ paddingY: 15 }}>
            <FadeInWhenVisible animationType="fadeIn" delay={0.3}>
                <Jumbo sx={{ paddingX: { xs: 5, md: 15 }, paddingY: 15 }} elevation={2}>
                    <Grid container spacing={5} sx={{ alignItems: 'center' }} direction={{ xs: 'column', md: 'row' }}>
                        <Grid item xs={12} md={12} sx={{ marginTop: { xs: '20px', md: '1px' } }}>
                            <Stack spacing={2} alignItems="center">
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontSize: { xs: '1.5rem', sm: '2.125rem' },
                                        mb: 2,
                                        textAlign: 'center', // Centralized text for all sizes
                                        color: 'white',
                                        width: '100%'
                                    }}
                                >
                                    Contribution to reducing Air pollution with the use of Technology.
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    color="white"
                                    sx={{
                                        fontSize: '1rem',
                                        zIndex: '99',
                                        width: '100%',
                                        textAlign: 'center' // Centralized text for all sizes
                                    }}
                                >
                                    Join the tour, showcase your work, and collaborate with fellow artists.
                                </Typography>
                                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent="center" sx={{ width: '100%' }}>
                                    <Stack spacing={1} alignItems="center">
                                        <Button variant="contained" color="success" sx={ButtonSX} onClick={handleFormClick}>
                                            Get Involved
                                        </Button>
                                    </Stack>
                                    <Stack spacing={1} alignItems="center">
                                        <Button variant="contained" color="success" sx={ButtonSX}>
                                            Donation
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </Jumbo>
            </FadeInWhenVisible>
        </Container>
    );
};

export default Subscribe;
