import React, { useState } from 'react';
import { Box, Typography, Modal, IconButton, Button, TextField, Stack, CircularProgress, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CampaignIcon from '@mui/icons-material/Campaign';
import GroupsIcon from '@mui/icons-material/Groups';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { useSelector, useDispatch } from 'react-redux';
import { setFormOpen } from 'store/slices/cartslice';

// Validation Schema
const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    location: Yup.string().required('Location is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    extraField: Yup.string().required('This field is required')
});

const GetInvolvedModal = () => {
    const isFormOpen = useSelector((state) => state.cart.isFormOpen);
    const [formType, setFormType] = useState(null); // 'team' or 'initiative'
    const theme = useTheme();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

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
                            sx={{ mt: 2 }}
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
                            sx={{ mt: 2 }}
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
                            sx={{ mt: 2 }}
                        />

                        <Button type="submit" variant="contained" fullWidth sx={{ py: 1.5, color: 'white', mt: 2 }} disabled={loading}>
                            {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Submit'}
                        </Button>
                    </form>
                </Box>
            </Modal>
        </Box>
    );
};

export default GetInvolvedModal;
