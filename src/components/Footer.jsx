import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/jymbro-low-resolution-logo-white-on-black-background.png'
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
// Import other social media icons as needed


const Footer = () => (
  <Box mt="80px" bgcolor="black">
    <Stack gap="0" sx={{ alignItems: 'center' }} flexWrap="wrap" px="0" pt="0">
      <img src={Logo} alt="logo" style={{ width: '250px', height: '200px' }} />
    </Stack>
    <Typography color='white' variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="0" textAlign="left" pb="0">hi</Typography>
  </Box>
);

export default Footer;