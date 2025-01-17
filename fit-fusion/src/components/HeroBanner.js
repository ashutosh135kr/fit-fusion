import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImg from '../assets/images/banner5.jpg'

const HeroBanner = () =>
(
    <Box sx={{
        mt: { lg: '100px', xs: '70px' },
        ml: { sm: '50px', xs: '40px' }
    }} p="20px">
        <Typography color="#ff2625" fontWeight="600" fontSize="26px">
            Fit Fusion
        </Typography>
        <Typography fontWeight={700}
            sx={{ fontSize: { lg: '44px', xs: '40px' } }}
            mb='20px' mt='25px'
        >
            Commit, Sweat <br /> And Transform
        </Typography>
        <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb={4}>
            Check out the most effective exercises personalized to you
        </Typography>
        <Stack>
            <a href="#exercises" style={{ marginTop: '20px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
        </Stack>
        <Typography fontWeight={600}
            color='#ff2625'
            sx={{
                opacity: 0.1,
                display: { lg: 'block', xs: 'none' }
            }}
            fontSize="200px"
        >
            Exercise
        </Typography>

        <img src={HeroBannerImg} alt="banner" className='hero-banner-img' />

    </Box>
);

export default HeroBanner;