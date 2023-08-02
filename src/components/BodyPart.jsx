import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym-house.png'


const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        <Stack 
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
            bodyTop: bodyPart === item ? '4px solid #ff2625' : '',
            backgroundColor: '#fff',
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '280px',
            cursor: 'pointer', 
            gap: '47px'
            }} 
            onClick={() => {
                setBodyPart(item); //issue
                window.scrollTo({top: 1800, left: 100, behavior: 'smooth'}) 
            }}
        >
            <img src={Icon} alt="dumbbell" style={{ width: '70px', height: '70px'}} />
            <Typography fontSize="24px" fontWeight="bold" color="#fbc02d" textTransform="capitalize">{item}</Typography>
        </Stack>
    );
};

export default BodyPart;