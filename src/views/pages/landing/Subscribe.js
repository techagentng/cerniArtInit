import { Button, Container, Grid, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFormOpen } from 'store/slices/cartslice'; // Adjust the path based on your project structure
import FadeInWhenVisible from './Animation2';
import { Link } from 'react-router-dom';
const Jumbo = styled(Paper)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A4833',
    margin: '0 auto',
    width: '100%',
    height: 'auto',
    borderRadius: '20px'
});

const ButtonSX = {
    borderRadius: 2,
    backgroundColor: '#ff6b77',
    color: 'white',
    padding: { xs: '16px 60px', sm: '12px 80px', md: '12px 130px' },
    fontSize: { xs: '1.1rem', sm: '1rem', md: '1rem' },
    fontWeight: { xs: 'bold', sm: 'normal', md: 'normal' },
    width: '100%',
    marginTop: '20px'
};

const Subscribe = () => {
    const dispatch = useDispatch();

    const handleFormClick = () => {
        dispatch(setFormOpen(true));
    };

    return (
        <Container sx={{ paddingY: 15 }}>
            <FadeInWhenVisible animationType="fadeIn" delay={0.3}>
                <Stack spacing={2} alignItems="center" sx={{ width: '100%' }}>
                    <Link>
                        <Button variant="contained" color="success" sx={ButtonSX} onClick={handleFormClick}>
                            Get Involved
                        </Button>
                    </Link>
                </Stack>
            </FadeInWhenVisible>
        </Container>
    );
};

export default Subscribe;
