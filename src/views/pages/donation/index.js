import {
    Paper,

} from '@mui/material';
import { styled } from '@mui/material/styles';
// import logo from 'assets/images/WhatsApp Image 2025-01-22 at 5.28.png';

// Styled Paper for the main container
const Jumbo = styled(Paper)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff', // White background to match the document
    margin: '0 auto',
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: 'none' // Remove shadow for a cleaner look
});

// Button styling with orange accent from the document
const ButtonSX = {
    borderRadius: 4,
    backgroundColor: '#FF6200', // Fixed typo from '#FF6200y' to '#FF6200'
    color: 'white',
    padding: '12px 30px',
    width: '100%',
    marginTop: '20px',
    '&:hover': {
        backgroundColor: '#e05700'
    }
};

