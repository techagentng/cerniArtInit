import React from 'react';
import { Container, Typography, Grid, TextField, MenuItem, Paper } from '@mui/material';
import AppBar from 'ui-component/extended/AppBar';
import Footer from 'ui-component/footer';

const Donation = () => {
    return (
        <>
            <AppBar />
            <Container sx={{ py: { xs: 5, md: 10 } }}>
                <Grid container spacing={5}>
                    
                    {/* LEFT SIDE — Text Content */}
                    <Grid item xs={12} md={6}>
                        <Typography 
                            variant="h4" 
                            sx={{ fontWeight: 700, mb: 2 }}
                        >
                            <span style={{ color: '#ff7a00' }}>CIAIR 36</span> A CLEAN AIR ART CAMPAIGN
                        </Typography>

                        <Typography variant="subtitle1" sx={{ mb: 3 }}>
                            By Cera Cerni’s Art Initiative
                        </Typography>

                        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                            Support our mission to promote clean air through art.
                            Your monthly donation helps fund art installations,
                            workshops, and community events across 774 local
                            governments. New monthly donations are matched for 
                            the first 12 months, tripling your impact for a year!
                        </Typography>
                    </Grid>

                    {/* RIGHT SIDE — Form */}
                    <Grid item xs={12} md={6}>
                        <Paper elevation={0} sx={{ p: 3, borderRadius: 3, background: '#f8f9fa' }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Monthly Donation Amount"
                                        fullWidth
                                        select
                                        defaultValue="25"
                                    >
                                        <MenuItem value="25">$25</MenuItem>
                                        <MenuItem value="50">$50</MenuItem>
                                        <MenuItem value="100">$100</MenuItem>
                                        <MenuItem value="200">$200</MenuItem>
                                    </TextField>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField 
                                        label="First Name"
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField 
                                        label="Last Name"
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField 
                                        label="Email Address"
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
            <Footer />
        </>
    );
};

export default Donation;
