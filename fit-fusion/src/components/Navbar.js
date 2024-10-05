import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const maxWidth = isMobile ? 80 : 124; // Set different max widths for mobile and larger screens
    const maxHeight = isMobile ? 80 : 124;
    return (
        <Stack
            direction="row"
            justifyContent="space-around"

            sx={{ gap: { md: '122px', xs: '30px', sm: '80px' }, mt: { sm: '22px', xs: '12px' }, justifyContent: 'none', alignItems: 'center' }} px='20px'
        >
            <Link to="/">
                <img src={Logo} alt="logo" style={{ width: '124px', height: '124px', margin: '0 20px' }} />
            </Link>

            <Stack
                sx={{ gap: { sm: '40px', xs: '20px' }, fontSize: { sm: '24px', xs: '20px' } }}
                direction="row"
                // gap="40px"

                fontFamily="Alegreya"
                alignItems="flex-end"
            >
                <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
                <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }} > Exercises</a>
            </Stack>
        </Stack >
    );
};

export default Navbar;