import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import AppBar from 'ui-component/extended/AppBar';

const AboutPage = () => {
    return (
        <>
            <AppBar/>
            <Container maxWidth="lg">
                {/* Page Title */}
                <Typography variant="h3" gutterBottom textAlign="center" sx={{ fontWeight: 'bold', mt: 4 }}>
                    About Us
                </Typography>

                {/* Section: Mission */}
                <Paper elevation={3} sx={{ p: 4, my: 3 }}>
                    <Typography variant="h4" gutterBottom>
                        Our Mission
                    </Typography>
                    <Typography variant="body1">
                        Our mission is to create a vibrant and inclusive creative ecosystem that supports emerging and established artists,
                        provides opportunities for artistic exploration and experimentation, and engages diverse audiences through impactful
                        creative experiences.
                    </Typography>
                </Paper>

                {/* Section: Vision */}
                <Paper elevation={3} sx={{ p: 4, my: 3 }}>
                    <Typography variant="h4" gutterBottom>
                        Our Vision
                    </Typography>
                    <Typography variant="body1">
                        We envision a world where art is accessible to all, where creativity is celebrated, and where artistic expression is
                        valued as an essential component of human experience.
                    </Typography>
                </Paper>

                {/* Section: Values */}
                <Paper elevation={3} sx={{ p: 4, my: 3 }}>
                    <Typography variant="h4" gutterBottom>
                        Our Values
                    </Typography>
                    <Box>
                        {[
                            { title: 'Creativity', desc: 'We champion artistic innovation and encourage risk-taking and experimentation.' },
                            {
                                title: 'Inclusivity',
                                desc: 'We embrace diversity in all its forms and strive to create a welcoming environment.'
                            },
                            { title: 'Collaboration', desc: 'We believe in the power of collaboration to advance our shared goals.' },
                            { title: 'Excellence', desc: 'We are committed to artistic excellence and high-quality experiences.' }
                        ].map((value, index) => (
                            <Typography key={index} variant="body1" sx={{ mb: 1 }}>
                                <strong>{value.title}:</strong> {value.desc}
                            </Typography>
                        ))}
                    </Box>
                </Paper>

                {/* Section: Activities */}
                <Paper elevation={3} sx={{ p: 4, my: 3 }}>
                    <Typography variant="h4" gutterBottom>
                        Our Activities
                    </Typography>
                    <Grid container spacing={2}>
                        {['Artist Residencies', 'Exhibitions', 'Workshops and Masterclasses', 'Public Art Projects', 'Art Events'].map(
                            (activity, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <Typography variant="body1">✅ {activity}</Typography>
                                </Grid>
                            )
                        )}
                    </Grid>
                </Paper>

                {/* Section: Impact */}
                <Paper elevation={3} sx={{ p: 4, my: 3 }}>
                    <Typography variant="h4" gutterBottom>
                        Our Impact
                    </Typography>
                    <Box>
                        {[
                            { title: 'Supporting artistic development', desc: 'Providing artists with valuable opportunities to grow.' },
                            { title: 'Enriching cultural life', desc: 'Enhancing the cultural vibrancy of communities.' },
                            { title: 'Fostering community engagement', desc: 'Creating opportunities for all to engage with art.' },
                            { title: 'Promoting artistic expression', desc: 'Providing a platform for artists to share their work.' }
                        ].map((impact, index) => (
                            <Typography key={index} variant="body1" sx={{ mb: 1 }}>
                                <strong>{impact.title}:</strong> {impact.desc}
                            </Typography>
                        ))}
                    </Box>
                </Paper>

                {/* Section: Join Us */}
                <Paper elevation={3} sx={{ p: 4, my: 3, textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom>
                        Join Us
                    </Typography>
                    <Typography variant="body1">
                        Cera Cerni Art Initiative welcomes your support and participation. Together, we can create a thriving art ecosystem
                        that inspires, enriches, and transforms lives.
                    </Typography>
                </Paper>

                {/* Section: Contact */}
                <Paper elevation={3} sx={{ p: 4, my: 3, textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom>
                        Contact Us
                    </Typography>
                    <Typography variant="body1">
                        📧 <a href="mailto:bm@ceracerniai.org">bm@ceracerniai.org</a>
                    </Typography>
                </Paper>
            </Container>
        </>
    );
};

export default AboutPage;
