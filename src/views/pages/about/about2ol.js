import React from 'react';
import { Grid, Typography, Box, Container, Paper, Avatar } from '@mui/material';
import ii from './Picture2.png'; // Assuming 'ii.png' is the image source

const initiatives = [
    {
        title: 'Supporting Artistic Development',
        description: 'We are providing artists with valuable opportunities to grow and develop their artistic practice.',
        color: '#d4d8d7' // Purple
    },
    {
        title: 'Enriching Cultural Life',
        description: 'We are enhancing the cultural vibrancy of communities through our exhibitions, public art projects, and art events.',
        color: '#d4d8d7' // Purple
    },
    {
        title: 'Fostering Community Engagement',
        description: 'We are creating opportunities for individuals of all ages and backgrounds to engage with art and artists.',
        color: '#d4d8d7' // Purple
    },
    {
        title: 'Promoting Artistic Expression',
        description: 'We are providing a platform for artists to share their work and connect with audiences.',
        color: '#d4d8d7' // Purple
    }
];

const AboutSectionTwo = () => {
    return (
        <Container sx={{ py: 6 }}>
            <Typography variant="h1" sx={{ fontWeight: 'bold', fontFamily: 'DaxlinePro' }}>
                Our Impact
            </Typography>
            <Grid container spacing={4} sx={{ justifyContent: 'space-between'}}>
                {/* Left Column: Image */}
                <Grid item xs={12} md={4}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: { xs: 'center', md: 'space-between' },
                            alignItems: 'center',
                            width: '100%',
                            height: '100%',
                            mt: { md: 0, xs: -2 }
                        }}
                    >
                        <img
                            src={ii} // Image source
                            alt="Founder"
                            style={{
                                width: '100%',
                                maxWidth: '400px',
                                height: 'auto',
                                objectFit: 'cover'
                            }}
                        />
                    </Box>
                </Grid>

                {/* Right Column: Text Content */}
                <Grid item xs={12} md={8} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box sx={{ py: 4, px: 3, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                        <Paper elevation={3} sx={{ maxWidth: 800, mx: 'auto', p: 4, borderRadius: 3 }}>
                            <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
                                Cera Cerni Art Initiative
                            </Typography>
                            <Typography variant="h6" align="center" color="text.secondary" gutterBottom>
                                Through our diverse range of activities, we are making a significant contribution to Nigerias creative
                                economy.
                            </Typography>

                            {/* Initiatives List */}
                            <Grid container spacing={3} mt={2}>
                                {initiatives.map((item, index) => (
                                    <Grid item xs={12} key={index}>
                                        <Paper
                                            elevation={2}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                p: 2,
                                                borderRadius: 2
                                            }}
                                        >
                                            <Avatar sx={{ bgcolor: item.color, width: 40, height: 40, fontSize: '1rem' }}>
                                                {index + 1}
                                            </Avatar>
                                            <Box sx={{ flex: 1, ml: 2 }}>
                                                <Typography variant="h6" fontWeight="bold">
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
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
