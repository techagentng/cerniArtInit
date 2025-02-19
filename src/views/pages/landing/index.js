import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import AppBar from 'ui-component/extended/AppBar';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import NigerianMap from './NigerianMap';
import logo from './WhatsApp Image 2025-01-22 at 5.28.png';
import mantra from './2025-01-22 at 3.28.png';
import Form2 from 'ui-component/form';
import Footer2 from 'ui-component/footer';
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

    useEffect(() => {
        setGradient(gradients[Math.floor(Math.random() * gradients.length)]);
    }, []);

    return (
        <>
            <AppBar />
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
                        right: { xs: '20px', sm: '100px', md: '300px', xl:'700px' },
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
            <Footer2 />
        </>
    );
};

export default Landing;
