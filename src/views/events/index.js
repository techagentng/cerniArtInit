import React, { useEffect } from 'react';
import { Typography, Box, Grid } from '@mui/material';
// import Navigation from 'ui-component/Header';
import Footer from 'ui-component/footer';
import Form from 'ui-component/form';
import bridalImage from 'assets/images/xxxxxxxx.jpg';
import basket from 'assets/images/Picture1.jpg';
import dept from 'assets/images/dept.jpg';
import hospital from 'assets/images/hospital.jpg';
import seven from 'assets/images/seven.jpg';
import eko from 'assets/images/eko.png';
import bush from 'assets/images/bush.jpg';
import sky from 'assets/images/sky.jpg';
import kidd from 'assets/images/kidd.jpg';
import AppBar from 'ui-component/extended/AppBar';

const Events = () => {
    useEffect(() => {
        document.body.style.overflowX = 'hidden';
        return () => {
            document.body.style.overflowX = 'auto';
        };
    }, []);

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
                        mt: { xs: 4, md: 0 },
                        fontFamily: 'DaxlinePro',
                        fontSize: '1.5rem'
                    }}
                >
                    Our Events & Showcase
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
                    From gallery openings to community art festivals, we organize and host events that celebrate art and bring people
                    together. Our events are designed to inspire, educate, and connect audiences with the transformative power of art.
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
                {/* New Section with Heading and Images */}
                <Box sx={{ py: { xs: 2, md: 8 } }}>
                    {/* Heading */}
                    <Typography
                        variant="h1"
                        sx={{
                            textAlign: 'left',
                            fontWeight: 'bold',
                            mb: 4,
                            fontFamily: 'DaxlinePro',
                            fontSize: '1.5rem'
                        }}
                    >
                        Event show room
                    </Typography>

                    {/* Image Grid */}
                    <Grid container spacing={4}>
                        {/* Column 1 */}
                        <Grid item xs={12} sm={4}>
                            <Box component="img" src={basket} alt="Image 1" sx={{ width: '100%', height: 'auto', mb: 2 }} />
                            <Box component="img" src={dept} alt="Image 2" sx={{ width: '100%', height: 'auto', mb: 2 }} />
                            <Box component="img" src={hospital} alt="Image 3" sx={{ width: '100%', height: 'auto' }} />
                        </Grid>

                        {/* Column 2 */}
                        <Grid item xs={12} sm={4}>
                            <Box component="img" src={eko} alt="Image 4" sx={{ width: '100%', height: 'auto', mb: 2 }} />
                            <Box component="img" src={seven} alt="Image 5" sx={{ width: '100%', height: 'auto', mb: 2 }} />
                            <Box component="img" src={bush} alt="Image 6" sx={{ width: '100%', height: 'auto' }} />
                        </Grid>

                        {/* Column 3 */}
                        <Grid item xs={12} sm={4}>
                            <Box component="img" src={sky} alt="Image 7" sx={{ width: '100%', height: 'auto', mb: 2 }} />
                            <Box component="img" src={kidd} alt="Image 8" sx={{ width: '100%', height: 'auto', mb: 2 }} />
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
