import React, { useState } from 'react';
import {
    Button,
    Container,
    Grid,
    Paper,
    Stack,
    Typography,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Box,
    Link
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { setFormOpen } from 'store/slices/cartslice'; // Adjust path as needed
import FadeInWhenVisible from './Animation2'; // Adjust path as needed
import AppBar from 'ui-component/extended/AppBar';

// Styled Paper for the main container
const Jumbo = styled(Paper)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff', // White background to match the document
    margin: '0 auto',
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: 'none' // Remove shadow for a cleaner look
});

// Button styling with orange accent from the document
const ButtonSX = {
    borderRadius: 4,
    backgroundColor: '#FF6200', // Orange from "CIAIR 36"
    color: 'white',
    padding: '12px 30px',
    width: '100%',
    marginTop: '20px',
    '&:hover': {
        backgroundColor: '#e05700'
    }
};

const MonthlyDonation = () => {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(25); // Default donation amount
    const [customAmount, setCustomAmount] = useState('');
    const [isCustom, setIsCustom] = useState(false);

    const handleFormClick = () => {
        dispatch(setFormOpen(true)); // Opens a modal (assumes Redux setup)
    };

    const handleAmountChange = (event) => {
        const value = event.target.value;
        if (value === 'other') {
            setIsCustom(true);
            setAmount('');
        } else {
            setIsCustom(false);
            setAmount(value);
        }
    };

    return (
        <>
        <AppBar />
            <Container sx={{ paddingY: 8 }}>
                <FadeInWhenVisible animationType="fadeIn" delay={0.3}>
                    <Jumbo sx={{ padding: { xs: 4, md: 6 } }}>
                        <Grid container spacing={4} alignItems="center">
                            {/* Left Section: Campaign Info */}
                            <Grid item xs={12} md={6}>
                                <Stack spacing={2} alignItems={{ xs: 'center', md: 'flex-start' }}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontSize: { xs: '1.2rem', md: '1.5rem' },
                                            color: '#FF6200', // Orange for "CI"
                                            display: 'inline',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        CIAIR 36{' '}
                                        <Typography
                                            variant="h6"
                                            component="span"
                                            sx={{
                                                fontSize: { xs: '1.2rem', md: '1.5rem' },
                                                color: '#000',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            A CLEAN AIR ART CAMPAIGN
                                        </Typography>
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            fontSize: '1rem',
                                            color: '#000',
                                            textAlign: { xs: 'center', md: 'left' }
                                        }}
                                    >
                                        By Cera Cerni’s Art Initiative
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: { xs: '1rem', md: '1.25rem' },
                                            textAlign: { xs: 'center', md: 'left' },
                                            color: '#333',
                                            mt: 2
                                        }}
                                    >
                                        Support our mission to promote clean air through art. Your monthly donation helps fund art
                                        installations, workshops, and community events across 774 local governments. New monthly donations
                                        are matched for the first 12 months, tripling your impact for a year!
                                    </Typography>
                                    <Box sx={{ maxWidth: '400px', mt: 2 }}>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FF6200', mb: 1 }}>
                                            Benefits of Monthly Giving
                                        </Typography>
                                        <ul style={{ paddingLeft: '20px', color: '#333' }}>
                                            <li>Fund sustainable clean air art projects year-round</li>
                                            <li>Receive updates on art events and exhibitions</li>
                                            <li>Get monthly tax statements for your records</li>
                                            <li>Enjoy hassle-free automatic donations</li>
                                            <li>Change or cancel your gift anytime</li>
                                            <li>Join a creative community for clean air</li>
                                        </ul>
                                    </Box>
                                </Stack>
                            </Grid>

                            {/* Right Section: Donation Form */}
                            <Grid item xs={12} md={6}>
                                <Stack spacing={3} sx={{ width: '100%', maxWidth: '500px', mx: 'auto' }}>
                                    {/* Amount Selection */}
                                    <FormControl fullWidth>
                                        <InputLabel id="donation-amount-label">Monthly Donation Amount</InputLabel>
                                        <Select
                                            labelId="donation-amount-label"
                                            value={isCustom ? 'other' : amount}
                                            label="Monthly Donation Amount"
                                            onChange={handleAmountChange}
                                        >
                                            <MenuItem value={10}>$10</MenuItem>
                                            <MenuItem value={25}>$25</MenuItem>
                                            <MenuItem value={50}>$50</MenuItem>
                                            <MenuItem value={100}>$100</MenuItem>
                                            <MenuItem value="other">Other Amount</MenuItem>
                                        </Select>
                                    </FormControl>
                                    {isCustom && (
                                        <TextField
                                            label="Custom Amount"
                                            type="number"
                                            value={customAmount}
                                            onChange={(e) => setCustomAmount(e.target.value)}
                                            InputProps={{ inputProps: { min: 1 } }}
                                            fullWidth
                                        />
                                    )}

                                    {/* Personal Information */}
                                    <TextField label="First Name" fullWidth />
                                    <TextField label="Last Name" fullWidth />
                                    <TextField label="Email Address" type="email" fullWidth />

                                    {/* Payment Information */}
                                    <TextField label="Credit Card Number" fullWidth />
                                    <Stack direction="row" spacing={2}>
                                        <TextField label="Expiration Date (MM/YY)" fullWidth />
                                        <TextField label="CVV" fullWidth />
                                    </Stack>
                                    <TextField label="Billing Address" fullWidth />

                                    {/* Submit Button */}
                                    <Button variant="contained" sx={ButtonSX} onClick={handleFormClick}>
                                        Start My Monthly Gift
                                    </Button>
                                </Stack>
                            </Grid>

                            {/* Footer Information */}
                            <Grid item xs={12}>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        textAlign: 'center',
                                        color: '#666',
                                        fontSize: '0.875rem',
                                        maxWidth: '800px',
                                        mx: 'auto'
                                    }}
                                >
                                    Your credit card will be charged today for your first gift, then around the 16th of each month. All
                                    donations are secure and tax-deductible. Questions? Contact us at support@ceracerniart.org. Protected by
                                    reCAPTCHA, see our{' '}
                                    <Link href="#" underline="hover" color="inherit">
                                        Privacy Policy
                                    </Link>
                                    .
                                </Typography>
                            </Grid>
                        </Grid>
                    </Jumbo>
                </FadeInWhenVisible>
            </Container>
        </>
    );
};

export default MonthlyDonation;
