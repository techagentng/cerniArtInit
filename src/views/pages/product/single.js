import React, { useState } from 'react';
import { Typography, Grid, Box, Button, TextField } from '@mui/material';
import Productimg from './Product.png';

const ProductPage = () => {
    const [quantity, setQuantity] = useState(1);
    const [isAddedToCart, setIsAddedToCart] = useState({});

    const selectedProduct = { id: 4, name: 'Product Name', price: 99.99 };

    const handleQuantityChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (value > 0) setQuantity(value);
    };

    const handleAddToCart = (product) => {
        setIsAddedToCart((prev) => ({ ...prev, [product.id]: true }));
        // Add cart logic here
    };

    return (
        <Box sx={{ padding: '2rem' }}>
            <Typography variant="h1" sx={{ textAlign: 'left', marginBottom: '2rem', fontFamily: 'DaxlinePro' }}>
                Our Products
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ width: '100%', height: '100%', display: 'flex' }}>
                        <img
                            src={Productimg}
                            alt="Product"
                            style={{
                                width: '100%',
                                height: '60%',
                                objectFit: 'cover'
                            }}
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} md={6} sx={{ marginTop: { md: '1px', xs: '-153px' } }}>
                    <Typography variant="h2" sx={{ fontFamily: 'DaxlinePro' }}>
                        {selectedProduct.name}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ marginBottom: '1rem', fontSize: { xs: '1rem', md: '1.2rem', fontFamily: 'DaxlinePro' } }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis
                        cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    </Typography>

                    <Grid container alignItems="center" sx={{ marginBottom: '1rem', fontFamily: 'DaxlinePro' }}>
                        <Grid item xs={6}>
                            <Typography variant="h2" color="primary">
                                ${selectedProduct.price}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <TextField
                                type="number"
                                value={quantity}
                                onChange={handleQuantityChange}
                                inputProps={{ min: 1 }}
                                size="small"
                                sx={{ width: '80px' }}
                            />
                        </Grid>
                    </Grid>

                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            marginBottom: '1rem',
                            textTransform: 'none',
                            backgroundColor: '#ff6c78',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#e65b69',
                                color: 'white'
                            }
                        }}
                        onClick={() => handleAddToCart(selectedProduct)}
                    >
                        {isAddedToCart[selectedProduct.id] ? 'Added to Cart' : 'Add to Cart'}
                    </Button>

                    <Typography
                        variant="h2"
                        sx={{ fontFamily: 'DaxlinePro', fontWeight: 600, marginBottom: '1rem', marginTop: { md: '60px', xs: 3 } }}
                    >
                        Description
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{ marginBottom: '1rem', fontSize: { xs: '1rem', md: '1.2rem', fontFamily: 'DaxlinePro' } }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis
                        cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductPage;
