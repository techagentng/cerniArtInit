import PropTypes from 'prop-types';
import { cloneElement, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import { useSelector, useDispatch } from 'react-redux';
// import { setCartOpen } from 'store/slices/cartslice';
import { setFormOpen } from 'store/slices/cartslice';
import Line from './line.png';

// Material-UI
import { useTheme } from '@mui/material/styles';
import {
    AppBar as MuiAppBar,
    Box,
    Button,
    Container,
    Drawer,
    IconButton,
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    // Badge,
    Toolbar,
    Typography,
    useScrollTrigger
} from '@mui/material';

// Icons
import { IconBook, IconCreditCard, IconDashboard, IconHome2 } from '@tabler/icons-react';
import MenuIcon from '@mui/icons-material/Menu';

// Elevation Scroll
function ElevationScroll({ children, window }) {
    const theme = useTheme();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window
    });

    return cloneElement(children, {
        elevation: trigger ? 1 : 0,
        style: {
            backgroundColor: theme.palette.mode === 'dark' && trigger ? theme.palette.dark[800] : theme.palette.background.default,
            color: theme.palette.text.dark
        }
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.node,
    window: PropTypes.object
};

// ==============================|| APP BAR COMPONENT ||============================== //

const AppBar = ({ ...others }) => {
    const [drawerToggle, setDrawerToggle] = useState(false);
    // const dispatch = useDispatch();

    // const totalItems = useSelector((state) => state.cart.totalItems);

    // const handleCartClick = () => {
    //     dispatch(setCartOpen(true));
    // };

    const handleFormClick = () => {
        dispatch(setFormOpen(true));
    };

    const drawerToggler = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerToggle(open);
    };

    return (
        <ElevationScroll {...others}>
            <MuiAppBar sx={{ width: '100vw' }}>
                <Container maxWidth="xl">
                    <Toolbar sx={{ py: 2, px: '0 !important', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        {/* Left Section */}
                        <Typography component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                            {/* <Logo /> */}
                        </Typography>

                        {/* Navigation Menu */}
                        <Stack
                            direction="row"
                            sx={{
                                display: { xs: 'none', sm: 'flex' },
                                flexWrap: 'nowrap', // Ensures items stay in one row
                                alignItems: 'center',
                                gap: { xs: 1.5, md: 2.5 },
                                width: 'auto',
                                minWidth: 0 // Prevents unintended wrapping
                            }}
                        >
                            <Button color="inherit" component={Link} href="/" target="_blank">
                                Home
                            </Button>
                            <Button color="inherit" component={RouterLink} to="/services" target="_blank">
                                Projects
                            </Button>
                            {/* <Button color="inherit" component={RouterLink} to="/products" target="_blank">
                                Merchandise
                            </Button> */}
                            <Button color="inherit" component={Link} href="/about" target="_blank">
                                About
                            </Button>

                            {/* Decorative Line */}
                            <Box
                                component="img"
                                src={Line}
                                alt="line"
                                sx={{
                                    height: 'auto',
                                    maxWidth: '100%',
                                    objectFit: 'contain'
                                }}
                            />

                            {/* Cart Button */}
                            {/* <Button
                                variant="contained"
                                sx={{
                                    fontSize: '1rem',
                                    color: '#ff6c78',
                                    backgroundColor: '#ffebed',
                                    '&:hover': {
                                        backgroundColor: '#ff6c78',
                                        color: '#fff'
                                    },
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    whiteSpace: 'nowrap'
                                }}
                                onClick={handleCartClick}
                            >
                                <Typography
                                    sx={{
                                        marginRight: 1,
                                        color: 'black',
                                        fontFamily: 'DaxlinePro',
                                        fontSize: { xs: '1rem', md: '1rem' }
                                    }}
                                >
                                    CART
                                </Typography>
                                {totalItems > 0 ? (
                                    <Badge badgeContent={totalItems} color="error">
                                        <ShoppingCartOutlinedIcon sx={{ fontSize: '1.5rem' }} />
                                    </Badge>
                                ) : (
                                    <ShoppingCartOutlinedIcon sx={{ fontSize: '1.5rem' }} />
                                )}
                            </Button> */}

                            {/* Get Involved Button */}
                            <Button
                                component={Link}
                                href="#"
                                disableElevation
                                variant="contained"
                                color="secondary"
                                onClick={handleFormClick}
                            >
                                Get involved
                            </Button>
                        </Stack>

                        {/* Mobile Menu Icon */}
                        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                            <IconButton color="inherit" onClick={drawerToggler(true)} size="large">
                                <MenuIcon />
                            </IconButton>
                            <Drawer anchor="top" open={drawerToggle} onClose={drawerToggler(false)}>
                                {drawerToggle && (
                                    <Box
                                        sx={{ width: 'auto' }}
                                        role="presentation"
                                        onClick={drawerToggler(false)}
                                        onKeyDown={drawerToggler(false)}
                                    >
                                        <List>
                                            <Link style={{ textDecoration: 'none' }} href="#" target="_blank">
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconHome2 />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Home" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} href="/login" target="_blank">
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconDashboard />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Dashboard" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} href="#" target="_blank">
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconBook />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Documentation" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} href="#" target="_blank">
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconCreditCard />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Get Involved" />
                                                </ListItemButton>
                                            </Link>
                                        </List>
                                    </Box>
                                )}
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </MuiAppBar>
        </ElevationScroll>
    );
};

export default AppBar;
