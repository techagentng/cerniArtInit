import React, { useEffect } from 'react';
import AppBar from 'ui-component/extended/AppBar';
import { Typography, Container } from '@mui/material';
import AboutSectionTwo from './about2ol';
import Form from 'ui-component/form';
import Footer from 'ui-component/footer';
import HeaderSection from './HeaderSection';
import GetInvolvedModal from 'ui-component/GetInvolvedModal';
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
            <AppBar />

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
                <HeaderSection />
                {/* Subheading */}
            </Container>

            <AboutSectionTwo />
            <Form />
            <GetInvolvedModal />
            <Footer />
        </>
    );
};

export default About;
