import React from 'react';
import { Grid, Typography, Box, Container, Paper, Avatar } from '@mui/material';
import ii from './ii.png'; // Assuming 'ii.png' is the image source

const initiatives = [
    {
        title: 'Supporting Artistic Development',
        description: 'We are providing artists with valuable opportunities to grow and develop their artistic practice.'
    },
    {
        title: 'Enriching Cultural Life',
        description: 'We are enhancing the cultural vibrancy of communities through our exhibitions, public art projects, and art events.'
    },
    {
        title: 'Fostering Community Engagement',
        description: 'We are creating opportunities for individuals of all ages and backgrounds to engage with art and artists.'
    },
    {
        title: 'Promoting Artistic Expression',
        description: 'We are providing a platform for artists to share their work and connect with audiences.'
    }
];
const AboutSectionTwo = () => {
    return (
        <Container sx={{ py: 6 }}>
            <Grid container spacing={4} alignItems="center">
                {/* Left Column: Image */}
                <Grid item xs={12} md={4}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start', // Centers the content horizontally
                            alignItems: 'center', // Centers the content vertically
                            width: '100%',
                            height: 'auto',
                            mt: { md: 0, xs: -2 },
                            fontSize: { xs: '1.2rem', sm: '1.2rem', md: '1.4rem' },
                            fontFamily: 'DaxlinePro',
                            '@media (max-width: 600px)': {
                                justifyContent: 'center' // Ensure it's centered on mobile screens
                            }
                        }}
                    >
                        <img
                            src={ii} // Image source
                            alt="Founder"
                            style={{
                                width: '100%',
                                maxWidth: '400px', // Optional: Set a max-width for the image
                                height: 'auto', // Maintain aspect ratio
                                objectFit: 'cover'
                            }}
                        />
                    </Box>
                </Grid>

                {/* Right Column: Text Content */}
                <Grid item xs={12} md={8}>
                    <Typography variant="h1" sx={{ fontWeight: 'bold', mb: 2, fontFamily: 'DaxlinePro' }}>
                        Our impact
                    </Typography>
                    <Box sx={{ py: 6, px: 4, backgroundColor: '#f5f5f5' }}>
                        <Paper elevation={3} sx={{ maxWidth: 800, mx: 'auto', p: 4, borderRadius: 3 }}>
                            <Typography variant="h4" fontWeight="bold" align="center" color="primary" gutterBottom>
                                Cera Cerni Art Initiative
                            </Typography>
                            <Typography variant="h6" align="center" color="text.secondary" gutterBottom>
                                Through our diverse range of activities, we are making a significant contribution to Nigerias creative
                                economy.
                            </Typography>
                            <Grid container spacing={3} mt={2}>
                                {initiatives.map((item, index) => (
                                    <Grid item xs={12} key={index}>
                                        <Paper elevation={2} sx={{ display: 'flex', alignItems: 'center', p: 2, borderRadius: 2 }}>
                                            <Avatar sx={{ bgcolor: item.color, width: 40, height: 40, mr: 2 }}>{index + 1}</Avatar>
                                            <Box>
                                                <Typography variant="h6" fontWeight="bold">
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body1" color="text.secondary">
                                                    {item.description}
                                                </Typography>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutSectionTwo;
