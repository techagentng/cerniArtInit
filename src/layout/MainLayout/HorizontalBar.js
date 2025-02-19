import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { AppBar, Box, Container, useScrollTrigger } from '@mui/material';
import MenuList from './MenuList';
// import useConfig from 'hooks/useConfig';

// Scroll effect for AppBar
function ElevationScroll({ children, window }) {
    const theme = useTheme();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined
    });

    theme.shadows[4] = theme.customShadows.z1;

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0
    });
}

// Custom AppBar
const CustomAppBar = () => {
    const theme = useTheme();
    // const { container } = useConfig();

    return (
        <ElevationScroll>
            <AppBar
                sx={{
                    top: 71,
                    bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'background.paper',
                    width: '100vw', // Ensure full width
                    minHeight: 72, // Allow content to fit naturally
                    display: 'flex',
                    justifyContent: 'center',
                    borderTop: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.grey[300] + 98}`,
                    zIndex: 1098
                }}
            >
                <Container maxWidth="xl"> {/* Wider layout */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <MenuList />
                    </Box>
                </Container>
            </AppBar>
        </ElevationScroll>
    );
};

export default CustomAppBar;
