import React from 'react'
import { Link } from 'react-router-dom'; // link component
import { Stack } from '@mui/material'; // Stack component manages layout of immediate children along the vertical or horizontal axis with optional and/or dividers between each child. For the differnet body parts eg chest.
import Logo from '../assets/images/jymbro-low-resolution-logo-black-on-white-background.png'

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: {sm: '122px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none'}} px="20px"> 
        <Link to="/"><img src={Logo} alt="logo" style={{width: '250px', height: '200px', margin: '0 50px 0 0px'}} /></Link>   
        <Stack 
        direction="row" 
        gap="200px" 
        fontSize="24px" 
        alignItems="flex-end"
        >
            <Link to="/" style={{ textDecoration: 'none', color: "#3A1212", margin: '0 50px 0 50px'}}>Home</Link>
            <a href="#exercises" style={{textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid black', margin: '0 50px 0 50px'}}>Exercises</a>
        </Stack>
    </Stack>
  )
}
// bicep logo
export default Navbar
// mt = margin-top 
// px = parting x-axis