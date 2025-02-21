import React, { useEffect } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import AppBar from 'ui-component/extended/AppBar';
// import n1 from './n1.png';
// import n2 from './n2.png';
// import ait from './ait.png';
import Footer from 'ui-component/footer';
import Form from 'ui-component/form';
// import { Link } from 'react-router-dom';

const Landing = () => {
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
            <Typography variant="h1" sx={{ padding: 4, mt: 7 }}>
                Our Services
            </Typography>
            <Box
                sx={{
                    py: 4,
                    px: { xs: 3, sm: 6, md: 12 },
                    backgroundColor: '#f8f8f8'
                }}
            >
                {/* Heading and Description */}
                <Box sx={{ mb: 4 }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            textAlign: 'left',
                            fontSize: { xs: '1.6rem', sm: '1.5rem' },
                            mb: { md: 0 },
                            paddingBottom: '20px',
                            fontFamily: 'DaxlinePro'
                        }}
                    >
                        Discover Our Exceptional Art Services
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            textAlign: 'left',
                            fontSize: { xs: '1rem', md: '1.2rem' },
                            fontFamily: 'DaxlinePro',
                            maxWidth: { xs: '100%', sm: '100%', md: '100%' }
                        }}
                    >
                        At Art for Impact, we specialize in creating stunning, large-scale murals and offering a range of art services that transform spaces, inspire communities, and foster creativity. From vibrant street art to immersive exhibitions, our expert artists bring your vision to life with creativity and precision. Whether it’s for homes, businesses, or public spaces, we deliver art that makes an impact.
                    </Typography>
                </Box>
    
                {/* Two-Column Layout of Images with Text under each */}
                <Grid container spacing={4}>
                    {/* Artist Residencies */}
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ textAlign: 'left' }}>
                            <Box
                                component="img"
                                // src={artistResidencyImage}
                                alt="Artist Residencies"
                                sx={{
                                    width: '100%',
                                    boxShadow: 3
                                }}
                            />
                            <Typography
                                variant="h5"
                                sx={{
                                    mt: 2,
                                    fontWeight: 'bold',
                                    fontSize: { xs: '1.6rem', md: '1.5rem' },
                                    fontFamily: 'DaxlinePro'
                                }}
                            >
                                Artist Residencies
                            </Typography>
                            <Typography sx={{ mt: 1, fontSize: { xs: '1rem', md: '1.2rem' }, fontFamily: 'DaxlinePro' }}>
                                Our artist residencies provide a creative sanctuary for artists to develop their craft, collaborate with communities, and produce impactful works. We offer spaces, resources, and support to foster innovation and artistic growth.
                            </Typography>
                        </Box>
                    </Grid>
    
                    {/* Exhibitions */}
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ textAlign: 'left' }}>
                            <Box
                                component="img"
                                // src={exhibitionImage}
                                alt="Exhibitions"
                                sx={{
                                    width: '100%',
                                    boxShadow: 3
                                }}
                            />
                            <Typography
                                variant="h5"
                                sx={{
                                    mt: 2,
                                    fontWeight: 'bold',
                                    fontSize: { xs: '1.6rem', md: '1.5rem' },
                                    fontFamily: 'DaxlinePro'
                                }}
                            >
                                Exhibitions
                            </Typography>
                            <Typography sx={{ mt: 1, fontSize: { xs: '1rem', md: '1.2rem' }, fontFamily: 'DaxlinePro' }}>
                                We curate and host exhibitions that showcase the work of emerging and established artists. Our exhibitions are designed to engage audiences, spark conversations, and celebrate the power of art in public and private spaces.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
    
            {/* Second Section: Workshops and Masterclasses */}
            <Box
                sx={{
                    py: 4,
                    px: { xs: 3, sm: 6, md: 12 },
                    backgroundColor: '#f8f8f8'
                }}
            >
                <Grid container spacing={4}>
                    {/* Workshops */}
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ textAlign: 'left' }}>
                            <Box
                                component="img"
                                // src={workshopImage}
                                alt="Workshops"
                                sx={{
                                    width: '100%',
                                    boxShadow: 3
                                }}
                            />
                            <Typography
                                variant="h5"
                                sx={{
                                    mt: 2,
                                    fontWeight: 'bold',
                                    fontSize: { xs: '1.6rem', md: '1.5rem' },
                                    fontFamily: 'DaxlinePro'
                                }}
                            >
                                Workshops
                            </Typography>
                            <Typography sx={{ mt: 1, fontSize: { xs: '1rem', md: '1.2rem' }, fontFamily: 'DaxlinePro' }}>
                                Our workshops are designed to inspire creativity and skill-building for all ages. From beginner-friendly sessions to advanced techniques, we offer hands-on experiences that empower participants to explore their artistic potential.
                            </Typography>
                        </Box>
                    </Grid>
    
                    {/* Masterclasses */}
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ textAlign: 'left' }}>
                            <Box
                                component="img"
                                // src={masterclassImage}
                                alt="Masterclasses"
                                sx={{
                                    width: '100%',
                                    boxShadow: 3
                                }}
                            />
                            <Typography
                                variant="h5"
                                sx={{
                                    mt: 2,
                                    fontWeight: 'bold',
                                    fontSize: { xs: '1.6rem', md: '1.5rem' },
                                    fontFamily: 'DaxlinePro'
                                }}
                            >
                                Masterclasses
                            </Typography>
                            <Typography sx={{ mt: 1, fontSize: { xs: '1rem', md: '1.2rem' }, fontFamily: 'DaxlinePro' }}>
                                Led by renowned artists, our masterclasses provide in-depth training and insights into advanced artistic techniques. These sessions are perfect for artists looking to refine their skills and gain professional expertise.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
    
            {/* Third Section: Public Art Projects and Art Events */}
            <Box
                sx={{
                    py: 4,
                    px: { xs: 3, sm: 6, md: 12 },
                    backgroundColor: '#f8f8f8'
                }}
            >
                <Grid container spacing={4}>
                    {/* Public Art Projects */}
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ textAlign: 'left' }}>
                            <Box
                                component="img"
                                // src={publicArtImage}
                                alt="Public Art Projects"
                                sx={{
                                    width: '100%',
                                    boxShadow: 3
                                }}
                            />
                            <Typography
                                variant="h5"
                                sx={{
                                    mt: 2,
                                    fontWeight: 'bold',
                                    fontSize: { xs: '1.6rem', md: '1.5rem' },
                                    fontFamily: 'DaxlinePro'
                                }}
                            >
                                Public Art Projects
                            </Typography>
                            <Typography sx={{ mt: 1, fontSize: { xs: '1rem', md: '1.2rem' }, fontFamily: 'DaxlinePro' }}>
                                We design and execute large-scale public art projects that transform urban spaces, engage communities, and promote cultural expression. Our projects are collaborative, inclusive, and designed to leave a lasting legacy.
                            </Typography>
                        </Box>
                    </Grid>
    
                    {/* Art Events */}
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ textAlign: 'left' }}>
                            <Box
                                component="img"
                                // src={artEventImage}
                                alt="Art Events"
                                sx={{
                                    width: '100%',
                                    boxShadow: 3
                                }}
                            />
                            <Typography
                                variant="h5"
                                sx={{
                                    mt: 2,
                                    fontWeight: 'bold',
                                    fontSize: { xs: '1.6rem', md: '1.5rem' },
                                    fontFamily: 'DaxlinePro'
                                }}
                            >
                                Art Events
                            </Typography>
                            <Typography sx={{ mt: 1, fontSize: { xs: '1rem', md: '1.2rem' }, fontFamily: 'DaxlinePro' }}>
                                From gallery openings to community art festivals, we organize and host events that celebrate art and bring people together. Our events are designed to inspire, educate, and connect audiences with the transformative power of art.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
    
            {/* Rest of the existing content */}
            <Box
                sx={{
                    px: { xs: 3, sm: 6, md: 12 },
                    mt: 5,
                    textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'left',
                    height: '30vh'
                }}
            >
                {/* Heading */}
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: '1.6rem', md: '1.5rem' },
                        fontFamily: 'DaxlinePro',
                        mt: { xs: 3, md: 1 },
                        mb: { xs: 2 },
                        textAlign: 'left'
                    }}
                >
                    Experience the Art of Transformation
                </Typography>
    
                {/* Description */}
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: '1rem', md: '1.2rem' },
                        maxWidth: { xs: '100%', sm: '100%' },
                        textAlign: 'left',
                        fontFamily: 'DaxlinePro'
                    }}
                >
                    Let us bring your vision to life with our expert art services. From concept to completion, we ensure every detail is perfect, creating art that inspires and transforms spaces.
                </Typography>
    
                {/* CTA Button */}
                <Box sx={{ mt: 4 }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#ff6c78',
                            color: 'white',
                            padding: '12px 20px',
                            '&:hover': {
                                backgroundColor: '#c51162'
                            },
                            fontFamily: 'DaxlinePro'
                        }}
                        component="a"
                        href="/guest"
                    >
                        Book Your Consultation Now
                    </Button>
                </Box>
            </Box>
    
            {/* Footer and Form Sections */}
            <Form />
            <Footer />
        </>
    );
};

export default Landing;
