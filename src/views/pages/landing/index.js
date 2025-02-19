import React, { useEffect, useState } from 'react';
import { Box, Typography, Modal, IconButton, Button, TextField, Stack, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AppBar from 'ui-component/extended/AppBar';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import NigerianMap from './NigerianMap';
import logo from './WhatsApp Image 2025-01-22 at 5.28.png';
import mantra from './2025-01-22 at 3.28.png';
import Form2 from 'ui-component/form';
import Footer2 from 'ui-component/footer';
import { setFormOpen } from 'store/slices/cartslice';
import { useSelector, useDispatch } from 'react-redux';
import CampaignIcon from '@mui/icons-material/Campaign';
import GroupsIcon from '@mui/icons-material/Groups';

const bounce = keyframes`
  0%, 100% { transform: translateY(-50%); }
  50% { transform: translateY(-55%); }
`;

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

const HeroWrapper = styled(Box)(({ background }) => ({
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    background: `${background} !important`, // Ensures the background is applied
    padding: '0 20px',
    position: 'relative'
}));

const Landing = () => {
    const [gradient, setGradient] = useState(() => gradients[Math.floor(Math.random() * gradients.length)]);
    const isFormOpen = useSelector((state) => state.cart.isFormOpen);
    const [formType, setFormType] = useState(null); // 'team' or 'initiative'
    const theme = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        setGradient(gradients[Math.floor(Math.random() * gradients.length)]);
    }, []);

    const handleOpenForm = (type) => {
        setFormType(type);
        dispatch(setFormOpen(false)); // Close the two-box modal
    };

    const handleCloseForm = () => {
        setFormType(null); // Reset formType to close the form modal
    };

    return (
        <>
            <AppBar open={isFormOpen} setOpen={() => dispatch(setFormOpen(!isFormOpen))} />
            <HeroWrapper background={gradient}>
                {/* Left Image */}
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

                {/* Heading and Description */}
                <Box
                    sx={{
                        position: 'absolute',
                        left: { xs: '25px', sm: '180px' },
                        top: { xs: '73%', sm: '48%' },
                        textAlign: 'left',
                        maxWidth: { md: '400px', xs: '300px' },
                        zIndex: 2
                    }}
                >
                    <Typography variant="h1" sx={{ fontSize: { xs: '24px', sm: '36px' }, fontWeight: 'bold' }}>
                        Nigeria
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: { xs: '14px', sm: '16px' }, marginTop: '8px' }}>
                        Cera Cernis Art Initiative is a dynamic platform dedicated to nurturing and promoting creativity. We believe in the
                        transformative power of art and its ability to inspire, challenge, and connect individuals across cultures and
                        communities.
                    </Typography>
                </Box>

                {/* Right Image */}
                <Box
                    component="img"
                    src={mantra}
                    alt="Right Image"
                    sx={{
                        position: 'absolute',
                        right: { xs: '20px', sm: '100px', md: '300px', xl: '700px' },
                        top: { xs: '60%', sm: '60%' },
                        transform: 'translateY(-50%)',
                        width: { xs: '200px', sm: '350px', md: '400px' },
                        height: 'auto',
                        zIndex: 9,
                        animation: `${bounce} 1.5s infinite ease-in-out`
                    }}
                />

                {/* Nigerian Map Component */}
                <Box sx={{ width: '100%', maxWidth: '700px', margin: '0 auto', zIndex: 1 }}>
                    <NigerianMap />
                </Box>
            </HeroWrapper>
            <Form2 />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
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
                            Join Us
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
                                    Join Our Team
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
                                    Join Initiative
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
                            <Typography variant="h5">{formType === 'team' ? 'Join Our Team' : 'Join Initiative'}</Typography>
                            <IconButton onClick={handleCloseForm}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <TextField label="Full Name" variant="outlined" fullWidth />
                        <TextField label="Location" variant="outlined" fullWidth />
                        <TextField label="Phone number" variant="outlined" fullWidth />
                        <TextField label={formType === 'team' ? 'Art medium' : 'Occupation'} variant="outlined" fullWidth />
                        <Button variant="contained" fullWidth sx={{ py: 1.5, color: 'white' }}>
                            Submit
                        </Button>
                    </Box>
                </Modal>
            </Box>
            <Footer2 />
        </>
    );
};

export default Landing;