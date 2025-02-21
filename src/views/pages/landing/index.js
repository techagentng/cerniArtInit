import React, { useEffect, useState } from 'react';
import { Box, Typography, Modal, IconButton, Button, TextField, Stack, useTheme, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AppBar from 'ui-component/extended/AppBar';
import { styled } from '@mui/material/styles';
// import { keyframes } from '@mui/system';
import NigerianMap from './NigerianMap';
import logo from './WhatsApp Image 2025-01-22 at 5.28.png';
import mantra from './2025-01-22 at 3.28.png';
import Form2 from 'ui-component/form';
import Footer2 from 'ui-component/footer';
import { setFormOpen } from 'store/slices/cartslice';
import { useSelector, useDispatch } from 'react-redux';
import CampaignIcon from '@mui/icons-material/Campaign';
import GroupsIcon from '@mui/icons-material/Groups';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// const bounce = keyframes`
//   0%, 100% { transform: translateY(-50%); }
//   50% { transform: translateY(-55%); }
// `;

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

    return (
        <>
            <AppBar open={isFormOpen} setOpen={() => dispatch(setFormOpen(!isFormOpen))} />
            <HeroWrapper
                background={gradient}
                sx={{
                    position: 'relative',
                    minHeight: { md: '100vh', xs: '65vh' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end', // Ensures the yellow box stays at the bottom
                    overflow: 'hidden' // Prevents overflow issues
                }}
            >
                {/* Left Image (Logo) */}
                <Box
                    component="img"
                    src={logo}
                    alt="Left Image"
                    sx={{
                        position: 'absolute',
                        left: { xs: '10px', sm: '20px' },
                        top: { xs: '20%', sm: '20%' },
                        transform: 'translateY(-50%)',
                        width: { xs: '120px', sm: '250px' },
                        height: 'auto',
                        zIndex: 1
                    }}
                />

                {/* Nigerian Map Component */}
                <Box
                    sx={{
                        width: '90%',
                        maxWidth: '700px',
                        margin: '0 auto', // Center the map
                        zIndex: 1,
                        position: 'relative', // Ensure it stays in the flow
                        top: { xs: '-25%', sm: '32%' }
                    }}
                >
                    <NigerianMap />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between', // Spaces the text and image
                        alignItems: 'flex-end', // Aligns them vertically
                        width: '49%', // Ensures it takes full width
                        paddingX: { xs: 2, sm: 5, md: 2 },
                        zIndex: 3000,
                        position: { xs: 'absolute', md: 'relative' },
                        bottom: { xs: 25, md: -50 },
                        right: { xs: 0 }
                    }}
                >
                    {/* Right Image */}
                    <Box
                        component="img"
                        src={mantra}
                        alt="Right Image"
                        sx={{
                            width: { xs: '170px', sm: '250px', md: '300px' },
                            height: { xs: '200px', sm: '300px', md: '350px' },
                            marginLeft: 'auto'
                        }}
                    />
                </Box>
                <Typography variant="h1" sx={{ position: 'absolute', left: 14, bottom: 80, display: { md: 'none', sm: 'none' } }}>
                    Art for <br />
                    impact
                </Typography>
                <Typography variant="h1" sx={{position:'absolute', left:420, bottom: 80 }}>
                    Art for impact
                </Typography>
            </HeroWrapper>

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
                            width: '600px',
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
                        <Typography variant="h4" sx={{ mb: 2 }}>
                            How can we help you!
                        </Typography>
                        <Stack direction="row" spacing={4} justifyContent="center">
                            {/* Join Our Team Box */}
                            <Box
                                onClick={() => handleOpenForm('team')}
                                sx={{
                                    width: '200px',
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
                                    width: '200px',
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
