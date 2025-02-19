import React from 'react';
import { Box, Typography, Grid, Link, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { LocationOn, Phone, Email, Instagram, Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import footer from 'ui-component/sanni-top.png';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            sx={{
                backgroundColor: '#ffff',
                paddingY: 4,
                paddingX: { xs: '16px', sm: '40px', md: '60px' }, // Responsive padding for different screen sizes
                marginTop: 'auto' // Push footer to bottom
            }}
        >
            <Grid container spacing={isMobile ? 2 : 23}>
                {/* First Column - Logo */}
                <Grid item xs={12} md={3}>
                    <Box
                        component="img"
                        src={footer}
                        alt="Logo"
                        sx={{
                            width: '120px',
                            objectFit: 'contain',
                            '@media (max-width: 600px)': {
                                width: '120px',
                                marginLeft: '7px'
                            }
                        }}
                        style={{
                            display: 'block' // Prevents extra spacing
                        }}
                    />
                </Grid>

                {/* Second Column - Address */}
                <Grid item xs={12} md={3}>
                    <Typography variant="h4" sx={{ marginBottom: 2, marginLeft: { xs: '20px' } }}>
                        Address:
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LocationOn sx={{ marginRight: 2, marginLeft: { xs: '17px' } }} />
                        <Typography variant="body1" sx={{ fontSize: { xs: '14px', sm: '16px' } }}>
                            65B Akintunde Adeyemi Drive Off Adewale Kuku, Lekki Phase 1, Lagos.
                        </Typography>
                    </Box>
                </Grid>

                {/* Third Column - Contact */}
                <Grid item xs={12} md={3}>
                    <Typography variant="h4" sx={{ marginBottom: 2, marginLeft: { xs: '20px' } }}>
                        Contact:
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                            <Phone sx={{ marginRight: 2, marginLeft: { xs: '20px' } }} />
                            <Typography variant="body1" sx={{ fontSize: { xs: '14px', sm: '16px' } }}>
                                08061176101
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Email sx={{ marginRight: 2, marginLeft: { xs: '20px' } }} />
                            <Typography variant="body1" sx={{ fontSize: { xs: '14px', sm: '16px' } }}>
                            bm@ceracerniai.org
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                {/* Fourth Column - Follow Us */}
                <Grid item xs={12} md={3}>
                    <Typography variant="h4" sx={{ marginBottom: 2, marginLeft: { xs: '20px' } }}>
                        Follow us @ceracerni
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, marginLeft: { xs: '6px' } }}>
                        <IconButton href="#" target="_blank">
                            <Instagram sx={{ color: '#ff6c78', fontSize: 30 }} />
                        </IconButton>
                        <IconButton href="#" target="_blank">
                            <Facebook sx={{ color: '#ff6c78', fontSize: 30 }} />
                        </IconButton>
                        <IconButton href="#" target="_blank">
                            <Twitter sx={{ color: '#ff6c78', fontSize: 30 }} />
                        </IconButton>
                        <IconButton href="#" target="_blank">
                            <LinkedIn sx={{ color: '#ff6c78', fontSize: 30 }} />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>

            {/* Footer Divider Line */}
            <Box sx={{ borderBottom: '1px solid #d1d1d1', marginY: 4 }} />

            {/* Bottom Section - Copyright and Links */}
            <Grid
                container
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: { xs: 2, sm: 4 },
                    width: '100%',
                    alignItems: 'center'
                }}
            >
                {/* Left Side - Copyright Text */}
                <Grid item xs={12} md={6}>
                    <Typography variant="body2" sx={{ textAlign: 'left', fontSize: { xs: '12px', sm: '14px' } }}>
                        © 2025 Ceracerni Art Initiative. All rights reserved.
                    </Typography>
                </Grid>

                {/* Right Side - Menu Links */}
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: 'flex-start', md: 'flex-end' },
                        gap: 3,
                        textAlign: { xs: 'left', md: 'right' }
                    }}
                >
                    <Link
                        href="#"
                        sx={{
                            textDecoration: 'none',
                            color: '#000',
                            fontSize: { xs: '12px', sm: '14px' },
                            cursor: 'pointer'
                        }}
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="/terms"
                        sx={{
                            textDecoration: 'none',
                            color: '#000',
                            fontSize: { xs: '12px', sm: '14px' },
                            cursor: 'pointer'
                        }}
                    >
                        Terms of Use
                    </Link>
                    <Link
                        href="#"
                        sx={{
                            textDecoration: 'none',
                            color: '#000',
                            fontSize: { xs: '12px', sm: '14px' },
                            cursor: 'pointer'
                        }}
                    >
                        Cookie Policy
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
