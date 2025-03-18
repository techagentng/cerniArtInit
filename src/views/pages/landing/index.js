import React, { useEffect, useState } from 'react';
import { Box, Typography, Modal, IconButton, Button, TextField, Stack, Grid, useTheme, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AppBar from 'ui-component/extended/AppBar';
import { styled } from '@mui/material/styles';
// import { keyframes } from '@mui/system';
import NigerianMap from './NigerianMap';
import logo from 'assets/images/WhatsApp Image 2025-01-22 at 5.28.png';
import mantra from './2025-01-22 at 3.28.png';
import Form2 from 'ui-component/form';
import Footer2 from 'ui-component/footer';
import { setFormOpen } from 'store/slices/cartslice';
import { useSelector, useDispatch } from 'react-redux';
import CampaignIcon from '@mui/icons-material/Campaign';
import GroupsIcon from '@mui/icons-material/Groups';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Subscribe from './Subscribe';
import SchoolIcon from '@mui/icons-material/School';
import ForumIcon from '@mui/icons-material/Forum';
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'framer-motion';

const gradients = [
    'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
    'linear-gradient(to top, #96fbc4 0%, #f9f586 100%)',
    'linear-gradient(to top, #ff9a9e 0%, #fad0c4 100%)',
    'linear-gradient(to top, #a1c4fd 0%, #c2e9fb 100%)',
    'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
    'linear-gradient(to top, #84fab0 0%, #8fd3f4 100%)',
    'linear-gradient(to top, #f6d365 0%, #fda085 100%)',
    'linear-gradient(to top, #ff758c 0%, #ff7eb3 100%)',
    'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(to top, #fddb92 0%, #d1fdff 100%)'
];

const HeroWrapper = styled(Box)(({ background, theme }) => ({
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
        height: '79vh'
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    background: `${background} !important`,
    padding: '0 20px',
    position: 'relative'
}));

// Validation Schema
const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    location: Yup.string().required('Location is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    extraField: Yup.string().required('This field is required')
});

