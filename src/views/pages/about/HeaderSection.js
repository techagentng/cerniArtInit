import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Grid, Stack, Typography, List, ListItem, ListItemText } from '@mui/material';

// third party
import { motion } from 'framer-motion';

// Images
import Hero from './Picture4.jpg';
import Hero2 from './Picture1.jpg';
const HeaderImage = styled('img')({
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: '20px 5px',
    borderRadius: '30px',
    objectFit: 'cover'
});

const HeaderSection = () => {
    const headerSX = {
        fontSize: { xs: '2rem', sm: '2.5rem', md: '2.5rem', lg: '2.5rem' }
    };

    return (
        <Container>
            <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: { xs: 10, sm: 6, md: 18.75 }, mb: { xs: 2.5, md: 10 } }}
            >
                <Grid item xs={12}>
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ type: 'spring', stiffness: 150, damping: 30 }}
                            >
                                <Stack spacing={1}>
                                    <Typography textAlign={{ xs: 'center', md: 'left' }} variant="h1" sx={headerSX}>
                                        About Cera Cerni Art initiative
                                    </Typography>
                                </Stack>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.2 }}
                            >
                                <Typography
                                    textAlign={{ xs: 'center', md: 'left' }}
                                    color="text.primary"
                                    variant="body1"
                                    sx={{ fontSize: { xs: '0.8rem', md: '1rem' }, paddingY: '10px', width: { xs: '100%', md: '50%' } }}
                                >
                                  Cera Cerni&apos;s Art Initiative is a dynamic platform dedicated to nurturing and promoting creativity. We believe in the transformative power of art and its ability to inspire, challenge, and connect individuals across cultures and communities.<br />
                                </Typography>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <HeaderImage src={Hero} />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: { xs: 'center', md: 'left' }, marginLeft: { xs: 0, md: '50%' }, px: { xs: 2, md: 0 } }}>
                    <motion.div
                        initial={{ opacity: 0, translateY: 550 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ type: 'spring', stiffness: 150, damping: 30 }}
                    >
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, translateY: 550 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.2 }}
                    >
                        <Typography variant="h1" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
                            Our Vision
                        </Typography>

                        <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                            We envision a world where art is accessible to all, where creativity is celebrated, and where artistic expression is valued as an essential component of human experience.
                        </Typography>

                        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: '1.3rem', md: '2rem' } }}>
                            Our Mission
                        </Typography>

                        <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
Our mission is to create a vibrant and inclusive art ecosystem that supports emerging and established artists, provides opportunities for artistic exploration and experimentation, and engages diverse audiences through impactful art experiences.
                        </Typography>
                    </motion.div>
                </Grid>
            </Grid>
            <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: { xs: 10, sm: 6, md: 18.75 }, mb: { xs: 2.5, md: 10 } }}
            >
                <Grid item xs={12}>
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ type: 'spring', stiffness: 150, damping: 30 }}
                            >
                                <Stack spacing={1}>
                                    <Typography textAlign={{ xs: 'center', md: 'left' }} variant="h1" sx={headerSX}>
                                    Our Values
                                    </Typography>
                                </Stack>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.2 }}
                            >
                                <List
                                    sx={{
                                        width: { xs: '100%', md: '50%' },
                                        paddingY: '10px',
                                        textAlign: { xs: 'center', md: 'left' },
                                        listStyleType: 'disc',
                                        pl: { xs: 2, md: 2 }
                                    }}
                                >
                                    <ListItem sx={{ display: 'list-item', paddingY: 0.5 }}>
                                        <ListItemText
                                            primary={
                                                <Typography variant="body1" sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }}>
                                                    <strong>Creativity:</strong> We champion artistic innovation and encourage risk-taking and experimentation.
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                    <ListItem sx={{ display: 'list-item', paddingY: 0.5 }}>
                                        <ListItemText
                                            primary={
                                                <Typography variant="body1" sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }}>
                                                    <strong>Inclusivity:</strong> We embrace diversity in all its forms and strive to create a welcoming and supportive environment for all artists and art enthusiasts.
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                    <ListItem sx={{ display: 'list-item', paddingY: 0.5 }}>
                                        <ListItemText
                                            primary={
                                                <Typography variant="body1" sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }}>
                                                    <strong>Collaboration:</strong> We believe in the power of collaboration and seek to build partnerships with artists, organizations, and communities to advance our shared goals.
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                    <ListItem sx={{ display: 'list-item', paddingY: 0.5 }}>
                                        <ListItemText
                                            primary={
                                                <Typography variant="body1" sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }}>
                                                    <strong>Excellence:</strong> We are committed to artistic excellence and strive to present high-quality art experiences that inspire and engage audiences.
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                </List>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <HeaderImage src={Hero2} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default HeaderSection;
