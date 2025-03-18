import React, { useEffect } from 'react';
import { Typography, Box, Divider, Grid, List, ListItem, ListItemText, Button } from '@mui/material';
// import Navigation from 'ui-component/Header';
import Footer from 'ui-component/footer';
import Form from 'ui-component/form';
import bridalImage from './f2.png'; 
import AppBar from 'ui-component/extended/AppBar';

const Events = () => {
    useEffect(() => {
        document.body.style.overflowX = 'hidden';
        return () => {
            document.body.style.overflowX = 'auto';
        };
    }, []);

    // Example content for the three-column layout
    const packages = [
        {
            title: '1. Bridal Luxe Package',
            description: 'For the bride who deserves the finest, this package offers:',
            bulletPoints: ['Glamorous nail enhancements', 'Relaxing hand and foot massages', 'Custom designs tailored to your theme']
        },
        {
            title: '2. Bridesmaids’ Elegance',
            description: 'Perfect for your bridal party to feel pampered and beautiful:',
            bulletPoints: ['Coordinated nail art', 'Rejuvenating treatments', 'Personalized attention']
        },
        {
            title: '3. Groomsmen’s Grooming',
            description: 'Because the men in your party deserve care too:',
            bulletPoints: ['Clean and classic nail grooming', 'Relaxation therapy', 'Subtle, masculine finishes']
        }
    ];

    return (
        <>
            {/* AppBar for Navigation */}
            <AppBar />

            {/* Bridal Bliss Content */}
            <Box sx={{ py: 8, px: { xs: 3, sm: 6, md: 12 } }}>
                {/* Major Heading */}
                <Typography
                    variant="h1"
                    sx={{
                        textAlign: 'left',
                        fontWeight: 'bold',
                        mb: 3,
                        fontFamily: 'DaxlinePro',
                        fontSize: '1.5rem'
                    }}
                >
                    Our Events
                </Typography>

                {/* Smaller Heading */}
                <Typography
                    variant="h3"
                    sx={{
                        textAlign: 'left',
                        fontWeight: 'bold',
                        mb: { md: 1, xs: 1 },
                        fontFamily: 'DaxlinePro'
                    }}
                >
                    Check out our events for the past month
                </Typography>

                {/* Descriptive Text */}
                <Typography
                    variant="body1"
                    sx={{
                        textAlign: 'left',
                        fontSize: { xs: '1rem', sm: '1.2rem' },
                        lineHeight: 1.8,
                        mb: 3,
                        fontFamily: 'DaxlinePro'
                    }}
                >
                    Celebrate your big day in style with NailSavvy’s exclusive Bridal Services, designed to give the bride, her bridesmaids,
                    and even the groomsmen a luxurious, relaxing, and unforgettable experience. From glamorous nails to indulgent pampering,
                    we’ve crafted the ultimate bridal packages to ensure you look and feel your best—because you deserve nothing less on
                    your special day.
                </Typography>

                {/* Full-width Image */}
                <Box
                    component="img"
                    src={bridalImage} // Replace with your bridal image
                    alt="Bridal Bliss"
                    sx={{
                        width: '100%',
                        height: 'auto',
                        mb: { md: 6, xs: 1 },
                        fontFamily: 'DaxlinePro'
                    }}
                />
            </Box>

            <Box sx={{ px: { xs: 3, sm: 6, md: 12 }, py: { md: 8, xs: 1 } }}>
                <Grid container spacing={4}>
                    {packages.map((pkg, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                sx={{
                                    border: '1px solid #000',
                                    padding: 3,
                                    borderRadius: '4px',
                                    backgroundColor: '#fff'
                                }}
                            >
                                {/* Numbered Heading */}
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 'bold',
                                        mb: 2,
                                        fontFamily: 'DaxlinePro'
                                    }}
                                >
                                    {pkg.title}
                                </Typography>

                                {/* Description */}
                                <Typography
                                    variant="body1"
                                    sx={{
                                        mb: 2,
                                        fontFamily: 'DaxlinePro',
                                        fontSize: '1rem'
                                    }}
                                >
                                    {pkg.description}
                                </Typography>

                                {/* Divider */}
                                <Divider sx={{ mb: 2 }} />

                                {/* Bulleted List */}
                                <List
                                    sx={{
                                        backgroundColor: '#f7f2ec',
                                        padding: 2,
                                        borderRadius: '4px'
                                    }}
                                >
                                    {pkg.bulletPoints.map((point, idx) => (
                                        <ListItem key={idx} disableGutters>
                                            <ListItemText primary={point} />
                                        </ListItem>
                                    ))}
                                </List>

                                {/* Divider after list */}
                                <Divider sx={{ mb: 2 }} />

                                {/* Descriptive Text Below Divider */}
                                <Typography variant="body1" sx={{ mb: 2, fontFamily: 'DaxlinePro' }}>
                                    Perfect for the bride looking for a flawless, glamorous finish that lasts all day.
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                {/* Button below the 3-column layout */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Button
                        variant="contained"
                        sx={{
                            padding: '8px 16px', // Adjust padding for smaller button size
                            fontSize: '0.875rem', // Adjust font size
                            borderRadius: '4px',
                            width: '500px', // Set a fixed width for the button
                            color: 'white',
                            fontFamily: 'DaxlinePro'
                        }}
                        component="a"
                        href="/services"
                    >
                        CALL NOW TO BOOK SERVICE
                    </Button>
                </Box>

                {/* New Section with Heading and Images */}
                <Box sx={{ py: 8 }}>
                    {/* Heading */}
                    <Typography
                        variant="h3"
                        sx={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            mb: 4,
                            fontFamily: 'DaxlinePro'
                        }}
                    >
                        Event show room
                    </Typography>

                    {/* Image Grid */}
                    <Grid container spacing={4}>
                        {/* Column 1 */}
                        <Grid item xs={12} sm={4}>
                            <Box component="img" src={bridalImage} alt="Image 1" sx={{ width: '100%', height: 'auto', mb: 2 }} />
                            <Box component="img" src={bridalImage} alt="Image 2" sx={{ width: '100%', height: 'auto', mb: 2 }} />
                            <Box component="img" src={bridalImage} alt="Image 3" sx={{ width: '100%', height: 'auto' }} />
                        </Grid>

                        {/* Column 2 */}
                        <Grid item xs={12} sm={4}>
                            <Box component="img" src={bridalImage} alt="Image 4" sx={{ width: '100%', height: 'auto', mb: 2 }} />
                            <Box component="img" src={bridalImage} alt="Image 5" sx={{ width: '100%', height: 'auto', mb: 2 }} />
                            <Box component="img" src={bridalImage} alt="Image 6" sx={{ width: '100%', height: 'auto' }} />
                        </Grid>

                        {/* Column 3 */}
                        <Grid item xs={12} sm={4}>
                            <Box component="img" src={bridalImage} alt="Image 7" sx={{ width: '100%', height: 'auto', mb: 2 }} />
                            <Box component="img" src={bridalImage} alt="Image 8" sx={{ width: '100%', height: 'auto', mb: 2 }} />
                            <Box component="img" src={bridalImage} alt="Image 9" sx={{ width: '100%', height: 'auto' }} />
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            {/* Form Section */}
            <Form />

            {/* Footer */}
            <Footer />
        </>
    );
};

export default Events;
