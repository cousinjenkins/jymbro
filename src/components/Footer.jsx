import React from 'react';
import { Box, Stack, Button } from '@mui/material';
import Logo from '../assets/images/jymbro-low-resolution-logo-white-on-black-background.png'
import Instagram from '../assets/images/instaaa.png'
import Twitter from '../assets/images/twitterr.png'
import TikTok from '../assets/images/tiktok.png'


const Footer = () => (
  <Box mt="70px" bgcolor="black">
    <Stack sx={{ alignItems: 'center' }} >
      <img src={Logo} alt="logo" style={{ width: '230px', height: '180px' }} />
    </Stack>
    <Button className='social-media'>
    <a href="https://www.instagram.com/leehsienloong/?hl=en">
    <img src={Instagram} alt="instagram" style={{ width: '90px', height: '80px'}} />
  </a>
    </Button>
    <Button>
    <a href="https://twitter.com/finkd?lang=en">
    <img src={Twitter} alt="twitter" style={{ width: '90px', height: '80px'}} />
  </a>
    </Button>
    <Button>
  <a href="https://www.tiktok.com/@gymshark?lang=en">
    <img src={TikTok} alt="tiktok" style={{ width: '90px', height: '80px'}} />
  </a>
</Button>

  

  </Box>
);

export default Footer;