import React from 'react';
import { Typography, Box, Grid, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AppBar from 'ui-component/extended/AppBar';
import Footer from 'ui-component/footer';
import user from './icons8-user-50.png';
import email from './icons8-email-50.png';
import phone from './icons8-phone-50.png';
// import paystack from './Group.png';
// import frame from './frame.png';

// Validation Schema
const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string()
        .matches(/^[0-9]{11}$/, 'Phone number must be 11 digits')
        .required('Phone is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    shippingMethod: Yup.string().required('Shipping method is required'),
    paymentMethod: Yup.string().required('Payment method is required')
});

const CheckoutPage = () => {
    const cartItems = useSelector((state) => state.cart.items); // Access cart items from Redux

    // Handle form submission
    const handleSubmit = (values) => {
        console.log('Form Data:', values);
        // Prepare the payload for the API call
        const payload = {
            ...values,
            cartItems,
            totalAmount: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
        };
        console.log('Payload:', payload);
        // Make API call here
    };

    return (
        <>
            <AppBar />
            <Box sx={{ padding: '2rem 1rem', maxWidth: '1500px', margin: '0 auto' }}>
                <Typography variant="h1" sx={{ textAlign: 'left', marginBottom: '2rem' }}>
                    Checkout
                </Typography>

                <Formik
                    initialValues={{
                        fullName: '',
                        email: '',
                        phone: '',
                        address: '',
                        city: '',
                        state: '',
                        shippingMethod: 'pickInStoreLagos',
                        paymentMethod: 'cardPayment'
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values, handleChange, handleBlur }) => (
                        <Form>
                            <Grid container spacing={4}>
                                {/* Left Column: Contact & Shipping Information */}
                                <Grid item xs={12} md={6}>
                                    {/* Contact Section */}
                                    <Box
                                        sx={{
                                            backgroundColor: '#fff',
                                            padding: '1rem',
                                            borderRadius: '8px',
                                            boxShadow: 1,
                                            marginBottom: '2rem'
                                        }}
                                    >
                                        <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
                                            Contact
                                        </Typography>
                                        <Field
                                            as={TextField}
                                            label="Full Name"
                                            fullWidth
                                            variant="outlined"
                                            name="fullName"
                                            value={values.fullName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            sx={{ marginBottom: '1rem' }}
                                            placeholder="Enter Fullname"
                                            InputProps={{
                                                startAdornment: (
                                                    <IconButton>
                                                        <img src={user} alt="user icon" style={{ width: 20, height: 20 }} />
                                                    </IconButton>
                                                )
                                            }}
                                        />
                                        <ErrorMessage name="fullName" component="div" style={{ color: 'red', fontSize: '0.875rem' }} />

                                        <Field
                                            as={TextField}
                                            label="Email Address"
                                            fullWidth
                                            variant="outlined"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            sx={{ marginBottom: '1rem' }}
                                            placeholder="Enter Email"
                                            InputProps={{
                                                startAdornment: (
                                                    <IconButton>
                                                        <img src={email} alt="email icon" style={{ width: 20, height: 20 }} />
                                                    </IconButton>
                                                )
                                            }}
                                        />
                                        <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '0.875rem' }} />

                                        <Field
                                            as={TextField}
                                            label="Phone"
                                            fullWidth
                                            variant="outlined"
                                            name="phone"
                                            value={values.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            sx={{ marginBottom: '1rem' }}
                                            placeholder="Put in your phone number"
                                            InputProps={{
                                                startAdornment: (
                                                    <IconButton>
                                                        <img src={phone} alt="phone icon" style={{ width: 20, height: 20 }} />
                                                    </IconButton>
                                                )
                                            }}
                                        />
                                        <ErrorMessage name="phone" component="div" style={{ color: 'red', fontSize: '0.875rem' }} />
                                    </Box>

                                    {/* Address Section */}
                                    <Box
                                        sx={{
                                            backgroundColor: '#fff',
                                            padding: '1rem',
                                            borderRadius: '8px',
                                            boxShadow: 1,
                                            marginBottom: '2rem'
                                        }}
                                    >
                                        <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
                                            Address
                                        </Typography>
                                        <Field
                                            as={TextField}
                                            label="Address"
                                            fullWidth
                                            placeholder="Enter Address"
                                            variant="outlined"
                                            name="address"
                                            value={values.address}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            InputProps={{
                                                startAdornment: (
                                                    <IconButton>
                                                        <img src={email} alt="address icon" style={{ width: 20, height: 20 }} />
                                                    </IconButton>
                                                )
                                            }}
                                            sx={{ marginBottom: '1rem' }}
                                        />
                                        <ErrorMessage name="address" component="div" style={{ color: 'red', fontSize: '0.875rem' }} />

                                        <Field
                                            as={TextField}
                                            label="City"
                                            fullWidth
                                            placeholder="Enter City"
                                            variant="outlined"
                                            name="city"
                                            value={values.city}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            InputProps={{
                                                startAdornment: (
                                                    <IconButton>
                                                        <img src={email} alt="city icon" style={{ width: 20, height: 20 }} />
                                                    </IconButton>
                                                )
                                            }}
                                            sx={{ marginBottom: '1rem' }}
                                        />
                                        <ErrorMessage name="city" component="div" style={{ color: 'red', fontSize: '0.875rem' }} />

                                        <Field
                                            as={TextField}
                                            label="State"
                                            fullWidth
                                            placeholder="Enter State"
                                            name="state"
                                            value={values.state}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            InputProps={{
                                                startAdornment: (
                                                    <IconButton>
                                                        <img src={email} alt="state icon" style={{ width: 20, height: 20 }} />
                                                    </IconButton>
                                                )
                                            }}
                                            variant="outlined"
                                            sx={{ marginBottom: '1rem' }}
                                        />
                                        <ErrorMessage name="state" component="div" style={{ color: 'red', fontSize: '0.875rem' }} />
                                    </Box>

                                    {/* Shipping Method */}
                                    <Box
                                        sx={{
                                            backgroundColor: '#fff',
                                            padding: '1rem',
                                            borderRadius: '8px',
                                            boxShadow: 1,
                                            marginBottom: '2rem'
                                        }}
                                    >
                                        <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
                                            Shipping Method
                                        </Typography>
                                        <FormControl component="fieldset" sx={{ width: '100%' }}>
                                            <RadioGroup name="shippingMethod" value={values.shippingMethod} onChange={handleChange}>
                                                <FormControlLabel
                                                    value="pickInStoreLagos"
                                                    control={<Radio />}
                                                    label="Pick in Store (Lagos only - Anytime)"
                                                />
                                                <FormControlLabel
                                                    value="withinLagos"
                                                    control={<Radio />}
                                                    label="Within Lagos (1 - 2 days)"
                                                />
                                                <FormControlLabel
                                                    value="outsideLagos"
                                                    control={<Radio />}
                                                    label="Outside Lagos (3 - 7 days)"
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                        <ErrorMessage
                                            name="shippingMethod"
                                            component="div"
                                            style={{ color: 'red', fontSize: '0.875rem' }}
                                        />
                                    </Box>

                                    {/* Payment Section */}
                                    <Box sx={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '8px', boxShadow: 1 }}>
                                        <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
                                            Payment
                                        </Typography>
                                        <FormControl component="fieldset" sx={{ width: '100%' }}>
                                            <RadioGroup name="paymentMethod" value={values.paymentMethod} onChange={handleChange}>
                                                <FormControlLabel value="payOnDelivery" control={<Radio />} label="Pay on Delivery" />
                                                <FormControlLabel value="cardPayment" control={<Radio />} label="Card Payment" />
                                            </RadioGroup>
                                        </FormControl>
                                        <ErrorMessage name="paymentMethod" component="div" style={{ color: 'red', fontSize: '0.875rem' }} />
                                    </Box>
                                </Grid>

                                {/* Right Column: Checkout Summary */}
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '8px', boxShadow: 1 }}>
                                        <Typography variant="h6" sx={{ marginBottom: '1rem' }}>
                                            Cart Summary
                                        </Typography>
                                        <Box sx={{ marginBottom: '1rem' }}>
                                            {cartItems.map((item, index) => (
                                                <Box
                                                    key={index}
                                                    sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}
                                                >
                                                    <Typography>{item.name}</Typography>
                                                    <Typography>
                                                        {item.quantity} x ${item.price}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Box>

                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                            <Typography>Total:</Typography>
                                            <Typography>${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</Typography>
                                        </Box>

                                        {/* Checkout Button */}
                                        <Button type="submit" variant="contained" sx={{ color: 'white' }} fullWidth>
                                            Proceed to Payment
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Box>
            <Footer />
        </>
    );
};

export default CheckoutPage;
