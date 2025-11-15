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
    Divider,
    List,
    ListItemText,
    ListItem,
    Link
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { setFormOpen } from 'store/slices/cartslice'; // Adjust path as needed
import FadeInWhenVisible from './Animation2'; // Adjust path as needed
import AppBar from 'ui-component/extended/AppBar';
// import logo from 'assets/images/WhatsApp Image 2025-01-22 at 5.28.png';
import GetInvolvedModal from 'ui-component/GetInvolvedModal';

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
    backgroundColor: '#FF6200', // Fixed typo from '#FF6200y' to '#FF6200'
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
    const packages = [
        {
            title: '1. Diamond sponsors',
            description: '$200, 000 and above',
            bulletPoints: [
                'Brand placement on all 37 Wall murals',
                'Speaker at All the Empowerment Programme & Event Venue Branding',
                'Custom designs tailored to your theme'
            ]
        },
        {
            title: '2. Platinum sponsors',
            description: '$100, 000 - $199, 999',
            bulletPoints: ['Coordinated nail art', 'Rejuvenating treatments', 'Personalized attention']
        },
        {
            title: '3. Gold sponsors',
            description: '$50, 000 - $99, 999',
            bulletPoints: ['Clean and classic nail grooming', 'Relaxation therapy', 'Subtle, masculine finishes']
        }
    ];

    const generalBenefits = [
        "Contribution to reducing Air pollution with the use of Technology.",
        "Social Impact - Empowering 10,000 Female Entrepreneurs & Female Creatives in Nigeria.",
        "Build or improve positive brand reputation.",
        "Gain brand recognition and attention from over 200,000 people who may not have otherwise heard of your brand."
    ];

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

            <Container sx={{ paddingY: { xs: 5, md: 10 } }}>
                <FadeInWhenVisible animationType="fadeIn" delay={0.3}>
                    <Jumbo sx={{ padding: { xs: 2, sm: 3, md: 6 } }}>
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
                                            textAlign: 'left'
                                        }}
                                    >
                                        By Cera Cerni’s Art Initiative
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: { xs: '1rem', md: '1.25rem' },
                                            textAlign: 'left',
                                            color: '#333',
                                            mt: 2
                                        }}
                                    >
                                        Support our mission to promote clean air through art. Your monthly donation helps fund art
                                        installations, workshops, and community events across 774 local governments. New monthly donations
                                        are matched for the first 12 months, tripling your impact for a year!
                                    </Typography>
                                    <Box sx={{ maxWidth: '400px', mt: 2 }}>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FF6200', mb: 1, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                                            Benefits of Monthly Giving
                                        </Typography>
                                        <Box
                                            component="ul"
                                            sx={{
                                                paddingLeft: '20px',
                                                color: '#333',
                                                fontSize: { xs: '1rem', md: '1.25rem' },
                                                listStylePosition: 'outside',
                                                '& li': {
                                                    marginBottom: '8px',
                                                    whiteSpace: { xs: 'normal', md: 'nowrap' }
                                                }
                                            }}
                                        >
                                            <li>Fund sustainable clean air art projects year-round</li>
                                            <li>Receive updates on art events and exhibitions</li>
                                            <li>Get monthly tax statements for your records</li>
                                        </Box>
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

                                    {/* Submit Button */}
                                    <Button variant="contained" sx={ButtonSX} onClick={handleFormClick}>
                                        Submit
                                    </Button>
                                </Stack>
                            </Grid>
                            <Grid container spacing={4} sx={{ mt: 4 }}>
                                {packages.map((pkg, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Box
                                            sx={{
                                                padding: 3,
                                                borderRadius: '4px',
                                                backgroundColor: '#fff',
                                                textAlign: { xs: 'center', md: 'left' }
                                            }}
                                        >
                                            {/* Numbered Heading */}
                                            <Typography
                                                variant="h3"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    mb: 2,
                                                    fontFamily: 'DaxlinePro',
                                                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '1.8rem' },
                                                    textAlign: { xs: 'center', md: 'left' }
                                                }}
                                            >
                                                {pkg.title}
                                            </Typography>

                                            {/* Description */}
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    mb: 2,
                                                    fontFamily: 'DaxlinePro',
                                                    fontSize: { xs: '0.9rem', md: '1rem' },
                                                    textAlign: { xs: 'center', md: 'left' }
                                                }}
                                            >
                                                {pkg.description}
                                            </Typography>

                                            {/* Divider */}
                                            <Divider sx={{ mb: 2 }} />

                                            {/* Bulleted List */}
                                            <List
                                                sx={{
                                                    backgroundColor: '#f7f2ec',
                                                    padding: { xs: 1, md: 2 },
                                                    borderRadius: '4px'
                                                }}
                                            >
                                                {pkg.bulletPoints.map((point, idx) => (
                                                    <ListItem key={idx} disableGutters>
                                                        <ListItemText 
                                                            primary={point}
                                                            primaryTypographyProps={{
                                                                sx: { fontSize: { xs: '0.85rem', md: '1rem' } }
                                                            }}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>

                                            {/* Divider after list */}
                                            <Divider sx={{ mb: 2 }} />

                                            {/* Descriptive Text Below Divider */}
                                            <Typography variant="body1" sx={{ mb: 2, fontFamily: 'DaxlinePro', fontSize: { xs: '0.9rem', md: '1rem' }, textAlign: { xs: 'center', md: 'left' } }}>
                                                Perfect for the bride looking for a flawless, glamorous finish that lasts all day.
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>

                            {/* General Benefits to Our Sponsors Section */}
                            <Grid item xs={12} sx={{ mt: { xs: 3, md: 6 } }}>
                                <Box
                                    sx={{
                                        backgroundColor: '#f7f2ec',
                                        padding: { xs: 2, sm: 3, md: 4 },
                                        borderRadius: '8px',
                                        border: '1px solid #FF6200'
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: '#FF6200',
                                            textAlign: 'center',
                                            mb: 3,
                                            fontSize: { xs: '1.2rem', md: '1.5rem' }
                                        }}
                                    >
                                        General Benefits to Our Sponsors
                                    </Typography>
                                    <Grid container spacing={2}>
                                        {generalBenefits.map((benefit, index) => (
                                            <Grid item xs={12} sm={6} key={index}>
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        fontSize: { xs: '0.95rem', md: '1.1rem' },
                                                        color: '#333',
                                                        textAlign: { xs: 'center', sm: 'left' },
                                                        fontWeight: 'medium'
                                                    }}
                                                >
                                                    {benefit}
                                                </Typography>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </Grid>

                            {/* Footer Information */}
                            <Grid item xs={12}>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        textAlign: 'center',
                                        color: '#666',
                                        fontSize: { xs: '0.75rem', md: '0.875rem' },
                                        maxWidth: '800px',
                                        mx: 'auto',
                                        px: { xs: 1, md: 0 }
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
            <GetInvolvedModal />
        </>
    );
};

export default MonthlyDonation;
