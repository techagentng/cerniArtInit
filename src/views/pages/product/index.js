import React, { useState, useEffect } from 'react';
import { Typography, Button, Box, Grid, Card, CardMedia, CardContent, Modal, IconButton, CircularProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, setCartOpen, incrementItem, decrementItem, removeFromCart } from 'store/slices/cartslice';
import { openSnackbar } from 'store/slices/snackbar';
import CloseIcon from '@mui/icons-material/Close';
import AppBar from 'ui-component/extended/AppBar';
import FormData1 from 'ui-component/form';
import Footer from 'ui-component/footer';
import { Link } from 'react-router-dom';
const Products = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);
    const [quantity] = useState(1);

    const relatedProducts = [
        { id: 1, name: 'Product 1', price: 49.99, image: '/path-to-image1.jpg' },
        { id: 2, name: 'Product 2', price: 59.99, image: '/path-to-image2.jpg' },
        { id: 3, name: 'Product 3', price: 69.99, image: '/path-to-image3.jpg' },
        { id: 4, name: 'Product 4', price: 79.99, image: '/path-to-image4.jpg' },
        { id: 5, name: 'Product 5', price: 89.99, image: '/path-to-image5.jpg' },
        { id: 6, name: 'Product 5', price: 89.99, image: '/path-to-image5.jpg' }
    ];

    const [isAddedToCart, setIsAddedToCart] = useState({});
    const [loading, setLoading] = useState({}); // Track loading state for each product

    useEffect(() => {
        const updatedAddedToCart = {};
        cartItems.forEach((item) => {
            updatedAddedToCart[item.id] = true;
        });
        setIsAddedToCart(updatedAddedToCart);
    }, [cartItems]);

    const handleAddToCart = (product) => {
        setLoading((prevState) => ({
            ...prevState,
            [product.id]: true // Set loading state for this product
        }));

        // Simulate an async operation (e.g., API call)
        setTimeout(() => {
            dispatch(addToCart({ ...product, quantity }));
            dispatch(
                openSnackbar({
                    open: true,
                    message: `${product.name} added to cart`,
                    variant: 'success'
                })
            );
            setIsAddedToCart((prevState) => ({
                ...prevState,
                [product.id]: true
            }));
            setLoading((prevState) => ({
                ...prevState,
                [product.id]: false // Reset loading state after adding to cart
            }));
        }, 1000); // Simulate a 1-second delay
    };

    const handleCloseForm = () => dispatch(setFormOpen(false));

    const handleProductClick = (product) => {
        window.location.href = `/products/single/${product.id}`;
    };

    return (
        <>
            <AppBar open={isCartOpen} setOpen={() => dispatch(setCartOpen(!isCartOpen))} />
            <Box sx={{ padding: '2rem 1rem', maxWidth: '1500px', margin: '0 auto' }}>
                <Typography
                    variant="h1"
                    sx={{ textAlign: 'left', margin: '0rem 0 2rem', fontFamily: 'DaxlinePro', fontSize: { md: '1.5rem' } }}
                >
                    Our Products
                </Typography>
                <Grid container spacing={4}>
                    {relatedProducts.map((product) => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <Card sx={{ boxShadow: 2 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={product.image}
                                    alt={product.name}
                                    onClick={() => handleProductClick(product)}
                                    sx={{ cursor: 'pointer' }}
                                />
                                <CardContent>
                                    <Typography variant="h6" sx={{ marginBottom: '0.5rem' }}>
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body1" color="primary" sx={{ marginBottom: '1rem' }}>
                                        ${product.price}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        sx={{ color: 'white' }}
                                        fullWidth
                                        onClick={() => handleAddToCart(product)}
                                        disabled={loading[product.id] || isAddedToCart[product.id]} // Disable button while loading or after adding
                                    >
                                        {loading[product.id] ? (
                                            <CircularProgress size={24} sx={{ color: 'white' }} /> // Show loader while loading
                                        ) : isAddedToCart[product.id] ? (
                                            'Added to Cart' // Show text after adding
                                        ) : (
                                            'Add to Cart' // Default text
                                        )}
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Modal open={isCartOpen} onClose={handleCloseForm}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '100%',
                            height: '100%',
                            maxWidth: '406px',
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 2,
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                            <Typography variant="h4">Cart Items</Typography>
                            <IconButton onClick={handleCloseCart}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <Box key={item.id} sx={{ display: 'flex', mb: 2 }}>
                                    <Box
                                        sx={{
                                            width: '30%',
                                            height: '132px',
                                            backgroundImage: `url(${item.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    />
                                    <Box sx={{ width: '70%', pl: 2, display: 'flex', flexDirection: 'column' }}>
                                        <Typography variant="h6">{item.name}</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            ${item.price}
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <IconButton onClick={() => dispatch(decrementItem(item.id))}>-</IconButton>
                                            <Typography variant="body1">{item.quantity}</Typography>
                                            <IconButton onClick={() => dispatch(incrementItem(item.id))}>+</IconButton>
                                        </Box>
                                        <Button
                                            variant="outlined"
                                            sx={{ mt: 2, bgcolor: '#ffebed', color: '#ef9ca8', textTransform: 'none' }}
                                            onClick={() => dispatch(removeFromCart(item.id))}
                                        >
                                            Remove
                                        </Button>
                                    </Box>
                                </Box>
                            ))
                        ) : (
                            <Typography>No items in the cart</Typography>
                        )}
                        <Button
                            component={Link}
                            to="/products/checkout"
                            variant="contained"
                            fullWidth
                            sx={{ mt: 2, py: 1.5, color: 'white' }}
                        >
                            Checkout
                        </Button>
                    </Box>
                </Modal>
            </Box>
            <FormData1 />
            <Footer />
        </>
    );
};

export default Products;