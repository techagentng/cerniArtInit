import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Grid, Stack, Typography } from '@mui/material';

// third party
import { motion } from 'framer-motion';

// Images
import Hero from './Picture4.jpg';
import Hero2 from './Picture1.jpg';
const HeaderImage = styled('img')({
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: '20px 5px',
    borderRadius: '30px',
    objectFit: 'cover'
});

const HeaderSection = () => {
    const headerSX = {
        fontSize: { xs: '2rem', sm: '2.5rem', md: '2.5rem', lg: '2.5rem' }
    };

    return (
        <Container>
            <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: { xs: 10, sm: 6, md: 18.75 }, mb: { xs: 2.5, md: 10 } }}
            >
                <Grid item xs={12}>
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ type: 'spring', stiffness: 150, damping: 30 }}
                            >
                                <Stack spacing={1}>
                                    <Typography textAlign={{ xs: 'center', md: 'left' }} variant="h1" sx={headerSX}>
                                        About Cera Cerni Art initiative
                                    </Typography>
                                </Stack>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.2 }}
                            >
                                <Typography
                                    textAlign={{ xs: 'center', md: 'left' }}
                                    color="text.primary"
                                    variant="body1"
                                    sx={{ fontSize: { xs: '0.8rem', md: '1rem' }, paddingY: '10px', width: { xs: '100%', md: '50%' } }}
                                >
                                  Cera Cerni&apos;s Art Initiative is a dynamic platform dedicated to nurturing and promoting creativity. We believe in the transformative power of art and its ability to inspire, challenge, and connect individuals across cultures and communities.<br />
                                </Typography>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <HeaderImage src={Hero} />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: { xs: 'center', md: 'left' }, marginLeft: { xs: 0, md: '50%' }, px: { xs: 2, md: 0 } }}>
                    <motion.div
                        initial={{ opacity: 0, translateY: 550 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ type: 'spring', stiffness: 150, damping: 30 }}
                    >
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, translateY: 550 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.2 }}
                    >
                        <Typography variant="h1" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
                            Our Mission
                        </Typography>

                        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: '1.3rem', md: '2rem' } }}>
                            Project Overview
                        </Typography>

                        <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                            The project intends to utilize the installation of <strong>One Wall Mural</strong> using{' '}
                            <strong>AIR-INK©</strong> at an iconic/strategic location within each of the 36 states of the Nigerian
                            Federation. This aims to highlight the problem of poor air quality and drive both local and national
                            conversations to influence policy actions on improving air quality in Nigeria.
                        </Typography>

                        <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                            <strong>AIR-INK©</strong> is a proprietary brand of ink and composite products made by condensing carbon-based
                            gaseous effluents generated from air pollution due to incomplete combustion of fossil fuels. This innovative
                            technology seeks to reverse the negative effects of poor air quality.
                        </Typography>

                        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: '1.3rem', md: '2rem' } }}>
                            Women Empowerment Programme
                        </Typography>

                        <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                            The project also aims to organize an empowerment programme for female entrepreneurs and women in business within
                            the <strong>Creative Economy</strong> of each state in the Federation. This initiative will harness the power of
                            creativity to support solutions for environmental challenges.
                        </Typography>
                    </motion.div>
                </Grid>
            </Grid>
            <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: { xs: 10, sm: 6, md: 18.75 }, mb: { xs: 2.5, md: 10 } }}
            >
                <Grid item xs={12}>
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ type: 'spring', stiffness: 150, damping: 30 }}
                            >
                                <Stack spacing={1}>
                                    <Typography textAlign={{ xs: 'center', md: 'left' }} variant="h1" sx={headerSX}>
                                    Our Focus
                                    </Typography>
                                </Stack>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.2 }}
                            >
                                <Typography
                                    textAlign={{ xs: 'center', md: 'left' }}
                                    color="text.primary"
                                    variant="body1"
                                    sx={{ fontSize: { xs: '0.8rem', md: '1rem' }, paddingY: '10px', width: { xs: '100%', md: '50%' } }}
                                >
                                    The project intends to utilize the installation of One Wall Mural using AIR-INK© at an iconic/strategic
                                    location within each of the 36 states of the Nigerian Federation, to accentuate the problem of poor air
                                    quality with the view to drive local & National conversations aimed at positively influencing policy
                                    actions on improved air quality in Nigeria. AIR-INK is a proprietary brand of ink and composites
                                    products made by condensing carbon-based gaseous effluents generated by air pollution due to incomplete
                                    combustion of fossil fuels. This is a technology innovation that attempt to reverse the poor air
                                    quality.
                                </Typography>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <HeaderImage src={Hero2} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default HeaderSection;
