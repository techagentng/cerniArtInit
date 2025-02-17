import { useTheme } from '@mui/material/styles';
// import logoDark from 'assets/images/logo-dark.png';
import logo from './sanni-top.png';

const Logo = () => {
    const theme = useTheme();

    return <img src={theme.palette.mode === 'dark' ? logo : logo} alt="Logo" width="100" />;
};

export default Logo;
