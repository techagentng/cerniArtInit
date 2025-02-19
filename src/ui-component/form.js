import { Box, Button, Grid, Typography, TextField, InputAdornment, useTheme } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
const StayInTouchSection = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                paddingX: { xs: '16px', sm: '40px', md: '56px' }, // Responsive padding for different screen sizes
                paddingY: 2,
                margin: '0 auto',
                backgroundColor: '#f7f2ec',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // Stack content on small screens, horizontal on larger screens
                justifyContent: 'space-between',
                gap: theme.spacing(4)
            }}
        >
            {/* Left Side with Heading and Text */}
            <Box sx={{ flex: 6, textAlign: { xs: 'left', md: 'left' } }}>
                <Typography
                    variant="h1"
                    sx={{
                        fontWeight: 'bold',
                        marginBottom: theme.spacing(2),
                        marginTop: theme.spacing(8),
                        fontFamily: 'DaxlinePro',
                        marginLeft: { xs: '10px', sm: '6px' }
                    }}
                >
                    Stay in Touch
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        marginBottom: theme.spacing(3),
                        fontWeight: 400,
                        fontSize: { xs: '1rem', sm: '1.2rem', md: '1.2rem' },
                        maxWidth: '700px',
                        marginLeft: { xs: '10px', md: '6px' },
                        marginRight: { md: 'auto' },
                        fontFamily: 'DaxlinePro' // Center text on mobile
                    }}
                >
                    By subscribing to our newsletter, we’ll keep you up to date with all our services, offerings, discounts, and promos.
                </Typography>
            </Box>

            {/* Form Section: Right Side with Input Fields */}
            <Box
                sx={{
                    flex: 4,
                    padding: theme.spacing(4),
                    borderRadius: '1px',
                    width: '100%', // Add background color for contrast on the form section
                    boxShadow: { xs: '0 4px 10px rgba(0, 0, 0, 0.1)', md: 'none' } // Add shadow on mobile
                }}
            >
                {/* Full Name Input with Icon */}
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Full Name" // Add label here
                    sx={{
                        marginBottom: theme.spacing(2),
                        '& .MuiOutlinedInput-root': {
                            height: '45px'
                        },
                        '& .MuiInputLabel-root': {
                            position: 'absolute',
                            top: '-1px', // Adjust to align above the input
                            left: '10px', // Adjust position
                            fontSize: '14px', // Label font size
                            backgroundColor: '#FFFFFF', // Optional: Match the input background
                            padding: '0 4px' // Optional: Add padding around the label
                        }
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                        )
                    }}
                />

                {/* Email and Phone Number Inputs with Icons */}
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Email Address" // Add label here
                            sx={{
                                marginBottom: theme.spacing(2),
                                '& .MuiOutlinedInput-root': {
                                    height: '45px'
                                },
                                '& .MuiInputLabel-root': {
                                    position: 'absolute',
                                    top: '-1px', // Adjust to align above the input
                                    left: '10px', // Adjust position
                                    fontSize: '14px', // Label font size
                                    backgroundColor: '#FFFFFF', // Optional: Match the input background
                                    padding: '0 4px' // Optional: Add padding around the label
                                }
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MailIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Phone Number" // Add label here
                            sx={{
                                marginBottom: theme.spacing(2),
                                '& .MuiOutlinedInput-root': {
                                    height: '45px'
                                },
                                '& .MuiInputLabel-root': {
                                    position: 'absolute',
                                    top: '-1px', // Adjust to align above the input
                                    left: '10px', // Adjust position
                                    fontSize: '14px', // Label font size
                                    backgroundColor: '#FFFFFF', // Optional: Match the input background
                                    padding: '0 4px' // Optional: Add padding around the label
                                }
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                </Grid>

                {/* Subscribe Button */}
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        backgroundColor: '#ff6c78',
                        color: '#fff',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        paddingX: 4,
                        fontFamily: 'DaxlinePro',
                        width: '100%', // Ensures button takes full width
                        '&:hover': {
                            backgroundColor: '#e65555'
                        },
                        paddingY: { xs: theme.spacing(2), sm: theme.spacing(2) } // Adjust padding for mobile
                    }}
                >
                    Subscribe
                </Button>

                {/* Privacy Policy Link */}
                {/* <Typography variant="body2" sx={{ marginTop: theme.spacing(2), textAlign: 'center' }}>
                    By subscribing you agree to our{' '}
                    <Link to="/privacy" style={{ color: '#ff6b6b', cursor:'pointer' }}>
                        Privacy Policy
                    </Link>
                </Typography> */}
            </Box>
        </Box>
    );
};

export default StayInTouchSection;
