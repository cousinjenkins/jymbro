import React from 'react'
import { Box, Typography, Button } from '@mui/material';
// import SantaImage from '../assets/images/santa.png'
const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px' }

    }} position="relative" p="20px">
        {/* <Typography color="green" fontWeight={700}
        sx={{ fontSize: { lg: '22px', xs:'30px'}}} mb={3}
        >
            Merry <br/> Fitmass <br/> and <br/> a <br/> Happy <br/> New <br/> Rear.
 </Typography> */}
        {/* <Button variant="contained" color="success" href='#exercises'>Search Exercise</Button> */}
        {/* <img src={SantaImage} alt="banner" className='santa-img' />   */}
    </Box>
  )
}

export default HeroBanner
// typography is text element with additional styles
//santa image still needs styling.