const Landing = () => {
    const [gradient, setGradient] = useState(() => gradients[Math.floor(Math.random() * gradients.length)]);
    const isFormOpen = useSelector((state) => state.cart.isFormOpen);
    const [formType, setFormType] = useState(null); // 'team' or 'initiative'
    const theme = useTheme();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setGradient(gradients[Math.floor(Math.random() * gradients.length)]);
    }, []);

    const handleOpenForm = (type) => {
        setFormType(type);
        dispatch(setFormOpen(false));
    };

    const handleCloseForm = () => {
        setFormType(null);
    };

    // Formik Initialization
    const formik = useFormik({
        initialValues: {
            fullName: '',
            location: '',
            phoneNumber: '',
            extraField: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            setLoading(true);

            const emailParams = {
                fullName: values.fullName,
                location: values.location,
                phoneNumber: values.phoneNumber,
                extraField: values.extraField
            };

            emailjs
                .send(
                    'service_3l7htaz', // Replace with your actual Service ID from EmailJS
                    'your_template_id', // Replace with your actual Template ID
                    emailParams,
                    'your_user_id' // Replace with your actual Public Key (User ID)
                )
                .then((response) => {
                    console.log('Email sent successfully:', response);
                    alert('Form submitted successfully!');
                    resetForm();
                    handleCloseForm();
                })
                .catch((error) => {
                    console.error('Error sending email:', error);
                    alert('Failed to send form data.');
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    });
    const ObjectiveSection = styled(Box)(({ theme }) => ({
        padding: theme.spacing(6, 2),
        backgroundColor: '#f5f5f5', // Light grey background for contrast
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(4, 1)
        }
    }));

    const ObjectiveItem = styled(Box)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(3),
        backgroundColor: '#e0e0e0', // Grey inner padding
        borderRadius: theme.shape.borderRadius,
        height: '100%',
        textAlign: 'center'
    }));
    return (
        <>
            <AppBar open={isFormOpen} setOpen={() => dispatch(setFormOpen(!isFormOpen))} />
            <HeroWrapper
                background={gradient}
                sx={{
                    position: 'relative',
                    minHeight: { md: '100vh', xs: '75vh' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden'
                }}
            >
                {/* Left Image (Logo) */}
                <Box
                    component="img"
                    src={logo}
                    alt="Left Image"
                    sx={{
                        position: 'absolute',
                        left: { xs: '10px', sm: '20px', md: '30px' },
                        top: { xs: '20%', sm: '15%', md: '20%' }, // Increased top for mobile
                        transform: 'translateY(-40%)', // Adjusted for better centering
                        width: { xs: '120px', sm: '200px', md: '250px' }, // Slightly larger for xs
                        height: 'auto',
                        zIndex: 1
                    }}
                />

                {/* Nigerian Map Component - Properly Centered */}
                <Box
                    sx={{
                        width: { xs: '80%', sm: '90%', md: '70%' },
                        maxWidth: '700px',
                        position: 'relative',
                        zIndex: 1,
                        marginTop: { xs: '130px' }
                    }}
                >
                    <NigerianMap />
                </Box>

                {/* Yellow Container at the Base with Text and Image */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        display: { xs: 'none', sm: 'flex', md: 'flex' },
                        left: 0,
                        width: '100%',
                        height: { xs: '200px', sm: '250px', md: '300px' },
                        // backgroundColor: 'yellow',
                        zIndex: 0,
                        justifyContent: 'space-between',
                        alignItems: 'center', // Vertically center the content
                        paddingX: { xs: 2, md: 4 } // Add padding for spacing from edges
                    }}
                >
                    {/* Text Element */}
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '18px', sm: '24px', md: '52px' }, // Responsive font size
                            color: 'black', // Ensure visibility on yellow
                            textAlign: 'center',
                            mr: 37
                        }}
                    >
                        Art for Impact
                    </Typography>

                    {/* Image Element */}
                    <Box
                        component="img"
                        src={mantra}
                        alt="Footer Image"
                        sx={{
                            width: { xs: '100px', sm: '300px', md: '400px' }, // Increased size for mobile
                            height: 'auto' // Maintain aspect ratio
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        display: { xs: 'block', sm: 'none' }, // Hide on tablets & desktop
                        overflow: 'hidden', // Prevent text overflow
                        whiteSpace: 'nowrap', // Prevent wrapping
                        position: 'relative',
                        width: '100%' // Ensure it takes full width
                    }}
                >
                    <motion.div
                        initial={{ x: '100%' }} // Start off-screen on the right
                        animate={{ x: '-100%' }} // Move fully left
                        transition={{
                            repeat: Infinity, // Loop infinitely
                            duration: 10, // Speed of scrolling (increase for slower)
                            ease: 'linear' // Smooth continuous motion
                        }}
                        style={{ display: 'inline-block' }} // Ensures smooth animation
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '24px', sm: '32px' },
                                fontWeight: 'bold',
                                color: '#333',
                                textAlign: 'center',
                                display: 'inline-block', // Ensures seamless looping
                                marginRight: '150px',
                                marginTop: { xs: '90px' }
                            }}
                        >
                            ART FOR IMPACT
                        </Typography>
                    </motion.div>
                </Box>
            </HeroWrapper>
            {/* New Objective Section */}
            <ObjectiveSection>
                <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' }, textAlign: 'center', mb: 4 }}>
                    Our Objective
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <ObjectiveItem>
                            <SchoolIcon sx={{ fontSize: 80, color: '#f44336' }} /> {/* Red */}
                            <Typography variant="body1" sx={{ mt: 2, maxWidth: '300px' }}>
                                Educate the citizenry about mitigation measures against Air Pollution.
                            </Typography>
                        </ObjectiveItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ObjectiveItem>
                            <ForumIcon sx={{ fontSize: 80, color: '#4caf50' }} /> {/* Green */}
                            <Typography variant="body1" sx={{ mt: 2, maxWidth: '300px' }}>
                                Drive conversations about actionable policies against Air pollution.
                            </Typography>
                        </ObjectiveItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ObjectiveItem>
                            <StarIcon sx={{ fontSize: 80, color: '#ffeb3b' }} /> {/* Yellow */}
                            <Typography variant="body1" sx={{ mt: 2, maxWidth: '300px' }}>
                                Inspire a new generation of young creatives to embrace their skills and talents for personal growth,
                                community impact and national development.
                            </Typography>
                        </ObjectiveItem>
                    </Grid>
                </Grid>
            </ObjectiveSection>

            <Subscribe />
            <Form2 />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: theme.palette.background.default
                }}
            >
                {/* Two-Box Modal */}
                <Modal open={isFormOpen} onClose={() => dispatch(setFormOpen(false))}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: { xs: '90%', sm: '500px', md: '600px' }, // Responsive width
                            bgcolor: 'background.paper',
                            borderRadius: 2,
                            boxShadow: 24,
                            p: 4,
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3
                        }}
                    >
                        <Typography variant="h5" sx={{ mb: 2 }}>
                            How can we help you!
                        </Typography>

                        {/* Stack for Mobile & Desktop */}
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }} // Column on mobile, row on larger screens
                            spacing={2}
                            justifyContent="center"
                        >
                            {/* Join Our Team Box */}
                            <Box
                                onClick={() => handleOpenForm('team')}
                                sx={{
                                    width: { xs: '100%', sm: '200px' }, // Full width on mobile
                                    height: '200px',
                                    bgcolor: theme.palette.primary.light,
                                    borderRadius: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: 5
                                    }
                                }}
                            >
                                <GroupsIcon sx={{ fontSize: 60, color: theme.palette.primary.main }} />
                                <Typography variant="h6" sx={{ mt: 2 }}>
                                    Artist signup
                                </Typography>
                            </Box>

                            {/* Join Initiative Box */}
                            <Box
                                onClick={() => handleOpenForm('initiative')}
                                sx={{
                                    width: { xs: '100%', sm: '200px' }, // Full width on mobile
                                    height: '200px',
                                    bgcolor: theme.palette.secondary.light,
                                    borderRadius: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: 5
                                    }
                                }}
                            >
                                <CampaignIcon sx={{ fontSize: 60, color: theme.palette.secondary.main }} />
                                <Typography variant="h6" sx={{ mt: 2 }}>
                                    Volunteer
                                </Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Modal>

                {/* Form Modal */}
                <Modal open={!!formType} onClose={handleCloseForm}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '400px',
                            bgcolor: 'background.paper',
                            borderRadius: 2,
                            boxShadow: 24,
                            p: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3
                        }}
                    >
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography variant="h5">{formType === 'team' ? 'Join Our Team' : 'Volunteer'}</Typography>
                            <IconButton onClick={handleCloseForm}>
                                <CloseIcon />
                            </IconButton>
                        </Box>

                        {/* Formik Form */}
                        <form onSubmit={formik.handleSubmit}>
                            <TextField
                                label="Full Name"
                                variant="outlined"
                                fullWidth
                                name="fullName"
                                value={formik.values.fullName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                helperText={formik.touched.fullName && formik.errors.fullName}
                            />

                            <TextField
                                label="Location"
                                variant="outlined"
                                fullWidth
                                name="location"
                                value={formik.values.location}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.location && Boolean(formik.errors.location)}
                                helperText={formik.touched.location && formik.errors.location}
                            />

                            <TextField
                                label="Phone Number"
                                variant="outlined"
                                fullWidth
                                name="phoneNumber"
                                value={formik.values.phoneNumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                            />

                            <TextField
                                label={formType === 'team' ? 'Art Medium' : 'Occupation'}
                                variant="outlined"
                                fullWidth
                                name="extraField"
                                value={formik.values.extraField}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.extraField && Boolean(formik.errors.extraField)}
                                helperText={formik.touched.extraField && formik.errors.extraField}
                            />

                            <Button type="submit" variant="contained" fullWidth sx={{ py: 1.5, color: 'white', mt: 2 }} disabled={loading}>
                                {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Submit'}
                            </Button>
                        </form>
                    </Box>
                </Modal>
            </Box>
            <Footer2 />
        </>
    );
};

export default Landing;
