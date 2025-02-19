import React, { useEffect } from 'react';
import Navigation from 'ui-component/Header';
import { Typography, Box, Container } from '@mui/material';
import AboutSectionTwo from './about2ol';
import Form from 'ui-component/form';
import Footer from 'ui-component/footer';
const About = () => {
    useEffect(() => {
        document.body.style.overflowX = 'hidden';
        return () => {
            document.body.style.overflowX = 'auto';
        };
    }, []);

    return (
        <>
            {/* AppBar for Navigation */}
            <Navigation />

            {/* Adding top margin for the content to align below the navigation */}
            <Container
                sx={{
                    textAlign: 'left',
                    py: 1,
                    mt: 3,
                    width: '100%', // Make the container full width
                    maxWidth: '100%', // Remove the maxWidth to allow full width on desktop
                    paddingX: { xs: 2, sm: 4, md: 0 } // Adjust padding for responsiveness
                }}
            >
                {/* Main Heading */}
                <Typography variant="h1" sx={{ fontWeight: 'bold', fontSize: '1.5rem', mb: 1, fontFamily: 'DaxlinePro' }}>
                    ABOUT US
                </Typography>

                {/* Subheading */}
                <Typography
                    variant="h3"
                    sx={{ fontWeight: 'bold', mb: 3, fontFamily: 'DaxlinePro', fontSize: { xs: '1.6rem', md: '20px' } }}
                >
                    About{' '}
                    <Typography
                        component="span"
                        sx={{
                            color: '#ff6b77',
                            fontWeight: 'bold',
                            fontFamily: 'DaxlinePro',
                            fontSize: { xs: '1.5rem', md: '20px' }
                        }}
                    >
                        NailSavvy
                    </Typography>
                </Typography>

                {/* Paragraphs */}
                <Box sx={{ maxWidth: '100%', lineHeight: 1.6 }}>
                    <Typography
                        paragraph
                        sx={{
                            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.2rem' }, // Responsive font size
                            fontFamily: 'DaxlinePro' // Consistent font family
                        }}
                    >
                        Welcome to NailSavvy – where art meets innovation, and luxury meets exceptional service. We’re more than just a nail
                        salon; we’re a sanctuary for those who want to express themselves, relax, and indulge in the latest in nail care
                        trends.
                    </Typography>

                    <Typography
                        paragraph
                        sx={{
                            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.2rem' }, // Responsive font size
                            fontFamily: 'DaxlinePro' // Consistent font family
                        }}
                    >
                        At NailSavvy, our mission is to deliver a unique nail experience through cutting-edge techniques, premium products,
                        and a deep commitment to client satisfaction. With our team of expert nail technicians and a focus on artistry and
                        hygiene, we’re redefining what it means to have your nails done.
                    </Typography>

                    <Typography
                        paragraph
                        sx={{
                            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.2rem' }, // Responsive font size
                            fontFamily: 'DaxlinePro' // Consistent font family
                        }}
                    >
                        From natural enhancements to bespoke nail art and luxurious pedicure treatments, we offer a full suite of services
                        designed to meet your every need and help you feel your best. We believe that self-care is not just about looking
                        good but also about feeling empowered, and our carefully curated services ensure that each client leaves feeling
                        pampered and polished.
                    </Typography>
                </Box>
            </Container>

            <AboutSectionTwo />
            <Form />
            <Footer />
        </>
    );
};

export default About;
