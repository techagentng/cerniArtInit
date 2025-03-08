import { Button, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
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
    padding: '10px 20px',
    width: '80%', // Increased from 50% to 80% for longer width
    marginTop: '20px'
};

const Subscribe = () => {
    return (
        <Container sx={{ paddingY: 15 }}>
            <FadeInWhenVisible animationType="fadeIn" delay={0.3}>
                <Jumbo sx={{ paddingX: { xs: 5, md: 15 }, paddingY: 15 }} elevation={2}>
                    <Grid container spacing={5} sx={{ alignItems: 'center' }} direction={{ xs: 'column', md: 'row' }}>
                        <Grid item xs={12} md={12} sx={{ marginTop: { xs: '20px', md: '1px' } }}>
                            <Stack spacing={2} alignItems="center"> {/* Changed to always center */}
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontSize: { xs: '1.5rem', sm: '2.125rem' },
                                        mb: 2,
                                        textAlign: { xs: 'center', md: 'left' },
                                        color: 'white',
                                        width: '100%'
                                    }}
                                >
                                    Support the tour and help fund supplies, venues, and artist grants.
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    color="white"
                                    sx={{
                                        fontSize: '1rem',
                                        zIndex: '99',
                                        width: '100%',
                                        textAlign: { xs: 'center', md: 'left' }
                                    }}
                                >
                                </Typography>
                                <Stack 
                                    direction={{ xs: 'column', md: 'row' }} 
                                    spacing={2}
                                    justifyContent="center" // Added to center buttons
                                    sx={{ width: '100%' }}
                                >
                                    <Button variant="contained" sx={ButtonSX}>
                                        Get Involved
                                    </Button>
                                    <Button variant="contained" color="success" sx={ButtonSX}>
                                        Donation
                                    </Button>
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