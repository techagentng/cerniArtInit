import React, { useEffect, useState } from 'react';
import { Typography, Box, Grid, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// import Navigation from 'ui-component/Header';
import Footer from 'ui-component/footer';
import Form from 'ui-component/form';
import bridalImage from 'assets/images/xxxxxxxx.jpg';
import Everyone from 'assets/images/Everyone.jpg';
import AppBar from 'ui-component/extended/AppBar';
import youreyes from 'assets/images/youreyes.jpg';

// In Your Eyes Exhibition Images
import eye1 from 'assets/IN YOUR EYES Exhibition/LAD_7507.jpg';
import eye2 from 'assets/IN YOUR EYES Exhibition/LAD_7513.jpg';
import eye3 from 'assets/IN YOUR EYES Exhibition/LAD_7521.jpg';
import eye4 from 'assets/IN YOUR EYES Exhibition/LAD_7540.jpg';
import eye5 from 'assets/IN YOUR EYES Exhibition/LAD_7566.jpg';
import eye6 from 'assets/IN YOUR EYES Exhibition/LAD_7588.jpg';
import eye7 from 'assets/IN YOUR EYES Exhibition/LAD_7621.jpg';
import eye8 from 'assets/IN YOUR EYES Exhibition/LAD_7657.jpg';
import eye9 from 'assets/IN YOUR EYES Exhibition/LAD_7671.jpg';

const Events = () => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        document.body.style.overflowX = 'hidden';
        return () => {
            document.body.style.overflowX = 'auto';
        };
    }, []);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedImage('');
    };

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
                        textAlign: 'center',
                        fontWeight: 'bold',
                        mb: 3,
                        mt: { xs: 4, md: 0 },
                        fontFamily: 'DaxlinePro',
                        fontSize: '1.5rem'
                    }}
                >
                    On-going Projects
                </Typography>
                {/* Project Heading */}
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: 'left',
                        fontWeight: 'bold',
                        mb: 2,
                        fontFamily: 'DaxlinePro',
                        fontSize: { xs: '1.3rem', sm: '1.5rem' }
                    }}
                >
                    clAIR36
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
                    An Art Campaign that intends to use Art to raise awareness about the clean air imperative for healthier living, to
                    educate the people about individual and communal responsibility, to embrace clean air practices and to creatively
                    engage young people with passion for the Art & Creativity, by installing one large Art Mural in each of the 36
                    States of the Nigerian Federation using paint recycled from carbon emission. (please retain sarah&apos;s image as you
                    have it there but may be resized to look smaller so that it aligns well)

                </Typography>

                {/* Full-width Image */}
                <Box
                    component="img"
                    src={bridalImage} 
                    alt="clAIR36"
                    sx={{
                        width: { xs: '100%', md: '60%' },
                        height: 'auto',
                        mb: { md: 6, xs: 1 },
                        fontFamily: 'DaxlinePro',
                        display: 'block',
                        mx: 'auto'
                    }}
                />

                {/* Second Project Heading */}
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: 'left',
                        fontWeight: 'bold',
                        mb: 2,
                        mt: 4,
                        fontFamily: 'DaxlinePro',
                        fontSize: { xs: '1.3rem', sm: '1.5rem' }
                    }}
                >
                    Everyone Belongs 
                </Typography>
                {/* Second Project Description */}
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
                   Inclusion Art Competition By Autism Circle of Support. The competition aims to inspire children and young people to creatively express their
                    understanding of inclusion while promoting awareness and acceptance nationwide.
                </Typography>

                {/* Second Project Image */}
                <Box
                    component="img"
                    src={Everyone}
                    alt="Everyone Belongs - Inclusion Art Competition"
                    sx={{
                        width: { xs: '100%', md: '60%' },
                        height: 'auto',
                        mb: { md: 6, xs: 1 },
                        fontFamily: 'DaxlinePro',
                        display: 'block',
                        mx: 'auto'
                    }}
                />

                {/* Third Project Heading */}
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: 'left',
                        fontWeight: 'bold',
                        mb: 2,
                        mt: 4,
                        fontFamily: 'DaxlinePro',
                        fontSize: { xs: '1.3rem', sm: '1.5rem' }
                    }}
                >
                    30Art: Healing & Hope
                </Typography>
                {/* Third Project Description */}
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
                    A special art fundraising event staged in Collaboration with Do-Nation, featuring 30 original art pieces that narrate
                    the journey of healing and transformation. The exhibition is scheduled to take place on Saturday January 4th 2026,
                    with all proceeds directed toward funding Do-nation&apos;s 2026 outreach programs.
                </Typography>

                {/* Third Project Image */}
                {/* <Box
                    component="img"
                    src={bridalImage} // Replace with 30Art event image
                    alt="30Art: Healing & Hope"
                    sx={{
                        width: '100%',
                        height: 'auto',
                        mb: { md: 6, xs: 1 },
                        fontFamily: 'DaxlinePro'
                    }}
                /> */}
            </Box>

            <Box sx={{ px: { xs: 3, sm: 6, md: 12 }, py: { md: 2, xs: 1 } }}>
                {/* Past Events Section */}
                <Box sx={{ py: { xs: 2, md: 2 } }}>
                    {/* Heading */}
                    <Typography
                        variant="h1"
                        sx={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            mb: 4,
                            mt: { xs: 0, md: 0 },
                            fontFamily: 'DaxlinePro',
                            fontSize: '1.5rem'
                        }}
                    >
                        Past Events
                    </Typography>

                    {/* First Past Event Heading */}
                    <Typography
                        variant="h2"
                        sx={{
                            textAlign: 'left',
                            fontWeight: 'bold',
                            mb: 2,
                            fontFamily: 'DaxlinePro',
                            fontSize: { xs: '1.3rem', sm: '1.5rem' }
                        }}
                    >
                        In Your Eyes – A Contemporary Canvas
                    </Typography>
                    {/* First Past Event Description */}
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
                        A group exhibition that explores the multifaceted nature of our current era. This exhibition offers an engaging
                        narrative through the eyes of seven emerging artists, each bringing a unique perspective on political, social, and
                        aspirational themes that resonate deeply with our times.
                    </Typography>

                    {/* First Past Event Image */}
                    <Box
                        component="img"
                        src={youreyes} 
                        alt="In Your Eyes - A Contemporary Canvas"
                        sx={{
                            width: { xs: '100%', md: '60%' },
                            height: 'auto',
                            mb: { md: 6, xs: 1 },
                            fontFamily: 'DaxlinePro',
                            display: 'block',
                            mx: 'auto'
                        }}
                    />

                    {/* Second Past Event Heading */}
                    <Typography
                        variant="h2"
                        sx={{
                            textAlign: 'left',
                            fontWeight: 'bold',
                            mb: 2,
                            mt: 4,
                            fontFamily: 'DaxlinePro',
                            fontSize: { xs: '1.3rem', sm: '1.5rem' }
                        }}
                    >
                        Metamorphosis: A Journey into the Future
                    </Typography>
                    {/* Second Past Event Description */}
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
                        An Exhibition by Ife Olowu
                    </Typography>

                    {/* Second Past Event Image */}
                    <Box
                        component="img"
                        src={bridalImage} // Replace with Metamorphosis event image
                        alt="Metamorphosis: A Journey into the Future"
                        sx={{
                            width: { xs: '100%', md: '60%' },
                            height: 'auto',
                            mb: { md: 6, xs: 1 },
                            fontFamily: 'DaxlinePro',
                            display: 'block',
                            mx: 'auto'
                        }}
                    />

                    {/* Image Grid */}
                    <Grid container spacing={4}>
                        {/* Column 1 */}
                        <Grid item xs={12} sm={4}>
                            <Box 
                                component="img" 
                                src={eye1} 
                                alt="In Your Eyes Exhibition 1" 
                                onClick={() => handleImageClick(eye1)}
                                sx={{ width: '100%', height: 'auto', mb: 2, cursor: 'pointer', '&:hover': { opacity: 0.8 } }} 
                            />
                            <Box 
                                component="img" 
                                src={eye2} 
                                alt="In Your Eyes Exhibition 2" 
                                onClick={() => handleImageClick(eye2)}
                                sx={{ width: '100%', height: 'auto', mb: 2, cursor: 'pointer', '&:hover': { opacity: 0.8 } }} 
                            />
                            <Box 
                                component="img" 
                                src={eye3} 
                                alt="In Your Eyes Exhibition 3" 
                                onClick={() => handleImageClick(eye3)}
                                sx={{ width: '100%', height: 'auto', cursor: 'pointer', '&:hover': { opacity: 0.8 } }} 
                            />
                        </Grid>

                        {/* Column 2 */}
                        <Grid item xs={12} sm={4}>
                            <Box 
                                component="img" 
                                src={eye4} 
                                alt="In Your Eyes Exhibition 4" 
                                onClick={() => handleImageClick(eye4)}
                                sx={{ width: '100%', height: 'auto', mb: 2, cursor: 'pointer', '&:hover': { opacity: 0.8 } }} 
                            />
                            <Box 
                                component="img" 
                                src={eye5} 
                                alt="In Your Eyes Exhibition 5" 
                                onClick={() => handleImageClick(eye5)}
                                sx={{ width: '100%', height: 'auto', mb: 2, cursor: 'pointer', '&:hover': { opacity: 0.8 } }} 
                            />
                            <Box 
                                component="img" 
                                src={eye6} 
                                alt="In Your Eyes Exhibition 6" 
                                onClick={() => handleImageClick(eye6)}
                                sx={{ width: '100%', height: 'auto', cursor: 'pointer', '&:hover': { opacity: 0.8 } }} 
                            />
                        </Grid>

                        {/* Column 3 */}
                        <Grid item xs={12} sm={4}>
                            <Box 
                                component="img" 
                                src={eye7} 
                                alt="In Your Eyes Exhibition 7" 
                                onClick={() => handleImageClick(eye7)}
                                sx={{ width: '100%', height: 'auto', mb: 2, cursor: 'pointer', '&:hover': { opacity: 0.8 } }} 
                            />
                            <Box 
                                component="img" 
                                src={eye8} 
                                alt="In Your Eyes Exhibition 8" 
                                onClick={() => handleImageClick(eye8)}
                                sx={{ width: '100%', height: 'auto', mb: 2, cursor: 'pointer', '&:hover': { opacity: 0.8 } }} 
                            />
                            <Box 
                                component="img" 
                                src={eye9} 
                                alt="In Your Eyes Exhibition 9" 
                                onClick={() => handleImageClick(eye9)}
                                sx={{ width: '100%', height: 'auto', cursor: 'pointer', '&:hover': { opacity: 0.8 } }} 
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            {/* Form Section */}
            <Form />

            {/* Footer */}
            <Footer />

            {/* Image Zoom Modal */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.9)'
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        maxWidth: '90vw',
                        maxHeight: '90vh',
                        outline: 'none'
                    }}
                >
                    <IconButton
                        onClick={handleCloseModal}
                        sx={{
                            position: 'absolute',
                            top: -40,
                            right: -40,
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.7)'
                            }
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Box
                        component="img"
                        src={selectedImage}
                        alt="Zoomed image"
                        sx={{
                            maxWidth: '100%',
                            maxHeight: '90vh',
                            objectFit: 'contain'
                        }}
                    />
                </Box>
            </Modal>
        </>
    );
};

export default Events;
